import React from 'react';
import './AlbumList.css';
import {Link,  useRouteMatch } from 'react-router-dom';


function AlbumsList({ albums }) {

  const {url} = useRouteMatch()
  return (
    <ul className="albums-container">
      {albums.map(({ id, title }) => (
        <li key={id} className="album-item">
      <Link to={`${url}/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default AlbumsList;
