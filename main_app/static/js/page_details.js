function cartAdder() {
    const add_btn = document.getElementById('button_add_to_cart');
    add_btn.addEventListener("click", () => {
        const product_details_obj = {};
        product_details_obj.product_id = document.getElementById('ID_value').innerHTML;
        product_details_obj.product_name = document.getElementById('name_value').innerHTML;
        product_details_obj.product_aroma = document.getElementById('aroma_value').innerHTML;
        product_details_obj.product_weight = document.getElementById('weight_value').innerHTML;
        product_details_obj.product_selling_price = document.getElementById('selling_price_value').innerHTML;
        const product_details_json = JSON.stringify(product_details_obj)
        if (sessionStorage.hasOwnProperty('cart_items')) {
            const current_array = [sessionStorage.getItem('cart_items')];
            current_array.push(product_details_json);
            sessionStorage.setItem('cart_items', current_array);
        }
        else {
            sessionStorage.setItem('cart_items', product_details_json);
        }
    })
}

cartAdder();