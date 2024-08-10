import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { TasksProvider } from './context/tasks.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <TasksProvider>
        <App />
      </TasksProvider>
    </Router>
  </React.StrictMode>,
)
