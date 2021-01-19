<?php

/*
Template Name: Contact us
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
	<?php get_header('nav'); ?>


</div>



	<section id="hero" class="sub-page">		
		<div class="bg-img">
			<div class="hero-img" data-parallax="scroll" data-image-src="<?php echo get_template_directory_uri()?>/imgs/homepage-hero.png"></div>	
			<div class="hero-img"></div>		
			<div class="content">	
				<h1>Contact us</h1>
			</div>	
		</div>
	</section>

<div style="position: relative;">


<div id="contact-us">
<div class="wrapper">


	<div class="form">
			<div class="heading">
	<h2 class="centered contact">Send us a message</h2>
</div>
	<?php echo do_shortcode( '[contact-form-7 id="1234" title="Contact form 1"]' ); ?>
	<!--
		<form action="/action_page.php">
  <input type="text" id="fname" name="fname" placeholder="First name*" >
  <input type="text" id="lname" name="lname" placeholder="Sur name*" >
  <input type="text" id="fname" name="fname" placeholder="Email address*" >
  <input type="text" id="lname" name="lname" placeholder="Telephone number">
  <textarea style="resize: none;" name="comment" form="usrform" rows="10" placeholder="Your message*" required></textarea>
  <input class="filter message" type="submit" value="Send message">
</form>

-->
</div>

			<div class="heading">
	<h2 class="centered">Contact details</h2>
</div>
<div class="contact-details">

	<div>
		<span><img src="<?php echo get_template_directory_uri()?>/imgs/location.svg" />Registered office</span>
		<span>One Bartholomew Close London EC1A 7BL</span>		
	</div>
	<div>
		<span><img src="<?php echo get_template_directory_uri()?>/imgs/email.svg" />Email us</span>
		<span><a href="mailto:info@mondaycharity.org.uk">info@mondaycharity.org.uk</a></span>		
	</div>
	<div>
		<span><img src="<?php echo get_template_directory_uri()?>/imgs/phone.svg" />Call us</span>
		<span>+44 (0)844 414 8526</span>		
	</div>

</div>
			<div class="heading">
	<h2 class="centered">Get in touch with our staff</h2>
</div>

<div class="staff">
	<div class="card">
		<div class="avatar">
			<div class="staff-avatar"></div>
		</div>
		<div class="details">
			<h3>Stephen Lewin</h3>
			<span>General manager</span>
			<span><img src="<?php echo get_template_directory_uri()?>/imgs/phone.svg" />M +44 (0)7885 905211</span>
			<span><img src="<?php echo get_template_directory_uri()?>/imgs/email.svg" /><a href="mailto:stephen.lewin@mondaycharity.org.uk">Email</a></span>
		</div>
	</div>
		<div class="card">
		<div class="avatar">
			<div class="staff-avatar"></div>
		</div>
		<div class="details">
			<h3>Helen D’Monte</h3>
			<span>Charity Administrator</span>
			<span><img src="<?php echo get_template_directory_uri()?>/imgs/phone.svg" />T +44 (0)20 7783 3685</span>
			<span style="margin-left:28px; color: var(--darkblue)">M +44 (0)7973 268946</span>
			<span style="margin-left: 25px; margin-top: 10px;color: var(--darkblue);"><img src="<?php echo get_template_directory_uri()?>/imgs/email.svg" /><a href="mailto:helendmonte@bdbpitmans.com">Email</a></span>
		</div>
	</div>
</div>
</div>


</div>
<?php get_footer(); ?>

</div>

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

$(".contactus").addClass("active");

</script>
</body>

</html>  