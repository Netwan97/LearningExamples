var totol = prompt("请输入猴子的数量：");
var kick = prompt("踢出第几只猴子：");
function monkey(total, kick) {
    var mky = [];
    for (var i = 1; i <= total; i++) {
        mky.push(i);
    }
    var i = 1;
    for (; mky.length > 1; i++) {
        var m = mky.shift();
        if (i % kick != 0) {
            mky.push(m);
        }
    }
    return mky[0];

}

function monkey2(total, kick) {
    var mky = [];
    for (var i = 1; i <= total; ++i) {
        mky.push(i);
    }
    var idx = 0;
    while (mky.length > 1) {
        for (var cnt = 0; cnt < kick - 1; ++cnt) {
            idx = (idx + 1) % mky.length;
        }
        mky.splice(idx, 1);
        console.log("mky = ", mky);
    }
    return mky[0];
}
console.log(monkey2(10, 7))