import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

function Home() {
    const [alerts, setalerts] = useState([]);
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
            const response = await axios.get('http://localhost:8000/api/alerts/');
            setalerts(response.data.alerts);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="container">
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                <div className="row">
                    <div className="col-sm-3 mt-5 mb-4 text-gred">
                        <div className="search">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search alert" aria-label="Search" />
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "green" }}><h2><b>alerts List</b></h2></div>
                </div>
                <div className="row">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Personne</th>
                                    <th>Salle</th>
                                    <th>Capture</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alerts.map((alert, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{alert.personne}</td>
                                        <td>{alert.salle}</td>
                                        <td>
                                            {alert.capture && (
                                                <img src={`data:capture/jpeg;base64,${alert.capture}`} alt="alert" style={{ maxWidth: '100px' }} />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
