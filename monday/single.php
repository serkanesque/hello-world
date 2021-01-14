<!DOCTYPE html>
<html>
<head>
<title>Title of the document</title>
<link rel="stylesheet" href="https://use.typekit.net/wvw1yyb.css">

<?php wp_head(); ?>


</head>

<body>
	<div id="main" class="">
		<div id="logo">
			<?php get_header('logo'); ?>
		</div>
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




<div id="news-article">
<div class="wrapper">
	<span class="article">News <span>|</span> 07.10.20</span>
	<h1>Covid-19 operational update</h1>
<img src="imgs/news.png" />
<div class="news-content">
<p>As the Trustees became aware of the crisis created by the Covid-19 pandemic, they convened an emergency meeting to review funds available for emergency grants.</p> 
<p>After consideration of the crisis, the Trustees decided to make several emergency Grants falling into the following categories:</p>
<ul>
	<li>Approach organisations that we have supported in the past, especially those to whom significant grants have been paid to support them through this emergency. The Charity should touch base with each of them to understand their outlook and requirements with a view to making unrestricted grants to support them through this period.</li>
	<li>Supporting the Coronavirus crisis funds.</li>
	<li>Organisations which would normally fall outside the social aims, but which carry on valuable work could be supported with unsecured interest free loans repayable in 3 to 5 years’ time. This would be subject to confirmation that a) their pre Covid business model was robust; and b) all financial support packages have been properly taken up.</li>
	<li>Supporting frontline NHS staff with a view to maintaining staff morale, improving resilience, relieving burnout and meeting other needs as required. </li>
</ul>
<p>The total of emergency Grants paid to date is £1.875m. View our grant recipients.</p>
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


</body>

</html>  