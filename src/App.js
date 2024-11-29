import React from 'react'
import './App.css';
import './appStyles.css'

import Demo from './components/Demo';
import Formik from './components/Formik';
import UIDemo from './components/UIDemo';
import Redux from './components/Redux';

// import Navbar from './components/crudapp/layout/Navbar';
// import Home from './components/crudapp/pages/Home';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import AddTodo from './components/crudapp/todos/AddTodo';
// import EditTodo from './components/crudapp/todos/EditTodo';
// import Todo from './components/crudapp/todos/Todo';
// import NotFound from './components/crudapp/pages/NotFound';

import Navbar from './components/usercrudapp/layout/Navbar';
import Home from './components/usercrudapp/pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import AddUser from './components/usercrudapp/users/AddUser';
import EditUser from './components/usercrudapp/users/EditUser';
import User from './components/usercrudapp/users/User';
import NotFound from './components/usercrudapp/pages/NotFound';

import { theme, ThemeProvider } from '@chakra-ui/react'

function App() {
  return (
     <Router>
      {/* <ThemeProvider theme={theme}>  */}

      <div className="App">
        {/* <Demo /> */}
        {/* <Formik/> */}
        {/* <UIDemo/> */}
        <Redux/>

        {/* <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos/add" component={AddTodo} />
          <Route exact path="/todos/edit/:id" component={EditTodo} />
          <Route exact path="/todos/:id" component={Todo} />
          <Route exact path="/NotFound" component={NotFound} />
        </Switch> */}

        {/* <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/NotFound" component={NotFound} />
        </Switch> */}

      </div>
       {/* </ThemeProvider>  */}
     </Router> 
  )
}
export default App;