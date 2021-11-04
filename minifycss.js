const csso = require('csso');
const fs = require('fs');
const combine = require('combine-source-map');
const convert = require('convert-source-map');

// String + torna o resultado de readFileSync um texto
//console.log(" " + fs.readFileSync('./_css/home-style.css')); 

/*=== Define code to be minified ===*/
let codeOne = fs.readFileSync('_css/sources/carousel.css', 'utf8');
let codeTwo = fs.readFileSync('_css/sources/home-style.css', 'utf8');

/*=== CREATE OBJ WITH CSS AND MAP PROPERTIES ===*/
// csso.minify(code,{});
let minifiedOne = csso.minify(codeOne, {
	restructure: true,
    sourceMap: true,
    filename: 'carousel.css'
});

let minifiedTwo = csso.minify(codeTwo, {
	restructure: true,
    sourceMap: true,
    filename: 'home-style.css'
});

/*=== COMBINE MAPS ===*/
// Transforms maps into comments
// e.g const mapComment1 = convert.fromObject(obj1.map).toComment();
let mapCommentOne = convert.fromObject(minifiedOne.map).toComment();
let mapCommentTwo = convert.fromObject(minifiedTwo.map).toComment();

// Create files objects
// e.g const file1 = { sourceFile: source.js, source = mapComment1}
const fileOne = {
    source: minifiedOne.css + mapCommentOne,
    sourceFile: "sources/carousel.css"
}

const fileTwo = {
    source: minifiedTwo.css + mapCommentTwo,
    sourceFile: "sources/home-style.css"
}

// Merge the maps
// e.g const base64 = combine.create('generated.min.js').addFile(file1).base64
// e.g const map = JSON.stringify(convet.fromBase64(base64).toObject())
const offset = { line: 2 };
const base64 = combine.create('home-style.min.js')
	.addFile(fileOne,offset)
	.addFile(fileTwo,offset)
	.base64();

let sm = convert.fromBase64(base64).toObject();
// Writes the the minified file and the source map file

fs.writeFile('_css/home.css.map', JSON.stringify(sm), (err) => {
    if (err) { throw err }
});

/*
	Funções
	minify - função para minificação de arquivos inteiros

	minifyBlock - Função para minificação de blocos de código dentro de um arquivo CSS

	Opções
	debug: <boolean> - Gera um relatório de progresso no terminal
	sourceMap: <boolean> - Gera um mapa de fonte 

	restructure: <boolean> ou <1 a 3> - Merge statemantes and rules

	filename: <string> - File name of input CSS, uses for source map generation
*/