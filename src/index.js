import generateJoke from "./generateJoke";
import './styles/main.scss';
import myPic from './assets/myPic.JPG';

const laughImg = document.getElementById('laughImg');
laughImg.src = myPic;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();
