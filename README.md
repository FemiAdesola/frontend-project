# Front-end Project @Integrify
<div align="center">
 <img src="https://res.cloudinary.com/demo/image/upload/c_fill,h_250,w_250/docs/models" alt="logo" width="200" height="auto"  />
  <h1> eCommerce using <span><a href="https://fakeapi.platzi.com">fakeAPI</a></span></h1>

   
    This is E-commerce store using React and Redux  with typescript
  </p>

</div>

![React](https://img.shields.io/badge/React-v.18-blue)
![Redux toolkit](https://img.shields.io/badge/Redux-v.1.9-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-v.4.9-green)
![SASS](https://img.shields.io/badge/SASS-v.4.9-hotpink)

## Table of content

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Requirements](#requirements)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Instruction to start the project](#instruction-to-start-the-project)

## Introduction

This is an eCommerce app where users can order products through an online service.
The users can filter the product based on the available category of product, sort by highest and lowest price, name of the product, and search through the product. Upon clicking on **Products** from the menu tab, the user can see all products in the product lists. 
Also, by clicking on each **check details** on each product, users can view the details of that specific product and add the product to the cart. 
## Technologies

- RectJS
- MUI (material MUI for design and styling)
- TypeScript
- Redux
- React hook userform
- react-router-dom
- Reach hooks
- redux-persist

## Requirements

1. The API endpoint from [https://fakeapi.platzi.com/](https://fakeapi.platzi.com/)  was used to create an e-commerce website. 
2. Home page, product page, user page, create product page, profile page were created. Also
profile page is only available when user logins, and user can chekout from there cart page 
3. Redux store were created for following features:
    - product reducer: get all products, find a single products, sort products by
    categories, sort products by price. 
    - Create, update  a product and update features only for admin of the webapp. 
    - user reducer: Register and Login
    - cart reducer: add product to cart, remove products, update products's quantity in cart
4.  Routes to the following are private: route to user profile page is not accessible if user has not logged in.
5. Check the website from [here](https://femi-frontend.netlify.app/)
6. Theme was used for light and dark mode 
7. Pagination was created

## Getting started
### Home page
On the home page, the user can switch from dark mode to light mode, click on the product to see the product inside the product list, click on the cart link, and click on the login link to log in.

![From](/img/Front.png)

### Product List

- From the product list page, the User clicks on the **Check details** button to view the details about single product. 
![produlist](/img/ProductList.png)

#### Single product page
![SingleProduct](/img/Details.png)

### SignUp and Login 
#### SignUp page

- Users can **"signup"** with their name, email, and password, upload their avatar, and get access to view their profile and see other users. Then have access to create and update products.
 ![SignUp](/img/signup.png)

#### Login page

- For the user to log in, it requires the user's **"email and password"** used initially for signing up for an account.
- After logging in, the user can view all necessary information about the product.

![Login](/img/Login.png)

#### Users Login

When the user signs in, the user can perform activities such as create product, update their profiles 

![UserLogin](/img/SignedUser.png)

- User can add item to cart
![Cartitem](/img/Cart.png)

![itemcart](/img/AddToCart.png)

- User's profile
![UserProfile](/img/Profile.png)

### Reducer Test result

The total of 13 test were performed on the product, category and user
![TestResult](/img/TestResult.png)
##
```shell
.
├── README.md

├── img
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.css.map
│   ├── App.tsx
│   ├── SCSS
│   │   ├── App.SCSS
│   │   └── features
│   │       └── _select.scss
│   ├── common
│   │   └── axiosInstance.ts
│   ├── components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── cart
│   │   │   └── Cart.tsx
│   │   ├── category
│   │   │   ├── Categories.tsx
│   │   │   └── CategoryCard.tsx
│   │   ├── features
│   │   │   ├── HomeCarousel.tsx
│   │   │   └── SearchInput.tsx
│   │   ├── loading
│   │   │   └── Loading.tsx
│   │   ├── product
│   │   │   ├── CreateProduct.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── SingleProduct.tsx
│   │   │   └── UpdateProduct.tsx
│   │   └── user
│   │       ├── Login.tsx
│   │       ├── SignUp.tsx
│   │       ├── UserCard.tsx
│   │       └── UserList.tsx
│   ├── formvalidation
│   │   ├── productSchema.ts
│   │   └── signUpSchema.ts
│   ├── hooks
│   │   └── reduxHook.ts
│   ├── index.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── Layout.tsx
│   │   ├── NotFound.tsx
│   │   └── Profile.tsx
│   ├── react-app-env.d.ts
│   ├── redux
│   │   ├── methods
│   │   │   ├── categoryMethod.ts
│   │   │   ├── darkLightMethod.ts
│   │   │   ├── productMethod.ts
│   │   │   └── userMethod.ts
│   │   ├── reducers
│   │   │   ├── cartReducer.ts
│   │   │   ├── categoryReducer.ts
│   │   │   ├── darkLightReducer.ts
│   │   │   ├── productReducer.ts
│   │   │   └── userReducer.ts
│   │   └── store.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   ├── test
│   │   ├── reducers
│   │   │   ├── categoryReducer.test.ts
│   │   │   ├── productReducer.test.ts
│   │   │   └── userReducer.test.ts
│   │   └── shared
│   │       ├── categoryServer.ts
│   │       ├── productServer.ts
│   │       └── userServer.ts
│   └── types
│       ├── category.ts
│       ├── product.ts
│       └── user.ts
│   
└── tsconfig.json
```

## Instruction to start the project

In the project directory, you can run:

### `npm install`

Install all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode

