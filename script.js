const container=document.querySelector(".container");
let btn= container.querySelector(".form button");
let Input=container.querySelector(".form input");
let qrimg=container.querySelector(".qr_code img")
btn.addEventListener("click",() => {
    let qrinput=Input.value.trim();
    console.log(Input);
    
    container.classList.add("active");
    box.src=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrinput}`;
    
});