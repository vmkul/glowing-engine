const rx1 = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/g;
const s1 = 'asdfsd afsdfsd vmkul12@mail.ru';

console.log(s1.match(rx1));
let res = s1.replace(rx1, (sub, pos, str) => {
	console.log({sub: sub, pos: pos, str: str});
	return '<' + sub + '>';
})
console.log(res);