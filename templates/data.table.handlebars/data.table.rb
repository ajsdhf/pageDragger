<div class="tableContent">
	<table class="table" contenteditable="true" rel="changeClass">
	  
	</table>
</div>
<div id="modal-container-table" class="modal fade hide" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-body">
		<div class="tabbable" > 
			<ul class="nav nav-tabs">
				<li class="active"><a href="javascript:void(0);" >基本参数</a></li>
			</ul>
			<div class="tab-content">
				<div class="tab-pane active" >
					<form class="form-horizontal">
					  <div class="control-group">
					    列数： 
					      <input type="text" onkeyup = "changeColumnNum(this);" placeholder="请输入表格列数" />
					      <span class="alert inline-alert">
							  请输入文字
						  </span>
					  </div>
					  <div class="control-group">
					    行数：  
					    <input type="text" placeholder="请输入表格行数">
					    
					  </div>
					</form>
				</div>
			</div>
		</div>
		<div class="tabbable" id = "myTabs" rel = "changeClass"> 
			<ul class="nav nav-tabs">
				<li class="active"><a href="#panel-54597" data-toggle="tab" >指标</a></li>
				<li class=""><a href="#panel-150886" data-toggle="tab" >报表</a></li>
			</ul>
			<div class="tab-content">
				<div class="tab-pane active zbTable" id="panel-54597">
					
				</div>
				<div class="tab-pane" id="panel-150886">
					<div class="input-append">
					  <input class="span12" type="text" placeholder="请输入报表名称"  />
					  <button class="btn" type="button">搜索报表</button>
					</div>
					<div class="bbSelArea">
						<label class="checkbox inline bbLabel">
		                  <input type="checkbox"> 例子1 
		                </label>
		                <label class="checkbox inline bbLabel">
		                  <input type="checkbox"> 例子2
		                </label>
		                <label class="checkbox inline bbLabel">
		                  <input type="checkbox"> 例子3 
		                </label>
		                <label class="checkbox inline bbLabel">
		                  <input type="checkbox"> 例子4
		                </label>
		                <label class="checkbox inline bbLabel">
		                  <input type="checkbox"> 例子5 
		                </label>
		                <label class="checkbox inline bbLabel">
		                  <input type="checkbox"> 例子6
		                </label>
					</div>
					<div class="bbtable">
						
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="modal-footer">
		<button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>
		<button class="btn btn-primary">确定</button>
	</div>
</div>



