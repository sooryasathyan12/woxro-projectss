import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer"; 
import Home from "./Components/Home";
import Login from "./Components/Login";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Policy from './Components/Policy';


function App() {
  return (
    <div className='App'>
      <Router>
           <header className="App-header">
           <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='Aboutus' element={<About/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='login' element={<Login/>} />
            <Route path='policy' element={<Policy/>} />

          </Routes>
           </header>

      <Footer/>
      </Router>

    
    </div>
  );
}

export default App;
