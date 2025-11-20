/**
 * static definition variables
 */

const DEFS = {

	HOME: vec2(15),

	STATES: {
		// idle: 0
		GAME_LOST: 1,
		GAME_WON: 2,
		TOWNHALL_MENU: 3,
		TRAIN_MENU: 4,
		BUILD_MENU: 5,
		BUILD_BARRACKS: 6,
		BUILD_HOUSE: 7,
		BUILD_FARM: 8,
		BUILD_WALL: 9
	},

	WARRIORS: [
		{
			number: '第一',
			name: '年轻的哈尔塔夫',
			heroTile: 102,
			from: '东北',
			enemies: [32, 32]
		},
		{
			number: '第二',
			name: '好斗的希格拉克',
			from: '东',
			enemies: [32, 18, 30, 17]
		},
		{
			number: '第三',
			name: '智慧的哈尔加',
			heroTile: 118,
			from: '东南',
			enemies: [32, 3, 30, 4, 32, 4]
		},
		{
			number: '第四',
			name: '肥胖的赫尔夫丹',
			heroTile: 110,
			from: '南',
			enemies: [18, 3, 17, 4, 19, 4]
		},
		{
			number: '第五',
			name: '沉默的埃德索',
			heroTile: 102,
			from: '西南',
			enemies: [3, 3, 4, 4, 5, 4, 6, 6]
		},
		{
			number: '第六',
			name: '冷酷的拉格纳',
			heroTile: 94,
			from: '西',
			enemies: [3, 18, 4, 19, 5, 20, 6, 21]
		},
		{
			number: '第七',
			name: '弓箭手雷塞尔',
			from: '西北',
			enemies: [3, 32, 4, 30, 5, 31, 6, 30]
		},
		{
			number: '第八',
			name: '快乐的赫格尔',
			from: '北',
			enemies: [18, 32, 19, 30, 18, 31, 19, 31]
		},
		{
			number: '第九',
			name: '音乐家威斯',
			from: '东北',
			enemies: [32, 32, 30, 30, 32, 30, 31, 31, 32, 31]
		},
		{
			number: '第十',
			name: '谨慎的斯凯尔德',
			from: '东',
			enemies: [32, 18, 30, 17, 32, 17, 32, 19, 30, 18]
		},
		{
			number: '第十一',
			name: '敏捷的罗内斯',
			from: '东南',
			enemies: [32, 3, 30, 4, 32, 4, 31, 4, 31, 3]
		},
		{
			number: '第十二',
			name: '埃本·法德伦',
			heroTile: 108,
			from: '南',
			enemies: [18, 3, 17, 4, 19, 4, 18, 4, 17, 5]
		},
		{
			number: '第十三',
			name: '国王贝奥武夫',
			heroTile: 116,
			from: '西南',
			enemies: [3, 3, 4, 4, 5, 4, 4, 19, 5, 20, 6, 21, 17, 4, 19, 4, 18, 4, 17, 5]
		},
		
	]

};

