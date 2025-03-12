const { calculate, aprovaçao, addNotas } = require('../src/notas')

describe('Sistema de Notas Escolares', () => {
  let notas

  beforeEach(() => {
    notas = [7, 8, 9]
  })

  test('Calcula a média corretamente', () => {
    expect(calculate(notas)).toBe(8)
  })

  test('aprovação', () => {
    expect(aprovaçao(calculate(notas))).toBe('Aprovado')
  })

  test('reprovação', () => {
    expect(aprovaçao(calculate([5, 5, 5]))).toBe('Reprovado')
  })

  test('Adiciona nova nota ao array', () => {
    const novasNotas = addNotas(notas, 10)
    expect(novasNotas).toEqual([7, 8, 9, 10])
  })
})