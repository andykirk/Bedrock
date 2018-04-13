<?php
require __DIR__ . '/vendor/autoload.php';

$_ = new HTMLHelpers\PageHelper\PageHelper();
$_->html_class_separator = '  ';

$_->page_id     = 'andykirk';
$_->page_title  = 'Andy Kirk';
$_->sitename    = 'AndyKirk.net';
$_->author      = 'Andy Kirk';
$_->description = 'Andy is an Oxford-based web-developer and designer.';
$_->stylesheets = array(
    'https://fonts.googleapis.com/css?family=Lato:400,700,900',
    'your-stylesheet.css'
);


//extract($_->data);

?><!doctype html>
<html<?php $_->class('html_classes'); $_->lang('language'); ?>>
<head>
    <meta charset="<?php echo $_->encoding; ?>">
    <title><?php echo $_->page_title; ?> | <?php echo $_->sitename; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php $_->show; ?><meta name="description" content="$description" /><?php $_->endshow; ?>
    <?php $_->show; ?><meta name="author" content="$author" /><?php $_->endshow; ?>
    <?php $_->show; ?><meta name="keywords" content="$keywords" /><?php $_->endshow; ?>
    
    <?php $_->show('metatags'); ?>
    <meta />
    <?php $_->endshow; ?>
    
    <?php $_->show('linktags'); ?>
    <link />
    <?php $_->endshow; ?>
    
    <style>
        <?php file_get_contents('bower_components/Fall-Back-Base/tiny-fallback-styles.css'); ?>
    </style>
    
    <!--
        Print (Edge doesn't apply to print otherwise)
        IE 10, 11
        Edge
        Chrome 29+, Opera 16+, Safari 6.1+, iOS 7+, Android ~4.4+
        FF 29+
    -->
    <?php $_->show('stylesheets'); ?>
    <link rel="stylesheet" href="$stylesheet" media="
        only print,
        only all and (-ms-high-contrast: none), only all and (-ms-high-contrast: active),
        only all and (pointer: fine), only all and (pointer: coarse), only all and (pointer: none),
        only all and (-webkit-min-device-pixel-ratio:0) and (min-color-index:0),
        only all and (min--moz-device-pixel-ratio:0) and (min-resolution: 3e1dpcm)
    ">
    <?php $_->endshow; ?>
    
    <?php $_->show('head_scripts'); ?>
    <script src="$head_script"></script>
    <?php $_->endshow; ?>
    
    <?php $_->show('head_script'); ?>
    <script>$head_script</script>
    <?php $_->endshow; ?>
    
    <!-- Piwik: no-js -->
    <!--<noscript>
        <link rel="stylesheet" href="/piwik/piwik.php?idsite=1&amp;rec=1&amp;_cvar=%7B%225%22%3A%5B%22no-js%22%2C%22true%22%5D%7D" />
    </noscript>-->
    <!-- End Piwik Code -->
</head>
<body role="document"<?php $_->id('page_id'); ?>>


    <?php $_->show('foot_scripts'); ?>
    <script src="$foot_scripts"></script>
    <?php $_->endshow; ?>
    
    <?php $_->show('foot_script'); ?>
    <script>
        $foot_script
    </script>
    <?php $_->endshow; ?>
</body>
</html>