import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Analysis, EntryDetails } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Analysis />} />
        <Route path="/details" element={<EntryDetails />} />
      </Routes>
    </Router>
  )
}

export default App
