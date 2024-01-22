import generateUniqueId from "generate-unique-id";
export const DUMMYDATA = [
    {
        id: generateUniqueId({ length: 5, useLetters: false }),
        bookName: "Test-1",
        bookPrice: 1234
    }];


export const DUMMYDATA1 = () => {
    return [
        {
            id: generateUniqueId({ length: 5, useLetters: false }),
            bookName: "Test-1",
            bookPrice: 1234
        }]
};