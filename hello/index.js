const pug = require('pug');

const compiledFunction = pug.compileFile('template.pug');


console.log(compiledFunction({
  name: 'Timothy'
}));

console.log(compiledFunction({
  name: 'Forbes'
}));

console.log(pug.renderFile('template.pug', {
  name: 'Timothy'
}));
