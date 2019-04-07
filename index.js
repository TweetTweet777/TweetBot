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
          name: "Userinfo",
          value: "Shows your user info if not prompted with mention, otherwise displays info of the user you have mentioned."
        },
        {
        name: "Botinfo",
        value: "Shows info about the bot."
        },
        {
        name: "Serverinfo",
        value: "Shows info about the server."
        },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Created by ILIKETRAINS#9460"
      }
    } 
  });

} if (message.content.startsWith(config.prefix + "serverinfo")) {
    function checkDays(date) {
      let now = new Date();
      let diff = now.getTime() - date.getTime();
      let days = Math.floor(diff / 86400000);
      return days + (days == 1 ? " day" : " days") + " ago";
  };
  let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
  let region = {
      "brazil": ":flag_br: Brazil",
      "eu-central": ":flag_eu: Central Europe",
      "singapore": ":flag_sg: Singapore",
      "us-central": ":flag_us: U.S. Central",
      "sydney": ":flag_au: Sydney",
      "us-east": ":flag_us: U.S. East",
      "us-south": ":flag_us: U.S. South",
      "us-west": ":flag_us: U.S. West",
      "eu-west": ":flag_eu: Western Europe",
      "vip-us-east": ":flag_us: VIP U.S. East",
      "london": ":flag_gb: London",
      "amsterdam": ":flag_nl: Amsterdam",
      "hongkong": ":flag_hk: Hong Kong",
      "russia": ":flag_ru: Russia",
      "southafrica": ":flag_za:  South Africa"
  };
  const embed = new Discord.RichEmbed()
  .setColor(0xFFA500)
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField("Name", message.guild.name, true)
      .addField("ID", message.guild.id, true)
      .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
      .addField("Region", region[message.guild.region], true)
      .addField("Total | Humans | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
      .addField("Verification Level", verifLevels[message.guild.verificationLevel], true)
      .addField("Channels", message.guild.channels.size, true)
      .addField("Roles", message.guild.roles.size, true)
      .addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
      .setThumbnail(message.guild.iconURL)
  message.channel.send({embed});


  } if (message.content.startsWith(config.prefix + "botinfbi")) {
    message.channel.send({embed: {
      color: 0xFFA500,
      author: {
        name: "Bot Info",
        icon_url: client.user.avatarURL
      },
      fields: [{
          name: "Users",
          value: `${client.users.size}`
        },
        {
          name: "Servers",
          value: `${client.guilds.size}`
        },
        {
          name: "Version",
          value: "Alpha InDev"
        },
        {
          name: "discord.js Version",
          value: Discord.version  
        },
        {
          name: "Commands:",
          value: "6 Commands"
        },
      ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Created by ILIKETRAINS#9460"
        }}});
  } if (message.content.startsWith(config.prefix + "botinfo")) {
    message.channel.send({embed: {
      color: 0xFFA500,
      author: {
        name: "Bot Info",
        icon_url: client.user.avatarURL
      },
      title: "Bot info",
      description: "Info one the TweetBot",
      fields: [{
          name: "Users",
          value: `${client.users.size}`
        },
        {
          name: "Servers",
          value: `${client.guild.size}`
        },
        {
          name: "Version",
          value: "Alpha InDev"
        },
        {
          name: "discord.js Version",
          value: Discord.version  
        },
        {
          name: "Commands:",
          value: "6 Commands"
        },
      ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Created by ILIKETRAINS#9460"
        }}})
    
       } if  (message.content.startsWith(config.prefix + "ui")) {
    let memberInfo = message.mentions.members.first();
    if(!memberInfo){
    var userinf = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setDescription("Guild: " + message.guild)
    .setColor(0x333333)
    .addField("Full Username: ", `${message.author.username}#${message.author.discriminator}`)
    .addField("ID:", message.author.id)
    .addField('Current Nickname: ', message.author.toString())
    .addField("Current Status: ", message.author.presence.status)
    .addField("Currently Playing: ", message.author.presence.game)
    .addField("Created On: ", newDate)
    .setFooter("Created by ILIKETRAINS#9460", client.user.avatarURL)

    message.channel.send(userinf);
    }else{
var userinfoo = new Discord.RichEmbed()
    .setAuthor(memberInfo.displayName, memberInfo.user.avatarURL)
    .setThumbnail(memberInfo.user.avatarURL)
    .setDescription("Guild: " + message.guild)
    .setColor(0xFFA500)
    .addField("Full Username:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)
    .addField("ID:", memberInfo.id)
    .addField('Current Nickname: ', memberInfo.toString())
    .addField("Current Status: ", memberInfo.user.presence.status)
    .addField("Currently Playing: ", memberInfo.user.presence.game)
    .addField("Created On: ", "undefined")
    .setFooter("Created by ILIKETRAINS#9460", client.user.avatarURL)
    message.channel.send(userinfoo);
    }
  } if (message.content.startsWith(config.prefix + "userinfo")) {
    let memberInfo = message.mentions.members.first();
    if(!memberInfo){
    var userinf = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setDescription("Guild: " + message.guild)
    .setColor(0xFFA500)
    .addField("Full Username: ", `${message.author.username}#${message.author.discriminator}`)
    .addField("ID:", message.author.id)
    .addField('Current Nickname: ', message.author.toString())
    .addField("Current Status: ", message.author.presence.status)
    .addField("Currently Playing: ", message.author.presence.game)
    .addField("Created On: ", newDate)
    .setFooter("Created by ILIKETRAINS#9460", client.user.avatarURL)

    message.channel.send(userinf);
    }else{

var userinfoo = new Discord.RichEmbed()
    .setAuthor(memberInfo.displayName, memberInfo.user.avatarURL)
    .setThumbnail(memberInfo.user.avatarURL)
    .setDescription("Guild: " + message.guild)
    .setColor(0xFFA500)
    .addField("Full Username:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)
    .addField("ID:", memberInfo.id)
    .addField("Current Status: ", message.author.presence.status)
    .addField("Currently Playing: ", message.author.presence.game)
    .addField("Created On: ", "undefined")
    .setFooter("Created by ILIKETRAINS#9460", client.user.avatarURL)
    .setTimestamp("TweetBot")
    message.channel.send(userinfoo);
    }
}});
client.login(process.env.token);
