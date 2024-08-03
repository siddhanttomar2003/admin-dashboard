
import './App.css';
import  Header from './components/Header';
import 'bootstrap-icons/font/bootstrap-icons.json';
import 'remixicon/fonts/remixicon.glyph.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Logo from './components/Logo';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
function App() {
  return (
    <>
      <Header></Header>
       <Sidebar></Sidebar>
       <Main/>
    </>
  )
}

export default App
