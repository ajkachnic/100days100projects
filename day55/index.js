const eightBall = document.getElementById('eightBall');
const answer = document.getElementById('answer');

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];

}
const possibleAnswers = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes - definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don\'t count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
]
eightBall.addEventListener('click', () => {
    answer.innerHTML = `<p>${possibleAnswers.random()}</p>`
})