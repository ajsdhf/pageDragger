/**************************
* 表格全局参数
**************************/

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
	var jsonId = 'table-' + tId;
	
	//如果该表格对象不存在
	if(!grobalTableDataJson[jsonId]){
		
		var json = {}
		//新建对象
		$.extend(json,{
			type : '',
			id : tId,
			columnNum: 0,
			rowNum: 0,
			zbtable:{
				columnKey:[],
				columnValue: []
			},
			bbtable:{
				columnKey:[],
				columnValue: []
			}
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
		
		//生成指标表格
		zbTable(tId);
		
		//生成报表表格
		bbTable(tId);
	}
}

//删除表格
function removeTableData(sender){
	var me = $(sender);
	var tableId = me.parent().find('.tableContent').attr('id');
	
	if(tableId){
		var tId = tableId.split('-')[0];
		var jsonId = 'table-' + tId;
		
		if(grobalTableDataJson[jsonId]) delete grobalTableDataJson[jsonId];
	}
}

//保存表格
function saveTable(){
	
}
/**************************
* zbtable 指标表格
**************************/

//开始读取文件模版 js
var zbTableModel ;
var zbTableTemplate
$.ajax({
    url: 'models/table.zbTable.rb',
    cache: defaultSettings.ajaxCash,
    async: false,
    success: function(f) {
    	zbTableModel = f;
    	zbTableTemplate  = Handlebars.compile(zbTableModel);
    },
    error:function(){
	    console.log('/models/table.zbTable.rb：文件不存在');
    }
});




//制定表格指标
function setzbTableKey(sender){
	var me = $(sender);
	var sort = me.attr('sort');
	
	//获取modalid，对应tableid
	var modalId = me.parents('.modal').first().attr('id');
	var tId = modalId.split('-')[0];
	var jsonId = 'table-' + tId;
	
	var t = grobalTableDataJson[jsonId];
	if(!t) {alert('系统错误 - code3！');return;}
	
	t.zbtable.columnKey[sort] = me.html();
}
//制定表格表头
function setzbTableValue(sender){
	var me = $(sender);
	var sort = me.attr('sort');
	
	//获取modalid，对应tableid
	var modalId = me.parents('.modal').first().attr('id');
	var tId = modalId.split('-')[0];
	var jsonId = 'table-' + tId;
	
	var t = grobalTableDataJson[jsonId];
	if(!t) {alert('系统错误 - code3！');return;}
	
	t.zbtable.columnValue[sort] = me.html();
	
}

//修改指标表格
function zbTable(tId){
	var modalId = tId + '-modal-container';
	var jsonId = 'table-' + tId;
	
	var modal = $('#' + modalId);
	var t = grobalTableDataJson[jsonId];
	
	if(!modal || !t) {alert('系统错误 - code1！');return;}
	
	var json = getCompileJson(tId);
	var tableHtml = zbTableTemplate(json);
	
	modal.find('.zbTable').html(tableHtml);	
}

//生成模版解析json
function getCompileJson(tId){
	var jsonId = 'table-' + tId;
	var t = grobalTableDataJson[jsonId];
	
	if(!t) {alert('系统错误 - code2！');return;}
	
	var json = {
		column : []
	};
	
	var percent = 100/(parseInt(t.columnNum) + 1);
	for(var i = 0 ; i < t.columnNum ; i++){
		var column = t.zbtable.columnValue[i];
		var key = t.zbtable.columnKey[i];
		
		if(!column) column = '';
		
		//sort：当前列的索引
		var j = {key: key,value: column ,sort: i ,percent: percent};
		json.column.push(j);
	}
	
	return json;
}



/**************************
* bbtable 报表表格
**************************/

//开始读取文件模版 js
var bbTableModel ;
var bbTableTemplate
$.ajax({
    url: 'models/table.bbTable.rb',
    cache: defaultSettings.ajaxCash,
    async: false,
    success: function(f) {
    	bbTableModel = f;
    	bbTableTemplate  = Handlebars.compile(bbTableModel);
    },
    error:function(){
	    console.log('/models/table.bbTable.rb：文件不存在');
    }
});

//修改报表表格
function bbTable(tId){
	var modalId = tId + '-modal-container';
	var jsonId = 'table-' + tId;
	
	var modal = $('#' + modalId);
	var t = grobalTableDataJson[jsonId];
	
	if(!modal || !t) {alert('系统错误 - code1！');return;}
	
	var json = getbbCompileJson(tId);
	var tableHtml = bbTableTemplate(json);
	
	modal.find('.bbTable').html(tableHtml);
}

//生成模版解析json
function getbbCompileJson(tId){
	var jsonId = 'table-' + tId;
	var t = grobalTableDataJson[jsonId];
	
	if(!t) {alert('系统错误 - code2！');return;}
	
	var json = {
		column : []
	};
	
	var percent = 100/(parseInt(t.columnNum) + 1);
	
	for(var i = 0 ; i < t.columnNum ; i++){
		var value = t.bbtable.columnValue[i];
		
		if(!value) value = '';
		
		//sort：当前列的索引
		var j = {value: value ,sort: i ,percent: percent};
		json.column.push(j);
	}
	
	return json;
}

//制定表格指标
function setbbTableKey(sender){
	var me = $(sender);
	var checked = me.prop('checked');
	var value = me.val();
	
	//获取modalid，对应tableid
	var modal = me.parents('.modal').first();
	var modalId = modal.attr('id');
	var tId = modalId.split('-')[0];
	var jsonId = 'table-' + tId;
	
	var t = grobalTableDataJson[jsonId];
	if(!t) {alert('系统错误 - code3！');return;}
	
	//表头
	var bbth = modal.find('.J-bbth');
	var vals = 0;
	$.each(bbth,function(i,item){
		var th = $(item);
		var thval = th.html();
		var thsort = th.attr('sort');
		
		if(thval != ''){
			vals ++;
		}
		
		//新增列
		if(checked){
			//找到空的列
			if(thval == ''){
				t.bbtable.columnKey[thsort] = value ;
				th.text(value);
				return false;
			}
		}
		else{//删除列
			if(thval == value){
				t.bbtable.columnKey[thsort] = '' ;
				th.text('');
				return false;
			}
		}
	});
	
	if(vals == bbth.length){
		me.removeAttr('checked');
	}
	
}
//制定表格表头
function setbbTableValue(sender){
	var me = $(sender);
	var sort = me.attr('sort');
	
	//获取modalid，对应tableid
	var modalId = me.parents('.modal').first().attr('id');
	var tId = modalId.split('-')[0];
	var jsonId = 'table-' + tId;
	
	var t = grobalTableDataJson[jsonId];
	if(!t) {alert('系统错误 - code3！');return;}
	
	t.bbtable.columnValue[sort] = me.html();
	
}