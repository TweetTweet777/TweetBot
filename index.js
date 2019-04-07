const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")
client.on("ready", () => {
    console.log("Ready!")
    client.user.setActivity("t!ping")
});
client.on("message", async message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
if (message.content.startsWith(config.prefix + "ping")) {
const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);

} if (message.content.startsWith(config.prefix + "uptime")) {
let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
let uptime = `${days} days, ${hours} hours and ${minutes} minutes`;
message.channel.send({embed:{
    color:0xFFA500,
    description: uptime
}});
} if (message.content.startsWith(config.prefix + "help")) {
    message.channel.send({embed: {
      color: 0xFFA500,
      author: {
        name: "TweetBot",
        icon_url: client.user.avatarURL
      },
      title: "Help Menu",
      description: "Tweet Help",
      fields: [{
          name: "Help",
          value: "Brings up this help menu."
        },
        {
          name: "Ping",
          value: "Shows the latency and API latency of the bot."
        },
        {
          name: "Uptime",
          value: "Shows the uptime of the bot"
        },
        {
            name: "Say",
            value: "Say something that gets embeded"
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Created by ILIKETRAINS#9460, Brickman#4669 and Excigma#3904"
      }
    } 
  });
} if (message.content.startsWith(config.prefix + "say")) {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    
      const sayMessage = args.join(" ");

      let servIcon = message.guild.iconURL;
      let esayEmbed = new Discord.RichEmbed()
      .setTitle("Say Something:")
      .setColor("0xFFA500")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`Said by ${message.author}`)
      .addField("Message", `${sayMessage}`)
      .setTimestamp();

      const esayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

      message.channel.send(esayEmbed);
  }
});
client.login(process.env.token);
