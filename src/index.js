import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faClock, faEye, faReply, faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import Container from "./components/Container";

library.add(faEye, faThumbsDown, faThumbsUp, faClock, faReply);


// userAvatar = {'https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png'} comment = {getSampleComment()}
// ReactDOM.render(<RecipeReviewCard disLikeCount = {35}/>, document.getElementById('root'));
ReactDOM.render(<Container />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();