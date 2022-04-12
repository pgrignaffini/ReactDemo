import React, { useState } from "react";
import CounterClass from "./CounterClass";
import Counterhooks from "./CounterHooks";

export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('green')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <CounterClass initialCount={0}></CounterClass>
      Counter hooks
      <Counterhooks initialCount={0}></Counterhooks>
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>Toggle theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
