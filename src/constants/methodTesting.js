import {inventory} from "./inventory.js";


export const tvTypes = inventory.map(tv => tv.type);
console.log(tvTypes);


export const soldOut = inventory.filter(tv => tv.originalStock === tv.sold);
console.log(soldOut);


export const tvType = inventory.find(tv => tv.type === 'NH3216SMART');
console.log(tvType);


export const suitableForSports = inventory.map(tv => {
    return {name: `${tv.brand} ${tv.name}`, suitable: tv.refreshRate >= 100}});
console.log(suitableForSports);



export const ambilight = inventory.filter(tv => tv.options[4].applicable === true);
console.log(ambilight);






