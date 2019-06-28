//const IMAGES_PATH = '/resources/images/products';

export const colors = {
	black: 1,
	silver: 2,
	gold: 3
};

export const strapTypes = {
	silverMetal: 1,
	brownLeather: 2,
	blackLeather: 3,
	rubber: 4,
	goldMetal: 5,
	denim: 6,
	whiteLeather: 7
};

export const imageTypes = {
	front: 1,
	back: 2,
	wrist: 3,
	zoom: 4,
	profile: 5
};

export const categories = {
	ladies: 1,
	gents: 2,
	automatic: 3,
	quartz: 4,
	chronoQuartz: 5
};

export const sectionType = {
	movement: 1,
	aditionalInfo: 2
};

export default [
	{
		id: 1,
		name: 'Ventura XXL Auto',
		images: [{ type: imageTypes.front }, { type: imageTypes.back }, { type: imageTypes.wrist }],
		price: 1120.0,
		prevPrice: null,
		categories: [categories.gents, categories.automatic],
		colors: [colors.silver],
		straps: [strapTypes.rubber],
		description: {
			highlight:
				"The original Ventura, launched in 1957, made watchmaking history as the world's first electrical, battery powered watch. Creating an automatic version of a watch famed for its battery powered movement is a bold move, and one that's typical of Hamilton. So how do you improve on an icon? Go big or go home! The XXL proportions of this model are as daring as they are dashing. And the red accents on the dial and second hand add a fiery finishing touch.",
			sections: [
				{
					header: sectionType.movement,
					text:
						'A three-hand movement with a date function and boasting a superior power reserve of 80 hours, the H-10 appears with intricate contrasting snail and pearled patterns for the American Classic models it drives and streamlined surfaces for the pilots’ watches.'
				}
			]
		},
		discounted: false,
		new: true
	},
	{
		id: 2,
		name: 'Ventura Elvis80 Quartz',
		images: [
			{ type: imageTypes.front, color: colors.silver, strap: strapTypes.silverMetal },
			{ type: imageTypes.wrist, color: colors.silver, strap: strapTypes.silverMetal },
			{ type: imageTypes.profile, color: colors.silver, strap: strapTypes.silverMetal },
			{ type: imageTypes.front, color: colors.silver, strap: strapTypes.blackLeather },
			{ type: imageTypes.front, color: colors.silver, strap: strapTypes.rubber },
			{ type: imageTypes.zoom, color: colors.silver, strap: strapTypes.rubber }
		],
		price: 890.0,
		prevPrice: 999.0,
		categories: [categories.gents, categories.quartz],
		colors: [colors.silver],
		straps: [strapTypes.SilverMetal, strapTypes.rubber, strapTypes.brownLeather],
		description: {
			highlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 3,
		name: 'Ventura Ventura Quartz',
		images: [
			{ type: imageTypes.front },
			{ type: imageTypes.zoom },
			{ type: imageTypes.profile }
		],
		price: 950,
		prevPrice: null,
		categories: [categories.ladies, categories.quartz],
		colors: [colors.gold],
		straps: [strapTypes.goldMetal],
		description: {
			highlight:
				"The original Ventura, launched in 1957, made watchmaking history as the world's first electrical, battery powered watch. Creating an automatic version of a watch famed for its battery powered movement is a bold move, and one that's typical of Hamilton. So how do you improve on an icon? Go big or go home! The XXL proportions of this model are as daring as they are dashing. And the red accents on the dial and second hand add a fiery finishing touch.",
			sections: [
				{
					header: sectionType.movement,
					text:
						'A three-hand movement with a date function and boasting a superior power reserve of 80 hours, the H-10 appears with intricate contrasting snail and pearled patterns for the American Classic models it drives and streamlined surfaces for the pilots’ watches.'
				}
			]
		},
		discounted: false,
		new: true
	},
	{
		id: 4,
		name: 'Ventura Ventura Quartz',
		images: [
			{ type: imageTypes.front },
			{ type: imageTypes.zoom },
			{ type: imageTypes.profile }
		],
		price: 750,
		prevPrice: null,
		categories: [categories.ladies, categories.quartz],
		colors: [colors.gold],
		straps: [strapTypes.blackLeather],
		description: {
			highlight:
				"The original Ventura, launched in 1957, made watchmaking history as the world's first electrical, battery powered watch. With its daring and distinctive design, it quickly became an icon and a collector's item. Ventura's latest incarnation is a faithful tribute to the original and mirrors the pioneering shield shaped celebration of Mid-Century Modern design.",
			sections: [
				{
					header: sectionType.movement,
					text:
						'A three-hand movement with or without a date function and boasting a superior power reserve of 80 hours. The H-10 appears with intricate contrasting snail and pearled patterns.'
				}
			]
		},
		discounted: false,
		new: true
	},
	{
		id: 5,
		name: 'Ventura Quartz',
		images: [{ type: imageTypes.front }, { type: imageTypes.back }, { type: imageTypes.wrist }],
		price: 875,
		prevPrice: null,
		categories: [categories.gents, categories.quartz],
		colors: [colors.silver],
		straps: [strapTypes.blackLeather],
		description: {
			highlight:
				"The original Ventura, launched in 1957, made watchmaking history as the world's first electrical, battery powered watch. With its daring and distinctive design, it quickly became an icon and a collector's item. Ventura's latest incarnation is a faithful tribute to the original and mirrors the pioneering shield shaped celebration of Mid-Century Modern design.",
			sections: [
				{
					header: sectionType.movement,
					text:
						'A three-hand movement with a date function and boasting a superior power reserve of 80 hours, the H-10 appears with intricate contrasting snail and pearled patterns for the American Classic models it drives and streamlined surfaces for the pilots’ watches.'
				}
			]
		},
		discounted: false,
		new: true
	},
	{
		id: 6,
		name: 'Ventura Ventura Quartz',
		images: [{ type: imageTypes.front }, { type: imageTypes.wrist }],
		price: 895,
		prevPrice: 1020,
		categories: [categories.gents, categories.quartz],
		colors: [colors.gold],
		straps: [strapTypes.blackLeather],
		description: {
			highlight:
				"The original Ventura, launched in 1957, made watchmaking history as the world's first electrical, battery powered watch. With its daring and distinctive design, it quickly became an icon and a collector's item. Ventura's latest incarnation is a faithful tribute to the original and mirrors the pioneering shield shaped celebration of Mid-Century Modern design.",
			sections: [
				{
					header: sectionType.movement,
					text:
						'A three-hand movement with a date function and boasting a superior power reserve of 80 hours, the H-10 appears with intricate contrasting snail and pearled patterns for the American Classic models it drives and streamlined surfaces for the pilots’ watches.'
				}
			]
		},
		discounted: true,
		new: false
	},
	{
		id: 7,
		name: 'Ventura Ventura Quartz',
		images: [{ type: imageTypes.front }, { type: imageTypes.profile }],
		price: 875,
		prevPrice: null,
		categories: [categories.gents, categories.quartz],
		colors: [colors.silver],
		straps: [strapTypes.silverMetal],
		description: {
			highlight:
				'The King of Rock ‘n’ Roll was known for the incredible flexibility that was the key to his signature dance moves. He embodied the American spirit and himself owned an original Ventura Flex. This is the inspiration behind the Ventura Flex, which revives the flexible bracelet for the ultimate twenty-first century tribute to Mid-Century Modern design.',
			sections: [
				{
					header: sectionType.movement,
					text:
						'A three-hand movement with a date function and boasting a superior power reserve of 80 hours, the H-10 appears with intricate contrasting snail and pearled patterns for the American Classic models it drives and streamlined surfaces for the pilots’ watches.'
				}
			]
		},
		discounted: false,
		new: true
	},
	{
		id: 8,
		name: 'Ventura Ventura Quartz',
		images: [{ type: imageTypes.front }, { type: imageTypes.profile }],
		price: 895,
		prevPrice: null,
		categories: [categories.gents, categories.quartz],
		colors: [colors.gold],
		straps: [strapTypes.brownLeather],
		description: {
			highlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 9,
		name: 'Ventura Ventura Quartz',
		images: [{ type: imageTypes.front }, { type: imageTypes.profile }],
		price: 895,
		prevPrice: null,
		categories: [categories.gents, categories.quartz],
		colors: [colors.gold],
		straps: [strapTypes.goldMetal],
		description: {
			highlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 10,
		name: 'Ventura Ventura Quartz',
		images: [{ type: imageTypes.front }, { type: imageTypes.profile }],
		price: 875,
		prevPrice: null,
		categories: [categories.gents, categories.quartz],
		colors: [colors.silver],
		straps: [strapTypes.blackLeather],
		description: {
			highlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 11,
		name: 'Ventura Ventura Quartz',
		images: [
			{ type: imageTypes.front },
			{ type: imageTypes.profile },
			{ type: imageTypes.zoom }
		],
		price: 895,
		prevPrice: null,
		categories: [categories.ladies, categories.quartz],
		colors: [colors.gold],
		straps: [strapTypes.brownLeather],
		description: {
			highlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 12,
		name: 'Ventura Ventura Quartz',
		images: [{ type: imageTypes.front }],
		price: 925,
		prevPrice: null,
		categories: [categories.ladies, categories.quartz],
		colors: [colors.silver],
		straps: [strapTypes.whiteLeather],
		description: {
			highlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 13,
		name: 'Ventura Ventura Quartz',
		images: [{ type: imageTypes.front }, { type: imageTypes.profile }],
		price: 875,
		prevPrice: null,
		categories: [categories.ladies, categories.quartz],
		colors: [colors.silver],
		straps: [strapTypes.denim],
		description: {
			highlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 14,
		name: 'Ventura Ventura Quartz',
		images: [
			{ type: imageTypes.front },
			{ type: imageTypes.profile },
			{ type: imageTypes.zoom }
		],
		price: 875,
		prevPrice: null,
		categories: [categories.gents, categories.quartz],
		colors: [colors.silver],
		straps: [strapTypes.denim],
		description: {
			highlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 15,
		name: 'Ventura Chrono Quartz',
		images: [{ type: imageTypes.front }],
		price: 995,
		prevPrice: null,
		categories: [categories.ladies, categories.chronoQuartz],
		colors: [colors.silver],
		straps: [strapTypes.blackLeather],
		description: {
			highlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 16,
		name: 'Ventura Chrono Quartz',
		images: [
			{ type: imageTypes.front, color: colors.gold, strap: strapTypes.blackLeather },
			{ type: imageTypes.profile, color: colors.gold, strap: strapTypes.blackLeather },
			{ type: imageTypes.zoom, color: colors.gold, strap: strapTypes.blackLeather },
			{ type: imageTypes.front, color: colors.gold, strap: strapTypes.goldMetal },
			{ type: imageTypes.profile, color: colors.gold, strap: strapTypes.goldMetal },
			{ type: imageTypes.zoom, color: colors.gold, strap: strapTypes.goldMetal }
		],
		price: 1025,
		prevPrice: null,
		categories: [categories.gents, categories.chronoQuartz],
		colors: [colors.gold],
		straps: [strapTypes.blackLeather, strapTypes.goldMetal],
		description: {
			highlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: false,
		new: true
	},
	{
		id: 17,
		name: 'Ventura Chrono Quartz',
		images: [
			{ type: imageTypes.front, color: colors.silver, strap: strapTypes.blackLeather },
			{ type: imageTypes.profile, color: colors.silver, strap: strapTypes.blackLeather },
			{ type: imageTypes.zoom, color: colors.silver, strap: strapTypes.blackLeather },
			{ type: imageTypes.front, color: colors.silver, strap: strapTypes.silverMetal },
			{ type: imageTypes.profile, color: colors.silver, strap: strapTypes.silverMetal },
			{ type: imageTypes.zoom, color: colors.silver, strap: strapTypes.silverMetal }
		],
		price: 890,
		prevPrice: 995,
		categories: [categories.gents, categories.chronoQuartz],
		colors: [colors.silver],
		straps: [strapTypes.SilverMetal, strapTypes.blackLeather],
		description: {
			highlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 18,
		name: 'Ventura Auto',
		images: [{ type: imageTypes.front }],
		price: 995,
		prevPrice: null,
		categories: [categories.ladies, categories.automatic],
		colors: [colors.silver],
		straps: [strapTypes.brownLeather],
		description: {
			highlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 19,
		name: 'Ventura Open Heart Auto',
		images: [{ type: imageTypes.front }],
		price: 1095,
		prevPrice: null,
		categories: [categories.ladies, categories.automatic],
		colors: [colors.silver],
		straps: [strapTypes.brownLeather],
		description: {
			highlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 20,
		name: 'Ventura Skeleton Auto',
		images: [
			{ type: imageTypes.front },
			{ type: imageTypes.profile },
			{ type: imageTypes.zoom },
			{ type: imageTypes.back }
		],
		price: 1995,
		prevPrice: null,
		categories: [categories.gents, categories.automatic],
		colors: [colors.silver],
		straps: [strapTypes.rubber],
		description: {
			highlight:
				'Having first appeared on the wrist of the character Iron Man in the movie Spider-Man: Homecoming, this Ventura has earned its cinematic stripes. Featuring an intricate spiderweb design skeletonized dial in pure black that offers a glimpse of the decorated H-10-S movement inside, it is limited to just 999 pieces.',
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 21,
		name: 'Ventura Auto',
		images: [{ type: imageTypes.front }],
		price: 995,
		prevPrice: null,
		categories: [categories.ladies, categories.automatic],
		colors: [colors.silver],
		straps: [strapTypes.brownLeather],
		description: {
			highlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 22,
		name: 'Ventura Open Heart Auto',
		images: [{ type: imageTypes.front }],
		price: 1095,
		prevPrice: null,
		categories: [categories.ladies, categories.automatic],
		colors: [colors.silver],
		straps: [strapTypes.blackLeather],
		description: {
			highlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 23,
		name: 'Ventura Ventura Auto',
		images: [{ type: imageTypes.front }, { type: imageTypes.back }],
		price: 1095,
		prevPrice: null,
		categories: [categories.ladies, categories.automatic],
		colors: [colors.silver],
		straps: [strapTypes.brownLeather],
		description: {
			highlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 24,
		name: 'Ventura Ventura Auto',
		images: [{ type: imageTypes.front }],
		price: 1095,
		prevPrice: null,
		categories: [categories.ladies, categories.automatic],
		colors: [colors.silver],
		straps: [strapTypes.brownLeather],
		description: {
			highlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 25,
		name: 'Ventura Ventura Quartz',
		images: [{ type: imageTypes.front }],
		price: 695,
		prevPrice: null,
		categories: [categories.ladies, categories.quartz],
		colors: [colors.silver],
		straps: [strapTypes.whiteLeather],
		description: {
			highlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	}
];
