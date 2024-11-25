# User path:
    1. User opens web site.
    2. User looking through products.
    3. User opens product card.
    4. User adding chosen products to cart.
    5. User pressing on cart button.
    6. User looking at cart page and verifying order content.
    7. User may remove some products from cart.
    8. User clicks on checkout button.
    9. User enters phone number:
        1. If the phone number in database, then order details fill automatically.
        2. If the phone number not in database, then order details the user enter manually.
    10. User clicks on the pay button:
        1. If payment successful, then order details are written to database.
        2. If payment was not successful, then error message pops up.
    11. User clicks on orders button
    12. User enters phone number:
        1. If phone number in database, then show orders data.
        2. If phone number not in database, then show error message.

# Backend:

## MySQL:
    1. Table structure:
        1. Products:
            1. ID
            2. name
            3. aroma
            4. type
            5. weight
            6. contents
            7. selling_price
            8. material_cost
            9. logistics_cost
            10. packaging_cost
        2. Customers:
            1. ID
            2. full_name
            3. address
            4. email
            5. phone_number
            6. gender
            7. type
        3. Orders:
            1. ID
            2. open_date/time
            3. close_date/time
            4. status
            5. product_ids
    2. Writing data:
        1. New customer
        2. New order
    3. Reading data:
        1. Customers
        2. Products
