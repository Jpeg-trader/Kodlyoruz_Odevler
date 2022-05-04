let Name = prompt("Adiniz Nedir");
let myName= document.querySelector("#myName")

myName.innerHTML = `${Name.toUpperCase()}!`

function time() {
    var date = new Date().toLocaleString();
    document.querySelector("#myClock").innerHTML = date;
}


const d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.querySelector("#myDay").innerHTML = days[d.getDay()];


setInterval(time, 1000); 
