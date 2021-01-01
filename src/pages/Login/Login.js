import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { getToken, setToken, setUser } from '../../utils/common';
import { Button, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { fetchLogin } from './actions';

import styles from './styles.scoped.css';

export default function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  if (getToken() && location.pathname === '/login') {
    location.href = '/home';
  }

  const _handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      username: username,
      password: password,
    };
    dispatch(fetchLogin(payload));
  };

  const _handleGoogle = (res) => {
    setToken(res.wt.Ad);
    setUser(res.wt.Ad);
    location.href='/home';
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
          Login
        </Button>
        <h5>Or</h5>
        <GoogleLogin
          buttonText="Login With Google"
          className={styles['btn-google']}
          clientId="681404353061-v8ts1l9qndncojl5nb8of6gmgqu6i4t1.apps.googleusercontent.com"
          cookiePolicy={'single_host_origin'}
          onSuccess={_handleGoogle}
          responseType="token"
        />
        <p>
          dont have account?
          <Link to="/register">
            Register Here
          </Link>
        </p>
      </form>
    </section>
  );
}
