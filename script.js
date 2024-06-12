const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')


focoBt.addEventListener('click', () =>{
    alterarContexto('foco')
})

curtoBt.addEventListener('click',() => {
    alterarContexto('descanso-curto')
})

longoBt.addEventListener('click', () =>{
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto){
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src',`/imagens/${contexto}.png`)
    switch (contexto) {
        case "focos":
            titulo.innerHTML =`
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `    
            break;
        case "descanso_curto":
            titulo.innerHTML = `
            que tal dar uma respirada?<strong class="app__title-strong">faça uma pausa curta.</strong>
            `
            break;
        case"descanso_longo":
            titulo.innerHTML = `
            Hora de Voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
        default:
            break;
    }
}