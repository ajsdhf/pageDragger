<div id = "{{id}}" class="{{className}}" name = "{{pathname}}"  viewpath = "{{viewpath}}" jsonpath = "{{jsonpath}}">
	<a href="#close" class="remove label label-important"><i class="icon-remove icon-white"></i>remove</a>
	<span class="configuration">
		{{#each configuration}}
			{{#if isSelect}}
				<!---配置功能 select   
					<select onchange="commonViewChange(event)" >
						{{#each content}}
						<option value="{{val}}">{{name}}</option>
						{{/each}}
					</select>
				--->
				
				<div class="btn-group" classtype="select">
	                <button class="btn dropdown-toggle btn btn-mini" data-toggle="dropdown">{{name}}<span class="caret"></span></button>
	                <ul class="dropdown-menu">
	                  {{#each content}}
	                  <li><a value="{{val}}"href="javascript:void(0);" onclick="commonViewChange(event)">{{name}}</a></li>
	                  {{/each}}
	                </ul>
	            </div>   
		    {{/if}}   
		    
			{{#if isButton}}
				<!---配置功能 button--->
				<a classtype="button" onclick="commonViewClick(event)" class="btn btn-mini" href="javascript:void(0);" rel="{{value}}" >{{name}}</a>
		    {{/if}} 
		     
			{{#if isModal}}
				<!---配置功能 modal--->
				<a classtype="modal" class="btn btn-mini toBechange" href="#{{href}}"  role="button" data-toggle="modal">{{name}}</a>
		    {{/if}}
		{{/each}}
	</span>
	<div class="preview">
		{{#if isInput}}
	        <input type="text" bindAttr value="{{previewValue}}" />
	    {{else}}
	    	{{{previewValue}}}
	    	
	    	{{#if limitNum}}
	    	<span total = '{{limitNum}}' class='badge J-limitNum'>{{limitNum}}</span>
	    	{{/if}}
	    	
	    {{/if}}
	</div>
	<span class="drag label"><i class="icon-move"></i>drag</span>
	<div class="view" >
		{{{view}}}
	</div>
</div>