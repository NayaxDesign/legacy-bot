const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')
client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

   const args = message.content
       .trim().slice(config.prefix.length)
       .split(/ +/g);
   const command = args.shift().toLowerCase();

   try {
       const commandFile = require(`./commands/${command}.js`)
       commandFile.run(client, message, args);
   } catch (err) {
   console.error('Erro:' + err);
 }
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus('online');
  client.user.setActivity("Le Serveur Discord", {type: 'WATCHING'});
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on("guildMemberAdd", async (member) => { 

    let guild = await client.guilds.cache.get("816366217828499547");
    let channel = await client.channels.cache.get("816733265716052009");
    let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "RainbowDumb");
    if (guild != member.guild) {
      return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
     } else {
        let embed = await new Discord.MessageEmbed()
        .setColor("#00a8ff")
        .setImage("https://i.imgur.com/kUw8ktD.gif")
        .setDescription(`**${member.user}**, Bienvenue dans le serveur **${guild.name}**! Grâce à toi nous sommes **${member.guild.memberCount} membres**, Amusez-vous bien! :heart:`)
        .setFooter("© Legacy Of Graphics")
        .setTimestamp();
  
      channel.send(embed);
    }
  });

  client.on("guildMemberRemove", async (member) => { 

    let guild = await client.guilds.cache.get("816366217828499547");
    let channel = await client.channels.cache.get("816733265716052009");
    let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "blobcorn");
    if (guild != member.guild) {
      return console.log("Algum saco pela saiu do servidor. Mas não é nesse, então tá tudo bem :)");
     } else {
        let embed = await new Discord.MessageEmbed()
        .setColor("#00a8ff")
        .setImage("https://i.skyrock.net/8048/77058048/pics/3337257092_1_3_N4ib4xjZ.gif")
        .setDescription(` **${member.user.username}**, a quitté le serveur! :broken_heart: \"j\'espère qu'il a passer un bon moment `)
        .setFooter("© Legacy Of Graphics")
        .setTimestamp();
  
      channel.send(embed);
    }
  });


client.login(process.env.TOKEN);