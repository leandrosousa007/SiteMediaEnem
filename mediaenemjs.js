function req() {
    var a1 = parseFloat(document.getElementById("v1").value);
    var a2 = parseFloat(document.getElementById("v2").value);
    var a3 = parseFloat(document.getElementById("v3").value);
    var a4 = parseFloat(document.getElementById("v4").value);
    var a5 = parseFloat(document.getElementById("v5").value);

    var curso = document.getElementById("va").value;
    var modalidade = document.getElementById("mod1").value;

    var mp = 0;
    var mpn = 0;
    var ms = (a1 + a2 + a3 + a4 + a5) / 5;

    // Pesos específicos para cada curso e modalidade
    var pesos = {
        "CC": { "LI_PPI": [1, 1, 2, 2, 2], "LI_EP": [1, 1, 2, 2, 2], "AC": [1, 1, 2, 2, 2] },
        "BIO": { "LI_PPI": [1, 1, 2, 1, 1], "LI_EP": [1, 1, 2, 1, 1], "AC": [1, 1, 2, 1, 1] },
        "EDF": { "LI_PPI": [1, 1, 2, 1, 1], "LI_EP": [1, 1, 2, 1, 1], "AC": [1, 1, 2, 1, 1] },
        "ENGC": { "LI_PPI": [1, 1, 2, 2, 2], "LI_EP": [1, 1, 2, 2, 2], "AC": [1, 1, 2, 2, 2] },
        "ENF": { "LI_PPI": [1, 1, 2, 1, 1], "LI_EP": [1, 1, 2, 1, 1], "AC": [1, 1, 2, 1, 1] },
        "GES": { "LI_PPI": [1, 1, 2, 1, 1], "LI_EP": [1, 1, 2, 1, 1], "AC": [1, 1, 2, 1, 1] },
        "JON": { "LI_PPI": [1, 1, 2, 1, 1], "LI_EP": [1, 1, 2, 1, 1], "AC": [1, 1, 2, 1, 1] },
        "MED": { "LI_PPI": [1, 1, 2, 2, 2], "LI_EP": [1, 1, 2, 2, 2], "AC": [1, 1, 2, 2, 2] },
        "NUT": { "LI_PPI": [1, 1, 2, 1, 1], "LI_EP": [1, 1, 2, 1, 1], "AC": [1, 1, 2, 1, 1] },
        "ODO": { "LI_PPI": [1, 1, 2, 2, 2], "LI_EP": [1, 1, 2, 2, 2], "AC": [1, 1, 2, 2, 2] },
        "RI": { "LI_PPI": [1, 1, 1, 1, 1], "LI_EP": [1, 1, 1, 1, 1], "AC": [1, 1, 1, 1, 1] },
        "SI": { "LI_PPI": [1, 1, 2, 2, 2], "LI_EP": [1, 1, 2, 2, 2], "AC": [1, 1, 2, 2, 2] },
        "m": { "LI_PPI": [1, 1, 1, 1, 1], "LI_EP": [1, 1, 1, 1, 1], "AC": [1, 1, 1, 1, 1] },
        "DIRM": { "LI_PPI": [1, 1, 2, 2, 2], "LI_EP": [1, 1, 2, 2, 2], "AC": [1, 1, 2, 2, 2] }, // Curso DIRM (Matutino)
        "DIRN": { "LI_PPI": [1, 1, 2, 2, 2], "LI_EP": [1, 1, 2, 2, 2], "AC": [1, 1, 2, 2, 2] }, // Curso DIRN (Noturno)
        "ADMI": { "LI_PPI": [1, 1, 2, 2, 2], "LI_EP": [1, 1, 2, 2, 2], "AC": [1, 1, 2, 2, 2] }, // Curso ADMI (Integral)
        "ADMN": { "LI_PPI": [1, 1, 2, 2, 2], "LI_EP": [1, 1, 2, 2, 2], "AC": [1, 1, 2, 2, 2] }  // Curso ADMN (Noturno)
    
    };

    if (curso in pesos && modalidade in pesos[curso]) {
        var pesosCurso = pesos[curso][modalidade];
        mp = (a1 * pesosCurso[0] + a2 * pesosCurso[1] + a3 * pesosCurso[2] + a4 * pesosCurso[3] + a5 * pesosCurso[4]) / (pesosCurso.reduce((a, b) => a + b, 0));
    }

    var notas = {
        "CC": { "LI_PPI": 696.04, "LI_EP": 756.18, "AC": 767.05 },//Integral
        "BIO": { "LI_PPI": 659.28, "LI_EP": 729.28, "AC": 736.52 },//Integral
        "EDF": { "LI_PPI": 601.82, "LI_EP": 628.57, "AC": 648.60 },//Integral
        "ENGC": { "LI_PPI": 688.01, "LI_EP": 768.15, "AC": 780.14 },//Integral
        "ENF": { "LI_PPI": 650.47, "LI_EP": 688.08, "AC": 681.23 },//Integral
        "GES": { "LI_PPI": 601.61, "LI_EP": 662.88, "AC": 672.64 },//Integral
        "JON": { "LI_PPI": 624.50, "LI_EP": 680.10, "AC": 697.52 },//Integral
        "MED": { "LI_PPI": 739.43, "LI_EP": 778.42, "AC": 792.75 },//Integral
        "NUT": { "LI_PPI": 631.43, "LI_EP": 691.68, "AC": 705.47 },//Integral
        "ODO": { "LI_PPI": 693.04, "LI_EP": 741.86, "AC": 760.99 },//Integral
        "RI": { "LI_PPI": 662.18, "LI_EP": 712.98, "AC": 732.54 },//Integral
        "SI": { "LI_PPI": 659.13, "LI_EP": 723.14, "AC": 730.00 },//Noturno
        "DIRM": { "LI_PPI": 684.6, "LI_EP": 705.38, "AC": 751.7 },//Matutino
        "DIRN": { "LI_PPI": 683.26, "LI_EP": 731.22, "AC": 740.62 },//Noturno
        "ADMI": { "LI_PPI": 581.16, "LI_EP": 674.74, "AC": 690.32 },//Integral
        "ADMN": { "LI_PPI": 637.42, "LI_EP": 681.42, "AC": 688.58 },//Noturno
        
    };

    if (curso in notas) {
        var notaMinima = notas[curso][modalidade];
        if (mp >= notaMinima) {
            document.getElementById('r3').innerHTML = "Parabéns você foi <span style='color: lightgreen; font-weight: bold;'>APROVADO(A)</span>! - Nota de Corte : " + notaMinima;
        } else {
            document.getElementById('r3').innerHTML = "Infelizmente não foi dessa vez! - Nota de Corte: " + notaMinima;
        }
    }

    document.getElementById('r1').innerHTML = "Média Simples: " + ms.toFixed(1);
    document.getElementById('r').innerHTML = "Média Ponderada: " + mp.toFixed(1);
}
