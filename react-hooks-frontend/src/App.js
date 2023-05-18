import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from "./components/AddEmployeeComponent";

function App() {
  return (
    <div >
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />}></Route>
            <Route path="/add-employees" element={<AddEmployeeComponent />}></Route>
            <Route path="/edit-employee/:id" element={<AddEmployeeComponent/>}></Route>
            <Route path="*" element={<ListEmployeeComponent />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
