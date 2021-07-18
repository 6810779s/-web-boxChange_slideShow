let Slide__Container = document.querySelector(".wrap__mainBox .Slide__Container");
let rightSlide__Container = document.querySelector(".wrap_rightBox .Slide__Container");
let currentIdx=0;
let currentIdx_Right = 0;
let slide = document.querySelectorAll(".wrap__mainBox .Slide__Container .slide");
let slide__right = document.querySelectorAll(".wrap_rightBox .Slide__Container .slide");
let slideCount = slide.length;
let slideHeight = 300;
let slideWidth = 300;

makeClone();
initfunction();

function makeClone(){
  let cloneSlide_first = Slide__Container.firstElementChild.cloneNode(true);
  let cloneSlide_second = document.querySelector(".wrap__mainBox .Slide__Container .slide:nth-child(2)").cloneNode(true);
  let cloneRightSlide_first = rightSlide__Container.firstElementChild.cloneNode(true);
  let cloneRightSlide_second = document.querySelector(".wrap_rightBox .Slide__Container .slide:nth-child(2)").cloneNode(true);
  let cloneRightSlide_third = document.querySelector(".wrap_rightBox .Slide__Container .slide:nth-child(3)").cloneNode(true);
  let cloneRightSlide_fourth= document.querySelector(".wrap_rightBox .Slide__Container .slide:nth-child(4)").cloneNode(true);
  Slide__Container.append(cloneSlide_first);
  Slide__Container.append(cloneSlide_second);
  rightSlide__Container.append(cloneRightSlide_first);
  rightSlide__Container.append(cloneRightSlide_second);
  rightSlide__Container.append(cloneRightSlide_third);
  rightSlide__Container.append(cloneRightSlide_fourth);
}

function initfunction(){
  Slide__Container.style.height = slideHeight*(slideCount+2) + "px";
  Slide__Container.style.top = slideHeight*2+ "px";
  rightSlide__Container.style.width = slideWidth*(slideCount*2) + "px"
}

setInterval(function(){
  if (currentIdx<=slideCount+2){
    Slide__Container.style.top = (slideHeight*2)-(currentIdx*slideHeight) + "px";
    Slide__Container.style.transition = `${1}s ease-out`;
  }if (currentIdx===slideCount+2){
    setTimeout(function(){
      Slide__Container.style.top = 0 + "px";
      Slide__Container.style.transition = `${0}s ease-out`;
    },1000);
    currentIdx=1;
  }
  currentIdx++;
},2000); //슬라이드쇼가 1초후에 한번씩 실행되므로 마지막 슬라이드일때 1초 늦어짐.

setInterval(function(){
  if (currentIdx_Right<=slideCount+2){
    rightSlide__Container.style.left = -(slideWidth*currentIdx_Right) + "px";
    rightSlide__Container.style.transition = `${1}s ease-out`;
  }if (currentIdx_Right===slideCount+2){
    setTimeout(function(){
      rightSlide__Container.style.left = -slideWidth*2 +"px";
      rightSlide__Container.style.transition = `${0}s ease-out`;
    },1000);
    currentIdx_Right=1;
  }
  currentIdx_Right++;
},2000);