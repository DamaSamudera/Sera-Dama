import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconUser from '../../assets/ic-user.svg';
import Logo from '../../assets/logo.svg';
import { clearStorages, getToken , getUser } from '../../utils/common';
import styles from './styles.scoped.css';

export default function PageBase({ children }) {

  if (!getToken()) {
    location.href = '/login';
  } else if (getToken() && location.pathname === '/login') {
    location.href = '/dashboard';
  }

  const _handleLogout = () => {
    clearStorages();
    location.href='/';
  };

  return (
    <>
      <div className={styles.container}>
        <header>
          <span>
            <img src={Logo} />
          </span>
          <span onClick={_handleLogout}>
            <h6>{getUser() ? getUser() : 'Welcome'}</h6>
            <img src={IconUser} />
          </span>
        </header>
        <section className={styles.sidebar}>
          <Link className={styles.font} to="/home">Firebase Test</Link>
          <Link className={styles.font} to="/filter">Filter Test</Link>
        </section>
        <section className={styles.content}>
          {children}
        </section>
      </div>
    </>
  );
}

PageBase.defaultProps = {
  children: null,
};

PageBase.propTypes = {
  children: PropTypes.node,
};
