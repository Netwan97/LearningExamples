var level = prompt("请设置金字塔的层数：");
// 获取输入的纯数字，其余情况皆为NaN
level = parseFloat(level) && Number(level);  // &&,前面的条件为真时执行后面的条件
// 判断用户的输入是否合法
if (isNaN(level)) {
    alert("金字塔的层数必须是纯数字")
}
// 循环遍历金字塔的层数
for (var i = 1; i <= level; i++) {
    // 输出星星前的空格
    var blank = level - i;
    for (var k = 0; k < blank; k++) {
        document.write("&nbsp");          // 打印空格
    }
    // 打印星星
    var star = i * 2 - 1;
    for (var j = 0; j < star; j++) {
        document.write("*");
    }
    // 换行
    document.write("<br>");
}