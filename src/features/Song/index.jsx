import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Top 100 bài hát nhạc trẻ hay nhất',
      thumbnaiURL:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/4/e/4/54e47c54df51c2ee17ca391a556b790a.jpg',
    },
    {
      id: 2,
      name: 'Top 100 nhạc rap Việt hay nhất',
      thumbnaiURL:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/8/8/e/188e45098127c7f75cc4b715bf01bcd6.jpg',
    },
    {
      id: 3,
      name: 'Top 100 Pop Âu Mỹ hay nhất',
      thumbnaiURL:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/b/c/b/dbcb684ed2319a6333917085312999c9.jpg',
    },
  ];
  return (
    <div>
      <h3>Album List</h3>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
