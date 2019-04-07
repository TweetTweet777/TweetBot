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
        },
        {
            name: "ui",
            value: "Shows specified user information"
        },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Created by ILIKETRAINS#9460, Brickman#4669 and Excigma#3904"
      }
    } 
  });
} if (message.content.startsWith(config.prefix + "say")) {
    // makes the bot say something and delete the message. As an example, it"s open to anyone to use.
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
  if (message.content.startsWith(config.prefix + "ui")) {

        const UserInfo = new Discord.MessageEmbed()

            //All Fields are Optional Pick Any some

            .setAuthor(message.author.username, message.author.avatarURL()) //Heading With Username & Their Avatar 
            .setTitle("User Info")
            .setURL("www.google.com") //Any Vaild Link
            .setColor("0xFFA500") //You Can Use HexColour Ex:- #000000
            .setImage(message.author.avatarURL()) //Add Any Image URl || Image
            .setThumbnail(message.author.avatarURL()) //Add Any Image URl || ThumbNail

            //All Feilds Are Just Examples pick Some & add as you like

            .addField("Avatar", message.author.avatar, true) //The ID of the user"s avatar //Inline True or false
            .addField("AvatarURL", message.author.avatarURL({
                format: "png"
            }), true) //{options} options are Size?: 128 | 256 | 512 | 1024 | 2048, Format?: "webp" | "png" | "jpg" | "gif" //.defaultAvatarURL() A link to the user"s default avatar //.displayAvatarURL() A link to the user"s avatar if they have one. Otherwise a link to their default avatar will be returned
            .addField("AvatarURL", message.author.avatarURL({
                size: "2048"
            }), true)
            .addField("Bot", message.author.bot, true) //Returns True If Message Author = Bot || False If Message Author not Bot.
            .addField("Created At", message.author.createdAt, false) //The time the user was created || .createdTimestamp - The timestamp the user was created at
            .addField("Discrim", message.author.discriminator, true) //A discriminator/tag based on username for the user Ex:- 0001
            .addField("DMChannel", message.author.dmChannel) //The DM between the client"s user and this user || If Nothing Returns "Null"
            .addField("ID", message.author.id) //The ID of the User/author
            .addField("Last Message", message.author.lastMessage) //The Message object of the last message sent by the user, if one was sent
            .addField("Last Message ID", message.author.lastMessageID) //The ID of the last message sent by the user, if one was sent
            .addField("Presence", message.author.presence) //The presence of this user
            .addField("Presence Status", message.author.presence.status) //The presence status of this user
            .addField("Presence Game", message.author.presence.activity.name) //The presence Game of this user
            .addField("Tag", message.author.tag) //The Discord "tag" for this user || Ex:- Sai Chinna#6718
            .addField("Username", message.author.username) //The username of the user || Ex:- Sai Chinna
            .addField("Nick Name", message.guild.member(target).displayName) //Nick Name In That (message sent) server || Define target as message Author Ex:- let target = message.author; || Add This Line in Top

            .setFooter("Requested By", message.author.tag) //Change To Anything As You Wish
            .setTimestamp() //The timestamp of this embed

        message.channel.send(UserInfo);
    }
});
client.login(process.env.token);
