const bgColors = ['#ffc8c8', '#ffdb96', '#d4ebce', '#cde7f3', '#cdabff'];
const colorIndex = Math.floor(Math.random() * bgColors.length);
const chosenColor = bgColors[colorIndex];

const background = document.querySelector('.background');
background.style.backgroundColor = chosenColor;
