Section 1

a. Create the Main HTML template and its styling via sass
b. install react and transfer the index.html content to App.js; remove unnecessary files
c. install sass inside react frontend folder
d. import the sass to package.json and index.html inside frontend
e. creeated the data.js and use its content to replace the static data html
f. use key={candle._id} as map was used
g. use href={`/product/${candle._id}`} and utilize each product id

Section 2 (7)
a. create the Ratingjs and Product.js (components)
b. transfer the div under map to Product.js
c. use the key in the <Product key={candle._id} candle={candle}></Product>
d. candle is the props to be use in the Product.js

e. cut the .rating from Product.js and paste it in the Rating.js
f. create the condition for the appearance of each star in the rating
g. at this point this is the flow >>> index.html template >>> install react > include sass in react > put the body of index.html to App.js > Create the Product.js component and put the content of the App.js into it. > 
    Create the Rating.js component and put the conditions to define its appearances. Rating.js component is inside the Product.js

Section 3 (8)
a. implementation of npm i react-router-dom; it can define multiple routes for the web app and change the screen base from the route; create the HomeScreen and ProductScreen.js
b. use <BrowserRouter> to wrap the whole JSX in the App.js
c. create the screens folder to put the HomeScreen and ProductScreen.js
d. Transfer the <Product> JSX from App.js to HomeScreen.js