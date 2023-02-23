'use strict';

//
// let str = 'ahb acb aeb aeeb adcb axeb';
// let arr = str.split(' ');
// let arr2 = [];
// for (let elem of arr) {
//     if (elem.replace(/a.b/, '!') == '!') {
//         arr2.push(elem);
//     }
// }
// console.log(arr2.join(' ')); // 'ahb acb aeb'

// console.log(
//     'aaf'.replace(/a/, '!'), // '!af'
//     'aaaaf'.replace(/a/g, '!'), // '!!!!f'
//     'aafafaafa'.replace(/a/g, '!'), // '!!f!f!!f!'
//     'aaaaf'.replace('a', '!'), //'!aaaf'
// ); 

//
// let str = 'ahb acb aeb aeeb adcb axeb';
// let arr = str.split(' ');
// let arr2 = [];
// for (let elem of arr) {
//     if (elem.replace(/a..b/, '!') == '!') {
//         arr2.push(elem);
//     }
// }
// console.log(arr2.join(' ')); // 'aeeb adcb axeb'

//
// let str = 'aba aca aea abba adca abea';
// let arr = str.split(' ');
// let arr2 = [];
// for (let elem of arr) {
//     if (elem.replace(/ab.a/, '!') == '!') {
//         arr2.push(elem);
//     }
// }
// console.log(arr2.join(' ')); // 'abba' и 'abea'

//
// let str = 'xx xax xaax xaaax xbx';
// console.log(
//     // str.replace(/xa?x/g, '!'), // '! ! xaax xaaax xbx'
//     // str.replace(/xa*x/g, '!'), // '! ! ! ! xbx'
//     str.replace(/xa+x/g, '!') // 'xx ! ! ! xbx'
// ); // ? - 0,1; * - 0..n, + - 1..n

//
// let str = 'aa aba abba abbba abca abea';
// console.log(str.replace(/ab+a/g, 'нашел'));
// console.log(str.replace(/ab*a/g, 'нашел'));
// console.log(str.replace(/ab?a/g, 'нашел'));

//
// let str = 'xabx xababx xaabbx';
// console.log(str.replace(/x(ab)+x/g, '!')); // '! ! xaabbx'

// let str = 'ab abab abab abababab abea';
// let res = str.replace(/(ab)+/g, '!');
// console.log(res); // '! ! ! ! !ea'

//
// let str = 'a.x abx aex';
// let res = str.replace(/a.x/g, '!'); // '! ! !'
// let res2 = str.replace(/a\.x/g, '!'); // '! abx aex'
// console.log(res + '  ....  ' + res2);

//спец символ: '$ ^ . \ / {} [] + * ? |'
//не спец: ': ; , % @ # - ~ ` & ! ' " = _'

//
// let str = 'a.a aba aea';
// console.log(str.replace(/a\.a/g, '!')); // '! aba aea'
// let str = '2+3 223 2223';
// console.log(str.replace(/2\+3/g, '!')); // '! 223 2223'
// let str = '23 2+3 2++3 2+++3 345 567';
// console.log(str.replace(/2\++3/g, '!')); // '23 ! ! ! 345 567'
// let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
// console.log(str.replace(/\*q+\+/g, '!')); // '*+ ! ! ! *qqq qqq+'
// let str = '[abc] {abc} abc (abc) [abc]';
// console.log(str.replace(/\[...\]/g, '!')); // '! {abc} abc (abc) !'

//
// let str = 'aa aba abba abbba abbbba abbbbba';
// let res = str.replace(/ab{2,4}a/g, '!'); // 'aa aba ! ! ! abbbbba'
//let res = str.replace(/ab{0,3}a/g, '!'); // '! ! ! ! abbbba abbbbba'
// let res = str.replace(/ab{4,}a/g, '!'); // 'aa aba abba abbba ! !'
// console.log(res);

//
// let str = 'aba accca azzza wwwwa';
// let res = str.replace(/a.{1,}?a/g, '!'); // '! ! ! wwwwa';
// console.log(res);

//
// let str = 'a1a a2a a3a a4a a5a aba aca';
// let res = str.replace(/a\da/g, '!') // '! ! ! ! ! aba aca'
// console.log(res);

// let str = 'aa a22a a333a a4444a a55555a aba aca';
// let res = str.replace(/a\d*a/g, '!') // '! ! ! ! ! aba aca'
// console.log(res);

// let str = 'avb a1b a2b a3b a4b a5b abb acb';
// let res = str.replace(/a\Db/g, '!') // '! a1b a2b a3b a4b a5b ! !'
// console.log(res);

// let str = 'ave a#b a2b a$b a4b a5b a-b acb';
// let res = str.replace(/a\Wb/g, '!') // 'ave ! a2b ! a4b a5b ! acb'
// console.log(res);

// let str = 'ave a#a a2a a$a a4a a5a a-a aca';
// let res = str.replace(/\s/g, '!') // 'ave!a#a!a2a!a$a!a4a!a5a!a-a!aca'
// console.log(res);

//
// let str = 'aba aea aca aza axa';
// let res = str.replace(/a[bex]a/g, '!') // '! ! aca aza !'
// console.log(res);
// let str = 'a1a a3a a7a a9a aba';
// let res = str.replace(/a[3-6]a/g, '!') // 'a1a ! a7a a9a aba'
// console.log(res);
// let str = 'aba aea afa aha aga';
// let res = str.replace(/a[a-g]a/g, '!') // '! ! ! aha !'
// console.log(res);
// let str = 'aba aea afa aha aga';
// let res = str.replace(/a[a-fj-y]a/g, '!') // '! ! ! aha aga'
// console.log(res);
// let str = 'aAa aea aEa aJa a3a';
// let res = str.replace(/a[a-fA-D]a/g, '!') // '! ! aEa aJa a3a'
// console.log(res);
// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// let res = str.replace(/a[a-z]+a/g, '!') // 'aAXa ! aGha ! ax23a a3sSa'
// console.log(res);
// let str = 'aAXa aeffa aGha aza ax23a a3sSa'
// let res = str.replace(/a[a-zA-Z]+a/g, '!') // '! ! ! ! ax23a a3sSa'
// console.log(res);
// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// let res = str.replace(/a[a-z0-9]+a/g, '!') // 'aAXa ! aGha ! ! a3sSa'
// console.log(res);

//
// let str = '1d2 1e2 132 1E2 1x2';
// let res = str.replace(/1[^ex]2/g, '!') // '! 1e2 ! ! 1x2'
// console.log(res);
// let str = 'xm x3m x1m xEm x6m';
// let res = str.replace(/x[^2-7]m/g, '!') // 'xm x3m ! ! x6m'
// console.log(res);
// let str = 'xaz xbz x1z xСz';
// let res = str.replace(/x[^a-z]z/g, '!') // 'xaz xbz ! !'
// console.log(res);
// let str = 'wйw wяw wёw wqw';
// let res = str.replace(/w[а-яё]w/g, '!'); // ё- не читается, нужно вручную добавлять
// console.log(res); // '! ! ! wqw'
// let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
// let res = str.replace(/[а-яёА-ЯЁ]{3}/g, '!'); // '! ! ! ! ! ! ! ! ! !'
// console.log(res);

//
// let str = 'xax xbx xcx xdx x.x x@x';
// let res = str.replace(/x[abc.]x/g, '!'); // '! ! ! xdx ! x@x'
// console.log(res);
// let str = 'aba aea aca aza axa a.a a+a a*a';
// let res = str.replace(/a[.+*]a/g, '!');
// console.log(res)
// let str = 'xaz x.z x3z x@z x$z xrz';
// let res = str.replace(/x[^.@$]z/g, '!'); // '! x.z ! x@z x$z !'
// console.log(res);

//
// let str = 'xax xbx x1x x2x xhx x@x';
// let res = str.replace(/x[\da-f]x/g, '!'); // '! ! ! ! xhx x@x'
// let str = 'xaz x1z xAz x.z x@z';
// let res = str.replace(/^w.d-z/g, '!');
// console.log(res); // '! x.z ! x@z x$z !'
// let str = 's1s x1.. x..Az 123 43. @.z';
// let str = '1ss 2dd 3fff 4 hijk ABCD';
// let res = str.replace(/[^\da-g ]{3,7}/g, '!'); // '1ss 2dd 3fff 4 ! !'
// console.log(res);

//
// let str = 'x[]z x{}z x.z x()z';
// let res = str.replace(/x[\[\]\{\}\(\)]{1,2}z/g, '!'); // '! ! x.z !'
// console.log(res);
// let str = '[abc] {abc} abc (abc) [abc]';
// let res = str.replace(/[\[\]\{\}\(\)][\w]+[\[\]\{\}\(\)]/g, '!'); // '! ! abc ! !'
// console.log(res);

//
// let str = '^xx axx ^zz bkk @ss';
// let res = str.replace(/[\^@][a-z]{2}/g, '!'); // '! axx ! bkk !'
// console.log(res)
// let str = '^xx axx ^zz bkk @ss';
// let res = str.replace(/[^\^@ ][a-z]{2}/g, '!'); // '^xx ! ^zz ! @ss'
// console.log(res)
// let str = '^xx axx ^zz bkk';
// let res = str.replace(/[^\^ ][a-z]{2}/g, '!'); // '^xx ! ^zz !'
// console.log(res)

//
// let str = 'xaz xBz xcz x-z x@z';
// let res = str.replace(/x[a-z-A-Z]z/g, '!'); // ! ! ! ! x@z
// console.log(res);
// let str = 'xaz x$z x-z xcz x+z x%z x*z';
// let res = str.replace(/x[$\-+]z/g, '!'); // xaz ! ! xcz ! x%z x*z
// console.log(res);

//
// let str = 'aaa aaa aaa';
// let res = str.replace(/^aaa/g, '!'); 'aaa aaa !'
// console.log(res);


// let str = 'aaaab';
// let res = str.replace(/^a+b$/g, '!'); '!' 
// console.log(res);
// let str = 'aaaa';
// let res = str.replace(/^a+$/g, '!'); '!' 
// console.log(res);
// let str = 'abc def xyz';
// let res = str.replace(/^[a-z]{3}/g, '!'); // '! def xyz'
// console.log(res);
// let str = 'abc def xyz';
// let res = str.replace(/[a-z]{3}$/g, '!'); // 'abc def !'
// console.log(res);

//
// let str = 'aeeea aeea aea axa axxa axxxa';
// let res = str.replace(/a(e*|x*)a/g, 'change') // 'change change change change change change'
// console.log(res);
// let str = 'aeeea aeea aea axa axxa axxxa';
// let res = str.replace(/a(e{2}|x*)a/g, 'change') // 'aeeea change aea change change change'
// console.log(res);

//
// let res = /^http:\/\//.test('http://gfdgg'); // 'true'
// console.log(res);
// let res = /^http:\/\/$/.test('http://gfdgg'); // 'false'
// console.log(res);

// console.log(/^http:\/\/|^https:\/\//.test('https://gfdgg')); // 'true'
// console.log(/txt$|php$|html$/.test('https://gfdgg.txt')); // 'true'
// console.log(/^[\d]{1,12}$/.test('1234567891')); // 'true'
// console.log(/^[\d]{4}-([1-9]|1[0-2]|0[1-9])-[\d]{1,2}$/.test('2009-08-23')); // 'true'
// console.log(/^([0-2][0-9]):([0-5][0-9]):([0-5][0-9])$/.test('23:59:59')); // 'true'
// console.log(/^([0-2][0-9]).([0-5][0-9]).([0-5][0-9])$/.test('23.5959')); // 'true'
// console.log(/^https:\/\//g.test('https://www.google.com/search')); // 'true' 
// console.log(/.com$/g.test('https://www.google.com')); // 'true'
// console.log('a aa aaa aaaa'.match(/a+/g)); // ['a', 'aa', 'aaa', 'aaaa']
// console.log('1 23 456 789'.match(/\d+/g)); // ['1', '23', '456', '789']
// console.log('1 23 456 789'.match(/\d/g)); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
// console.log('site.ru sss site.com zzz site.net'.match(/\.[a-z]+/g)) // ['.ru', '.com', '.net']

// let arr = 'a1b c34d x567z'.match(/\d/g);
// let sum = 0;
// for (let elem of arr) {
//     sum += +elem;
// }
// console.log(sum); // 26

//
// console.log('sss domain.com'.match(/(\w+).com/)[0]); // 'domain.com'
// console.log('sss domain.com'.match(/(\w+).com/)[1]); // 'domain'
// console.log('31.12.2025'.match(/(\d+).(\d+).(\d+)/)[0]); // 31.12.2025
// console.log('31.12.2025'.match(/(\d+).(\d+).(\d+)/)[1]); // 31
// console.log('31.12.2025'.match(/(\d+).(\d+).(\d+)/)[2]); // 12
// console.log('31.12.2025'.match(/(\d+).(\d+).(\d+)/)[3]); // 2025
// console.log('aaa@bbb ссс@ddd'.replace(/([a-z]+)@([a-z]+)/g, '$2@$1')) // 'bbb@aaa ссс@ddd'
// console.log('12 34 56 78'.replace(/([1-9])([1-9])/g, '$2$1')); // '21 43 65 87'
// console.log('31.12.2025'.replace(/([\d]+).([\d]+).([\d]+)/g, '$3.$2.$1')) // '2025.12.31'

//
// console.log('a1b2c3'.replace(/(\w)/g, '$&$&')); // 'aa11bb22cc33'
// console.log('sss site.ru zzz site.com kkk'.replace(/(\w+\.\w+)/g, 'http://$1')); // 'sss http://site.ru zzz http://site.com kkk'
// console.log('asxca buzxb csgd'.replace(/([a-z])[a-z]+\1/g, '!')); // '! ! csgd'
// console.log('aaa bbb ccc xyz'.replace(/([a-z])\1\1/g, '!')); // '! ! ! xyz'
// console.log('a aa aaa aaaa aaaaa'.replace(/([a-z])\1+/g, '!')); // 'a ! ! ! !'
// console.log('aaa aaa bbb bbb ccc ddd'.replace(/([a-z])+ \1+/g, '!')); // '! ! ccc ddd'

//
// console.log('abab123'.match(/(?:ab)+(\d+)/)[1]);
// console.log('aaab aaax'.replace(/a+(?=x)/g, '!')); // 'aaab !x'


// если после 'ааа' стоит НЕ 'x' - замена на '!'
// console.log('aaax aaab'.replace(/aaa(?!x)/g, '!')); // 'aaax !b'
// console.log('aaab aaax'.replace(/aaa(?!b)/g, '!')); // 'aaab !x'

// console.log('func1() func2() func3()'.match(/[a-z]+[0-9]+(?=())/g)) // '['func1', 'func2', 'func3']'
// console.log('<a href="ddd" class="eee" id="rrr">'.match(/\w+(?=="\w+")/g)); // '['href', 'class', 'id']'

//
// console.log('1 2 3 4 5'.replace(/\d+/g, function(match) {
//     return match ** 2;
// })); // '1 4 9 16 25'

// let result = str.replace(/\d+/g, function (match) {
// 	return match**2; 
// });
// console.log(result); // выведет '4 9 16 25'

// let res = '2+3= 4+5= 6+7='.replace(/(\d+)\+(\d+)=/g, function(match0, match1, match2){
//     let sum = +match1 + +match2;
//     return match0 + sum;
// })
// console.log(res); // '2+3=5 4+5=9 6+7=13'

//
// console.log('aaa [2] bbb [3] ccc [12] ddd'.replace(/(\d+)/g, function (match1) {
//     return +match1 *2;
// }))

// console.log('123 456 789'.replace(/(\d+)/g, function(match1) {
//     return match1.split('').reverse().join('')
// })); // '321 654 987'

// console.log('31.12.2025 30.11.2024 29.10.2023'.replace(/(\d+\.\d+\.\d+)/g, function(match1) {
//     return match1.split('.').reverse().join('-');
// })); // '2025-12-31 2024-11-30 2023-10-29'

//
// console.log('a aa aaa aaaa aaaa'.search(/aaaa/));// 5
// console.log('a aa aaa aaaa aaaa'.search(/aa/));// 2 
// console.log('1 23 456 789'.search(/\d{3}/)); // 5 (первое трехзначное)

// console.log('a-b+c-d+e'.split(/[-+]/).join('+')); // 'a+b+c+d+e'
// console.log('2025-12-31 12:59:59'.split(/[-:]/)); // '['2025', '12', '31 12', '59', '59']'

//
// console.log('02.04.1994'.replace(/19[0-9][0-9]|20[0-9][0-9]|2100/, 'find')); // год от 1900-2100
// console.log('02:15'.replace(/[0-2][0-4]:[0-5][0-9]/, 'yes')); // 'yes'
// console.log('eeed eees rrr rrr dds dds fdg fdg uuu'.replace(/(\w+) \1/g, '$1')); // 'eeed eees rrr dds fdg uuu'
console.log('reerd rrds dfd dfs drrfd'.replace(/(\w)\1\w+ | \w+(\w)\1\w+/g, '!'));

















































