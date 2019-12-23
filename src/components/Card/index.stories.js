import React from 'react';

import Card from './index';

export default {
    component: Card,
    title: 'Card',
};

const cardData = {
    imdbID: 'tt2294629',
    Title: 'Frozen',
    Year: '2013',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg',
};

export const Default = () => {
    return <Card imdbID={cardData.imdbID}
        Title={cardData.Title}
        Year={cardData.Year}
        Poster={cardData.Poster} />;
};