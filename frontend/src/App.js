import { BrowserRouter , Route, Routes } from "react-router-dom";

import Dashboard from "./screens/Dashboard";
import Memberform from "./screens/Memberform";

function App() {
  return (
    <div className="App">
     

    <BrowserRouter>
      <Routes>

        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/form" element={<Memberform/>}/>

      </Routes>
    
    
    </BrowserRouter>

    </div>
  );
}

export default App;
