/**
 * @argument name {string} 			类别显示名称。
 * @argument list {array} 			控件对象列表，由文件生成，为空即可。
 * @argument fileList {array} 。		控件配置文件的文件夹名称，必须以.handlebars结尾
 */
var pluginList = {							
	grid: {
		name: '布局' , 
		list: [] ,
		fileList:[
			'grid.1.handlebars',
			'grid.2.handlebars',
			'grid.wrapper.handlebars',
			'grid.tab.handlebars'
		]
	},
	text: {
		name: '文本', 
		list: [],
		fileList:[
			//'text.pagehead.handlebars',
			'text.title.handlebars',
			'text.bread.handlebars',
			'text.p.handlebars',
			'text.ul.handlebars',
			'text.description.handlebars'
		]
	},
	data: {
		name: '数据交互', 
		list: [],
		fileList:[
			'data.table.handlebars',
			'data.chart.handlebars',
			'data.datepicker.handlebars'
		]
	}
};

var defaultSettings = {
	ajaxCash: false;
}
