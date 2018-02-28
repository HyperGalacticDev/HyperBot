module.exports.run = async (client, message, args) =>{
    if(message.member.id == "298139759463890944") {
    
        bot.user.setStatus("online");
           
           message.reply('alterado.');
         } else {
           message.reply("apenas o criador do bot, pode utilizar este comando.")
         }
}