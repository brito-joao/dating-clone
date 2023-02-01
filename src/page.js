export function apiFetch(gender){
    
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

export function createMenu(){
    console.log("this is the menu");
}
export function options(){
    const body= document.querySelector("body");
    const img=document.createElement("img");
    const black_background=document.createElement("div");
    black_background.setAttribute("class","blackscreen");
    img.src="https://images.unsplash.com/photo-1517957096399-3a4e3d34d95e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
    img.setAttribute("class","background");
    const welcome=document.createElement("p");
    welcome.innerText="Find your love";
    welcome.setAttribute("class","welcome");
    const label=document.createElement("p");

    label.innerText="I am:";
    const button1=document.createElement("button");
    const button2=document.createElement("button");
    const button3=document.createElement("button");
    label.setAttribute("class","label");
    button1.setAttribute("class","male");
    button2.setAttribute("class","female");
    button3.setAttribute("class","other");
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
    body.appendChild(button3);
    body.appendChild(black_background);
    body.appendChild(img);
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
    
    fetch(`https://randomuser.me/api/?gender=${gender}?nat=us`)
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
  