<?php

/*
Template Name: What we do
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
      <div class="hero-img" data-parallax="scroll" data-image-src="<?php echo get_template_directory_uri()?>/imgs/what-we-do-hero.jpg"></div> 
      <div class="hero-img"></div>    
      <div class="content">
      <span>Supporting UK charities</span>
        <h1>What we do</h1>
      </div>  
    </div>
  </section>

<div style="position: relative;">
    <div id="jump">
    <span id="this-page">
      <span>On this page</span>
      <span class="icon"></span>    
  
    </span>
    <ul class="page-links">
      <li><a href="#aims">Our aims</a></li>
      <li><a href="#priorities">Our priorities</a></li>
      <li><a href="#social">Social investment</a></li>      
    </ul>
  </div>

<a name="aims"></a>
<div id="aims">
	<div class="wrapper">		
		<div class="left">
			<h1>Our aims</h1>
			<p class="fs21 lh180">We aim to improve life chances of disadvantaged and often marginalised groups. We do this by supporting UK registered charities that work to tackle disadvantage. We make grants to a range of projects in support of young people, people with mental health problems, homeless people and others suffering disadvantage.</p>
		</div>
		<div class="right">
      <img src="<?php echo get_template_directory_uri()?>/imgs/what-we-do-intro1.jpg" />   
		</div>
	</div>

	<div class="wrapper flip">		
		<div class="left">
			<img src="<?php echo get_template_directory_uri()?>/imgs/what-we-do-intro2.jpg" />			
		</div>
		<div class="right">
			<h6>Understanding the charities we support</h6>
			<p>We actively engage and understand the organisations we support and our trustees always visit the programmes supported by our Strategic grants.</p>
      <p>We assess the impact of our support for charities  by agreeing the anticipated outcomes with the organisations while receiving regular reports from them on their work and evaluating the impact of the programme at its conclusion.</p>
		</div>
	</div>
</div>

<!--
<div id="focus">
<h1>Our areas of focus</h1>
 <div class="your-class">
   
    <div class="carousel-item">
    	<img src="<?php echo get_template_directory_uri()?>/imgs/what-we-do-carousel.png">  
    	<h5>Education and training</h5>  
    </div> 
    <div class="carousel-item">
    	<img src="<?php echo get_template_directory_uri()?>/imgs/what-we-do-carousel.png">   
    	 <h5>Education and training</h5>   
    </div> 
    <div class="carousel-item">
    	<img src="<?php echo get_template_directory_uri()?>/imgs/what-we-do-carousel.png">  
    	<h5>Education and training</h5>  
    </div> 
    <div class="carousel-item">
    	<img src="<?php echo get_template_directory_uri()?>/imgs/what-we-do-carousel.png">   
    	 <h5>Education and training</h5>   
    </div>  
    <div class="carousel-item">
    	<img src="<?php echo get_template_directory_uri()?>/imgs/what-we-do-carousel.png">  
    	<h5>Education and training</h5>  
    </div> 
    <div class="carousel-item">
    	<img src="<?php echo get_template_directory_uri()?>/imgs/what-we-do-carousel.png">   
    	 <h5>Education and training</h5>   
    </div>  
    <div class="carousel-item">
    	<img src="<?php echo get_template_directory_uri()?>/imgs/what-we-do-carousel.png">  
    	<h5>Education and training</h5>  
    </div> 
    <div class="carousel-item">
    	<img src="<?php echo get_template_directory_uri()?>/imgs/what-we-do-carousel.png">   
    	 <h5>Education and training</h5>   
    </div>               

    </div>              
  </div>
</div>
-->
<a name="priorities"></a>
<div id="priorities" style="background-color: #F3F4F6;padding-bottom: 80px; margin-bottom: 0;">
<div class="wrapper">
<h1 style="margin-bottom:90px;">Our priorities</h1>
<div>
<img src="<?php echo get_template_directory_uri()?>/imgs/p-children.jpg"> 
<h6>Children and young people</h6>
<p>Our priority for funding charities that work with children and young people is to increase life chances by developing life skills, emotional resilience and mental well-being and by promoting social mobility. 
</p>
<a href="#">View grant recipients</a>
</div>	

<div>
<img src="<?php echo get_template_directory_uri()?>/imgs/p-homelessness.jpg"> 
<h6>Homelessness</h6>
<p>Our priority for funding charities that work with homeless people is to support services that help people out of homelessness, by providing for immediate needs and long term accommodation and rehabilitation. 
</p>
<a href="#">View grant recipients</a>
</div>	

<div>
<img src="<?php echo get_template_directory_uri()?>/imgs/p-prisoners.jpg"> 
<h6>Prisoners’ welfare</h6>
<p>Our priority for funding charities that work for prisoners’ welfare is to encourage rehabilitation and prevent reoffending for the benefit of themselves, their families and society as a whole.  This may be achieved by helping offenders stay in touch with their families or undertaking training and art activities to develop skills and self-esteem. </p>
<a href="#">View grant recipients</a>
</div>	

<div>
<img src="<?php echo get_template_directory_uri()?>/imgs/p-armed-forces.jpg"> 
<h6>Hospices, Armed services personnel and other welfare</h6>
<p>Our priority for funding charities that work for Hospices, Armed services personnel and other welfare is to support excellent care and good quality accommodation and to provide information so that people know what benefits they are entitled to receive.
</p>
<a href="#">View grant recipients</a>
</div>	

</div>
</div>


<a name="social"></a>
<div id="governance" class="investment whatwedo">
	<div class="wrapper"> 
	<div class="intro">  
<h1>Social investment</h2>
<p>We will apply some of our annual grant making (between 3% - 5%) in social investment by way of Programme Related Investments (PRI) in charitable organisations for specific (often property related) projects. PRI is made exclusively to further our charitable objects by funding specific activities of a third party which, in turn, contribute to our own charitable purposes. These investments aim to achieve a social impact while intended to be repayable with interest and/or a return of capital to the Charity at the end of the term.</p>
</div>


		<div class="tabs-wide">
            <div class='tabs tabs_default'>
              <ul class='horizontal'>
                <li><a href="#tab-1">What form can PRI take?</a></li>
                <li><a href="#tab-2">Social investments we have made</a></li>
                <li><a href="#tab-3">Geographic areas</a></li>
                <li><a href="#tab-4">Risk</a></li>
                <li><a href="#tab-5">Conclusions</a></li>
               </ul>
              <div id='tab-1' class="tab">
              		<h2>What form can PRI take?</h2>	
		<p>Provided we have satisfied ourselves that the proposed arrangement may be treated as a PRI and falls within the social sectors supported by the Charity  we will have broad discretion regarding the nature of investment.</p>
    <p>We may invest in any form of legal entity (e.g. a housing association, a charity, a community interest company, a private company, an investment fund etc) and the investment may take the form of:</p>
    <ul>
      <li>Secured loans</li>
      <li>Unsecured loans</li>
      <li>Equity</li>
      <li>Social impact bonds</li> 
      <li>Quasi-equity</li>                        
    </ul>
           </div>
              <div id='tab-2' class="tab">
                                <h2>Social investments we have made so far</h2>  
    <ul>
      <li>Thera Trust: investment in a bond for the provision of homes for people with learning difficulties and complex needs</li>
      <li>Bobath Centre: provision of a bridging loan to enable this charity to move premises</li>
      <li>Commonweal: provision of secured finance for properties used by it in its ‘Peer Landlord’ scheme</li>
      <li>Thames Reach: provision of secured finance for properties used by it in its ‘Peer Landlord’ scheme.</li> 
                      
    </ul>


              </div>
 
              <div id='tab-3' class="tab">
                                <h2>Geographic areas</h2>
                                <p>Great Britain and Northern Ireland.</p>  


              </div>

                            <div id='tab-4' class="tab">
                                <h2>Risk</h2>
                                <p>In procedural terms, when deciding to make a PRI we would satisfy ourselves in each case that:</p>  
    <ul>
      <li>the PRI falls within the social sectors supported by the Charity</li>
      <li>the PRI is an appropriate and effective way of utilising the Charity’s assets to advance our charitable aims in terms of expediency and risk</li>
      <li>appropriate legal documentation is in place to safeguard the PRI to ensure the PRI is not used for a purpose which does not advance our charitable aims</li>
      <li>the PRI does not confer an unacceptable private benefit</li> 
       <li>the PRI will not give rise to adverse reputational issues for the Charity (e.g. which may arise by virtue of any ancillary private benefit centred on a non-charitable co-investor)</li> 
                      
    </ul>


              </div>

                                          <div id='tab-5' class="tab">
                                <h2>Conclusions</h2>
                                <p>In procedural terms, when deciding to make a PRI we would satisfy ourselves in each case that:</p>  
    <ul>
      <li>Impact and effectiveness: we are developing an impact and effectiveness framework. This will be proportional and light touch so that it recognises some of the complexities and ambiguities of the work we fund</li>
      <li>Grantee outcomes:  we ask grantees to identify three outcomes associated with the funding they receive and agree indicators associated with progress against each grantee outcome</li>
     
                      
    </ul>


              </div>

            </div>
        </div>












        <div id="faqs" class="accordion" style="background-color: #fff;">
<ul id="my-accordion" class="accordionjs">
    <li>
        <div>What form can PRI take?<span class="carousel-expand"></span></div>
        <div>	
	   <p>Provided we have satisfied ourselves that the proposed arrangement may be treated as a PRI and falls within the social sectors supported by the Charity  we will have broad discretion regarding the nature of investment.</p>
    <p>We may invest in any form of legal entity (e.g. a housing association, a charity, a community interest company, a private company, an investment fund etc) and the investment may take the form of:</p>
    <ul>
      <li>Secured loans</li>
      <li>Unsecured loans</li>
      <li>Equity</li>
      <li>Social impact bonds</li> 
      <li>Quasi-equity</li>                        
    </ul>
        </div>
    </li>
    <li>
        <div>Social investments we have made<span class="carousel-expand"></span></div>
        <div>	
    <ul>
      <li>Thera Trust: investment in a bond for the provision of homes for people with learning difficulties and complex needs</li>
      <li>Bobath Centre: provision of a bridging loan to enable this charity to move premises</li>
      <li>Commonweal: provision of secured finance for properties used by it in its ‘Peer Landlord’ scheme</li>
      <li>Thames Reach: provision of secured finance for properties used by it in its ‘Peer Landlord’ scheme.</li> 
                      
    </ul>   
        </div>
    </li>
    <li>
        <div>Geographic areas<span class="carousel-expand"></span></div>
        <div>
          <p>Great Britain and Northern Ireland.</p>
        </div>
    </li>
    <li>
        <div>Risk<span class="carousel-expand"></span></div>
        <div>
           <p>In procedural terms, when deciding to make a PRI we would satisfy ourselves in each case that:</p>  
    <ul>
      <li>the PRI falls within the social sectors supported by the Charity</li>
      <li>the PRI is an appropriate and effective way of utilising the Charity’s assets to advance our charitable aims in terms of expediency and risk</li>
      <li>appropriate legal documentation is in place to safeguard the PRI to ensure the PRI is not used for a purpose which does not advance our charitable aims</li>
      <li>the PRI does not confer an unacceptable private benefit</li> 
       <li>the PRI will not give rise to adverse reputational issues for the Charity (e.g. which may arise by virtue of any ancillary private benefit centred on a non-charitable co-investor)</li> 
                      
    </ul>
        </div>
    </li>

        <li>
        <div>Conclusions<span class="carousel-expand"></span></div>
        <div>
          <p>In procedural terms, when deciding to make a PRI we would satisfy ourselves in each case that:</p>  
    <ul>
      <li>Impact and effectiveness: we are developing an impact and effectiveness framework. This will be proportional and light touch so that it recognises some of the complexities and ambiguities of the work we fund</li>
      <li>Grantee outcomes:  we ask grantees to identify three outcomes associated with the funding they receive and agree indicators associated with progress against each grantee outcome</li>
     
                      
    </ul>
        </div>
    </li> 

    
</ul>
    </div>


  </div>
</div>
<?php get_footer(); ?>

</div>



<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/jquery/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/jquery/jquery-migrate-1.2.1.min.js"></script>

<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/parallax/parallax.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/slick/slick.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/tabslet/jquery.tabslet.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/accordion/accordion.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/js/sticky/jquery.sticky.js"></script>
<script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
  <script>
  $(document).ready(function(){
$("#jump").sticky({ 
  topSpacing: 71,
  bottomSpacing: 0,
  className: 'is-sticky',
  wrapperClassName: 'sticky-wrapper',
  center: false,
  getWidthFrom: '',
  widthFromWrapper: false, // works only when .getWidthFrom is empty
  responsiveWidth: false,
  zIndex: 'inherit'
});
  });
</script>

<script>
  
  $("#this-page").on("click", function(e) {
      if($(window).width() > 1024) { 
    $("#jump").toggleClass("open"); 
    $(".page-links").toggleClass("open"); 
    };
  })


 $(window).scroll(function() {  
  var x = $(".sticky-wrapper").offset();
    offset = x.top - $(window).scrollTop();

       if($(window).width() > 1024) {   
    if(Math.round(offset) < 71) {   
      console.log("Fixed")
      $("#jump").addClass("fixed");
      $(".page-links").removeClass("open"); 
      $("#jump").removeClass("open"); 
    }else {
        console.log("Remove Don't fix")
      $("#jump").removeClass("fixed");
}
} else {
    console.log("Don't fix")
   $("#jump").css("position","relative");
   $("#jump").css("top","auto");
    $("#jump").css("zIndex","0");
    $(".page-links").addClass("open"); 
}
    
});
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
    jQuery(document).ready(function ($){
        $("#my-accordion").accordionjs({
        activeIndex : false,

        // Callback when a section is open
        openSection: function( section ){},

        // Callback before a section is open
        beforeOpenSection: function( section ){},
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

     $('.tabs').tabslet();

 </script>
<script>

$(".what-we-do").addClass("active");

</script>

</body>

</html>  