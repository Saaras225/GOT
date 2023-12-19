import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from './pages/Layout';
import Characters from './pages/Characters/Characters';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Books from './pages/Books/Books';
import Default from './pages/Default';


function App() {
    return (
    <div className="">
     <h1>Routes</h1>
     <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="characters" element={<Characters />} />
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="books" element={<Books />} />
      <Route path="*" element={<Default/>} />
     </Routes>
    </div>
  );
}

export default App;
