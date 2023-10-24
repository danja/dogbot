const OpenAI = require("openai");
const openai = new OpenAI();

module.exports = { prompt }

// queue needed?

/*
async function prompt(message) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: message }],
        model: "gpt-3.5-turbo",
    });

    return completion.choices[0];
}
*/

function prompt(message) {
    const completion = openai.chat.completions.create({
        messages: [{ role: "system", content: message }],
        model: "gpt-3.5-turbo",
    });

    return completion.choices[0];
}
