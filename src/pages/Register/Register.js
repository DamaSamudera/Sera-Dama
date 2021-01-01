import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { fetchRegister } from './actions';

import styles from './styles.scoped.css';

export default function Register() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const _handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      username: username,
      password: password,
    };
    dispatch(fetchRegister(payload));
  };

  return (
    <section className={styles['form-container']}>
      <form className={`${styles['form']}`} onSubmit={_handleSubmit}>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormControl
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Input your email"
            required
            type="email"/>
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormControl
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            type="password"/>
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block" type="submit">
          Register
        </Button>
      </form>
    </section>
  );
}
