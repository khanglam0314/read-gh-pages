import logo from './logo.svg';
import './App.css';
import Greet, {Greet1 , Greet2 } from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';

function App() {
  return (
    <div className="App">
      <FRParentInput />
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <PureComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/*Approach 3: CSS Modules*/}

      {/*Global*/}
      {/* <h1 className='error'>Error</h1> */}
      {/* Notes: CSS applies to every child component -> conflict*/}

      {/*Module*/}
      {/* <h1 className={styles.success}>Success</h1>   */}
      {/*Notes: Classes are locally scoped by default 
      so can not be used in Child Component */}


      {/* <Inline /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
    {/* <Message/> 
      <Counter></Counter>
       /* <Greet name = "Clark" heroName = "Super Man" >
         This is children props
       </Greet>
       <Greet name = "Diana" heroName = "Wonder Woman">
         <button>Action</button>
       </Greet>
       <Greet name = "Bruce" heroName = "Batman"/>
       <Welcome name = "Clark" heroName = "Super Man"/>
       <Welcome name = "Diana" heroName = "Wonder Woman"/>
       <Welcome name = "Bruce" heroName = "Batman"/>
       <Hello />  
       <Greet1 name = "Bruce" heroName = "Batman"/>
       <Greet2 name = "Clark" heroName = "Super Man"/>
       <Welcome name = "Diana" heroName = "Wonder Woman"/>
       */}
    </div>
  );
}

export default App;
