# BTK Akademi Platform Blueprint

## Overview

This document outlines the architecture and implementation of the BTK Akademi platform, a modern and responsive web application built with React. The platform provides users with access to a variety of educational resources, including courses, events, and blog posts.

## Project Structure

```
.
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── CourseCard.jsx
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── pages
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── CourseDetail.jsx
│   │   ├── Courses.jsx
│   │   ├── Events.jsx
│   │   └── Home.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── GlobalStyle.jsx
│   ├── index.css
│   └── main.jsx
├── .idx
│   ├── airules.md
│   ├── dev.nix
│   ├── icon.png
│   └── mcp.json
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
└── blueprint.md
```

## Styling

The project uses `styled-components` for styling. A global style is defined in `src/GlobalStyle.jsx` to ensure a consistent look and feel throughout the application.

### `GlobalStyle.jsx`

```javascript
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f8f9fa;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;
```

## Components

### `Header.jsx`

The `Header` component provides the main navigation for the application. It includes a logo and links to the "Eğitimler," "Etkinlikler," "Blog," and "Hakkımızda" pages.

### `Footer.jsx`

The `Footer` component is displayed at the bottom of every page and contains links to social media and other relevant information.

### `CourseCard.jsx`

The `CourseCard` component is a reusable component used to display a summary of a course on the "Eğitimler" page. It includes the course image, title, description, and a button to view more details.

## Pages

### `Home.jsx`

The `Home` page is the main landing page of the application. It features a hero section with a background image and a call-to-action button that directs users to the "Eğitimler" page.

### `Courses.jsx`

The `Courses` page displays a grid of available courses. Each course is presented using the `CourseCard` component.

### `CourseDetail.jsx`

The `CourseDetail` page shows the detailed information for a specific course, including its image, title, and a longer description. The course to be displayed is determined by the `id` parameter in the URL.

### `Events.jsx`, `Blog.jsx`, `About.jsx`

These pages are currently placeholders and will be implemented in the future.

## Routing

The application uses `react-router-dom` for routing. The routes are defined in the `App.jsx` file.

### `App.jsx`

```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Events from './pages/Events';
import Blog from './pages/Blog';
import About from './pages/About';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
```

## State Management

Currently, the application primarily uses component state (`useState`) for managing state. For the `CourseDetail` page, the course data is passed down from the `Courses` page. As the application grows in complexity, a more robust state management solution like Redux Toolkit or Zustand may be considered.

## Current Implementation Plan

There are no active implementation plans at the moment. The initial development is complete.
