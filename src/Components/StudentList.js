import React, { useState, useEffect } from 'react';
import axios from 'axios';

const fetchStudents = async () => {
    try {
        const response = await axios.get('http://localhost:3000/');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000')
            .then(response => setStudents(response.data))
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center">Student Management System</h2>
            <table className="table table-bordered mt-3">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student._id}>
                            <td>{student._id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.email}</td>
                            <td>{student.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;