import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyLine from "./pages/MyLine";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/line" element={<MyLine />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
