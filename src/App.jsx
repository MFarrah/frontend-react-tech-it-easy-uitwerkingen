import './App.css';
import {inventory} from "./constants/inventory.js";
import {productDetails, productsSold} from "./helpers/helpers.jsx";
import {productsInStock} from "./helpers/helpers.jsx";
import {productsToSell} from "./helpers/helpers.jsx";

function App() {
    return (
        <>
            <h1>{productsSold(inventory)}</h1>
            <h1>{productsInStock(inventory)}</h1>
            <h1>{productsToSell(inventory)}</h1>
            <h1>{productDetails(inventory[0])}</h1>
        </>
    )
}

export default App
