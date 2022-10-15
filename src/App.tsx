import './styles/app.css'
import { Header } from './pages/Header'
import { Profile } from './pages/Profile'
import { FutebolAPI } from './pages/FutebolAPI'
import { RandomStore } from './pages/RandomStore'
import { CookieRobot } from './pages/CookieRobot'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/FutebolAPI" element={<FutebolAPI />} />
            <Route path="/RandomStore" element={<RandomStore />} />
            <Route path="/CookieRobot" element={<CookieRobot />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
