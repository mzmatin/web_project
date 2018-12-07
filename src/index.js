import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import RecipeReviewCard from "./components/NewsHeader";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import ExpandExample from "./components/ExpandExample";
import ImageAvatars from "./components/utils/ImageAvatars";

library.add(faEye, faThumbsDown, faThumbsUp);

// ReactDOM.render(<RecipeReviewCard disLikeCount = {35}/>, document.getElementById('root'));
ReactDOM.render(<ImageAvatars size = {100} name = {'Matin'}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
