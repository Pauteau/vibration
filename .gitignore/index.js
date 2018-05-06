const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login('Mzc4ODM4MDIxMDQ0MzA1OTMy.Dcn3Ew.8rgq9byGctQa8SaSj4lK7OitNTI');

bot.on('message', function (message) {
if (message.content ==='d/help') {
     message.reply ('commandes : d/youtube, d/informations, d/discord, d/ajouter.') }
    } )

bot.on ('message', function (message) {
if (message.content ==='d/youtube')
    message.reply ('La chaîne youtube de Gamond : https://www.youtube.com/Gamond') } 

)

bot.on ('message', function (message) {
if (message.content ==='d/informations')
    message.reply ('Mon créateur : Gamond#1229 voilà que sa comme information.')  }

) 

bot.on ('message', function (message) {
if (message.content ==='d/discord')
     message.reply ('Discord de mon créateur : https://discord.gg/SjHnMFZ') }  
    )

    bot.on ('message', function (message) {
if (message.content ==='d/ajouter')
    message.reply ('Ajoute moi sur : https://discordapp.com/api/oauth2/authorize?client_id=378838021044305932&permissions=2146958583&scope=bot')  } 
)


bot.on("ready" , () => {
    bot.user.setPresence({ game: { name: 'd/help ', type: 0} })
    console.log("Bot Ready !");
});

bot.on ("guildMemberAdd", member =>{
    member.guild.channels.find("name", "bienvenue-vibration").send(`Bienvenue à ${member} dans le serveur discord `)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue-vibration").send(`${member} vient de nous quiter quitter :(`)
})
