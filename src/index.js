
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
    const msg = message.content.toLowerCase()
    if (msg === "!atheflead") {
        message.channel.send('atheflead', {
            files: [
                "./src/assets/atheflead.PNG", 
            ]
        })
    }
    if (msg === "!scipio") {
        message.channel.send('scipio', {
            files: [
                "./src/assets/scipio.PNG", 
            ]
        })
    }
    if (msg === "!hanibal") {
        message.channel.send('hanibal', {
            files: [
                "./src/assets/hanibal1.PNG", 
            ]
        })
    }
    if (msg === "!saladin") {
        message.channel.send('saladin', {
            files: [
                "./src/assets/saladin1.PNG", 
            ]
        })
    }
    if (msg === "!constantine") {
        message.channel.send('constantine', {
            files: [
                "./src/assets/constantine1.PNG", 
            ]
        })
    }
    if (msg === "!lohar") {
        message.channel.send('lohar', {
            files: [
                "./src/assets/lohar1.PNG", 
            ]
        })
    }
    if (msg === "!boudica") {
        message.channel.send('boudica', {
            files: [
                "./src/assets/boudica1.PNG", 
            ]
        })
    }
    if (msg === "!gengis khan") {
        message.channel.send('gengis khan', {
            files: [
                "./src/assets/gengiskhan1.PNG", 
            ]
        })
    }
    if (msg === "!cleopatra") {
        message.channel.send('cleopatra', {
            files: [
                "./src/assets/cleopatra1.PNG", 
                "./src/assets/cleopatra2.PNG", 
            ]
        })
    }
    if (msg === "!joan of arc") {
        message.channel.send('joan of arc', {
            files: [
                "./src/assets/joanofarc1.PNG", 
                "./src/assets/joanofarc2.PNG", 
            ]
        })
    }
    if (msg === "!sun tzu") {
        message.channel.send('sun tzu', {
            files: [
                "./src/assets/suntzu1.PNG", 
                "./src/assets/suntzu2.PNG", 
            ]
        })
    }
    if (msg === "!julius ceaser") {
        message.channel.send('julius ceaser', {
            files: [
                "./src/assets/ceaser1.PNG", 
                "./src/assets/ceaser2.PNG", 
            ]
        })
    }
    if (msg === "!frederick") {
        message.channel.send('frederick', {
            files: [
                "./src/assets/frederick1.PNG", 
                "./src/assets/frederick2.PNG", 
            ]
        })
    }
    if (msg === "!el cid") {
        message.channel.send('el cid', {
            files: [
                "./src/assets/elcid1.PNG", 
                "./src/assets/elcid2.PNG", 
            ]
        })
    }
    if (msg === "!mehmed") {
        message.channel.send('mehmed', {
            files: [
                "./src/assets/mehmed1.PNG", 
                "./src/assets/mehmed2.PNG", 
            ]
        })
    }
    if (msg === "!belisarius") {
        message.channel.send('belisarius', {
            files: [
                "./src/assets/belisarius1.PNG", 
                "./src/assets/belisarius2.PNG", 
            ]
        })
    }
    if (msg === "!baibars") {
        message.channel.send('baibars', {
            files: [
                "./src/assets/baibars1.PNG", 
                "./src/assets/baibars2.PNG", 
            ]
        })
    }
    if (msg === "!herman") {
        message.channel.send('herman', {
            files: [
                "./src/assets/herman1.PNG", 
                "./src/assets/herman2.PNG",
                "./src/assets/herman3.PNG",
            ]
        })
    }
    if (msg === "!eulji mundeok") {
        message.channel.send('eulji', {
            files: [
                "./src/assets/eulji1.PNG", 
                "./src/assets/eulji2.PNG",
                "./src/assets/eulji3.PNG",
            ]
        })
    }
    if (msg === "!charles martel") {
        message.channel.send('charles martel', {
            files: [
                "./src/assets/charlesmartel1.PNG", 
                "./src/assets/charlesmartel2.PNG",
                "./src/assets/charlesmartel3.PNG",
            ]
        })
    }
    if (msg === "!cao cao") {
        message.channel.send('cao cao', {
            files: [
                "./src/assets/caocao1.PNG", 
                "./src/assets/caocao2.PNG", 
            ]
        })
    }
    if (msg === "!yi seong gye") {
        message.channel.send('yiSeong-Gye', {
            files: [
                "./src/assets/yiSeong-Gye1.PNG", 
                "./src/assets/yiSeong-Gye2.PNG",
                "./src/assets/yiSeong-Gye3.PNG",
            ]
        })
    }
    if (msg === "!richard") {
        message.channel.send('richard', {
            files: [
                "./src/assets/richard1.PNG", 
                "./src/assets/richard2.PNG",
                "./src/assets/richard3.PNG",
            ]
        })
    }

    if (msg === "!minimoto") {
        message.channel.send('minimoto', {
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
