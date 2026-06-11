# Pomodoro App

A simple Pomodoro timer built with Vite and TypeScript. The app focuses on a single timer card with work and break sessions, start/pause/reset controls, and a session counter.

## Features

- 25-minute focus sessions
- 5-minute break sessions
- Start, pause, and reset controls
- Completed session tracking
- Custom styled UI with a decorative background

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local URL shown in the terminal.

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
|-- src
|   |-- main.ts
|   |-- style.css
|   `-- assets
`-- tsconfig.json
```

## Notes

- The timer logic lives in `src/main.ts`.
- Styling lives in `src/style.css`.
- Assets in `src/assets` are used for the page background and Vite starter media.
