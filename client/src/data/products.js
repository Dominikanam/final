//const IMAGES_PATH = '/resources/images/products';

export const colors = {
	black: 1,
	silver: 2,
	gold: 3
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
	quarz: 4
};

export const strapTypes = {
	metal: 1,
	brownLeather: 2,
	blackLeather: 3,
	rubber: 4,
	gold: 5
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
			higlight:
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
		name: 'Elvis80 Quartz',
		images: [
			{ type: imageTypes.front, color: colors.silver, strap: strapTypes.metal },
			{ type: imageTypes.wrist, color: colors.silver, strap: strapTypes.metal },
			{ type: imageTypes.profile, color: colors.silver, strap: strapTypes.metal },
			{ type: imageTypes.front, color: colors.silver, strap: strapTypes.blackLeather },
			{ type: imageTypes.front, color: colors.silver, strap: strapTypes.rubber },
			{ type: imageTypes.zoom, color: colors.silver, strap: strapTypes.rubber }
		],
		price: 890.0,
		prevPrice: 999.0,
		categories: [categories.gents, categories.quarz],
		colors: [colors.silver],
		straps: [strapTypes.metal, strapTypes.rubber, strapTypes.brownLeather],
		description: {
			higlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 3,
		name: 'Ventura XXL Auto',
		images: [{ type: imageTypes.front }, { type: imageTypes.back }, { type: imageTypes.wrist }],
		price: 1120.0,
		prevPrice: null,
		categories: [categories.gents, categories.automatic],
		colors: [colors.silver],
		straps: [strapTypes.rubber],
		description: {
			higlight:
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
		name: 'Elvis80 Quartz',
		images: [
			{ type: imageTypes.front, color: colors.silver, strap: strapTypes.metal },
			{ type: imageTypes.wrist, color: colors.silver, strap: strapTypes.metal },
			{ type: imageTypes.profile, color: colors.silver, strap: strapTypes.metal },
			{ type: imageTypes.front, color: colors.silver, strap: strapTypes.blackLeather },
			{ type: imageTypes.front, color: colors.silver, strap: strapTypes.rubber },
			{ type: imageTypes.zoom, color: colors.silver, strap: strapTypes.rubber }
		],
		price: 890.0,
		prevPrice: 999.0,
		categories: [categories.gents, categories.quarz],
		colors: [colors.silver],
		straps: [strapTypes.metal, strapTypes.rubber, strapTypes.brownLeather],
		description: {
			higlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 5,
		name: 'Ventura XXL Auto',
		images: [{ type: imageTypes.front }, { type: imageTypes.back }, { type: imageTypes.wrist }],
		price: 1120.0,
		prevPrice: null,
		categories: [categories.gents, categories.automatic],
		colors: [colors.silver],
		straps: [strapTypes.rubber],
		description: {
			higlight:
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
		id: 6,
		name: 'Elvis80 Quartz',
		images: [
			{ type: imageTypes.front, color: colors.silver, strap: strapTypes.metal },
			{ type: imageTypes.wrist, color: colors.silver, strap: strapTypes.metal },
			{ type: imageTypes.profile, color: colors.silver, strap: strapTypes.metal },
			{ type: imageTypes.front, color: colors.silver, strap: strapTypes.blackLeather },
			{ type: imageTypes.front, color: colors.silver, strap: strapTypes.rubber },
			{ type: imageTypes.zoom, color: colors.silver, strap: strapTypes.rubber }
		],
		price: 890.0,
		prevPrice: 999.0,
		categories: [categories.gents, categories.quarz],
		colors: [colors.silver],
		straps: [strapTypes.metal, strapTypes.rubber, strapTypes.brownLeather],
		description: {
			higlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	},
	{
		id: 7,
		name: 'Ventura XXL Auto',
		images: [{ type: imageTypes.front }, { type: imageTypes.back }, { type: imageTypes.wrist }],
		price: 1120.0,
		prevPrice: null,
		categories: [categories.gents, categories.automatic],
		colors: [colors.silver],
		straps: [strapTypes.rubber],
		description: {
			higlight:
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
		id: 8,
		name: 'Elvis80 Quartz',
		images: [
			{ type: imageTypes.front, color: colors.silver, strap: strapTypes.metal },
			{ type: imageTypes.wrist, color: colors.silver, strap: strapTypes.metal },
			{ type: imageTypes.profile, color: colors.silver, strap: strapTypes.metal },
			{ type: imageTypes.front, color: colors.silver, strap: strapTypes.blackLeather },
			{ type: imageTypes.front, color: colors.silver, strap: strapTypes.rubber },
			{ type: imageTypes.zoom, color: colors.silver, strap: strapTypes.rubber }
		],
		price: 890.0,
		prevPrice: 999.0,
		categories: [categories.gents, categories.quarz],
		colors: [colors.silver],
		straps: [strapTypes.metal, strapTypes.rubber, strapTypes.brownLeather],
		description: {
			higlight:
				"The Ventura was originally designed without regard for practicality and created an instant sensation that has so far lasted 60 years. The fact that it was chosen by Elvis Presley was almost inevitable. The ultimate rulebreaker, Elvis fused country and rhythm and blues to create rock 'n' roll. Hamilton has fused intricate design, watchmaking heritage and Swiss precision to create the new Ventura.",
			sections: []
		},
		discounted: true,
		new: false
	}
];
