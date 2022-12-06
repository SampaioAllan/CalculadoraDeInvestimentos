const index = require("../funcoesAllan/index");

test('Calcular a rentabilidade', () => {
    expect(index.calcularRentabilidade(1000, 2, 1).toBe(240));
});

test('Calcular a rentabilidade composta', () => {
    expect(index.calcularRentabilidadeComposta(1000, 2, 1).toBe(240.24));
});

test('Calcular a rentabilidade real', () => {
    expect(index.calcularRentabilidadeReal(8, 4).toBe(3.8));
});

test('Calcular a rentabilidade passada', () => {
    expect(index.calcularRentabilidadePassada(14, 9).toBe(55.55));
});