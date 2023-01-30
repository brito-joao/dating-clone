export function apiFetch(gender){
    const body=document.querySelector("body");
    body.innerHTML="";
    const img = document.createElement('img');
    console.log("page");
    fetch(`https://fakeface.rest/face/json?minimum_age=18&gender=${gender}`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.image_url;
      
    });

    img.setAttribute("class","face");

    body.appendChild(img);
    const button=document.createElement("button");
    
    button.innerText="Next";
    button.addEventListener("click",()=>{
        apiFetch(gender);
    })
    body.appendChild(button);
    return img;
}

export function createMenu(){
    console.log("this is the menu");
}
export function options(){
    const body= document.querySelector("body");
    const label=document.createElement("p");
    label.innerText="Are you:";
    const button1=document.createElement("button");
    const button2=document.createElement("button");
    button1.innerText="Male";
    button2.innerText="Female";
    let is_male=true;
    button1.addEventListener("click",()=>{
        apiFetch("female");
    })
    button2.addEventListener("click",()=>{
        apiFetch("male");
    })
    body.appendChild(label);
    body.appendChild(button1);
    body.appendChild(button2);
}