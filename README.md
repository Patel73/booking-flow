<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->




# Let's Shyp Pro - Hyperlocal Logistics Booking Flow

A production-ready, responsive booking journey built for a same-day delivery service assignment.

## 🚀 Live Demo
**Link:** [https://booking-flow-delta.vercel.app/](https://booking-flow-delta.vercel.app/)

## ✨ Key Features Implemented
- **Full Booking Journey:** From Pickup/Drop details to Success confirmation.
- **State Persistence:** Form data is preserved while navigating between steps.
- **Edge Case Handling:**
  - Dynamic pricing based on package weight.
  - Express vs Normal delivery type selection.
  - Responsive layout for Mobile, Tablet, and Desktop.
- **Validations:** Next buttons are disabled until required fields are filled.
- **Unique Booking IDs:** Generates a unique reference (e.g., LS-123456) on success.

## 🛠️ Tech Stack
- React.js (Vite)
- React Router Dom (Navigation)
- Tailwind CSS (Styling)

## 📦 Setup Instructions
1. Clone the repo: `git clone https://github.com/Patel73/booking-flow.git`
2. Install dependencies: `npm install`
3. Run locally: `npm run dev`