const Discord = require('discord.js');
exports.run = (client, message, args) => {
let role = args.slice(0).join(' ');
if (role.length < 1) return message.reply('Autorole için bir rol seçmelisin. **Diikkat! Botun Rolü Belirttiğiniz Rolden Yüksek Yerde Olması Lazım**');
let role2 = message.guild.roles.find(r => r.name === `${role}`);
if (!role2) return message.reply(`${role} Rolünü bulamıyorum.`);
client.on('guildMemberAdd', member => {
  member.addRole(role2);
  let username = member.user.username;
    member.sendMessage('Hoş geldin **' + username + '**!' + " " + `\nBotumuzu Sunucunuza Eklemek İçin : http://eklink.net/egolusbot`);
    member.guild.defaultChannel.send('Sunucumuza Hoşgeldin ' +username+ '.');
  });
message.channel.sendMessage(`**${role}** Rölü başarılı bir şekilde ayarlandı.`)
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'otorol',
  description: 'İstediğiniz rolü sunucuya girenlere otomatikmen verir.',
  usage: 'otorol <rol>'
};