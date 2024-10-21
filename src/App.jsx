import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import ScrolltoTop from './Components/ScrolltoTop';

function App() {
  return (
    <Router basename="/Mind-Media">
      <ScrolltoTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </ScrolltoTop>
    </Router>
  );
}

export default App;