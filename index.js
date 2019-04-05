const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")
const math = require("mathjs");
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
} if (message.content.startsWith(config.prefix + "math")) {
    if (!args[0]) return message.channel.send("Please input a valid equation or calculation!");
    let resp;
    try {
      resp = math.eval(args.join(" "));
    } catch (e) {
      return message.channel.send("Please input a valid equation or calculation!");
    }
const mathembed = new Discord.RichEmbed()
.setColor(0xFFA500)
.setTitle("Math Calculation")
.setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
.addField("Input", `\`\`\`js\n${args.join("")}\`\`\``)
.addField("Output", `\`\`\`js\n${resp}\`\`\``)
message.channel.send(mathembed)

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
}});
client.login(process.env.token);
