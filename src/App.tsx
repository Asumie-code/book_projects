import './App.css';
import Nav from './components/Nav'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Books from './views/Books';
import Container from '@mui/material/Container'
import Home from './views/Home';
import Pdf from './components/Pdf'



function App() {
  return (
    <Router>

      <Nav />
      <Container maxWidth='xl' sx={{ mb: 2.5, mt: 15 }}>
        <Routes>
          <Route caseSensitive path='/' element={
            <Home />
          } />
          <Route caseSensitive path='/books' element={<Books />} />
          <Route caseSensitive path='/pdf/assets/:pdf' element={<Pdf />} />
    
        </Routes>
      </Container>


    </Router>
  );
}

export default App;