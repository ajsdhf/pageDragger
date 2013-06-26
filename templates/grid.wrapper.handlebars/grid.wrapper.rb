{{#if isEdit}}
	{{#each content}}
		<div id = "{{column}}" class="wrapper clearfix ui-sortable" rel="changeClass">
			
		</div>
	{{/each}}
{{else}}
	<div class="clearfix wrapper ui-sortable" rel="changeClass">
	
	</div>
{{/if}}

