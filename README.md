# Pomodoro App

A simple Pomodoro timer built with Vite and TypeScript. The app uses a single card layout with work and break sessions, automatic session switching, and a completed session counter.

## Features

- 25-minute focus sessions
- 5-minute break sessions
- Start, pause, and reset controls
- Automatic switch between work and break modes
- Browser alerts when a session ends
- Completed session tracking
- Decorative background and styled timer card

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown in the terminal.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
.
|-- index.html
|-- package.json
|-- public
|-- src
|   |-- assets
|   |-- main.ts
|   `-- style.css
`-- tsconfig.json
```

## Notes

- Timer logic lives in `src/main.ts`.
- Styling lives in `src/style.css`.
- The page title updates to show the current mode and countdown.
- The timer automatically returns to focus mode after the break ends.
