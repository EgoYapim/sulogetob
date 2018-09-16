const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kimi Öpmek İstediğini Yaz**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(message.author.username + "  Adlı Kişi" + `** ${mesaj} ** ` + "yi " +' Öptü! **Mucuk**')
	.setImage(`https://img-s2.onedio.com/id-576bcecb72ddec14561ff605/rev-0/w-205/h-205/f-jpg-gif-webp-webm-mp4/s-91e88429e9c3a9fd83f61e88e57ce8e87e6b5874.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öp',
  description: 'İstediğiniz Kişiyi Öpersiniz :) Mucuk.',
  usage: 'öp'
};