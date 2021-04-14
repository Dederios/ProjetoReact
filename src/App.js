import React, { useState, useEffect } from 'react';

import { Container, Table, Row, Col } from 'react-bootstrap';

import NavBar from './components/Navbar';
import {getPosts, getUsers} from './services/users';

function App() {
 const [users, setUsers] = useState([]);
 const [posts, setPosts] = useState([]);

  function getPostsByUserId(userId) {
    return posts.filter(post => post.userId === userId)
  }

useEffect(() => {
  async function get() {
    setUsers(await getUsers());
    setPosts(await getPosts());
  }
  get();
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
            { users.map( user =>(
                <>
                  <tr
                    data-toggle="collapse"
                    data-target={".multi-collapse"+user.id}
                    aria-controls={'multiCollapseExample'+user.id}
                    key={user.id}
                  >
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                  </tr>
                  <tr 
                    className={"collapse multi-collapse"+user.id}
                    id={'multiCollapseExample'+user.id}
                  >
                    <th colSpan="1">Title</th>
                    <th colSpan="2">Body</th>
                  </tr>
                  { getPostsByUserId(user.id).map(post =>(
                    <tr
                      key={post.id}
                      className={"collapse multi-collapse"+post.userId}
                      id={'multiCollapseExample'+post.userId}
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
