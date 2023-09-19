    redeemCoupon()
    function redeemCoupon(){
        const cupon = document.getElementById('cupon');
        const btn = document.getElementById('btn');

        btn.addEventListener('click', () =>{
            cupon.classList.remove('hidden')
        });
        btn.addEventListener('dblclick', () => {
            cupon.classList.add('hidden')
        });


       


        const pay = document.getElementById('btnPay');
        const textPrice = document.getElementById('textPrice');

        
       pay.addEventListener('click', () => {

        const contentCupon = document.getElementById('contentCupon').value;
        
        let discount;

        let cupons = {
            'ellygmr':  50,
            'jejo':     35,
            'secret':   60,
            'ikselly':  90,
        }

        textPrice.innerText = "$0";

        if (cupons[contentCupon]) {
            discount = cupons[contentCupon];


        let price = 150;
        const newPrice = (price * (100 - discount)) / 100;

            textPrice.innerText = newPrice;

        } else {
            textPrice.innerText = '$0';
        }



       });


       

    }
