var configurationJson = {
	wrapperBorderBtn: {				//容器边框
		isButton: 0,
		name: '边框',
		value: 'wrapper'
	},
	alignSel:{						//文本设置align
		isSelect: 1,
		content: [
			{name: "Default", val: ''},
			{name: "Left",    val: 'text-left'},
			{name: "Center",  val: 'text-center'},
			{name: "Right",   val: 'text-right'}
		]
	},
	colorSel:{						//文本设置color
		isSelect: 1,
		content: [
			{name: "Default",    val: ''},
			{name: "Muted",    	 val: 'muted'},
			{name: "Warning",    val: 'text-warning'},
			{name: "Error",  	 val: 'text-error'},
			{name: "Info",  	 val: 'text-info'},
			{name: "Success",    val: 'text-success'}
		]
	},
	ul_unstyled:{					//ul无序
		isButton: 1,
		name: '无序',
		value: 'unstyled'
	},
	des_horizontal:{				//描述中间对其
		isButton: 1,
		name: '中间对齐',
		value: 'dl-horizontal'
	},
	tableBtn_striped:{				//表格样式-斑马
		isButton: 1,
		name: '斑马',
		value: 'table-striped'
	},
	tableBtn_bordered:{				//表格样式-border
		isButton: 1,
		name: '边框',
		value: 'table-bordered'
	},
	tableBtn_hover:{				//表格样式-hover
		isButton: 1,
		name: 'hover',
		value: 'table-hover'
	},	
	tableBtn_condensed:{			//表格样式-紧凑
		isButton: 1,
		name: '紧凑',
		value: 'table-condensed'
	},
	datetypeBtn:{					//添加时间类型选择
		isButton: 1,
		name: '日期类型',
		value: 'show'
	},
	tabSetting:{					//设置tab页数
		isModal: 1,
		href: 'modal-container-tab',
		name: '设置',
		content: ''
	},
	tableData:{						//设置表格数据
		isModal: 1,
		href: 'modal-container-table',
		name: '设置',
		content: ''
	},
	chartData:{						//设置chart数据
		isModal: 1,
		href: 'modal-container-chart',
		name: '设置',
		content: ''
	}
}

//通用修改绑定事件
function commonViewChange(ev){
	  var me = $(ev.target);
	  var val = me.val();
	  var targetDom = me.parents('.ui-draggable').first().find('.view').find('[rel = "changeClass"]');
	  var removeClasses = '';
	  me.find('option').each(function(i,item){
			removeClasses += $(item).attr('value')  + " ";
	  });
	  targetDom.removeClass(removeClasses);
	  targetDom.addClass(val);
}

//通用点击事件
function commonViewClick(ev){
	  var me = $(ev.target);
	  var val = me.attr('rel');
	  var targetDom = me.parents('.ui-draggable').first().find('.view').find('[rel = "changeClass"]').first();
	 
	  if(me.hasClass('active')){
		  me.removeClass('active');
		  targetDom.removeClass(val);
	  }
	  else{
		  me.addClass('active');
		  targetDom.addClass(val);
	  }
 }
