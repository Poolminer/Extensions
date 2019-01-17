[{"Owner":"Dad72","Date":"2016-11-13T14:06:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould anyone have an idea of how to generate image thumbnail of a mesh list. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t This is to create a list of media with a small image thumbnail preview of the objects rather than a text link (see screen). \n_lt_/p_gt_\n\n_lt_p_gt_\n\t I guess I should use something like CreateScreenshot but without downloading. I had idea of generating the image when the user imports the object. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is my Asset library _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(_lt_em_gt_Image 1 What I have to do and image 2_co_ the result of what I want to do where we see the previews of 3d models_lt_/em_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_asset1.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10242_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/asset1.jpg.20d54732ed206ac0516f260308edfaaf.jpg_qt_ /_gt_ _lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10243_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/asset2.jpg.e0e1a49a90a833338695e09e88e10c93.jpg_qt_ alt_eq__qt_asset2.jpg_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-11-13T18:19:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOkay_co_ actually_co_ it_t_s simple_dd_ _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  (I have not tested yet_co_ but it should go with some small retouching.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_JS_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var createMiniatureScreenshot _eq_ function (engine_co_ camera_co_ mesh) {\n\tvar mimeType _eq_ _qt_image/jpeg_qt__sm_\n\tvar width _eq_ 128_sm_\n\tvar height _eq_ 128_sm_\n\tvar screenshotCanvas _eq_ document.createElement(_t_canvas_t_)_sm_\n\tscreenshotCanvas.width _eq_ width_sm_\n\tscreenshotCanvas.height _eq_ height_sm_\n\tcamera.position.z _eq_ (camera.position.z - (mesh.getBoundingInfo().boundingBox.maximum.z + 1))_sm_\n\tcamera.setTarget(BABYLON.Vector3.Zero())_sm_\n\tvar renderContext _eq_ screenshotCanvas.getContext(_qt_2d_qt_)_sm_\n\trenderContext.drawImage(engine.getRenderingCanvas()_co_ 0_co_ 0_co_ width_co_ height)_sm_\n\tvar base64Image _eq_ screenshotCanvas.toDataURL(mimeType)_sm_\n\treturn base64Image_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tMore than creating the image with PHP when importing the 3D model and displaying this image in the list of media.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_PHP_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_?php\nheader(_t_Content-Type_dd_ text/html_sm_ charset_eq_UTF-8_t_)_sm_\nheader(_t_Content-Type_dd_ image/jpeg_t_)_sm_\nfunction saveImg($img_co_ $finalDir_co_ $nameImage) {\n\t$_img _eq_ str_replace(_t_data_dd_image/jpeg_sm_base64_co__t__co_ _t__t__co_ $img)_sm_\n\t$_img _eq_ str_replace(_t_ _t__co_ _t_+_t__co_ $_img)_sm_\n\t$data _eq_ base64_decode($_img)_sm_\n\t$file _eq_ $finalDir.$nameImage._t_.jpg_t__sm_\t\n\tfile_put_contents($file_co_ $data)_sm_\t\n\t$image _eq_ imagecreatefromjpeg($file)_sm_\n\timagejpeg($image_co_ $file_co_ 9)_sm_\n}\n$cheminFichier _eq_ _qt_root/images/_qt__sm_\nsaveImg($_POST[_t_imgbase64_t_]_co_ $cheminFichier_co_ _qt_myNameImage_qt_)_sm_\n?&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2016-11-13T20:32:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlas_co_ if I remember correctly_co_ one cannot grab the image data in _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt__t_s way... for it is webgl D_dd__lt_br /_gt_\n\tAnd webgl is VERY annoying with taking screenshots. VERY messy and dependent on how cache and buffer and stuff is saved on the individual engines._lt_br /_gt__lt_br /_gt_\n\tHowever_co_ all hope is not lost. There is actually a screenshot feature from within Babylon itself. It is however very hard coded into the system. Luckily I_t_ve already dealt with it before to work on a little project_dd_ \n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/25767-spritegen-build-spritesheets-out-of-models/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tAnd here is my code! Very messy because it was stolen directly from Babylon_co_ but it works!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//textuploader.com/d5pky_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//textuploader.com/d5pky_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tThis of course just generates the image data. Now you can do fancy cropping and scaling_co_ then send it off to the server to actually save the image to the server_co_ just like _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_ &lt_sm_3 _lt_br /_gt__lt_br /_gt_\n\tGood Luck!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-11-14T04:42:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is code from 3JS. The same can be replicated inBJS Using DOM.\n_lt_/p_gt_\n\n_lt_p_gt_\n\trenderer.setSize( widthOfScreenshot_co_ heightOfScreenshot )_sm_ renderer.render( scene_co_ camera )_sm_ var screenshot _eq_ renderer.domElement.toDataURL()_sm_ renderer.setSize( originalWidth_co_ originalHeight )_sm_ renderer.render( scene_co_ camera )_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2016-11-14T09:32:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_150944_qt_ data-ipsquote-contentid_eq__qt_26356_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1479098544_qt_ data-ipsquote-userid_eq__qt_11286_qt_ data-ipsquote-username_eq__qt_dbawel_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ dbawel said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHere is code from 3JS. The same can be replicated inBJS Using DOM.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\trenderer.setSize( widthOfScreenshot_co_ heightOfScreenshot )_sm_ renderer.render( scene_co_ camera )_sm_ var screenshot _eq_ renderer.domElement.toDataURL()_sm_ renderer.setSize( originalWidth_co_ originalHeight )_sm_ renderer.render( scene_co_ camera )_sm_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAlas_co_ if I remember correctly this does not work _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ This is due to how Babylon does _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_buffering and stuff _sm__t_(_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-11-14T11:45:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tMy solution works very well_co_ I do not understand why you say it does not work with Babylon?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2016-11-15T06:39:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOh_co_ it works?_lt_br /_gt__lt_br /_gt_\n\tWELL THEN ITS TIME TO RECONSIDER ALL OF MY LIFE CHOICES AHHHHHH_lt_br /_gt__lt_br /_gt_\n\tI spent hours trying to get it all working a few weeks back_co_ and it was this simple??? NOOOOOO_lt_br /_gt__lt_br /_gt_\n\tgj tho _dd_^)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]