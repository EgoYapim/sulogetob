const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	
	const bdavetet = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('İşte Davet Linkim: http://eklink.net/egolusbot');
	return message.author.sendEmbed(bdavetet)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davetet', 'invite' , 'botudavetet'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botu Sunucunuza Davet Eder.',
  usage: 'davet'
};


