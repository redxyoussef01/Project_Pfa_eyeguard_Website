import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function Home() {
    const [authorisations, setAuthorisations] = useState([]);

    useEffect(() => {
        fetchAuthorisations();
    }, []);

    const fetchAuthorisations = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/authorisations/');
            if (Array.isArray(response.data.autorisations)) {
                setAuthorisations(response.data.autorisations);
            } else {
                setAuthorisations([]);
            }
        } catch (error) {
            console.error('Error fetching authorisations:', error);
        }
    };

    const handleToggleAuthorization = async (id) => {
        try {
            await axios.put(`http://localhost:8000/api/autorisations/${id}/toggle-authorization/`);
            // Refresh authorisations data after updating authorization status
            fetchAuthorisations();
        } catch (error) {
            console.error('Error toggling authorization:', error);
        }
    };

    return (
        <div className="container">
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                <div className="row">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Personne</th>
                                    <th>Salle</th>
                                    <th>Authorized</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {authorisations.map((authorisation, index) => (
                                    <tr key={authorisation.id}>
                                        <td>{index + 1}</td>
                                        <td>{authorisation.personne}</td>
                                        <td>{authorisation.salle}</td>
                                        <td>{authorisation.authorized ? 'True' : 'False'}</td>
                                        <td>
                                            <Button variant="primary" onClick={() => handleToggleAuthorization(authorisation.id)}>
                                                Toggle Authorization
                                            </Button>
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
