import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RatingSystem from './RatingSystem';
import NavBar from './NavBar';
import './styles.css';

export default function App() {
  return (
    <div className="App">
       <Router>
                <NavBar />
                    <Routes>
                    <Route path="/" element={<RatingSystem />} /> 
                    {/* <Route path="/clickers" element={<UseStateHook />}/>
                    <Route path="/age-calculator" element={<AgeCalculator />}/>
                    <Route path="/timer" element={<Timer />}/>
                    <Route path="/clock" element={<Clock />}/>
                    <Route path="/vacation" element={<Vacation />}/> */}
                    </Routes>
        </Router>
    </div>
  )
};
