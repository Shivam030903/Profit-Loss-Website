const calculate = document.getElementById('calculate')


const calculation = ()=>{
    
    let initial_price = document.getElementById('initial_price').value
    let quantity = document.getElementById('quantity').value
    let current_price = document.getElementById('current_price').value
    let message = document.getElementById('message');
    let body = document.getElementById('body')

    if( initial_price == '' || quantity == '' || current_price == ''){
        message.style.visibility = 'visible'
    }else{
        initial_price = parseFloat(initial_price)
        quantity = parseFloat(quantity)
        current_price = parseFloat(current_price)



        
        if(current_price > initial_price ){
            let profitamount = (current_price*quantity) - (initial_price * quantity);
            let profit = current_price - initial_price; 
            let profitPercentage = (profit*100) / initial_price;
            body.style.backgroundColor = '#047857';

            message.innerText = `The profit is ${profitamount} and profit prcentage is ${profitPercentage}%`;
            message.style.visibility = 'visible'

        }else if(current_price < initial_price){
            let lossamount =  (initial_price * quantity) -
            (current_price*quantity) ;
            let loss =  initial_price - current_price  ; 
            let lossPercentage = (loss*100)/initial_price;
            body.style.backgroundColor = '#BE123C';

            message.innerText = `The profit is ${lossamount} and profit prcentage is ${lossPercentage}%`;
            message.style.visibility = 'visible'
        }
        else{
            message.innerText = 'No pain no gain, no gain no pain'
        }

    }



}

calculate.addEventListener('click', calculation)