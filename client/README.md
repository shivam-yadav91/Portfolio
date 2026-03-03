# React Portfolio Project

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.
This project was generated for Shivam Yadav as a Personal Portfolio.

## 🚀 Quick Start (Recommended)

1.  **Double-click** the `run_project.bat` file in the main folder (`Desktop/Portfolio`).
2.  It will automatically install dependencies and start the app.

---

## 🛠️ Manual Setup

If you prefer using the command line:

1.  **Open Terminal** in the `client` folder:
    ```bash
    cd client
    ```

2.  **Install Dependencies** (Crucial Step!):
    ```bash
    npm install
    ```
    *Wait for this to complete. It is done when you see `added X packages` and the command prompt returns.*

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## ❓ Troubleshooting

### "vite is not recognized" Error
This means dependencies are not installed.
1. Delete `node_modules` folder if it exists.
2. Delete `package-lock.json`.
3. Run `npm install` again and **wait** for it to finish.
4. Run `npm run dev`.

## Features

- **Responsive Design**: Mobile-first approach using Tailwind CSS.
- **Dark/Light Mode**: User preference saved in local storage.
- **Smooth Animations**: Powered by Framer Motion.
- **Dynamic Content**: Data stored in `src/data/portfolio.json`.

## Customization

- **Update Data**: Edit `src/data/portfolio.json`.
- **Change Images**: Replace images in `src/assets`.
- **Modify Styles**: Edit `src/index.css`.

Enjoy your new portfolio!
