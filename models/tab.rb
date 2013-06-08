<ul class="nav nav-tabs">
	{{#each tabs}}
		<li {{#if sort}}  {{else}} class="active" {{/if}} ><a href="#{{id}}" data-toggle="tab" contenteditable="true">tab {{sort}}</a></li>
	{{/each}}
</ul>
<div class="tab-content">
	{{#each tabs}}
	<div class="tab-pane {{#if sort}}  {{else}} active {{/if}}" id = "{{id}}" contenteditable="true">
		
	</div>
	{{/each}}
</div>