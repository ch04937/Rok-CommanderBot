
module.exports = {
    name: 'poll',
    triggers: ['pool'],
    description: 'Ask a poll question. Vote by emoji',
    handler:(message) => {
        message.content.match(/"(.*)"/g)
    }
}