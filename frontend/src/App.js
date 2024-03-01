import { BrowserRouter , Route, Routes } from "react-router-dom";

import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <div className="App">
     

    <BrowserRouter>
      <Routes>

        <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
    
    
    </BrowserRouter>

    </div>
  );
}

export default App;
