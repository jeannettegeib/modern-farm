export const Catalog =(harvestedFood)=>{
    let htmlString="";
    for (const foodObject of harvestedFood){
         htmlString += `<section class="plant">${foodObject.type}</section>`
        }
        return htmlString;
}