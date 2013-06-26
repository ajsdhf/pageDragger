{{#if isEdit}}
	{{#each content}}
		<ul class="{{className}}" rel="changeClass">
		  <li contenteditable="true">{{li}}</li>
		</ul>
	{{/each}}
{{else}}
	<ul class="breadcrumb" rel="changeClass">
	  <li contenteditable="true">文字示例</li>
	</ul>
{{/if}}


