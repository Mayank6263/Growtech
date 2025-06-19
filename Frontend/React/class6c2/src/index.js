import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {createContext} from 'react';
// export const myContext = createContext();

// function printtable(){
//   for(let i=1; i<5; i++){
//     console.log(2*i);
//   }
// }
// const fname = "Mayank";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <myContext.Provider value={{fname,printtable}}>
  //     <App/>
  // </myContext.Provider>
  <App/>
);
