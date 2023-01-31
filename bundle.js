/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiFetch": () => (/* binding */ apiFetch),
/* harmony export */   "createMenu": () => (/* binding */ createMenu),
/* harmony export */   "options": () => (/* binding */ options)
/* harmony export */ });
function apiFetch(gender){
    
    const img = document.createElement('img');
    let  age=document.createElement("p");
    
    fetch(`https://fakeface.rest/face/json?minimum_age=18&gender=${gender}`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.image_url;
      
      age.innerText=response.age;
      
    });

    img.setAttribute("class","face");

    
    
    
    
    return [img,age];
}

function createMenu(){
    console.log("this is the menu");
}
function options(){
    const body= document.querySelector("body");
    const welcome=document.createElement("p");
    welcome.innerText="Welcome to the best dating website!";
    const label=document.createElement("p");

    label.innerText="I am:";
    const button1=document.createElement("button");
    const button2=document.createElement("button");
    const button3=document.createElement("button");
    button1.innerText="Male";
    button2.innerText="Female";
    button3.innerText="Other";
    let is_male=true;
    button1.addEventListener("click",()=>{
        faceElementCreator("female");
    })
    button2.addEventListener("click",()=>{
        faceElementCreator("male");
    });
    button3.addEventListener("click",()=>{
        animalElementCreator();
    })
    body.appendChild(welcome);
    body.appendChild(label);
    body.appendChild(button1);
    body.appendChild(button2);
    body.appendChild(button3)
}


function animalElementCreator(){
    const body=document.querySelector("body");
    body.innerHTML="";
    const img=document.createElement("img");
    fetch("http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true")
      .then(function(response){
        return response.json();
      })
      .then(function(response){
        img.src=response;
      })

    img.setAttribute("class","face");
    body.appendChild(img);


    const button=document.createElement("button");
    button.innerText="Next";
    button.addEventListener("click",()=>{
        animalElementCreator();
    })
    body.appendChild(button);
    return img;
}

function personInfoFetch(gender){
    const name=document.createElement("p");
    name.innerText="Person Name";
    
    fetch(`https://randomuser.me/api/?gender=${gender}`)
      .then(function(response){
        return response.json();
      })
      .then(function(response){
        
        name.innerText=`${response.results[0].name.first} ${response.results[0].name.last}`;
        
      })
    

    return name;
    
}
function faceElementCreator(gender){
    const body=document.querySelector("body");
    const div1=document.createElement("div");
    const div2=document.createElement("div");
    const button_right=document.createElement("button");
    const button_left=document.createElement("button");
    const button_star=document.createElement("button");
    body.innerHTML="";
    let image=apiFetch(gender);

    div1.setAttribute("class","info");
    div2.setAttribute("class","buttons");
    let person_info=personInfoFetch(gender);
    

    imageSwipeEventListener(image[0],gender);


    
    
    //name.innerText=person_info.name;
    
    button_left.innerText="❌";
    button_star.innerText="⭐";
    button_right.innerText="🧡";
    button_right.addEventListener("click",()=>{
        faceElementCreator(gender);
    });
    button_left.addEventListener("click",()=>{
        faceElementCreator(gender);
    })

    
    body.appendChild(image[0]);
    div1.appendChild(person_info);
    div1.appendChild(image[1]);
    body.appendChild(div1);
    div2.appendChild(button_left);
    div2.appendChild(button_star);
    div2.appendChild(button_right);
    body.appendChild(div2);
}

function imageSwipeEventListener(image,gender){
    let xDown=null;
    let yDown=null;

    let image_element=image;
    image.addEventListener("touchstart",handleTouchStart);
    image.addEventListener("touchend", (event)=>{
        if(!xDown || !yDown){
            return;
        }
        console.log(event);
        const xUp= event.changedTouches[0].clientX;
        const yUp=event.changedTouches[0].clientY;

        const xDifference= xDown - xUp;
        const yDifference= yDown -yUp;

        if(Math.abs(xDifference)> Math.abs(yDifference)){
            xDifference>0?faceElementCreator(gender):faceElementCreator(gender);
        }
        xDown= null;
        yDown= null;
    });

    function handleTouchStart(event){

        xDown=event.touches[0].clientX;
        yDown=event.touches[0].clientY;
    }
    
}

        
    
function swipeAnimation(left_right){
    const image=document.querySelector(".face");

    image.style.animation="horizontal 2s linear infinite";

    let left=0;
    let direction= -1;
    animate(left,direction,image);

}

function animate(left,direction,image) {
    left += 5 * direction;
    
    if (left <= 0 || left >= window.innerWidth - image.offsetWidth) {
      direction *= -1;
      if (left >= window.innerWidth - image.offsetWidth) {
        return;
      }
    }
    image.style.left = left + "px";
    requestAnimationFrame(animate);
  }
  

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


(0,_page__WEBPACK_IMPORTED_MODULE_0__.options)();
})();

/******/ })()
;