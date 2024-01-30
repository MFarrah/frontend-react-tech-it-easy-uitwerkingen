import check from "../assets/check.png";
import minus from "../assets/minus.png";

export const productsSold = ((productArray) => {
    let total = 0;
    productArray.forEach((product) => {
        total += product.sold;
    });
    return total;
});

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
export const productDetails = (productArray) => {
    const productBrand = productArray.brand;
    const productType = productArray.type;
    const productName = productArray.name;
    const resultString = `${productBrand} - ${productType} - ${productName}`;
    return resultString;
};

export const formatPrice = (productArray) => {
    return `€${productArray.price},-`;
};

export const formatSizes = (productArray) => {
    const inchesToCentimeters = 2.54;
    let resultString = "";
    productArray.availableSizes.forEach((size) => {
        const sizeInInches = size;
        const sizeInCentimeters = size * inchesToCentimeters;
        resultString += `${sizeInInches} inches (${sizeInCentimeters.toFixed(2)} cm), `;
    });
    return resultString.slice(0, -2);
};
