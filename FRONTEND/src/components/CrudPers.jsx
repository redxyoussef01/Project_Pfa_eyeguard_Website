import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

import { Button, Modal, Form } from 'react-bootstrap';

function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="container ">
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                <div className="row ">

                    <div className="col-sm-3 mt-5 mb-4 text-gred">
                        <div className="search">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search Personnal" aria-label="Search" />
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "green" }}><h2><b>Personnals List</b></h2></div>
                    <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
                        <Button variant="primary" onClick={handleShow}>
                            Add New Personnal
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="table-responsive " >
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Country</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Rual Octo</td>
                                    <td>Deban Steet</td>
                                    <td>Newyork</td>
                                    <td>USA</td>
                                    <td>
                                        <a href="#" className="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}><i className="material-icons">&#xE417;</i></a>
                                        <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                                        <a href="#" className="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}><i className="material-icons">&#xE872;</i></a>
                                    </td>
                                </tr>
                                {/* Other table rows */}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="model_box">
                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Record</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group controlId="formCountry">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Country" />
                                </Form.Group>
                                <Form.Group controlId="formCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter City" />
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter Password" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Add Record
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
