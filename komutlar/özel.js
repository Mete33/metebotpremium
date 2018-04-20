const Discord = require("discord.js");

exports.run = (client, message, args) => {
    let member = message.mentions.users.first();
    let mesaj = args.slice(1).join(" ");

    if(!member) return message.reply("Lütfen özel mesaj göndereceğin kişiyi belirt");
    if(!mesaj) return message.reply("Lütfen bu kişiye ne göndereceğini belirt");

    member.send(`${message.author.username} adlı kullanıcıdan mesajınız var : ${mesaj}`);
    message.channel.send("Mesaj gönderildi!")

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["eval", "öm", "eval", "özelmesaj", "dm"],
    permLevel: 0
  };
exports.help = {
    name: "özel",
    description: "Kullanıcıya özel mesaj gönderir",
    usage: "özel <kullanıcı> <mesaj>"
}