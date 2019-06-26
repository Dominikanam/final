const IMAGES_PATH = '/client/src/resources/images/products';

export const getImagesPaths = product =>
	product.images.map(
		img =>
			`${IMAGES_PATH}/${product.id}/${getImageFileName(
				img,
				product.colors[0],
				product.straps[0]
			)}`
	);

export const getImageFileName = (img, defaultColor, defaultStrap) =>
	`${img.color || defaultColor}_${img.strap || defaultStrap}_${img.type}.jpg`;
