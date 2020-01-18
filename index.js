const core = require("@actions/core");
const github = require("@actions/github");
const axios = require("axios");

async function main() {
    try {
        const webhookURL = core.getInput("webhook-url");
        const webhookPayload = core.getInput("webhook-payload");
        const body = JSON.parse(webhookPayload);
        console.log(`POSTing ${JSON.stringify(body)} to ${webhookURL}`);
        await axios.post(webhookURL, body);
    } catch (error) {
        core.setFailed(error.message);
    }
}

main();