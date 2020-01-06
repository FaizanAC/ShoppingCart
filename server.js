const express = require('express');
const app = express();

// Currently using hardcoded data for products
app.get('/api/products', (req, res) => {
    const products = [
        {
            name: "Wrench",
            price: 15.00,
            id: 1,
            unique: 123456789,
            description: "A useful Wrench",
            type: "tool"
        },

        {
            name: "Measuring Tape",
            price: 5.00,
            id: 2,
            unique: 845994764,
            description: "A useful Measuring Tape",
            type: "tool"
        },

        {
            name: "Phillips Driver",
            price: 8.00,
            id: 3,
            unique: 734538635,
            description: "A useful Screw Driver",
            type: "tool"
        },
        
        {
            name: "Clamp",
            price: 25.00,
            id: 4,
            unique: 543874254,
            description: "A useful Clamp",
            type: "tool"
        },

        {
            name: "Hammer",
            price: 10.00,
            id: 5,
            unique: 258784357,
            description: "A useful Hammer",
            type: "tool"
        },
        
        {
            name: "Sander",
            price: 40.00,
            id: 6,
            unique: 242788786,
            description: "A useful Sander",
            type: "tool"
        }, 

        {
            name: "Banana",
            price: 2.00,
            id: 7,
            unique: 363464546,
            description: "A yellow Banana",
            type: "food"
        },

        {
            name: "Apple",
            price: 1.00,
            id: 8,
            unique: 624576754,
            description: "A tasty Apple",
            type: "food"
        },

        {
            name: "Chips",
            price: 5.00,
            id: 9,
            unique: 266456246,
            description: "A bag of Chips",
            type: "food"
        },

        {
            name: "Chair",
            price: 35.00,
            id: 10,
            unique: 574754345,
            description: "A useful Chair",
            type: "furniture"
        }, 

        {
            name: "Desk",
            price: 150.00,
            id: 11,
            unique: 375374563,
            description: "A useful Desk",
            type: "furniture"
        },

        {
            name: "Shelf",
            price: 85.00,
            id: 12,
            unique: 748635775,
            description: "A useful Closet",
            type: "furniture"
        }
    ]

    res.json(products);
} )

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
