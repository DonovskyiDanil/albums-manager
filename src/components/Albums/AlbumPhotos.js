import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dataService from '../../data-service.js';

function AlbumPhotos() {
  const [photos, setPhotos] = useState([]);
  
  const { id } = useParams();

  useEffect(() => {
    dataService.get(`/photos?albumId=${id}`)
      .then(({ data }) => setPhotos(data))
      .catch((error) => console.log(error));
  }, [id]) 

  return (
    <div>
      {photos.map(({ title, id, thumbnailUrl }) => (
        <p key={id}>
          {title}
          <img
            src={thumbnailUrl}
            alt={title}
            width='150px'
          />
        </p>
      ))}
    </div>
  );
}

export default AlbumPhotos;
