function ajaxRequest(formData, url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'POST',
            contentType: 'application/json',
            headers: { "X-CSRFToken": document.cookie.split('=')[1] },
            dataType: 'text',
            data: JSON.stringify(formData),
            success: function (response) {
                document.write(response);
                resolve(response);
            },
            error: function (response) {
                console.log("REQ: Error has been occurred");
                reject();
            }
        });
    });
}


function cardHandler() {
    const product_cards = document.getElementById("product_cards").children;
    for (let i = 0; i < product_cards.length; i++) {
        product_cards[i].addEventListener("click", () => {
            const aroma = product_cards[i].querySelector(".aroma").innerHTML;
            ajaxRequest(aroma, '/get_product')
        });
    }
}

cardHandler();