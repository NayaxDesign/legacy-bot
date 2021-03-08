const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "Vous avez pas la permission Gérer les messages pour utiliser cette commande"
    );
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.reply(
      "fournir jusqu'à ** 99 messages ** à supprimer"
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`**${args[0]} Messages supprimées dans le tchat!**`).then(msg => msg.delete({timeout: 5000}))
    .catch(error =>
      console.log(`Não foi possível deletar mensagens devido a: ${error}`)
    );
};