<h1> Search form </h1>

<form action="/" method="get">
	<label for="search">Search</label>
	<input type="text" name="s" id="search" value="<?php the_search_query();?>">
	<button type="submit">Search</button>
</form>