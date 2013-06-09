<table class="table table-bordered">
	<thead>
		<tr>
			<th>指标：</th>
			{{#each column}}
				<th style = 'width: {{percent}}%' contenteditable="true" sort = "{{sort}}" onkeyup = "setzbTableKey(this);">{{key}}</th>
			{{/each}}
		</tr>
		<tr>
			<th>指标名称：</th>
			{{#each column}}
				<th style = 'width: {{percent}}%' contenteditable="true" sort = "{{sort}}" onkeyup = "setzbTableValue(this);">{{value}}</th>
			{{/each}}
		</tr>
	</thead>
	<tbody>
		
	</tbody>
</table>