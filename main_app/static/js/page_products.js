function ajaxRequest(formData, url) {
    /** Функция, возвращающая Promise, выполняющая запросы на сервер. Получает на входе две переменные:
     * Данные для передачи и url-адрес запроса.*/
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'POST',
            contentType: 'application/json',
            headers: { "X-CSRFToken": document.cookie.split('=')[1] },
            dataType: 'json',
            data: formData,
            success: function (response) {
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
            const product_description = product_cards[i].querySelector(".product_description").innerHTML;
            ajaxRequest(product_description, '/get_product')
        });
    }
}

cardHandler();