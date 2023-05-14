import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import DeleteUser from './users/DeleteUser';
import EditUser from './users/EditUser';
import Testx from './users/Testx';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/adduser" element={<AddUser/>}/>
          <Route exact path="/deleteuser" element={<DeleteUser/>}/>
          <Route exact path="/edituser" element={<EditUser/>}/>
          <Route exact path="/x" element={<Testx/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
