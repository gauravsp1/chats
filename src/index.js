import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDefaultNormalizer } from '@testing-library/react';

toast.configure();

//chathouse-53a7e
// email: gauravtest@gmail.com
// password: gaurav12#
// handle: gaurav12#


ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);