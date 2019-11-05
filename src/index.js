
//setting environment variables 
require('dotenv').config();

//discord requirements
const Discord = require('discord.js');
const client = new Discord.Client();

const file = require('./commanderfile.js')

//prefix = !
const { prefix } = require('./config.json')

//env vars 
const BOT_TOKEN = process.env.BOT_TOKEN;
let ver = process.env.NODE_ENV

//commander embet info/data
const commander = require('./commanderEmbedInfo')

//testing will display in code land and production will display ready for action
client.on('ready', () => {
    console.log(` \n Logged in as ${client.user.tag} \n`);
    if(ver === 'production') {
        console.log('in production')
        client.user.setActivity(`Ready for Action`)
    }else{
        console.log('in development')
        client.user.setActivity('In code land')
    }
})
//commands for bot sends name of message and image
client.on('message', message => {
    // case sensitive words
    const msg = message.content.toLowerCase()
    if(message.author.bot) return; // checks if message was sent by a bot
    if(!message.content.startsWith(prefix)) return;//makes so that user needs prefix

    if ( msg.startsWith(prefix+'aethe' || msg.startsWith(prefix+'athe'))) message.channel.send({ files: [file.aethFile], embed: commander.aetheflead })
    
    else if ( msg.startsWith(prefix+'scipio')) {
        message.channel.send('scipio', {
            files: [
                "./src/assets/scipio1.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'hani')) {
        // message.channel.send('hanibal', {
        //     files: [
        //         "./src/assets/hanibal1.PNG", 
        //     ]
        // })
        // console.log('here')
        // commander.setTitle('Hanibal')
        // commander.setColor('#7282da')
        message.channel.send({ embed: embedData.aetheflead })
    }else
    if ( msg.startsWith(prefix+'sala')) {
        message.channel.send('saladin', {
            files: [
                "./src/assets/saladin1.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'constance')) {
        message.channel.send('constance', {
            files: [
                "./src/assets/constance1.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'constant')) {
        message.channel.send('constantine', {
            files: [
                "./src/assets/constantine1.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'loh')) {
        message.channel.send('lohar', {
            files: [
                "./src/assets/lohar1.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'boudi')) {
        message.channel.send('boudica', {
            files: [
                "./src/assets/boudica1.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'osma')) {
        message.channel.send('osman', {
            files: [
                "./src/assets/osman1.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'city')) {
        message.channel.send('city keeper', {
            files: [
                "./src/assets/citykeeper1.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'dragon')) {
        message.channel.send('dragon lancer', {
            files: [
                "./src/assets/dragonlancer1.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'tomoe')) {
        message.channel.send('tomoe gozen', {
            files: [
                "./src/assets/tomoegozen1.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'gengis')) {
        message.channel.send('gengis khan', {
            files: [
                "./src/assets/gengiskhan1.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'cleo')) {
        message.channel.send('cleopatra', {
            files: [
                "./src/assets/cleopatra1.PNG", 
                "./src/assets/cleopatra2.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'joan')) {
        message.channel.send('joan of arc', {
            files: [
                "./src/assets/joanofarc1.PNG", 
                "./src/assets/joanofarc2.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'sun')) {
        message.channel.send('sun tzu', {
            files: [
                "./src/assets/suntzu1.PNG", 
                "./src/assets/suntzu2.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'julius')) {
        message.channel.send('julius ceaser', {
            files: [
                "./src/assets/ceaser1.PNG", 
                "./src/assets/ceaser2.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'lance')) {
        message.channel.send('lancelot', {
            files: [
                "./src/assets/lancelot1.PNG", 
                "./src/assets/lancelot2.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'frede')) {
        message.channel.send('frederick', {
            files: [
                "./src/assets/frederick1.PNG", 
                "./src/assets/frederick2.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'el')) {
        message.channel.send('el cid', {
            files: [
                "./src/assets/elcid1.PNG", 
                "./src/assets/elcid2.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'meh')) {
        message.channel.send('mehmed', {
            files: [
                "./src/assets/mehmed1.PNG", 
                "./src/assets/mehmed2.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'beli')) {
        message.channel.send('belisarius', {
            files: [
                "./src/assets/belisarius1.PNG", 
                "./src/assets/belisarius2.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'bei') ||  msg.startsWith(prefix+'bai')) {
        message.channel.send('baibars', {
            files: [
                "./src/assets/baibars1.PNG", 
                "./src/assets/baibars2.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'herm')) {
        message.channel.send('herman', {
            files: [
                "./src/assets/herman1.PNG", 
                "./src/assets/herman2.PNG",
                "./src/assets/herman3.PNG",
            ]
        })
    }else
    if ( msg.startsWith(prefix+'eul')) {
        message.channel.send('eulji', {
            files: [
                "./src/assets/eulji1.PNG", 
                "./src/assets/eulji2.PNG",
                "./src/assets/eulji3.PNG",
            ]
        })
    }else
    if ( msg.startsWith(prefix+'charl')) {
        message.channel.send('charles martel', {
            files: [
                "./src/assets/charlesmartel1.PNG", 
                "./src/assets/charlesmartel2.PNG",
                "./src/assets/charlesmartel3.PNG",
            ]
        })
    }else
    if ( msg.startsWith(prefix+'cao')) {
        message.channel.send('cao cao', {
            files: [
                "./src/assets/caocao1.PNG", 
                "./src/assets/caocao2.PNG", 
            ]
        })
    }else
    if ( msg.startsWith(prefix+'yi') ||  msg.startsWith(prefix+'ysg')) {
        message.channel.send('yiSeong-Gye', {
            files: [
                "./src/assets/yiSeong-Gye1.PNG", 
                "./src/assets/yiSeong-Gye2.PNG",
                "./src/assets/yiSeong-Gye3.PNG",
            ]
        })
    }else
    if ( msg.startsWith(prefix+'rich')) {
        message.channel.send('richard and we can edit this part to add whatever information we need', {
            files: [
                "./src/assets/richard1.PNG", 
                "./src/assets/richard2.PNG",
                "./src/assets/richard3.PNG",
            ]
        })
    }else
    if ( msg.startsWith(prefix+'kusu')) {
        message.channel.send('kusunoki', {
            files: [
                "./src/assets/kusunoki1.PNG", 
                "./src/assets/kusunoki2.PNG",
                "./src/assets/kusunoki3.PNG",
            ]
        })
    }else
    if ( msg.startsWith(prefix+'pela')) {
        message.channel.send('pelagius', {
            files: [
                "./src/assets/pelagius1.PNG", 
                "./src/assets/pelagius2.PNG",
                "./src/assets/pelagius3.PNG",
            ]
        })
    }else
    if ( msg.startsWith(prefix+'mina')) {
        message.channel.send('minimoto', {
            files: [
                "./src/assets/minimoto1.PNG", 
                "./src/assets/minimoto2.PNG",
                "./src/assets/minimoto3.PNG",
                "./src/assets/minimoto4.PNG", 
            ]
        })
    }else{
        message.channel.send('sorry maybe you spell it wrong try again 😉 ')

    }
})



client.login(BOT_TOKEN)

