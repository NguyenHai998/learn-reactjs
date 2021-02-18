import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc Hoa Thịnh Hành',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/4/0/c/740ce847c01a21c904193bf748bd58c9.jpg'
        },
        {
            id: 2,
            name: 'Rap Việt Nghe Là Ghiền',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/9/b/6/39b67d8d78800222a8a2e955a239b962.jpg'
        },
        {
            id: 3,
            name: 'Trào Lưu Nhạc Hot',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/f/4/2/8f42c44d1dfe5df04d7831e107e74b7f.jpg'
        },
        {
            id: 4,
            name: 'Khi Hit Rồi thì Làm Gì',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/3/9/c/d39c04a38e843e827bc9dd00c4d12a3f.jpg'
        },
        {
            id: 5,
            name: 'Trào Lưu Nhạc Hot',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/c/7/4/7c7478471ca1b3b21583eecc8f815d1c.jpg'
        },

    ];
    return (

        <div>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;