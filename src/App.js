
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import './Components/Navbar.js'
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';



function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
     setAlert({
      msg : message,
      type:type
     })
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been unabled","success")
    }
    else{
      setMode('light');
      showAlert("Light mode has been unabled","success")

    }
  }

  return (
<>
 {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={mode}/>
    </div>
  </>

  );
}

export default App;
