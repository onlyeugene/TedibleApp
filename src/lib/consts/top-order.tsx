import item from '@/assets/internal/dashboard/item.svg'
import item2 from '@/assets/internal/dashboard/item2.svg'
import item3 from '@/assets/internal/dashboard/item3.svg'
import item4 from '@/assets/internal/dashboard/item4.svg'
import item5 from '@/assets/internal/dashboard/item5.svg'
import item6 from '@/assets/internal/dashboard/item6.svg'
import item7 from '@/assets/internal/dashboard/item7.svg'
import item8 from '@/assets/internal/dashboard/item8.svg'
import food1 from '@/assets/internal/dashboard/image1.svg'
import food2 from '@/assets/internal/dashboard/image2.svg'
import food3 from '@/assets/internal/dashboard/image3.svg'
import food4 from '@/assets/internal/dashboard/image4.svg'
import chicken from '@/assets/internal/restaurant/Frame 1000004926.svg'
import seafood from '@/assets/internal/restaurant/Frame 1000004927.svg'
import rice from '@/assets/internal/restaurant/Frame 1000004928.svg'
import pizza from '@/assets/internal/restaurant/Frame 1000004929.svg'
import burger from '@/assets/internal/restaurant/Frame 1000004930.svg'

export const Category = [
    {
        id: 1,
        name: 'Chicken',
        image: chicken
    },
    {
        id: 2,
        name: 'Sea food',
        image: seafood
    },
    {
        id: 3,
        name: 'Rice',
        image: rice
    },
    {
        id: 4,
        name: 'Pizza',
        image: pizza
    },
    {
        id: 5,
        name: 'Burger',
        image: burger
    },

]
export const Top_Order =[
    {
        id: 1,
        name: 'Chicken & Chips',
        restaurant:`Muna Bee's Kitchen`,
        price: '2500',
        image: item,
        categoryId: 1
    },
    {
        id: 2,
        name: 'Wings & Sauce',
        restaurant:`Chicken Republic`,
        price: '3000',
        image: item2,
        categoryId: 2
    },
    {
        id: 3,
        name: 'Full Chicken',
        restaurant:`The Place`,
        price: '4300',
        image: item3,
        categoryId: 1
    },
    {
        id: 4,
        name: 'Smoked Chicken',
        restaurant:`KFC`,
        price: '4000',
        image: item4,
        categoryId: 2
    },
    {
        id: 5,
        name: 'Chicken & Chips',
        restaurant:`Spicy Kitchen`,
        price: '5000',
        image: item5,
        categoryId: 3
    },
    {
        id: 6,
        name: 'Sugar Rush',
        restaurant:`Muna Bee's Kitchen`,
        price: '2300',
        image: item6,
        category: 4
    },
    {
        id: 7,
        name: 'Vegan Salad',
        restaurant:`Spicy Kitchen`,
        price: '3300',
        image: item7,
        categoryId: 5
    },
    {
        id: 8,
        name: 'Omelet',
        restaurant:`KFC`,
        price: '1500',
        image: item8,
        categoryId: 4
    },
]


export const Restaurant_Links = [
    {
        id: 1,
        name: `Muna Bee's Kitchen`,
        status: 'Vendor is Open',
        deliveryTime: '20-25 Minutes',
        preorderUntil: '8:00pm',
        reviews: 1350,
        rating: '5.0',
        image: food1,
        categoryId: 2
    },
    {
        id: 2,
        name: `Spicy Kitchen`,
        status: 'Vendor is Open',
        deliveryTime: '20-25 Minutes',
        preorderUntil: '8:00pm',
        reviews: 1350,
        rating: '5.0',
        image: food2,
        categoryId: 3
    },
    {
        id: 3,
        name: `Chicken Republic`,
        status: 'Vendor is Open',
        deliveryTime: '20-25 Minutes',
        preorderUntil: '8:00pm',
        reviews: 1350,
        rating: '5.0',
        image: food3,
        categoryId: 1
    },
    {
        id: 4,
        name: `Rufus & Bee`,
        status: 'Vendor is Open',
        deliveryTime: '20-25 Minutes',
        preorderUntil: '8:00pm',
        reviews: 1350,
        rating: '5.0',
        image: food4,
        categoryId: 5
    },
    {
        id: 5,
        name: `The Place`,
        status: 'Vendor is Open',
        deliveryTime: '20-25 Minutes',
        preorderUntil: '8:00pm',
        reviews: 1350,
        rating: '5.0',
        image: food4,
        categoryId: 4
    },
]