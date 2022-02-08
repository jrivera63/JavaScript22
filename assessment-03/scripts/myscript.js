const game1 = {
    title: "Final Fantasy Tactics A2",
    image: "images/gameboy.jpg",
    genre: "JRPG",
    description: "A young boy is sucked into a book that brings him into a fantasy world. He has to figure out how to escape while also surviving against the harsh world",
    platform: "Gameboy Advance/DS"
};

const game2 = {
    title: "Smite",
    image: "images/ganesh.jpg",
    genre: "MOBA",
    description: "Gods clash on the battlefield to take down the other team's Titan. It is an online multiplayer game of gods vs gods.",
    platform: "PC/Xbox/Playstation/Switch"
    
};

const game3 = {
    title: "Call of Duty: BO2",
    image: "images/xbox.jpg",
    genre: "First Person Shooter",
    description: "A first person shooter that simulates a war between two teams. There is a campaign, zombies, or multiplayer",
    platform: "Xbox/Playstation/PC"
    
};

const game4 = {
    title: "Skyrim",
    image: "images/helmet.png",
    genre: "RPG",
    description: "You play the dragonborn, a dragon soul-eating warrior who has to save the world from Alduin",
    platform: "Xbox/Playstation/PC/Switch"
    
};

const game5 = {
    title: "Final Fantasy 8",
    image: "images/ps2.jpg",
    genre: "JRPG",
    description: "A young student has to team up with his classmates to stop Ultimecia from merging the past with the present and ending the world",
    platform: "Playstation/Xbox/PC/Switch"
    
};

function display() {
    let html1 = `<h2>${game1.title}` + `<img src="${game1.image}">` + `<p>Genre: ${game1.genre}</p>` + `<p>Description: ${game1.description}</p>` + `<p>Platform(s): ${game1.platform}</p>`;
    document.getElementById("con1").innerHTML = html1;

    let html2 = `<h2>${game2.title}` + `<img src="${game2.image}">` + `<p>Genre: ${game2.genre}</p>` + `<p>Description: ${game2.description}</p>` + `<p>Platform(s): ${game2.platform}</p>`;
    document.getElementById("con2").innerHTML = html2;

    let html3 = `<h2>${game3.title}` + `<img src="${game3.image}">` + `<p>Genre: ${game3.genre}</p>` + `<p>Description: ${game3.description}</p>` + `<p>Platform(s): ${game3.platform}</p>`;
    document.getElementById("con3").innerHTML = html3;

    let html4 = `<h2>${game4.title}` + `<img src="${game4.image}">` + `<p>Genre: ${game4.genre}</p>` + `<p>Description: ${game4.description}</p>` + `<p>Platform(s): ${game4.platform}</p>`;
    document.getElementById("con4").innerHTML = html4;

    let html5 = `<h2>${game5.title}` + `<img src="${game5.image}">` + `<p>Genre: ${game5.genre}</p>` + `<p>Description: ${game5.description}</p>` + `<p>Platform(s): ${game5.platform}</p>`;
    document.getElementById("con5").innerHTML = html5;


};
