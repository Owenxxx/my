module.exports = async (client) => {
    let array = [
{
    name: "tickett",
    description: "put your channels to verify line in it",
    options: [

          {
            name: "role",
            description: "put your youtube image channel",
            type: "ROLE" ,
            required : true
          } ,


        ]
      },
{     
   
        name: "ping",
        description: "put your channels to verify line in it",

          },
    ]

    await client.application.commands.set(array);
}