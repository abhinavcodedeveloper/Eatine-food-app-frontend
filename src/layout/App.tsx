import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

const App = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex flex-col h-screen w-full'>
        <Header/>
        <HeroSection/>
        <div className='flex flex-col py-8 container'>
            {children}
        </div>
        <Footer/>
        
    </div>
  )
}

export default App