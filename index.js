////// https://youtu.be/gtykpkOYy94
require("dotenv").config();
const config = require("./config.json");
const prefix = config.prefix;
const Discord = require("discord.js");
const fs = require('fs');
const { MessageAttachment } = require('discord.js');
const { MessageEmbed, permissionOverwrites, ChannelType, Permissions } = require("discord.js");
const { Client, Intents } = require('discord.js');
const client = new Discord.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS
  ]
});

// Require the ban bot module and pass the Client class
// const banBot = require('./banBot')(Client, ''); ////////// https://youtu.be/gtykpkOYy94

client.once('ready', () => {
  console.log('Bot is online!');
});
const mongoose = require("mongoose");
const db = require("./models/shop");
const user_db = require("./models/user");
const toto = require("./models/steck");
const tokens = require("./models/tokens");
const setSlash = require("./slash");
const axios = require("axios");
const i18n = require('i18n');

i18n.configure({
  locales: ['en', 'ar'],
  directory: __dirname + '/locales',
  defaultLocale: 'en',
  objectNotation: true
});


mongoose.connect("mongodb+srv://Ahmed:12345@ahmed.f1uxuex.mongodb.net/data");


    console.log('Connected to MongoDB');
client.on("ready", async () => {
  console.log(client.user.tag);
  await setSlash(client);
});

process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});

process.on("unhandledRejection", error => {
  return console.log(error)
});




client.on('ready', () => {
  function abady() {
    let status = [`Ahmed Sn`]
    let S = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[S], { type: 'PLAYING' })
  };
  //ismailmgde
  setInterval(abady, 5000)

})


///////////////////////////// https://youtu.be/gtykpkOYy94   
///
const token = require('./models/tokens.js');
const kickBot = require('./kickBot');
const banBot = require('./banBot');

async function createMainBot() {
  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'activate-bot') {
      const botType = interaction.options.getString('bot-type');
      const botToken = interaction.options.getString('bot-token');

      if (!botType || !botToken) {
        await interaction.reply('Please specify both bot type and bot token.');
        return;
      }

      const guildId = interaction.guild.id;
      const tokenDoc = await token.findOne({ guildId, botType });

      if (tokenDoc) {
        await interaction.reply(`${botType} bot is already running for this guild.`);
        return;
      }

      const newTokenDoc = new token({ guildId, botType, botToken });
      await newTokenDoc.save();
      if (botType || botToken) {
        await interaction.reply('Done your token is online and you can use its commands');

      }
      let activatedBot;
      if (botType === 'kick') {
        activatedBot = new kickBot(botToken);
      } else if (botType === 'ban') {
        activatedBot = new banBot(botToken);
      } else {
        await interaction.reply(`Invalid bot type: ${botType}`);
        return;
      }

      await activatedBot.connect();
      await interaction.reply(`${botType} bot is online for this guild!`);
    }
  });
}

module.exports = createMainBot;
/// https://youtu.be/gtykpkOYy94

client.login("MTEwNTc5MDU3MzczNjEyMDM1Mg.GDB8xE.1OXTPB0TtIxskjIvBCCOGLdjTbOwfqQUfrvnFE");