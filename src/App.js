
import './App.css';
import './Components/Navbar.js'
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';


function App() {
  return (
<>
<Navbar title="TextUtils" aboutText="About Us"/>
<div className='container'>
<TextForm heading="Enter text.."/>
</div>


  </>

  );
}

export default App;
