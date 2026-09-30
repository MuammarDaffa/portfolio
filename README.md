# Amar Wanda — Personal Portfolio

Website portfolio personal minimal dan profesional, dibangun dengan fokus pada konten, tipografi yang bersih, serta kecepatan loading tanpa elemen dekoratif berlebihan.

## 🚀 Tech Stack

- **Core**: HTML5, CSS3, JavaScript (Vanilla ES Modules)
- **Build Tool**: Vite
- **Typography**: Inter & Source Serif 4
- **Deployment**: GitHub Pages (via GitHub Actions)

## 📁 Struktur Folder

```text
porto/
├── .github/workflows/
│   └── deploy.yml       # Otomatisasi deploy ke GitHub Pages
├── public/
│   ├── favicon/         # Favicon website
│   └── images/          # Screenshot project (Dapur Aisyah, dll)
├── src/
│   ├── styles/
│   │   └── main.css     # Design system & CSS responsive
│   └── main.js          # Logic, data project, & render dinamis
├── dist/                # Output build production
├── index.html           # File HTML utama
├── package.json
└── vite.config.js       # Konfigurasi Vite
```

## 🛠️ Instalasi & Menjalankan Lokal

1. **Clone repository:**
   ```bash
   git clone https://github.com/USERNAME/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan local development server:**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:5173` di browser.

4. **Build untuk production:**
   ```bash
   npm run build
   ```

5. **Preview hasil build:**
   ```bash
   npm run preview
   ```

## 🌐 Deploy ke GitHub Pages

Project ini sudah dilengkapi GitHub Actions workflow otomatis. Cukup push code ke GitHub dan aktifkan GitHub Pages di menu Settings repository.
