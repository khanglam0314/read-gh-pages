import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Message/> */}
      <Counter></Counter>
       {/* <Greet name = "Clark" heroName = "Super Man" >
         This is children props
       </Greet>
       <Greet name = "Diana" heroName = "Wonder Woman">
         <button>Action</button>
       </Greet>
       <Greet name = "Bruce" heroName = "Batman"/>
       <Welcome name = "Clark" heroName = "Super Man"/>
       <Welcome name = "Diana" heroName = "Wonder Woman"/>
       <Welcome name = "Bruce" heroName = "Batman"/>
       <Hello />  */}
    </div>
  );
}

export default App;
