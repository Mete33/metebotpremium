const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `mp!özel = Kişiye özel mesaj atar. \nmp!banned = Dene ve Gör! \nmp!avatarım = Avatarınınızı Gösterir. \nmp!herkesebendençay = Herkese Çay Alırsınız. \nmp!koş = Koşarsınız.\nmp!çayiç = Çay İçersiniz. \nmp!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nmp!çayaşekerat = Çaya Şeker Atarsınız. \nmp!yumruhmp!at = Yumruk Atarsınız. \nmp!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nmp!sunucuresmi = BOT Sunucunun Resmini Atar. \nmp!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nmp!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Sunucu Yetkilisi Komutları**", `mp!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nmp!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nmp!unban = İstediğiniz Kişinin Yasağını Açar. \nmp!sustur = İstediğiniz Kişiyi Susturur. mp!MUTEDmp! \nmp!oylama = Oylama Açar. \nmp!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Botun Ana Komutları**", "mp!yardım = BOT Komutlarını Atar. \nmp!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nmp!ping = BOT Gecikme Süresini Söyler. \nmp!davet = BOT Davet Linkini Atar. \nmp!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı Komutları:**", " **Güvenlik Amacı İle Yapımcı Komutları Gösterilmiyor** ")
  .setFooter('**Codder : KymzZ(Mehmet Mete Kaymaz), Tasarımcımız : Bolt 🍌(Edizhan Çelik)**');
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.sendCode("asciidoc", `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
      message.channel.send("Komutun kullanışını gönderdim!")
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
