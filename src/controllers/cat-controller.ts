import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import logging from "../config/logging";

import catService from "../services/cat-service";

const NAMESPACE = "Cat controller";

const getMyCatCard = async (req: Request, res: Response, next: NextFunction) => {
    const text1 = (req.query.text1 as string) || "";
    const text2 = (req.query.text2 as string) || "";

    const imageUrlPromise1 = await catService.getCatImage();
    const imageUrlPromise2 = await catService.getCatImage();
    const promiseArray = [imageUrlPromise1, imageUrlPromise2];

    Promise.all(promiseArray)
        .then(async (resultArr) => {
            const image1Url = resultArr[0][0].url;
            const image2Url = resultArr[1][0].url;

            const catCard = await catService.createCatCard(image1Url, image2Url, text1, text2);

            const root = path.join(__dirname, "../../");
            const filePath = root + catCard?.imageStoragePath;

            fs.readFile(filePath, (err, content) => {
                if (err) {
                    logging.error(NAMESPACE, "something went wrong", err);
                    res.status(404).json({
                        message: "file not found"
                    });
                } else {
                    res.writeHead(200, { "Content-Type": "image/png" });
                    res.end(content);
                }
            });
        })
        .catch((err) => {
            logging.error(NAMESPACE, "something went wrong", err);
        });
};

export default { getMyCatCard };
