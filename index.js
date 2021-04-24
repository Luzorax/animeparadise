var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Serveur Discord",
assets : {
large_image : "largemage",
large_text : "Rejoignez" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "DISCORD" , url : "https://discord.gg/FzcessDfys"}]
}
})
})
bot.login(process.env.BOT_TOKEN)
