let arr = [
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
]
let arrTwo = [
    [
        {
            price: 100,
            booked: false
        }
    ],
    [
        {
            price: 100,
            booked: true
        }
    ],
    [
        {
            price: 100,
            booked: false
        }
    ],
    [
        {
            price: 100,
            booked: true
        }
    ],
    [
        {
            price: 100,
            booked: false
        }
    ],
]

let total = 0
let total_rooms_price = 0
let unbooked_rooms = 0

for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
        total += arr[i][k]
    } 
}
for (let item of arrTwo) {
    total_rooms_price += item[0].price
    if (item[0].booked === false) {
        unbooked_rooms++
    }
}

console.log('Total' , total);
console.log('Total-rooms-price' , total_rooms_price);
console.log('Unbooked-rooms' , unbooked_rooms);