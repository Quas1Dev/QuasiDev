const csso = require('csso');
const fs = require('fs');
// const path = require('path');

// String + torna o resultado de readFileSync um texto
//console.log(" " + fs.readFileSync('./_css/home-style.css')); 
/*=== Define code to be minified ===*/
const dir = 'assets/css/original/';
const files = fs.readdirSync(dir);

files.forEach((file) => {
	let code = fs.readFileSync(dir + file, 'utf8');
	/* === CREATE OBJ WITH CSS AND MAP PROPERTIES === */
	// csso.minify(code,{});
	let minified = csso.minify(code, {
		restructure: true,
	    sourceMap: true,
	    debug: true,
	    filename: file
	});

	// Writes the the minified file and the source map file
	fs.writeFile('assets/css/' + file + '.map', minified.map.toString(), (err) => {
    	if (err) { throw err }
	});

	fs.writeFile('assets/css/'+ file.split('.')[0] + ".min.css",minified.css+'/*# sourceMappingURL=article.css.map*/', (err)=>{
	if (err) {throw err}
	})
})

/*
	Funções
	minify - File minification function

	minifyBlock - Função para minificação de blocos de código dentro de um arquivo CSS

	Opções
	debug: <boolean> - Gera um relatório de progresso no terminal
	sourceMap: <boolean> - Gera um mapa de fonte 

	restructure: <boolean> or <1 a 3> - Merge statemants and rules

	filename: <string> - File name of input CSS; Used for source map generation

	Note: Two semicolons on the CSS file being processed raise an error.
	https://github-com.translate.goog/css/csso/issues/378?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_pto=nui,sc
*/