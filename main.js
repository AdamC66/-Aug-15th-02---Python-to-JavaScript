let apples = 14;
console.log(apples);

console.log(`I have ${apples} apples`);

let materials = ['wood', 'metal', 'stone'];

console.log(materials);

let words = {
    elephant: "The world's largest land mammal",
    school: 'A place of learning',
    'ice cream': "A delicious milk based dessert."
};

console.log(words);
console.log(words.elephant);
console.log(words.school);


let num = 16;

if(num > 10){
    console.log(`${num} is greater than 10`);
}else if (num === 10){
    console.log(`${num} is exactly than 10`);
}else{
    console.log(`${num} is less than than 10`);
}

for(x=0; x<10; x++){
    console.log('Doing the same thing over and over')
}
let total = 0;
for(num=0; num<100; num++){
    total += num;
}
console.log(total);

for(height=3; height<15;height++){
    if(height > 9){
        console.log("you can get on the rollercoaster");
    }else{
        console.log("you are too short to ride the rollercoaster");
    }
}

let containers = ['purse', 'wallet', 'backpack'];
containers.forEach(element => {
    console.log(element)
});


function helloWorld() {
    console.log('hello world')
}

helloWorld()

function add(first,second){
    return(first+second)
}

console.log(add(5,7))