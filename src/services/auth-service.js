import axios from 'axios';


axios.defaults.baseURL = 'https://api-shark.herokuapp.com';


const apiService = {
 
  logInUser(credentials) {
    debugger
    return axios.post('/login', credentials);
  },

  registerUser(credentials) {
    debugger
    return axios.post('/signup', credentials);
  },

  logOutUser() {
    return axios.post('/logout');
  },
 
};

export default apiService;