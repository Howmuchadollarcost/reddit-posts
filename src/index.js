import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Modal from 'react-modal';


Modal.setAppElement('#root');

const props = {};

ReactDOM.render(<App {...props} /> , document.getElementById('root'));