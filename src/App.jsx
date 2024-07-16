import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StartBootstarap from './components/StartBootstarap'
import Item from './components/Item'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div>
    <StartBootstarap/>
    </div>
    <div>
      <Body/>
      <Item/>
    </div>
    <div>
    <Footer/>
    </div>
    

    
    
    
    </>
  );
}

export default App
