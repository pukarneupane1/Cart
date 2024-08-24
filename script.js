var product = [
    {
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        headline: "soft like cloud",
        name: "White watch",
        price: "$1500"
    },
    {
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        headline: "3D music feels",
        name: "black headphone",
        price: "$1000"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        headline: "iphone bags",
        name: "bag",
        price: "$9000"
    }
];

var popular = [
    {
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        headline: "Smells like oranges",
        name: "perfume",
        price: "$150"
    },
    {
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        headline: "Capture the reality",
        name: "old camera",
        price: "$1800"
    },
    {
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        headline: "set foots with tehran",
        name: "High heels",
        price: "$900"
    }
];

var cart = [];

function addproduct() {
    var clutter = "";
    product.forEach(function (product, index) {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
             <img class="w-full h-full object-cover" src = "${product.image}" />   
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">${product.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}" 
                                class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
    })

    document.querySelector(".products").innerHTML = clutter;
}

function popularProduct() {
    var clutter = "";
    popular.forEach(function (popular) {
        clutter += ` <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${popular.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${popular.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${popular.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${popular.price}</h4>
                    </div>
                </div>`;


    })

    document.querySelector(".populars").innerHTML = clutter;
}

function addToCart() {
    document.querySelector(".products").addEventListener("click", function (details) {
        if (details.target.classList.contains('add')) {

            cart.push(product[details.target.dataset.index])
        }
    })
}
function showcart() {
    document.querySelector(".carticon").addEventListener("click", function () {
        document.querySelector(".cartexpnd").style.display = "block";

        var clutter = "";
        cart.forEach(function (prod, index) {
            clutter += ` <div class="flex gap-2 bg-white p-2 rounded-lg">
                    <div class="w-10 h-10 flex-shrink-0 rounded-lg   overflow-hidden">
                    <img class="w-full h-full object-cover" src="${prod.image}" />
                    </div>
                    <div>
                        <h3 class="font-semibold">${prod.name}</h3>
                        <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
                    </div>
                </div>`
        })
        document.querySelector(".cartexpnd").innerHTML = clutter;
    })
}
addproduct();
popularProduct();
addToCart();
showcart();