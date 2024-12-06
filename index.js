const tarefas = [" Lavar roupas", " Fazer Compras "," Estudar"]
function remover1(){
    tarefas.splice(0, 1)
    alert(tarefas)
}
function remover2(){
    tarefas.splice(1, 1)
    alert(tarefas)
}
function remover3(){
    tarefas.splice(2, 1)
    alert(tarefas)
}
function adicionar(){
  let valor = document.getElementById("caixadetexto").value
  tarefas.unshift(valor)
  alert(tarefas)
}