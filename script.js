// Задание1

// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
//     keyin6: 6,
//     keyin7: 7,
// }

// for (const key in numbers) {
//     if (numbers[key] >= 3) {
//         console.log(numbers[key]);
//     }
// }

// Или

// const collection = Object.values(numbers);
// for (let i = 0; i < collection.length; i++) {
//     if (collection[i] >= 3) {
//         console.log(collection[i]);
//     } else {
//         continue;
//     }
// }

// Задание 2

// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [
//         {
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2, // вывести это число
//             },
//         },
//         {
//             userId: 5, // вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", // вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1,
//             },
//         },
//     ],
// };

// console.log(post.author);
// console.log(post.comments[0].rating.dislikes);
// console.log(post.comments[1].userId);
// console.log(post.comments[1].text);

// Задание 3

// const products = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];

// products.forEach(element => {
//     element.price *= 0.85;
// });

// console.table(products);

// Задание 4

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];


// const productsWithPics = products.filter(item => item.photos && item.photos.length > 0);

// console.table(productsWithPics);

// Или

// function sortPics(item) {
//     if (item.photos) {
//         if (item.photos.length > 0) {
//             return true;
//         }
//     } else {
//         return false;
//     }
// }

// const productsWithPics = products.filter(sortPics);

// console.table(productsWithPics);


products.sort(function (item1, item2) {
    if (item1.price > item2.price) {
        return 1;
    }
    else if (item1.price < item2.price) {
        return -1;
    } else {
        return 0;
    }
}
);

console.table(products);

// Задание 5


// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];


// function createDayList(arrayEn, arrayRu) {
//     if (arrayEn.length !== arrayRu.length) {
//         alert('Разная длина массивов')
//     } else {
//         const weekDays = {};
//         for (let i = 0; i < en.length; i++) {
//             weekDays[en[i]] = ru[i];
//         }
//         return weekDays;
//     }
// }

// console.table(createDayList(en, ru));
