import React from 'react';
import { Row, Col } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { FaCheck, FaExclamationCircle } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';

const Message = ({ text, type }) => {
  return (
    <Row className="toastMessage">
      <Col xs="2">
        {type === 'error' ? (
          <FaExclamationCircle className="icon" />
        ) : (
          <FaCheck className="icon" />
        )}
      </Col>
      <Col xs="10" className="text">
        {text}
      </Col>
    </Row>
  );
};

const ToastAlert = () => {
  return <ToastContainer autoClose={2000} />;
};

export { ToastAlert, Message };
