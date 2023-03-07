import axios from 'axios';
// const API_URL = 'http://localhost:3000/api/';

const login = (email, password) => {
  return axios
    .post('http://localhost:3000/api/login', {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        console.log('response.data.accessToken', response.data.accessToken);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
    });
};
export { login };
