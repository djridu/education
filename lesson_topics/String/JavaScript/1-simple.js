'use strict';

const name = 'Marcus Aurelius';

console.log();
console.log(`name = '${name}'`);

console.log();
console.log(`typeof name = '${typeof name}'`);
console.log(`name.length = ${name.length}`);
console.log(`name[3] = '${name[3]}'`);
console.log(`name.charAt(5) = '${name.charAt(5)}'`);
console.log(`name.charCodeAt(7) = ${name.charCodeAt(7)}`);

var person = 'Mike';
var age = 28;

function myTag(strings, personExp, ageExp) {
	var str0 = strings[0]; // "That "
	var str1 = strings[1]; // " is a "
	
	// Технически, в конце итогового выражения
	// (в нашем примере) есть ещё одна строка,
	// но она пустая (""), так что пропустим её.
	// var str2 = strings[2];
	
	var ageStr;
	if (ageExp > 99){
		ageStr = 'centenarian';
	} else {
		ageStr = 'youngster';
	}
	
	// Мы даже можем вернуть строку, построенную другим шаблонным литералом
	return `${str0}${personExp}${str1}${ageStr}`;
}

var output = myTag`That ${ person } is a ${ age }`;

console.log(output);

function template(strings, ...keys) {
	return (function(...values) {
		var dict = values[values.length - 1] || {};                      //?
		var result = [strings[0]];                                      //?
		keys.forEach(function(key, i) {
			var value = Number.isInteger(key) ? values[key] : dict[key];//?
			result.push(value, strings[i + 1]);                         //?
		});
		return result.join('');//?
	});
}

var t1Closure = template`${0}${1}${0}!`;
console.log(t1Closure('Y', 'A'))

var t2Closure = template`${0} ${'foo'}!`;
console.log(t2Closure('Hello', {foo: 'World'}))

console.log(`\`` === '`')
