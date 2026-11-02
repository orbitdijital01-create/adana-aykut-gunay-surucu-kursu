---
name: brand-design-system
description: >-
  Defines the corporate visual identity, logo color palette, typography, multi-page layout
  architecture, and official Adana/Yüreğir contact information for Özel Aykut Günay Sürücü Kursu.
  Use this skill whenever creating, styling, or updating pages, sections, or UI components.
---

# Özel Aykut Günay Sürücü Kursu — Brand & Multi-Page Design System Skill

This skill enforces the corporate visual identity derived from the official **Aykut Günay Sürücü Kursu** logo, the 5 reference page templates, and the official Google Business profile.

## 1. Official Corporate Identity & Contact Information

- **Official Name:** Özel Aykut Günay Sürücü Kursu
- **Google Rating:** 4,9 ★ (36+ Google Yorumu)
- **Address:** Selahattin Eyyubi Mahallesi, Şehit Jandarma Er Mustafa Göksal Caddesi, 01240 Yüreğir / Adana
- **Phone / WhatsApp:** `0552 555 33 94` (`tel:+905525553394` / `https://wa.me/905525553394`)
- **Opening Hours:** Pazartesi - Cumartesi: 08:30 - 19:30 (Pazar: Sınav & Direksiyon Programı)
- **City / District:** Yüreğir / Adana

## 2. Corporate Color Palette (Derived from Logo)

| Token | Hex | Usage |
| :--- | :--- | :--- |
| `--brand-green` | `#689738` | Primary brand accent, CTA buttons, active tabs, badges, icon highlights |
| `--brand-green-light` | `#7CB342` | Button hover states, glowing highlights, progress indicators |
| `--brand-green-soft` | `#EEF5E6` | Light section backgrounds, pill badges, icon containers |
| `--brand-navy` | `#0D3B5E` | Primary corporate navy for headings, secondary buttons |
| `--brand-navy-dark` | `#08253C` | Dark sections (Services showcase, Commitment banner, Map panel, Footer, Topbar) |
| `--brand-navy-surface` | `#10324E` | Elevated cards inside dark navy sections |
| `--surface-sage` | `#EFF4F0` | Alternating soft sage-gray section backgrounds |

For CSS custom properties, see [color-tokens.md](./references/color-tokens.md).

## 3. Multi-Page Architecture (5 Reference Pages)

All pages share the dark navy Top Utility Bar, Sticky Main Header (with logo, navigation links, search input, and angled double-chevron `Hemen Kayıt Ol >>` CTA), right-side floating scroll-up (`^`) buttons, and Corporate Footer:

1. **`index.html` (Ana Sayfa)**:
   - 11-section home landing page (Hero slider, About with `16+` vertical badge, Interactive Course Offering selector, Dark Navy Services Carousel, 4-Step Process, Steering Wheel Hotspot Banner, Experienced Team, Highway Quick Enrollment Form, Blog with vertical dates, Testimonials, Footer).
2. **`hakkimizda.html` (Hakkımızda — Reference Page: "About Company")**:
   - Inner page hero banner with breadcrumb (`Ana Sayfa > Hakkımızda`).
   - **Experience, Quality & Trust** section with portrait, `4.9★` gold badge, green ring + training vehicle cutout, and 2x2 checkmark list.
   - **Our Commitment to Excellence** dark navy section with Mission/Vision/Values vertical icon tabs and winding road `"BAŞARI"` photo.
   - **Reasons to Choose Us** center steering wheel hub with 4 surrounding feature callouts.
   - **4-Column Dark Counter Strip** (`16+` Yıl, `12B+` Mezun, `4.9★` Google Puanı, `10` Ehliyet & Hizmet).
   - **Our Experienced Team** 3-column horizontal instructor cards.
   - **Recognized Credentials** 2-column section with happy learners photo + framed official MEB & Kurumsal Kalite Sertifikası.
3. **`hizmetlerimiz.html` (Hizmetlerimiz — Reference Page: "Services Modern")**:
   - Inner page hero banner with breadcrumb (`Ana Sayfa > Hizmetlerimiz`).
   - **Guide to Our Professional Services** 2-column intro with vertical `"HİZMET KAPSAMIMIZ"` text, 4 green checkmark items, and giant subtle `"HİZMETLERİMİZ"` watermark with center scroll arrow.
   - **Services Modern Grid** featuring all **10 official services** with top diagonal stripe `/////////`, photo with slanted green/navy corner icon badge, description, and detail modal trigger.
   - **Reasons to Choose Us** 4-column white cards with top shield pattern and bottom-right line-art watermark icons.
4. **`galeri.html` (Eğitim Parkuru & Galeri — Reference Page: "2 Columns Grid")**:
   - Inner page hero banner with breadcrumb (`Ana Sayfa > Eğitim Parkuru & Galeri`).
   - Filterable category bar (`TÜMÜ`, `OTOMOBİL & ENGELLİ`, `MOTOSİKLET A1-A2`, `AĞIR VASITA C-CE-D`, `PSİKOTEKNİK & SINIFLAR`) with item counts.
   - **2-Column Large Visual Grid** with hover overlay, green category label, white title, and top-right zoom (`🔍`) lightbox button.
5. **`iletisim.html` (İletişim — Reference Page: "Contact")**:
   - Inner page hero banner with breadcrumb (`Ana Sayfa > İletişim`).
   - **Need Help? Contact Us!** 2x2 grid of horizontal contact cards with vertical rotated label strip (`İLETİŞİM`, `ADRES`, `SAATLER`, `S.S.S.`) + Social Connect row.
   - **Split Map & Dark Navy Location Panel** showing `Selahattin Eyyubi Mah. Şehit Jandarma Er Mustafa Göksal Cad. 01240 Yüreğir/Adana`, floating pin card with `0552 555 33 94`, and location tabs.
   - **Send Us a Message Now** elevated card with left-column stacked inputs (Ad Soyad, E-Posta, Telefon, Ehliyet Sınıfı/Konu) and right-column full-height Mesaj textarea + dark navy submit button.
