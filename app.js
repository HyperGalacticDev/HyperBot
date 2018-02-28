const Discord = require('discord.js');
const colors = require('colors');
const client = new Discord.Client();
const preferencias = require('./preferences.json');
const prefix = preferencias.prefix;
const fs = require('fs');

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

client.on('ready', () =>{


});
