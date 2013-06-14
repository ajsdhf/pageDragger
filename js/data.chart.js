/**************************
* 图表全局参数
**************************/

//全局图表json
var grobalChartDataJson = {};

//图表参数
var chartDataDefalts = {
}


/**************************
* 业务函数
**************************/

//开始读取文件模版 js
var chartTemplate
$.ajax({
    url: 'models/chart.rb',
    cache: defaultSettings.ajaxCash,
    async: false,
    success: function(f) {
    	chartTemplate  = Handlebars.compile(f);
    },
    error:function(){
	    console.log('/models/chart.rb：文件不存在');
    }
});

//修改图形类型
function changeChartType(sender){
	var me = $(sender);
	var type = me.attr('chartType');
	
	//获取modalid，对应chartid
	var modalId = me.parents('.modal').first().attr('id');
	var tId = modalId.split('-')[0];
	var jsonId = 'chart-' + tId;
	
	//如果该图表对象不存在
	if(!grobalChartDataJson[jsonId]){
		
		var json = {}
		//新建对象
		$.extend(json,{
			type : type,
			id : tId,
			chart: [
			]
		});
		
		grobalChartDataJson[jsonId] = json;
	}
	else{
		var t = grobalChartDataJson[jsonId];
		
		//类型不变，则返回
		if(t.type == type)return ; 
		t.type = type;
	}
	var t = grobalChartDataJson[jsonId];
	
	buildChart(tId);
}

//根据图形类型不同输出html
function buildChart(tId){
	var modalId = tId + '-modal-container';
	var jsonId = 'chart-' + tId;
	
	var modal = $('#' + modalId);
	var t = grobalChartDataJson[jsonId];
	
	if(!modal || !t) {alert('系统错误 - code1！');return;}
	
	var json = getChartCompileJson(tId);
	
	var html = chartTemplate(json);
	modal.find('.chartConfigContent').html(html);
	
	handleTabsIds()
}

//生成模版解析json
function getChartCompileJson(tId){
	var jsonId = 'chart-' + tId;
	var t = grobalChartDataJson[jsonId];
	
	if(!t) {alert('系统错误 - code2！');return;}
	
	var type = t.type;
	var me = $('[chartType="'+ type +'"]');
	var header = me.html();
	
	var json = {
		chartHead : header
	};
	
	return json;
}

//添加报表图表的key
function setbbChartKey(sender){
	var me = $(sender);
}