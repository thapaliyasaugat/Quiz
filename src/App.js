import logo from './logo.svg';
import './App.css';
import React, { useState, useContext } from 'react'
import MainMenu from './Components/MainMenu';
import EndScreen from './Components/EndScreen';
import Quiz from './Components/Quiz';
import { QuizContext } from './Helpers/Context'
function App() {
  const [gameState, setGameState] = useState('menu')
  const [score, setscore] = useState(0)
  return (
    <div className="App">
      <h2>Quiz App</h2>
      <QuizContext.Provider value={{ gameState, setGameState, score, setscore }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
