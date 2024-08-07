import React, { useEffect } from 'react';
import { NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import UsersList from './UsersList';
import UserForm from './UserForm';
import UserAlbums from './UserAlbums';
import AlbumPhotos from '../Albums/AlbumPhotos';
import { fetchAllUsersAction } from '/Users/danildonovskij/Desktop/program/React/Albums/albums-manager/src/store/actions/usersActions.js'
import { useDispatch, useSelector } from 'react-redux';

const styles = {
  fontSize: '30px',
  margin: 'auto',
  display: 'block',
  textAlign: 'center',
  color: 'red',
  textDecoration: 'underline',
};

function Users() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.usersList.users);

  useEffect(() => {
    dispatch(fetchAllUsersAction());
  }, [dispatch]);

  const { url, path } = useRouteMatch();

  return (
    <>
      <nav>
        <NavLink to={`${url}/add`} style={styles}>
          Add
        </NavLink>
      </nav>
      <Switch>
        <Route path={`${path}`} exact>
          <UsersList users={users} />
        </Route>
        <Route path={`${path}/add/:id`}>
          <UserForm users={users} />
        </Route>
        <Route path={`${path}/add`}>
          <Redirect to={`${path}/add/:id`} />
        </Route>
        <Route path={`${path}/:id`}>
          <UserAlbums />
        </Route>
        <Route path={`${path}/album/:id`}>
          <AlbumPhotos />
        </Route>
      </Switch>
    </>
  );
}

export default Users;
