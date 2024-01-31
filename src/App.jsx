import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {productsInStock, productsSold, productsToSell, productDetails, formatPrice, formatSizes} from "./helpers/helpers.jsx";
import headerLogo from "./assets/tech_it_easy.png";
import checkIcon from "./assets/check.png";
import notIcon from "./assets/minus.png";


function App() {
    return (<>
        <header>
            <div className="logoBox">
                <img src={headerLogo} alt="Tech it easy logo"/>
            </div>
        </header>
        <main className="body-layout">
            <div className="nav-bar"><h2>Dashboard</h2></div>
            <section className="outer-info-panel">
                <article className="info-panel-stock">
                    <p className="info-panel-text">Aantal ingekochte producten</p>
                    <h1 className="info-panel-textStock">{productsInStock(inventory)}</h1>
                </article>
                <article className="info-panel-sold">
                    <p className="info-panel-text">Aantal verkochte producten</p>
                    <h1 className="info-panel-textSold">{productsSold(inventory)}</h1>
                </article>
                <article className="info-panel-toSell">
                    <p className="info-panel-text">Aantal te verkopen producten</p>
                    <h1 className="info-panel-textToSell">{productsToSell(inventory)}</h1>
                </article>
            </section>
            <div className="nav-bar"><h2>Best verkochte TV</h2></div>
            <section className="highlight-container">

                <img className="inner-highlight-container-image"
                     src='https://image.coolblue.nl/max/500x500/products/1786196'
                     alt="Samsung UHD 55AU7040 Crystal"/>

                <div className="inner-highlight-container-text">
                    <h3>{productDetails(bestSellingTv)}</h3>
                    <br></br>
                    <h2>{formatPrice(bestSellingTv)}</h2>
                    <br></br>
                    <h4>{formatSizes(bestSellingTv)}</h4>
                    <br></br>
                    <h5 className="options"><img className="icon" src={checkIcon} alt="check"/> wifi <img
                        className="icon" src={notIcon} alt="not"/> speech <img
                        className="icon" src={checkIcon} alt="check"/> hdr <img className="icon" src={checkIcon}
                                                                                alt="check"/> bluetooth <img
                        className="icon" src={notIcon} alt="not"/> ambilight</h5>
                </div>
            </section>
            <nav className="nav-bar">
                <button type="button" className="triggerButton">Meest verkochte eerst</button>
                <button type="button" className="triggerButton">Goedkoopste eerst</button>
                <button type="button" className="triggerButton">Geschikt voor sport eerst</button>
                <button type="button" className="triggerButton">Grootste scherm eerst</button>
            </nav>

            <section className="productList-container">
                {inventory.map((product) => {
                    return (
                        <article className="product-container">
                            <img className="inner-highlight-container-image" src={product.sourceImg} alt={product.name}/>
                            <div className="inner-highlight-container-text">
                            <h3>{productDetails(product)}</h3>
                            <br></br>
                            <h2>{formatPrice(product)}</h2>
                            <br></br>
                            <h4>{formatSizes(product)}</h4>
                            <br></br>
                            <h5>
                                {product.options.wifi ? <img className="icon" src={checkIcon} alt="check"/> :
                                    <img className="icon" src={notIcon} alt="not"/>}
                                wifi
                                {product.options.speech ? <img className="icon" src={checkIcon} alt="check"/> :
                                    <img className="icon" src={notIcon} alt="not"/>}
                                speech
                                {product.options.hdr ? <img className="icon" src={checkIcon} alt="check"/> :
                                    <img className="icon" src={notIcon} alt="not"/>}
                                hdr
                                {product.options.bluetooth ? <img className="icon" src={checkIcon} alt="check"/> :
                                    <img className="icon" src={notIcon} alt="not"/>}
                                bluetooth
                                {product.options.ambilight ? <img className="icon" src={checkIcon} alt="check"/> :
                                    <img className="icon" src={notIcon} alt="not"/>}
                                ambilight
                            </h5>
                            </div>
                        </article>
                    );
                })}
            </section>

        </main>
        <footer>

        </footer>

    </>)
}

export default App
