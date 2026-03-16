const { default: makeWASocket } = require("@whiskeysockets/baileys")

async function startBot() {
const sock = makeWASocket()

sock.ev.on("messages.upsert", async ({ messages }) => {
const msg = messages[0]
if (!msg.message) return

const text = msg.message.conversation

if (text === "menu") {
await sock.sendMessage(msg.key.remoteJid, {
text: "Diamond Bot Menu\n\n1. menu\n2. channel"
})
}

if (text === "channel") {
await sock.sendMessage(msg.key.remoteJid, {
text: "Join my WhatsApp channel:\nhttps://whatsapp.com/channel/YOUR_LINK"
})
}

})
}

startBot()
