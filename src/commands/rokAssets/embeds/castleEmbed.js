// ⇄
const stone = 0x888c8d;
const bronze = 0xcd7f32;
const iron = 0x9c9a99;
const dark = 0x000000;
const fuedalAge = 0xf66108;
const Castle = "Castle Level";
const Castleimg =
	"https://vignette.wikia.nocookie.net/riseofcivilizations/images/f/fd/Building_Castle_1_5.png/revision/latest/scale-to-width-down/180?cb=20181114154437";

const levels = {
	1: {
		color: stone,
		title: `${Castle} 1 development `,
		author: {
			name: "Castle level 1 The Stone Age",
			icon_url: `${Castleimg}`,
		},
		description:
			"Castle Level 1, You have started your journey congratulations!",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.1",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "25,000",
				inline: true,
			},
			{
				name: "Cost",
				value: "Corn: 200\n Wood:300\nBook of Covenant: x0",
				inline: true,
			},
			{
				name: "Time",
				value: "12s",
				inline: true,
			},
			{
				name: "Power",
				value: "5",
				inline: true,
			},
		],
	},
	2: {
		color: stone,
		title: `${Castle} 2 `,
		author: {
			name: "Castle level 2 The Stone Age",
			icon_url: `${Castleimg}`,
		},
		description:
			"Castle Level 2, You have started your journey congratulations!",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.2",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "40,000",
				inline: true,
			},
			{
				name: "Cost",
				value: "Corn: 300\nWood: 500\nBook of Covenant: x2",
				inline: true,
			},
			{
				name: "Time",
				value: "1 min",
				inline: true,
			},
			{
				name: "Power",
				value: "11",
				inline: true,
			},
		],
	},
	3: {
		color: stone,
		title: `${Castle} 3 `,
		author: {
			name: "Castle level 3 The Stone Age",
			icon_url: `${Castleimg}`,
		},
		description:
			"Castle Level 3, You have started your journed congratulations!",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.3",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "60,000",
				inline: true,
			},
			{
				name: "Cost",
				value: "Corn: 500\nWood: 1K\nBook of Covenant: x5",
				inline: true,
			},
			{
				name: "Time",
				value: "5 minutes",
				inline: true,
			},
			{
				name: "Power",
				value: "26",
				inline: true,
			},
		],
	},
	4: {
		color: bronze,
		title: `${Castle} 4 `,
		author: {
			name: "Castle level 3 The Bronze Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 3",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.4",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "100,000",
				inline: true,
			},
			{
				name: "Cost",
				value: "Corn: 1k\nWood: 2k\nBook of Covenant: x8",
				inline: true,
			},
			{
				name: "Time",
				value: "16 minutes 40s",
				inline: true,
			},
			{
				name: "Power",
				value: "72",
				inline: true,
			},
		],
	},
	5: {
		color: bronze,
		title: `${Castle} 5 `,
		author: {
			name: "Castle level 5 The Bronze Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 5, Keep pushing!",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.5",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "150,000",
				inline: true,
			},
			{
				name: "Cost",
				value: "Corn: 2k\nWood: 3.8k\nBook of Covenant: x15",
				inline: true,
			},
			{
				name: "Time",
				value: "35 Min",
				inline: true,
			},
			{
				name: "Power",
				value: "167",
				inline: true,
			},
		],
	},
	6: {
		color: stone,
		title: `${Castle} 6 `,
		author: {
			name: "Castle level 6 The Stone Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 6, Nothing special here keep leveling up!",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.6",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "200,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 3.5k \nWood: 9.8k \nStone:3.5k\n Book of Covenant: x20",
				inline: true,
			},
			{
				name: "Time",
				value: "53 Min 20s",
				inline: true,
			},
			{
				name: "Power",
				value: "325",
				inline: true,
			},
		],
	},
	7: {
		color: stone,
		title: `${Castle} 7 `,
		author: {
			name: "Castle level 7 The Stone Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 7",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.7",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "250,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 5.3k \nWood: 9.8k \nStone:5.3k\n Book of Covenant: x30",
				inline: true,
			},
			{
				name: "Time",
				value: "1 Hours 47 Min",
				inline: true,
			},
			{
				name: "Power",
				value: "627",
				inline: true,
			},
		],
	},
	8: {
		color: stone,
		title: `${Castle} 8 `,
		author: {
			name: "Castle level 8 The Stone Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 8",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.8",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "300,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 8k \nWood: 14.8k \nStone: 8k \n Book of Covenant: x40",
				inline: true,
			},
			{
				name: "Time",
				value: "3 Hours 33Min",
				inline: true,
			},
			{
				name: "Power",
				value: "1,208",
				inline: true,
			},
		],
	},
	9: {
		color: stone,
		title: `${Castle} 9 `,
		author: {
			name: "Castle level 9 The Stone Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 9",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.9",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "350,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 12.3k \nWood: 22.3k \nStone: 12k\n Book of Covenant: x50",
				inline: true,
			},
			{
				name: "Time",
				value: "7 Hours 7 Min",
				inline: true,
			},
			{
				name: "Power",
				value: "2,336",
				inline: true,
			},
		],
	},
	10: {
		color: iron,
		title: `${Castle} 10 `,
		author: {
			name: "Castle level 10 The Iron Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 10",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.10",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "400,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 18k \nWood: 22.5k \nStone: 18k\nBook of Covenant: x70",
				inline: true,
			},
			{
				name: "Time",
				value: "14 Hours 13Min",
				inline: true,
			},
			{
				name: "Power",
				value: "4,541",
				inline: true,
			},
		],
	},
	11: {
		color: iron,
		title: `${Castle} 11 `,
		author: {
			name: "Castle level 11 The Iron Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 11",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.11 ",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "475,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 27.5k \nWood: 52.5k \nStone: 27.5k\n Book of Covenant: x80",
				inline: true,
			},
			{
				name: "Time",
				value: "17 Hours 4 Min",
				inline: true,
			},
			{
				name: "Power",
				value: "7,241",
				inline: true,
			},
		],
	},
	12: {
		color: iron,
		title: `${Castle} 12 `,
		author: {
			name: "Castle level 12 The Iron Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 12",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.111",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "550,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 42.5k \nWood: 80k \nStone: 42.5k\n Book of Covenant: x100",
				inline: true,
			},
			{
				name: "Time",
				value: "20 Hours 29 Min",
				inline: true,
			},
			{
				name: "Power",
				value: "10,592",
				inline: true,
			},
		],
	},
	13: {
		color: iron,
		title: `${Castle} 13 `,
		author: {
			name: "Castle level 13 The Iron Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 13",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.13",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "625,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 65.0k \nWood: 120k \nStone: 65k\nBook of Covenant: x",
				inline: true,
			},
			{
				name: "Time",
				value: "1 Days",
				inline: true,
			},
			{
				name: "Power",
				value: "14,665",
				inline: true,
			},
		],
	},
	14: {
		color: iron,
		title: `${Castle} 14 `,
		author: {
			name: "Castle level 14 The Iron Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 14",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.14",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "700,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 97.5k \nWood: 180k \nStone: 97.5k\n Book of Covenant: x150",
				inline: true,
			},
			{
				name: "Time",
				value: "1 Day",
				inline: true,
			},
			{
				name: "Power",
				value: "19,759",
				inline: true,
			},
		],
	},
	15: {
		color: iron,
		title: `${Castle} 15 `,
		author: {
			name: "Castle level 15 The Iron Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 15",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.15",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "775,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 147.5k \nWood: 270k \nStone: 147.5k\n Book of Covenant: x300",
				inline: true,
			},
			{
				name: "Time",
				value: "1 Days 11 Hours",
				inline: true,
			},
			{
				name: "Power",
				value: "26,132",
				inline: true,
			},
		],
	},
	16: {
		color: dark,
		title: `${Castle} 16 `,
		author: {
			name: "Castle level 16 The Dark Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 16",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.16",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "850,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 222.5k \nWood: 405k \nStone: 222.5k\nBook of Covenant: x500",
				inline: true,
			},
			{
				name: "Time",
				value: "1 Days 18 Hours",
				inline: true,
			},
			{
				name: "Power",
				value: "34,169",
				inline: true,
			},
		],
	},
	17: {
		color: dark,
		title: `${Castle} 17 `,
		author: {
			name: "Castle level 17 The Dark Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 17",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.17",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "925,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 335k \nWood: 607k \nStone: 335k\nBook of Covenant: x700",
				inline: true,
			},
			{
				name: "Time",
				value: "2 Day 3 Hours",
				inline: true,
			},
			{
				name: "Power",
				value: "44,397",
				inline: true,
			},
		],
	},
	18: {
		color: dark,
		title: `${Castle} 18 `,
		author: {
			name: "Castle level 18 The Dark Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 18",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.18",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "1,000,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 525k \nWood: 925k \nStone: 525k\nBook of Covenant: x900",
				inline: true,
			},
			{
				name: "Time",
				value: "2 Days 13 Hours",
				inline: true,
			},
			{
				name: "Power",
				value: "57,677",
				inline: true,
			},
		],
	},
	19: {
		color: dark,
		title: `${Castle} 19 `,
		author: {
			name: "Castle level 19 The Dark Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 19",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.19",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "1,100,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 800K \nWood: 1.4Mil \nStone: 8Mil\n Book of Covenant: x1200",
				inline: true,
			},
			{
				name: "Time",
				value: "3 Days 1 Hour",
				inline: true,
			},
			{
				name: "Power",
				value: "75,044",
				inline: true,
			},
		],
	},
	20: {
		color: dark,
		title: `${Castle} 20 `,
		author: {
			name: "Castle level 20 The Dark Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 20",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.20",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "1,200,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 1.2Mil \nWood: 2.1Mil \nStone: 1.2Mil\nBook of Covenant: x1500",
				inline: true,
			},
			{
				name: "Time",
				value: "3 Days 16 Hours",
				inline: true,
			},
			{
				name: "Power",
				value: "97,924",
				inline: true,
			},
		],
	},
	21: {
		color: fuedalAge,
		title: `${Castle} 21 `,
		author: {
			name: "Castle level 21 The Fuedal Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 21",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.21",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "1,300,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 1.8Mil \nWood: 3.2Mil \nStone: 1.8Mil\n Book of Covenant: x1800",
				inline: true,
			},
			{
				name: "Time",
				value: "4 Days, 10 Hours",
				inline: true,
			},
			{
				name: "Power",
				value: "128,440",
				inline: true,
			},
		],
	},
	22: {
		color: fuedalAge,
		title: `${Castle} 22 `,
		author: {
			name: "Castle level 22 The Fuedal Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 22, ",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.22",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "1,400,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 2.7Mil \nWood: 4.7Mil \nStone:2.7Mil \n Book of Covenant: x2000",
				inline: true,
			},
			{
				name: "Time",
				value: "5 Days 17 Hours",
				inline: true,
			},
			{
				name: "Power",
				value: "171,171",
				inline: true,
			},
		],
	},
	23: {
		color: fuedalAge,
		title: `${Castle} 23 `,
		author: {
			name: "Castle level 23 The Fuedal Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 23, ",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.23",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "1,500,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 4.1Mil \nWood: 7.1Mil \nStone: 4.1Mil\n Book of Covenant: x2500",
				inline: true,
			},
			{
				name: "Time",
				value: "8 Days",
				inline: true,
			},
			{
				name: "Power",
				value: "233,315",
				inline: true,
			},
		],
	},
	24: {
		color: fuedalAge,
		title: `${Castle} 24 `,
		author: {
			name: "Castle level 24 The Fuedal Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 24, ",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.24",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "1,600,000",
				inline: true,
			},
			{
				name: "Cost",
				value:
					"Corn: 6.3Mil \nWood: 10.8Mil \nStone: 6.3Mil\n Book of Covenant: x3000",
				inline: true,
			},
			{
				name: "Time",
				value: "12 Days",
				inline: true,
			},
			{
				name: "Power",
				value: "327,606",
				inline: true,
			},
		],
	},
	25: {
		color: fuedalAge,
		title: `${Castle} 25 `,
		author: {
			name: "Castle level 25 The Fuedal Age",
			icon_url: `${Castleimg}`,
		},
		description: "Castle Level 25, ",
		thumbnail: {
			url: `${Castleimg}`,
		},
		fields: [
			{
				name: "Requirements",
				value: "Alliance Center Lv.25 \nSeige Workshop Lv.25\n",
				inline: true,
			},
			{
				name: "Rallied Army Capacity",
				value: "2,000,000",
				inline: true,
			},
			{
				name: "Cost",
				value: "Corn: ? \nWood: ? \nStone: ? \nBook of Covenant: x5000",
				inline: true,
			},
			{
				name: "Time",
				value: "23 Days 5 Hours",
				inline: true,
			},
			{
				name: "Power",
				value: "552,999",
				inline: true,
			},
		],
	},
};

module.exports = { levels };
