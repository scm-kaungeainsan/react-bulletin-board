import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect } from 'react-router-dom';


import Header from './components/header/Header';
import Login from './pages/LoginPage/Login';
import ChangePassword from './pages/ChangePasswordPage/ChangePassword';
import UserUpdate from './pages/UserUpdatePage/UserUpdate';
import UserCreate from './pages/UserCreatePage/UserCreate';
import UserProfile from './pages/UserProfilePage/UserProfile';
import UserList from './pages/UserListPage/UserList';
import PostCreate from './pages/PostCreatePage/PostCreate';
import PostList from './pages/PostListPage/PostList';
import PostUpdate from './pages/PostEditPage/PostEdit';
import UploadCsv from './pages/CsvUploadPage/CsvUploadPage';


import { PrivateRoute } from './helpers/PrivateRoute';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/change-password/:userId' component={ChangePassword} />
          <PrivateRoute exact path='/upload-csv' component={UploadCsv} />
          <PrivateRoute exact path='/user-create' component={UserCreate} />
          <PrivateRoute exact path='/user-profile' component={UserProfile} />
          <PrivateRoute exact path='/user-list' component={UserList} />
          <PrivateRoute exact path='/user-update/:userId' component={UserUpdate} />
          <PrivateRoute exact path='/post-create' component={PostCreate} />
          <PrivateRoute exact path='/post-list' component={PostList} />
          <PrivateRoute exact path='/post-update/:postId' component={PostUpdate} />
          <Route path="*" render={() => <Redirect to="/login" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
