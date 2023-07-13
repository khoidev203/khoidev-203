import { products } from "./data.js"
function renderImage(images) {
    let newimage = ''
    for (let i = 0; i < images.length; i++) {
      newimage += `<div class="carousel-item ${i === 0 ? 'active' : ''}" data-bs-interval="3000">
      <img src="./image/${product.image[i]}" class="d-block w-100" alt="...">
      </div>`

    }
    return newimage

}

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, props) => searchParams.get(props),
});

let id = params.id
let product = products.find(p => p.id == id)

console.log(id)
function getProducts() {
  console.log(product);
  var xmlString = ` 
        <div class="col-lg-6 col-md-6 col-sm-6">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${renderImage(product.image)}
           
          </div >
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div >
      </div >
  <div class="col-lg-4 col-md-4 col-sm-4">
    <div class="description-product">
      <h2 class="title-product">${product.name}</h2>
      <p class="product-code">Mã sản phẩm <b> JG1823.2712M.1239.M</b></p>
      <h2 class="price">${convertMoney(product.price)}</h2>
      <label class="laber-form" for="color">Màu sắc</label> <br>
        <select class="color" id="country" name="country">
        <option value="den">Màu sắc</option>
          <option value="den">Đen</option>
          <option value="be">Be</option>
          <option value="be">Trắng</option>
        </select>

        <label class="laber_form" for="size">Kích cỡ</label><br>
          <select name="size" id="size" >
            <option value="29">Kích cỡ</option>
            <option value="29">29</option>
            <option value="29">30</option>
            <option value="29">31</option>
            <option value="29">32</option>
            <option value="29">33</option>
          </select>

          <div class="buttons_added">
            <label class="laber_form" for="soluong">Số lượng</label> <br>
              <input type="button" class="max" id="dec" value="-">
                <input type="number" class="quanity"  max="10" min="1" value="1">
                  <input type="button" class="max" id="ice" value="+">
                  </div>
<div class="actionLoops visible-lg">
                      <span class="styleBtnBuys" >Thêm vào giỏ hàng</span>
                    <span class="styleBtnBuys" id="buyRightNow"  >
                      <span>Mua ngay</span>
                    </span>
                  </div>
                  <div class="share">Chia sẻ
                    <span><i class="fab fa-facebook"></i></span>
                    <span><i class="fab fa-twitter"></i></span>
                    <span><i class="fab fa-google-plus"></i></span>
                  </div>

                  <div class="policy">
                    <h3>Chính sách từ Tony4men</h3>
                    <ul>
                      <li>- Đổi hàng trong vòng 3 ngày.</li>
                      <li>- Giảm 10% trên tổng hóa đơn khi mua hàng ( tại cửa hàng ) vào tuần sinh nhật ( trước và sau ngày sinh nhật 3 ngày ).</li>
                      <li>- Giao hàng nội thành Hà Nội chỉ từ 15.000đ trong vòng 24 giờ.</li>
                      <li>- Tích điểm 3-10% giá trị đơn hàng cho mỗi lần mua và trừ tiền vào lần mua tiếp theo.</li>
                    </ul>
                  </div>
                </div>
              </div>
              `
  document.getElementById('row-products').insertAdjacentHTML('beforeend', xmlString);
}



function convertMoney(number) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)
}



getProducts()
let size = null;
let color = "";
let cart = [];
const selectSize = document.getElementById("size")
console.log(selectSize)
selectSize.addEventListener("change", () => {
  size = selectSize.value
  console.log(size)

})
const selectColor = document.querySelector(".color")
console.log(selectColor)
selectColor.addEventListener("change", () => {
  color = selectColor.value
  console.log(color)
})

console.log(size)
const dec = document.getElementById("dec")
const ice = document.getElementById("ice")
const quantity = document.querySelector(".quanity")
console.log(dec, ice)
dec.addEventListener("click", (e) => {
  var current = Number(quantity.value);
  var newval = (current - 1);
  if (newval < 1) {
    newval = 1;
  } else if (newval > 10) {
    newval = 10;
  }
  quantity.value = Number(newval);
  e.preventDefault();

})
ice.addEventListener("click", (e) => {
  var current = Number(quantity.value);
  var newval = (current + 1);
  if (newval > 10) newval = 10;
  quantity.value = Number(newval);
  e.preventDefault();
})
console.log(quantity.value)



const btnAddCart = document.querySelector(".styleBtnBuys")

btnAddCart.addEventListener("click", AddToCart)

function AddToCart() {

  if (size != null && color != "") {
    let storage = localStorage.getItem('cart')
    if (storage) {
      cart = JSON.parse(storage)
      let item = cart.find(e => e.product.id == product.id)
      if (item) {
        item.quantity += Number(quantity.value);
        item.size = size;
        item.color = color;
      }
    } else {
      cart.push({ product, quantity: Number(quantity.value), size: size, color: color })
    }


    localStorage.setItem("cart", JSON.stringify(cart))
  } else {
    alert("Chọn size và màu sắc trước khi nhấn mua hàng")
  }
}



const btnBuy = document.getElementById("buyRightNow")
btnBuy.addEventListener("click", Buy)
function Buy() {
  AddToCart()
  if (size != null && color != "") {
    window.location.href = './order.html';
  }
}


let storage = localStorage.getItem('cart')
cart = JSON.parse(storage)

console.log(cart);
function render() {

}


