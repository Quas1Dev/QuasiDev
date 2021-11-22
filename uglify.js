const UglifyJS = require("uglify-js");
const fs = require('fs');

const dir = "assets/scripts/sources/"
const files = fs.readdirSync(dir);

files.forEach((file) => {
  const fullpath = dir + file;
  // Read source code
  let code = {
  	fullpath : fs.readFileSync(fullpath, 'utf8')
  }

	// Set options
	let opt ={
		mangle: {
			toplevel: true
		},
		sourceMap:{
			filename: file.split('.')[0] + ".min.js",
			url: file + '.map',
			includeSources: false
		}
	}

  let result = UglifyJS.minify(code,opt);

	// Write generated file and map
	// e.g fs.writeFile('_scripts/home.js.map', result.map.toString(), (err) => {...}
	// e.g fs.writeFile('_scripts/filename.js', result.code, (err) => {...})
	function checkErr(err) {
		err ? console.log(err) : console.log('Successfull!');
	}

	fs.writeFile('assets/scripts/'+ file +'.map', result.map.toString(),checkErr);
	fs.writeFile('assets/scripts/' + file.split('.')[0] +'.min.js', result.code, checkErr);
})

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