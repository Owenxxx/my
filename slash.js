const i18n = require('i18n');
module.exports = async (client) => {
  let array = [
    
                    
                    {
                      name: 'activate-bot',
                      description: 'Activate a bot with the specified token',
                      options: [
                        {
                          name: 'bot-type',
                          description: 'The bot to activate',
                          type: 'STRING',
                          required: true,
                          choices: [
                            {
                              name: 'Ban ',
                              value: 'ban'
                            },
                            {
                              name: 'Kick',
                              value: 'kick'
                            }
                          ]
                        },
                        {
                          name: 'bot-token',
                          description: 'The token for the bot',
                          type: 'STRING',
                          required: true
                        }
                      ]
                    } ,

                    
                       

                 
        
             



 
  ];
  await client.application.commands.set(array);
}