const csso = require('csso');
const fs = require('fs');

// String + torna o resultado de readFileSync um texto
//console.log(" " + fs.readFileSync('./_css/home-style.css')); 
/*=== Define code to be minified ===*/
let code = fs.readFileSync('_css/sources/general-style.css','utf8');

/*=== CREATE OBJ WITH CSS AND MAP PROPERTIES ===*/
// csso.minify(code,{});
let minified = csso.minify(code, {
	restructure: true,
    sourceMap: true,
    filename: 'general-style.css'
});

// Writes the the minified file and the source map file
fs.writeFile('_css/general.css.map', minified.map.toString(), (err) => {
    if (err) { throw err }
});

fs.writeFile('_css/general-style.min.css',minified.css+'/*# sourceMappingURL=general.css.map*/', (err)=>{
	if (err) {throw err}
})

/*
	Funções
	minify - função para minificação de arquivos inteiros

	minifyBlock - Função para minificação de blocos de código dentro de um arquivo CSS

	Opções
	debug: <boolean> - Gera um relatório de progresso no terminal
	sourceMap: <boolean> - Gera um mapa de fonte 

	restructure: <boolean> or <1 a 3> - Merge statemantes and rules

	filename: <string> - File name of input CSS, uses for source map generation
*/