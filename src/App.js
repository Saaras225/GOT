import './App.css';
import {Routes, Route} from "react-router-dom";
import Characters from './pages/Characters/Characters';
import Books from './pages/Books/Books';
import Navbar from './pages/Navbar/Navbar';
import FormBook from './pages/FormBook/FormBook';

function App() {
    return (
      <div className='App'>
          <Navbar />
          <div className="container">
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/books" element={<Books />} />
            <Route path="/formBook" element={<FormBook />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
