<?php

/*
Template Name: Newsroom
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
      <span>Latest news</span>
        <h1>Newsroom</h1>
      </div>  
    </div>
  </section>


<div id="priorities" class="newsroom">
<div class="wrapper">

  <?php
        // the query
        $the_query = new WP_Query(array(
            'category_name' => 'news',
            'post_status' => 'publish',
            'posts_per_page' => 6,
        ));
        ?>

        <?php if ($the_query->have_posts()) : ?>
            <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
           
              <div><a href="<?php the_permalink(); ?>">
                <img src=<?php the_post_thumbnail(); ?>
                <span>Posted on 07.10.19</span>
                <h6><?php the_title(); ?></h6>
                <p><?php the_excerpt(); ?></p>
               
               
      </a>
            </div>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>

        <?php else : ?>
            <p><?php __('No News'); ?></p>
        <?php endif; ?>

<!--
<img src="imgs/priorities.png"> 
<span>Posted on 07.10.19</span>

<p>We fund charities that work with children and young people is to increase life chances by developing life skills, emotional resilience and mental well-being and by promoting social mobility.</p>
</a>
</div>  
-->



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

$(".newsroom").addClass("active");

</script>
</body>

</html>  