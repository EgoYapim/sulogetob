const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply('**Doğru Kullanım** <8ball <soru> ');
      number = 3,2,4,1,5,6,7,8,9
    var random = Math.floor(Math.random() * (number - 1 + 1)) + 1 + 1 + 1;
    switch(random) {
    case 1: message.channel.send(":8ball: Evet"); message.react("🎱"); break
	  case 2: message.channel.send(":8ball: Kesinlikle"); message.react("🎱"); break
	  case 3: message.channel.send(":8ball: Tabiki"); message.react("🎱"); break
    case 4: message.channel.send(":8ball: Düşünmem Lazım"); message.react("🎱"); break
    case 5: message.channel.send(":8ball: Hayır"); message.react("🎱"); break
    case 6: message.channel.send(":8ball: Kesinlikle Hayır"); message.react("🎱"); break
	  case 7: message.channel.send(":8ball: İnanmıyorum"); message.react("🎱"); break
		case 8: message.channel.send(":8ball: Ben öyle düşünmüyorum"); message.react("🎱"); break
    case 9: message.channel.send(":8ball: Teoriler Bunu Kanıtlıyor."); message.react("🎱"); break
		case 10: message.channel.send(":8ball: Sana Şimdi Söylememek Daha İyi"); message.react("🎱"); break
};
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['8top', '8ball'],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Sorunuzu Cevaplar!',
  usage: '8ball'
};
