function req() {

    
    var a1 = parseFloat(document.getElementById("v1").value);
    var a2 = parseFloat(document.getElementById("v2").value);
    var a3 = parseFloat(document.getElementById("v3").value);
    var a4 = parseFloat(document.getElementById("v4").value);
    var a5 = parseFloat(document.getElementById("v5").value);
    
    var curso = document.getElementById("va").value;
    
    var mp = 0;
    var mpn = 0;
    var ms = 0;
    ms = (a1+a2+a3+a4+a5)/5;

    var modalidade = document.getElementById("mod1").value;

    var CCL6 = 696.04;
    var CCL5 = 756.18
    var CCAC = 767.05;
    
    if (curso === "CC" || curso === "ENGC" || curso === "SI" || curso === "GES") {
        mp = (a1 + a2 + (a3 * 2) + (a4 * 2) + (a5 * 2)) / 8;
    
        document.getElementById('r1').innerHTML = "Média Simples: " + ms.toFixed(1);
        document.getElementById('r').innerHTML = "Média Ponderada: " + mp.toFixed(1);
    }
    
   else if (curso === "BIO" || curso === "ODO" || curso === "MED" || curso === "NUT" || curso === "EDF" || curso === "ENF") {
        mpn = (a1 + a2 + (a3 * 2) + a4+a5) / 6;
        
        document.getElementById('r1').innerHTML = "Média Simples: " + ms.toFixed(1);
        document.getElementById('r').innerHTML = "Média Ponderada: " + mpn.toFixed(1);
    
    
    }
    
    else if (curso === "RI" || curso === "m" || curso === "JON") {

        document.getElementById('r1').innerHTML = "Média Simples: " + ms.toFixed(1);
        
        
    
    }
    


            var notas = {
                "CC": { "L6": 696.04, "L5": 756.18, "AC": 767.05 },
                "BIO": { "L6": 659.28, "L5":729.28, "AC": 736.52 },
                "EDF": { "L6": 601.82, "L5": 628.57, "AC": 648.60 },
                "ENGC": { "L6": 688.01, "L5":768.15 , "AC": 780.14 },
                "ENF": { "L6": 650.47, "L5": 688.08, "AC": 681.23 },
                "GES": { "L6": 601.61, "L5": 662.88, "AC": 672.64 },
                "JON": { "L6": 624.50, "L5": 680.10, "AC": 697.52 },
                "MED": { "L6": 739.43, "L5": 778.42, "AC": 792.75 },
                "NUT": { "L6": 631.43, "L5": 691.68, "AC": 705.47 },
                "ODO": { "L6": 693.04, "L5": 741.86, "AC": 760.99 },
                "RI": { "L6": 662.18, "L5": 712.98, "AC": 732.54 },
                "SI": { "L6": 659.13, "L5": 723.14, "AC": 730.00 }
            };

            if (curso in notas) {
                var notaMinima = notas[curso][modalidade];
                if (mp >= notaMinima) {
                    document.getElementById('r3').innerHTML = "Parabéns você foi  <span style='color: lightgreen; font-weight: bold;'>APROVADO(A)</span>! - Nota de Corte : " + notaMinima;
                } else {
                    document.getElementById('r3').innerHTML = "Infelizmente não foi dessa vez! - Nota de Corte: "+ notaMinima;
                }
            }


};