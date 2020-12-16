const endpoint = "https://viacep.com.br/ws/value/json/"
const form = document.getElementsByClassName('form');
const button = document.querySelector('button');
const cep = document.getElementById('cep');
const adress = document.getElementById('adress');
const city = document.getElementById('city');
const state = document.getElementById('state');
const nome = document.getElementById('name');

async function getCep(pesquisa){
    const response = await fetch(pesquisa);
    const result = await response.json();

    return result;
}


console.log(getCep(endpoint.replace('value', cep.value)));



// function fillInputs(pesquisa){
//     const result = getCep(pesquisa);

//     console.log(result)
//     adress.value = result['logradouro'];
//     city.value = result['localidade'];
//     state.value = result['uf'];
// }

// cep.addEventListener('blur', function(event){
//     event.preventDefault();
//     let url = endpoint.replace('value', cep.value);

//     fillInputs(url);
// })


