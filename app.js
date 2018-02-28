const Discord = require('discord.js');
const colors = require('colors');
const client = new Discord.Client();
const preferencias = require('./preferences.json');
const prefix = preferencias.prefix;
const fs = require('fs');
client.commands = new Discord.Collection();
fs.readdir('./comandos/', (err, files) =>{
    if(err) console.log(err);

    var jsfiles = files.filter(f => f.split('.').pop == "js");
    if(jsfiles.lenght >= 0) console.log('Nenhum comando encontrado.');

    jsfiles.forEach((f, i) => {
        var cmds = require(`./comandos/${f}`);
        console.log(`Lendo comando ${f}`);
        client.commands.set(cmds.config.comando, cmds);

    });

});

client.login(preferencias.token);

client.on('ready', () =>{

console.log('O Bot foi iniciado com sucesso.'.green);
console.log(`O meu prefixo é ${prefix}`);
});


client.on('message', message =>{

var autor = message.author;
var msg = message.content.toUpperCase();
var cont = message.content.slice(prefix.lenght).split('');
var args = cont.slice(1);

if(!message.content.startsWith(prefix)) return;

var cmd = client.commands.get(cont[0]);
if(cmd) cmd.run(client, message, args);


});