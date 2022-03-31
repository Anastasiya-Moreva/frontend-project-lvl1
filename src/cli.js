import readlineSync from 'readline-sync';

export const welcome = () => {

    // Wait for user's response.
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hello + ' + userName + '!');
}
