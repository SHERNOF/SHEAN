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

e. Create the JSX Productscreen.js. We used here the array method const candle = data.candles.find((x) => x._id === props.match.params.id)
f. reuse the <Rating> in the Productscreen.js
g. take note of the utilization of the candle._id in the App.js, Product.js and Productscreen.js

Section 4 (9) - Start of BE; implementation of basic node.js application
a. DO npm init in the root folder and create the folder backend; create the server.js afterwards
b. server.js will contain the code for express.js; express.js is a node package that will allo to create a server. npm install express
c. use "type": module in package.json to use ES6 module functions
c. copy data.js in the BE folder and import it in the server.js; return candles array in server.js
d. we should be able to view the data.js in the browser. use json viewer plugin of chrome
d. npm install --save-dev nodenon to automate the server; npm start to start and monitor the BE server
e. create the const port which will define the port in the .env. change the hard coded 5000 as port

