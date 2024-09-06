let kmh, ms, total

function Calcular() {
    //entrada
    kmh = Number (frmFlex.InputKmh.value)
    ms = 3.6
    //processamento
    total = kmh / 3.6
    //saida
    frmFlex.InputMs.value = total.toFixed(2)
    //return false
}


