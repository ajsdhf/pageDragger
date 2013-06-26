/***************************
	保存网页
	
	json:{
		id: id,
		type: type,
		children:[
			
		]
	}
***************************/

var testJson = [];

//保存
$('#save').click(function(){
	var saveJson = {
		id: 'demo',
		type: 0,
		content:  [
			
		],
		children: [
			
		]
	};
	handleUiid();
	runDemoView('demo',saveJson);
	console.log( saveJson );
	console.log( JSON.stringify(saveJson) );
	localStorage.s = JSON.stringify(saveJson);
});

//遍历demo
function runDemoView(target,json){
	var me = $('#' + target);
	var doms = $('[pid="'+ target +'"]' , me);
	
	doms.each(function(){
		var item = $(this);
		var type = item.attr('name');
		dealDragType(type,item,json);
	});
}

//根据type处理
function dealDragType(type,item,json){
	var me = $(item);
	var j = {
				id: me.attr('id'),
				pid: me.attr('pid'),
				//viewpath: me.attr('viewpath'),
				//jsonpath: me.attr('jsonpath'),
				type: type,
				isEdit: 1,
				content:  [
					
				],
				children: [
					
				]
			};
	
	switch(type){
		//栅格布局
		case 'grid.1': 
			var sortable = me.find('[rel="changeClass"]').first().children();
			sortable.each(function(){
				var sortid = $(this).attr('id');
				var className = $(this).attr('class');
				j.content.push({
					column: sortid,
					className: className
				});
				if(sortid) {
					runDemoView(sortid,j);
				}
			});
		break;
		
		//栅格布局
		case 'grid.2': 
			var sortable = me.find('[rel="changeClass"]').first().children();
			sortable.each(function(){
				var sortid = $(this).attr('id');
				var className = $(this).attr('class');
				j.content.push({
					column: sortid,
					className: className
				});
				if(sortid) {
					runDemoView(sortid,j);
				}
			});
		break;
		
		//wrapper
		case 'grid.wrapper': 
			var sortable = me.find('.ui-sortable').first();
			var sortid = sortable.attr('id');
			if(sortid) {
				runDemoView(sortid,j);
				j.content.push({
					column: sortid
				})
			}
			
			break;
		
		//tab
		case 'grid.tab': 
			var tab = me.find('.tabbable').first();
			var tabId = tab.attr('id');
			var tid = tabId.split('-')[0];
			
			j.content.push({
				id: tid,
				tabpanes: []
			});
			
			$('.tab-pane',tab).each(function(){
				var tabpane = $(this);
				var tpid = tabpane.attr('id');
				var name = $('[href="#'+ tpid +'"]',tab).text();
				var isActive = tabpane.hasClass('active');
				if(tpid){
					j.content[0].tabpanes.push({
						tabpaneId: tpid,
						tabname: name,
						isActive: isActive
					});
					runDemoView(tpid,j);
				}
			})
			
			
		break;
		
		//标题
		case 'text.title': 
			var h3 = $('[rel="changeClass"]',me).first();
			var className = h3.attr('class');
			
			j.content.push({
				h3: h3.html() ? h3.html() : '',
				className: className ? className : ''
			});
			
		break;
		
		//面包屑
		case 'text.bread': 
			var ul = $('[rel="changeClass"]',me).first();
			var li = $('li',ul);
			var className = ul.attr('class');
			
			j.content.push({
				li: li.text() ? li.text() : '',
				className: className ? className : ''
			});
			break;
			
		//文字段落
		case 'text.p': 
			var p = $('[rel="changeClass"]',me).first();
			var className = p.attr('class');
			
			j.content.push({
				p: p.text() ? p.text() : '',
				className: className ? className : ''
			});
			break;
			
		//列表
		case 'text.ul': 
			var ol = $('[rel="changeClass"]',me).first();
			var li = $('li',ol);
			var className = ol.attr('class');
			
			var liArray = [];
			li.each(function(){
				var text = $(this).text();
				liArray.push({
					text: text
				});
			});
			
			j.content.push({
				li: liArray,
				className: className ? className : ''
			});
			break;
			
		//描述
		case 'text.description': 
			var dl = $('[rel="changeClass"]',me).first();
			var dchild = dl.children();
			var className = dl.attr('class');
			
			var dlArray = [];
			dchild.each(function(){
				var tagName = $(this).get(0).tagName.toLowerCase();
				var text = $(this).text();
				dlArray.push({
					tagName: tagName,
					text: text
				});
			});
			
			j.content.push({
				child: dlArray,
				className: className ? className : ''
			});
			break;
		
		//表格
		case 'data.table': 
			var table = $('[rel="changeClass"]',me).first();
			var className = table.attr('class');
			j.content.push({
				className: className ? className : ''
			});
		break;
		
		//图表
		case 'data.chart': 
			
		break;
		
		//日期选择
		case 'data.datepicker':
			var datepicker = $('[rel="changeClass"]',me).first();
			var className = datepicker.attr('class');
			j.content.push({
				className: className ? className : ''
			});
		break;
		
	}
	json.children.push(j);
}


//处理各个组件id
function handleUiid(){
	$('.demo .ui-draggable').each(function(){
		var me = $(this);
		
		//设置id
		if(!me.attr('id')){
			var id = 'draggable-' + randomNumber();
			me.attr('id',id);
		}
		
		me.find('.ui-sortable').each(function(){
			var that = $(this); 
			
			//设置id
			if(!that.attr('id')){
				var id = 'sortable-' + randomNumber();
				that.attr('id',id);
			}
		});
		
		var pId = me.parent().attr('id');
		me.attr('pid',pId);
	});
}

//获取生成ui的html模板
var uitemplate ;
$.ajax({
    url: 'models/edit.rb',
    cache: ajaxCash,
    async: true,
    success: function(f) {
    	uitemplate =  Handlebars.compile(f);
    	editInit();
    	demoSortable();
    	handleModalIds();
    	dealEditConfiguration();
    },
    error:function(){
	    console.log('models/edit.rb：文件不存在');
    }
});

//根据保存的json生成html代码
function editInit(){
	console.log(localStorage.s)
	var json = localStorage.s?$.parseJSON(localStorage.s):{} ;
	compileSaveJson(json);
}


//解析保存的json
function compileSaveJson(json){
	var id = 		json.id,
		type = 		json.type,
		content = 	json.content,
		pid = 		json.pid,
		//viewpath =  json.viewpath,
		//jsonpath =  json.jsonpath,
		isEdit = 	json.isEdit,
		content =	json.content,
		children =	json.children;
	if(!type){
		children = children?children:[];
		
		$.each(children,function(i,child){
			compileSaveJson(child);
		});
		return;
	}
   
    var cate = type.split('.')[0];
    
    //获得文件模版
    var template = pluginList[cate].templateList[type];
    view = template(json);
    
    //获得json
    var itemjson = pluginList[cate].jsonList[type];
    itemjson.view = view;
    itemjson.id = id;
    
    var html = uitemplate(itemjson);
    var app = $(html).appendTo($('#' + pid));
    dealEditConfiguration(app);
    
    $.each(children,function(i,child){
		compileSaveJson(child);
	});
}

//sortable
function demoSortable(){
	$('.demo .column,.demo .wrapper').sortable({ 
		opacity : 0.35,
		connectWith: '.column,.wrapper,.tab-pane'
	});
	$( ".demo, .demo .column ,.demo .wrapper" ).sortable({
		connectWith: '.column',
		opacity : 0.35,
		handle: ".drag"
	});
	$('.demo .tab-pane').sortable({ 
		opacity : 0.35,
		connectWith: '.box'
	});
}

function dealEditConfiguration(sender){
	var me = $(sender);
	
	var configContent = me.find('.configuration').first();
	var rel = me.find('[rel="changeClass"]').first();
	
	var configs = configContent.children();
	configs.each(function(){
		var config = $(this);
		var type = config.attr('classtype');
		if(type == 'button'){
			var relclass = config.attr('rel');
			if(rel.hasClass(relclass)){
				config.addClass('active');
			}
		}
		else if(type == 'select'){
			config.find('li').each(function(){
				var li = $(this);
				var a = li.find('a');
				var val = a.attr('value');
				if(rel.hasClass(val) && val){
					li.addClass('active');
				}
			})
		}
	});
}