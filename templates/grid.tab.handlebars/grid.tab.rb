<div class="tabbable" id = "myTabs" rel = "changeClass"> <!-- Only required for left/right tabs -->
	<ul class="nav nav-tabs">
		<li class=""><a href="#panel-54597" data-toggle="tab" contenteditable="true">tab 0</a></li>
		<li class="active"><a href="#panel-150886" data-toggle="tab" contenteditable="true">tab 1</a></li>
	</ul>
	<div class="tab-content">
		<div class="tab-pane" id="panel-54597" contenteditable="true">
			
		</div>
		<div class="tab-pane active" id="panel-150886" contenteditable="true">
			
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
