<table class="table table-bordered">
	<thead>
		<tr>
			<th style="color: #ddd">列头－></th>
			{{#each column}}
				<th style = "width: {{percent}}%" contenteditable="true" sort = "{{sort}}" onkeyup = "setzbTableValue(this);">
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
				<th style = "width: {{percent}}%" contenteditable="true" sort = "{{sort}}" onkeyup = "setzbTableKey(this);">{{key}}</th>
			{{/each}}
		</tr>
	</thead>
	<tbody>
		
	</tbody>
</table>