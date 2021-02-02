import axiox from 'axios';
import {BASE_URL} from '../config'


const phoneValidation = async(number)=>{
    const data = await axiox.get(``,{
        number:number
    })
    return data
}