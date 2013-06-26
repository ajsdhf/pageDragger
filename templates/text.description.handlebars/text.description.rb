{{#if isEdit}}
	{{#each content}}
		<dl contenteditable="true" rel="changeClass" class="{{className}}">
			{{#each child}}
			<{{tagName}}>{{text}}</{{tagName}}>
			{{/each}}
		</dl>
	{{/each}}
{{else}}
	<dl contenteditable="true" rel="changeClass">
	    <dt>问题：</dt>
	    <dd>说明</dd>
	    <dt>示例问题：</dt>
	    <dd>示例说明示例说明示例说明示例说明示例说明示例说明示例说明示例说明示例说明示例说明示例说明</dd>
	    <dt>问题示例：</dt>
	    <dd>说明示例说明示例说明示例说明示例说明示例说明</dd>
	    <dt>问题描述：</dt>
	    <dd>说明示例说明示例说明示例说明</dd>
	</dl>
{{/if}}