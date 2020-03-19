const prefix = "!tree ";

const file = require("./commanderProfiles/commanderfile"); //commander asset files
const commander = require("./commanderProfiles/commanderEmbedInfo"); //commander embet info/data
const combo = require("./commanderProfiles/commanderCombo"); //combo embet info/data

module.exports = {
	name: "commanders",
	description:
		"Gives optimal ways to play a specific commander. Talent trees, and best pairings.",
	//commands for bot sends name of message and image
	triggers: ["tree"],
	handler:
		("message",
		message => {
			// case sensitive words
			const msg = message.content.toLowerCase();
			//optimazing code more readable
			const msgs = message.channel;

			if (message.author.bot) return; // checks if message was sent by a bot
			if (!message.content.startsWith(prefix)) return; //makes so that user needs prefix
			if (message.content.endsWith(sufix)) return; //

			// first combos so they run first
			// if ( (msg.startsWith(prefix+'aethe' && suffix))) {
			//     msgs.send( `on combo`, { embed: combo.aetheflead})
			// }
			// else if ( msg.startsWith(prefix+'scipio')&& suffix) {
			//     msgs.send({ embed: combo.Scipio })
			// }
			// else if ( msg.startsWith(prefix+'han')&& suffix) {
			//     msgs.send({ embed: combo.hanibal })
			// }
			// else if ( msg.startsWith(prefix+'sala')&& suffix) {
			//     msgs.send({ embed: combo.saladin })
			// }
			// else if ( msg.startsWith(prefix+'con')&& suffix) {
			//     msgs.send({ embed: combo.constine })
			// }
			// else if ( msg.startsWith(prefix+'loh')&& suffix) {
			//     msgs.send({ embed: combo.lohar })
			// }
			// else if ( msg.startsWith(prefix+'boudi')&& suffix) {
			//     msgs.send({ embed: combo.boudica })
			// }
			// else if ( msg.startsWith(prefix+'osma')&& suffix) {
			//     msgs.send({ embed: combo.osman })
			// }
			// else if ( msg.startsWith(prefix+'city')&& suffix) {
			//     msgs.send({ embed: combo.city })
			// }
			// else if ( msg.startsWith(prefix+'dragon')&& suffix) {
			//     msgs.send({ embed: combo.dragon})
			// }
			// else if ( msg.startsWith(prefix+'tomoe')&& suffix) {
			//     msgs.send({ embed:combo.tomoe })
			// }
			// else if ( msg.startsWith(prefix+'gengis')&& suffix) {
			//     msgs.send({ embed:combo.gengis })
			// }
			// else if ( msg.startsWith(prefix+'cleo')&& suffix)  {
			//     msgs.send({ embed:combo.cleo })
			// }
			// else if ( msg.startsWith(prefix+'joan')&& suffix)  {
			//     msgs.send({ embed:combo.joan1 })
			// }
			// else if ( msg.startsWith(prefix+'jul'&& suffix))  {
			//     msgs.send({ embed:combo.ceaser1 })
			// }
			// else if ( msg.startsWith(prefix+'lance')&& suffix) {
			//     msgs.send({ embed:combo.lance1 })
			// }
			// else if ( msg.startsWith(prefix+'fred'&& suffix))  {
			//     msgs.send({ embed:combo.fred1 })
			// }
			// else if ( msg.startsWith(prefix+'el'&& suffix))  {
			//     msgs.send({ embed:combo.elcid1 })
			// }
			// else if ( msg.startsWith(prefix+'meh'&& suffix))  {
			//     msgs.send({ embed:combo.mehmed1 })
			// }
			// else if ( msg.startsWith(prefix+'beli')&& suffix) {
			//     msgs.send({ embed:combo.beli1 })
			// }
			// else if ( (msg.startsWith(prefix+'bei'&& suffix) ) || (msg.startsWith(prefix+'bai'))&& suffix) {
			//     msgs.send({ embed:combo.bei1 })
			// }
			// else if ( msg.startsWith(prefix+'her'&& suffix))  {
			//     msgs.send({ embed:combo.herman1 })
			// }
			// else if ( msg.startsWith(prefix+'eul'&& suffix))  {
			//     msgs.send({ embed:combo.eulji1 })
			// }
			// else if ( msg.startsWith(prefix+'char')&& suffix) {
			//     msgs.send({ embed:combo.char1 })
			// }
			// else if ( msg.startsWith(prefix+'cao')&& suffix) {
			//     msgs.send({ embed:combo.cao1 })
			// }
			// else if ( msg.startsWith(prefix+'yi')&& suffix) {
			//     msgs.send({ embed:combo.yi1 })
			// }
			// else if ( msg.startsWith(prefix+'rich')&& suffix) {
			//     msgs.send({ embed:combo.rich1 })
			// }
			// else if ( msg.startsWith(prefix+'kusu')&& suffix) {
			//     msgs.send({ embed:combo.kusu1 })
			// }
			// else if ( msg.startsWith(prefix+'pela')&& suffix) {
			//     msgs.send({ embed:combo.pela1 })
			// }
			// else if ( msg.startsWith(prefix+'mina')&& suffix) {
			//     msgs.send({ embed:combo.mina1 })
			// }

			//runs after combo this will give options
			if (msg.startsWith("!aethe")) {
				msgs.send({
					files: [file.aethFile],
					embed: commander.aetheflead,
				});
			} else if (msg.startsWith(prefix + "scip")) {
				msgs.send({
					files: [file.scipioFile],
					embed: commander.Scipio,
				});
			} else if (msg.startsWith(prefix + "han")) {
				msgs.send({ files: [file.haniFile], embed: commander.hanibal });
			} else if (msg.startsWith(prefix + "sala")) {
				msgs.send({ files: [file.salaFile], embed: commander.saladin });
			} else if (msg.startsWith(prefix + "con")) {
				msgs.send({
					files: [file.constineFile],
					embed: commander.constine,
				});
			} else if (msg.startsWith(prefix + "loh")) {
				msgs.send({ files: [file.loharFile], embed: commander.lohar });
			} else if (msg.startsWith(prefix + "boudi")) {
				msgs.send({
					files: [file.boudicaFile],
					embed: commander.boudica,
				});
			} else if (msg.startsWith(prefix + "osma")) {
				msgs.send({ files: [file.osmanFile], embed: commander.osman });
			} else if (msg.startsWith(prefix + "city")) {
				msgs.send({ files: [file.cityFile], embed: commander.city });
			} else if (msg.startsWith(prefix + "dragon")) {
				msgs.send({
					files: [file.dragonFile],
					embed: commander.dragon,
				});
			} else if (msg.startsWith(prefix + "tomoe")) {
				msgs.send({ files: [file.tomoeFile], embed: commander.tomoe });
			} else if (msg.startsWith(prefix + "gengis")) {
				msgs.send({
					files: [file.gengisFile],
					embed: commander.gengis,
				});
			} else if (
				msg.startsWith(prefix + "cleo") &&
				msg.endsWith("gather")
			) {
				msgs.send({ files: [file.cleo2File], embed: commander.cleo2 });
			} else if (msg.startsWith(prefix + "cleo")) {
				msgs.send({ files: [file.cleo1File], embed: commander.cleo });
			} else if (
				msg.startsWith(prefix + "joan") &&
				msg.endsWith("gather")
			) {
				msgs.send({ files: [file.joan2File], embed: commander.joan2 });
			} else if (msg.startsWith(prefix + "joan")) {
				msgs.send({ files: [file.joan1File], embed: commander.joan1 });
			} else if (msg.startsWith(prefix + "sun")) {
				msgs.send({ files: [file.sun2File], embed: commander.sun2 });
			} else if (msg.startsWith(prefix + "jul") && msg.endsWith("nuke")) {
				msgs.send({ files: [file.jul1File], embed: commander.ceaser1 });
			} else if (msg.startsWith(prefix + "jul")) {
				msgs.send({ files: [file.jul2File], embed: commander.ceaser2 });
			} else if (msg.startsWith(prefix + "lance")) {
				msgs.send({ files: [file.lanceFile], embed: commander.lance1 });
			} else if (
				msg.startsWith(prefix + "fred") &&
				msg.endsWith("nuke")
			) {
				msgs.send({ files: [file.fred1File], embed: commander.fred1 });
			} else if (msg.startsWith(prefix + "fred")) {
				msgs.send({ files: [file.fred2File], embed: commander.fred2 });
			} else if (msg.startsWith(prefix + "el") && msg.endsWith("arch")) {
				msgs.send({
					files: [file.elcid1File],
					embed: commander.elcid1,
				});
			} else if (msg.startsWith(prefix + "el")) {
				msgs.send({
					files: [file.elcid2File],
					embed: commander.elcid2,
				});
			} else if (
				msg.startsWith(prefix + "meh") &&
				msg.endsWith("rally")
			) {
				msgs.send({
					files: [file.mehmed1File],
					embed: commander.mehmed1,
				});
			} else if (msg.startsWith(prefix + "meh")) {
				msgs.send({
					files: [file.mehmed2File],
					embed: commander.mehmed2,
				});
			} else if (msg.startsWith(prefix + "beli") && msg.endsWith("cav")) {
				msgs.send({ files: [file.beli2File], embed: commander.beli2 });
			} else if (msg.startsWith(prefix + "beli")) {
				msgs.send({ files: [file.beli1File], embed: commander.beli1 });
			} else if (
				(msg.startsWith(prefix + "bei") && msg.endsWith("cav")) ||
				msg.startsWith(prefix + "bai" && msg.endsWith("cav"))
			) {
				msgs.send({ files: [file.bei2File], embed: commander.bei2 });
			} else if (
				msg.startsWith(prefix + "bei") ||
				msg.startsWith(prefix + "bai")
			) {
				msgs.send({ files: [file.bei1File], embed: commander.bei1 });
			} else if (msg.startsWith(prefix + "her") && msg.endsWith("nuke")) {
				msgs.send({
					files: [file.herman1File],
					embed: commander.herman1,
				});
			} else if (msg.startsWith(prefix + "her") && msg.endsWith("arch")) {
				msgs.send({
					files: [file.herman3File],
					embed: commander.herman3,
				});
			} else if (msg.startsWith(prefix + "her")) {
				msgs.send({
					files: [file.herman2File],
					embed: commander.herman2,
				});
			} else if (
				msg.startsWith(prefix + "eul") &&
				msg.endsWith("infantry")
			) {
				msgs.send({
					files: [file.eulji3File],
					embed: commander.eulji3,
				});
			} else if (
				msg.startsWith(prefix + "eul") &&
				msg.endsWith("garri")
			) {
				msgs.send({
					files: [file.eulji1File],
					embed: commander.eulji1,
				});
			} else if (msg.startsWith(prefix + "eul")) {
				msgs.send({
					files: [file.eulji2File],
					embed: commander.eulji2,
				});
			} else if (
				msg.startsWith(prefix + "char") &&
				msg.endsWith("infantry")
			) {
				msgs.send({ files: [file.char2File], embed: commander.char2 });
			} else if (msg.startsWith(prefix + "char") && msg.endsWith("mix")) {
				msgs.send({ files: [file.char3File], embed: commander.char3 });
			} else if (msg.startsWith(prefix + "char")) {
				msgs.send({ files: [file.char1File], embed: commander.char1 });
			} else if (
				msg.startsWith(prefix + "cao") &&
				msg.endsWith("mobility")
			) {
				msgs.send({ files: [file.cao2File], embed: commander.cao2 });
			} else if (msg.startsWith(prefix + "cao")) {
				msgs.send({ files: [file.cao1File], embed: commander.cao1 });
			} else if (msg.startsWith(prefix + "yi") && msg.endsWith("nuke")) {
				msgs.send({ files: [file.yi3File], embed: commander.yi3 });
			} else if (msg.startsWith(prefix + "yi") && msg.endsWith("arch")) {
				msgs.send({ files: [file.yi2File], embed: commander.yi2 });
			} else if (msg.startsWith(prefix + "yi")) {
				msgs.send({ files: [file.yi1File], embed: commander.yi1 });
			} else if (
				msg.startsWith(prefix + "rich") &&
				msg.endsWith("infantry")
			) {
				msgs.send({ files: [file.rich3File], embed: commander.rich3 });
			} else if (msg.startsWith(prefix + "rich") && msg.endsWith("mix")) {
				msgs.send({ files: [file.rich2File], embed: commander.rich2 });
			} else if (msg.startsWith(prefix + "rich")) {
				msgs.send({ files: [file.rich1File], embed: commander.rich1 });
			} else if (
				msg.startsWith(prefix + "kusu") &&
				msg.endsWith("garri")
			) {
				msgs.send({ files: [file.kusu3File], embed: commander.kusu3 });
			} else if (
				msg.startsWith(prefix + "kusu") &&
				msg.endsWith("nuke")
			) {
				msgs.send({ files: [file.kusu2File], embed: commander.kusu2 });
			} else if (msg.startsWith(prefix + "kusu")) {
				msgs.send({ files: [file.kusu1File], embed: commander.kusu1 });
			} else if (
				msg.startsWith(prefix + "pela") &&
				msg.endsWith("nuke")
			) {
				msgs.send({ files: [file.pela3File], embed: commander.pela3 });
			} else if (
				msg.startsWith(prefix + "pela") &&
				msg.endsWith("garri")
			) {
				msgs.send({ files: [file.pela2File], embed: commander.pela2 });
			} else if (msg.startsWith(prefix + "pela")) {
				msgs.send({ files: [file.pela1File], embed: commander.pela1 });
			} else if (msg.startsWith(prefix + "mina") && msg.endsWith("cav")) {
				msgs.send({ files: [file.mina3File], embed: commander.mina3 });
			} else if (
				msg.startsWith(prefix + "mina") &&
				msg.endsWith("rally")
			) {
				msgs.send({ files: [file.mina2File], embed: commander.mina2 });
			} else if (msg.startsWith(prefix + "mina")) {
				msgs.send({ files: [file.mina1File], embed: commander.mina1 });
			}
		}),
};
