require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

client.once('ready', () => {
    console.log(`🤖 Logged in as ${client.user.tag}`);
});

client.on('guildMemberAdd', (member) => {
    const channel = member.guild.systemChannel; // Default welcome channel
    if (channel) {
        channel.send(`👋 Welcome to the server, ${member}! Enjoy your stay! 🎉`);
    }
});

client.login("discord_api_key");
