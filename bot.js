const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

bot.on("ready", () => {
  client.user.setGame("<yardım " , " | " , "EGOLU'S Botu Hizmetinizde !" )
  bot.log("Bağlandım!")   
});

/* client.on("message", msg => {
    const embedlul = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setDescription(":crown: " + msg.author + " EGOLU'S reklam koruması aktif, reklam yapmayı bırak evlat!:crown:")

const embedlulz = new Discord.RichEmbed()
    .setTitle("Sunucunda " + msg.author.tag + " reklam yapıyor!")
      .setColor(0x00AE86)
      .setDescription("<warn <kişi> komutu ile onu uyarabilir ya da <kick <kişi> veya <ban <kişi> komutlarını kullanarak onu sunucudan uzaklaştırabilirsin!")
    .addField("Kullanıcının mesajı:", "**" + msg.content + "**")

if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g) && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
    if(msg.member.hasPermission('BAN_MEMBERS')){
    return;
    } else {
    msg.delete(30).then(deletedMsg => {
     deletedMsg.channel.send(embedlul)
     msg.guild.owner.send(embedlulz).catch(e => {
            console.error(e);
          });
        }).catch(e => {
          console.error(e);
        });
      };
      };
    })
*/
	

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('**Aleyküm Selam Hoşgeldin Kardeşim**');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'EGOLUS') {
    msg.reply('**Ciğerim Buyur. <yardım ile komutlara bakmayı unutma :)**');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === "EGOLU'S") {
    msg.reply('**Ciğerim Buyur. <yardım ile komutlara bakmayı unutma :)**');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'egolus') {
    msg.reply('**Ciğerim Buyur. <yardım ile komutlara bakmayı unutma :)**');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === "egolu's") {
    msg.reply('**Ciğerim Buyur. <yardım ile komutlara bakmayı unutma :)**');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
    msg.reply('**Aleyküm Selam Hoşgeldin Kardeşim**');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Sa') {
    msg.reply('**Aleyküm Selam Hoşgeldin Kardeşim**');
  }
}); 

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'yardım') {
    if (msg.channel.type !== 'dm') {
      const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField(msg.author.username, 'Özel mesajlarını kontrol et. :postbox:');
    msg.channel.sendEmbed(ozelmesajkontrol) }
        msg.author.sendMessage('Komutlar:`\n' + prefix + '8ball = Sorunuzu Cevaplar\n' + prefix + 'atatürk = Rastgele Atatürk Fotoğrafı Atar.\n' + prefix + 'avatarım = Avatarınızı Gösterir.`\n' + prefix + '**ban = Belirttiğiniz Kişiyi Banlar\n**' + prefix + '`banned = Dene Ve Gör :)\n' + prefix + 'bilgi = Bot Hakkında Bilgi Verir.\n' + prefix + 'çayaşekerat = Çayınıza Şeker Atarsınız\n' + prefix + 'çayiç = Çay İçersiniz\n' + prefix + 'çekiç = İstediğiniz Kişiye Çekiç Atarsınız\n' + prefix + 'dab = Dab Yaparsınız\n' + prefix + 'danset = Dans Edersiniz\n' + prefix + 'davet = Botu Sunucunuza Davet Edersiniz.\n' + prefix + 'duyuru = Duyuru Yaparsınız\n' + prefix + 'emojiyazı = Yazınızı Emoji Yazıya Çevirir\n' + prefix + 'espiri = Bota Espiri Yaptırırsınız\n' + prefix + 'fortnite =  İstediğiniz Kişinin Fortnite İstatistiklerine Bakarsınız.\n' + prefix + 'gif = Rastgele Gif Atar.\n' + prefix + 'herkesebendençay = Herkese Çay İkram Edersiniz\n' + prefix + 'istatistik = Botun İstatiklerine Bakarsınız\n' + prefix + 'kahkaha = Kahkaha Atarsınız\n' + prefix + 'kedifoto = Rastgele Kedi Fotoğrafı Atar`\n' + prefix + '**kick = İstediğiniz Kişiyi Sunucudan Atarsınız**\n`' + prefix + 'kilit = Olduğunuz Kanalı Belirttiğiniz Süre Kadar Kilitler\n' + prefix + 'kısalt = Yazdığınız linkini Kısaltır\n' + prefix + 'koş = Koşarsınız\n' + prefix + 'kullanıcıbilgim = Bilgilerinizi Gösterir\n' + prefix + 'kurabiye = Kurabiye Verir\n' + prefix + 'skin = Yazdığınız Kişinin Skinini Atar Örnek : <skin iEgolusMC`\n').then(message => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Gönderilen mesaj: ${message.content}`)).catch(console.error);
        msg.author.sendMessage('2. Komutlar:`\n' + prefix + 'nope = No No Problem\n' + prefix + 'oylama = Yazdığınız Konu Hakkında Oylama Yapar.\n' + prefix + 'öneri = Bota Öneri Yaparsınız `\n' + prefix + '`öp = İstediğiniz Kişiyi Öpersiniz.\n' + prefix + 'ping = Botun Gecikme Süresini Gönderir.\n' + prefix + 'report = Suç İşleyen Birini Reportlarsınız.\n' + prefix + 'sil = Yazdığınız Sayı Kadar Mesaj Silersiniz.\n' + prefix + 'sins-aga = Jöni sins.\n' + prefix + 'slots = Slots Oyunu Oynatır.\n' + prefix + 'starwars = Starwars Filminin Pixel Formatını İzletir.\n' + prefix + 'stresçarkı = Stres Çarkı Çevirirsiniz.\n' + prefix + 'sunucubilgi = Sunucu Hakkında Bilgi Verir.\n' + prefix + 'sunucuresmi = Sunucu Resmini Atar.`\n' + prefix + '**sustur = İstediğiniz Kişiye Mute Atarsınız.**\n' +"`" + prefix + 'şanslısayım = Şanslı Sayınızı Gösterir\n' + prefix + 'taklaat = Takla Atarsınız\n' + prefix + 'tekmeat = İstediğiniz Kişiye Tekme Atarsınız\n' + prefix + 'unban = Banladığınız Kişinin Banını Kaldırırsınız\n' + prefix + 'uyar = Suç İşleyen Kişiyi Uyarırsınız\n' + prefix + 'woodie = Woodie the Lumberjack Hakkında Bilgi Verir\n' + prefix + 'yaz = Bota İstediğiniz Şeyi Yazdırır\n' + prefix + 'yazıtura = Yazı-Tura Atar\n' + prefix + '8ball = Sorunuzu Cevaplar\n' + prefix + 'yumruk-at = İstediğiniz Kişiye Yumruk Atarsınız`\n').then(message => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Gönderilen mesaj: ${message.content}`)).catch(console.error);

  }  
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'SA') {
    msg.reply('**Aleyküm Selam Hoşgeldin Kardeşim**');
  }
}); 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamün aleyküm') {
    msg.reply('**Aleyküm Selam Hoşgeldin Kardeşim**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamunaleyküm') {
    msg.reply('**Aleyküm Selam Hoşgeldin Kardeşim**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sea') {
    msg.reply('**Aleyküm Selam Hoşgeldin Kardeşim**');
  }
});
client.on("message", message => {
	if (message.content === "of") {
		message.reply("Oflama geçer bugünler!");
		}

	if (message.content === "ah") {
		message.reply("Ah deme oh de!");
		}

	if (message.content === "günaydın") {
		message.reply("sana da günaydın");
		}

    if (message.content === "güle güle") {
		message.reply("sana da güle güle");
		}
	if (message.content === "herkese günaydın") {
		message.reply("yepyeni bir güne merhaba :)");
		}

	if (message.content === "iyi geceler") {
		message.reply("sana da iyi geceler");
		}		
	if (message.content === "oh") {
		message.reply("Oh deme püf de!");
		}

	if (message.content === "püf") {
		message.reply("Git, Barış MANÇO nun -Lambaya Püf De- dinle!");
		}
	if (message.content === "HB") {
		message.reply("Sunucuda İyi Vakit Geçirmen Dileğiyle")
		}	
	if (message.content === "Hb") {
		message.reply("Sunucuda İyi Vakit Geçirmen Dileğiyle")
		}
	if (message.content === "hb") {
		message.reply("Sunucuda İyi Vakit Geçirmen Dileğiyle")
		}
	if (message.content === "hB") {
		message.reply("Sunucuda İyi Vakit Geçirmen Dileğiyle")
		}
	if (message.content === "hosbulduk") {
		message.reply("Sunucuda İyi Vakit Geçirmen Dileğiyle")
		}
	if (message.content === "Hosbulduk") {
		message.reply("Sunucuda İyi Vakit Geçirmen Dileğiyle")
		}
	if (message.content === "hoşbulduk") {
		message.reply("Sunucuda İyi Vakit Geçirmen Dileğiyle")
		}
	if (message.content === "Hoşbulduk") {
		message.reply("Sunucuda İyi Vakit Geçirmen Dileğiyle")
		}	
});
 

   client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on =

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});




	
client.login(ayarlar.token);