// generateur de nombre random de 1 à 6
const firstRandomNum = Math.floor(Math.random() * 6) + 1;
const secondRandomNum = Math.floor(Math.random() * 6) + 1;

// image  de chaque face
const dicePlayer1 = 'assets/face_' + firstRandomNum + '.png';
const dicePlayer2 = 'assets/face_' + secondRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', dicePlayer1);
document.querySelectorAll('img')[1].setAttribute('src', dicePlayer2);

// conditions de victoire
if (firstRandomNum > secondRandomNum) {
    document.querySelector('h1').innerText = ("Player 1 win !")
} else if (secondRandomNum > firstRandomNum) {
    document.querySelector('h1').innerText = ("Player 2 win !")
} else {
    document.querySelector('h1').innerText = ("It's a draw...")
}