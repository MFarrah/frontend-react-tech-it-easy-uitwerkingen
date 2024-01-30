import './App.css';
import {inventory} from "./constants/inventory.js";
import {productsInStock, productsSold, productsToSell, productDetails, formatPrice, formatSizes} from "./helpers/helpers.jsx";
import headerLogo from "./assets/tech_it_easy.png";

function App() {
    return (<>
        <header>
            <div className="logoBox">
            <img src={headerLogo} alt="Tech it easy logo"/>
            </div>
        </header>
        <main className="body-layout">
            <section className="outer-info-panel">
                <article className="info-panel">
                    <h1>{productsInStock(inventory)}</h1>
                </article>
                <article className="info-panel">
                    <h1>{productsSold(inventory)}</h1>
                </article>
                <article className="info-panel">
                    <h1>{productsToSell(inventory)}</h1>
                </article>
            </section>
            <nav>
                <button type="button">prijs</button>
                <button type="button">prijs</button>
                <button type="button">prijs</button>
                <button type="button">prijs</button>
            </nav>
            <section>
                <article>

                </article>
                <article>

                </article>
            </section>


            <h1>{productDetails(inventory[0])}</h1>
            <h1>{formatPrice(inventory[0])}</h1>
            <h2>{formatSizes(inventory[0])}</h2>
        </main>
        <footer>

        </footer>

    </>)
}

export default App
