const UglifyJS = require("uglify-js");
const fs = require('fs');

/*=== UGLIFY CODE AND GENERATE MAP ===*/
// Teke the code to  uglify
// e.g let code = fs.readFileSync('filename.js','utf8');
// e.g let code = {'filename.js' : fs.readFileSync('filename.js','utf8')}

//let code = {
//	'sources/articles-carousel.js': fs.readFileSync('_scripts/sources/articles-carousel.js','utf8'),
//	'sources/infinity-carousel.js': fs.readFileSync('_scripts/sources/infinity-carousel.js','utf8')
//}

let code = {
	'sources/general-script.js': fs.readFileSync('_scripts/sources/general-script.js','utf8'),
	'sources/articles-carousel.js': fs.readFileSync('_scripts/sources/articles-carousel.js','utf8'),
	'sources/infinity-carousel.js': fs.readFileSync('_scripts/sources/infinity-carousel.js','utf8')
};

// Set options 
// e.g let opt = {  mangle: toplevel: true, sourceMap: {filename: 'filename.min.js'} };
let opt = {
	mangle: {
		toplevel: true
	},
	sourceMap:{
		filename: 'home-script.min.js',
		url: 'home.js.map',
		includeSources: false
	}
}

// Execute process according to the options set
//let result = UglifyJS.minify(code, opt);
let result = UglifyJS.minify(code,opt);

// Write generated file and map
// e.g fs.writeFile('_scripts/home.js.map', result.map.toString(), (err) => {...}
// e.g fs.writeFile('_scripts/filename.js', result.code, (err) => {...})
function checkErr(err) {
	err ? console.log(err) : console.log('Successfull!');
}

fs.writeFile('_scripts/home.js.map', result.map.toString(),checkErr)
fs.writeFile('_scripts/home-script.min.js', result.code, checkErr);
/*=== ONLY UGLIFY CODE ===*/
// take code
// e.g let code = fs.readFileSync('_scripts/filename.js','utf8');

let genFile = {
	'sources/general-script.js': fs.readFileSync('_scripts/sources/general-script.js','utf8')
}

let minGen = UglifyJS.minify(genFile,{
	mangle:{
		toplevel: true
	},
	sourceMap:{
		filename: 'general-script.min.js',
		url: 'general-script.js.map',
		includeSources: false
	},

})

fs.writeFile('_scripts/general-script.js.map', minGen.map.toString(),checkErr);
fs.writeFile('_scripts/general-script.min.js', minGen.code, checkErr);

// Set options
// e.g opt = { mangle: {toplevel: true}}

// Uglify code
// e.g let resultCarousel = UglifyJS.minify(code,opt);

// Write file
// fs.writeFile('_scripts/filename.min.js', result.code + '//# sourceMappingURL=filaname.js.map',(err)=>{...})

/*=== ONLY CREATES MAPS ===*/
// e.g let code = fs.readFileSync('filename.js','utf8');
// e.g let code = {'filename.js' : fs.readFileSync('filename.js','utf8')}

// Set options 
// e.g let opt = { mangle: toplevel: true, sourceMap: {filename: 'filename.min.js'} };

// Make obj with code and map
// e.g let result = UglifyJS.minify(code, opt);

// Write map
// fs.writeFile('_script/filename.js.map', result.map.toString(), (err) {...})