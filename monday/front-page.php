<?php

/*
Template Name: Front page
*/

?>

<!DOCTYPE html>
<html>
<head>
<title>Title of the document</title>
<link rel="stylesheet" href="https://use.typekit.net/wvw1yyb.css">


<?php wp_head(); ?>
</head>

<body>
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



	<section id="hero">

		<div class="news-banner">
			<a href="">Read our Covid-19 operational update</a>
		</div>
		<div class="bg-img">
			<div class="hero-img" data-parallax="scroll" data-image-src="<?php echo get_template_directory_uri()?>/imgs/homepage-hero.png"></div>		
			<div class="content">
			<span>The Monday Charitable Trust</span>
				<h1>We work to improve<br /> life chances</h1>
			</div>
			<div class="explore">
				<span>Explore</span>
				<div><img src="<?php echo get_template_directory_uri()?>/imgs/down-arrow.svg" /></div>
			</div>

		</div>
		<div class="card">
			<a href="">
				<div><img src="<?php echo get_template_directory_uri()?>/imgs/news-card.png"></div>
				<div class="headline">
					<span>News</span>
					<span>Read our Covid-19 operational update</span>
				</div>
			</a>
		</div>

	</section>

<section id="intro">
	<div>
		<span class="subhead">Who we are</span>
		<p>The Monday Charitable Trust is a grant making foundation, which aims to improve life chances of disadvantaged and often marginalised groups in the United Kingdom.</p>
	</div>

</section>


<div class="wrapper">
<div class="image-wrapper">
<div class="image">
<img src="https://www.sw.co.uk/wp-content/uploads/2019/09/SWLeedsNov2018-707-8in-885x605.jpg">
</div>	
</div>
	<div class="content">
		<div class="textarea">
			<h3 class="darkblue">
				We support UK registered charities that work to tackle disadvantage, mainly in the fields of housing, education, welfare and social mobility.
			</h3>
			<p class="blue67">
				Whilst we will continue to support direct service provision to help those in need, we are increasingly interested in funding programmes which address or seek to identify the root causes of issues.
			</p>
			<a href="" class="button"><img src="<?php echo get_template_directory_uri()?>/imgs/arrow.svg" />Learn more</a>
		</div>
	</div>
</div>

<div class="wrapper reverse">
	<div class="content">
		<div class="textarea">
			<h1 class="white">Our grantmaking</h1>
			<h3 class="fs21 white">
				We regard the Charity as a long-term funder which is able to be flexible and independent and to respond to changing needs in society.
			</h3>
			<p class="white87">
				We  map our grants and social investments against our funding priorities. This helps us monitor and learn from our funding over time and allow us to spot and understand emerging trends in the underlying sector.
			</p>
			<a href="" class="button white"><img src="<?php echo get_template_directory_uri()?>/imgs/arrow-white.svg" />Learn more</a>

		</div>
	</div>
	<div class="image-wrapper">
<div class="image">
<img src="https://www.sw.co.uk/wp-content/uploads/2019/09/SWLeedsNov2018-707-8in-885x605.jpg">
</div>	
</div>
</div>



<div class="hp-carousel">
	<div class="title">
		<div class="textarea">
			<h1>
				Our areas of focus
			</h1>
		</div>
	</div>		
	<div class="content">
			<p>
			We make grants to a range of projects in support of young people, people with mental health problems, homeless people and others suffering disadvantage.
			</p>
		</div>
	</div>



 <div class="your-class">
    <div class="carousel-item">
    	<span>Homelessness</span>
    	<div class="carousel-expand"></div>
    	<img src="<?php echo get_template_directory_uri()?>/imgs/homelessness.png">
    	<div class="hide">
    		<h5>Homelessness</h5>
    		<p>We make grants to a range of projects in support of young people, people with mental health problems, homeless people and others suffering disadvantage.</p>
    	</div>
    </div>
    <div class="carousel-item">
    	<span>Education and training</span>
    	<div class="carousel-expand"></div>
    	<img src="<?php echo get_template_directory_uri()?>/imgs/homelessness.png">
    	<div class="hide">
    		<h5>Homelessness</h5>
    		<p>We make grants to a range of projects in support of young people, people with mental health problems, homeless people and others suffering disadvantage.</p>
    	</div>
    </div>
        <div class="carousel-item">
    	<span>Hospice care</span>
    	<div class="carousel-expand"></div>
    	<img src="<?php echo get_template_directory_uri()?>/imgs/homelessness.png">
    	<div class="hide">
    		<h5>Homelessness</h5>
    		<p>We make grants to a range of projects in support of young people, people with mental health problems, homeless people and others suffering disadvantage.</p>
    	</div>
    </div>
        <div class="carousel-item">
    	<span>Homelessness</span>
    	<div class="carousel-expand"></div>
    	<img src="<?php echo get_template_directory_uri()?>/imgs/homelessness.png">
    	<div class="hide">
    		<h5>Homelessness</h5>
    		<p>We make grants to a range of projects in support of young people, people with mental health problems, homeless people and others suffering disadvantage.</p>
    	</div>
    </div>
        <div class="carousel-item">
    	<span>Homelessness</span>
    	<div class="carousel-expand"></div>
    	<img src="<?php echo get_template_directory_uri()?>/imgs/homelessness.png">
    	<div class="hide">
    		<h5>Homelessness</h5>
    		<p>We make grants to a range of projects in support of young people, people with mental health problems, homeless people and others suffering disadvantage.</p>
    	</div>
    </div>
        <div class="carousel-item">
    	<span>Homelessness</span>
    	<div class="carousel-expand"></div>
    	<img src="<?php echo get_template_directory_uri()?>/imgs/homelessness.png">
    	<div class="hide">
    		<h5>Homelessness</h5>
    		<p>We make grants to a range of projects in support of young people, people with mental health problems, homeless people and others suffering disadvantage.</p>
    	</div>
    </div>
        <div class="carousel-item">
    	<span>Homelessness</span>
    	<div class="carousel-expand"></div>
    	<img src="<?php echo get_template_directory_uri()?>/imgs/homelessness.png">
    	<div class="hide">
    		<h5>Homelessness</h5>
    		<p>We make grants to a range of projects in support of young people, people with mental health problems, homeless people and others suffering disadvantage.</p>
    	</div>
    </div>              
  </div>

 <div class="in-numbers" data-parallax="scroll" data-image-src="<?php echo get_template_directory_uri()?>/imgs/homepage-hero.png">

 	<div class="inner">

 		<h1 class="white">MCT in numbers</h1>
 		<div class="stats">
 		<div>
 			<div class="figures">
 				<span>£</span>
	 			<h3>95.6</h3>	 		
 			</div>
 			<span class="figure-caption">Trust investments</span>
 		</div>
  		<div>
 			<div class="figures">
 				<span>£</span>
	 			<h3>95.6</h3>	 		
 			</div>
 			<span class="figure-caption">Trust investments</span>
 		</div>
 		 		<div>
 			<div class="figures">
 				<span>£</span>
	 			<h3>95.6</h3>	 		
 			</div>
 			<span class="figure-caption">Trust investments</span>
 		</div>
 		 		<div>
 			<div class="figures">
 				<span>£</span>
	 			<h3>95.6</h3>	 		
 			</div>
 			<span class="figure-caption">Trust investments</span>
 		</div>	 		 		
</div>
 	</div>
 	<div class="note"><span>Figures from 2019/20</span></div>
 </div>


<div class="our-impact">
	<div class="heading">
	<span class="subhead">changing lives</span>
	<h1 class="centered">Our impact</h1>
</div>
    <div class="carousel-item">
    	<div class="wrapper">
    		<div><img src="https://www.sw.co.uk/wp-content/uploads/2019/09/SWLeedsNov2018-707-8in-885x605.jpg"></div>
		<div>
			<h2>Bethlem Garden, Maudsley Charity</h2>
			<p>The Occupational Therapy Garden at Bethlem Royal Hospital provides gardening sessions to patients, giving them opportunities to explore, learn, develop, which plays a major part in aiding their recovery.</p>
			<a href="" class="button"><img src="<?php echo get_template_directory_uri()?>/imgs/arrow.svg" />Read more</a>
		</div>
    	</div>
    </div>                   
  </div>

	<div class="heading">
	<span class="subhead">changing lives</span>
	<h1 class="centered">Charities we support</h1>
</div>
<div class="support">

 <div class="carousel-item">	
 	<div class="wrapper">
	<div class="charity">
		<h2 class="white">Thames Reach</h2>
		<p class="white87">Thames Reach’s mission is to help homeless and vulnerable men and women to find decent homes, build supportive relationships and lead fulfilling lives</p>
			<h5 class="white67">Funding</h5>
	<div class="funding">	
		<div>
			<span>Strategic</span>
			<span>Grant programme</span>
		</div>
		<div>
			<span>£500,000</span>
			<span>Total funding</span>
		</div>
		<div>
			<span>6 years</span>
			<span>Funding duration</span>
		</div>
		</div>
	</div>
	<div class="charity-imagery"><div class="logo"></div></div>
</div>
</div>

 <div class="carousel-item">	
 	<div class="wrapper">
	<div class="charity">
		<h3>Thames Reach</h3>
		<p>Thames Reach’s mission is to help homeless and vulnerable men and women to find decent homes, build supportive relationships and lead fulfilling lives</p>
			<h5>Funding</h5>
	<div class="funding">	

		<div>
			<span>Strategic</span>
			<span>Grant programme</span>
		</div>
		<div>
			<span>Strategic</span>
			<span>Grant programme</span>
		</div>
		<div>
			<span>Strategic</span>
			<span>Grant programme</span>
		</div>
		</div>
	</div>
	<div class="charity-imagery"><div class="logo"></div></div>
</div>
</div>
</div>

<div class="news">

	<div class="wrapper">
 	<div class="heading left">
	<span class="subhead">newsroom</span>
	<h1>Latest news</h1>
</div>

<div>
	
<?php
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => 4,
        'category_name' => 'news'
    );

$loop = new wp_Query($args);

while($loop->have_posts()) : $loop->the_post();
    echo '<a href="'.get_permalink().'">';
    echo get_the_post_thumbnail($post->ID, 'category-thumb');
    the_title( '<h6>', '</h6>' );
    echo '</a>';
endwhile;

wp_reset_query(); ?>
	
</div>
<!--
		<div>
			<a class="block" href="">
			<div class="image">
				<img src="<?php echo get_template_directory_uri()?>/imgs/news-image.png">
			</div>
			<div class="content">
				<div class="info">
					<span>News</span>
					<span>|</span>
					<span>07.10.20</span>
				</div>			
				<div class="headline">
					<h5>Read our Covid-19 pandemic operational update</h5>
	
				</div>			<span class="read">Read article</span>
			</div>
		</a>
		</div>

		<div>
			<a class="block" href="">
			<div class="image">
				<img src="<?php echo get_template_directory_uri()?>/imgs/news-image.png">
			</div>
			<div class="content">
				<div class="info">
					<span>News</span>
					<span>|</span>
					<span>07.10.20</span>
				</div>			
				<div class="headline">
					<div>
					<h5>Read our 2020 annual report</h5>
				</div>
				</div>
			</div>
		</a>
		</div>

-->
	</div>
</div>

<?php get_footer(); ?>

<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/jquery/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/jquery/jquery-migrate-1.2.1.min.js"></script>

<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/parallax/parallax.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/slick/slick.min.js"></script>

 
<!--
<script type="text/javascript" src="js/jquery/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="js/jquery/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="js/slick/slick.min.js"></script>
<script type="text/javascript" src="js/parallax/parallax.js"></script>
-->
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

function expand() {
	console.log(this.parentNode.childNodes[7]);
	this.parentNode.childNodes[7].classList.toggle("show");
	this.parentNode.childNodes[3].classList.toggle("contract");
}

var elem = document.getElementsByClassName("carousel-expand");
for (var i = 0; i < elem.length; i++) {
	elem[i].addEventListener("click",  expand);
}


    $(document).ready(function(){
      $('.your-class').slick({ 
        dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,  
  draggable: true,
   responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    },
        {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }

  ]
})
      });

   


                $(document).ready(function(){
      $('.support').slick({ 
        dots: true,
  infinite: false,
  speed: 100,
   fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,  
  draggable: true
})
      });

/*

jQuery(window).on('resize', function() {
    var viewportWidth = jQuery(window).width();

    if (viewportWidth < 1200) {
    	$('.our-impact').slick('unslick');
        console.log("Small")
    } else {
        // Do some thing
    }
});
*/
  
  </script>
  <?php wp_footer(); ?>
</body>

</html> 