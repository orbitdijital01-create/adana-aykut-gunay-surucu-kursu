---
name: driving-school-catalog
description: >-
  Provides complete domain knowledge, MEB regulations, age requirements, vehicle types,
  and curriculum details for all 10 services offered by Aykut Günay Sürücü Kursu
  (A1, A2 Manuel, A2 Otomatik, B Manuel, B Otomatik, B Engelli, C, CE, D, Psikoteknik).
  Use this skill when adding, editing, or displaying course cards, comparison tables,
  enrollment forms, or FAQ items.
---

# Aykut Günay Sürücü Kursu — Service & License Catalog Skill

This skill maintains the authoritative list of the **10 services** provided by **Aykut Günay Sürücü Kursu** and ensures all course descriptions, filters, modals, and enrollment forms stay synchronized.

## Official Service List (10 Core Services)

1. **A1 Sınıfı Ehliyet** — Silindir hacmi 125 cc'ye ve gücü 11 kW'a kadar olan motosikletler (Yaş sınırı: 16).
2. **A2 Sınıfı Ehliyet (Manuel)** — Gücü 35 kW'ı (47 beygir) geçmeyen vitesli motosikletler (Yaş sınırı: 18).
3. **A2 Sınıfı Ehliyet (Otomatik)** — Gücü 35 kW'ı geçmeyen otomatik / maxi scooter motosikletler (Yaş sınırı: 18).
4. **B Sınıfı Ehliyet (Manuel)** — Manuel ve otomatik vitesli tüm otomobil ve kamyonetleri kullanabilme yetkisi (Yaş sınırı: 18).
5. **B Sınıfı Ehliyet (Otomatik)** — Sadece otomatik vitesli otomobil ve kamyonetler için konforlu ve hızlı eğitim (Yaş sınırı: 18).
6. **B Sınıfı Engelli Ehliyeti** — Özel tertibatlı ve otomatik vitesli araçlarla engelli bireylere özel birebir direksiyon eğitimi (Yaş sınırı: 18).
7. **C Sınıfı Ehliyet** — Kamyon ve çekici türü ticari ağır vasıta araçları için profesyonel sürücü eğitimi (Yaş sınırı: 21, en az B sınıfı şartı).
8. **CE Sınıfı Ehliyet** — Tır ve römorklu ağır ticari çekici araçlar için ileri seviye manevra ve sürüş eğitimi (Yaş sınırı: 21, C sınıfı şartı).
9. **D Sınıfı Ehliyet** — Otobüs ve yolcu taşımacılığı araçları için kurumsal sürüş eğitimi (Yaş sınırı: 24, en az B sınıfı şartı).
10. **Psikoteknik Değerlendirme** — Ticari araç sürücüleri ve ehliyet iadesi süreçleri için Sağlık Bakanlığı onaylı simülatör eşliğinde 1 saatlik psikoteknik test ve raporlama hizmeti.

## Data Reference

Read [license-classes.json](./references/license-classes.json) for structured specifications (minimum age, transmission, lesson hours, required documents, and scope) when rendering interactive cards or modals.

## Validation Rules

- All 10 services must be selectable in:
  1. The **Interactive Course Offering** section (`#egitimler`)
  2. The **Our Range of Services** dark showcase carousel/grid (`#hizmetler`)
  3. The **Quick Enrollment / Callback Form** dropdown (`#basvuru-formu`)
  4. The **Footer Services** list
