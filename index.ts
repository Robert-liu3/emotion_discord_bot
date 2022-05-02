import Discordjs, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new Discordjs.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('The bot is ready')
})

client.on('messageCreate', (message) => {
    if (message.content.includes('fuck')) {
        message.reply({
            content: 'language!',
        })
    }
})

client.login(process.env.TOKEN)



