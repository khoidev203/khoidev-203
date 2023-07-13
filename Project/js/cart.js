let products = [
    {
        id: 1,
        name: 'Sơ Mi 2091 Ghi Nhạt',
        image: './image/product.png',
        total: 1,
        price: 345000
    },
    {
        id: 2,
        name: 'Áo Nỉ Krik regular 8063',
        image: './image/product1.png',
        total: 1,
        price: 409000
    },
    {
        id: 3,
        name: 'Áo Khoác Nỉ Krik Regular 6120',
        image: './image/product2.png',
        total: 1,
        price: 589000
    },
]

const renderEl = document.querySelector('.render')
console.log(renderEl);
const totalProductsElement = document.querySelector('.count-cart')
console.log(totalProductsElement);
const totalPrice = document.querySelector('.total_price')
console.log(totalPrice);
const summaryUlElement = document.querySelector('.boxRightCart')
console.log(summaryUlElement);
const cart = document.querySelector('.expanded-message ')
console.log(cart);



function renderProduct(arr) {
    renderEl.innerHTML = ''
    if(arr.length == 0) {
        cart.innerHTML = "<li>Giỏ hàng của bạn trống</li>"
        cart.style.fontSize = "21px"
        cart.style.textAlign = "center"
       
    }

    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        renderEl.innerHTML += `
        <div class="row">
                        <div class="col-lg-2 col-md-2 col-sm-3 col-3">
                            <div class="image-products mt-4">
                                <img src="${t.image}" alt="${t.name}">
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-2 col-sm-3 col-3">
                            <div class="description-products ">
                                <a href="" class="name-products mt-5">${t.name}
                                </a>
                                <button class="deleteItem" onclick='deleteProduct(${t.id})'>Xóa</button>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-4 col-3">
                            <div class="product-delete mt-5">
                                <span><input type="button" class="min" value="-" onclick='giam(${t.id})'></span>
                                <span><input type="number" class="quanity" max="10" min="1" value="${t.total}"></span>
                                <span><input type="button" class="min" value="+" onclick='tang(${t.id})'></span>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-6 col-1">
                            <div class="price mt-5">
                                <span>${convertMoney(t.price * t.total)}</span>
                            </div>
                        </div>
                    </div>
        `
    }
    updateTotalProduct(products)
    updateTotalMoney(products)
}


renderProduct(products)

function deleteProduct(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products.splice(i, 1)
        }
    }
    renderProduct(products)
}

function convertMoney(number) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)
}

function giam(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].total--
            if (products[i].total == 0) {
                products[i].total = 1
                return
            }
        }
    }
    renderProduct(products)
}

function tang(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].total++
        }
    }
    renderProduct(products)
}

function updateTotalProduct(arr) { 
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += products[i].total;
    }
    totalProductsElement.innerHTML = `<span class="count-cart">(Có <b>${count}</b> sản phẩm trong giỏ hàng)</span>`
}

function updateTotalMoney(arr) {
    let subTotal = 0;
    console.log(products);
    if(arr.length === 0) {
        subTotal = 0
    } 
    for (let i = 0; i < arr.length; i++) {
        subTotal += products[i].total * products[i].price;
       
    }
    summaryUlElement.innerHTML = "";
    summaryUlElement.innerHTML += `
    <div class="boxRightCart">
        <div class="titleInfoCart">Tóm tắt Đơn hàng</div>
        <div class="summary-subtotal">
            <p class="order-infor">
                <span class="titleOrder">Chưa bao gồm phí vận chuyển</span>
            </p>
            <p class="boldPrice">
                <span class="titleOrder">
                    <b>Tổng tiền:</b>
                </span>
                <span class="total_price">
                    <b>${convertMoney(subTotal)}</b>
                </span>
            </p>
        </div>
        <div class="rim"></div>
        <div class="note-subtotal">
            <i>Bạn có thể nhập mã giảm giá ở trang thanh toán</i>
        </div>
        <div class="cart-buttons">
            <button class="btn"><a href="./order.html">Tiến hành đặt hàng</a></button>
            <a class="link-continue" href="./home.html">Mua thêm sản phẩm</a>
        </div>
    </div>
`
}

function giam(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].total--
            if (products[i].total == 0) {
                products[i].total = 1
                return
            }
        }
    }
    renderProduct(products)
}

function tang(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].total++
        }
    }
    renderProduct(products)
}







