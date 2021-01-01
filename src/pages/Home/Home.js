import React, { useState, useEffect } from 'react';
import { Button, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import firebase from '../../utils/Firebase';
import styles from './styles.scoped.css';

export default function Home() {
  const [username, setUsername] = useState();
  const [res, setRes] = useState({});

  useEffect(() => {
    firebase.child('email').on('value', snapshot=>{
      setRes({
        ...snapshot.val()
      });
    });
  },[]);

  const _handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: username,
    };
    firebase.child('email').push(
      data, err => {
        alert(err);
      }
    );
  };

  return (
    <section className={styles['container']}>
      <form className={`${styles['form']}`} onSubmit={_handleSubmit}>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormControl
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Input your email"
            required
            type="email"/>
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block" type="submit">
          Add
        </Button>
      </form>
      <div>
        <h5>Data Realtime</h5>
        <section>
          {
            Object.keys(res).map(id => {
              return (
                <div key={id}>{res[id].username}</div>
              );
            })
          }
        </section>
      </div>
    </section>
  );
}
