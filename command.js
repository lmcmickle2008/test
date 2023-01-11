axios.get(`https://api.roblox.com/users/get-by-username?username=${username}`) // Gets user info from username using roblox api.
  .then(async function (response) { // Executes on success
const avatar = await axios.get(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${response.data.Id}&size=352x352&format=Png&isCircular=false`) // Gets headshot info.

    const confirmUser = new EmbedBuilder() // Builds our confirm embed.
      .setTitle(`Is this you?`)
      .setThumbnail(`${avatar.data.data[0].imageUrl}`)
      .setColor("#1dd487")
      .setTimestamp()
      .addFields(
        { name: "Username: ", value: `${response.data.Username}`, inline: false },
        { name: "Userid ", value: `${response.data.Id}`, inline: false },
      );
    interaction.reply({embeds: [confirmUser], components: [row1], ephemeral: true}) // Sends confirm embed with "Yes" and "No" buttons.

client.on("interactionCreate", async (buttonInteraction) => { // When the user presses the button.

if (buttonInteraction.type === 3 && buttonInteraction.user.id === interaction.user.id) { // Basic checking. Makes sure the user who pressed the button is the same as the interaction user. Also makes sure the interaction is a button.

  if (buttonInteraction.customId === 'confirm_yes') { // Handling yes button.
    var randomString = require('random-string'); // Imports random-string
    var stringCode = randomString(); // Creates a string 8 characters long.

const codeEmbed = new EmbedBuilder() // Builds our embed with the code and game link.
      .setTitle(`Code`)
      .setColor("#1dd487")
      .setTimestamp()
  .setDescription('Please do not share your code with anyone.')
      .addFields(
        { name: "Game: ", value: `Game URL`, inline: false },
        { name: "Code ", value: '`'+stringCode+'`', inline: false },
      );
 await verifySchema.findOneAndUpdate( // Adds the info to the tempverify schema.
			{
				discordUser: `${interaction.user.username}#${interaction.user.discriminator}`,
			},
			{
discordUser: `${interaction.user.username}#${interaction.user.discriminator}`,
robloxUser: response.data.Username,
discordId: interaction.user.id,
robloxId: response.data.Id,
code: stringCode
},
{upsert: true,});

    
    interaction.editReply({embeds: [codeEmbed], ephemeral: true, components: []})
    return
  } else if (buttonInteraction.customId === 'confirm_no') {
    interaction.editReply({content: 'Please re-run the command. If the issue persists, contact our support team.', embeds: [], components: []})
    return
  }
}
})
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
    return
}
