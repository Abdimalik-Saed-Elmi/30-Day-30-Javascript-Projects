let ToastBox = document.getElementById("ToastBox");


function ShowToast(){
    
let Toast = document.createElement("div")
Toast.classList.add("Toast");
Toast.innerHTML = "Success";
ToastBox.appendChild(Toast);
}