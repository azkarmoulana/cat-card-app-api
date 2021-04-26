import rp from "request-promise";
import Jimp from "jimp";

import logging from "../config/logging";

const NAMESPACE = "Cat service";

const getCatImage = async () => {
    /** This is the alternative API I'm using to get an image of a random cat */
    const API_URL = "https://api.thecatapi.com/v1/images/search";

    const options = {
        uri: API_URL,
        headers: {
            "User-Agent": "Request-Promise"
        },
        json: true
    };

    return rp(options);
};

const createCatCard = async (imageUrl1: string, imageUrl2: string, text1: string, text2: string) => {
    try {
        let image1 = await Jimp.read(imageUrl1);
        let image2 = await Jimp.read(imageUrl2);
        let canvas = await Jimp.read("https://www.meme-arsenal.com/memes/0ba23837b415094e327821ea7e769775.jpg");

        /** Resizing the images for proper collage */
        canvas = canvas.resize(1075, 550);
        image1 = image1.resize(500, 500);
        image2 = image2.resize(500, 500);

        /** Load the font given by Jimp library */
        const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);

        /** Prints the custom text on the image */
        image1.print(font, Jimp.HORIZONTAL_ALIGN_CENTER, Jimp.VERTICAL_ALIGN_MIDDLE, text1);
        image2.print(font, Jimp.HORIZONTAL_ALIGN_CENTER, Jimp.VERTICAL_ALIGN_MIDDLE, text2);

        const tempCollage = canvas.composite(image1, 25, 25, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
        });
        const finalCollage = tempCollage.composite(image2, 550, 25, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
        });

        /**
         * Path where the newly created cat card image is saved
         * Server will not keep all the versions of images but latest one
         */
        const imageStoragePath = `img/cat_card_1075x550.png`;

        await finalCollage.writeAsync(imageStoragePath);
        return { imageStoragePath };
    } catch (err) {
        logging.error(NAMESPACE, "Something went wrong", err);
    }
};

export default { getCatImage, createCatCard };
