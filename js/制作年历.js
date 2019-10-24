var year = parseInt( prompt ("输入年份：", '2018'));
document.write (calendar (year));
function calendar (y) {
    var w = new Date(y, 0).getDay();
    var html = '';
    for (var m = 1; m <= 12; m++) {            // 遍历月份
        html += '<table style = "background-color: #c7c9e2;">';
        html += '<tr> <th colspan="7">' + y +'年' + m + '月</th></tr>';
        html += '<tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td>';
        html += '<td>五</td><td>六</td>';
        var max = new Date(y, m, 0).getDate();
        html += '<tr>';
        for (var d = 1; d <= max; d++) {      // 遍历每一天
            if (w && d == 1){
                html += '<td colspan =' + w + '> </td>';
            }
            html += '<td>' + d + '</td>';
            if (w == 6 && d != max) {
                html += '</tr><tr>';
            } else if (d == max){
                html += '</tr>';
            }
            w = (w + 1 > 6) ? 0 : w+1;
        }
        html += '</table>';
    }
    return html;
}