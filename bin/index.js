const color = require('colors');
const shell = require('shelljs');

const args = process.argv.slice(2);
const name = args[0];

if(shell.exec("git clone http://github.com/dpalyov/create-react-ts-next-app.git").code !== 0){
    console.log(color.red("Error connecting to the repository!"))
    process.exit(code);
};
shell.mv('create-react-ts-next-app', name);
shell.cd(name);

console.log(color.rainbow('Setting up .env file...'));
shell.touch(['.env']);
shell.exec("echo ###STORE YOUR SECRETS HERE###", {silent: true}).to(".env");

console.log(color.rainbow('Setting up dist folder...'));
shell.mkdir('dist');

console.log(color.green('Done!'));
process.exit(0);

