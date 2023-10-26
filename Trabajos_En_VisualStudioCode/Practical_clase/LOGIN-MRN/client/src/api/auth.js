import axios from 'axios';

const API = 'http://localhost:5000/api';


export const registerReques = user => axios.post(`${API}/register`,user);  