var prevButton = document.querySelector('#product__view .buttons__slider .prev');
var nextButton = document.querySelector('#product__view .buttons__slider .next');
var images = document.querySelectorAll('#product__view .product__slider img');

var i = 0;

prevButton.onclick = function(){
    console.log('Кнопка нажата');
    images[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
};

if(i >= images.length){
   i = 0;
}
images[i].style.display = 'block';

nextButton.onclick = function(){
    console.log('Кнопка нажата');
    images[i].style.display = 'none';
    i++;
    if(i >= images.length){
        i = 0;
     }
     images[i].style.display = 'block';
};