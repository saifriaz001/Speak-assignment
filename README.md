# 🎯 SDE-UI Frontend Recreation Assignment

This project is a **frontend UI recreation** built using **React.js** and **Tailwind CSS**, replicating the interface shown in the provided reference video.  
The focus of this assignment is **pixel-perfect layout, responsiveness, and smooth animations** — without any backend integration.

---

## 🧱 Project Overview

The goal of this project was to accurately reproduce a modern, responsive UI consisting of:
- **Hero Section**
- **Motivation Section** (scroll-based slider animation)
- **Testimonial Section**

All sections are designed with reusable React components and optimized for both desktop and mobile layouts.

---

## ⚙️ Tech Stack

| Category | Tools / Libraries |
|-----------|------------------|
| Framework | React.js (Vite setup) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Language | JavaScript (ES6) |
| Build Tool | Vite |
| Version Control | Git + GitHub |

---

## 📁 Folder Structure

src/
┣ assets/
┃ ┗ react.svg
┣ components/
┃ ┣ HeroMain.jsx
┃ ┣ MotivationSection.jsx
┃ ┗ TestimonialSection.jsx
┣ reuseableTemplate/
┃ ┗ SliderTemplate.jsx
┣ App.jsx
┣ index.css
┣ main.jsx


Each section is modularized for scalability and clarity, ensuring consistent spacing, typography, and reusable logic.

---

## 🧩 Component Structure

### **SliderTemplate.jsx**
- A reusable card layout that receives `heading`, `paragraph`, and `videoUrl` as props.
- Uses responsive grids (`grid-cols-1 md:grid-cols-2`).
- Optimized for fast video loading and flexible usage across sections.

### **MotivationSection.jsx**
- Implements vertical **scroll-based animation** using `Framer Motion`.
- Utilizes `useScroll` and `useTransform` hooks for progressive slide transitions.
- Maintains DRY principles by mapping through a `slides` array for dynamic rendering.

### **HeroMain.jsx / TestimonialSection.jsx**
- Contain static hero and testimonial layouts following the same responsive design approach.

---

## 📱 Responsiveness Strategy

- Tailwind’s responsive utilities (`sm:`, `md:`, `lg:`) are used to adapt typography, spacing, and grid layout.
- Flex and grid-based layouts ensure **consistent scaling** across devices.
- The overall structure maintains **center alignment** and consistent padding (`px-[30px] lg:px-[200px]`).

---

## 🎞️ Animation Handling

- **Framer Motion** provides smooth, GPU-accelerated transitions.
- Scroll-linked slide animation controlled via `scrollYProgress`.
- Custom opacity and translation transforms to achieve **seamless fade + slide effects**.
- All animations are performance-optimized and wrapped in a sticky viewport for smooth scroll experience.

---

## 🚀 Performance Optimizations

- Videos are muted, autoplayed, and looped with `playsInline` for reduced blocking.
- Lazy layout rendering with `overflow-hidden` prevents layout shifts.
- Reusable components reduce re-rendering overhead.

---

## 🧰 Setup Instructions

```bash
# Clone repository
git clone https://github.com/saifriaz001/Speak-assignment.git

# Install dependencies
npm install

# Start development server
npm run dev