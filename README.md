# 👁 EmpathyLens XR

> **Cambridge RealityX 2026 — XR in Healthcare Track**

**Step Into Their World** — An immersive WebXR experience that simulates neurological conditions from the patient's perspective, helping healthcare workers and caregivers build deeper empathy through AI-powered patient interactions.

🌐 **Live Demo:** [https://kapilshastriwork-maker.github.io/empathylens-xr/](https://kapilshastriwork-maker.github.io/empathylens-xr/)

---

## 🎯 The Problem

Healthcare workers train without ever truly experiencing what their patients feel. Neurological conditions like dementia, Parkinson's, and anxiety disorder are deeply misunderstood — not from lack of care, but from lack of perspective.

**EmpathyLens XR bridges this gap.**

| Condition | People Affected |
|-----------|----------------|
| 🧠 Dementia | 55M+ worldwide |
| 🫀 Parkinson's Disease | 10M+ new cases/year |
| 😰 Anxiety Disorder | 284M+ globally |

---

## 🥽 What It Does

EmpathyLens XR puts you inside a 3D hospital room and simulates what it feels like to live with a neurological condition — complete with visual effects, audio cues, and a real AI-powered patient to talk to.

### Three Immersive Simulations

**🧠 Dementia — Margaret, Age 78**
- Memory flash overlays ("Where am I?", "What day is it?")
- Greyscale visual desaturation
- Slow disorientation drift effect
- Purple vignette border
- AI patient who repeats herself, trails off, and asks for her daughter

**🫀 Parkinson's Disease — Robert, Age 71**
- Continuous screen tremor simulation
- Tremor burst intensification every 5 seconds
- Orange vignette border
- AI patient with slow, drawn-out speech patterns

**😰 Anxiety Disorder — Sarah, Age 34**
- Live BPM counter rising from 72 → 118 BPM
- Pulsing red vignette synced to heartbeat
- Heartbeat audio via Web Audio API
- Breathing scale animation
- AI patient who speaks in rushed, worried sentences

---

## ✨ Features

- 🌐 **No headset required** — works in any modern browser
- 🤖 **AI Patient Conversations** — real-time chat powered by Groq LLaMA 3.1
- 📚 **Rotating Educational Tips** — condition-specific caregiver guidance
- 📊 **Simulation Intensity Indicator** — visual feedback on immersion level
- 📱 **Mobile Responsive** — works on phones, tablets, and desktops
- 💸 **100% Free** — zero cost to build or host

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| [A-Frame 1.4](https://aframe.io) | WebXR 3D environment |
| [Groq API](https://console.groq.com) | LLaMA 3.1 AI patient responses |
| Vanilla JavaScript | All logic, effects, animations |
| Web Audio API | Heartbeat sound generation |
| CSS Animations | Visual condition effects |
| GitHub Pages | Free deployment & hosting |

---

## 🚀 Getting Started

### Run Locally

```bash
git clone https://github.com/kapilshastriwork-maker/empathylens-xr.git
cd empathylens-xr
```

Open `index.html` with Live Server in VS Code, or any local server.

### Set Up AI Chat

1. Get a free API key at [console.groq.com](https://console.groq.com)
2. When prompted on the experience page, enter your Groq API key
3. The key is saved locally — you only need to enter it once

### File Structure

```
empathylens-xr/
├── index.html          # Landing page
├── experience.html     # WebXR experience
├── style.css           # Shared styles
├── js/
│   ├── app.js          # Main logic & condition effects
│   └── groq.js         # Groq AI integration
└── assets/
```

---

## 🎮 How to Use

1. **Choose a condition** on the landing page (Dementia, Parkinson's, or Anxiety)
2. **Click "Enter Experience"** on the loading screen
3. **Look around** the 3D hospital room by clicking and dragging
4. **Click "Talk to Patient"** to open the AI chat panel
5. **Type a message** — the AI patient responds in character
6. **Read the educational tips** in the bottom-left corner
7. **Click "Exit"** to return to the landing page

---

## 📸 Screenshots

| Landing Page | Dementia Simulation | Anxiety Simulation |
|---|---|---|
| Beautiful hero with health stats | "Where am I?" memory flashes | BPM counter + red vignette |

---

## 🏆 About This Project

Built for the **Cambridge RealityX 2026 Hackathon** — an Applied AI × XR Hackathon focused on addressing real-world healthcare challenges.

**Track:** XR in Healthcare  
**Theme:** Interdisciplinary empathy training for medical professionals  
**Built in:** One day, zero budget  

> *"Empathy is not just feeling for someone — it's feeling WITH them."*  
> — EmpathyLens XR

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

<p align="center">
  Built with ❤️ for Cambridge RealityX 2026
</p>
<img width="1908" height="910" alt="image" src="https://github.com/user-attachments/assets/255839ff-083d-458d-8da2-8389dc2959cd" />
<img width="1439" height="798" alt="image" src="https://github.com/user-attachments/assets/55ec9084-6768-4f29-8897-6d94df046c3a" />
<img width="1914" height="904" alt="image" src="https://github.com/user-attachments/assets/33720e41-9ba7-4b33-9f11-957f4c9dc17a" />
<img width="1914" height="902" alt="image" src="https://github.com/user-attachments/assets/b738fcd6-02a5-4560-929e-3cc51f4e5177" />
