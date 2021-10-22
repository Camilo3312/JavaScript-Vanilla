
const products = [
    {
        id: 1,
        name: 'Arroz',
        price: 2000,
        image: 'images/arroz.webp'
    },
    {
        id: 2,
        name: 'frijoles',
        price: 2200,
        image: 'images/frijol.jpg'
    },
    {
        id: 3,
        name: 'Garvanzos',
        price: 2000,
        image: 'images/garbanzos.jpg'
    },
    {
        id: 4,
        name: 'Alverjas',
        price: 2200,
        image: 'images/alverja.jpg'
    }
];

let carrito = [];
const container = document.querySelector('.container_prducts');
const container_cart = document.querySelector('.container_cart');
const cont_products = document.querySelector('.cont');
const container_btn_cart = document.querySelector('.cart');

function renderizarProductos() {
    products.forEach((info) => {
        const card = document.createElement('div');
        const container_image_product = document.createElement('div');
        const container_info_product = document.createElement('div');
        const image_product = document.createElement('img');
        const name_product = document.createElement('h2');
        const price = document.createElement('p');

        const add_product_cart = document.createElement('button');

        add_product_cart.textContent = 'Agregar al carrito';
        name_product.textContent = info.name;
        price.textContent = info.price;
        image_product.setAttribute('src', info.image);                   
        add_product_cart.setAttribute('marcador', info.id);
        add_product_cart.addEventListener('click', addCart);
        card.classList.add('card');
        container_image_product.classList.add('container_image_product');
        add_product_cart.classList.add('btn_add_cart');
        container_info_product.classList.add('container_info_product');

        container_image_product.appendChild(image_product);
        container_info_product.appendChild(name_product);
        container_info_product.appendChild(price);
        container_info_product.appendChild(add_product_cart);
        card.appendChild(container_image_product);
        card.appendChild(container_info_product);
        container.appendChild(card);           
    });
}

function addCart(e) {
    carrito.push(e.target.getAttribute('marcador'));
    renderCart();         
}

function clearCart() {
    carrito = [];
    renderCart();
}

function renderCart() {               
    container_cart.innerHTML = '';
    const reset_cart = [...new Set(carrito)];
    cont_products.textContent = carrito.length;
    reset_cart.forEach((item) => {

        const items = products.filter((item_products) => {                        
            return item_products.id === parseInt(item);
        });    

        const card_product = document.createElement('div');
        const image_prduct = document.createElement('img');
        const name = document.createElement('p');
        const price = document.createElement('p');
        const cuanty = document.createElement('p');
        const btn_add = document.createElement('button');
        const btn_remove = document.createElement('button');
        const btn_remove_product = document.createElement('button');

        card_product.classList.add('card_product_cart');
        btn_remove.classList.add('btn_remove');
        btn_add.classList.add('btn_add');
        btn_remove_product.classList.add('btn_remove_element')
        image_prduct.setAttribute('src', items[0].image);
        name.textContent = items[0].name;
        price.textContent = items[0].price;
        cuanty.textContent = carrito.length;
        btn_add.textContent = '+';
        btn_add.setAttribute('marcador', items[0].id);
        btn_remove.textContent = '-';
        btn_remove_product.textContent = 'X';

        
        card_product.appendChild(image_prduct);
        card_product.appendChild(name);
        card_product.appendChild(price);
        card_product.appendChild(cuanty);
        card_product.appendChild(btn_add);
        card_product.appendChild(btn_remove);
        card_product.appendChild(btn_remove_product)

        container_cart.appendChild(card_product);

        btn_remove_product.dataset.item = item;
        btn_remove.dataset.item = item;

        btn_add.addEventListener('click', add);
        btn_remove.addEventListener('click', remove);
        btn_add.addEventListener('click', removeProduct);
        btn_remove_product.addEventListener('click', removeProduct)
    });

    const clear_cart = document.createElement('button');
    clear_cart.classList.add('btn_clear_cart');
        
    clear_cart.textContent = 'Limpiar carrito';
    // clear_cart.dataset.item = item;
    container_cart.appendChild(clear_cart);


    clear_cart.addEventListener('click',clearCart)
}

function add(e) {
    carrito.push(e.target.getAttribute('marcador'));
    renderCart();   
}
    
function remove(e) {
    const id = e.target.dataset.item;             
    let index = carrito.indexOf(id);
    console.log(carrito);
    console.log(index);
    carrito.splice(index, 1)
    renderCart()
}

function removeProduct(e) {
    const id = e.target.dataset.item;
    carrito = carrito.filter((carritoId)=> {
        return carritoId !== id;
    });
    renderCart();
}

container_btn_cart.addEventListener('mouseover', ()=> {
    container_cart.style.display = 'block';
})

renderizarProductos();

