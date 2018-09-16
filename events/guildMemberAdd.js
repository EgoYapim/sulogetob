module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hoş geldin **' + username + '**!' + " " + `\nBotumuzu Sunucunuza Eklmek İçin : http://eklink.net/egolusbot`);
    member.guild.defaultChannel.send('hg '+username+'');
};