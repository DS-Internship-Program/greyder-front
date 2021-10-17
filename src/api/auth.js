import axios from 'axios';

const login = credentials => {
    axios.post('/users', credentials)
}

export default {
    login
}