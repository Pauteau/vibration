const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login('Mzc4ODM4MDIxMDQ0MzA1OTMy.Dcn3Ew.8rgq9byGctQa8SaSj4lK7OitNTI')

bot.on("ready" , () => {
    bot.user.setPresence({ game: { name: 'd/help ', type: 0} })
    console.log("Gamond | Est en ligne !");
});

if (message.content === prefix + "help"){
    var embed = new Discord.RichEmbed()
    .setTitle("Page Help")
    .setDescription("Les commandes sont en dessous :")
    .addField("d/help | Pour voir les commandes")
    .addField("d/infobot | Pour voir les nouveautés du bot")
    .addField("d/avatar | Pour faire apparaître ton avatar")
    .setColor(0xFF0000)
    .setFooter("Gamond | Touts les droits réservés ")
          message.channel.sendEmbed(embed)
}





bot.on("message", function (message) {
    if (message.content === "d/avatar") {
        message.channel.send((message.author.avatarURL))
 }
} )

bot.on("message", function (message) {
    if (message.content === "d/infobot") {
        message.channel.send("Mon développeur me rajoute des nouveautés tous les jours !")
 }
} )





