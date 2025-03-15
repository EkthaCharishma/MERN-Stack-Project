import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
    const [student, setStudent] = useState({
        id: '',
        name: '',
        age: '',
        email: '',
        grade: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/students', student);
            alert('Student added successfully!');
            setStudent({ id: '', name: '', age: '', email: '', grade: '' });
        } catch (error) {
            console.error('Error adding student:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" value={student.id} onChange={handleChange} placeholder="ID" required className="form-control mb-2" />
                <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Name" required className="form-control mb-2" />
                <input type="number" name="age" value={student.age} onChange={handleChange} placeholder="Age" required className="form-control mb-2" />
                <input type="email" name="email" value={student.email} onChange={handleChange} placeholder="Email" required className="form-control mb-2" />
                <input type="text" name="grade" value={student.grade} onChange={handleChange} placeholder="Grade" required className="form-control mb-2" />
                <button type="submit" className="btn btn-primary w-100">Add Student</button>
            </form>
        </div>
    );
};

export default AddStudent;