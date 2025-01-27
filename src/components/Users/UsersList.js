import React  from 'react';
import { useDispatch } from 'react-redux';
import { Link, useRouteMatch} from 'react-router-dom';
import './UsersList.css';
import {deleteUserAction} from '/Users/danildonovskij/Desktop/program/React/Albums/albums-manager/src/store/actions/usersActions.js'


function UsersList({users}) {


  const {url} = useRouteMatch()

  
const dispatch = useDispatch();
  const onDelete = (id) => {
    dispatch (deleteUserAction(id))
  }
  return (
    <ul className='users-container'>
      {users.map((user) => {
        return (
          <li key={user.id} className='item-container'>
            <Link
            to={`${url}/${user.id}`}
            className='nav-user'
            >
              <p className='user'>{user.name} {user.phone}</p>
            </Link>
            <Link to={`${url}/add/${user.id}`}>
            <p id='edit' className='fa fa-pencil'></p>
            </Link>
            <p id='del' className='fa fa-trash-o' onClick={() => onDelete(user.id)}></p>
          </li>
        )
      })}
    </ul>
  )
}
export default UsersList;
