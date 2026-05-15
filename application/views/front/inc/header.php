<!DOCTYPE html>
<html lang="en-IN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

      <!-- Title & Meta -->
    <title><?= $meta_title; ?></title>
    <meta name="description" content="<?= $meta_description; ?>">

    <meta name="robots" content="index, follow">
    <meta name="author" content="Ananya Hi Solutions">
    <meta name="copyright" content="Ananya Hi Solutions">

     <!-- Canonical & Hreflang -->
    <link rel="canonical" href="<?= $canonical_url ?>">
    
    <!-- Language -->
    <meta http-equiv="Content-Language" content="en">
    <meta name="language" content="English">
  
    <!-- Favicon -->
    <link rel="icon" href="<?= base_url('assets/front/images/logo/ananya-favicon.ico') ?>" type="image/x-icon">
    <link rel="apple-touch-icon" sizes="180x180" href="<?= base_url('assets/front/images/logo/apple-touch-icon.png') ?>">
    <link rel="icon" type="image/png" sizes="32x32" href="<?= base_url('assets/front/images/logo/favicon-32x32.png') ?>">
    <link rel="icon" type="image/png" sizes="16x16" href="<?= base_url('assets/front/images/logo/favicon-16x16.png') ?>">
    <link rel="shortcut icon" href="<?= base_url('assets/front/images/logo/ananya-favicon.ico') ?>" type="image/x-icon">
    <!-- End Favicon -->
    
    <meta name="theme-color" content="#0d6efd">
    
   
    <!-- Preload -->
    <link rel="preload" href="<?= base_url('assets/front/css/myStyle.css') ?>" as="style">
    <!-- <link rel="preload" href="https://yourwebsite.com/assets/images/digital-marketing.jpg" as="image"> -->

    <!-- Open Graph / Social Tags -->
    <meta property="og:title" content="<?= $og_and_twitter_title; ?>">
    <meta property="og:description" content="<?= $og_and_twitter_description; ?>">
    <meta property="og:image" content="<?= $og_and_twitter_image; ?>">
    <meta property="og:image:alt" content="<?= $og_and_twitter_image_alt; ?>">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="<?= $og_and_twitter_url; ?>">

    <meta property="og:type" content="<?= $og_type; ?>">
    <meta property="og:site_name" content="Ananya Hi Solutions">
    <meta property="og:locale" content="en_IN">
    <meta property="og:updated_time" content="<?= $og_updated_time; ?>">
    <meta property="og:determiner" content="the">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?= $og_and_twitter_title; ?>">
    <meta name="twitter:description" content="<?= $og_and_twitter_description; ?>">
    <meta name="twitter:image" content="<?= $og_and_twitter_image; ?>">
    <meta name="twitter:image:alt" content="<?= $og_and_twitter_image_alt; ?>">

    <meta name="twitter:site" content="@ananya_hi">
    <meta name="twitter:creator" content="@ananya_hi">
    

    <!-- Local SEO / Geo Tags -->
    <meta name="geo.region" content="IN-TG">
    <meta name="geo.placename" content="Hyderabad">
    <meta name="geo.position" content="17.4350069;78.4612303">
    <meta name="ICBM" content="17.4350069,78.4612303">

    <!-- Start Meta Schema Structured Data (JSON-LD) -->
    
    
    <!-- ENd Meta Schema Structured Data (JSON-LD) -->




    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link href="<?= base_url('assets/front/css/bootstrap.min.css') ?>" rel="stylesheet">
    <link href="<?= base_url('assets/front/css/myStyle.css') ?>" rel="stylesheet">
    
    <!-- Bootstrap Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Owl Carousel CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
    
    <meta name="google-site-verification" content="o9CzPZe5yYKxmxiKsdximDoMMw2m95F2lm8brnJGc1s" />
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NR9M4G2E26"></script>




<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SB18BGTQYK"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SB18BGTQYK');
</script>


</head>
<body>

<?php
    //Top Header
    //$this->load->view('front/inc/top_header');
    // Navigation Bar
    $this->load->view('front/inc/navigation');
?>



