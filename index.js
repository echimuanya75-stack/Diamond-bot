const { default: makeWASocket } = require("@whiskeysockets/baileys");

async function startBot() {
  const sock = makeWASocket();

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message) return;

    const from = msg.key.remoteJid;
    const text = msg.message.conversation;

    if (text === "menu") {
      await sock.sendMessage(from, {
        text: "🤖 Diamond Bot Menu\n1. menu\n2. channel"
      });
    }

    if (text === "channel") {
      await sock.sendMessage(from, {
        text: "📢 Join my WhatsApp Channel:\nhttps://whatsapp.com/channel/0029VbCqrXM545uwZSTNHy2E"
      });
    }
  });
}

startBot();
