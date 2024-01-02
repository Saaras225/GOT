import './App.css';
import {Routes, Route} from "react-router-dom";
import Characters from './pages/Characters/Characters';
import Books from './pages/Books/Books';
import Navbar from './pages/Navbar/Navbar';
import FormBook from './pages/FormBook/FormBook';
import Card from './pages/Card/Card';
import Fav from './pages/Fav/Fav';

function App() {
    return (
      <div className='App'>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Characters />} />
            <Route path="/books" element={<Books />} />
            <Route path="/formBook" element={<FormBook />} />
            <Route path="/card/:person" element={<Card />} />
            <Route path="/fav" element={<Fav/>} />
          </Routes>
      </div>
  );
}

export default App;
