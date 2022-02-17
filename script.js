var teDia = document.querySelector("#dias")
var teHora = document.querySelector("#horas")
var teMinuto = document.querySelector("#minutos")
var teSegundo = document.querySelector("#segundos")
var campoTarefa = document.querySelector("#tarefa")
var lenbreteTarefa = document.querySelector("#res")
var lenbreteData = document.querySelector("#dataTarefa")

function calcular(){

    var data = document.querySelector("#data").value
    var fdata = new Date(data)
    let dataAtual = new Date()
    
    fdata < dataAtual ? checar() : 
    data == "" ? checar() : 
    lenbreteTarefa.innerHTML = campoTarefa.value
    
    const atualizar = () =>{
        var tempoAtual = new Date()
        var disferencaTempo = fdata - tempoAtual
        var dias = Math.floor(disferencaTempo / 1000 / 60 / 60 / 24)
        var horas = Math.floor(disferencaTempo / 1000 / 60 / 60) % 24
        var minutos = Math.floor(disferencaTempo / 1000 / 60) % 60
        var segundos = Math.floor(disferencaTempo / 1000) % 60

        teSegundo.textContent = segundos < 10 ? "0" + segundos : segundos
        teMinuto.textContent = minutos < 10 ? "0" + minutos : minutos
        teHora.textContent = horas < 10 ? "0" + horas : horas
        teDia.textContent = dias < 10 ? "0" + dias : dias
    
        console.log({dias,horas,minutos,segundos})
    }

    setInterval(atualizar, 1000)

}

var resetContador = () => {document.location.reload()}

var checar = () => {
    alert("Insira uma data valida: datas anteriores a data prezente não são validas")
    document.location.reload()
}
