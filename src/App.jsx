import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import ScrolltoTop from './Components/ScrolltoTop';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';

function App() {
  return (
    <Router basename="/Mind-Media">
      <ScrolltoTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ScrolltoTop>
    </Router>
  );
}

export default App;