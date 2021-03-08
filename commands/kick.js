const Discord = require('discord.js')

module.exports = {
    name: "kick",
    description: "kick command",

    async run (client, message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Vous ne pouvez pas utiliser cette commande!")

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" "); //.kick <args(0) aka @member> | <args(1) aka reason>
        if (!reason) reason = "Aucune raison donnée";

        const kickembed = new Discord.MessageEmbed()
        .setTitle(`Vous avez été expulsé  de **${message.guild.name}**`)
        .setDescription(`Raison ${reason}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())
        

        if (!args[0]) return message.channel.send("Vous devez spécifier un utilisateur pour expulser");

        if(!mentionMember) return message.channel.send("Cet utilisateur n'est pas un utilisateur valide / n'est plus sur le serveur!");

        if(!mentionMember.kickable) return message.channel.send("Je n'ai pas pu expulser cet utilisateur!");


        try {
            await mentionMember.send(kickembed);
        } catch (err) {

        }

        try {
            await mentionMember.kick(reason);
        } catch (err) {
            return message.channel.send("J'étais incapable de kick cet utilisateur! Pardon...")
        }
    }
}