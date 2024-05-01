import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

function Home() {
    const [personnes, setPersonnes] = useState([]);
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        nom: '',
        prenom: '',
        email: '',
        image: null
    });
    const [deleteSuccess, setDeleteSuccess] = useState(false); // Define delete success state

    const handleClose = () => {
        setShow(false);
        setFormData({
            id: '',
            nom: '',
            prenom: '',
            email: '',
            image: null
        });
    };

    const handleShow = () => setShow(true);

    useEffect(() => {
        fetchData();
    }, [deleteSuccess]); // Trigger data fetch when delete success changes

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/personnes/');
            setPersonnes(response.data.personnes);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleEdit = (personne) => {
        setFormData({
            id: personne.id,
            nom: personne.nom,
            prenom: personne.prenom,
            email: personne.email,
            image: personne.image // Add image data to form data for editing
        });
        handleShow();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('id', formData.id); // Include ID in the form data for updating
        data.append('nom', formData.nom);
        data.append('prenom', formData.prenom);
        data.append('email', formData.email);
        data.append('image', formData.image);

        try {
            if (formData.id) {
                await axios.put(`http://localhost:8000/api/personnes/update/${formData.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/personnes/new', data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'X-CSRFToken': getCookie('csrftoken')
                    }
                });
            }
            handleClose(); // Close modal after successful submission
            setDeleteSuccess(!deleteSuccess); // Trigger data fetch after successful submission
        } catch (error) {
            console.error('Error submitting the form:', error);
            // Display error message to the user
            alert('Error submitting the form');
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this personne?');
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:8000/api/personnes/delete/${id}/`);
            setDeleteSuccess(!deleteSuccess); // Set delete success to trigger data fetch
            alert('Personne deleted successfully');
        } catch (error) {
            console.error('Error deleting personne:', error);
            // Display error message to the user
            alert('Error deleting personne');
        }
    };

    const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    };

    return (
        <div className="container">
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                <div className="row">
                    <div className="col-sm-3 mt-5 mb-4 text-gred">
                        <div className="search">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search Personne" aria-label="Search" />
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "green" }}><h2><b>Personnes List</b></h2></div>
                    <div className="col-sm-3 offset-sm-1 mt-5 mb-4 text-gred">
                        <Button variant="primary" onClick={handleShow}>
                            Add New Personne
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nom</th>
                                    <th>Prenom</th>
                                    <th>Email</th>
                                    <th>Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {personnes.map((personne, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{personne.nom}</td>
                                        <td>{personne.prenom}</td>
                                        <td>{personne.email}</td>
                                        <td>
                                            {personne.image && (
                                                <img src={`data:image/jpeg;base64,${personne.image}`} alt="Personne" style={{ maxWidth: '100px' }} />
                                            )}
                                        </td>
                                        <td>
                                            <a href="#" className="edit" title="Edit" data-toggle="tooltip" onClick={() => handleEdit(personne)}>
                                                <i className="material-icons">&#xE254;</i>
                                            </a>
                                            <a href="#" className="delete" title="Delete" data-toggle="tooltip" onClick={() => handleDelete(personne.id)}>
                                                <i className="material-icons">&#xE872;</i>
                                            </a>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="model_box">
                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add/Edit Record</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Nom</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Nom" name="nom" value={formData.nom} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group controlId="formPrenom">
                                    <Form.Label>Prenom</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Prenom" name="prenom" value={formData.prenom} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" name="email" value={formData.email} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group controlId="formImage">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="file" accept="image/*" name="image" onChange={handleChange} />
                                    {formData.image && (
                                        <div>{formData.image.name}</div>
                                    )}
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    {formData.id ? 'Update Record' : 'Add Record'}
                                </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Home;
