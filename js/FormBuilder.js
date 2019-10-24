(function (window) {
    var FormBuilder = function (data){
        this.data = data;
    };
    window.FormBuilder = FormBuilder;
})(window);

FormBuilder.prototype.create = function () {
    var html = '';
    for ( var k in this.data) {
        var item = {tag: '', text: '', attr: {}, option: null};
        for (var n in this.data[k]) {
            item[n] = this.data[k][n];
        }
        console.log('item = ', item);
        html += builder.toHTML (item);
    }
    return '<table>' + html +'</table>';
};
var builder = {
    /*
    toHTML: function (obj) {},
    attr: function (attr) {},
    item: {
        input: function (attr, option) {},
        select: function (attr, option) {},
        textarea: function (attr) {}
    }
    */
    toHTML: function (obj) {
        var html = this.item[obj.tag] (this.attr(obj.attr), obj.option);
        return '<tr><th>' + obj.text + '</th><td>' + html +'</td></tr>';
    },
    attr: function (attr) {
        var html = '';
        for (var k in attr) {
            html += k + '="' + attr[k] + '" ';
        }
        return html;
    },
    item: {
        input: function (attr,option) {
            var html = '';
            if (option == null) {
                html +=  '<input ' + attr + '>';
            } else {
                for (var k in option) {
                    html += '<lable><input ' + attr + 'value="' + k + '"' + '>';
                    html += option[k] + '</lable>';  
                }
            }
            return html;
        },
        select: function (attr, option) {
            var html = '';
            for (var k in option) {
                html += '<option value ="' + k + '">' + option[k] + '</option>';
            }
            return '<select ' + attr + '>' + html +'</select>';
        },
        textarea: function (attr) {
            return '<textarea ' + attr + '></textarea>';
        }
    }
};
