const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return
    if (message.content.startsWith('create')) {
        const url = message.content.split('create')[1]
        return message.reply({
            content: "Generating short Id for " + url
        })
    }
    message.reply({
        content: 'hii from first-bot'
    })
})

client.on('messageCreate', (message) => {
    console.log(message.content);
})
client.on('interactionCreate', (interaction) => {
    // console.log(interaction);
    interaction.reply('pong')
})

client.login('MTIxMTIxNDA5NzQzODQ4MjQ3Mg.Gr4b_T.AjN8TIg19fYBHpSPpd3CdFu3HVlz5ia6UrxAiU');