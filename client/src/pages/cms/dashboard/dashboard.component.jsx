import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Container fluid>
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={6} lg={6} className="text-center mb-4 border rounded p-4">
                    <Link to="/" className="text-decoration-none">
                        <div className="dashboard-icon">
                            <i className="fas fa-home fa-3x"></i>
                            <p>Home</p>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} md={6} lg={6} className="text-center mb-4 border rounded p-4">
                    <Link to="/admin/faq" className="text-decoration-none">
                        <div className="dashboard-icon">
                            <i className="fas fa-question-circle fa-3x"></i>
                            <p>FAQ</p>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} md={6} lg={6} className="text-center mb-4 border rounded p-4">
                    <Link to="/admin/team" className="text-decoration-none">
                        <div className="dashboard-icon">
                            <i className="fas fa-users fa-3x"></i>
                            <p>Team</p>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} md={6} lg={6} className="text-center mb-4 border rounded p-4">
                    <Link to="/admin/contact" className="text-decoration-none">
                        <div className="dashboard-icon">
                            <i className="fas fa-envelope fa-3x"></i>
                            <p>Contact Message</p>
                        </div>
                    </Link>
                </Col>
            </Row>
        </Container>
  )
}

export default Dashboard
