const Discord = require('discord.js');


exports.run = (client, message, args) => {
       
let kadi = args.slice(0).join(' ');
  if (kadi.length < 1) return message.reply('Skini Görmek İçin birşey Yazmalısın! ');
  
		 
		 message.channel.send({embed: {
		  file:`https://minotar.net/armor/body/` + kadi + `/300.png`,
          color: 0xD97634,
		  description: "Skininiz Başarıyla Gönderildi"
            }});
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'skin',
  description: 'Belirtilen Kullanıcı Adının Skini Gösterir.',
  usage: 'skin [kullanıcı] '
};
