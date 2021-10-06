//Question 1
var pets = [
    {
        type: "cat",
        age: 5.5,
    },
    {
        type: "dog",
        age: 3.8,
    },
    {
        type:"parrot",
        age:4.0,
    },
];

for(var i = 0; i < pets.length; i++){
    if(pets[i].age >= 4){
        console.log(pets[i].type);
    }
}

//Question 2

function animal(dog){   
   var typeOfDog = typeof dog;

   if(typeOfDog !== "boolean"){
       return "Please pass a boolean value in."
   }
   return dog;
}

var result = animal("german shepard");
console.log(result);


//Question 3

var subheadingUpdate = document.querySelector("h2");
var subheadingButton = document.querySelector("button");

subheadingButton.onclick = function(){
    subheadingUpdate.innerHTML = "Updated subheading.";
    subheadingUpdate.style.color = "blue";
}

