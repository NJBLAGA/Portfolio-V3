/**
 * Entry point — mounts the React app with client-side routing.
 * We use createBrowserRouter (data-router API) so loaders/actions are
 * available if needed later without restructuring.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import './index.css'

import TerminalShell from './components/TerminalShell'
import About    from './pages/About'
import Projects from './pages/Projects'
import Stack    from './pages/Stack'
import Contact  from './pages/Contact'

/* ── Router definition ───────────────────────────────────────────────────── */
const router = createBrowserRouter([
  {
    /* TerminalShell wraps all routes via <Outlet /> */
    path: '/',
    element: <TerminalShell />,
    children: [
      { index: true, element: <Navigate to="/about" replace /> }, /* default to /about */
      { path: 'about',    element: <About />    },
      { path: 'projects', element: <Projects /> },
      { path: 'stack',    element: <Stack />    },
      { path: 'contact',  element: <Contact />  },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
