(function() {
    var productId = "QB165";
    var productName = "Mango Juice";

    function displayProduct(id, name) {
        console.log(`Product with id:${productId} and name:${productName}`);
    }
    //when you call displayProduct, you will get the appropriate answer
    displayProduct(this.productId, this.prductName);
    //Product with id:QB165 and name:Mango Juice
})();