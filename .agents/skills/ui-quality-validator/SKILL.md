---
name: ui-quality-validator
description: >-
  Validates the structural completeness, corporate color tokens, 10 driving school services,
  official Yüreğir/Adana contact details (0552 555 33 94), and all 5 pages of the
  Özel Aykut Günay Sürücü Kursu website. Use this skill after building or modifying the website.
---

# UI & Catalog Quality Validator Skill

Use this skill to verify that all 5 pages of the website meet visual, structural, and functional requirements.

## Verification Checklist

1. **Automated Multi-Page & Contact Integrity Script**:
   Run the validation script to verify all 5 HTML pages, CSS/JS assets, official Yüreğir/Adana contact details (`0552 555 33 94`, `Selahattin Eyyubi`), and all 10 service items exist:
   ```powershell
   powershell -ExecutionPolicy Bypass -File ".\.agents\skills\ui-quality-validator\scripts\validate-site.ps1"
   ```
2. **5-Page Completeness**:
   - `index.html` (Ana Sayfa — 11-section home layout)
   - `hakkimizda.html` (Hakkımızda — About Company layout)
   - `hizmetlerimiz.html` (Hizmetlerimiz — Services Modern layout with all 10 services)
   - `galeri.html` (Eğitim & Galeri — 2 Columns Grid filterable layout)
   - `iletisim.html` (İletişim — Contact layout with Yüreğir/Adana map & 2x2 cards)
