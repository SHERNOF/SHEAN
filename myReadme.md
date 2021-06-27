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

-- Technologies used are the react-router-dom with the use of <BrowserRouter>, <Link> and <Route>

Section 4 (9) - Start of BE; implementation of basic node.js application
a. DO npm init in the root folder and create the folder backend; create the server.js afterwards
b. server.js will contain the code for express.js; express.js is a node package that will allow to create a server. <npm install express>
c. use "type": module in main package.json to use ES6 module functions
c. copy data.js in the BE folder and import it in the server.js; return candles array in server.js
d. we should be able to view the data.js in the browser. use json viewer plugin of chrome
d. npm install --save-dev nodenon to automate the server; npm start to start and monitor the BE server
e. create the const port which will define the port in the .env. change the hard coded 5000 as port

-- Technology use: express.js and nodemon

Section 5 (10) - fetching data from BE
a. use the proxy in package.json http://127.0.0.1:5000. It will make the api request re-direct  to BE
b. install axios in frontend - this is a library to send AJAX request to server; <npm i axios>((
c. at Homescreen.js, fetch data from data.js from BE instead of data.js from FE. difine a react hook that will define the state of the Homescreen.js, use <useStat([])> and assigned the deconstruction as const [ candles,    
   setCandles ]. setCandles() is use to change the value of candles in which the default value = []. import useState. This will fetch the data from BE and define the state of the Homescreen.js
d. fill the browser with the data fetched. use useEffect() function. this happens when the component (Homescreen) did mount in the browseråß. useEffect accepts 2 parameters which are a function and an empty array. make the 
   function as an AJAX request, pls note that this is async function. array is empty as there's no dependenct
e. import axios and useEffect 
f. do not import the data.js anymore as the data will now be coming from BE. data.candles.map((candle) => ( will now be andles.map((candle) => (
g. restart both fe and be servers to take effect the proxy. you can see now in the console/network/xhr the objects parsed from be

h. from this point: useEffect fetched data from BE and throw it as a parameter to setCandles(data) to be displayed in Homescreen.js

i. 2nd part: create another custom hooks which will handle the loader and error message; const [ loading, setLoading ] = useState(false) & const [ error, setError ] = useState(false). false as the parameter as loading and  
   error will conditionally loaded. Use this during fetching data from BE in useEffect(). to catch the error, put the body of useEffect inside a try/catch block. use err as a parameter of catch and make the loading invisible if there's an error





