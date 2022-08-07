# React e-Shop Website

## Outline

This project required me to create a mock website for an online store using React (fetching data within a React App, using react-router-dom) and Firebase/Firestore (managing the database and contents with no static product data in the react application).

<img src="https://user-images.githubusercontent.com/107823527/183287656-83f25084-cdd2-4566-9f0d-92b474d615be.png" width='770px' />

<img src="https://user-images.githubusercontent.com/107823527/183287698-7cc23a15-d027-44eb-ad2f-df9e2dc0e4a4.png" height='400px' /> <img src="https://user-images.githubusercontent.com/107823527/183287755-9294ac43-a036-41e3-8026-323c1b0237a2.png" height='400px' />

## MVP

At a minimum the e-shop website should have two pages:

-   Home Page
    -   This will contain:
        -   A Grid of products
        -   Carousel of featured products
        -   Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants
-   All products should be stored in Firestore:
    -   You should store the following information:
        -   quantity
        -   variants (could be colors, sizes, etc)
        -   price per unit
        -   name
        -   image url
        -   favourited or not (boolean)
            All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application

### Bonus

Using Firestore and react create, a cart system. Create a cart page in your react app Add logic to prevent users from adding items to cart that are no longer in stock. You will have to check the current cart and the product quantity Cart page should have the following:

-   List of products in cart

    -   Ability to change quantity of products in cart
    -   Ability to remove items from cart
    
## Approach

First, I created a basic template for the React App with files for all the components and pages I thought I would need (home, product, carousel, etc.). Then I started collating the product data, as i wasn't using an existing API or data set, and added it to my firestore database, mapping the contents into my home page. Next i worked on the product page, using react-router-dom to link to product page using the id and passing the state of the specific product through that link.

On the product page, i added the functionality to favourite a product and add it to the card, which involved adding properties in the product database for "isFav" and "inCart" with either a true or false value, then creating state for them in the App and a toggle connected to the respective buttons to update the database when clicked. I also added an alert to warn users when they try to add an item that it out of stock.

After that i implemented the carousel on the home page, I wasn't sure where to start with this so i follow [this](https://dev.to/rakumairu/simple-react-carousel-24m0) example, 
