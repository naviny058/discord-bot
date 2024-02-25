//discord provide command in this we will our own command 

const { REST, Routes } = require('discord.js')

const command = [
    {
        name: 'ping',
        description: 'Replies with pong!',
    },
    {
        name: 'create',
        description: 'short url generator'
    }
]
const rest = new REST({ version: "10" }).setToken('MTIxMTIxNDA5NzQzODQ4MjQ3Mg.Gr4b_T.AjN8TIg19fYBHpSPpd3CdFu3HVlz5ia6UrxAiU')

    ; (async () => {
        try {
            console.log('started refreshing appp (/) commands.');
            await rest.put(Routes.applicationCommands('1211214097438482472'), { body: command })
            console.log('successfully reloaded application (/) commands.');
        } catch (error) {
            console.log('error', error);
        }
    })()
// const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// client.on('ready', () => {
//     console.log(`Logged in as ${client.user.tag}!`);
// });

// client.on('interactionCreate', async interaction => {
//     if (!interaction.isChatInputCommand()) return;

//     if (interaction.commandName === 'ping') {
//         await interaction.reply('Pong!');
//     }
// });

// client.login('MTIxMTIxNDA5NzQzODQ4MjQ3Mg.Gr4b_T.AjN8TIg19fYBHpSPpd3CdFu3HVlz5ia6UrxAiU');