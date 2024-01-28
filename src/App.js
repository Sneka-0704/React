import logo from './logo.svg';
import './App.css';
//import PropsComponent from './components/functionalcomponents/PropsComponent';
//import StateComponent from './components/classcomponents/StateComponent';
import NavBar from './components/functionalcomponents/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/functionalcomponents/About';
import Login from './components/functionalcomponents/Login';
import Experience from './components/functionalcomponents/Experience';
 import Footer from './components/functionalcomponents/Footer';
 import Reference from './components/functionalcomponents/Reference';
 import Memo from './components/functionalcomponents/Memo';
 import Callback from './components/functionalcomponents/Callback';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/Experience" element={<Experience/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/useref" element={<Reference/>}></Route>
        <Route path="/Memo" element={<Memo/>}></Route>
        <Route path="/Callback" element={<Callback/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <PropsComponent name="Hello sneka" course="MERN course"></PropsComponent> */}
      <header className="App-header">
        {/* <StateComponent></StateComponent> */}
        
         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>
      
      <Footer/> 
      
       
  
    </div>
    
  );
}

export default App;
