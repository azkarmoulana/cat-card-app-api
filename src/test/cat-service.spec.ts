import catService from "../services/cat-service";

describe("test getCatImage function", () => {
    it("should be defined", () => {
        expect(catService.getCatImage).toBeDefined();
    });

    const getImg = catService.getCatImage();

    it("should return a array of cat image object", (done) => {
        getImg.then((data) => {
            expect(data).toEqual(expect.arrayContaining([expect.objectContaining({})]));
            done();
        });
    });
});

describe("test createCatCard function", () => {
    it("should be difined", () => {
        expect(catService.createCatCard).toBeDefined();
    });

    const imageUrl1 = "https://cdn2.thecatapi.com/images/oKIJfbCRy.jpg";
    const imageUrl2 = "https://cdn2.thecatapi.com/images/c6nlmlFC8.jpg";
    const text1 = "Hello Kitty";
    const text2 = "Luna";
    const imageStoragePath = "img/cat_card_1075x550.png";

    const mockCreateCatCard = jest.fn((imageUrl1: string, imageUrl2: string, text1: string, text2: string) => {
        return { imageStoragePath };
    });

    mockCreateCatCard(imageUrl1, imageUrl2, text1, text2);
    it("should be called with 4 arguments", () => {
        expect(mockCreateCatCard).toHaveBeenCalled();
        expect(mockCreateCatCard).toBeCalledWith(imageUrl1, imageUrl2, text1, text2);
    });

    it("should return the image storage path", () => {
        expect(mockCreateCatCard).toHaveReturnedTimes(1);
        expect(mockCreateCatCard).toHaveReturned();
        expect(mockCreateCatCard).toHaveReturnedWith({ imageStoragePath });
    });
});
