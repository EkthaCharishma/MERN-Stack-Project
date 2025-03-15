import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import StudentList from './Components/StudentList';
import AddStudent from './Components/AddStudent';

const App = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/add" element={<AddStudent />} />
        </Routes>
    </Router>
);

export default App;