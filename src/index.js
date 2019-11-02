
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const { prefix } = require('./config.json')

const BOT_TOKEN = process.env.BOT_TOKEN;

client.on('ready', () => {
    console.log(` \n Logged in as ${client.user.tag} \n`);
})
// playing ping pong
client.on('message', msg => {
    if(msg.content === `${prefix}ping`) {
        msg.reply('Pong!');
    }
});

//command for bot
client.on('message', message => {
    const msg = message.content.toLowerCase()
    if (msg === `${prefix}atheflead`) {
        message.channel.send('atheflead', {
            files: [
                "./src/assets/atheflead.PNG", 
            ]
        })
    }
    if (msg === `${prefix}scipio`) {
        message.channel.send('scipio', {
            files: [
                "./src/assets/scipio.PNG", 
            ]
        })
    }
    if (msg === `${prefix}hanibal`) {
        message.channel.send('hanibal', {
            files: [
                "./src/assets/hanibal1.PNG", 
            ]
        })
    }
    if (msg === `${prefix}saladin`) {
        message.channel.send('saladin', {
            files: [
                "./src/assets/saladin1.PNG", 
            ]
        })
    }
    if (msg === `${prefix}constance`) {
        message.channel.send('constance', {
            files: [
                "./src/assets/constance1.PNG", 
            ]
        })
    }
    if (msg === `${prefix}constantine`) {
        message.channel.send('constantine', {
            files: [
                "./src/assets/constantine1.PNG", 
            ]
        })
    }
    if (msg === `${prefix}lohar`) {
        message.channel.send('lohar', {
            files: [
                "./src/assets/lohar1.PNG", 
            ]
        })
    }
    if (msg === `${prefix}boudica`) {
        message.channel.send('boudica', {
            files: [
                "./src/assets/boudica1.PNG", 
            ]
        })
    }
    if (msg === `${prefix}osman`) {
        message.channel.send('osman', {
            files: [
                "./src/assets/osman1.PNG", 
            ]
        })
    }
    if (msg === `${prefix}city keeper`) {
        message.channel.send('city keeper', {
            files: [
                "./src/assets/citykeeper1.PNG", 
            ]
        })
    }
    if (msg === `${prefix}dragon lancer`) {
        message.channel.send('dragon lancer', {
            files: [
                "./src/assets/dragonlancer1.PNG", 
            ]
        })
    }
    if (msg === `${prefix}tomoe gozen`) {
        message.channel.send('tomoe gozen', {
            files: [
                "./src/assets/tomoegozen1.PNG", 
            ]
        })
    }
    if (msg === `${prefix}gengis khan`) {
        message.channel.send('gengis khan', {
            files: [
                "./src/assets/gengiskhan1.PNG", 
            ]
        })
    }
    if (msg === `${prefix}cleopatra`) {
        message.channel.send('cleopatra', {
            files: [
                "./src/assets/cleopatra1.PNG", 
                "./src/assets/cleopatra2.PNG", 
            ]
        })
    }
    if (msg === `${prefix}joan of arc`) {
        message.channel.send('joan of arc', {
            files: [
                "./src/assets/joanofarc1.PNG", 
                "./src/assets/joanofarc2.PNG", 
            ]
        })
    }
    if (msg === `${prefix}sun tzu`) {
        message.channel.send('sun tzu', {
            files: [
                "./src/assets/suntzu1.PNG", 
                "./src/assets/suntzu2.PNG", 
            ]
        })
    }
    if (msg === `${prefix}julius ceaser`) {
        message.channel.send('julius ceaser', {
            files: [
                "./src/assets/ceaser1.PNG", 
                "./src/assets/ceaser2.PNG", 
            ]
        })
    }
    if (msg === `${prefix}lancelot`) {
        message.channel.send('lancelot', {
            files: [
                "./src/assets/lancelot1.PNG", 
                "./src/assets/lancelot2.PNG", 
            ]
        })
    }
    if (msg === `${prefix}frederick`) {
        message.channel.send('frederick', {
            files: [
                "./src/assets/frederick1.PNG", 
                "./src/assets/frederick2.PNG", 
            ]
        })
    }
    if (msg === `${prefix}el cid`) {
        message.channel.send('el cid', {
            files: [
                "./src/assets/elcid1.PNG", 
                "./src/assets/elcid2.PNG", 
            ]
        })
    }
    if (msg === `${prefix}mehmed`) {
        message.channel.send('mehmed', {
            files: [
                "./src/assets/mehmed1.PNG", 
                "./src/assets/mehmed2.PNG", 
            ]
        })
    }
    if (msg === `${prefix}belisarius`) {
        message.channel.send('belisarius', {
            files: [
                "./src/assets/belisarius1.PNG", 
                "./src/assets/belisarius2.PNG", 
            ]
        })
    }
    if (msg === `${prefix}baibars`) {
        message.channel.send('baibars', {
            files: [
                "./src/assets/baibars1.PNG", 
                "./src/assets/baibars2.PNG", 
            ]
        })
    }
    if (msg === `${prefix}herman`) {
        message.channel.send('herman', {
            files: [
                "./src/assets/herman1.PNG", 
                "./src/assets/herman2.PNG",
                "./src/assets/herman3.PNG",
            ]
        })
    }
    if (msg === `${prefix}eulji mundeok`) {
        message.channel.send('eulji', {
            files: [
                "./src/assets/eulji1.PNG", 
                "./src/assets/eulji2.PNG",
                "./src/assets/eulji3.PNG",
            ]
        })
    }
    if (msg === `${prefix}charles martel`) {
        message.channel.send('charles martel', {
            files: [
                "./src/assets/charlesmartel1.PNG", 
                "./src/assets/charlesmartel2.PNG",
                "./src/assets/charlesmartel3.PNG",
            ]
        })
    }
    if (msg === `${prefix}cao cao`) {
        message.channel.send('cao cao', {
            files: [
                "./src/assets/caocao1.PNG", 
                "./src/assets/caocao2.PNG", 
            ]
        })
    }
    if (msg === `${prefix}yi seong gye`) {
        message.channel.send('yiSeong-Gye', {
            files: [
                "./src/assets/yiSeong-Gye1.PNG", 
                "./src/assets/yiSeong-Gye2.PNG",
                "./src/assets/yiSeong-Gye3.PNG",
            ]
        })
    }
    if (msg === `${prefix}richard`) {
        message.channel.send('richard and we can edit this part to add whatever information we need', {
            files: [
                "./src/assets/richard1.PNG", 
                "./src/assets/richard2.PNG",
                "./src/assets/richard3.PNG",
            ]
        })
    }
    if (msg === `${prefix}kusunoki`) {
        message.channel.send('kusunoki', {
            files: [
                "./src/assets/kusunoki1.PNG", 
                "./src/assets/kusunoki2.PNG",
                "./src/assets/kusunoki3.PNG",
            ]
        })
    }
    if (msg === `${prefix}pelagius`) {
        message.channel.send('pelagius', {
            files: [
                "./src/assets/pelagius1.PNG", 
                "./src/assets/pelagius2.PNG",
                "./src/assets/pelagius3.PNG",
            ]
        })
    }

    if (msg === `${prefix}minimoto`) {
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

