// src/api.js
import axios from 'axios';

// Configurações do Axios para a API do Back4App
const api = axios.create({
  baseURL: 'https://parseapi.back4app.com', // URL base da API
  headers: {
    'X-Parse-Application-Id': 'Rhfy6a5VZtojymV3uE1onSDKQQqfEwY8WbC3IUMk', // Application ID
    'X-Parse-REST-API-Key': 'EqiCP7yFa9WCMsCQ7idhHdbl5TJeGV0vfyZOPLJZ',  // REST API key
    'Content-Type': 'application/json'
  }
});

export default api;
