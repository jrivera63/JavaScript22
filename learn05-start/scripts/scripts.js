const dog1 = {
    image:"images/black-dog.jpg",
    heading: "Black Dog",
    caption: "Black dog in a bucket",
    altTag: "Dog in a bucket"
};

const dog2 = {
    image:"images/gold-dog.jpg",
    heading: "Gold Dog",
    caption: "Gold dog in grass",
    altTag: "Dog laying in grass"
};

const dog3 = {
    image:"images/snow-dog.jpg",
    heading: "Snow Dog",
    caption: "Dog standing by snowman",
    altTag: "Dog by a snowman"
};

const dog4 = {
    image:"images/white-dogs.jpg",
    heading: "White Dogs",
    caption: "Two white dogs",
    altTag: "Two white dogs"
};

function ChooseDog(dog){

    if (dog == 1){
        loadMe(dog1, 1);
    } else if (dog == 2) {
        loadMe(dog2, 2);
    } else if (dog == 3) {
        loadMe(dog3, 3);
    } else if (dog == 4){
        loadMe(dog4, 4);
    }

}

function loadMe(dog, dogNum){
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
    document.getElementById("button" + dogNum).style.display = "none"
}