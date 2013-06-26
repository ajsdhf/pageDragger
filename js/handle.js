var bodyParser = [];
var templatesPath = 'templates/';			//模版文件夹路径
var ajaxCash = defaultSettings.ajaxCash ;						//ajax文件缓存
$.each(pluginList,function(cate,plugin){
	var fileList = plugin.fileList;
	$.each(fileList,function(i,item){
		var path = item;
		var pStr = path.lastIndexOf('.handlebars');
		
		//遍历文件夹列表
		if(pStr != '-1'){
	    	var shortPath = path.substring(0, pStr);
	    	
	    	//合成文件目录
	    	var turl = templatesPath + path + '/' + shortPath + '.rb';
	    	var curl = templatesPath + path + '/' + shortPath + '.config.rb';
	    	
	    	var view = '';
	    	//开始读取文件模版 html
	    	$.ajax({
			    url: turl,
			    cache: ajaxCash,
			    async: false,
			    success: function(f) {
			    	template  = Handlebars.compile(f);
			    	
			    	//缓存模版
			    	if(!pluginList[cate].list)pluginList[cate].templateList = [];
			    	pluginList[cate].templateList[shortPath] = template;
			    	
			    	view  = template({});
			    },
			    error:function(){
				    console.log(turl + '：文件不存在');
			    }
		    });
		    
		    //开始读取文件模版 js
	    	$.ajax({
			    url: curl,
			    cache: ajaxCash,
			    async: false,
			    success: function(f) {
			    	var json = $.parseJSON(f);
			    	var conf = json.configuration;
			    	var configuration = [];
			    	$.each(conf,function(i,item){
				    	var c = configurationJson[item];
				    	if(c)configuration.push(c);
			    	});
			    	json.view = view;
			    	json.viewpath = turl;
			    	json.jsonpath = curl;
			    	json.configuration = configuration;
			    	json.pathname = shortPath;
			    	
			    	//缓存json
			    	if(!pluginList[cate].jsonList)pluginList[cate].jsonList = [];
			    	pluginList[cate].jsonList[shortPath] = json;
			    	
			    	//存入list
			    	if(!pluginList[cate].list)pluginList[cate].list = [];
			    	pluginList[cate].list.push(json);
			    },
			    error:function(){
				    console.log(curl + '：文件不存在');
			    }
		    });
		}
	});
});

$.each(pluginList,function(i,item){
	bodyParser.push(item);
});

var content = {
	bodyParser: bodyParser
}

source    = $('#bodyHandlebars').html();
template  = Handlebars.compile(source);
var html  = template(content);
$('body').prepend(html);