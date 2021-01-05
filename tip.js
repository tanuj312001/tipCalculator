document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#tip').style.display='none';
    document.querySelector('#button').addEventListener('click',calTip);
});



//function to calculate tip
function calTip(){
 
    var bill=document.querySelector('#billamt').value;
    var service=document.querySelector('#service').value;
    var people=document.querySelector('#people').value;
    //validate the input 

    if (bill==''|| people==''||service==0){
    alert('Please enter some values');
    return;
    }
    document.querySelector('#tip').style.display='block';

    //calculating the tip
    var total=(bill*service)/people;
    total = total.toFixed(2);
    document.querySelector('#total').innerHTML=`$ ${total}`;

    
}