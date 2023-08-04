const Discord = require('discord.js')
const { Client, Intents, MessageEmbed, Permissions, MessageButton, MessageActionRow } = require('discord.js');

const setSlash = require("./slsh");
const mongoose = require("mongoose");
const token = require('./models/tokens.js');
const linee = require ('./models/line.js');


function createKickBot(token) {
    const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
  
    client.on('ready', () => {
      console.log(`Kick bot is online with token ${token}`);
    });
        mongoose.connect("your  mongoDb here "); //// https://youtu.be/gtykpkOYy94
client.on("ready", async () => {
    console.log(client.user.tag);
    await setSlash(client);
  });
      

//// put your bot code here

client.on('interactionCreate'  ,async interaction =>{
    if(interaction.commandName=== 'tickett') {
      let role = interaction.options.getRole('role')
      const embed = new Discord.MessageEmbed()
      .setDescription('من فضلك قم بالضغط على الزر لشراء حساب')
      const btn = new Discord.MessageButton()
      .setCustomId('ti')
      .setLabel('click')
      .setStyle("DANGER")
  
      const row = new Discord.MessageActionRow()
      .addComponents(btn)
  
      interaction.reply({components : [row] , embeds : [embed]})
  
  
      
  
  
  
    }
  
  
  
  })
  let counter = 0
let map = new Map()
  client.on('interactionCreate'  ,async interaction =>{
    if (interaction.customId === 'ti') {
      
      if(!interaction.isButton())return ;
      const embed = new MessageEmbed()
      .setDescription(`لشراء حساب قم بكتابة 
      -buy`)
      .setThumbnail(interaction.guild.iconURL())
  
      const btn = new Discord.MessageButton()
      .setCustomId('tii')
      .setLabel('close')
      .setStyle('SUCCESS')
  
      const row = new Discord.MessageActionRow()
      .addComponents(btn)
     await interaction.guild.channels.create(`ticket-${counter}`, {
      type: 'GUILD_TEXT',
      permissionOverwrites: [
        {
          id: interaction.guild.id,
          deny: [Permissions.FLAGS.VIEW_CHANNEL],
        },
        {
          id: interaction.user.id,
          allow: [Permissions.FLAGS.VIEW_CHANNEL],
        },
      ],
  }).then(async channel => {
  map.set(counter++)
    channel.send({embeds : [embed] , components : [row]})


        await interaction.deferReply({fetchReply : true , ephemeral : true})
      await interaction.editReply({content : `**ticket created ${channel} ✅**` })
  
  
  
      
     })

    }
  
  
  
  
  })
  client.on('interactionCreate'  ,async interaction =>{
    if (interaction.customId === 'tii') {
       if(!interaction.isButton())return ;
  // const channel = interaction.channel
      const embed = new Discord.MessageEmbed()
      .setDescription(`** هل انت متاكد من قفل التكت **`)
     await interaction.channel.permissionOverwrites.edit(interaction.user.id, { VIEW_CHANNEL: false });
      const btn = new Discord.MessageButton()
      .setCustomId('close')
      .setLabel('نعم')
      .setStyle('PRIMARY')
  
      const row = new Discord.MessageActionRow()
      .addComponents(btn)
      await interaction.deferReply({fetchReply : true , ephemeral : true})
      await interaction.editReply({embeds : [embed] , components:[row] })
  
  
  
  
    }
  })
  
  client.on('interactionCreate'  ,async interaction =>{
    if (interaction.customId === 'close') {
       if(!interaction.isButton())return ;
  
      const embed = new Discord.MessageEmbed()
      .setDescription(`** سيتم غلق الروم بعد 5 دقائق**`)
  
      await interaction.deferReply({fetchReply : true , ephemeral : true})
  
      await interaction.editReply({embeds : [embed] })
  
      setTimeout(async() => {
        await interaction.channel.delete()
      }, 5000);
  
      
  
  
    }
  })
  

      





  client.on('messageCreate', async (message) => {
    if (message.content.startsWith('ping')) {

message.reply({content : `bdfbd`})
    }
  })
      
  client.login(token);

  return client;
}

module.exports = createKickBot;
      
    