{{#if isEdit}}
	{{#each content}}
		<h3 contenteditable="true" rel="changeClass" class="{{className}}"> {{{h3}}}
		</h3>
	{{/each}}
{{else}}
	<h3 contenteditable="true" rel="changeClass"> 标题
		<small>	副标题 </small>
	</h3>
{{/if}}
