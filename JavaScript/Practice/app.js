const restaurantNames = ["Fusion Feast", "The Foodie's Hub", "Flavor Junction", "The Hungry Fork", "Tasty Bites", "Savor Delights", "Feast Mode", "Bite Buzz", "Food Frenzy", "Delish Dish"];
const foodTypes = ["Japanese", "Chinese", "Mexican", "Italian", "Indian", "Thai", "Vietnamese", "Korean", "Greek", "French"];
const locations = ["Safdarjung Tomb", "Khan Market", "Jama Masjid", "Delhi Zoo", "Red Fort", "Qutub Minar", "India Gate", "Lotus Temple", "Humayun's Tomb", "Akshardham"];
const dummyRestaurants = [];

for (let i = 0; i < 100; i++) {
    dummyRestaurants.push({
        name: restaurantNames[Math.floor(Math.random()*restaurantNames.length)],
        food_type: foodTypes[Math.floor(Math.random()*foodTypes.length)],
        location: locations[Math.floor(Math.random()*locations.length)],
        rating: Math.floor(Math.random() * 5) + 1,
        price_for_two: Math.floor(Math.random() * 5000) + 100,
        distance_from_Customer_house: (Math.random() * 10).toFixed(1) + " km",
        offers: Math.floor(Math.random() * 30) + 1,
        alcohol: Math.random() < 0.5,
        restaurant_open_time: Math.floor(Math.random() * 24),
        restaurant_close_time: Math.floor(Math.random() * 24)
    });
}

const fs = require('fs');
fs.writeFileSync('dummy.json', JSON.stringify(dummyRestaurants));