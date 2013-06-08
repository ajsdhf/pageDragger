/**************************
* table
**************************/

//开始读取文件模版 js
var zbTableModel ;
$.ajax({
    url: 'models/table.zbTable.rb',
    cache: false,
    async: false,
    success: function(f) {
    	zbTableModel = f;
    },
    error:function(){
	    console.log('/models/table.zbTable.rb：文件不存在');
    }
});
var zbTableTemplate  = Handlebars.compile(zbTableModel);

//全局表格json
var grobalTableDataJson = {};

//表格参数
var tableDataDefalts = {
	columnNumMax : 13							//最大列数
}

//修改表格列数
function changeColumnNum(sender){
	var me = $(sender);
	var value =$.trim(me.val());
	
	//获取modalid，对应tableid
	var modalId = me.parents('.modal').first().attr('id');
	var tId = modalId.split('-')[0];
	var jsonId = 'zbtable-' + tId;
	
	//如果该表格对象不存在
	if(!grobalTableDataJson[jsonId]){
		
		var json = {}
		//新建对象
		$.extend(json,{
			type : 'zbtable',
			id : tId,
			columnNum: 0,
			rowNum: 0,
			columnValue: []
		});
		
		grobalTableDataJson[jsonId] = json;
	}
	
	var t = grobalTableDataJson[jsonId];
		
	if(!/^[0-9]*$/.test(value)){
		me.next().html('请输入数字').show();
	}
	else{
		if(value > tableDataDefalts.columnNumMax) {
			me.next().html('表格列数不能多于' + tableDataDefalts.columnNumMax + '行').show();
			return;
		}
		me.next().hide();
		t.columnNum = value;
		zbTable(tId);
	}
}

//制定表格指标
function setzbTableValue(sender){
	var me = $(sender);
	var sort = me.attr('sort');
	
	//获取modalid，对应tableid
	var modalId = me.parents('.modal').first().attr('id');
	var tId = modalId.split('-')[0];
	var jsonId = 'zbtable-' + tId;
	
	var t = grobalTableDataJson[jsonId];
	if(!t) {alert('系统错误 - code3！');return;}
	
	t.columnValue[sort] = me.html();
	
	//console.log(t.columnValue);
}

//修改指标表格
function zbTable(tId){
	var modalId = tId + '-modal-container';
	var jsonId = 'zbtable-' + tId;
	
	var modal = $('#' + modalId);
	var t = grobalTableDataJson[jsonId];
	
	if(!modal || !t) {alert('系统错误 - code1！');return;}
	
	var json = getCompileJson(tId);
	var tableHtml = zbTableTemplate(json);
	
	modal.find('.zbTable').html(tableHtml);	
}

//生成模版解析json
function getCompileJson(tId){
	var jsonId = 'zbtable-' + tId;
	var t = grobalTableDataJson[jsonId];
	
	if(!t) {alert('系统错误 - code2！');return;}
	
	var json = {
		column : []
	};
	
	for(var i = 0 ; i < t.columnNum ; i++){
		var column = t.columnValue[i];
		if(!column) column = '';
		
		//sort：当前列的索引
		var j = {name: column ,sort: i};
		json.column.push(j);
	}
	
	return json;
}

//删除表格
function removeTableData(sender){
	var me = $(sender);
	var tableId = me.parent().find('.tableContent').attr('id');
	
	if(tableId){
		var tId = tableId.split('-')[0];
		var jsonId = 'zbtable-' + tId;
		
		if(grobalTableDataJson[jsonId]) delete grobalTableDataJson[jsonId];
	}
}

//保存表格
function saveTable(){
	
}