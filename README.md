# Modern Professional Portfolio Website - Vijayalakshmi V

A high-performance, modern personal portfolio website built with **React.js**, **Vite**, **Tailwind CSS**, and **EmailJS**. Tailored for a **Generative AI Engineer** showcasing LLM architectures, RAG pipelines, and technical competencies.

---

## 🚀 Key Features

- **Theme Toggle:** Dark and light theme modes with local storage persistence.
- **Hero & Landing Section:** Dynamic presentation with resume download, let's connect action, and live terminal showcase.
- **Curated Sections:**
  - About Me (BCA background, focus on LLM applications)
  - Technical Skills (Grouped with custom icons, zero misleading % meters)
  - Experience (Accurately displays Testleaf Software Solutions internship: Sept 2026 – Dec 2026)
  - Projects (RAG Question Answering System, Resume Analysis Assistant)
  - Education (Shanmuga Industries Arts & Science College, GHSS)
  - Contact Form (Integrated directly with `@emailjs/browser` with validation & status feedback)
- **Resume Download:** Functional resume download button that pulls from `/public/resume.pdf`.

---

## 🛠️ Tech Stack

- **React 18**
- **Vite**
- **Tailwind CSS**
- **Lucide React** (Icons)
- **@emailjs/browser** (Email transmission)
- **Framer Motion** (Transitions & Micro-interactions)

---

## 📦 Getting Started

### 1. Extract & Navigate
```bash
unzip modern-portfolio-react.zip
cd modern-portfolio-react
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure EmailJS (.env)
Copy the example environment file:
```bash
cp .env.example .env
```
Open `.env` and fill in your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

#### How to get EmailJS credentials:
1. Sign up for free at [https://www.emailjs.com](https://www.emailjs.com).
2. Go to **Email Services** -> click **Add New Service** (e.g., Gmail) -> copy the **Service ID**.
3. Go to **Email Templates** -> click **Create New Template** -> use variables `{{from_name}}`, `{{from_email}}`, `{{subject}}`, and `{{message}}` -> copy the **Template ID**.
4. Go to **Account** -> **API Keys** -> copy the **Public Key**.

### 4. Run Development Server
```bash
npm run dev
```
Open the local URL displayed (typically `http://localhost:5173`) in your browser.

### 5. Build for Production
```bash
npm run build
```
The optimized bundle will be created inside the `dist/` directory.

---

## 🌐 Deployment Instructions

### Deploy on Vercel
1. Push this folder to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Select your repository.
4. In the **Environment Variables** section, add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Click **Deploy**.

### Deploy on Netlify
1. Connect your repository to [Netlify](https://www.netlify.com).
2. Set Build command to `npm run build` and Publish directory to `dist`.
3. Add the three `VITE_EMAILJS_*` environment variables in **Site Settings > Environment Variables**.
4. Deploy site!
