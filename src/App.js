// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";

import {
  Route,
  Routes
} from "react-router-dom";


function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
         setAlert({
          msg:message,
          type:type
         })
         setTimeout(() => {
          setAlert(null);
         },1500 );
}

const toggleMode = ()=>{
if(mode === 'light'){
  setMode('dark')
  document.body.style.backgroundColor = '#042743';
  showAlert("Dark mode has been enabled", "success");
}else{
  setMode('light')
  document.body.style.backgroundColor = 'white';
  showAlert("Light mode has been enabled", "success");

}
}
  return (
    <>
          
      <Navbar title="TextUpdate" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route path="/about"
           element= {<About mode={mode} />}>
          </Route>
          <Route path="/"
         element={ <TextForm showAlert={showAlert} heading="Enter the text Here" mode={mode} />}>
          </Route>
        </Routes>
        </div>
        </>
  );
}
export default App;
















// import React,{Component} from 'react'
// // import {useState} from 'react'
// // import Users from './Users'
// // import User from './User'
// class App extends Component
// {
//   // constructor()
//   // {
//   //   super();
//   //   this.state={
//   //     data:1
//   //   }

//   // }
//   // apple()
//   // {
//   //   this.setState({data:this.state.data+1})
//   // }
//   render()
//   {
//     return(

//     )
//   }
// }
// // function App() {
// //   const[data,setData]=useState(0)
// //   function updateData()
// //   {
// //     setData(data+1)
// //   }
//   // let data="jhon";
//   // function Apple()
//   // {
//   //   return(<div>Apple Component</div>)
//   // }
//   // function apple()
//   // {
//   //   data="peter";
//   //   alert(data);
//   // }
// //   return (
// //     <div className="App">
// //      <h1>{data}</h1>
// //      {/* <User /> */}
// //      {/* <Apple /> */}
// //      <button onClick={updateData}>UpdateData</button>
// //     </div>
// //   );
// // }
