import Axios from 'axios';
import * as env from '../env/Env';

const interceptor = (store) => {
  Axios.interceptors.request.use(
    (conf) => {
      // you can add some information before send it.
      // conf.headers['Auth'] = 'some token'
      return conf;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  Axios.interceptors.response.use(
    (next) => {
      return Promise.resolve(next);
    },
    (error) => {
      // You can handle error here and trigger warning message without get in the code inside
      store.dispatch({
        type: env.actionsTypes.openModal,
        message: error.message,
      });
      return Promise.reject(error);
    }
  );
};
export default {
  interceptor,
};
