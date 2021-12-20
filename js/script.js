document.getElementById('memory-small').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 0;
    getTotal()
})
document.getElementById('memory-big').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 180;
    getTotal()
})

                // storage cost calculation

document.getElementById('storage-small').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 0;
    getTotal()
})
document.getElementById('storage-medium').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 100;
    getTotal()
})
document.getElementById('storage-big').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 180;
    getTotal()
})

                // Delivary cost

document.getElementById('delivary-free').addEventListener('click', function(){
    const delivaryCost = document.getElementById('delivary-cost');
    delivaryCost.innerText = 0;
    getTotal()
})
document.getElementById('delivary-paid').addEventListener('click', function(){
    const delivaryCost = document.getElementById('delivary-cost');
    delivaryCost.innerText = 20;
    getTotal()
})

            // Total calculation
function getTotal(){
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const delivaryCost = document.getElementById('delivary-cost').innerText;
    const totalCost = 1299 + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(delivaryCost);
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalCost;
}
document.getElementById('apply').addEventListener('click', function(){
    getTotal();
    const promoApply = document.getElementById('promo').value;
    const grandPrice = document.getElementById('grand-price');
    if(promoApply == 'stevekaku'){
        grandPrice.innerText = totalCost*4/5;
    }else{
        grandPrice.innerText = totalCost;
    }
})