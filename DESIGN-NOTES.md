```md
# Week 4: Component Architecture

## Component Tree

RootLayout
├── Header
│   ├── Nav
│   └── ThemeToggle
├── Main Content
│   ├── Hero
│   ├── Card
│   └── ContactForm
└── Footer

---

## Components

### Header
- Displays the website title and navigation menu
- Includes the ThemeToggle component
- Server Component
- No local state

### Nav
- Handles navigation between pages using Next.js Link
- Server Component
- No state

### Hero
- Displays the main welcome section of the homepage
- Server Component
- No state

### Card
- Reusable component used to display feature information
- Receives props for title and description
- Server Component
- No state

### ThemeToggle
- Allows users to switch between light and dark mode
- Client Component
- Uses useState and useEffect
- Saves user preference with localStorage

### ContactForm
- Handles form inputs and validation
- Client Component
- Uses useState for controlled inputs and validation messages

### Footer
- Displays footer information
- Server Component
- No state

---

## State Ownership

### ThemeToggle
- Owns the theme state
- Updates UI dynamically
- Persists state using localStorage

### ContactForm
- Owns form input state
- Tracks validation and success messages

---

## Client vs Server Components

### Client Components
- ThemeToggle
- ContactForm

### Server Components
- Header
- Nav
- Hero
- Card
- Footer

---

## React Refactor Notes

The project was refactored from vanilla JavaScript into reusable React components using Next.js. The new structure improved organization, maintainability, and scalability by separating the interface into smaller reusable parts.

The ThemeToggle component was rebuilt using React hooks instead of direct DOM manipulation. useState was used to manage the current theme, while useEffect handled localStorage persistence and synchronization with the browser.

The ContactForm component was also converted into a stateful React component using controlled inputs. Form validation and success messages are now managed directly through React state instead of query selectors and manual event listeners.

Compared to Week 3, React simplified state management and reduced the amount of repetitive DOM code required to create interactive features.
```

