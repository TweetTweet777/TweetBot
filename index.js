const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")
client.on("ready", () => {
    console.log("Ready!")
    client.user.setActivity("tping")
});
client.on("message", async message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
if (message.content.startsWith(config.prefix + "ping")) {
const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
}});
client.login(process.env.token);
