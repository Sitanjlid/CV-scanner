// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./App.css";
import FileUpload from "./components/FileUpload";


function App() {
  return (
    <div className="App">
      <h1>CV-Scanner</h1>
      <div className="description-box">
        <p>This is a basic resume analyzer where you can upload your resume and select the job role
          you're targeting. It'll check for important keywords based on that role and show your score,
          how well your resume matches, and some suggestions to improve it.
          Nothing fancy — just something to help you get a clearer idea of where your resume stands. <br />
          ⚠️ Don't forget to convert your resume into text format before uploading!</p>
      </div>

      <FileUpload />
    </div>
  );
}

export default App;
