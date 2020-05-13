import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Icon, List, Grid, Header } from 'semantic-ui-react';

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
  const errorURL = 'http://dummy.restapiexample.com/api/v1/employees1';
  const trueURL = 'http://dummy.restapiexample.com/api/v1/employees';
  useEffect(() => {
    getData(trueURL);
  }, []);

  const getData = (url) => {
    ServiceBase.get(url).then((next) => {
      setUsers(next.data.data);
    });
  };
  return (
    <div className='main'>
      <Provider store={store}>
        <Grid columns={2} divided className='w-100'>
          <Grid.Column className='center-items'>
            <Header as='h1' className='transform-vertical'>
              Expected Response
            </Header>
            <List>
              {users.map((o) => (
                <List.Item key={o.id}>{o.employee_name}</List.Item>
              ))}
            </List>
          </Grid.Column>
          <Grid.Column className='center-items'>
            <Button
              animated
              onClick={getData.bind(this, errorURL)}
              color='google plus'>
              <Button.Content visible>Call error API</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Grid.Column>
        </Grid>

        <WarningModal />
      </Provider>
    </div>
  );
}

export default App;
