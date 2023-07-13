let products = [
    {
        id: 1,
        name: 'Sơ Mi 2091 - Ghi Nhạt',
        image: './image/shirt.png',
        total: 1,
        price : 345000
    },
    {
        id: 2,
        name: 'Sơ Mi 2091 - Xanh ',
        image: './image/product.png',
        total: 1,
        price : 569000
    }
]

const renderElement = document.querySelector('.update')
console.log(renderElement);
const totalPrices = document.querySelector('.price')
console.log(totalPrices);
const inputPromotion = document.querySelector('#promo-code');
console.log(inputPromotion);

function renderProducts(arr) {
    renderElement.innerHTML = ''

    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        renderElement.innerHTML = `
        <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="all">
            <div class="image">
                <img src="${t.image}" alt="">
            </div>
            <div class="products-description">
                <span class="products-description-title">
                   ${t.name}
                </span>
                <div class="product-delete">
                <span><input  type="button" class="min" value="+" onclick='tang(${t.id})'></span>
                <span><input type="number" class="quanity" max="10" min="1" value="${t.total}"></span>
                <span><input type="button" class="min" value="-" onclick='giam(${t.id})'></span>
                </div>
                <div class="price">
                    <span>${convertMoney(t.price * t.total)}</span>
                </div>
            </div>
            <div class="discount">
                <input type="text" placeholder="Mã giảm giá">
                <span>Sử dụng</span>
            </div>
            <div class="ship">
                <p>Phí vận chuyển
                    <span>0đ</span>
                </p>
            </div>
            <div class="total">
                <p>Tổng cộng
                    <span>${convertMoney(t.price * t.total)}</span>
                </p>
            </div>
            <div class="note">
                <p>Tony4men sẽ xác nhận đơn hàng bằng cách gọi điện thoại. Bạn vui lòng để ý điện thoại khi đặt hàng thành công và chờ nhận hàng. Cảm ơn bạn !</p>
            </div>
            <div class="completed">
            <button class="button-btn">Hoàn tất hóa đơn</button>
            </div>
        </div>
    </div>`
    }
}

renderProducts(products)


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
    renderProducts(products)
}

function tang(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].total++
        }
    }
    renderProducts(products)
}

document.querySelector('.button-btn').addEventListener('click', function () {
    alert('Bạn đã đặt hàng thành công')
})




