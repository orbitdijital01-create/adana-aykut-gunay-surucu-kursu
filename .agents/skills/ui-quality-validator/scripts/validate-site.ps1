$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "=== Ozel Aykut Gunay Surucu Kursu Multi-Page & Responsive Validator ===" -ForegroundColor Cyan

$requiredFiles = @(
    "index.html",
    "hakkimizda.html",
    "hizmetlerimiz.html",
    "galeri.html",
    "iletisim.html",
    "assets/css/style.css",
    "assets/js/app.js",
    "assets/images/logo.jpg",
    ".agents/skills/brand-design-system/SKILL.md",
    ".agents/skills/driving-school-catalog/SKILL.md",
    ".agents/skills/ui-quality-validator/SKILL.md"
)

foreach ($file in $requiredFiles) {
    if (-not (Test-Path $file)) {
        Write-Error "Missing required file: $file"
    } else {
        Write-Host "[OK] Found $file" -ForegroundColor Green
    }
}

$htmlPages = @("index.html", "hakkimizda.html", "hizmetlerimiz.html", "galeri.html", "iletisim.html")
foreach ($page in $htmlPages) {
    $content = [System.IO.File]::ReadAllText((Resolve-Path $page), [System.Text.Encoding]::UTF8)
    if ($content.Contains("header-search") -or $content.Contains("quickSearchInput")) {
        Write-Error "Page $page still contains removed header search input!"
    }
    if (-not ($content.Contains("floating-contact-widget") -and $content.Contains("whatsapp-btn") -and $content.Contains("phone-btn"))) {
        Write-Error "Page $page is missing the floating WhatsApp & Phone Call widget!"
    }
    if (-not $content.Contains("btn-header-cta")) {
        Write-Error "Page $page is missing the new user-focused btn-header-cta button!"
    }
    if (-not $content.Contains("0552 555 33 94")) {
        Write-Error "Page $page is missing official phone number 0552 555 33 94"
    }
    if (-not ($content.Contains("Selahattin Eyyubi") -and $content.Contains("01240") -and $content.Contains("Adana"))) {
        Write-Error "Page $page is missing official address Selahattin Eyyubi / 01240 / Adana"
    }
    Write-Host "[OK] Header, Floating WhatsApp/Phone Widget & Contact verified in $page" -ForegroundColor Green
}

$indexHtml = [System.IO.File]::ReadAllText((Resolve-Path "index.html"), [System.Text.Encoding]::UTF8)
$servicesHtml = [System.IO.File]::ReadAllText((Resolve-Path "hizmetlerimiz.html"), [System.Text.Encoding]::UTF8)
$js = [System.IO.File]::ReadAllText((Resolve-Path "assets/js/app.js"), [System.Text.Encoding]::UTF8)
$catalogJson = [System.IO.File]::ReadAllText((Resolve-Path ".agents/skills/driving-school-catalog/references/license-classes.json"), [System.Text.Encoding]::UTF8) | ConvertFrom-Json

foreach ($item in $catalogJson) {
    $serviceTitle = $item.title
    if (-not ($indexHtml.Contains($serviceTitle) -and $servicesHtml.Contains($serviceTitle) -and $js.Contains($serviceTitle))) {
        Write-Error "Missing required service in index.html, hizmetlerimiz.html, or app.js: $serviceTitle"
    } else {
        Write-Host "[OK] Verified service across pages & JS: $serviceTitle" -ForegroundColor Green
    }
}

Write-Host "All multi-page, header, floating widget & responsive checks passed!" -ForegroundColor Cyan
