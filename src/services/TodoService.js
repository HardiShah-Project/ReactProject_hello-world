
import axios from "axios";

const apiurl='http://localhost:3002/todos';

export function getTodoService(){
    return axios.get(`${apiurl}`)
}
export function editTodoService(id,todo) {
  return axios.put(`${apiurl}/${id}`, todo);
}
export function getTodoServiceById(id){
    return axios.get(`${apiurl}/${id}`)
}
export function addTodoService(todo) {
    return axios.post(`${apiurl}`, todo);
  }
  export function deleteTodoServiceById(id){
    return axios.delete(`${apiurl}/${id}`)
}
