let lettersArray =[]; 
let letterA = {
    name: "A",
    number: 5,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2FA.jpg?alt=media&token=61142d04-6053-4968-8bfd-4ba2321eda18"
};
let letterB = {
    name: "Б",
    number: 5,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%91.jpg?alt=media&token=3524f4c9-6b49-4bb5-9c20-70c2e8ece826"
};
let letterV = {
    name: "В",
    number: 5,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%92.jpg?alt=media&token=187452f2-0bcd-47dc-9648-c863e66ce60b"
};
let letterG = {
    name: "Г",
    number: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%93.jpg?alt=media&token=882beed9-f4d7-47be-b886-13b9d9e835a3"
};
let letterD = {
    name: "Д",
    number: 6,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%94.jpg?alt=media&token=35a11919-0102-45e7-ac03-30796f98a19b"
};
let letterGj = {
    name: "Ѓ",
    number: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%83.jpg?alt=media&token=25e4d6fe-0a4f-472e-b309-9c3b363a8ef9"
};
let letterE = {
    name: "Е",
    number: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%95.jpg?alt=media&token=ca1b46b2-e2c5-4a81-a92a-9ebac9a9042c"
};
let letterZj = {
    name: "Ж",
    number: 8,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%96.jpg?alt=media&token=d67f6ced-d687-4831-8bb2-ad7f532188a0"
};
let letterZ = {
    name: "З",
    number: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%97.jpg?alt=media&token=382f6f2d-bc65-434c-8484-79df75893d3f"
};
let letterDz = {
    name: "Ѕ",
    number: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%85.jpg?alt=media&token=ac1efd9e-528d-4933-a83b-769535ead926"
};
let letterI = {
    name: "И",
    number: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%98.jpg?alt=media&token=e9965f76-33d8-44b5-87d0-3b150654f93a"
};
let letterJ = {
    name: "Ј",
    number: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2FJ.jpg?alt=media&token=2bf0b871-fd38-401f-ba12-b8745c526341"
};
let letterK = {
    name: "К",
    number: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%9A.jpg?alt=media&token=60005ddd-41cb-40ca-a9f2-1fe09f50bd29"
};
let letterL = {
    name: "Л",
    number: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%9B.jpg?alt=media&token=5d5cde81-55ee-43a7-a688-eb27d94412df"
};
let letterLj = {
    name: "Љ",
    number: 5,
    img: "6ab00b45-757d-4738-a5c2-3cc94422a17f"
};
let letterM = {
    name: "М",
    number: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2FM.jpg?alt=media&token=5a1c39ff-b176-4c44-a997-13e6608110b8"
};
let letterN = {
    name: "Н",
    number: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%9D.jpg?alt=media&token=8d28ef26-bf84-4b1d-9bf7-747c02670d2f"
};
let letterNj = {
    name: "Њ",
    number: 7,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%8A.jpg?alt=media&token=694d3720-854a-4cb6-b438-6139c98e228a"
};
let letterO = {
    name: "О",
    number: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%9E.jpg?alt=media&token=41b0cf9f-aaa9-4de0-bdff-a97c0708f0c6"
};
let letterP = {
    name: "П",
    number: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%9F.jpg?alt=media&token=6dcaed41-8f5e-4fdf-a8e9-1658abcd4ea1"
};
let letterR = {
    name: "Р",
    number: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%A0.jpg?alt=media&token=6d3c9a05-f851-4492-9543-f9358cdc2aae"
};
let letterS = {
    name: "С",
    number: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%A1.jpg?alt=media&token=3448b0e2-07f8-49cd-a994-0cc8fed330ff"
};
let letterT = {
    name: "Т",
    number: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%A2.jpg?alt=media&token=a37d5694-cc1c-4c0b-a382-7158504bc4a3"
};
let letterKj = {
    name: "Ќ",
    number: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%8C.jpg?alt=media&token=b2a00214-ca43-4924-892b-3f1183198987"
};
let letterU = {
    name: "У",
    number: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%A3.jpg?alt=media&token=24391908-d160-49e8-b666-dfe0ab1c4ea3"
};
let letterF = {
    name: "Ф",
    number: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%A4.jpg?alt=media&token=aa4884bd-3384-49da-8baa-f3dcdd0386ad"
};
let letterH = {
    name: "Х",
    number: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%A5.jpg?alt=media&token=75606cf2-1808-4c36-9dc0-8ba28cad0d9b"
};
let letterC = {
    name: "Ц",
    number: 5,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%A6.jpg?alt=media&token=c410122a-8a3a-4eb6-8fcf-986095276980"
};
let letterCh = {
    name: "Ч",
    number: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%A7.jpg?alt=media&token=0efa06f1-902f-4bc9-91b4-dda9401c14be"
};
let letterDj = {
    name: "Џ",
    number: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%8F.jpg?alt=media&token=006c28c7-2f21-4bae-b4d8-16203f357a59"
};
let letterSh = {
    name: "Ш",
    number: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/letters.pictures%2F%D0%A8.jpg?alt=media&token=e1df0b82-0759-4467-827e-28befc9f6a58"
};

function pushLettersInArray(letter, count){
    for(i = 0; i < count; i++){
        lettersArray.push(letter);
    } 
}
pushLettersInArray(letterA, 10);
pushLettersInArray(letterB, 2);
pushLettersInArray(letterV, 2);
pushLettersInArray(letterG, 2);
pushLettersInArray(letterD, 2);
pushLettersInArray(letterGj, 1);
pushLettersInArray(letterE, 10);
pushLettersInArray(letterZj, 1);
pushLettersInArray(letterZ, 1);
pushLettersInArray(letterDz, 1);
pushLettersInArray(letterI, 9);
pushLettersInArray(letterJ, 2);
pushLettersInArray(letterK, 2);
pushLettersInArray(letterL, 3);
pushLettersInArray(letterLj, 1);
pushLettersInArray(letterM, 5);
pushLettersInArray(letterN, 5);
pushLettersInArray(letterNj, 1);
pushLettersInArray(letterO, 10);
pushLettersInArray(letterP, 4);
pushLettersInArray(letterR, 5);
pushLettersInArray(letterS, 5);
pushLettersInArray(letterT, 5);
pushLettersInArray(letterKj, 1);
pushLettersInArray(letterU, 3);
pushLettersInArray(letterF, 1);
pushLettersInArray(letterH, 1);
pushLettersInArray(letterC, 2);
pushLettersInArray(letterCh, 1);
pushLettersInArray(letterDj, 1);
pushLettersInArray(letterSh, 2);



console.log(lettersArray);