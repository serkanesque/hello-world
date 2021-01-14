<?php

add_filter( 'show_admin_bar', '__return_false' );

function load_scripts() {
    wp_enqueue_style('style.css', get_template_directory_uri() . '/style.css');
     wp_enqueue_style('slick.css', get_template_directory_uri() . '/js/slick/slick.css');
     wp_enqueue_style('slick-theme.css', get_template_directory_uri() . '/js/slick/slick-theme.css');
       wp_enqueue_style('hamburgers.css', get_template_directory_uri() . '/styles/hamburger/dist/hamburgers.css');  

       wp_enqueue_style('fancybox.css', get_template_directory_uri() . '/styles/fancybox.css');   
              wp_enqueue_style('accordion.css', get_template_directory_uri() . '/js/accordion/accordion.css');   


    /*
    wp_enqueue_script( 'slick.min.js', get_template_directory_uri() . '/js/slick/slick.min.js');
    wp_enqueue_script( 'parallax.js', get_template_directory_uri() . '/js/parallax/parallax.js');
    wp_enqueue_script( 'jquery-1.11.0.min.js', get_template_directory_uri() . '/js/jquery/jquery-1.11.0.min.js');
    wp_enqueue_script( 'jquery-migrate-1.2.1.min.js', get_template_directory_uri() . '/js/jquery/jquery-migrate-1.2.1.min.js');
    */
    }




    add_action('wp_enqueue_scripts', 'load_scripts');
    add_theme_support( 'post-thumbnails' );
    add_post_type_support( 'page', 'excerpt' );

    ?>

