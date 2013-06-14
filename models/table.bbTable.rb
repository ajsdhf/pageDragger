<table class="table table-bordered">
	<thead>
		<tr>
			<th style="color: #ddd">列头－></th>
			{{#each column}}
				<th style = 'width: {{percent}}%' contenteditable="true" sort = "{{sort}}" onkeyup = "setbbTableValue(this);">
				{{#if value}}
					{{value}}
				{{else}}
					col {{sort}}
				{{/if}}
				</th>
			{{/each}}
		</tr>
		<tr>
			<th style="color: #ddd">列值－></th>
			{{#each column}}
				<th style = 'width: {{percent}}%' sort = "{{sort}}" class="J-bbth"></th>
			{{/each}}
		</tr>
	</thead>
	<tbody>
		
	</tbody>
</table>