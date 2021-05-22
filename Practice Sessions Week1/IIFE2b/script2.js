(function() {
    var productId = "QB154";
    var productName = "Orange Juice";

    function displayProduct(id, name) {
        console.log(`Product with id:${productId} and name:${productName}`);
    }
    //when you call displayProduct you will receive this
    displayProduct(this.productId, this.prductName);
    //Product with id:QB154 and name:Orange Juice
})();