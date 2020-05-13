import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Icon } from 'semantic-ui-react';

//Components
import WarningModal from './Components/WarningModal';
//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import modalReducer from './Store/modalReducer';
//Service, Axios
import ServiceBase from './Services/ServiceBase';
import Interceptor from './Services/ServiceBase.interceptor';
const store = createStore(modalReducer);
Interceptor.interceptor(store);

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    ServiceBase.get('http://dummy.restapiexample.com/api/v1/employees').then(
      (next) => {
        setUsers(next.data.data);
      }
    );
  }, []);

  const getData = () => {
    ServiceBase.get('http://dummy.restapiexample.com/api/v1/employees1').then(
      (next) => {
        setUsers(next.data.data);
      }
    );
  };
  return (
    <div className='main'>
      <Provider store={store}>
        <Button animated onClick={getData}>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>{' '}
        <ul>
          {users.map((o) => {
            return <li key={o.id}> {o.employee_name} </li>;
          })}
        </ul>
        <WarningModal />
      </Provider>
    </div>
  );
}

export default App;
