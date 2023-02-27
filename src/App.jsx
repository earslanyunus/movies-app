import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Text from "./components/input/Text.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Text/>
    </div>
  )
}

export default App
