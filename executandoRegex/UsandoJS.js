const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,f'

const regexNove = RegExp('9')
console.log('Metodos da Regex')
console.log(regexNove.test(texto))
console.log(regexNove.exec(texto))

const regexLetras = /[a-f]/g

console.log(texto.match(regexLetras))
console.log(texto.search(regexLetras))
console.log(texto.replace(regexLetras, 'achei'))
console.log(texto.split(regexLetras))
