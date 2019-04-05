const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")
const Math = require("mathjs");
client.on("ready", () => {
    console.log("Ready!")
    client.user.setActivity("tping")
});
client.on("message", async message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
if (message.content.startsWith(config.prefix + "ping")) {
const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
}});
client.login(config.token);
if (message.content.startsWith(config.prefix + "math")) {
    if (!args[0]) return message.channel.send("Please input a valid equation or calculation!");
    let resp;
    try{
        resp = math.eval(args.join(" "));
    } catch (e) {
        return message.channel.send("Please input a valid equation or calculation!");
    }
    const mathembed = new Discord.RichEmbed()
    .setColour(0xFFA500)
    .setTitle(message.author.username, message.author.avatarURL)
    .setDescription("Math Calculation!")
    .addField("Input", `\`\`\`js\n${args.join("")}\`\`\``)
    .addField("Output", `\`\`\`js\n${resp}\`\`\``)
    message.channel.send(mathembed)
}
