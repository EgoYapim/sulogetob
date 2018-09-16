const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel Mesajlarına Bilgi Mesajımı Attım! :postbox: ');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor(message.author.username, message.author.avatarURL)
	.addField("**❯ Yapımcı**", " Serkan K. ", )
  .addField("**❯ Sürüm**", " v0.0.1 ", )
  .addField("**❯ Yapıldığı Tarih**", " 11 Eylül 2018 ", )
	.addField("**❯ Bot Davet**", " [Davet Et]<davet", )
  .addField("**❯ Destek sunucusu**", " [Sunucumuza Katıl](https://discord.gg/JPnvURu) ", )
	.setThumbnail("https://guzelresimler.info/content/photos/5890/bi/kitten_with_a_bow_tie.jpg");
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot Yapımcısı vs. Şeyleri Gösterir. .',
  usage: 'bilgi'
};
