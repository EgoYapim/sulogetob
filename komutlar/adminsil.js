const Discord = require('discord.js');
exports.run = function(client, message, args) {
if (message.author.id != "453090896116973568") return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send("🚫 **Lütfen Silinicek Mesaj Miktarını Yazın.!** 🚫");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` Botun Sahibi Adet ${args[0]} Mesajı Sildirdi. ✅`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['adminsil', "admintemizle", "adminclear"],
  permLevel: 4
};

exports.help = {
  name: 'adminsil',
  description: 'Belirlenen miktarda mesajı siler. **BOTUN ADMINI KULLANABİLİR**',
  usage: 'adminsil <silinicek mesaj sayısı>'
};
