// 1. NESTING OBJECTS
let doll = {
    size: 'large',
    innerDoll: {
        size: 'medium'
    }
};

doll.innerDoll.innerDoll = {
    size: 'small'
};

console.log(doll);



// 2 ARRAY OF OBJECTS
let cats = [
    {
        name: 'Angel',
        age: 18,
        furColor: 'grey'
    },
    {
        name: 'Evil',
        age: 14,
        furColor: 'red'
    },
    {
        name: 'Meh',
        age: 12,
        'Fur Color': 'white' // whit braket notation
    }
];

console.log(cats);
console.log(cats[1].furColor);
console.log(cats[2]['Fur Color']);