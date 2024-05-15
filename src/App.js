import './App.css';
import Display from './Components/Display/Display.js';
import KeyboardKey from './Components/KeyboardKey/KeyboardKey.js';
import KeyboardKeyAll from './Components/KeyboardKeyAll/KeyboardKeyAll.js';

function App() {
  return (
    <div className="App">
      <div className="keyboard">
        <Display/>
        <KeyboardKey name="1"/>
        <KeyboardKey name="2"/>
        <KeyboardKey name="3"/>
        <KeyboardKey name="4"/>
        <KeyboardKey name="5"/>
        <KeyboardKey name="6"/>
        <KeyboardKey name="7"/>
        <KeyboardKey name="8"/>
        <KeyboardKey name="9"/>
        <KeyboardKey name="+"/>
        <KeyboardKey name="0"/>
        <KeyboardKey name="-"/>
        <KeyboardKey name="*"/>
        <KeyboardKey name="/"/>
        <KeyboardKey name=","/>
        <KeyboardKey name="A/C"/>
        <KeyboardKeyAll name="="/>
      </div>
    </div>
  );
}

export default App;
