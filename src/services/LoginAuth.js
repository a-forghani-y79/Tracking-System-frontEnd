import axiox from 'axios';


export const phoneValidation = async (number) => {
    return await axiox.get("http://localhost:8080/login-rest/" + number)
}
export const checkPass = async (number, password) => {
    return await axiox.post("http://localhost:8080/login-rest/authenticate", {
        phone: number,
                password: password
        }
    )
}
export const checkOtp = async (number,password) => {
    return await axiox.post("http://localhost:8080/send-temp-pass-authentication",{
        phone: number,
        password: password
    })
}
export const otp =async (number) =>{
    return await axiox.get("http://localhost:8080/send-temp-pass/"+number)
}