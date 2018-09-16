const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setImage('https://media1.tenor.com/images/61295c34424fe38d32fa3db006bbc3d9/tenor.gif?itemid=4152319');

  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['no-problem', "np"],
  permLevel: 0
};

exports.help = {
  name: 'nope',
  description: 'No No Problem.',
  usage: 'nope'
};
