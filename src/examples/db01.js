const { client, xml } = require("@xmpp/client");
const debug = require("@xmpp/debug");

const xmpp = client({
    service: "xmpps://hyperdata.it",
    domain: "hyperdata.it",
    username: "dogbot",
    password: "doggy",
});
//
debug(xmpp, true);

xmpp.on("error", (err) => {
    console.error(err);
});

xmpp.on("offline", () => {
    console.log("offline");
});

xmpp.on("stanza", async (stanza) => {
    if (stanza.is("message")) {
        await xmpp.send(xml("presence", { type: "unavailable" }));
        await xmpp.stop();
    }
});

xmpp.on("online", async (address) => {
    // Makes itself available
    await xmpp.send(xml("presence"));

    // Sends a chat message to itself
    const message = xml(
        "message",
        { type: "chat", to: address },
        xml("body", {}, "hello world"),
    );
    await xmpp.send(message);
});

xmpp.start().catch(console.error);