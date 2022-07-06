import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Analysis from './Analysis'
import EntryDetails from './EntryDetails'

function PagesRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Analysis />} />
        <Route path="/details" element={<EntryDetails />} />
      </Routes>
    </Router>
  )
}

export default PagesRoutes
