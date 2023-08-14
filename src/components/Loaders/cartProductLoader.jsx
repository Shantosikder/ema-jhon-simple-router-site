import { getShoppingCart } from "../../utilities/fakedb";
const cartProductLoader = async() => {
   const loadedProducts = await fetch('products.json');
   const products = await loadedProducts.json();
   const storeCard = getShoppingCart();
   const saveCard = [];
   for(const id in storeCard){
    const addedProduct = products.find(pd => pd.id === id);
    if(addedProduct){
        const quantity = storeCard[id];
        addedProduct.quantity = quantity;
        saveCard.push(addedProduct);
    }
   }
   return saveCard;
};

export default cartProductLoader;