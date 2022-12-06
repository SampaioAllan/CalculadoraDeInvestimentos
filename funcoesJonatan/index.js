function calcularRentabilidade(c, i, t)
{
    i = i / 100;
    t = t * 12;

    let J = c * i *t;
    return parseFloat(J).toFixed(2);
}

function calcularRentabilidadeComposta(c, i, t)
{
    i = i / 100;
    t = t * 12;

    let M = c * (1 + i)**t;
    return parseFloat(M - c).toFixed(2);
}

function calcularRentabilidadeReal(r, i)
{
    r = r / 100;
    i = i / 100;

    let R = ((1 + r) / (1 + i) - 1) * 100;
    return parseFloat(R).toFixed(1);
}

function calcularRentabilidadePassada(PA, PP)
{
    let R = (PA / PP) * 100 - 100;
    return parseFloat(R).toFixed(2);
}

module.exports = {calcularRentabilidade, calcularRentabilidadeComposta, calcularRentabilidadeReal, calcularRentabilidadePassada};