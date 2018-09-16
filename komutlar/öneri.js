const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    try {
    const öneri = args.slice(0).join(' ')
    var guildID = "488709787958116352";
    var channelID = "488740048309714944";
    await message.channel.createInvite({temporary: false, maxAge: 0, maxUses: 0, unique: false}).then(i => { davet = i.url });

    if (!öneri) {
        return message.reply("Lütfen bir öneri belirtin **Doğru Kullanım**: <öneri <öneri>");
    } else {
        const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .addField('Eylem:', 'Öneri')
        .addField('Kullanıcı:', message.author.id)
        .addField('TAG:', message.author.tag)    
	    .addField('Sunucu davet linki:', davet)
        .addField('Önerisi:', öneri);
    
        client.guilds.get(guildID).channels.get(channelID).send(embed)
        message.channel.send('Öneriniz alınmıştır, teşekkürler!');
    }

    } catch (err) {
    message.reply("bir hata oluştu: " + err);
    }
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'öneri', 
  description: 'Önerilerinizi botun kurucularına atar',
  usage: 'öneri'
};