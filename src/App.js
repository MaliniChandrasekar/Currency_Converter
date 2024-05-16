import CurrencyConverter from "./CurrencyConverter";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
    <Route path ="/" element = {<CurrencyConverter />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
