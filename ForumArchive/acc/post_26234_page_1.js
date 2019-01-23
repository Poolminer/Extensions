[{"Owner":"Pryme8","Date":"2016-11-06T18:59:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSo I figured with a few people making some cool shaders now and the purposed improvements to the CYOS.  I figured we should have a thread for shader development to showcase what people are making and talk about different methods and concepts._lt_br /_gt__lt_br /_gt_\n\tTo kick things off I figured id post a procedural skymap... this is a cleaned up version of the first on I posted last night and is based off a standard box element.  I have not tested it in scene yet but the CYOS output is promising.  Ill be looking to add volumetric weather here soon and will be making the suns position dependent on a light on the scene.  Anyways feel free to comment it is pretty much a direct port of a Atmospheric GLSL process I found on github._lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos/#14WKFU%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/cyos/#14WKFU#1_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tDoes anyone have any good resources for volumetric cloud rendering with a light source? Im reading up on this first _lt_a href_eq__qt_http_dd_//www-evasion.imag.fr/Publications/2008/BNMBC08/clouds.pdf_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www-evasion.imag.fr/Publications/2008/BNMBC08/clouds.pdf_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-11-06T19:27:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tnice sky... have you also checked the sky material in the material library _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/materialsLibrary/materials/sky_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/materialsLibrary/materials/sky_lt_/a_gt_  ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/extensions/Sky_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/extensions/Sky_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-06T19:28:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthats cool_co_ no I never saw it.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-11-06T22:54:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis page has cools infos about shaders. _lt_br /_gt__lt_br /_gt_\n\tChapter_dd_ 3D-transformation-and-projection_dd__lt_br /_gt__lt_a href_eq__qt_http_dd_//duriansoftware.com/joe/An-intro-to-modern-OpenGL.-Table-of-Contents.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//duriansoftware.com/joe/An-intro-to-modern-OpenGL.-Table-of-Contents.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFinally i get an idea_co_ what i_t_m doing all the time _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos/#1IXGSR_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/cyos/#1IXGSR_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_The purposed improvements to the CYOS._lt_/strong_gt__lt_br /_gt__lt_br /_gt_\n\tI think this is really great_co_ thank you! _lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tMaybe we can also collab and build the hole thing from scretch_co_ (slowly_co_ between the coffee breaks in our life) _lt_br /_gt__lt_br /_gt_\n\tI looking for this kind of design_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//www.clicktorelease.com/code/spherical-normal-mapping/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.clicktorelease.com/code/spherical-normal-mapping/_lt_/a_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-06T23:04:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tI want to do a editor like Substance Designer_co_ Im about half way there!  I think that would be a boss editor for our CYOS. Also I made a lot of changes to the editor on my own git_co_ but I don_t_t know how to submit to the changes to the master one_co_ I made the fragment and vertex shader areas resizable_co_ with the correct ACE editor changes.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-11-07T01:16:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you share a link to the index.html (maybe via _lt_a href_eq__qt_https_dd_//htmlpreview.github.io/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//htmlpreview.github.io/_lt_/a_gt_)_lt_br /_gt_\n\twith the changes you made ??? Would be great! _lt_br /_gt__lt_br /_gt__lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_Substance Designer. Sounds interesting! Don_t_t forget to enable ES #version 300 so i can mess around with all the other ninjas of the internet._lt_/span_gt__lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-11-07T13:37:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tgymnastics yeah_lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos/#4OLW3_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/cyos/#4OLW3_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tthat thing with light\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos/#R8UHS%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/cyos/#R8UHS#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBreak on through to the other side\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos/#R8UHS%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/cyos/#R8UHS#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tshadows_lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos/#R8UHS%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/cyos/#R8UHS#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-07T17:30:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tLooks like somebody is having fun! _lt_img alt_eq__qt_^_^_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ title_eq__qt_^_^_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tLook up raymarching Nabroski I bet you will have a ball with that.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2016-11-07T18:04:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have a sky shader _lt_u_gt_with volumetric clouds_lt_/u_gt_ here_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//www.shadertoy.com/view/ltlSWB_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.shadertoy.com/view/ltlSWB_lt_/a_gt__lt_br /_gt_\n\tIt is a bit slow fullscreen._lt_br /_gt_\n\tIf someone took the time to optimize it to a 2D noise with layered/tapered cloud tops._lt_br /_gt_\n\t(with 3D noise it looks more real)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tpre-rendered as an image skybox here with babylon_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//www.bitofgold.com/ocean/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.bitofgold.com/ocean/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tI think it_t_s cool_co_ a french guy even remixed it as a 360 panorama video on youtube_dd_\n_lt_/p_gt_\n\n_lt_div class_eq__qt_ipsEmbeddedVideo_qt__gt_\n\t_lt_div_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt_true_qt_ frameborder_eq__qt_0_qt_ height_eq__qt_270_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/-0FeqavxHJ4?feature_eq_oembed_qt_ width_eq__qt_480_qt__gt__lt_/iframe_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-07T18:34:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthats perfect_co_ Ill see about implementing it here after I wrap up my work today.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2016-11-07T18:44:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tspent some time watching this...._lt_br /_gt_\n\tI think It uses a very similar shader to this_co_ but uses some very high quality moving/changing 2D noise_co_ and much better optimised for just a few raymarching steps per pixel. (looks like only 2-3 color bands on the edge of the clouds)._lt_br /_gt_\n\tMaybe just a sample at the bottom of the cloud layer_co_ one at the middle and one at the top._lt_br /_gt__lt_br /_gt_\n\tIf the raymarching samples are spaced evenly_co_ like in your shader or in mine_co_ you need many-many steps to look _qt_fluffy_qt_ or volumetric._lt_br /_gt_\n\tAnd that is slow.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_div class_eq__qt_ipsEmbeddedVideo_qt__gt_\n\t_lt_div_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt_true_qt_ frameborder_eq__qt_0_qt_ height_eq__qt_270_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/oFwiFUDb6Bk?feature_eq_oembed_qt_ width_eq__qt_480_qt__gt__lt_/iframe_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-08T05:23:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tohh bee tee dubs_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//pryme8.github.io/PCYOS/#_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//pryme8.github.io/PCYOS/#_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have not tested it on all clients yet... but yeah for the most part the resize should work!  Let me know if it does not on your browser.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-11-08T14:05:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twindows 10 chrome canary and edge\n_lt_/p_gt_\n\n_lt_p_gt_\n\t! resize function dont work._lt_br /_gt__lt_br /_gt_\n\tuse jquery with an textarea_lt_br /_gt__lt_a href_eq__qt_http_dd_//output.jsbin.com/rimozaseni/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//output.jsbin.com/rimozaseni/_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tace tabs_lt_br /_gt__lt_a href_eq__qt_http_dd_//www.codeply.com/go/bp/hYVxKShFtM_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.codeply.com/go/bp/hYVxKShFtM_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\talso take a look at some demos_lt_br /_gt__lt_a href_eq__qt_https_dd_//ace.c9.io/build/demo/bookmarklet/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//ace.c9.io/build/demo/bookmarklet/index.html_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tthe easiest thing what we can do_co_ is use a very very basic site_co_ and make it kind of glsl -sandbox style_lt_br /_gt__lt_br /_gt_\n\tBut anyway_co_ i think this child is dead_co_ letzs start from scratch\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso Most of the time only one error msg (3lines (forget to set a point in float)_co_ no need to rip of half of the screen\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_10184_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/changes-edit.jpg.33df43cd196a74ea5e3a705608048845.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_changes-edit.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10184_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/changes-edit.jpg.33df43cd196a74ea5e3a705608048845.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-11-08T14:14:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7708_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/_qt_ rel_eq__qt__qt__gt_@BitOfGold_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tYour website needs up to 6-8sec to load becourse of all the external libs_co_ as i see you only need babylon.js for now._lt_br /_gt__lt_br /_gt_\n\tUse an model instead of the default sphere for mapping your sky. You only need the half of it degrees cut of from bottom_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tplease look here how to mapping a sphere correctly. looks much better._lt_br /_gt__lt_a href_eq__qt_https_dd_//www.google.de/search?q_eq_UV+Unwrap+this+skydome+texture&amp_sm_oq_eq_UV+Unwrap+this+skydome+texture&amp_sm_aq_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.google.de/search?q_eq_UV+Unwrap+this+skydome+texture&amp_sm_oq_eq_UV+Unwrap+this+skydome+texture&amp_sm_aq_lt_/a_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\talso please note that you strip off to many data of your jpeg i see some artifacts.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_10185_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/background-pic.JPG.b70a35af65cab222afaebb3dd6e3d983.JPG_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_background-pic.JPG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10185_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/background-pic.thumb.JPG.394370301349c022349d8a92d52b5889.JPG_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-11-08T14:24:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tmake also the thing drag able with opacity_lt_br /_gt__lt_a href_eq__qt_https_dd_//jqueryui.com/draggable/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//jqueryui.com/draggable/_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2016-11-08T14:36:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt__lt_br /_gt_\n\tThanks for the tips!_lt_br /_gt_\n\tI will make a new sky dome model_co_ the top of it_co_ the zenith looks really bad._lt_br /_gt__lt_br /_gt_\n\thmm interesting_co_ libraries loaded from babylonjs.com are slow or not loading right now._lt_br /_gt_\n\tping should be not an issue if you are in Berlin... 52ms from here in Budapest_co_ Hungary. and loading all assets under 1.2s with all libraries and soundclound started._lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-08T15:24:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_150328_qt_ data-ipsquote-contentid_eq__qt_26234_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1478613921_qt_ data-ipsquote-userid_eq__qt_21965_qt_ data-ipsquote-username_eq__qt_Nabroski_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Nabroski said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\twindows 10 chrome canary and edge\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t! resize function dont work._lt_br /_gt__lt_br /_gt_\n\t\t\tuse jquery with an textarea_lt_br /_gt__lt_a href_eq__qt_http_dd_//output.jsbin.com/rimozaseni/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//output.jsbin.com/rimozaseni/_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\t\t\tace tabs_lt_br /_gt__lt_a href_eq__qt_http_dd_//www.codeply.com/go/bp/hYVxKShFtM_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.codeply.com/go/bp/hYVxKShFtM_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\talso take a look at some demos_lt_br /_gt__lt_a href_eq__qt_https_dd_//ace.c9.io/build/demo/bookmarklet/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//ace.c9.io/build/demo/bookmarklet/index.html_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\t\t\tthe easiest thing what we can do_co_ is use a very very basic site_co_ and make it kind of glsl -sandbox style_lt_br /_gt__lt_br /_gt_\n\t\t\tBut anyway_co_ i think this child is dead_co_ letzs start from scratch\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAlso Most of the time only one error msg (3lines (forget to set a point in float)_co_ no need to rip of half of the screen\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_10184_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/changes-edit.jpg.33df43cd196a74ea5e3a705608048845.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_changes-edit.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10184_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/changes-edit.jpg.33df43cd196a74ea5e3a705608048845.jpg_qt_ /_gt__lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tso the resize is not working in edge and ie you said?_lt_br /_gt__lt_br /_gt_\n\tYeah this CYOS is prolly gonna be put  to rest your right...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe resize seems to work on IE but is a little broken on the math for the spacing...  weird how different browsers handle spacing..._lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/1.jpg.f60857e436923578858f9c1b1733a621.jpg_qt_ data-fileid_eq__qt_10187_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_1.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10187_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/1.thumb.jpg.4a137bf8caaefa53249f77d0d6dd4cb7.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/2.jpg.9c309d74e0f744f1ebad44ac8be8bfb7.jpg_qt_ data-fileid_eq__qt_10188_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_2.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10188_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/2.thumb.jpg.a918a668e304ed09f49fecb9fa433c1b.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-11-08T15:35:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt__lt_/span_gt__lt_br /_gt__lt_br /_gt_\n\tquick and dirty_lt_br /_gt__lt_a href_eq__qt_http_dd_//htmlpreview.github.io/?https_dd_//github.com/tolkanabroski/babylonjs-tutorials/blob/master/test/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//htmlpreview.github.io/?https_dd_//github.com/tolkanabroski/babylonjs-tutorials/blob/master/test/index.html_lt_/a_gt__lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//stackoverflow.com/questions/6440439/how-do-i-make-a-textarea-an-ace-editor_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//stackoverflow.com/questions/6440439/how-do-i-make-a-textarea-an-ace-editor_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/ajaxorg/ace/wiki/Embedding---API_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/ajaxorg/ace/wiki/Embedding---API_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tAh_co_ okay_co_ It would be kind of cool if the pixel shader become a big editor. for now i only can drag the editor_co_ but the textfield size stays the same\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt__lt_br /_gt_\n\tBut it looks much better now! \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-08T15:37:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tyeah the text feild stays the same as the numbers of lines needed this is because of how ace editor is set up_co_ and I did not feel like doing the Math to figure out how many lines both sould be set to display... but that wont be hard to work out..._lt_br /_gt__lt_br /_gt_\n\tI think Im scrapping the whole CYOS and making my own.  I hate Ace edtior and jquery... that can all be accomplished with Vanilla js._lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tI want to also put into place a node system and visual editor for those who dont like to script.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-11-09T16:00:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7708_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/_qt_ rel_eq__qt__qt__gt_@BitOfGold_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tSo i took a look at your shader_co_ and i know already i will spend many hours figured out whats the best ._lt_br /_gt__lt_br /_gt_\n\tSomething that i do_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\treduce allocation of memory for variables_co_ i believe a vec2 is 128bit_co_ hard coded numbers are faster_co_ than define a global variable and used once_co_ somewhere. make an artistic decision and go for it. if you don_t_t overload a uniform to the main loop of your engine_co_ no reason to declaring one. -\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdont use texture look ups (textureSampler). In your case use a Colored Noise Function ( Procedural Textures ). The Starfield is just some random points_co_ you have like 3 overloading functions just for that. white little point_co_ you can do it better \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tCombining functions_dd_ function a () ...b_co_ c_co_ make a single one. also overloading from one vec2 in a funtion into and other -&gt_sm_ better vec2+vec2 in a singel cycle. _lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOkay we can work togeher at this_co_ but you have to do the hard work first. I commenting changes_co_ be course of going from 2Ortho View of Shadertoy and CYOS and also the incompatibility.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos/#1L6DHU%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/cyos/#1L6DHU#3_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tSo this is kind of broken_co_ see how far you can make it_co_ and then i will catch up_co_ again.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ i think this guy is genius._lt_br /_gt__lt_a href_eq__qt_http_dd_//pixelshaders.com/editor/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//pixelshaders.com/editor/_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2016-11-09T17:29:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt__lt_br /_gt_\n\tYes_co_ the noise functions are really messy_co_ it is a remix of multiple shaders._lt_br /_gt_\n\tI have some time now so I play with this shader a bit._lt_br /_gt_\n\tI see what I can do! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-09T17:36:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos/#SABX5_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/cyos/#SABX5_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tI tried to really quick port the shader over that you showed and this was the results.... any idea what I may be doing wrong? its prolly my noise function instead of using a texture sample.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-11-09T17:37:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7708_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/_qt_ rel_eq__qt__qt__gt_@BitOfGold_lt_/a_gt__lt_br /_gt_\n\t _lt_/span_gt_yes_co_ sorry during the process i mess with a number cloudfar 8e3 i typed 10. i changed it back to 1000. i run into an error while converting. also use the ref sampler. for better understanding._lt_br /_gt__lt_span_gt_Line 114          //cloadfar_lt_br /_gt_\n\t    if (dist &lt_sm_ 1000.0) {_lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos/#1L6DHU%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/cyos/#1L6DHU#5_lt_/a_gt__lt_/span_gt__lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2016-11-09T17:58:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWow now we are working 3 persons on one shader _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\tCool_co_ what a chaos _dd_-O_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt_ OK no problem_co_ cloudfar was only for supressing clouds at the zenith._lt_br /_gt__lt_br /_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ Yes the problem is the noise. float Noise( in vec3 x) { was only making a 3d noise from a 2d texture. I searched but I cannot find the source from I copied this... \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am now rewriting _lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos/#1L6DHU%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/cyos/#1L6DHU#7_lt_/a_gt__lt_br /_gt_\n\ta bit and I get back with the results.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-09T18:25:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos/#14WKFU%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/cyos/#14WKFU#7_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tI just came up with these to handle procedural 3d pseudo noise_co_ I can make it more robust but I_t_m thinking this may do the trick.  what do you think? pNoise for a float pNoise2 for a vec2 pNoise3 for a vec3 out_co_ and all of them take just a vec2.  I could make it so a vec3 can be input as well but I don_t_t know if that_t_s necessary...  Ohh yeah and a float return as well if you feed it two in floats._lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos/#14WKFU%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/cyos/#14WKFU#8_lt_/a_gt__lt_br /_gt_\n\tthis shows how to change the density. just change the divider of the output.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]