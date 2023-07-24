require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

async function askGPT(prompt) {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 500,
        temperature: 1,
    });

    return completion.data.choices[0].text.replace(/^\n/, "");
}

module.exports = {
    askGPT
}