import axios from 'axios'


const getEmployees = async() => {
    return await axios.get('https://jsonplaceholder.typicode.com/users')
}
const getManagers = async() => {
    return await axios.get('https://jsonplaceholder.typicode.com/users')
}

export  {getEmployees,getManagers};