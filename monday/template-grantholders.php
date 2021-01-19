<?php

/*
Template Name: Grantholders
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
    <?php get_header('nav'); ?>


</div>



  <section id="hero" class="sub-page">    
    <div class="bg-img">
      <div class="hero-img" data-parallax="scroll" data-image-src="<?php echo get_template_directory_uri()?>/imgs/homepage-hero.png"></div> 
      <div class="hero-img"></div>    
      <div class="content">
      <span>RESOURCES FOR GRANTEES</span>
        <h1>Grantholders</h1>
      </div>  
    </div>
  </section>


<a name="applications"></a>
<div id="priorities">
<div class="wrapper grantholders">

<p class="grant-intro">This page provides information for current grantholders on reporting and about using our logo and acknowledging our funding.</p>

<div>
<h1>Applications</h1>


<div>
<h6>Proposal for grants to be made from the Discretionary Fund</h6>

<a href="">Download application</a>
</div>
</div>

<a name="reporting"></a>
<div>
<h1>Reporting</h1>
<div>
<h6>Annual reporting template</h6>
<p>This reporting form helps the Monday Charitable Trust (MCT) to track the progress of grants and understand the impact its funding has had.</p>
<a href="">Download template</a>
</div>
<div>
<h6>Annual reporting for intermediate grant recipients</h6>
<p>This reporting form helps the Monday Charitable Trust (MCT) to track the progress of intermediate grants and understand the impact its funding has had.</p>
<a href="">Download template</a>
</div>
<div>
<h6>Half year update template</h6>
<p>The Monday Charitable Trust (MCT) requires a brief update on grantee progress at the mid-point in each year of the grants it makes.</p>
<a href="">Download template</a>
</div>
</div>


<a name="acknowledgements"></a>
<div>
<h1>Acknowledgements</h1>


<div>
<h6>Grant acknowledgement</h6>
<p>Credit or acknowledgement for the grant received any acknowledgement should be shared with the Monday Charitable Trust prior to publication for approval.</p>
<p>These requests should be set to the General Manager and Administrator:</p>
<ul style="list-style-type: none;">
  <li><a href="mailto:stephen.lewin@mondaycharity.org.uk">stephen.lewin@mondaycharity.org.uk</a></li>
     <li><a href="mailto:helendmonte@bdbpitmans.com">helendmonte@bdbpitmans.com</a></li>
</ul>

</div>
</div>





<div>
<h6>Logo guidelines</h6>
<p>The Monday Charitable Trust logo provided in various formats (eps, jpeg, png and ai) and in CMYK (for print) and RGB (for digital).</p>




<ul style="list-style-type: none;">
 <li>The logo must always be displayed at a size large enough to read</li>
<li>Our logo is best used against a clear, lightbackground or overlaid onto a suitably
clear photographic background.</li>
 <li>Do not stretch or distort the logo</li>
</ul>
<p>Logo requests should be set to the General Manager and Administrator:</p>
<ul style="list-style-type: none;">
  <li><a href="mailto:stephen.lewin@mondaycharity.org.uk">stephen.lewin@mondaycharity.org.uk</a></li>
     <li><a href="mailto:helendmonte@bdbpitmans.com">helendmonte@bdbpitmans.com</a></li>
</ul>
</div>
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

    $(document).ready(function(){
      $('.your-class').slick({ 
        dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,  
  draggable: true,
   responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    },
      {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    }

  ]
})
      });


 </script>
<script>

$(".grantholders").addClass("active");

</script>

</body>

</html>  