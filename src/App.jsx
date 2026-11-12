import { useState } from 'react';
import { createContext } from './ThemeContext'
import './App.css';
import Form from './Form'

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <Form/>
        <label>
          <input
            type="checkbox" 
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light');
            }}
          />
          Use dark mode
        </label>
    </ThemeContext.Provider>
  )
}
