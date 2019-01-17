[{"Owner":"Pryme8","Date":"2017-10-30T23:13:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow does one go about doing FBO_t_s with BJS?  I have never used one and am trying to replicate _lt_a href_eq__qt_https_dd_//github.com/mattdesl/lwjgl-basics/wiki/2D-Pixel-Perfect-Shadows_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/mattdesl/lwjgl-basics/wiki/2D-Pixel-Perfect-Shadows_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\t**EDIT** _lt_br /_gt_\n\tI think if I read up on this _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/how_to_use_postprocesses_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/how_to_use_postprocesses_lt_/a_gt_ Ill be able to handle it!_lt_br /_gt_\n\t  **EDIT AGAIN**_lt_br /_gt_\n\tSo I have figured out how to create a custom post process using the shaderStore inline and am now looking to how to set up what I need to do the 2d lighting_co_ will hopefully figure this out.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-10-31T22:30:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tLove this thread _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2017-11-01T09:16:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo my theory is when you take a spotlight an flip the direction model - object - viewer position and project in back on a plane in a custom shader you can archive shadows_lt_br /_gt_\n\tactually a lot of work _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/babylon101/lights_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/babylon101/lights _lt_/a_gt__lt_br /_gt_\n\tand then modify the source code to working for your needs._lt_br /_gt__lt_br /_gt_\n\tYou test against meshes in 3d or 2d texture ? I think your Walls all defined by the Alpha Channel_co_ let_t_s see maybe i can t hack a simple Ray Tracer shadow map. ( I currently working maybe in 2 Weeks )_lt_br /_gt__lt_br /_gt_\n\tFBO is in Babylonjs a RendertargetTexture i think_co_ otherwise DumptheFramebuffer never fails. For Shadow map you need also the enable Depth Test - some tutorial_co_ forum post easy to find_co_ but you always and in WebGL1 Mode ends up with 3 different shaders_co_ and then still with blocky edges etc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tproof of concept_lt_br /_gt__lt_a href_eq__qt_http_dd_//thebookofshaders.com/edit.php?log_eq_171101083737_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//thebookofshaders.com/edit.php?log_eq_171101083737  _lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_text-align_dd_center_sm__qt__gt_\n\t_lt_img alt_eq__qt_pointlightshadows.gif_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_320_qt_ src_eq__qt_https_dd_//gifyu.com/images/pointlightshadows.gif_qt_ width_eq__qt_320_qt_ /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-11-01T15:41:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI cant not effectively make the renderTargetTexture do anything..._lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#NL9S8A%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#NL9S8A#2_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2017-11-01T18:28:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_ul_gt__lt_li_gt_\n\t\tHi_co_ this is a workaround _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#NL9S8A%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#NL9S8A#3_lt_/a_gt_. I don_t_t know if is what you need_co_ but works _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/li_gt_\n_lt_/ul_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-11-01T19:01:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYes and no! This does help with some stuff thank you.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2017-11-01T20:11:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_br /_gt_\n\tDumpFrameBuffer\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#10OY8W%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#10OY8W#9 _lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust in case you miss it_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/how_to_use_depthrenderer_to_get_depth_values_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/how_to_use_depthrenderer_to_get_depth_values_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tfound via playground search_lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1TDGFQ%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1TDGFQ#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThose blocky edges you see in 512x512 Tex Resolution are Reptiles of the past. - _lt_span_gt_Nostalgic_lt_/span_gt__co_ but yeah still fun.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-11-01T20:23:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tyeah I think I am working this out slowly thanks for your help recently.  I’m pulling all the stuff I’ve been asking togeather and have next week off so I’m going to go at it hard I’m just trying to get all the prices togeather first.  Thank you tons!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-11-02T17:15:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAbout RenderTargetTexture_co_ you can simply add meshes to their renderlist and place them in the customRenderTargets list of the scene_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#NL9S8A%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#NL9S8A#6_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-11-02T17:34:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThats pretty cool_co_ now I need to figure out how to take all this information and generate and occlusion map per frame._lt_br /_gt__lt_br /_gt_\n\tOnce I get that figured out_co_ I want to pass two more textures to the shader to handle the lights where the first one will have the structure on each pxl of red and green for x_dd_y position of the light and blue for its size/radius and alpha for what 2d _qt_layer_qt_ its in.  Then the second texture to where the pxl structure would be red blue green values of the light_co_ and alpha for the intensity with both pxls indexes being the same on each texture._lt_br /_gt__lt_br /_gt_\n\tThen I will iterate through the pxls until all the lights are calculated._lt_br /_gt__lt_br /_gt_\n\tI am hoping with this method I can get the lights to render in a single call.  I do not know how optimized this will be though.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]