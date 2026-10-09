document.addEventListener("DOMContentLoaded", () => {
    const pagina = document.body.dataset.page;
    if (pagina === "curriculo") renderCurriculo();
    if (pagina === "projetos") renderProjetos();
});

/* ---------- PÁGINA DE PROJETOS ---------- */

function cardProjeto(p) {
    const imagem = p.imagem
        ? `<img class="projeto-img" src="${p.imagem}" alt="Interface: ${p.titulo}">`
        : "";
    const papel = p.papel ? `<span class="papel">${p.papel}</span>` : "";
    const tags = p.tecnologias.map(t => `<span>${t}</span>`).join("");
    const codigo = p.codigo
        ? `<a class="code-link" href="${p.codigo}" target="_blank" rel="noopener noreferrer">Acessar código</a>`
        : "";

    return `
        <article class="projeto">
            ${imagem}
            <div class="projeto-corpo">
                <h2>${p.titulo}</h2>
                ${papel}
                ${p.descricao.map(d => `<p>${d}</p>`).join("")}
                <div class="tags">${tags}</div>
                ${codigo}
            </div>
        </article>`;
}

function renderProjetos() {
    const academicos = DADOS.projetos.filter(p => p.tipo === "academico");
    const pessoais = DADOS.projetos.filter(p => p.tipo === "pessoal");

    document.getElementById("lista-academicos").innerHTML =
        academicos.map(cardProjeto).join("");

    document.getElementById("lista-pessoais").innerHTML = pessoais.length
        ? pessoais.map(cardProjeto).join("")
        : `<p class="empty-message">Ainda não há projetos pessoais publicados...<br>Em breve novas ideias estarão por aqui.</p>`;
}

function showTab(tabName, botao) {
    const isAcademico = tabName === "academic";
    document.getElementById("academic-projects").style.display = isAcademico ? "block" : "none";
    document.getElementById("personal-projects").style.display = isAcademico ? "none" : "block";

    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    botao.classList.add("active");
}

/* ---------- PÁGINA DE INFORMAÇÕES (CURRÍCULO) ---------- */

function renderCurriculo() {
    const p = DADOS.perfil;

    const contatos = `
        <a href="${p.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="${p.github}" target="_blank" rel="noopener noreferrer">GitHub</a>`;

    const idiomas = DADOS.idiomas
        .map(i => `<p class="idioma"><strong>${i.nome}</strong> · ${i.nivel}</p>`)
        .join("");

    const habilidades = DADOS.habilidades.map(h => `<span>${h}</span>`).join("");

    const formacao = DADOS.formacao.map(f => `
        <div class="timeline-item">
            <h4>${f.titulo}</h4>
            <p class="meta">${f.instituicao}${f.periodo ? " · " + f.periodo : ""}</p>
        </div>`).join("");

    document.getElementById("cv-sidebar").innerHTML = `
        <div class="cv-nome">
            <h1>${p.nome}</h1>
            <p>${p.titulo}</p>
            <span class="local">${p.localizacao}</span>
        </div>
        <section>
            <h3>Contato</h3>
            <div class="contato">${contatos}</div>
        </section>
        <section>
            <h3>Idiomas</h3>
            ${idiomas}
        </section>
        <section>
            <h3>Habilidades</h3>
            <div class="chips">${habilidades}</div>
        </section>`;

    document.getElementById("cv-main").innerHTML = `
        <section>
            <h3>Sobre mim</h3>
            <p class="sobre">${p.sobre}</p>
        </section>
        <section>
            <h3>Formação</h3>
            <div class="timeline">${formacao}</div>
        </section>`;
}