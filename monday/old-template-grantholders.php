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

<?php wpcfs_show_preset("1"); ?>

<form method="get" action="http://localhost" class="wpcfs-search-form" id="preset-1/1">
         
    	    	<input type="text" name="f1" id="preset-1/1/f1" value="" placeholder="Name">
           
	<input type="submit" value="Search">
<input type="hidden" name="wpcfs" value="preset-1">








  <div id="expanded">  	
  <div class="search-year">
  	  <h6 class="sub">Year</h6>
  <ul>
  	
	  	<li>
		<label class="container">2020
		  <input type="checkbox" name="f2[]" value="2020" id="f2-1">
		  <span class="checkmark"></span>
		</label>
	  </li>
	  	<li>
		<label class="container">2019
		  <input type="checkbox" name="f2[]" value="2019" id="f2-2">
		  <span class="checkmark"></span>
		</label>
	  </li>
	  	<li>
		<label class="container">2018
		  <input type="checkbox"  name="f2[]" value="2018" id="f2-3">
		  <span class="checkmark"></span>
		</label>
	  </li>	 
	  	<li>
		<label class="container">2017
		  <input type="checkbox" name="f2[]" value="2017" id="f2-4">
		  <span class="checkmark"></span>
		</label>
	  </li>	  
	  	<li>
		<label class="container">2016
		  <input type="checkbox" name="f2[]" value="2016" id="f2-5">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">2015
		  <input type="checkbox" name="f2[]" value="2015" id="f2-6">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">2014
		  <input type="checkbox" name="f2[]" value="2014" id="f2-7">
		  <span class="checkmark"></span>
		</label>
	  </li>		
	  	<li>
		<label class="container">2013
		  <input type="checkbox" name="f2[]" value="2013" id="f2-8">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">2012
		  <input type="checkbox" name="f2[]" value="2012" id="f2-9">
		  <span class="checkmark"></span>
		</label>
	  </li>		
	  	<li>
		<label class="container">2011
		  <input type="checkbox" name="f2[]" value="2011" id="f2-10">
		  <span class="checkmark"></span>
		</label>
	  </li>		
	  	<li>
		<label class="container">2010
		  <input type="checkbox" name="f2[]" value="2010" id="f2-11">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">2009
		  <input type="checkbox" name="f2[]" value="2009" id="f2-12">
		  <span class="checkmark"></span>
		</label>
	  </li>			  	  	  	  	  		  	  	   
</ul>	
</div>		

  <div class="search-programme">
  	  <h6 class="sub">Programme</h6>
  <ul>
	  	<li>
		<label class="container">Strategic
		  <input type="checkbox" name="f3[]" value="Strategic" id="f3-2">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">Intermediate
		  <input type="checkbox" name="f3[]" value="Strategic" id="f3-2">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">Discretionary
		  <input type="checkbox"  name="f3[]" value="Discretionary" id="f3-1">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">Social investments
		  <input type="checkbox" name="f3[]" value="Strategic" id="f3-2">
		  <span class="checkmark"></span>
		</label>
	  </li>	

		
	
</ul>	
</div>

  <div class="search-sector">
  	  <h6 class="sub">Social sector</h6>
  <ul>

	
	  	<li>
		<label class="container">Children and young people
		  <input type="checkbox" name="f4[]" value="Children and young people" id="f4-3">
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
		  <input type="checkbox" name="f4[]" value="Social mobility" id="f4-10">
		  <span class="checkmark"></span>
		</label>
	  </li>	
  	<li>
		<label class="container">Homelessness
		  <input type="checkbox" name="f4[]" value="Homelessness" id="f4-5">
		  <span class="checkmark"></span>
		</label>
	  </li>	
  	<li>
		<label class="container">Disability
		  <input type="checkbox" name="f4[]" value="Disability" id="f4-4">
		  <span class="checkmark"></span>
		</label>
	  </li>	
  	<li>
		<label class="container">Hospice care
		  <input type="checkbox" value="Hospice care" id="f4-6">
		  <span class="checkmark"></span>
		</label>
	  </li>
	   	<li>
		<label class="container">Housing
		  <input type="checkbox" value="Housing" id="f4-7">
		  <span class="checkmark"></span>
		</label>
	  </li>	
  	<li>
		<label class="container">Armed services
		  <input type="checkbox" value="Armed services" id="f4-2">
		  <span class="checkmark"></span>
		</label>
	  </li>	
  	<li>
		<label class="container">Prisoners’ welfare
		  <input type="checkbox" name="f4[]" value="Prisoners’ welfare" id="f4-9">
		  <span class="checkmark"></span>
		</label>
	  </li>	
	  	<li>
		<label class="container">Mental health
		  <input type="checkbox" name="f4[]" value="Mental health" id="f4-8">
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

<button class="btn">Clear filters</button>
</div>
  </div>
</div>
  <div class="refine">
  	<span id="refine">Refine you search</span>
  </div>

</form>


<div id="grants-list">



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
<script>
$('.btn').click(function(e) {
e.preventDefault();
$('input[type=checkbox]').each(function() 
{ 
        this.checked = false; 
}); 
})
</script>


</body>

</html>  