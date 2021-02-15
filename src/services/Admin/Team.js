import axios from 'axios'


const createTeam = async(data) => {
    return await axios.post('',data)
}
const getTeams = async()=>{
    return await axios.get('https://jsonplaceholder.typicode.com/users')
}

export  {createTeam,getTeams};