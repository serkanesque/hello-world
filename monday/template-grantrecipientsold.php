<?php

/*
Template Name: Grant recipients
*/

?>
<!DOCTYPE html>
<html>
<head>
<title>Title of the document</title>

<link rel="stylesheet" href="https://use.typekit.net/wvw1yyb.css">
<?php wp_head(); ?>

</head>

<body style="background-color: var(--grey);">
	<div id="main" class="">
			<?php get_header('logo'); ?>
	<nav>		

	<ul>
	<li><a href="">Who we are</a></li>
	<li><a href="">How we work</a></li>
	<li><a href="">What we do</a></li>
	<li class="dropdown">
			<a href="">Our impact</a>
		    <div class="dropdown-content">
      <a href="#">Mission & Values</a>
      <a href="#">History</a>
      <a href="#">Leadership</a>
    </div>
</li>
		<li><a href="">Newsroom</a></li>
		<li><a href="">Contact us</a></li>	

</ul>
			
	</nav>
	<nav>
		<ul>
			<li><a href="">Grantholders</a></li>
		</ul>
	</nav>

	<div class="bmenu">
		<button class="hamburger hamburger--collapse" type="button">
		<span class="hamburger-box">
		<span class="hamburger-inner"></span>
		</span>
		</button>
	</div>
	<div id="nav-drawer">
		<a href=""><div class="item">Who we are</div></a>	
		<a href=""><div class="item">How we work</div></a>	
		<a href=""><div class="item">What we do</div></a>	
		<a href=""><div class="item">Our impact</div></a>
		<a href=""><div class="item">Newsroom</div></a>	
		<a href=""><div class="item">Contact us</div></a>	
		<a href=""><div class="item">Grantholders</div></a>	
	</div>	


</div>



	<section id="hero" class="sub-page">		
		<div class="bg-img">
			<div class="hero-img" data-parallax="scroll" data-image-src="<?php echo get_template_directory_uri()?>/imgs/homepage-hero.png"></div>	
			<div class="hero-img"></div>		
			<div class="content">	
				<h1>Grant recipients</h1>
			</div>	
		</div>
	</section>

<div style="position: relative;">


<div id="grantslist">
<div class="wrapper">


	<div class="form">
				<div class="heading">
	<h6>Search grants</h6>
</div>
		<form action="grant-recipients/">

<input type="text" name="s" id="search" value="<?php the_search_query();?>">

  <!-- <input type="text" id="fname" name="fname" placeholder="Enter keywords"> -->
  <input type="submit" value="Search">
  <div id="expanded">

  <div class="search-year">
  	  <h6 class="sub">Year</h6>
  <ul>
  	<li>
		<label class="container">All
		  <input type="checkbox" checked="checked" id="all" name="year" value="all">
		  <span class="checkmark"></span>
		</label>
	  </li>    	
	  	<li>
		<label class="container">2020
		  <input type="checkbox" id="all" name="year" value="2020">
		  <span class="checkmark"></span>
		</label>
	  </li>
	  	<li>
		<label class="container">2019
		  <input type="checkbox" id="all" name="year" value="2019">
		  <span class="checkmark"></span>
		</label>
	  </li>
	  	<li>
		<label class="container">2018
		  <input type="checkbox"  id="all" name="year" value="2018">
		  <span class="checkmark"></span>
		</label>
	  </li>	 
	  	<li>
		<label class="container">2017
		  <input type="checkbox" id="all" name="year" value="2017">
		  <span class="checkmark"></span>
		</label>
	  </li>	  
	  	<li>
		<label class="container">2016
		  <input type="checkbox" id="all" name="year" value="2016">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">2015
		  <input type="checkbox"  id="all" name="year" value="2015">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">2014
		  <input type="checkbox" id="all" name="year" value="2014">
		  <span class="checkmark"></span>
		</label>
	  </li>		
	  	<li>
		<label class="container">2013
		  <input type="checkbox" id="all" name="year" value="2013">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">2012
		  <input type="checkbox" id="all" name="year" value="2012">
		  <span class="checkmark"></span>
		</label>
	  </li>		
	  	<li>
		<label class="container">2011
		  <input type="checkbox"  id="all" name="year" value="2011">
		  <span class="checkmark"></span>
		</label>
	  </li>		
	  	<li>
		<label class="container">2010
		  <input type="checkbox" id="all" name="year" value="2010">
		  <span class="checkmark"></span>
		</label>
	  </li>			  	  	  	  	  		  	  	   
</ul>	
</div>		

  <div class="search-programme">
  	  <h6 class="sub">Programme</h6>
  <ul>


	  	<li>
		<label class="container">All
		  <input type="checkbox" checked="checked" id="all" name="programme" value="all">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">Strategic
		  <input type="checkbox" id="all" name="programme" value="strategic">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">Intermediate
		  <input type="checkbox" id="all" name="programme" value="intermediate">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">Discretionary
		  <input type="checkbox" id="all" name="programme" value="iscretionary">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">Social investments
		  <input type="checkbox" id="all" name="programme" value="social">
		  <span class="checkmark"></span>
		</label>
	  </li>	

		
	
</ul>	
</div>

  <div class="search-sector">
  	  <h6 class="sub">Social sector</h6>
  <ul>

	  	<li>
		<label class="container">All
		  <input type="checkbox" checked="checked" id="all" name="sector" value="all">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">Children and young people
		  <input type="checkbox" id="all" name="sector" value="children">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">Education and training
		  <input type="checkbox" id="all" name="sector" value="education">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">Social mobility
		  <input type="checkbox" id="all" name="sector" value="mobility">
		  <span class="checkmark"></span>
		</label>
	  </li>	
  	<li>
		<label class="container">Homelessness
		  <input type="checkbox" id="all" name="sector" value="homelessness">
		  <span class="checkmark"></span>
		</label>
	  </li>	
  	<li>
		<label class="container">Disability
		  <input type="checkbox" id="all" name="sector" value="disability">
		  <span class="checkmark"></span>
		</label>
	  </li>	
  	<li>
		<label class="container">Hospice care
		  <input type="checkbox" id="all" name="sector" value="hospice">
		  <span class="checkmark"></span>
		</label>
	  </li>	
  	<li>
		<label class="container">Armed services
		  <input type="checkbox" id="all" name="sector" value="armed">
		  <span class="checkmark"></span>
		</label>
	  </li>	
  	<li>
		<label class="container">Prisoners’ welfare
		  <input type="checkbox" id="all" name="sector" value="prisoners">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">Mental health
		  <input type="checkbox" id="all" name="sector" value="mental">
		  <span class="checkmark"></span>
		</label>
	  </li>	 	
	  	<li>
		<label class="container">Covid-19
		  <input type="checkbox" id="all" name="sector" value="covid">
		  <span class="checkmark"></span>
		</label>
	  </li>					
</ul>	


</div>
<div class="form-filters">
  <input class="filter" type="submit" value="Apply filters">
   <input class="filter reset" type="submit" value="Clear filters">	
</div>
  </div>
</div>
  <div class="refine">
  	<span id="refine">Refine you search</span>
  </div>

</form>

<div id="grants-list">


<?php
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => 4,
        'category_name' => 'grant',
        'meta_key' => 'charity_name',
		'meta_value' => 'Aspire'
    );

$loop = new wp_Query($args);

while($loop->have_posts()) : $loop->the_post();
	echo '<div>';
    echo '<a href="'.get_permalink().'">';
    echo get_the_post_thumbnail($post->ID, 'category-thumb');
    echo('<span>');
    echo get_the_date( get_option('date_format') );
    echo('</span>');
    echo  '<h6></h6>'; 
    the_excerpt('<p>', '</p>');
    echo '</a>';
    echo '</div>';
endwhile;

wp_reset_query(); ?>
	<!--
	<div class="details">
		<div class="amount">
			<span>£266,295</span>
			<span>2019 / Year 3</span>
		</div>
		<div class="charity">
			<span>Aspire</span>
			<div class="tags">
			<span>Strategic</span>
		    <span>Social mobilty</span>
		   </div>
		</div>
		<div class="info">
			<p>Aspire provides practical help to people who have been paralysed by Spinal Cord Injury, supporting them from injury to independence.</p>
		</div>		
	</div>
		<div class="details">
		<div class="amount">
			<span>£266,295</span>
			<span>2019 / Year 3</span>
		</div>
		<div class="charity">
			<span>Aspire</span>
			<div class="tags">
			<span>Strategic</span>
		    <span>Social mobilty</span>
		   </div>
		</div>
		<div class="info">
			<p>Aspire provides practical help to people who have been paralysed by Spinal Cord Injury, supporting them from injury to independence.</p>
		</div>		
	</div>

-->

</div>

</div>



<?php get_footer(); ?>

<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/jquery/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/jquery/jquery-migrate-1.2.1.min.js"></script>

<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/parallax/parallax.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/slick/slick.min.js"></script>

<script>

$(window).on('resize', function(){
      var win = $(this);
      if (win.width() >= 1080) {
		$("body").removeClass("lock");  
		$("#nav-drawer").removeClass("active");  
		$(".hamburger").removeClass("is-active");   		
       }
});

  var $hamburger = $(".hamburger");
	

  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    	 $("#nav-drawer").toggleClass("active");  
    	 $("body").toggleClass("lock");   
   
  });
</script>
 <script type="text/javascript">

$(function() {
    //caches a jQuery object containing the header element
    var header = $("#main");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 64) {
            header.addClass("on-scroll");
        } else {
            header.removeClass("on-scroll");
        }
    });
});
</script>

<script>


$( "#refine" ).click(function() {
$("#expanded").toggleClass("show");
if($("#expanded").attr('class') == "show")
{
 $("#refine").html("Show fewer search options"); 
 }else{
 $("#refine").html("Refine your search"); 	
 }
});
</script>



</body>

</html>  