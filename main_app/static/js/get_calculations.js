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
    ajaxRequest(product_id, '/get_calculations').then((value) => {
        console.log(value);
        value = JSON.parse(value)
        document.getElementById('product_id').innerHTML = value['id'];
        document.getElementById('selling_price').innerHTML = value['selling_price'];
        document.getElementById('material_cost').innerHTML = value['material_cost'];
        document.getElementById('logistics_cost').innerHTML = value['logistics_cost'];
        document.getElementById('packaging_cost').innerHTML = value['packaging_cost'];
        document.getElementById('labeling_cost').innerHTML = value['labeling_cost'];
    })
}