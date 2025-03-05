import chalk from 'chalk';
// Mixed messages project
console.log('This is the Mixed Messages project');
console.log(chalk.blue(`
+================================================+
|                                                |
|  ╦═╗┌─┐┌┐┌┌┬┐┌─┐┌┬┐  ╔╦╗┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐  |
|  ╠╦╝├─┤│││ │││ ││││  ║║║├┤ └─┐└─┐├─┤│ ┬├┤ └─┐  |
|  ╩╚═┴ ┴┘└┘─┴┘└─┘┴ ┴  ╩ ╩└─┘└─┘└─┘┴ ┴└─┘└─┘└─┘  |
|                                                |
+================================================+`));

// TODO: Create a random message when the program runs

// TODO: Creat an array of messages
const messages = [
    'Hello, World!',
    'This is a random message',
    'I am learning JavaScript',
    'I am learning to code',
    'I am learning to code in JavaScript',
    'I am learning to code in JavaScript using Node.js',
    'I am learning to code in JavaScript using Node.js and Git',
    'I am learning to code in JavaScript using Node.js and Git and GitHub',
    'I am learning to code in JavaScript using Node.js and Git and GitHub and VSCode',
    'I am learning to code in JavaScript using Node.js and Git and GitHub and VSCode and the Command Line',
];
// TODO: Create a function that generates a random message
const randomMessage = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

randomMessage();