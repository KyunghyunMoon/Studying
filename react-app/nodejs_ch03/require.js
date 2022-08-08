console.log('require가 가장 위에 오지 않아도 됩니다');

module.exports = '나를 찾지마';

require('./var');

console.log('reaquire.cache다잉');
console.log(require.cache);
console.log('require.main이다잉');
console.log(require.main === module);
console.log(require.main.filename);
