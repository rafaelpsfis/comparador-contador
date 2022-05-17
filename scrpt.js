
// ======================== COMPARADOR =========================
function comparador() {
    let div = document.getElementById('programa')
    div.classList.toggle("hide")
    div.innerHTML = `
        <div class="initializing-program">
            <h1>Comparador</h1>
            <div class="input"> 
                <input type="text" maxlength="70" class="field-program" id="item1" required>
                <label>ITEM 1</label>
            </div>
            <div class="input">
                <input type="text" maxlength="70" class="field-program" id="item2" required>
                <label>ITEM 2</label>
            </div>
            <input type="button" value="Comparar" class="btn-initial" onclick="comparar()">
            <input type="button" value="X" class="btn-initial x" onclick="fechar()">
            <p id="resultado"> Resultado: </p>
        </div>
    `
}

function comparar() {
    let item1 = document.getElementById('item1')
    let item2 = document.getElementById('item2')
    let resultado = document.querySelector("#resultado")

    if (item1.value == 0 || item2.value == 0) {
        window.alert("ERRO: Insira o ITEM 1 e o ITEM 2 antes de clicar em comparar!")
    } else if (item1.value == item2.value) {
        resultado.innerHTML = " Resultado: OS ITENS SÃO IGUAIS!!"
        resultado.style = "background-color: rgb(126, 255, 206);"
    } else {
        resultado.innerHTML = "  Resultado: OS ITENS SÃO DIFERENTES!!"
        resultado.style = "background-color: rgb(236, 117, 117);"
    }
}

// ======================= FIM COMPARADOR ===========================

function fechar() {
    let div = document.getElementById('programa')
    div.classList.toggle("hide")
    div.innerHTML = ""
}

// ========================= CONTADOR ===============================
function contador() {
    let div = document.getElementById('programa')
    div.classList.toggle("hide")

    div.innerHTML = `
        <div class="initializing-program">
            <h1>Contador</h1>
            <div class="input"> 
                <input type="text" maxlength="70" class="field-program" id="item1" required>
                <label>ITEM</label>
            </div>
    
            <input type="button" value="Contar" class="btn-initial" onclick="contar()">
            <input type="button" value="X" class="btn-initial x" onclick="fechar()">
            <p id="resultado"> Resultado: </p>
        </div>
    `
}

function contar() {
    let resultado = document.querySelector("#resultado")
    if (item1.value == 0) {
        window.alert("ERRO: Insira o que deseja contar no campo 'ITEM' e clique em contar!!")
    } else {
        let contador = Number(item1.value.length)
        resultado.innerHTML = ` Resultado: ${contador} caracteres no total!!`
    }
}

//======================== FIM CONTADOR ===========================