import {inventory} from "./inventory.js";


const tvTypes = inventory.map(tv => tv.type);
console.log(tvTypes);


const soldOut = inventory.filter(tv => tv.originalStock === tv.sold);
console.log(soldOut);


const tvType = inventory.find(tv => tv.type === 'NH3216SMART');
console.log(tvType);


const suitableForSports = inventory.map(tv => {
    return {name: `${tv.brand} ${tv.name}`, suitable: tv.refreshRate >= 100}});
console.log(suitableForSports);









