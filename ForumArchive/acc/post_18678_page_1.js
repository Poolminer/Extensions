[{"Owner":"klavdij","Date":"2015-11-17T16:42:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello..So I am in the phase of finishing our project and have been working on UI before the start of the game. I have been playing with HTML_co_ importing images and so on. My code and game works if i only have canvas on it_co_ as soon as i add other HTML elements such as images or divs_co_ it says that webGL is not supported.. Please help me.. its driving me crazy.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wacko.png_qt_ alt_eq__qt__dd_wacko_dd__qt__gt_  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wacko.png_qt_ alt_eq__qt__dd_wacko_dd__qt__gt__lt_/p_gt__lt_p_gt_Here is the HTML_co_ that stops working _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-html_qt__gt_&lt_sm_!DOCTYPE html&gt_sm_&lt_sm_html xmlns_eq__qt_http_dd_//www.w3.org/1999/xhtml_qt_&gt_sm_   &lt_sm_head&gt_sm_      &lt_sm_meta http-equiv_eq__qt_Content-Type_qt_ content_eq__qt_text/html_sm_ charset_eq_utf-8_qt_/&gt_sm_      &lt_sm_title&gt_sm_CleanItUp!&lt_sm_/title&gt_sm_      &lt_sm_link rel_eq__qt_shortcut icon_qt_ href_eq__qt_./assets/ikona.ico_qt_ type_eq__qt_image/x-icon_qt_/&gt_sm_      &lt_sm_script src_eq__qt_https_dd_//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js_qt_&gt_sm_&lt_sm_/script&gt_sm_      &lt_sm_style&gt_sm_        html_co_ body {          overflow_dd_ hidden_sm_          width_dd_ 100%_sm_          height_dd_ 100%_sm_          margin_dd_ 0_sm_          padding_dd_ 0_sm_        }        #renderCanvas {          width_dd_ 100%_sm_          height_dd_ 100%_sm_          touch-action_dd_ none_sm_        }        .image{            width_dd_ 100%_sm_            height_dd_ 100%_sm_        }        .menu{            position_dd_ absolute_sm_            top_dd_ 30%_sm_            left_dd_ 15%_sm_        }        .menu1{            position_dd_ absolute_sm_            top_dd_ 50%_sm_            left_dd_ 15%_sm_        }      &lt_sm_/style&gt_sm_      &lt_sm_script type_eq__qt_text/javascript_qt_ src_eq__qt_./scripts/Babylon/dist/babylon.2.2.max.js_qt_&gt_sm_&lt_sm_/script&gt_sm_      &lt_sm_script type_eq__qt_text/javascript_qt_ src_eq__qt_./scripts/handjs/bin/hand.1.3.8.js_qt_&gt_sm_&lt_sm_/script&gt_sm_      &lt_sm_script type_eq__qt_text/javascript_qt_ src_eq__qt_./scripts/Babylon/dist/Oimo.js_qt_&gt_sm_&lt_sm_/script&gt_sm_       &lt_sm_script type_eq__qt_text/javascript_qt_ src_eq__qt_./scripts/engine.js_qt_&gt_sm_&lt_sm_/script&gt_sm_   &lt_sm_/head&gt_sm_   &lt_sm_body&gt_sm_        &lt_sm_img id_eq__qt_image_qt_ src_eq__qt_menuBackground.png_qt_&gt_sm_        &lt_sm_div id _eq__qt_gumbi_qt_&gt_sm_            &lt_sm_img class_eq__qt_menu_qt_ src_eq__qt_playbutton.png_qt_ onclick_eq__qt_hideDivs()_sm_ createScene()_sm__qt_&gt_sm_            &lt_sm_br&gt_sm_&lt_sm_br&gt_sm_            &lt_sm_br&gt_sm_&lt_sm_br&gt_sm_            &lt_sm_img class_eq__qt_menu1_qt_ src_eq__qt_controlsbutton.png_qt_&gt_sm_        &lt_sm_/div&gt_sm_   &lt_sm_canvas id_eq__qt_renderCanvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm_   &lt_sm_/body&gt_sm_&lt_sm_/html&gt_sm__lt_/pre_gt__lt_p_gt_Heres my hideDivs code which only hides the divs and images i created_co_ so the scene can be rendered on it _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_function hideDivs(){    var image _eq_ document.getElementById(_qt_image_qt_)_sm_    image.style.visibility _eq_ _t_hidden_t__sm_    var divImages _eq_ document.getElementById(_qt_gumbi_qt_)_sm_    divImages.style.visibility _eq_ _t_hidden_t__sm_}_lt_/pre_gt__lt_p_gt_I can also pastebin the main part of code (createScene_co_ but it has around 700 lines and it works fine if i delete this part of the code)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-11-17T17:00:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Try loading the engine and your application after the canvas_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_   &lt_sm_/head&gt_sm_   &lt_sm_body&gt_sm_        &lt_sm_img id_eq__qt_image_qt_ src_eq__qt_menuBackground.png_qt_&gt_sm_        &lt_sm_div id _eq__qt_gumbi_qt_&gt_sm_            &lt_sm_img class_eq__qt_menu_qt_ src_eq__qt_playbutton.png_qt_ onclick_eq__qt_hideDivs()_sm_ createScene()_sm__qt_&gt_sm_            &lt_sm_br&gt_sm_&lt_sm_br&gt_sm_            &lt_sm_br&gt_sm_&lt_sm_br&gt_sm_            &lt_sm_img class_eq__qt_menu1_qt_ src_eq__qt_controlsbutton.png_qt_&gt_sm_        &lt_sm_/div&gt_sm_   &lt_sm_canvas id_eq__qt_renderCanvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm_   &lt_sm_script type_eq__qt_text/javascript_qt_ src_eq__qt_./scripts/Babylon/dist/babylon.2.2.max.js_qt_&gt_sm_&lt_sm_/script&gt_sm_   &lt_sm_script type_eq__qt_text/javascript_qt_ src_eq__qt_./scripts/handjs/bin/hand.1.3.8.js_qt_&gt_sm_&lt_sm_/script&gt_sm_   &lt_sm_script type_eq__qt_text/javascript_qt_ src_eq__qt_./scripts/Babylon/dist/Oimo.js_qt_&gt_sm_&lt_sm_/script&gt_sm_   &lt_sm_script type_eq__qt_text/javascript_qt_ src_eq__qt_./scripts/engine.js_qt_&gt_sm_&lt_sm_/script&gt_sm_&lt_sm_/body&gt_sm__lt_/pre_gt_Or_lt_p_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_&lt_sm_script type_eq__qt_text/javascript_qt_ src_eq__qt_./scripts/Babylon/dist/babylon.2.2.max.js_qt_&gt_sm_&lt_sm_/script&gt_sm_   &lt_sm_script type_eq__qt_text/javascript_qt_ src_eq__qt_./scripts/handjs/bin/hand.1.3.8.js_qt_&gt_sm_&lt_sm_/script&gt_sm_   &lt_sm_script type_eq__qt_text/javascript_qt_ src_eq__qt_./scripts/Babylon/dist/Oimo.js_qt_&gt_sm_&lt_sm_/script&gt_sm_   &lt_sm_/head&gt_sm_      &lt_sm_body&gt_sm_        &lt_sm_img id_eq__qt_image_qt_ src_eq__qt_menuBackground.png_qt_&gt_sm_        &lt_sm_div id _eq__qt_gumbi_qt_&gt_sm_            &lt_sm_img class_eq__qt_menu_qt_ src_eq__qt_playbutton.png_qt_ onclick_eq__qt_hideDivs()_sm_ createScene()_sm__qt_&gt_sm_            &lt_sm_br&gt_sm_&lt_sm_br&gt_sm_            &lt_sm_br&gt_sm_&lt_sm_br&gt_sm_            &lt_sm_img class_eq__qt_menu1_qt_ src_eq__qt_controlsbutton.png_qt_&gt_sm_        &lt_sm_/div&gt_sm_   &lt_sm_canvas id_eq__qt_renderCanvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm_      &lt_sm_script type_eq__qt_text/javascript_qt_ src_eq__qt_./scripts/engine.js_qt_&gt_sm_&lt_sm_/script&gt_sm_&lt_sm_/body&gt_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-11-18T13:48:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Also you should always call hand.js before babylon.js_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-11-18T14:16:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Effectively. can also be Oimo.js and cannon.js_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"klavdij","Date":"2015-11-18T21:55:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you for the anwsers_co_ i figured it out   _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]