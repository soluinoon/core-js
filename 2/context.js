var a = 1;

function outer() {
	function inner() {
		console.log("inner = " + a); // 안에서 새로 초기화 했으므로, undefined
		var a = 3;
	}
	inner();
	console.log("outer = " + a); // 외부에서 선언했던 1

}
outer();
console.log("global = " + a); // 1
