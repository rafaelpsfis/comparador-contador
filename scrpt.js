
function comparador() {
    let div = document.getElementById('programa')
    let field1 = document.createElement('textarea')
    let field2 = document.createElement('textarea')
    let at = document.createAttribute('style')
    at.value = 'margin:15px;'
    div.appendChild(field1)
    div.appendChild(field2)
    field1.setAttributeNode(at)
    field2.setAttributeNode(at)
}