

export const productsSold = ((productArray) => {
    let total = 0;
    productArray.forEach((product) => {
        total += product.sold;
    });
    return total;
})

export const productsInStock = ((productArray) => {
    let total = 0;
    productArray.forEach((product) => {
        total += product.originalStock;
    });
    return total;
});

export const productsToSell = ((productArray) => {
    const initialStock = productsInStock(productArray);
    const soldStock = productsSold(productArray);
    return initialStock - soldStock;
});