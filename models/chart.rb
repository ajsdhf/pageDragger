<div class = "chartConfig">
	{{{chartHead}}}
</div>
<div class="tabbable" id = "myTabs" style = "margin-top: 10px;"> 
	<ul class="nav nav-tabs">
		<li class="active"><a href="#panel-54597" data-toggle="tab" >指标</a></li>
		<li class=""><a href="#panel-150886" data-toggle="tab" >报表</a></li>
	</ul>
	<div class="tab-content">
		<div class="tab-pane active zbTable" id="panel-54597">
			<div class="input-append">
			  <input class="span12" type="text" placeholder="请输入指标名称"  />
			  <button class="btn" type="button">搜索指标</button>
			  <button class="btn" type="button" onclick = "addzbChartKey(this);">添加指标</button>
			</div>
			<div class="zbSelArea">
				
			</div>
		</div>
		<div class="tab-pane" id="panel-150886">
			<div class="input-append">
			  <input class="span12" type="text" placeholder="请输入报表名称"  />
			  <button class="btn" type="button">搜索报表</button>
			</div>
			<div class="bbSelArea">
				<label class="checkbox inline bbLabel">
                  <input value="$例子1" type="checkbox" onclick="setbbChartKey(this);"> 例子1 
                </label>
                <label class="checkbox inline bbLabel">
                  <input value="$例子2" type="checkbox" onclick="setbbChartKey(this);"> 例子2
                </label>
                <label class="checkbox inline bbLabel">
                  <input value="$例子3" type="checkbox" onclick="setbbChartKey(this);"> 例子3 
                </label>
                <label class="checkbox inline bbLabel">
                  <input value="$例子4" type="checkbox" onclick="setbbChartKey(this);"> 例子4
                </label>
                <label class="checkbox inline bbLabel">
                  <input value="$例子5" type="checkbox" onclick="setbbChartKey(this);"> 例子5 
                </label>
                <label class="checkbox inline bbLabel">
                  <input value="$例子6" type="checkbox" onclick="setbbChartKey(this);"> 例子6
                </label>
			</div>
			<div class = "bbTable" style = "margin-top: 10px;">
				
			</div>
		</div>
	</div>
</div>