import ReactDOM from 'react-dom/client';
import React from 'react'
import App from "./components/App";

const init = async () => { 
  // ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

}

init();


