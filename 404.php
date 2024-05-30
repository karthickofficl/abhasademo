<?php
header("HTTP/1.0 404 Not Found");
?>
<!DOCTYPE HTML>
<html lang="en">

<head>
    <!--=============== basic  ===============-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="robots" content="noindex, nofollow" />
    <title>404 Error - Page Not Found</title>
    <!--=============== css  ===============-->
    <link type="text/css" rel="stylesheet" href="../css/plugins.css">
    <link type="text/css" rel="stylesheet" href="../css/style.css">
    <link type="text/css" rel="stylesheet" href="../css/color.css">
    <!--=============== favicons ===============-->
    <link rel="icon" type="image/x-icon" href="../images/abhasa-logo-files/favicon.svg">
    <style type="text/css">
        .tg {
            border-collapse: collapse;
            border-spacing: 0;
        }

        .tg td {
            border-color: black;
            border-style: solid;
            border-width: 1px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            overflow: hidden;
            padding: 10px 5px;
            word-break: normal;
        }

        .tg th {
            border-color: black;
            border-style: solid;
            border-width: 1px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            font-weight: normal;
            overflow: hidden;
            padding: 10px 5px;
            word-break: normal;
        }

        .tg .tg-lboi {
            border-color: inherit;
            text-align: left;
            vertical-align: middle
        }

        .tg .tg-9wq8 {
            border-color: inherit;
            text-align: center;
            vertical-align: middle
        }

        .tg .tg-0pky {
            border-color: inherit;
            text-align: left;
            vertical-align: top
        }
    </style>
    <style type="text/css">
        .content {
            padding: 118px 0;
        }

        body {
            background-color: #fff;
        }

        /*======================
    404 page
=======================*/


        .page_404 {
            padding: 40px 0;
            background: #fff;
            font-family: 'PT Serif', serif;
        }

        .page_404 img {
            width: 100%;
        }

        .four_zero_four_bg {

            background-image: url(https://www.abhasa.in/images/bg/404.gif);
            height: 400px;
            background-position: center;
        }


        .four_zero_four_bg h1 {
            font-size: 80px;
        }

        .four_zero_four_bg h3 {
            font-size: 80px;
        }

        .link_404 {
            color: #fff !important;
            padding: 10px 20px;
            background: #39ac31;
            margin: 20px 0;
            display: inline-block;
        }

        .contant_box_404 {
            margin-top: -50px;
        }
    </style>
</head>

<body>
    <!-- loader   -->
    <div class="loader">
        <div class="loading-text-container "><span class="loader_count">0</span></div>
        <div class="loader-anim"></div>
        <div class="loader-anim2"></div>
    </div>
    <!-- loader  end-->
    <!-- main start  -->
    <div id="main">
        <!-- content-->
        <div class="content" data-pagetitle="about">
            <section class="page_404">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 ">
                            <div class="col-sm-10 col-sm-offset-1  text-center">
                                <div class="four_zero_four_bg">
                                    <h1 class="text-center ">404</h1>


                                </div>

                                <div class="contant_box_404">
                                    <h3 class="h2">
                                        Look like you're lost
                                    </h3>

                                    <p>the page you are looking for not avaible!</p>

                                    <a href="https://www.abhasa.in/" class="btn fl-btn color-bg" style="float: right;"><span>Go to Home</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- content end-->
    </div>
    <!-- wrapper end -->
    <!-- cursor-->
    <div class="element">
        <div class="element-item"></div>
    </div>
    <!-- cursor end-->
    </div>
    <!-- Main end -->
    <!--=============== scripts  ===============-->
    <script type="text/javascript" rel="javascript" src="../js/jquery.min.js"></script>
    <link type="text/css" href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet">
    <script type="text/javascript" rel="javascript" src="../js/plugins.js"></script>
    <script type="text/javascript" rel="javascript" src="../js/scripts.js"></script>
    <script type="text/javascript" rel="javascript">
        $(document).ready(function() {
            var showChar = 400;
            var ellipsestext = "...";
            var moretext = "show more";
            var lesstext = "show less";
            $('.more').each(function() {
                var content = $(this).html();

                if (content.length > showChar) {

                    var c = content.substr(0, showChar);
                    var h = content.substr(showChar, content.length - showChar);

                    var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '        </span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

                    $(this).html(html);
                }

            });

            $(".morelink").click(function() {
                if ($(this).hasClass("less")) {
                    $(this).removeClass("less");
                    $(this).html(moretext);
                } else {
                    $(this).addClass("less");
                    $(this).html(lesstext);
                }
                $(this).parent().prev().toggle();
                $(this).prev().toggle();
                return false;
            });
        });
    </script>
  
</body>

</html>