const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.pinimg.com/originals/15/2b/af/152baf4303ec9bf40f33c54b01e3f3fc.gif',
  'https://media.giphy.com/media/XKO2OnnJnmqxW/giphy.gif',
  'https://media.giphy.com/media/wcIT7dQ5yWbDO/giphy.gif',
  'https://media.giphy.com/media/3ohc1292yKn6Z1saGs/giphy.gif',
  'https://media.giphy.com/media/xUO4t2gkWBxDi/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('n’oubliez pas de mentionner un utilisateur valide à embrasser!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Punch')
        .setColor('#000000')
        .setDescription(`${message.author} Se lache complètement sur ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Punch Punch Punch')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}