var str = "<table>";
for(var i = 1; i < 10; i++ ){
    str += "<tr>";
    for(var j = 1; j <= i; j++){
        //拼接单元格
        str += "<td>" + i + "*" + j + "=" + i * j + "</td>";
    }
    str += "</tr>";
}
str += "</table>";
// 将拼接后的字符串显示到页面中
document.getElementById("table").innerHTML = str;