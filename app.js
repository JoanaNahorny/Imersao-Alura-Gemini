console.log(personagens);

let section = document.getElementById("resultados-pesquisa");
console.log(section);

let resultados = "";

for (let personagem of personagens) {
    resultados += `
    <div class="item-resultado">
        <h2>
            <a href=${personagem.mais} target="_blank">${personagem.titulo}</a>
        </h2>
        <p class="descriicao-meta">${personagem.descricao}</p>
        <a href=${personagem.link} target="_blank">Mais informações</a>
    </div>
`
}

section.innerHTML = resultados
