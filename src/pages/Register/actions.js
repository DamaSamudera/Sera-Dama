import { register } from '../../utils/fetch';
import { setToken } from '../../utils/common';

export function fetchRegister(payload) {
  return () => {
    const data = JSON.stringify(payload);
    register(data)
      .then(res => {
        setToken(res.token);
        alert('Register Success, you can login now');
        location.href = '/';
      })
      .catch(err => {
        alert(err.error);
      });
  };
}
