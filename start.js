const createMainBot = require('./index.js');
const createKickBot = require('./kickBot.js');
const mongoose = require("mongoose");
const token = require ('./models/tokens.js')

async function start() {
  try {
mongoose.connect("mongodb+srv://Ahmed:12345@ahmed.f1uxuex.mongodb.net/data");


    console.log('Connected to MongoDB');

    const index = await createMainBot();

    const tokenDocs = await token.find();
    const tokens = tokenDocs.reduce((acc, cur) => {
      if (cur.botType === 'kick') {
        acc.kick = cur.botToken;
      } else if (cur.botType === 'ban') {
        acc.ban = cur.botToken;
      }
      return acc;
    }, {});

    const kickBot = createKickBot(tokens.kick);
    // const banBot = createBanBot(tokens.ban);

    if (kickBot) {
      console.log(`Kick bot is online with token ${tokens.kick}`);
    }
    // if (banBot) {
    //   console.log(`Ban bot is online with token ${tokens.ban}`);
    // }
  } catch (error) {
    console.error(error);
  }
}

start();
