const { askGPT } = require("../helpers/gpt");

askGPT("Pourquoi le ciel est bleu ?").then(data => {
    console.log(data);
})