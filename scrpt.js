
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

//===================== CHAVE NFE ===============================

function composicaoChave() {
    let div = document.getElementById('programa')
    div.classList.toggle("hide")
    div.innerHTML = `
        <div class="initializing-program">
            <h1>Composição de Chaves (NFe/CTe/MDFe)</h1>
            <div class="input"> 
                <input type="text" maxlength="70" class="field-program" id="item1" required>
                <label>ITEM</label>
            </div>
    
            <input type="button" value="Processar" class="btn-initial" onclick="decompoeChave()">
            <input type="button" value="X" class="btn-initial x" onclick="fechar()">
            <p id="resultado"> Resultado: </p>
        </div>
    `
}

function decompoeChave() {
    let resultado = document.querySelector("#resultado")
    if (item1.value == 0) {
        window.alert("ERRO: Insira a CHAVE do documento fiscal no campo 'ITEM' e clique em 'Processar'!!")
    } else if (item1.value.length !== 44) {
        window.alert("ERRO: O número de caracteres precisa ser igual a 44 !!")
    } else {
        let codUf = item1.value.substring(0, 2)
        let anoMes = item1.value.substring(2, 6)
        let cnpj = item1.value.substring(6, 20)
        let mod = item1.value.substring(20, 22)
        let serie = item1.value.substring(22, 25)
        let numDoc = item1.value.substring(25, 34)
        let codDoc = item1.value.substring(34, 43)
        let digVerif = item1.value.substring(43, 44)

        resultado.innerHTML = `<p>Código da UF do Emitente: ${codUf} </p>`
        resultado.innerHTML += `<p>AAMM de Emissão: ${anoMes}</p>`
        resultado.innerHTML += `<p>CNPJ do Emitente: ${cnpj}</p>`
        resultado.innerHTML += `<p>Modelo do documento: ${mod}</p>`
        resultado.innerHTML += `<p>Série do Documento: ${serie}</p>`
        resultado.innerHTML += `<p>Númerodo Documento: ${numDoc}</p>`
        resultado.innerHTML += `<p>Código Documento: ${codDoc}</p>`
        resultado.innerHTML += `<p>Dígito Verificador (DV): ${digVerif} </p>`

    }
}

 // EXEMPLO NFE
 // 51080701212344000127550010000000981364112281
/*  UF = cUF
 AC = 12
 AL = 27
 AP = 16
 AM = 13
 BA = 29
 CE = 23
 DF = 53
 GO = 52
 ES = 32
 MA = 21
 MT = 51
 MS = 50
 MG = 31
 PA = 15
 PB = 25
 PR = 41
 PE = 26
 PI = 22
 RJ = 33
 RN = 24
 RS = 43
 RO = 11
 RR = 14
 SC = 42
 SP = 35
 SE = 28
 TO = 17 */


 /* links consulta :
 https://www.espiaonfe.com.br/lab/?i=como-montar-a-chave-de-acesso-do-ct-e

 https://flexdocs.net/guiaCTe/funcao.utilidades.criachaveCTe.html

 https://www.oobj.com.br/bc/article/como-%C3%A9-formada-a-chave-de-acesso-de-uma-nf-e-nfc-e-de-um-ct-e-e-um-mdf-e-281.html

 http://www.sistemaunico.com.br/arquivos/manuais/chave_nfe.pdf

 https://blog.tecnospeed.com.br/chave-de-acesso/

 https://blog.emitte.com.br/chave-de-acesso-nota-fiscal-eletronica/
 
 https://blog.tecnospeed.com.br/manifesto-documento-fiscal/#:~:text=O%20que%20%C3%A9%20Manifesto%20Eletr%C3%B4nico%20de%20Documentos%20Fiscais%20(MDFe)%3F&text=Sua%20principal%20fun%C3%A7%C3%A3o%20%C3%A9%20compilar,agilizando%20o%20processo%20de%20fiscaliza%C3%A7%C3%A3o.

 https://www.espiaonfe.com.br/lab/?i=como-montar-a-chave-de-acesso-do-ct-e#:~:text=A%20Chave%20de%20Acesso%20do%20Conhecimento%20de%20Transporte%20Eletr%C3%B4nico%20(CT,C%C3%B3digo%20Num%C3%A9rico%20e%20D%C3%ADgito%20Verificador.
 */

