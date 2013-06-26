{{#if isEdit}}
{{#each content}}
<div class="tabbable" id = "{{id}}-data-container" rel = "changeClass"> <!-- Only required for left/right tabs -->
	<ul class="nav nav-tabs">
		{{#each tabpanes}}
		<li class="{{#if isActive}}active{{/if}}"><a href="#{{tabpaneId}}" data-toggle="tab" contenteditable="true">{{tabname}}</a></li>
		{{/each}}
	</ul>
	<div class="tab-content">
		{{#each tabpanes}}
		<div class="tab-pane {{#if isActive}}active{{/if}} ui-sortable" id = "{{tabpaneId}}" contenteditable="true">
		</div>
		{{/each}}
	</div>
</div>
<div id="{{id}}-modal-container" class="modal fade hide" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-body">
		<form class="form-horizontal">
			<div class="control-group">
				tab页数：<input type = "text" class = "J-tabNum" onkeyup = "checkTabNum(this);" />
				<span class="alert inline-alert">
				  请输入文字
			   </span>
			</div>
		</form>
	</div>
	<div class="modal-footer">
		<button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>
		<button class="btn btn-primary" onclick = "changeTabNum(this);" >确定</button>
	</div>
</div>
{{/each}}

{{else}}

<div class="tabbable" id = "myTabs" rel = "changeClass"> <!-- Only required for left/right tabs -->
	<ul class="nav nav-tabs">
		<li class="active"><a href="#p-init-111" data-toggle="tab" contenteditable="true">tab 0</a></li>
	</ul>
	<div class="tab-content">
		<div class="tab-pane active" id="p-init-111" contenteditable="true">
			
		</div>
	</div>
</div>
<div id="modal-container-tab" class="modal fade hide" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-body">
		<form class="form-horizontal">
			<div class="control-group">
				tab页数：<input type = "text" class = "J-tabNum" onkeyup = "checkTabNum(this);" />
				<span class="alert inline-alert">
				  请输入文字
			   </span>
			</div>
		</form>
	</div>
	<div class="modal-footer">
		<button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>
		<button class="btn btn-primary" onclick = "changeTabNum(this);" >确定</button>
	</div>
</div>
{{/if}}