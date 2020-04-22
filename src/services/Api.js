import axios from "axios";
export default () => {
  let currentUser = JSON.parse(window.localStorage.currentUser)
 
  return axios.create({
    baseURL: "http://localhost:3001/api",
    headers: {
     "auth-token":currentUser && currentUser.token
    }
  });
};