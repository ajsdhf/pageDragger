{{#if isEdit}}
	{{#each content}}
		<ol contenteditable="true" rel="changeClass" class = "{{className}}">
		  	{{#each li}}
		  		<li>{{text}}</li>
		  	{{/each}}
		</ol>
	{{/each}}
{{else}}
	<ol contenteditable="true" rel="changeClass">
	  <li>示例数据</li>
	  <li>示例数据</li>
	  <li>示例数据</li>
	  <li>示例数据</li>
	</ol>
{{/if}}


