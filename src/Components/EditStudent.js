import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        id: '',
        name: '',
        age: '',
        email: '',
        grade: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:5000/students/${id}`)
            .then(response => setStudent(response.data))
            .catch(error => console.error('Error fetching student data:', error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/students/${id}`, student);
            alert('Student updated successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error updating student:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Edit Student Details</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" value={student.id} onChange={handleChange} placeholder="ID" required className="form-control mb-2" disabled />
                <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Name" required className="form-control mb-2" />
                <input type="number" name="age" value={student.age} onChange={handleChange} placeholder="Age" required className="form-control mb-2" />
                <input type="email" name="email" value={student.email} onChange={handleChange} placeholder="Email" required className="form-control mb-2" />
                <input type="text" name="grade" value={student.grade} onChange={handleChange} placeholder="Grade" required className="form-control mb-2" />
                <button type="submit" className="btn btn-success w-100">Update Student</button>
            </form>
        </div>
    );
};

export default EditStudent;