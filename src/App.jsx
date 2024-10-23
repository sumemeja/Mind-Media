import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import ScrolltoTop from './Components/ScrolltoTop';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';
import Mindbux from './Pages/Mindbux';
import Game from './Pages/Game';

function App() {
  return (
    <Router basename="/Mind-Media">
      <ScrolltoTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mindbux" element={<Mindbux />} />
        </Routes>
      </ScrolltoTop>
    </Router>
  );
}

export default App;