// ⇄
const brown = 0x654321
const city  = 'City Hall Level'
const cityimg = 'https://vignette.wikia.nocookie.net/riseofcivilizations/images/5/59/Building_City_Hall_1_5.png/revision/latest/smart/width/53/height/53?cb=20181114154456'

const city1 = {
	color: brown,
	title: `${city} 1`,
	author: {
		name: 'City Hall level 1',
		icon_url: `${cityimg}`,
    },
    description: 'City Hall Level 1, You have started your journed congratulations!',
    thumbnail: {
        url: `${cityimg}`
    },
};


module.exports = {
    city1,

}