





  



function criar(){
    let nome = prompt('Nome do jogar a ser colocado')
    let numero = prompt('Numero do jogador')
    let posicao = prompt('Posição do jogador')
    let escalar = confirm('Deseja Escalar esse jogador ?')
    
 let  text = `jogador:${nome},posição:${posicao},numero:${numero}`

   if(escalar === true){
let  lista = document.querySelector('.time')
 let casa = document.createElement('li')
 console.log(casa)
 casa.innerText = text 
 casa.id = numero
 console.log(casa.id)

 lista.appendChild(casa)
   }else(alert('Clique no botão caso queira adicionar um jogador'))



console.log(lista)



}







function apagar(){ 
   let select = prompt('Qual o numero do jogador que vc deseja retirar ?')
  let  number = document.getElementById(select)
  number.remove()
    
}