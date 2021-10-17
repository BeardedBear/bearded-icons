export function make(itemList, scope) {
	let obj = {};
	itemList.forEach((item) => obj = {[item]: scope, ...obj});
	return obj;
}
