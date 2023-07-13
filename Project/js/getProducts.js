import {products} from "./data.js"

console.log(products);

function getProducts() {

    for (let i = 0; i < products.length; i++) {
        var xmlString = `<div class="col-lg-3 col-md-3 col-sm-6 col-6">
        <div class="box">
            <div class="description-price-image">
                <a href="">
                    <a href="${products[i].link}"><img src="./image/${products[i].image[0]}" alt=""></a>
                </a>
            </div>
            <div class="description-price-content">
                <h3 class="pro-name">
                    <a href="#">${products[i].name}</a>
                </h3>
                <h3 class="box-pro-prices">
                    <a href="#">${convertMoney(products[i].price)}</a>
                </h3>
            </div>
            <div class="actionLoop visible-lg">
            <button type="button" class="styleBtnBuy" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i class="fas fa-shopping-cart"></i>
              Mua ngay
            </button>
          </a>
          <button type="button" class="styleBtnBuy" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <a href="${products[i].link}">
              <i style="color: #fff;" class="fa fa-eye"></i>
            <span style="color: #fff;">xem chi tiết</span>
            </a>
          </button>
      </div>
        </div>
    </div>`;
        document.getElementById('row-products').insertAdjacentHTML('beforeend', xmlString);
    }
}

function convertMoney(number) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)
}
getProducts()