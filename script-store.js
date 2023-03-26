var title_array = [];
var price_array = [];
var quantity_array = [];
var total_array = [];

function addItem(title, price, id) {
    var qty = parseInt(document.getElementById(id).value);
    if (qty == 0) {
        alert("Enter quantity");
    }
    var table = document.getElementById("report_table");
    if (title_array.includes(title)) {
        let index = title_array.indexOf(title);
        quantity_array[index] = qty;
        total_array[index] = quantity_array[index] * price_array[index];
    } else {
        title_array.push(title);
        price_array.push(price);
        quantity_array.push(qty);
        let index = title_array.indexOf(title);
        total_array.push(quantity_array[index] * price_array[index]);
    }
    table.innerHTML = "<tr><th>No</th><th>Item Name</th><th>Quantity</th><th>Price of an Item</th><th>Total Price</th></tr>";
    for (i = 0; i < title_array.length; i++) {
        let row = table.insertRow(i + 1);
        let t_no = row.insertCell(0);
        let t_name = row.insertCell(1);
        let t_qty = row.insertCell(2);
        let t_price_each = row.insertCell(3);
        let t_total = row.insertCell(4);
        t_no.innerHTML = i + 1;
        t_name.innerHTML = title_array[i];
        t_qty.innerHTML = quantity_array[i];
        t_price_each.innerHTML = price_array[i];
        t_total.innerHTML = total_array[i];
    }
    return false;
}

function placeOrder() {
    if (title_array.length == 0) {
        alert("Add some items to cart");
        return false;
    }
    let name = document.getElementById("cus_name");
    let email = document.getElementById("cus_email");
    let mobile = document.getElementById("cus_mobile");
    let receipt = document.getElementById("receipt_data");
    if (name.value == "") {
        alert("Enter Customer Name");
        return false;
    }
    if (email.value == "") {
        alert("Enter Customer Email");
        return false;
    }
    if (mobile.value == "") {
        alert("Enter Customer Mobile");
        return false;
    }
    if (mobile.value.length != 10) {
        alert("Mobile is invalid. Character length must be 10");
        return false;
    }
    var data = "";
    data += "Name : " + name.value + "<br>";
    data += "Email : " + email.value + "<br>";
    data += "Mobile : " + mobile.value + "<br><br>";
    data += "--------------------------------<br>";
    data += "INVOICE DETAILS<br>";
    data += "--------------------------------<br><br>";
    let total_amt = 0;
    for (i = 0; i < title_array.length; i++) {
        data += "Product : " + title_array[i] + "<br>";
        data += "Quantity : " + quantity_array[i] + "<br>";
        data += "Price : $" + total_array[i] + ".00<br><br>";
        total_amt += total_array[i];
    }
    data += "--------------------------------<br>";
    data += "Total Amount : $" + total_amt + ".00<br>";
    data += "--------------------------------<br>";
    receipt.innerHTML = data;
    return false;
}

function clearAll() {
    for (i = 1; i < 6; i++) {
        document.getElementById("item_" + i).value = 0;
    }
    table.innerHTML = "<tr><th>No</th><th>Item Name</th><th>Quantity</th><th>Price of an Item</th><th>Total Price</th></tr>";
    title_array = [];
    price_array = [];
    quantity_array = [];
    total_array = [];
    return false;
}