const menu = document.querySelector('#menu')
const navinit = document.getElementById('navinit')

menu.addEventListener('click', () => {
    navinit.classList.toggle('mostrarNavegacao')
})


const petName = document.querySelector('#petName')
const breed = document.querySelector('#breed')
const weight = document.querySelector('#weight')
const age = document.querySelector('#age')



document.getElementById('petForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert(`${'valores que foram cadastrados:'}\nNome: ${petName.value}\nRaça: ${breed.value}\nPeso: ${weight.value}\nIdade: ${age.value}`);

    this.reset();
});



    
function open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
}

function close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}


    const carrinho = document.querySelector(".carrinho")
carrinho.addEventListener("click", () => {
    alert("Ocorreu um erro, tente novamente mais tarde!");});
const carrinhoz = document.querySelector(".carrinhos")
carrinhoz.addEventListener("click", () => {
    alert("Ocorreu um erro, tente novamente mais tarde!");});
const carrinhoy = document.querySelector(".carrinhoss")
carrinhoy.addEventListener("click", () => {
    alert("Ocorreu um erro, tente novamente mais tarde!");});
