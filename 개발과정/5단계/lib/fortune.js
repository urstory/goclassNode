var fortuneCookies = [
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple.",
];

// 모듈 밖에서 함수를 사용하도록 하려면 exports.함수명 으로 등록을 한다.
// 외부에서는 fortuneCookies 배열을 알수 없다. 은닉화.
exports.getFortune = function(){
   var idx = Math.floor(Math.random() * fortuneCookies.length);
	 return fortuneCookies[idx];
};
