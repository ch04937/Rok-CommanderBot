// ⇄

const gold = 0xffd700;
const purple = 0xff33e9;
const green = 0x27be52;
const blue = 0x3a8bdf;
const card = "Commander Sheet";

const names = {
	aetheflead: {
		color: gold,
		title: ` Aetheflead ${card}`,
		author: {
			name: "Aetheflead",
			icon_url:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYiuIWZTOc8qYfDnhtwAkd1eShN71u0R_VuzEo35FiQFhRsadE&s",
		},
		description: "Aetheflead can do this....",
		thumbnail: {
			url:
				"https://cdn.shopify.com/s/files/1/0258/1712/0802/products/aethelflaed_480x480.png?v=1565823184",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/11/aethefled-field-battle-1024x576.png",
		},
	},
	scipio: {
		color: purple,
		title: ` Scipio ${card}`,
		author: {
			name: "Scipio",
			icon_url:
				"https://i0.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero14.png?fit=600%2C650&ssl=1",
		},
		description: "Scipio can do this....",
		thumbnail: {
			url:
				"https://i0.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero14.png?fit=600%2C650&ssl=1",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/06/scipio-talent-tree.png",
		},
	},
	hannibal: {
		color: gold,
		title: ` Hannibal ${card}`,
		author: {
			name: "Hannibal",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/5/54/Hannibal_Barca.png/revision/latest?cb=20181107164847",
		},
		description: "Hannibal can do this....",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/5/54/Hannibal_Barca.png/revision/latest?cb=20181107164847",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/11/hannibal-barca-field-battles-1024x576.png",
		},
	},
	saladin: {
		color: gold,
		title: ` Saladin ${card}`,
		author: {
			name: "Saladin",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/2/2d/Saladin.png/revision/latest?cb=20190217114036",
		},
		description: "Saladin can do this....",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/2/2d/Saladin.png/revision/latest?cb=20190217114036",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/06/saladin-talent-tree-1024x576.png",
		},
	},
	constantine: {
		color: gold,
		title: ` Constantine ${card}`,
		author: {
			name: "Constantine",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/b/bc/Constantine_I.png/revision/latest?cb=20190217114020",
		},
		description: "Constantine can do this....",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/b/bc/Constantine_I.png/revision/latest?cb=20190217114020",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/09/Constantine-1024x577.jpg",
		},
	},
	lohar: {
		color: purple,
		title: ` Lohar ${card}`,
		author: {
			name: "Lohar",
			icon_url:
				"https://i0.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero37.png?fit=600%2C650&ssl=1",
		},
		description:
			"Barbaining killing commmander, good for leveling their paired commander",
		thumbnail: {
			url:
				"https://i0.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero37.png?fit=600%2C650&ssl=1",
		},
		fields: [
			{
				name: "Tree",
				value:
					"The bottem side of peacekeeping, then optional, read Maximas guide on Play styles, refernce peacekeeping commanders",
				inline: true,
			},
			{
				name: "Typical Role",
				value: "Peacekeeping",
				inline: true,
			},
		],

		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/11/lohar-talent-tree-1024x578.png",
		},
	},
	boudica: {
		color: purple,
		title: ` Boudica ${card}`,
		author: {
			name: "Boudica",
			icon_url:
				"https://i1.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero17.png?fit=600%2C650&ssl=1",
		},
		description:
			"To optimally utilize Boudica’s skills, we will mostly build around her Skills Talent Tree and then pick up some talents in Peacekeeping Talent Trees. Unlocking talents that will increase skill damage and increase rage restoration will drastically improve her nuking ability. Her skills that deals massive damage, heals slightly wounded units and restores rage will be maximized if Boudica can unleash skills faster.",
		thumbnail: {
			url:
				"https://i1.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero17.png?fit=600%2C650&ssl=1",
		},
		fields: [
			{
				name: "Parings",
				value:
					"Semi Support: \nA semi support is a cross between a fighting pair and a supporting pair. It has either compromised its fighting ability to bring a debuff/disable/AOE buff into the fight, or it is sacrificing its support potential to bring a bit more damage to the table. This is done through either the commander pairing or the talent tree chosen.\n  ",
			},
		],
		image: {
			url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/BOUDICA_TALENTS_nukerlvl.png?resize=1024%2C577&ssl=1",
		},
	},
	osman: {
		color: purple,
		title: ` Osman ${card}`,
		author: {
			name: "Osman",
			icon_url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/Osman.png?fit=600%2C650&ssl=1",
		},
		description: "Osman can do this....",
		thumbnail: {
			url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/Osman.png?fit=600%2C650&ssl=1",
		},
		image: {
			url:
				"https://i0.wp.com/everythingrok.com/wp-content/uploads/2019/03/Osman_I_talents_all_in_one.png?resize=1024%2C577&ssl=1",
		},
	},
	city: {
		color: green,
		title: ` City Keeper ${card}`,
		author: {
			name: "city",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/9/9d/City_Keeper.png/revision/latest?cb=20181107165426",
		},
		description: "City Keeper can do this....",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/9/9d/City_Keeper.png/revision/latest?cb=20181107165426",
		},
		image: {
			url:
				"https://preview.redd.it/sorh1ww6io421.png?width=1920&format=png&auto=webp&s=b24922db297ea4253eab1f6a99b42edbc494e086",
		},
	},
	dragon: {
		color: green,
		title: ` Dragon Lancer ${card}`,
		author: {
			name: "Dragon Lancer",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/c/c4/Dragon_Lancer.png/revision/latest?cb=20181107165413",
		},
		description: "Dragon Lancer can do this....",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/c/c4/Dragon_Lancer.png/revision/latest?cb=20181107165413",
		},
		image: {
			url: "https://i.ytimg.com/vi/EgFujI7WiAM/hqdefault.jpg",
		},
	},
	tomoe: {
		color: blue,
		title: ` Tomoe Gozen ${card}`,
		author: {
			name: "Tomeo Gozen",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/8/87/Tomoe_Gozen.png/revision/latest?cb=20181107165303",
		},
		description: "Tomoe Gozen can do this....",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/8/87/Tomoe_Gozen.png/revision/latest?cb=20181107165303",
		},
		image: {
			url:
				"https://riseofkingdomsboss.com/wp-content/uploads/2020/01/rise-of-kingdoms-tomoe-gozen-versatility-build-728x331.jpg",
		},
	},
	gengiskhan: {
		color: gold,
		title: ` Gengiskhan ${card}`,
		author: {
			name: "Gengiskhan",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/e/e3/Genghis_Khan.png/revision/latest?cb=20190505172506",
		},
		description: "Gengiskhan can do this....",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/e/e3/Genghis_Khan.png/revision/latest?cb=20190505172506",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/06/ghenghis-khan-talent-tree-1024x576.png",
		},
	},
	cleopatra: {
		color: gold,
		title: ` Cleopatra ${card}`,
		author: {
			name: "city",
			icon_url:
				"http://www.rocfanatics.com/wp-content/uploads/2018/10/rise-of-civilizations-cleopatra-2-372x700.jpg",
		},
		description: "Cleopatra Support otherwise go with a gathering build",
		thumbnail: {
			url:
				"http://www.rocfanatics.com/wp-content/uploads/2018/10/rise-of-civilizations-cleopatra-2-372x700.jpg",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/09/cleopatra-support-build-1024x558.jpg",
		},
	},
	joan: {
		color: purple,
		title: `Joan of Arc ${card}`,
		author: {
			name: "Joan of Arc",
			icon_url:
				"https://i0.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero15.png?fit=600%2C650&ssl=1",
		},
		description:
			"Joan can be used as a support build otherwise max gathering",
		thumbnail: {
			url:
				"https://i0.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero15.png?fit=600%2C650&ssl=1",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/03/joan-of-arc-support-build-1024x578.jpg",
		},
	},
	sun: {
		color: purple,
		title: ` Sun Tzu ${card}`,
		author: {
			name: "Sun Tzu",
			icon_url:
				"https://i0.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero3-1.png?fit=600%2C650&ssl=1",
		},
		description: "Sun Tzu can do this.... ",
		thumbnail: {
			url:
				"https://i0.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero3-1.png?fit=600%2C650&ssl=1",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/06/stun-tzu-talent-tree-1024x576.png",
		},
	},
	julius: {
		color: gold,
		title: `Julius Ceaser ${card}`,
		author: {
			name: "Julius Ceaser",
			icon_url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero1.png?fit=600%2C650&ssl=1",
		},
		description:
			"Julius Ceaser can do this.... city destroyer !tree julious rally",
		thumbnail: {
			url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero1.png?fit=600%2C650&ssl=1",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/06/julius-talent-tree-2-1024x576.png",
		},
	},
	julius3: {
		color: gold,
		title: `Julius Ceaser ${card}`,
		author: {
			name: "Julius Ceaser",
			icon_url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero1.png?fit=600%2C650&ssl=1",
		},
		description:
			"Julius Ceaser can do this.... if you are are looking for Julius nuker/skill try !tree jul nuke",
		thumbnail: {
			url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero1.png?fit=600%2C650&ssl=1",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/06/julius-talent-tree-3-1024x576.png",
		},
	},
	lancelot: {
		color: blue,
		title: `Lancelot ${card}`,
		author: {
			name: "Lancelot",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/c/cd/Lancelot.png/revision/latest?cb=20181107165242",
		},
		description: "Lancelot can do this.... ",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/c/cd/Lancelot.png/revision/latest?cb=20181107165242",
		},
		image: {
			url:
				"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVWgqdWFa2x8&psig=AOvVaw37BmHx_7W6XPS8OOF7CpmX&ust=1584685792991000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPD1ieb0pegCFQAAAAAdAAAAABAI",
		},
	},
	frederick: {
		color: blue,
		title: `Frederick ${card}`,
		author: {
			name: "Frederick",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/b/ba/Frederick_I.png/revision/latest?cb=20181107164601",
		},
		description:
			"This is a hybrid build really good when you’re trying to attack governor cities, flags, and fortresses. For nuke/skill !tree frederick nuke",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/b/ba/Frederick_I.png/revision/latest?cb=20181107164601",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/06/uncle-fred-ultimate-build-1024x677.jpg",
		},
	},
	frederick2: {
		color: blue,
		title: `Frederick ${card}`,
		author: {
			name: "Frederick",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/b/ba/Frederick_I.png/revision/latest?cb=20181107164601",
		},
		description:
			"PVP fighting in the field use this.  hybrid: !tree frederick",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/b/ba/Frederick_I.png/revision/latest?cb=20181107164601",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/11/Fredrick-Field-Battle-tree-1024x576.png",
		},
	},
	elcid: {
		color: gold,
		title: `El Cid ${card}`,
		author: {
			name: "El Cid",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/a/a1/El_Cid.png/revision/latest?cb=20181107164512",
		},
		description:
			"El Cid can do this.... if you are looking for a nuke build try !tree elcid nuke",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/a/a1/El_Cid.png/revision/latest?cb=20181107164512",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/09/el-cid-archer-build-1024x558.jpg",
		},
	},
	elcid2: {
		color: gold,
		title: `El Cid ${card}`,
		author: {
			name: "El Cid",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/a/a1/El_Cid.png/revision/latest?cb=20181107164512",
		},
		description:
			"El Cid can do this.... if you are looking for an archer build try !tree elcid",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/a/a1/El_Cid.png/revision/latest?cb=20181107164512",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/09/el-cid-skill-tree-1024x558.jpg",
		},
	},
	mehmed: {
		color: gold,
		title: `Mehmed ${card}`,
		author: {
			name: "Mehmed",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/8/80/Mehmed_II.png/revision/latest?cb=20190217114048",
		},
		description: "blank for now",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/8/80/Mehmed_II.png/revision/latest?cb=20190217114048",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/09/mehmed-ii-pvp-buildings-build-1024x570.jpg",
		},
	},
	belisarious: {
		color: purple,
		title: `Belisarious ${card}`,
		author: {
			name: "Belisarious",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/c/c2/Belisarius.png/revision/latest?cb=20190217114119",
		},
		description:
			"Belisarious can do this.... if you are looking for a cavalry build try !tree belisarious cav",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/c/c2/Belisarius.png/revision/latest?cb=20190217114119",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/03/belisarius-talent-build-pve-1024x578.jpg",
		},
	},
	belisarious4: {
		color: purple,
		title: `Belisarius ${card}`,
		author: {
			name: "Belisarius",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/c/c2/Belisarius.png/revision/latest?cb=20190217114119",
		},
		description:
			"Belisarius can do this.... if you are looking for mobility build try !tree beli",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/c/c2/Belisarius.png/revision/latest?cb=20190217114119",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/03/belisarius-talent-build-2-1024x578.jpg",
		},
	},
	baibars: {
		color: purple,
		title: `Beibars ${card}`,
		author: {
			name: "Beibars",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/5/51/Baibars.png/revision/latest?cb=20190424194500",
		},
		description:
			"Beibars can do this.... if you are looking for a cavalry build try !tree bei cav",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/5/51/Baibars.png/revision/latest?cb=20190424194500",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/03/baibars-talent-tree-2-1024x578.jpg",
		},
	},
	baibars4: {
		color: purple,
		title: `Beibars ${card}`,
		author: {
			name: "Beibars",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/5/51/Baibars.png/revision/latest?cb=20190424194500",
		},
		description:
			"Beibars can do this.... if you are looking for skill/nuke build try !tree bei",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/5/51/Baibars.png/revision/latest?cb=20190424194500",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/03/baibars-cavalry-1024x576.jpg",
		},
	},
	herman: {
		color: purple,
		title: `Hermann ${card}`,
		author: {
			name: "Hermann",
			icon_url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero12.png?fit=600%2C650&ssl=1",
		},
		description:
			"Hermann can do this.... if you are looking for archer build try !tree her arch. If you are looking for nuker build try !tree her nuke",
		thumbnail: {
			url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero12.png?fit=600%2C650&ssl=1",
		},
		image: {
			url:
				"https://i0.wp.com/everythingrok.com/wp-content/uploads/2019/03/HERMANN_TALENTS_GARRISON.png?resize=1024%2C577&ssl=1",
		},
	},
	herman5: {
		color: purple,
		title: `Hermann ${card}`,
		author: {
			name: "Hermann",
			icon_url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero12.png?fit=600%2C650&ssl=1",
		},
		description:
			"Hermann can do this.... if you are looking for a garrison build try !tree her. If you are looking for a nuker build try !tree her nuke",
		thumbnail: {
			url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero12.png?fit=600%2C650&ssl=1",
		},
		image: {
			url:
				"https://i1.wp.com/everythingrok.com/wp-content/uploads/2019/03/HERMANN_TALENTS_ARCHERY.png?resize=1024%2C577&ssl=1",
		},
	},
	herman2: {
		color: purple,
		title: `Hermann ${card}`,
		author: {
			name: "Hermann",
			icon_url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero12.png?fit=600%2C650&ssl=1",
		},
		description:
			"Hermann can do this.... if you are looking for garison build try !tree her. If you are looking for an archer build try !tree her arch",
		thumbnail: {
			url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero12.png?fit=600%2C650&ssl=1",
		},
		image: {
			url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/HERMANN_TALENTS_NUKER.png?resize=1024%2C577&ssl=1",
		},
	},
	eulji: {
		color: purple,
		title: `Eulji Mundeok ${card}`,
		author: {
			name: "Eulji Mundeok",
			icon_url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero16.png?fit=600%2C650&ssl=1",
		},
		description:
			"Eulji Mundeok can do this.... if you are looking for garrison build try !tree eulji garri.",
		thumbnail: {
			url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero16.png?fit=600%2C650&ssl=1",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/06/eulji-field-flad-fight-talent-tree-1024x576.png",
		},
	},
	eulji6: {
		color: purple,
		title: `Eulji Mundeok ${card}`,
		author: {
			name: "Eulji Mundeok",
			icon_url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero16.png?fit=600%2C650&ssl=1",
		},
		description:
			"Eulji Mundeok can do this....  If you are looking for a mix build try !tree eul",
		thumbnail: {
			url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero16.png?fit=600%2C650&ssl=1",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/09/eulji-mundeok-garrison-talent-tree-1024x584.jpg",
		},
	},
	charles6: {
		color: gold,
		title: `Charles Martel ${card}`,
		author: {
			name: "Charles Martel",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/2/22/Charles_Martel.png/revision/latest?cb=20181107164815",
		},
		description:
			"Charles Martel can do this... If you are looking for mix build try !tree charles",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/2/22/Charles_Martel.png/revision/latest?cb=20181107164815",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/06/charles-martel-talent-2-1024x576.png",
		},
	},
	charles: {
		color: gold,
		title: `Charles Martel ${card}`,
		author: {
			name: "Charles Martel",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/2/22/Charles_Martel.png/revision/latest?cb=20181107164815",
		},
		description:
			"Charles Martel can do this.... if you are looking for garrison !tree charles garri",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/2/22/Charles_Martel.png/revision/latest?cb=20181107164815",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/11/charles-martel-field-battle-talent-tree-1-1024x575.png",
		},
	},
	cao: {
		color: gold,
		title: `Cao Cao ${card}`,
		author: {
			name: "Cao Cao",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/b/b0/Cao_Cao.png/revision/latest?cb=20181107164543",
		},
		description:
			"Cao Cao can do this.... if you are looking for a mobility build try !tree cao mobility ",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/b/b0/Cao_Cao.png/revision/latest?cb=20181107164543",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/06/cao-cao-field-fights-1024x576.png",
		},
	},
	yi: {
		color: gold,
		title: `Yi Seong-Gye ${card}`,
		author: {
			name: "Yi Seong-Gye",
			icon_url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/d/d0/Yi_Seong-Gye.png/revision/latest?cb=20181107164706",
		},
		description: "Yi Seong-Gye can do this.... ",
		thumbnail: {
			url:
				"https://vignette.wikia.nocookie.net/riseofcivilizations/images/d/d0/Yi_Seong-Gye.png/revision/latest?cb=20181107164706",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/09/Yi_Seong-Gye-1024x576.jpg",
		},
	},
	richard: {
		color: gold,
		title: `Richard ${card}`,
		author: {
			name: "Richard",
			icon_url:
				"https://i1.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero8.png?fit=600%2C650&ssl=1",
		},
		description:
			"Richard can do this....  If you are looking for an infantry build try !tree rich infantry",
		thumbnail: {
			url:
				"https://i1.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero8.png?fit=600%2C650&ssl=1",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/09/richard-i-garrison-talent-1024x570.jpg",
		},
	},
	rich7: {
		color: gold,
		title: `Richard ${card}`,
		author: {
			name: "Richard",
			icon_url:
				"https://i1.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero8.png?fit=600%2C650&ssl=1",
		},
		description:
			"Richard can do this.... if you are looking for garrison build try !tree rich .",
		thumbnail: {
			url:
				"https://i1.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero8.png?fit=600%2C650&ssl=1",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/09/richard-i-infantry-talent-1024x570.jpg",
		},
	},
	kusunoki: {
		color: purple,
		title: `Kusunoki ${card}`,
		author: {
			name: "Kusunoki",
			icon_url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero13.png?fit=600%2C650&ssl=1",
		},
		description:
			"Kusunoki can do this.... if you are looking for nuke build try !tree kusu nuke. If you are looking for an garrison build try !tree kusu garri",
		thumbnail: {
			url:
				"https://i2.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero13.png?fit=600%2C650&ssl=1",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/11/kusunoki-masashige-field-battle-1024x574.png",
		},
	},
	pelagius: {
		color: purple,
		title: `Pelagius  ${card}`,
		author: {
			name: "Pelagius ",
			icon_url:
				"https://i1.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero18-1.png?fit=600%2C650&ssl=1",
		},
		description:
			"Pelagius  can do this....  If you are looking for an garrison build try !tree pela garri",
		thumbnail: {
			url:
				"https://i1.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero18-1.png?fit=600%2C650&ssl=1",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/03/pelagius-pvp-talent-tree-2-1024x578.jpg",
		},
	},
	pelagius6: {
		color: purple,
		title: `Pelagius  ${card}`,
		author: {
			name: "Pelagius ",
			icon_url:
				"https://i1.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero18-1.png?fit=600%2C650&ssl=1",
		},
		description:
			"Pelagius  can do this.... if you are looking for a cavalry build try !tree pela . ",
		thumbnail: {
			url:
				"https://i1.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero18-1.png?fit=600%2C650&ssl=1",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/03/pelagius-garrison-talent-tree-2-1024x578.jpg",
		},
	},
	minamoto: {
		color: gold,
		title: `Minamoto no Yoshitsune ${card}`,
		author: {
			name: "Minamoto no Yoshitsune",
			icon_url:
				"https://i1.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero9.png?fit=600%2C650&ssl=1",
		},
		description: "Minamoto no Yoshitsune can do this.... ",
		thumbnail: {
			url:
				"https://i1.wp.com/everythingrok.com/wp-content/uploads/2019/03/img_Hero9.png?fit=600%2C650&ssl=1",
		},
		image: {
			url:
				"https://rok.guide/wp-content/uploads/2019/06/minamoto-no-yoshitsune-talent-1024x576.png",
		},
	},
};

module.exports = { names };
