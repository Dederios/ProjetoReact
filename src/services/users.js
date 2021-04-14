import axios from 'axios';
  
export async function getUsers() {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;

}
  
export async function getPosts() {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
}

