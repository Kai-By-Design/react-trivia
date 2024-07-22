import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// import { useState } from "react";
// // import Alert from "./components/Alert";
// import Button from "./components/Button";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        {/* <Button>My Button</Button> */}
        <h1>Welcome to my Trivia App!</h1>
        <h4>
          <span>
            <h3>Instructions: </h3>
          </span>
          There are 20 questions. Select you answers, then click the next
          button.
        </h4>
      </div>
      <div>
        <button>START</button>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
