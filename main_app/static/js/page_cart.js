function loadCart() {
    const cart_items_json = `[${sessionStorage.getItem('cart_items')}]`;
    const cart_items_added = JSON.parse(cart_items_json)
    for (i=1; i < cart_items_added.length; i++) {
        const cart_items = document.getElementById('cart_items');

        const cart_item = document.createElement('div');
        cart_item.className = 'cart_item';
        
        const item_info = document.createElement('div');
        item_info.className = 'item_info';
        
        const item_name = document.createElement('div');
        item_name.className = 'item_name';
        
        const name_value = document.createElement('div');
        name_value.className = 'name_value';
        name_value.innerHTML = cart_items_added[i].product_name + ',\xa0';

        const aroma_value = document.createElement('div');
        aroma_value.className = 'aroma_value';
        aroma_value.innerHTML = cart_items_added[i].product_aroma;

        const ID = document.createElement('div');
        ID.className = 'ID';
        ID.innerHTML = 'Артикул: ' + cart_items_added[i].product_id;

        const price_delete = document.createElement('div');
        price_delete.className = 'price_delete';

        const selling_price = document.createElement('div');
        selling_price.className = 'selling_price';
        selling_price.innerHTML = 'Стоимость: ' + cart_items_added[i].product_selling_price;

        const button_delete = document.createElement('button');
        button_delete.className = 'button_delete';

        const button_image = document.createElement('img');
        button_image.src = 'static/src/delete.png';
        button_image.style.width = '100%';
        button_image.style.height = '100%';

        cart_items.appendChild(cart_item);
        cart_item.appendChild(item_info);
        cart_item.appendChild(price_delete);
        item_info.appendChild(item_name);
        item_name.appendChild(name_value);
        item_name.appendChild(aroma_value);
        item_info.appendChild(ID);
        price_delete.appendChild(selling_price);
        price_delete.appendChild(button_delete);
        button_delete.appendChild(button_image);
    }
}

loadCart();