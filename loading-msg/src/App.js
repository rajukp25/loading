// import logo from "./logo.svg";
import "./App.css";
// import Example from "./Count";
// import FriendStatus from "./Count";

// function App() {
//   return (
//     <div className="App">
//       <Example />
//       <FriendStatus />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoadingScreen from "./Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return (
    <div>
      {loading === false ? (
        <div className="App">
          <header className="App-header">
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
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default App;
