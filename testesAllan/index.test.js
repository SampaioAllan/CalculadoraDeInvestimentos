const calculadora = require("../funcoesJonatan/index")


test('1000 reais deve render 240.00 em 1 ano com uma taxa de 2%', () => {
    expect(calculadora.calcularRentabilidade(1000, 2, 1)).toBe("240.00");
  });


test('1000 reais deve render 268.24 em 1 ano com uma taxa de 2%', () => {
    expect(calculadora.calcularRentabilidadeComposta(1000, 2, 1)).toBe("268.24");
  });


  test('8% de rentabilidade e 4% de inflação deve ter 3.8% de rentabilidade real', () => {
    expect(calculadora.calcularRentabilidadeReal(8, 4)).toBe("3.8");
  });


  test('preço atual de 14 e preço passado de 9 deve ter rendimento de 55.56', () => {
    expect(calculadora.calcularRentabilidadePassada(14, 9)).toBe("55.56");
  });