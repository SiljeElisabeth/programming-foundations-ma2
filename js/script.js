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
