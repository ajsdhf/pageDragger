<table class="table table-bordered">
	<thead>
		<tr>
			{{#each column}}
				<th contenteditable="true" sort = "{{sort}}" onkeyup = "setzbTableValue(this);">{{name}}</th>
			{{/each}}
		</tr>
	</thead>
	<tbody>
		
	</tbody>
</table>