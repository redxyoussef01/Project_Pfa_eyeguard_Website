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
                    </div>
                    <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "#4f506f" }}><h2><b>Cam 1</b></h2></div>
                </div>
                
            </div>
        </div>
    );
}

export default Home;
