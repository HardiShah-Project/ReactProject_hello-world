import axios from "axios";

const apiurl='http://localhost:3002/users';

export function getUserService(){
    return axios.get(`${apiurl}`)
}
export function editUserService(id,values) {
  return axios.put(`${apiurl}/${id}`, values);
}
export function getUserServiceById(id){
    return axios.get(`${apiurl}/${id}`)
}
export function addUserService(values) {
    return axios.post(`${apiurl}`, values);
  }
  export function deleteUserServiceById(id){
    return axios.delete(`${apiurl}/${id}`)
}
