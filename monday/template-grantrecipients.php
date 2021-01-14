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
		<form action="/">
  <input type="text" id="fname" name="fname" placeholder="Enter keywords">
  <input type="submit" value="Search">
  <div id="expanded">

  	<?php wpcfs_show_preset("1"); ?>




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




  <?php
    $paged = (get_query_var( 'paged' )) ? get_query_var( 'paged' ) : 1;
    $args = array(
        'post_type' => 'post',
        'category_name' => 'grant',
		'orderby' => 'meta_value',
		'meta_key' => 'year',
        'order' => 'DESC',
        'posts_per_page' => 10,
        'paged' => $paged,
    );
    $arr_posts = new WP_Query( $args );
 
    if ( $arr_posts->have_posts() ) :
 
        while ( $arr_posts->have_posts() ) :
            $arr_posts->the_post();
            ?>
           <div class="details">
		<div class="amount">
			<span>£<?php echo number_format (get_post_meta($post->ID, 'amount',true)); ?></span>
			<span><?php echo get_post_meta($post->ID, 'year',true); ?></span>
		</div>
		<div class="charity">
			<span><?php echo get_post_meta($post->ID, 'Charity',true); ?></span>
			<div class="tags">
			<span><?php echo get_post_meta($post->ID, 'programme',true); ?></span>
		    <span><?php echo get_post_meta($post->ID, 'sector',true); ?></span>
		   </div>
		</div>
		<div class="info">
			<p><?php echo get_post_meta($post->ID, 'description',true); ?></p>
		</div>		
	</div>
            <?php
        endwhile;
        wp_pagenavi(
            array(
                'query' => $arr_posts,
            )
        );
    endif;
    ?>


		






</div>

</div>



<?php get_footer(); ?>

<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/jquery/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/jquery/jquery-migrate-1.2.1.min.js"></script>

<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/parallax/parallax.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/slick/slick.min.js"></script>




<script>

	

$("#fname").on("change paste keyup", function() {
  $("#preset-1\\/1\\/f1").val($(this).val()); 
});

/*
$("#preset-1\\/1\\/f1").on("change paste keyup", function() {
   console.log($(this).val()); 
});
*/
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