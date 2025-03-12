function calculate(notas) {
    if (notas.length === 0) throw new Error('Não existe notas aqui')
    const soma = notas.reduce((acc, nota) => acc + nota, 0)
    return soma / notas.length
  }
  
  function aprovaçao(media) {
    return media >= 6 ? 'Aprovado' : 'Reprovado'
  }
  
  function addNotas(notas, novaNota) {
    if (novaNota < 0 || novaNota > 10) throw new Error('Nota inválida')
    return [...notas, novaNota]
  }
  
  module.exports = { calculate, aprovaçao, addNotas }