import axios from "axios"

export async function getName(code: string) {
    const url = 'http://172.16.230.1:8080/employee'
    
    const response = await axios.get('http://172.16.230.1:8080/employee/' + code)
    return response.data.userName
}