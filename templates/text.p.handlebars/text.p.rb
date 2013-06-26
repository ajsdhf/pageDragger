{{#if isEdit}}
	{{#each content}}
		<p contenteditable="true" rel="changeClass" class="{{className}}">{{{p}}}</p>
	{{/each}}
{{else}}
	<p contenteditable="true" rel="changeClass">p. 段落</p>
{{/if}}
