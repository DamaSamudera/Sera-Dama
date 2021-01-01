import { login } from '../../utils/fetch';
import { setToken } from '../../utils/common';

export function fetchLogin(payload) {
  return () => {
    const data = JSON.stringify(payload);
    login(data)
      .then(res => {
        setToken(res.token);
        location.href = '/home';
      })
      .catch(err => {
        alert(err.error);
      });
  };
}
