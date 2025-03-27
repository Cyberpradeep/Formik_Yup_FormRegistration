// import logo from './logo.svg';
import { Navigate, BrowserRouter as Router, Route,Link ,Routes} from 'react-router-dom';
import './App.css';
import StdReg from './components/StdReg';
import EmployeeFeedbackForm from './components/EmployeeFeedbackForm';

function App() {
  return (
    <div>
    <Router>
   <div>
    <center><Link to="/student">Student Registration  | </Link>
    <Link to="/employee">Employee Feedback</Link></center>
   </div>
   <Routes>
   <Route path="/" element={<Navigate to="/student/"/>}></Route>
   <Route path="/student" element={<StdReg/>}></Route>  
   <Route path="/employee" element={<EmployeeFeedbackForm/>}></Route>
   </Routes>
   </Router>
   </div>
  )
}

export default App;
