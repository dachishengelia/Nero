import { useState } from 'react'
import { FaGithub, FaLinkedin, FaYoutube, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { SiSteam } from 'react-icons/si'

function ContentSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="content-section">
      <div className="glass-card">
        <div className="description">
          <p className="welcome-title">welcome to my site! :)</p>
          <p>I'm Nero, actual name is dachi. I play ton of games, like: <span className="game">Geometry dash</span>, <span className="game">CS2</span>,
           <span className="game">GTA V</span> and etc.</p>
          <p>my favourites are: <span className="game">dying light</span> (first two parts), <span className="game">CS</span> and <span className="game">GD</span>, and <span className="game">Metro's</span>!</p>
          <p>I'm also a coder, kinda fullstack!
             (html + javascript, vite react + node js)</p>

          <div className="section-separator"></div>

          <p className="apps-title">apps created by me!:</p>
          
          <p>
            <a href="https://frontend-restyle.vercel.app/" target="_blank" rel="noopener noreferrer">ReStyle</a>
            {' '}{expanded ? 'A marketplace, where designers will be able to sell their designed clothing both designers and models that log in, are able to add their CV\'s for brands to inspect as well!' : (
              <>
                A marketplace, where designers will be able to sell their designed clothing
                <button 
                  className="expand-btn-text" 
                  onClick={() => setExpanded(true)}
                >
                  ...more
                </button>
              </>
            )}
            {expanded && (
              <button 
                className="expand-btn-text" 
                onClick={() => setExpanded(false)}
              >
                less
              </button>
            )}
          </p>

          <p>
            <a href="https://scrolla-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">Scrolla</a>
            {' '}my own social media app! (still in development)
          </p>

          <div className="section-separator"></div>

          <p className="socials-title">my socials:</p>

          <div className="social-links">
            <a href="https://github.com/dachishengelia" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/dachi-shengelia-645694388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn6mSA7MqOgpy9lWPGfn0wbE6Q37Bc-ljxteg1e9O10PGUWHaF4WkfZqqQF1c_aem_lodjQfvfMzV9P6x23PfNzQ" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://steamcommunity.com/id/b1zonn/" target="_blank" rel="noopener noreferrer">
              <SiSteam /> Steam
            </a>
            <a href="https://www.youtube.com/@neroGD07" target="_blank" rel="noopener noreferrer">
              <FaYoutube /> YouTube
            </a>
          </div>

          <div className="discord-text">
            <span>discord: k1riasus#3919 or nerooo</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentSection
