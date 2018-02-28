module.exports.run = async(client, message, args) =>{
    if(message.member.id == "298139759463890944") {
    
        let args = message.content.split(' ').slice(1).join(' ');
  
        if(!args){
          message.reply("Insira o status de watching");
        }
  
        client.user.setActivity(`${args}`, {
          type: 'LISTENING',
        });

        message.reply('alterado.');
      } else {
        message.reply("apenas o criador do bot, pode utilizar este comando.")
      }
  
}