let btn = document.querySelector('#highlight-product'),
    modal = document.querySelector('#modal');


btn.addEventListener('click' , getModelById);

function getModelById(){

    let fontSize = modal.firstElementChild.value,
        MODEL = modal.lastElementChild.value,
        productByModel = document.querySelector(`.phone-list-item[data-brand='${MODEL}']`);
        modal.classList.toggle('hide');

    if((fontSize) && productByModel){
        modal.classList.toggle('hide');
        productByModel.style.fontSize = (fontSize);
        productByModel.style.fontWeight = "bold";
    }else{
        if(fontSize && MODEL){
            fontSize = '';
            MODEL = '';
            alert('ჩანაწერი ვერ მოიძებნა');
          
        }
        
    }
    

    
    
    
}