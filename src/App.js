import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "framer-motion";
import Header from './Header';
import Home from './Home';
import About from './About';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

      <div className="">

      <div className="container">
        <Header />
      </div>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
      </Routes>

      </div>
      </div>
    </Router>
  );
}

export default App;