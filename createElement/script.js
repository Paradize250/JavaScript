const button = document.querySelector("button");

button.addEventListener("click",()=>{
    const modal = document.createElement("div");
    modal.id = "modal";
    modal.innerText = "this is the content of the modal";
    document.body.append(modal);

})