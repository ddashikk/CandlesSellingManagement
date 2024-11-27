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
                resolve(response);
            },
            error: function (response) {
                console.log("REQ: Error has been occurred");
                reject();
            }
        });
    });
}


function get_calculation() {
    const product_id = document.getElementById('IDInput').value;
    ajaxRequest(product_id, '/get_calculations')
}