//新增變數
var a = 1;
console.log(a);
console.log('');
var b;
b = 2;
console.log(b);
console.log('');
var c = 123;
console.log(c);
console.log('');
//迴圈
for (var i = 0; i < 3; i++) {
    console.log("迴圈:" + i);
}
console.log("結束迴圈 i的值是:" + 3);
console.log('');
//迴圈
for (var i = 0; i < 10; i++) {
    console.log("迴圈次數:" + i);
}
console.log("迴圈結束，但此行會報錯，因為'i'已在區塊外無效");
console.log("由於上一行的錯誤，程式中斷執行，這一行不會被印出");
console.log('');
//多重迴圈
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++)
        console.log("".concat(i, " x ").concat(j, " = ").concat(i * j));
}
console.log('');
//題目1
console.log("題目1");
var age = 25;
//age = 30; //會出現Cannot assign to 'age' because it is a constant.
var name = "Alice";
//name = "eden";//可重新賦值
console.log("age:" + age);
console.log("name:" + name);
console.log('');
//題目2
console.log("題目2");
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("".concat(i, " \u662F\u5076\u6578"));
    }
    else {
        console.log("".concat(i, " \u662F\u5947\u6578"));
    }
}
console.log('');
//題目3
console.log("題目3");
function printMultiplicationTable() {
    // 外層迴圈控制乘數
    for (var i = 1; i <= 9; i++) {
        // 內層迴圈控制被乘數
        for (var j = 1; j <= 9; j++) {
            // 印出當前的乘法表運算結果
            console.log("".concat(i, " x ").concat(j, " = ").concat(i * j));
        }
        console.log('');
    }
}
// 呼叫函數來列印九九乘法表
printMultiplicationTable();
