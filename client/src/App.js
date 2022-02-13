import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Home from './components/Home/Home';
import AddQuestion from './components/AddQuestion/AddQuestion';
import Nav from './components/NavBar/Nav';
import Library from './components/Library/Library';
import ExamRecommondation from './components/ExamRecommondation/ExamRecommondation';
import SmartAttendence from './components/SmartAttendence/SmartAttendence';
import Updates from './components/Updates/Updates';
import Todo from './components/TodoApp/Todo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={[<Nav />, <Login />]} />
          {/* // <Route path='/' element={<Login />} /> */}
          <Route path='/signup' exact element={<SignUp />} />
          <Route path='/forgotPassword' exact element={<ForgotPassword />} />
          <Route path='/home' exact element={<Home />} /> 
          {/* <Route path='/home' exact element={<HomePage />} /> */}
          <Route path='/addQuestion' exact element={<AddQuestion />} />
          <Route path='/Library' exact element={<Library />} />
          <Route path='/todo' exact element={<Todo />} />
          <Route path="/updates" exact element = {<Updates />} />
          <Route path='/examRecommodation' exact element={<ExamRecommondation />} />
          <Route path='/smartAttendance' exact element={<SmartAttendence />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
