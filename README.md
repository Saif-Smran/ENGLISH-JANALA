# English Janala

A modern, interactive web application for learning English vocabulary, designed with a focus on user experience and accessibility for Bengali speakers. The app provides lessons, vocabulary cards, and interactive features to help users improve their English skills.

---

## Features

- **User Authentication:** Simple login form (name and password: `123456`) to access lessons.
- **Interactive Lessons:** Browse and select vocabulary lessons fetched from a public API.
- **Vocabulary Cards:** View word, meaning, pronunciation, and synonyms for each lesson.
- **Text-to-Speech:** Listen to the pronunciation of each word.
- **Lesson Details Modal:** View detailed information and examples for each word.
- **FAQ Section:** Frequently asked questions for new users.
- **Responsive Design:** Built with Tailwind CSS and DaisyUI for a modern, mobile-friendly interface.
- **Bengali Language Support:** UI and instructions are tailored for Bengali speakers.

---

## Folder Structure

```
assingment-6/
├── assets/           # Images and icons used in the app
├── script/
│   └── index.js      # Main JavaScript logic
├── index.html        # Main HTML file
├── tailwind.config.js# Tailwind CSS config (currently empty)
└── README.md         # Project documentation
```

---

## Technologies Used

- **HTML5**
- **CSS3** (with [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/))
- **JavaScript (ES6+)**
- **[SweetAlert2](https://sweetalert2.github.io/)** (for alerts)
- **Font Awesome** (for icons)
- **[Programming Hero OpenAPI](https://openapi.programming-hero.com/)** (for lesson data)

---

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd assingment-6
   ```
2. **Open `index.html` in your browser.**
   - No build step is required; all dependencies are loaded via CDN.

---

## Usage Guide

1. **Login:**
   - Enter your name and the password `123456` to start learning.
2. **Browse Lessons:**
   - Select a lesson from the "Let's Learn Vocabularies" section.
3. **View Vocabulary:**
   - Click on a lesson to see vocabulary cards with word, meaning, and pronunciation.
   - Click the speaker icon to hear the word.
   - Click the info icon for detailed word information and synonyms.
4. **FAQ:**
   - Visit the FAQ section for common questions and answers.
5. **Logout:**
   - Use the logout button to return to the login screen.

---

## Assets & API Credits

- **Images & Icons:** All images are located in the `assets/` folder and are used for UI enhancement.
- **Vocabulary Data:** Fetched from [Programming Hero OpenAPI](https://openapi.programming-hero.com/).
- **Fonts:** Google Fonts (Poppins, Hind Siliguri, Tiro Bangla).
- **Icons:** Font Awesome.

---

## License

_This project is for educational purposes. Please add your preferred license here._ 