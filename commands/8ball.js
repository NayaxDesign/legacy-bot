const Discord = require('discord.js')

module.exports = {
    name: "8b",
    description: "8ball command",

    async run (client, message, args) {
        if(!args[0]) return message.reply('Veuillez poser une question complète!')
        let replies = ["oui.", "Les perspectives semblent bonnes.", "peut-être.", "bien sûr.", "Oui définitivement.", "Non.", "Mieux vaut ne pas te le dire maintenant.", "Les perspectives ne sont pas si bonnes.", "nah", "jamais", "Impossible de prédire maintenant.", "Je ne sais pas", "Je ne sais pas * encore * ...", "aucune chance.", "Je pense que oui.", "seulement pour aujourd'hui!", "pas pour aujourd'hui c:", "Malheureusement, oui..", "Malheureusement non..", "demander à nouveau plus tard.."];
        
        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice().join(" ");

        let ballembed = new Discord.MessageEmbed()
        .setAuthor(`🎱 ${message.author.username}`)
        .setColor("#00a8ff")
        .addField("Question", question)
        .addField("reponse", replies[result])

        message.channel.send(ballembed)
    }
}