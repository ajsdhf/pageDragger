{{#if isEdit}}
	<div class="row-fluid clearfix" rel="changeClass">
		{{#each content}}
			<div class = "{{className}}" id = "{{column}}">
				
			</div>
		{{/each}}
	</div>
{{else}}
	<div class="row-fluid clearfix" rel="changeClass"><div class="span12 column"></div></div>
{{/if}}