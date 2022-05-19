# comparador-contador
 Este programa tem o intuito de ser um facilitador nos processos internos de transportadoras. Para isso foram criadas três aplicações básicas:
* Comparador de Caracteres
* Contador de Caracteres
* Composição de Chaves de Documentos Fiscais

## Comparador de Caracteres <h2>
 Tem a função de receber duas strings diferentes e comparar ambas e retornar o resultado dizendo que as strings são iguais ou diferentes.
 
 ## Contador de Caracteres <h2>
 Tem a função de receber uma string e retornar quantos caracteres a mesma contém.
 
 ## Composição de Chaves de Documentos Fiscais <h2>
 Uma chave de documento fiscal (Nota Fiscal eletrônica, Manifesto Eletrônico de Documentos Fiscais ou Conhecimento de Transporte eletrônico) é uma cadeia de caracteres formados por 44 dígitos sendo que cada conjunto de dígitos trás em si uma informação, sendo elas:
 
 Função | Quantidade de Dígitos
 -------|-------------------
 Código da UF | 02 
 Ano e Mês da emissão do documento | 04 
 CNPJ do Emitente | 14 
 Modelo do Documento | 02 
 Série do Documento | 03
 Número do Documento | 09
 Forma de Emissão | 01
 Código do Documento | 08
 Dígito Verificador | 01

 A função desse programa é receber a Chave desse documento fiscal e retornar ao usuário as informações contidas na mesma porém de forma organizada e de fácil leitura.
