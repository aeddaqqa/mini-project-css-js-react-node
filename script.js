const imgs = document.querySelectorAll('.container .img-container img');
const imgContainer = document.querySelector('.container .img-container')
const imgsRight = document.querySelectorAll('.container-right .img-container img');
const imgContainerRight = document.querySelector('.container-right .img-container')
const imgsLeft = document.querySelectorAll('.container-left .img-container img');
const imgContainerLeft = document.querySelector('.container-left .img-container')

let index = 0;
let indexRight = 0;
let indexLeft = 0;

let interval = setInterval(imageSlider, 2000, 1);

function imageSlider (inc)
{
    index += inc;;
    indexLeft += inc;;
    indexRight += inc;;
    if (index > imgs.length - 1)
        index = 0;
    else if (index < 0)
        index = imgs.length - 1;

    if (indexRight > imgsRight.length - 1)
        indexRight = 0;
    else if (indexRight < 0)
        indexRight = imgsRight.length - 1;

    if (indexLeft > imgsLeft.length - 1)
        indexLeft = 0;
    else if (indexLeft < 0)
        indexLeft = imgsLeft.length - 1;

    let widthImage = imgs[index].clientWidth;
    imgContainer.style.transform = `translateX(${-index * widthImage}px)`
    imgContainerLeft.style.transform = `translateX(${-indexLeft * widthImage}px)`
    imgContainerRight.style.transform = `translateX(${-indexRight * widthImage}px)`
}

// rightBtn.addEventListener('click', () =>{
//     clearInterval(interval);
//     interval = setInterval(imageSlider, 2000, 1);
//     imageSlider(-1);
// })

// leftBtn.addEventListener('click', () =>{
//     clearInterval(interval);
//     interval = setInterval(imageSlider, 2000, 1);
//     imageSlider(1);
// })