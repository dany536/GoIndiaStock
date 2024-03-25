import { useState } from 'react'
import './App.css'
import Header from './Container/Header'
import Footer from './Container/Footer'
import Main from './Container/Main'
import Sidebar from './Container/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
        <div className='flex'>
          <Sidebar />
          <Main />
        </div>
      <Footer />
    </>
  )
}

export default App
