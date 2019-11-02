
const Discord = require('discord.js');
const client = new Discord.Client();

const {
    BOT_TOKEN,    
} = require('./config.js')


client.on('ready', () => {
    console.log(` \n Logged in as ${client.user.tag} \n`);
})

// playing ping pong
client.on('message', msg => {
    if(msg.content === '!ping') {
        msg.reply('Pong!');
    }
});

//command for bot
client.on('message', message => {
    let msg = message.content.toLowerCase()
    if (msg === "!atheflead") {
        msg.channel.send('atheflead', {
            files: [
                "./src/assets/atheflead.PNG", 
            ]
        })
    }
    if (msg === "!hanibal") {
        msg.channel.send('hanibal', {
            files: [
                "./src/assets/hanibal1.PNG", 
            ]
        })
    }
    if (msg === "!saladin") {
        msg.channel.send('saladin', {
            files: [
                "./src/assets/saladin1.PNG", 
            ]
        })
    }
    if (msg === "!constantine") {
        msg.channel.send('constantine', {
            files: [
                "./src/assets/constantine1.PNG", 
            ]
        })
    }
    if (msg === "!gengis khan") {
        msg.channel.send('gengis khan', {
            files: [
                "./src/assets/gengiskhan1.PNG", 
            ]
        })
    }
    if (msg === "!cleopatra") {
        msg.channel.send('cleopatra', {
            files: [
                "./src/assets/cleopatra1.PNG", 
                "./src/assets/cleopatra2.PNG", 
            ]
        })
    }
    if (msg === "!julius ceaser") {
        msg.channel.send('julius ceaser', {
            files: [
                "./src/assets/ceaser1.PNG", 
                "./src/assets/ceaser2.PNG", 
            ]
        })
    }
    if (msg === "!frederick") {
        msg.channel.send('frederick', {
            files: [
                "./src/assets/frederick1.PNG", 
                "./src/assets/frederick2.PNG", 
            ]
        })
    }
    if (msg === "!el cid") {
        msg.channel.send('el cid', {
            files: [
                "./src/assets/elcid1.PNG", 
                "./src/assets/elcid2.PNG", 
            ]
        })
    }
    if (msg === "!mehmed") {
        msg.channel.send('mehmed', {
            files: [
                "./src/assets/mehmed1.PNG", 
                "./src/assets/mehmed2.PNG", 
            ]
        })
    }
    if (msg === "!herman") {
        msg.channel.send('herman', {
            files: [
                "./src/assets/herman1.PNG", 
                "./src/assets/herman2.PNG",
                "./src/assets/herman3.PNG",
            ]
        })
    }
    if (msg === "!charles martel") {
        msg.channel.send('charles martel', {
            files: [
                "./src/assets/charlesmartel1.PNG", 
                "./src/assets/charlesmartel2.PNG",
                "./src/assets/charlesmartel3.PNG",
            ]
        })
    }
    if (msg === "!cao cao") {
        msg.channel.send('cao cao', {
            files: [
                "./src/assets/caocao1.PNG", 
                "./src/assets/caocao2.PNG", 
            ]
        })
    }
    if (msg === "!yi seong gye") {
        msg.channel.send('yiSeong-Gye', {
            files: [
                "./src/assets/yiSeong-Gye1.PNG", 
                "./src/assets/yiSeong-Gye2.PNG",
                "./src/assets/yiSeong-Gye3.PNG",
            ]
        })
    }
    if (msg === "!richard") {
        msg.channel.send('richard', {
            files: [
                "./src/assets/richard1.PNG", 
                "./src/assets/richard2.PNG",
                "./src/assets/richard3.PNG",
            ]
        })
    }
    if (msg === "!minimoto") {
        msg.channel.send('minimoto', {
            files: [
                "./src/assets/minimoto1.PNG", 
                "./src/assets/minimoto2.PNG",
                "./src/assets/minimoto3.PNG",
                "./src/assets/minimoto4.PNG", 
            ]
        })
    }

})


client.login(BOT_TOKEN)
