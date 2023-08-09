import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "framer-motion";
import Header from './big components/Header';
import Home from './big components/Home';
import About from './big components/About';
import Services from './big components/Services';

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
          <Route path="/services" element={<Services />} />
      </Routes>

      </div>
      </div>
    </Router>
  );
}

export default App;