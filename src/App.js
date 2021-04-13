import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Table, Row, Col } from 'react-bootstrap';

import NavBar from './components/Navbar';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getUsers() {
      await axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        setUsers(res.data);
      })
    }
    getUsers();
  }, []); //eslint-disable-line

  useEffect(() => {
    async function getPosts() {
      await axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        setPosts(res.data);
      })
    }
    getPosts();

  }, []); //eslint-disable-line


  return (
    <div className="App">
      <NavBar/>
      <Container style={{padding: '50px 75px 0'}}>
        <Row>
          <Col><h1>Users</h1></Col>
        </Row>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user =>(
                <>
                  <tr
                    data-toggle="collapse"
                    data-target={".multi-collapse"+user.id+user.id}
                    aria-controls={'multiCollapseExample'+user.id+user.id}
                    key={user.id}
                  >
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                  </tr>
                  <tr 
                    className={"collapse multi-collapse"+user.id+user.id}
                    id={'multiCollapseExample'+user.id+user.id}
                  >
                    <th colSpan="1">Title</th>
                    <th colSpan="2">Body</th>
                  </tr>
                  {posts.map(post =>(
                    <tr
                      key={post.id}
                      className={"collapse multi-collapse"+post.userId+user.id}
                      id={'multiCollapseExample'+post.userId+user.id}
                    >
                      <td colSpan="1" >{post.title}</td>
                      <td colSpan="3">{post.body}</td>
                    </tr>
                  ))}
                </>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
