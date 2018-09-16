const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
    const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('İşte Yenilikler: |\n<otorol = Yeni Gelen Üyeye Otomatik Rol Verir. \n<dab = Dab Yaparsınız! \n<öneri = Bota Eklenmesi Grekenleri ve Hataları Bildirirsiniz \n<8ball = Bota Sordugunuz Soruları Cevaplar  \n<danset = Dans Etmeye Başlarsınız Cuppa Cuppa   \n<kahkaha = Kahkaha Atarsınız  \n<sins-aga Joni Reyis  \n<starwars = Starwars Filminin Pixel Versiyonunu Atar \n<stresçarkı = Stresçarkı Çevirirsiniz  \n<taklaat = Takla Atarsınız  \n<woodie = Oduncu  \n<yazıtura = Yazı Tura Atarsınız  '); 
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenigelenkomutlar', 'yenibotkomutları', 'yenilikler', 'yenikomutlar'],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: "Yenilikleri ATAR",
  usage: 'yenilikler'
};