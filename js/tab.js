/***************************
	设置tab的数量
***************************/

//开始读取文件模版 js
var tabModel ;
$.ajax({
    url: 'models/tab.rb',
    cache: false,
    async: false,
    success: function(f) {
    	tabModel = f;
    },
    error:function(){
	    console.log('models/tab.rb：文件不存在');
    }
});
var tabTemplate  = Handlebars.compile(tabModel);

//验证tab数量
function checkTabNum(sender){
	var me = $(sender);
	var value =$.trim(me.val());
	if(!/^[0-9]*$/.test(value)){
		me.next().html('请输入数字').show();
		return false;
	}
	else{
		me.next().hide();
	}
	return true;
}

//修改tab数量
function changeTabNum(sender){
	var me = $(sender);
	var modal = me.parents('.modal').first();
	var input = modal.find('.J-tabNum');
	
	if(!checkTabNum(input))return;
	
	var modalId = modal.attr('id');
	if(!modalId)return;
	
	var tId = modalId.split('-')[0];
	var tabId = tId + "-data-container";
	var value = input.val();
	var tabContent = $('#' + tabId);
	
	var json = {
		tabs: []
	};
	
	for(var i = 0 ; i < value ; i++){	
		
		var thisid = "panel-" + randomNumber();
		//sort：当前索引
		var j = {sort: i , id: thisid};
		json.tabs.push(j);
	}
	
	var tabHtml = tabTemplate(json);
	tabContent.html(tabHtml);
	
	//设置拖拽
	$('.demo .tab-pane').sortable({ 
		opacity : 0.35,
		connectWith: '.box'
	});
	$('.modal-backdrop').click();
}