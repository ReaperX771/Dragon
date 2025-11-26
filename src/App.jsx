import './App.css'
import { Header } from './Componenets'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dragon } from './Pages'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/dragon" element={<Dragon/>} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  )
}

export default App