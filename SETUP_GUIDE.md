# Dripsta Website — Kurulum & Deploy Rehberi

Bu dosya, Dripsta websitesini sıfırdan ayağa kaldırma, GitHub'a koyma, satın aldığın domain'e bağlama ve her `git push`'ta **otomatik deploy** yapacak şekilde kurma adımlarını içerir.

> Referans: `huggn website` projesiyle aynı teknik yapı (React + Vite + TypeScript + Tailwind). Tek fark: huggn'da manuel `npm run deploy` kullanılıyor, burada **GitHub Actions ile otomatik deploy** kuracağız.

---

## 0. Ön Hazırlık

İhtiyacın olan şeyler:
- **Node.js** (v18+) ve **npm** yüklü olsun → `node -v`
- **Git** yüklü olsun → `git -v`
- **GitHub hesabı** (zaten var)
- **Satın aldığın domain** (örn. `dripsta.app`) — DNS panelinin hangi sağlayıcıda olduğunu bil (Squarespace, Namecheap, GoDaddy, Cloudflare vs.)
- Dripsta için logo dosyası (square PNG, örn. `logo-square.png`)

---

## 1. Projeyi Oluştur (Lokal)

huggn'dan kopyalayıp Dripsta'ya çevireceğiz. Terminal:

```bash
cd "/Users/dorukcan/Desktop/Web Projects/Dripsta Website"

# huggn'ın dosyalarını kopyala (node_modules, dist, .git HARİÇ)
rsync -av \
  --exclude 'node_modules' \
  --exclude 'dist' \
  --exclude '.git' \
  --exclude '.env.local' \
  --exclude 'huggn-*.md' \
  "/Users/dorukcan/Desktop/Web Projects/huggn website/" \
  ./
```

Sonra şu dosyalarda içerik değişikliği yap:
- `package.json` → `"name": "dripsta-website"`
- `index.html` → title, meta description, OG tags, renkler (huggn → dripsta theme)
- `public/CNAME` → içeriği `dripsta.app` (veya senin domain) olacak şekilde düzenle
- `public/logo-square.png` → Dripsta logosu ile değiştir
- `App.tsx`, `components/Header.tsx`, `components/Footer.tsx`, `pages/*.tsx` → metinleri `Dripsta_Website_Content.md`'deki içeriklerle değiştir
- `README.md` → Dripsta için yeniden yaz

Bağımlılıkları kur ve test et:

```bash
npm install
npm run dev
# http://localhost:3000 açılır, görsel kontrol
```

---

## 2. GitHub Repo'sunu Aç

### 2a. GitHub'da repo oluştur
1. https://github.com/new adresine git
2. **Repository name:** `dripsta-website`
3. **Public** seç (GitHub Pages ücretsiz tier için public gerekli — private repolarda Pages sadece GitHub Pro/Team üyelerinde çalışır)
4. **README, .gitignore, license EKLEME** (lokaldeki dosyalar çakışmasın)
5. `Create repository` tıkla

### 2b. Lokal projeyi GitHub'a bağla

Terminal (proje klasöründe):

```bash
cd "/Users/dorukcan/Desktop/Web Projects/Dripsta Website"

# .gitignore kontrol et — node_modules ve dist ignore edilmiş olmalı (huggn'dan kopyalandıysa zaten var)
cat .gitignore

# Git başlat
git init
git branch -M main

# İlk commit
git add .
git commit -m "Initial Dripsta website"

# GitHub'a bağla — YOUR_USERNAME yerine kendi kullanıcı adını yaz
git remote add origin https://github.com/YOUR_USERNAME/dripsta-website.git
git push -u origin main
```

İlk push'ta GitHub kullanıcı adı/şifre (veya Personal Access Token) isteyebilir. PAT için: GitHub → Settings → Developer settings → Personal access tokens → Fine-grained → repo erişimi ver.

---

## 3. Otomatik Deploy — GitHub Actions Kur

huggn'da `npm run deploy` ile **manuel** deploy vardı. Biz **her push otomatik deploy** olsun istiyoruz.

### 3a. Vite config'e `base` ekle

**Custom domain kullanacaksan (`dripsta.app`):** `base` `'/'` olmalı (varsayılan, değişiklik gerekmez).

**Sadece `username.github.io/dripsta-website` kullanacaksan:** `vite.config.ts`'e `base: '/dripsta-website/'` eklemen gerekir. Custom domain varken ekleme.

### 3b. GitHub Actions workflow dosyasını oluştur

`.github/workflows/deploy.yml` dosyasını oluştur:

```bash
mkdir -p .github/workflows
```

Ardından `.github/workflows/deploy.yml` dosyasına şu içeriği yaz:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

### 3c. GitHub'da Pages ayarını aç

1. Repo'ya git → **Settings** → **Pages**
2. **Source** bölümünde: `GitHub Actions` seç (branch'li klasik moddan farklı)
3. Kaydet

### 3d. İlk otomatik deploy'u tetikle

```bash
git add .github package.json public vite.config.ts
git commit -m "Add GitHub Actions auto-deploy workflow"
git push
```

GitHub → repo → **Actions** sekmesinden build'in yeşile dönmesini bekle (~1-2 dk). Yeşilse site `https://YOUR_USERNAME.github.io/dripsta-website/` üzerinden erişilebilir olur (custom domain bağlamadan önce).

---

## 4. Custom Domain'i Bağla

Satın aldığın domain'i (örn. `dripsta.app`) siteye bağlayacağız.

### 4a. CNAME dosyası hazır mı?

`public/CNAME` dosyasının içeriği sadece domain olsun — **https://** veya **/** yok:

```
dripsta.app
```

(huggn'dan kopyalandıysa içeriği `huggn.app` olacak, `dripsta.app` olarak değiştir.)

Vite build sırasında bu dosyayı `dist/`'e kopyalar, GitHub Pages da bunu görünce custom domain'i otomatik tanır.

### 4b. DNS kayıtlarını ekle (domain sağlayıcında)

Domain sağlayıcının DNS panelini aç (Namecheap / GoDaddy / Squarespace / Cloudflare / Google Domains fark etmez, aynı kayıtlar).

**A Records (apex domain — `dripsta.app`):**

| Type | Host/Name | Value              | TTL  |
| ---- | --------- | ------------------ | ---- |
| A    | @         | 185.199.108.153    | Auto |
| A    | @         | 185.199.109.153    | Auto |
| A    | @         | 185.199.110.153    | Auto |
| A    | @         | 185.199.111.153    | Auto |

**CNAME Record (www alt domain):**

| Type  | Host/Name | Value                       | TTL  |
| ----- | --------- | --------------------------- | ---- |
| CNAME | www       | YOUR_USERNAME.github.io     | Auto |

> `YOUR_USERNAME` → GitHub kullanıcı adın (örn. `dorukcan.github.io`). Sonundaki nokta (`.`) bazı panellerde gerekebilir.

**Cloudflare kullanıyorsan:** A kayıtlarının yanındaki "Proxy" bulutunu **gri** yap (DNS only). Turuncu proxy, GitHub Pages SSL onayını bozar. SSL sertifikası geçerli olduktan sonra tekrar turuncuya çevirebilirsin.

### 4c. GitHub'da custom domain'i bağla

1. Repo → **Settings** → **Pages**
2. **Custom domain** alanına `dripsta.app` yaz, **Save**
3. GitHub DNS check yapar (yeşil tik çıkana kadar birkaç dk, bazen saatler)
4. Yeşil olunca **Enforce HTTPS** kutusunu işaretle (HTTPS sertifikası için gri çıkabilir, 15-60 dk bekle, tekrar gel ve işaretle)

### 4d. Doğrulama

DNS yayılması 10 dk - 24 saat arası sürebilir. Hızlı kontrol:

```bash
# A kayıtları yayıldı mı?
dig +short dripsta.app

# 185.199.108-111.153 görmelisin
```

Tarayıcıdan `https://dripsta.app` → site açılmalı, HTTPS kilidi yeşil olmalı.

---

## 5. Günlük Akış — Nasıl Değişiklik Yaparım?

Metin, renk, sayfa değişikliği yaptığında:

```bash
# 1. Lokal test
npm run dev

# 2. Commit ve push
git add .
git commit -m "Update home page copy"
git push
```

Push'tan ~1-2 dk sonra site otomatik güncellenir. Actions sekmesinden status görebilirsin.

Manuel deploy komutu yok, `npm run deploy` yazmana gerek yok — her push = yeni deploy.

---

## 6. Dikkat Edilecekler / Troubleshooting

| Sorun | Çözüm |
| --- | --- |
| `404` hata sayfası açılıyor | `public/CNAME` doğru mu? `Settings > Pages > Custom domain` set mi? |
| HTTPS çalışmıyor, sertifika hatası | Cloudflare proxy'yi kapat (gri bulut). 1 saat bekle. |
| Action fail oldu | `Actions` sekmesi → fail olan job → log'a bak. Çoğu zaman `npm run build` hatası. |
| Site eski versiyonu gösteriyor | CDN cache. Hard refresh (Cmd+Shift+R) veya incognito. |
| `assets` 404 (CSS/JS yüklenmiyor) | `vite.config.ts`'de `base` yanlış. Custom domain varsa `base: '/'`, yoksa `base: '/repo-adi/'`. |
| `YOUR_USERNAME.github.io` açılıyor ama `dripsta.app` değil | DNS henüz yayılmadı, `dig dripsta.app` ile kontrol et. |
| Action başarılı ama site değişmiyor | Artifact `dist/` klasöründen yüklenir — `npm run build` lokal olarak çalışıyor mu? |

---

## 7. Bonus — Ek İyileştirmeler (opsiyonel)

- **Favicon:** `public/favicon.ico` ekle, `index.html`'de `<link rel="icon" href="./favicon.ico">`
- **OG image:** Paylaşımlarda görünecek social card. `public/og-image.png` (1200x630px)
- **Google Analytics / Plausible:** `index.html`'e `<head>` içine ekle
- **robots.txt / sitemap.xml:** SEO için `public/`'e ekle
- **Preview deploy (PR için):** Branch'e push yaptığında preview URL üretmek isterseniz Cloudflare Pages / Vercel'e geçmek daha kolay
- **`www` redirect:** GitHub Pages `www.dripsta.app` → `dripsta.app` redirect'ini custom domain bağladığında otomatik yapar

---

## Özet Checklist

- [ ] huggn projesini kopyaladım, Dripsta içeriğine çevirdim
- [ ] `npm install` ve `npm run dev` lokal çalışıyor
- [ ] GitHub'da `dripsta-website` public repo açtım
- [ ] `git push` ile kodu yükledim
- [ ] `.github/workflows/deploy.yml` ekledim
- [ ] Settings → Pages → Source: **GitHub Actions** seçtim
- [ ] İlk Actions build yeşil
- [ ] `public/CNAME` içinde `dripsta.app` var
- [ ] Domain sağlayıcıda 4 A kaydı + www CNAME kaydı ekledim
- [ ] Settings → Pages → Custom domain `dripsta.app` girdim
- [ ] Enforce HTTPS ✅
- [ ] `https://dripsta.app` tarayıcıda açılıyor

Sorun olursa bana sor; özellikle DNS adımı sağlayıcıya göre UI farkı gösterir.
