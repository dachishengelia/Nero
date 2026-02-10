import { useState, useEffect } from 'react'
import './App.css'
import ProfileSection from './components/ProfileSection'
import ContentSection from './components/ContentSection'

const fonts = [
  'Arial',
  'Georgia',
  'Times New Roman',
  'Courier New',
  'Verdana',
  'Impact',
  'Comic Sans MS',
  'Trebuchet MS',
  'Arial Black',
  'Lucida Console'
]

function Particles() {
  return (
    <div className="particles">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="particle" />
      ))}
    </div>
  )
}

function App() {
  const [currentFont, setCurrentFont] = useState(fonts[0])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFont(prevFont => {
        const currentIndex = fonts.indexOf(prevFont)
        const nextIndex = (currentIndex + 1) % fonts.length
        return fonts[nextIndex]
      })
    }, 300)

    // Trigger load animation
    setTimeout(() => setIsLoaded(true), 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Particles />
      <div className={`container ${isLoaded ? 'loaded' : ''}`}>
        {/* Left Side - Profile Section Only */}
        <ProfileSection currentFont={currentFont} />

        {/* Right Side - Content Section */}
        <ContentSection />
      </div>
    </>
  )
}

export default App
