// Calculadora de Partidas rankeadas

function calcularPartidasRankeadas(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    return {
        saldoVitorias,
        nivel,
    };
}

const jogadores = [
    { nome: 'Ector', vitorias: 14, derrotas: 3 },
    { nome: 'Brian', vitorias: 67, derrotas: 28 },
    { nome: 'Mary', vitorias: 102, derrotas: 23 },
];

for (let i = 0; i < jogadores.length; i++) {
    const jogador = jogadores[i];
    const resultado = calcularPartidasRankeadas(jogador.vitorias, jogador.derrotas);
    console.log(
        `O ${jogador.nome} tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`
    );
}