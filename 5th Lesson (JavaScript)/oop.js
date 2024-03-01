"use strict";
function Pets(petName, age, type, owner) {
    this.petName = petName;
    this.age = age;
    this.type = type;
    this.owner = owner;

    Object.seal(this);
}

const pet1 = new Pets("Olaf", 3, "Cat", "Cenk");
const pet2 = new Pets("Paşa", 12, "Dog", "Berkay");
const pet3 = new Pets("Arif", 2, "Reptile", "Mert");

console.log(pet1, pet2, pet3);

// pet1.secondOwner = "Berkay";

const petList = [];

const addPet = (pet) => {
    if (pet instanceof Pets) {
        petList.push(pet);
    } else {
        throw "This is not a pet.";
    }
};

addPet(pet1);
console.log(petList);
// addPet("Maalesef", 1, "Cat", "Onur Ege");


Pets.prototype.info = "This is a pet.";

console.log(pet1.info);
console.log(pet1);


class VideoGames {
    #developer;

    constructor(gameName, releaseDate, genre, developer) {
        this.gameName = gameName;
        this.releaseDate = releaseDate;
        this.genre = genre;
        this.#developer = developer;
    }
}


const videoGame1 = new VideoGames("High On Life", 2022, "First Person Shooter", "Squanch Games");
const videoGame2 = new VideoGames("Lies of P", 2023, "Action Role-Play", "Neowiz Games");
const videoGame3 = new VideoGames("Assassin's Creed Valhalla", 2020, "Action Role-Play", "Ubisoft");
console.log(VideoGames);

