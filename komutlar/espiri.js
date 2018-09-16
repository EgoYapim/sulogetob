const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    number = 3,2,4,1,5,6,7,8,9
    var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;
    switch(random) {
    case 1: message.channel.send("Adamın biri varmış ikinci dönem düzeltmiş.");  break
	  case 2: message.channel.send("Sen güldün ya bende papatyaydım.");  break
	  case 3: message.channel.send("Erikli su aldım ama içinde hiç erik yoktu."); break
    case 4: message.channel.send("Adamın birisi televizyona çıkmış bir daha indirememişler.");  break
    case 5: message.channel.send("Yağmur yağmış, kar peynir.");  break
    case 6: message.channel.send("Seven unutmaz oğlum, eight unutur.");  break
	  case 7: message.channel.send("Yıkanan Ton’a ne denir? Washington!");  break
		case 8: message.channel.send("3 Japon sırayla uçaktan atlamış. Japonlar ölmüş, sıra ise kırılmış!");  break
		case 9: message.channel.send("Abi duydun mu, 50 kişiyi taramışlar. Yapma ya, nerde? Marketin karsısındaki berberde…"); break
};
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espiriyap', 'espri'],
  permLevel: 0
};

exports.help = {
  name: 'espiri',
  description: 'Bota Espiri Yaptırırsınız.',
  usage: 'espiri'
};
