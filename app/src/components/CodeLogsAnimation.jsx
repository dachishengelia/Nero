import { useState, useEffect } from 'react'

const codeSnippets = [
  'console.log("Hello, World!");',
  'function greet(name) { return `Hi, ${name}!`; }',
  'const app = express(); app.listen(3000);',
  'import React from "react"; const App = () => <div>Hello</div>;',
  'git add . && git commit -m "Update"',
  'npm install react-router-dom',
  'const data = await fetch("/api/data");',
  'setTimeout(() => console.log("Done"), 1000);'
]

const logMessages = [
  '[INFO] Server started on port 3000',
  '[WARN] Deprecated API usage detected',
  '[ERROR] Connection timeout',
  '[DEBUG] Rendering component',
  '[LOG] User logged in',
  '[INFO] Database connected',
  '[WARN] Memory usage high',
  '[LOG] File uploaded successfully'
]

function CodeLogsAnimation() {
  const [currentCode, setCurrentCode] = useState('')
  const [logs, setLogs] = useState([])
  const [codeIndex, setCodeIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const codeInterval = setInterval(() => {
      const snippet = codeSnippets[codeIndex]
      if (charIndex < snippet.length) {
        setCurrentCode(prev => prev + snippet[charIndex])
        setCharIndex(prev => prev + 1)
      } else {
        setTimeout(() => {
          setCurrentCode('')
          setCharIndex(0)
          setCodeIndex(prev => (prev + 1) % codeSnippets.length)
        }, 2000)
      }
    }, 100)

    const logInterval = setInterval(() => {
      const randomLog = logMessages[Math.floor(Math.random() * logMessages.length)]
      setLogs(prev => [...prev.slice(-4), randomLog])
    }, 3000)

    return () => {
      clearInterval(codeInterval)
      clearInterval(logInterval)
    }
  }, [codeIndex, charIndex])

  return (
    <div className="code-logs-container">
      <div className="code-window">
        <div className="code-header">
          <span>code.js</span>
          <div className="window-controls">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="code-content">
          <pre>{currentCode}<span className="cursor">|</span></pre>
        </div>
      </div>
      <div className="logs-window">
        <div className="logs-header">
          <span>terminal</span>
          <div className="window-controls">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="logs-content">
          {logs.map((log, index) => (
            <div key={index} className="log-line">{log}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CodeLogsAnimation
