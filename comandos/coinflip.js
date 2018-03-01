module.exports.run = async (client, message, args) =>{

    var flip = Math.floor(Math.random() * 2 + 1);
		if (flip === 1) {
			message.reply("Você tirou cara!");
		}
		else {
			message.reply("Você tirou coroa!");
		}

}
