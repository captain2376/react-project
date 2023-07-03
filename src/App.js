import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import {Button, Toast} from 'reactstrap'
import {ToastContainer,toast} from 'react-toastify'


function App() {
  const btnHandle1=()=>{
    toast("This is my first message")
  }
  const btnHandle=()=>{
    toast.success("Done",{position:'bottom-center'});
  }
  return (
    <div className="App">
      {/* <Header name="Sindhu" title="first_card"/>
      <hr/>
      <Header name="Harry" title="Second_card" />
      <hr/>
      <h1>This is my React App</h1>
      <p>Because I want to develop applications that call Rest API's</p>
      <Header name="Harry" title="Footer" />
      <hr/> */}
      {/* <h1>This is bootstrap components</h1>
      <Button color="primary" >Click me</Button>
      <hr/>
      <h1>This is bootstrap Components</h1>
      <Button color="warning" outline>First React Button</Button> */}
      <ToastContainer/>
      <h1>This is bootstrap components</h1>
      <Button color='warning' outline onClick={btnHandle} >First React Button</Button>

    </div>
  );
}

export default App;
