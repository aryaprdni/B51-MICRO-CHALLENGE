import CountDuration from "./views/CountDuration";
import CurrencyConvert from "./views/CurrencyConvert";
import MatchingCard from "./views/MatchingCard";
import Home from "./views/Home";
import MobileLegend from "./views/MobileLegend";
import SalaryCalculating from "./views/SalaryCalculating";
import WordScramb from "./views/WordScramb";
import TicTacToe from "./views/TicTacToe";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/count-duration" element={<CountDuration />}/>
        <Route path="/currency-convert" element={<CurrencyConvert />}/>
        <Route path="/matching-card" element={<MatchingCard />}/>
        <Route path="/mobile-legend" element={<MobileLegend />}/>
        <Route path="/salary-calculating" element={<SalaryCalculating />}/>
        <Route path="/word-scramb" element={<WordScramb />}/>
        <Route path="/tictactoe" element={<TicTacToe />}/>
        
      </Routes>
    </Router>
  );
}

export default App