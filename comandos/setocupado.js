module.exports.run = async (client, message, args) =>{
    if(message.member.id == "298139759463890944") {
    
        client.user.setStatus("dnd");
           
           message.reply('alterado.');
         } else {
           message.reply("apenas o criador do bot, pode utilizar este comando.")
         }
}