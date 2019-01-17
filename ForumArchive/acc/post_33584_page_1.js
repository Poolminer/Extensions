[{"Owner":"Pryme8","Date":"2017-10-21T20:20:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tok so I have three textures one is the texture to display one is the locations of the tiles_co_ and the third is a reference sheet for the animations on the sprite sheet.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tso I am able to get the coordinates of the correct _t_sprite_t_ by sampling the tiles texture_dd__lt_br /_gt_\n\tvec4 tile _eq_ texture2D(tiles_co_ texCoord)_sm__lt_br /_gt_\n\tif(tile.x _eq__eq_ 1.0 &amp_sm_&amp_sm_ tile.y _eq__eq_ 1.0) { discard_sm_ }_lt_br /_gt__lt_br /_gt_\n\tthen I check the animation map for an animation refrence\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvec4 aTile _eq_ texture2D(animationMap_co_ tile.xy)_sm__lt_br /_gt_\n\tif(aTile.a _eq__eq_ 1.0 ){\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have the flags on the alpha channel for if this is an animation or not the z or blue channel as the _qt_timing_qt_ for the frame and the red green as the x_co_y of the next frame._lt_br /_gt_\n\tWhat I want to happen is a loop so something like_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfloat _t _eq_ sin(time)_sm__lt_br /_gt_\n\tfloat aS _eq_ aTile.z_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    while(aS &gt_sm_ _t){    _lt_br /_gt_\n\t        aTile _eq_ texture2D(animationMap_co_ aTile .xy)_sm__lt_br /_gt_\n\t        aS _eq_ aTile.z_sm__lt_br /_gt_\n\t    }_lt_br /_gt_\n\t tile.xy _eq_ aTile.xy_sm_   \n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut when I do something like this it crashes the webGL which I am guessing is do to the loop never exiting or something._lt_br /_gt__lt_br /_gt_\n\tIf I do something like_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvec4 tile _eq_ texture2D(tiles_co_ texCoord)_sm__lt_br /_gt_\n\tif(tile.x _eq__eq_ 1.0 &amp_sm_&amp_sm_ tile.y _eq__eq_ 1.0) { discard_sm_ }_lt_br /_gt_\n\tvec4 aTile _eq_ texture2D(animationMap_co_ tile.xy)_sm__lt_br /_gt_\n\tif(aTile.a _eq__eq_ 1.0){_lt_br /_gt_\n\t    float _t _eq_ sin(time)_sm__lt_br /_gt_\n\t    float aS _eq_ aTile.z_sm_    _lt_br /_gt_\n\t    if(aS &lt_sm_ _t){    _lt_br /_gt_\n\t    tile.xy _eq_ aTile.xy_sm__lt_br /_gt_\n\t    }        _lt_br /_gt_\n\t}_lt_br /_gt__lt_br /_gt_\n\tI can toggle between two frames_co_ but I want to support more!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-10-22T01:29:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_vec4 tile _eq_ texture2D(tiles_co_ texCoord)_sm_\nif(tile.x _eq__eq_ 1.0 &amp_sm_&amp_sm_ tile.y _eq__eq_ 1.0) { discard_sm_ }\nvec4 aTile _eq_ texture2D(animationMap_co_ tile.xy)_sm_\nif(aTile.a !_eq_ 0.0) { \nfloat aS _eq_ aTile.b_sm_\t\nfloat _t _eq_ sin(time)_sm_\nwhile(aS &lt_sm_ _t &amp_sm_&amp_sm_ aTile.a &gt_sm_ 0.){\n\taTile _eq_ texture2D(animationMap_co_ aTile.xy)_sm_\t\n\taS _eq_ aTile.b_sm_\n}\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\twhich does not crash anything_co_ but effectively does nothing but prove the loop is not making it crash.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut the second I add this\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_vec4 tile _eq_ texture2D(tiles_co_ texCoord)_sm_\nif(tile.x _eq__eq_ 1.0 &amp_sm_&amp_sm_ tile.y _eq__eq_ 1.0) { discard_sm_ }\nvec4 aTile _eq_ texture2D(animationMap_co_ tile.xy)_sm_\nif(aTile.a !_eq_ 0.0) { \nfloat aS _eq_ aTile.b_sm_\t\nfloat _t _eq_ sin(time)_sm_\nwhile(aS &lt_sm_ _t &amp_sm_&amp_sm_ aTile.a &gt_sm_ 0.){\n\taTile _eq_ texture2D(animationMap_co_ aTile.xy)_sm_\t\n\taS _eq_ aTile.b_sm_\n}\nif(aS &gt_sm_ _t){\ntile.xy _eq_ aTile.xy_sm_\n}\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tit crashes after the first _qt_frame_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif I do this_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_vec4 tile _eq_ texture2D(tiles_co_ texCoord)_sm_\nif(tile.x _eq__eq_ 1.0 &amp_sm_&amp_sm_ tile.y _eq__eq_ 1.0) { discard_sm_ }\nvec4 aTile _eq_ texture2D(animationMap_co_ tile.xy)_sm_\nif(aTile.a !_eq_ 0.0) { \nfloat aS _eq_ aTile.b_sm_\t\nfloat _t _eq_ sin(time)_sm_\nif(aS &gt_sm_ _t){\ntile.xy _eq_ aTile.xy_sm_\n}\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIt toggles between the frames but I need to support more then two frames.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2017-10-22T04:25:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInteresting observation while loop needs and exit plan _lt_br /_gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#PYK67E%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#PYK67E#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut it sounds more like you need to access the previous rendered frame\n_lt_/p_gt_\n\n_lt_p_gt_\n\teg. sampler2D backbuffer in sandbox\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//glslsandbox.com/e#207.3_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//glslsandbox.com/e#207.3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-10-22T15:53:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk so that kicks it out and stops it from freezing_co_ but I still cant get the _qt_animation_qt_ to work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the idea_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have 3 textures for the animation test I am using_dd__lt_br /_gt_\n\tthe atlas which is the art\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15345_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/ani_atlas_test.png.099221c667fe4cfe8c50b2125bbb0443.png_qt_ alt_eq__qt_ani_atlas_test.png.099221c667fe4cfe8c50b2125bbb0443.png_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tThe layer which gives the shader the location of the original sprite placed.  In the example I am going to provide it is set to repeat when I make the texture so this 1 by 1 tile covers the whole screen multiple times._lt_br /_gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15346_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/ani_layer.png.8a27a570ecc96396545654648a3e36d3.png_qt_ alt_eq__qt_ani_layer.png.8a27a570ecc96396545654648a3e36d3.png_qt_ /_gt__lt_br /_gt_\n\t^ hopefully you see the one pxl above its colors are r_dd_0_dd_g_dd_0_dd_b_dd_0_dd_a_dd_1 which represents the number 1 tile on the atlas (r_dd_1_dd_g_dd_0_dd_b_dd_0_dd_a_dd_1 would be 2) r is x and g is y_co_ blue/alpha are unused right now._lt_br /_gt__lt_br /_gt_\n\tAnd lastly where I am trying to make the magic happen is the animation look up texture_co_ this uses the same idea as the layer but holds different information and is a 1x1pxl equivalent to the atlas_dd__lt_br /_gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15347_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/animation_atlas_test.png.108e8acd53e690506adc166fe926fe28.png_qt_ alt_eq__qt_animation_atlas_test.png.108e8acd53e690506adc166fe926fe28.png_qt_ /_gt__lt_br /_gt_\n\tRight now I have the bottom blank_co_ I just want to get through the 1234... so the information stored on these are the x_dd_y of the next tile held in the red green_co_ the _t_step_t_ of the tile is in the blue.  the step I am using in a very rudimentary way right now_co_ it is just a number between 0-1 that says when to go to the next tile dependent on right now a time calculation.  Later I will use the alpha as a scaler for that timing_co_ and will pass another global variable to it as well to fine tune timing on each client as well but that_t_s later down the road...._lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//pryme8.github.io/TileMaster/ani-test.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//pryme8.github.io/TileMaster/ani-test.html_lt_/a_gt_ &lt_sm_- for the nonworking animation example._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/Pryme8/TileMaster/blob/gh-pages/ani-test.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/Pryme8/TileMaster/blob/gh-pages/ani-test.html_lt_/a_gt_ &lt_sm_- Line 174_lt_br /_gt__lt_br /_gt_\n\tIf I uncomment line 166 through 170 then it will toggle between tiles... but like I said unless the super duper retro look is what your going for this is not going to work._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2017-10-22T21:01:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tlet my rephrase_co_ for my own understanding_co_ the goal - deserved look is to loop through the nummers 1 -4_co_ - more generally speaking through a specific area\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand simpel if statment _dd_ _lt_a href_eq__qt_http_dd_//musician-elephant-31700.bitballoon.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//musician-elephant-31700.bitballoon.com/ _lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tis not enough_co_ you want to test for a specific color value in an area_co_ and when it_t_s present_co_ then cut out the object_co_ - like in photoshop select area by color ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-10-22T23:44:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWhat if I don_t_t know the number of frames I_t_ll take a look at what you got when I get home.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2017-10-23T02:31:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOK. I understand_co_ this can turn out a time consuming project. But also a very interessting one._lt_br /_gt__lt_br /_gt_\n\tI think what you are looking for is kind of text font rendering technique using shaders_co_ some good implementations here_dd_ _lt_a href_eq__qt_https_dd_//www.shadertoy.com/results?query_eq_font_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.shadertoy.com/results?query_eq_font_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-10-23T02:52:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk I finally got to look at your example with_dd_ _lt_br /_gt_\n\tfloat _t _eq_ sin(time)_sm__lt_br /_gt_\n\tif(0.5&lt_sm__eq__t)tile.xy +_eq_ aTile.xy_sm_ // 1_lt_br /_gt_\n\tif(0.25&lt_sm__eq__t)tile.xy +_eq_ aTile.xy_sm_ // 2 _sm__lt_br /_gt_\n\tif(-0.25&lt_sm__eq__t)tile.xy +_eq_ aTile.xy_sm_// 3 _sm__lt_br /_gt_\n\tif(-0.5&lt_sm__eq__t)tile.xy _eq_tile.xy_sm_// 4 _sm__lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tAnd that is fine_co_ for hard coding the animations in_co_ but what I want is to sample the blue channel from aTile check if its &gt_sm_ then _t and if so stop on that tile.  I know this seems weird to do but there is a really good idea behind this that I just don_t_t feel like explaining at this juncture.  _lt_br /_gt__lt_br /_gt_\n\tThe proccess that I am looking for would be like_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) Check the layer texture for what sprite to reference_sm__lt_br /_gt_\n\t2) With the X_dd_Y value of tile_co_ check the value on that sprite on the animation sheet_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3) If the alpha is 0 on the animation sheet do nothing but return the base sprite_sm__lt_br /_gt_\n\t3a) Else if the Alpha is &gt_sm_ 0 on the animation sheet get the blue value and test_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4) if its &gt_sm_ then _t_co_ set the red and green channels (or the xy) of the aTile to the tile.xy and output that sprite._lt_br /_gt_\n\t5) if its &lt_sm_ then _t get the current aTile.xy and re-sample that coordinate off the animation sheet to get the tile data agian on the animation texture_sm__lt_br /_gt_\n\t6) repeat steps 3-5 as necessary until the blue channel meets the requirements or you run into a 0 alpha tile.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou need to shift the _t into a range of 0-1 though because the blue channel is in that range._lt_br /_gt__lt_br /_gt_\n\tThis will make it so any tile can reference any other tile on the sheet for animations and once I put together the editor it will be seamless I am hoping if I can figure this one part out.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2017-10-23T15:22:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYes_co_ now its more descriptive! And also sorry i_t_m out of time. I can give you only suggestions._lt_br /_gt__lt_br /_gt_\n\tfirst littele playground update_dd_ check if this works on other platforms like ios_co_ i looks a bit weird to me_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#PYK67E%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#PYK67E#4_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tif you are looking for tiles also check how babylon is mapping your texture_lt_br /_gt_\n\tgl.texParameteri(gl.TEXTURE_2D_co_ gl.TEXTURE_WRAP_S_co_ gl.CLAMP_TO_EDGE)_sm__lt_br /_gt_\n\tgl.texParameteri(gl.TEXTURE_2D_co_ gl.TEXTURE_WRAP_T_co_ gl.CLAMP_TO_EDGE)_sm__lt_br /_gt_\n\tgl.texParameteri(gl.TEXTURE_2D_co_ gl.TEXTURE_MIN_FILTER_co_ gl.LINEAR)_sm__lt_br /_gt_\n\tgl.texParameteri(gl.TEXTURE_2D_co_ gl.TEXTURE_MAG_FILTER_co_ gl.LINEAR)_sm__lt_br /_gt__lt_br /_gt_\n\tyou could easily run in an error becourse of the _qt_hidden_qt_ default behavior\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-10-23T15:48:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDo I need to do it as secondary functions?  Like have one that loops with an if statement that runs another function to sample the animation tile and then keep recalling that function till it tests out?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2017-10-23T15:54:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tfunction recursion an that is all webgl 2.0 stuff. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou need to do and if statement in a while loop becourse in your shader the while loop never exits (has no real logical exit condition) sin(t)&lt_sm_5&amp_sm_&amp_sm_ is repetitive_lt_br /_gt__lt_a href_eq__qt_https_dd_//stackoverflow.com/questions/872996/immediate-exit-of-while-loop-in-c_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//stackoverflow.com/questions/872996/immediate-exit-of-while-loop-in-c_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-10-23T18:00:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tso why does this one not kick out of the while loop then?_lt_br /_gt_\n\tFigured that is what I was doing with this one.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_192657_qt_ data-ipsquote-contentid_eq__qt_33584_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1508635785_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 10/21/2017 at 6_dd_29 PM_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tvec4 tile _eq_ texture2D(tiles_co_ texCoord)_sm_ _lt_span_gt_if_lt_/span_gt_(tile.x _eq__eq_ _lt_span_gt_1.0_lt_/span_gt_ &amp_sm_&amp_sm_ tile.y _eq__eq_ _lt_span_gt_1.0_lt_/span_gt_) { discard_sm_ } vec4 aTile _eq_ texture2D(animationMap_co_ tile.xy)_sm_ _lt_span_gt_if_lt_/span_gt_(aTile.a !_eq_ _lt_span_gt_0.0_lt_/span_gt_) { float _lt_span_gt_aS_lt_/span_gt_ _eq_ aTile.b_sm_ float _t _eq_ sin(time)_sm_ _lt_span_gt_while_lt_/span_gt_(_lt_span_gt_aS_lt_/span_gt_ &lt_sm_ _t &amp_sm_&amp_sm_ aTile.a &gt_sm_ _lt_span_gt_0._lt_/span_gt_){ aTile _eq_ texture2D(animationMap_co_ aTile.xy)_sm_ _lt_span_gt_aS_lt_/span_gt_ _eq_ aTile.b_sm_ } _lt_span_gt_if_lt_/span_gt_(_lt_span_gt_aS_lt_/span_gt_ &gt_sm_ _t){ tile.xy _eq_ aTile.xy_sm_ } }\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2017-10-24T01:39:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo i did a little shader_co_ this is not what you are looking for ... so i would do everything in a singel shader test for color and the print the nummbers. i wrote some notes maybe you find something usefull\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#PYK67E%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#PYK67E#5_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-10-24T04:01:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//pryme8.github.io/TileMaster/ani-test.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//pryme8.github.io/TileMaster/ani-test.html_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tOk so it _qt_works_qt_ but the positions are wrong... I just gotta figure out why I_t_m referencing the wrong tiles when I use the animation map samples...  uhh but hopefully this gets me in the right direction_lt_br /_gt__lt_br /_gt_\n\t*update*_lt_br /_gt_\n\tvec4 tile _eq_ texture2D(tiles_co_ texCoord)_sm__lt_br /_gt_\n\tif(tile.x _eq__eq_ 1.0 &amp_sm_&amp_sm_ tile.y _eq__eq_ 1.0) { discard_sm_ }_lt_br /_gt_\n\tvec4 aTile _eq_ texture2D(animationMap_co_ tile.xy)_sm__lt_br /_gt_\n\tif(aTile.a !_eq_ 0.0) { _lt_br /_gt_\n\tfloat aS _eq_ aTile.b_sm_    _lt_br /_gt_\n\tfloat _t _eq_ (tan(time)+1.0)/2.0_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif(aS&gt_sm__t){    _lt_br /_gt_\n\t    for(int i_eq_0_sm_ i&lt_sm_maxFrames_sm_ i++){_lt_br /_gt_\n\t        aTile _eq_ texture2D(animationMap_co_ aTile.xy)_sm__lt_br /_gt_\n\t            if(aTile.a _eq__eq_ 0.0)break_sm__lt_br /_gt_\n\t            aS _eq_ aTile.b_sm__lt_br /_gt_\n\t            if(aS&gt_sm__t){_lt_br /_gt_\n\t                tile.xy _eq_ aTile.xy_sm__lt_br /_gt_\n\t                break_sm__lt_br /_gt_\n\t            }_lt_br /_gt_\n\t        }_lt_br /_gt_\n\t    }_lt_br /_gt_\n\t}_lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tthis is pretty close_co_ but I can not get it to go past the second frame... it just seems to toggle back and forth between the first frame and the second._lt_br /_gt__lt_br /_gt_\n\tIm starting to think its really close... I just am to much of a dummy at glsl to figure it out.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-10-24T08:13:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2BJAXD%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2BJAXD#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\twhy you don_t_t use Mod and floor\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\ttime _eq_ &gt_sm_                                  0 - 1 - 2 - 3 - 4 - 5 - 6 - ...\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\tmod(time_co_1.) _eq_&gt_sm_                        0 - 1 - 1 - 1 - 1 - 1 - ...\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\tmod(time *10._co_1.)/10. _eq_&gt_sm_         0 _co_ 0.1 _co_ 0.2 _co_ 0.3 _co_ 0.4 _co_0.5 _co_0.6 _co_ ... \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#PYK67E%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#PYK67E#6_lt_/a_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_font-size_dd_18px_sm__qt__gt__lt_strong_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt_vec2( mod( (p.x*4. )_co_1.)/4.   _lt_/span_gt__lt_span style_eq__qt_color_dd_#2ecc71_sm__qt__gt_/*take one column */_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt_     +  floor(_t*4.)/4.   _lt_/span_gt__lt_span style_eq__qt_color_dd_#2ecc71_sm__qt__gt_ /*move columns (step by step )*/_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt_        _co_p.y)_lt_/span_gt__lt_/strong_gt__lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-10-24T13:02:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twhat If the number of frames is dynamic and they have different timings?_lt_br /_gt_\n\tthe whole point of this_co_ is to reference the animation texture file for what tile to go to and _qt_when_qt_ to go there._lt_br /_gt_\n\tWhat if the texture animation sheet says the tile goes from number 1 to number 4 to one of the squiggly blue lines back to 1 ect...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe the answer is here I just don_t_t understand it?_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-10-24T13:40:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou can control that\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#PYK67E%238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#PYK67E#8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#a31515_sm_font-size_dd_18px_sm__qt__gt_vec2( mod( (p.x*4. )_co_1.)/4.   _lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#2ecc71_sm_font-size_dd_18px_sm__qt__gt_/*take one column */_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#a31515_sm_font-size_dd_18px_sm__qt__gt_     +  _t * 0.25   _lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#2ecc71_sm_font-size_dd_18px_sm__qt__gt__lt_span_gt_ _lt_/span_gt_/*move columns (t _eq_ frame  )*/_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#a31515_sm_font-size_dd_18px_sm__qt__gt_        _co_p.y)_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-10-24T15:19:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDid you read the above post about what I am trying to do with the 3 different sampler2d uniforms? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow could I use your method with that principal? I’m trying to basically make a way to turn any texture atlas into a animated sheet.   \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks so much guys for helping me with ideas on this_co_ it may just be a bad formatted idea but I’m pretty sure if I can explain it well enough it will click_co_ or I will get enough info to figure it out myself. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIve got other ways I could do it that are more traditional but I have a greater goal at mind.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2017-10-24T15:41:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ _lt_br /_gt__lt_br /_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__qt_what If the number of frames is dynamic and they have different timings?_qt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes_co_ you need to make a grid[row_co_colums] and then Access the values. - _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_different timings_lt_/span_gt_ -&gt_sm_ then will be calculated based on grid[row_co_colums] .length  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tframe_dd_      0     1     2   3 _lt_br /_gt_\n\ttexPos_dd_ 0.2_co_.0.4_co_.0.8. 1.0_lt_br /_gt_\n\tor -&gt_sm_ firstpos 0.2 +firstpos 0.2 _eq_ frame 1_lt_br /_gt__lt_br /_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_// prev.pos PLUS_eq_MOVE TO NEXT POSTION_lt_/span_gt__lt_br /_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_float _t _eq_ sin(time)_sm__lt_/span_gt__lt_br style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt_ /_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_if(0.5&lt_sm__eq__t)tile.xy +_eq_ aTile.xy_sm__lt_/span_gt__lt_br style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt_ /_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_if(0.25&lt_sm__eq__t)tile.xy +_eq_ aTile.xy_sm_ _lt_/span_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t// NEXT _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_POSTION_lt_/span_gt_ ? _lt_br /_gt_\n\tif(aS&gt_sm__t){    _lt_br /_gt_\n\t    for(int i_eq_0_sm_ i&lt_sm_maxFrames_sm_ i++){_lt_br /_gt_\n\t        aTile _eq_ texture2D(animationMap_co_ aTile.xy)_sm__lt_br /_gt_\n\t            if(aTile.a _eq__eq_ 0.0)break_sm__lt_br /_gt_\n\t            aS _eq_ aTile.b_sm__lt_br /_gt_\n\t            if(aS&gt_sm__t){_lt_br /_gt_\n\t                tile.xy _eq_ aTile.xy_sm__lt_br /_gt_\n\t                break_sm__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_strong_gt__lt_a data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard&amp_sm_referrer_eq_http%253A%252F%252Fwww.html5gamedevs.com%252Ftopic%252F33584-shader-loop-question%252F%253F_fromLogin%253D1_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt_ style_eq__qt_background-color_dd_transparent_sm_color_dd_inherit_sm__qt_ title_eq__qt_Go to NasimiAsl_t_s profile_qt__gt_NasimiAsl_lt_/a_gt__lt_/strong_gt__lt_br /_gt_\n\tvec2( mod( (p.x*4. )_co_1.)/4.   /*take one column */     +  _t * 0.25    /*move columns (t _eq_ frame  )*/        _co_p.y)_lt_br /_gt__lt_br /_gt_\n\t+ make a grid on a texture_lt_br /_gt_\n\t+ specify a singel element(char) [width_co_height]_lt_br /_gt_\n\t+ move the singel element position along the grid to get the next element_lt_br /_gt__lt_br /_gt_\n\t_dd_ _lt_img alt_eq__qt_B)_qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_cool.png_qt_ title_eq__qt_B)_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2017-10-25T03:34:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOFFTOPIC_lt_br /_gt__lt_br /_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ _qt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_why you don_t_t use Mod and floor_lt_/span_gt__qt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhatever works_co_ -works _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#PYK67E%2313_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#PYK67E#13_lt_/a_gt__lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.wolframalpha.com/input/?i_eq_(%7Bx_co_y%7D%2F4.)%2Bfract((%7B0..16_co_3-0..16%2F4%7D)%2F4.)_co_x%3D0..1._co_y%3D0..1._qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.wolframalpha.com/input/?i_eq_({x_co_y}%2F4.)%2Bfract(({0..16_co_3-0..16%2F4})%2F4.)_co_x%3D0..1._co_y%3D0..1._lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-10-25T14:13:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk_co_ now I just gotta figure out what it is yall just told me!  I gave not had a chance because work has been so overloaded but maybe today ill get a second._lt_br /_gt_\n\tThanks yall.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-10-25T17:42:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tcan you do this one _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#PYK67E%2313_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#4588c5_sm_font-size_dd_14px_sm__qt__gt_https_dd_//playground.babylonjs.com/#PYK67E#13_lt_/a_gt_ as webgl 1.0 instead of 2.0 please? _lt_br /_gt__lt_br /_gt_\n\tI tried but am getting some weird errors._lt_br /_gt__lt_br /_gt_\n\tAlso I dont see how this method is going to work in situations like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_example.jpg.08d3ec7b4a28b66b6602a6fc92a27bb9.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15405_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/example.jpg.08d3ec7b4a28b66b6602a6fc92a27bb9.jpg_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tSo this sheet has several different animation sequences on it_co_ what I am trying to do is use the Animation Map texture to define where these different _t_zones_t_ are._lt_br /_gt__lt_br /_gt_\n\tMaybe use your method with a combination of mine?  Where the Animation map has the data structure of r -&gt_sm_ xCount of tiles_co_ g -&gt_sm_ y count of tiles_co_ b -&gt_sm_ speed Adjustment_co_ a -&gt_sm_ is it animated or not._lt_br /_gt__lt_br /_gt_\n\tAnd then use that data to control the mod method you have demonstrated?_lt_br /_gt__lt_br /_gt_\n\tI think we are getting closer._lt_br /_gt__lt_br /_gt_\n\tThe whole point of this_co_ is to be able to animate whole atlas files without passing a bunch of other information to the shader._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2017-10-25T19:34:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt__lt_br /_gt_\n\tYes_co_ i know. I was placing the #version derivative a second time ( it_t_s already done by babylonjs ) becourse gl_FragColor in WebGL2.0 is deprecated  and now is is able  to have multiple outputs_co_ so you can write directly from shader to shader etc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo my custom shader is compete with babylonjs the default material _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/407b2d3f0ffe9d7e80ecc670ebab7fc3f14bae9d/src/Shaders/default.fragment.fx#L420_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/407b2d3f0ffe9d7e80ecc670ebab7fc3f14bae9d/src/Shaders/default.fragment.fx#L420_lt_/a_gt_ _lt_br /_gt_\n\t( but im not sure about this )_lt_br /_gt__lt_br /_gt__lt_strong_gt_Compatibility Mode_lt_/strong_gt_ Solution 1 (quick and dirty)_lt_br /_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt_#if __VERSION__ &gt_sm__eq_ 300 _lt_/span_gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#PYK67E%2317_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#PYK67E#17_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt__lt_strong_gt_Compatibility Mode_lt_/strong_gt_ Solution 2_lt_br /_gt_\n\tTheir a function i forgot like scene.StandartMaterial_eq_null_co_ or scene.hasDefaultMaterial(NO)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co__lt_br /_gt_\n\tso this is a webgl1.0 shader - when i done it right_co_ should work_lt_br /_gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#PYK67E%2316_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#PYK67E#16_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-10-25T19:50:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAwesome_co_ Ok I am going to take what you have and combine my processes and maybe we will have a solution! Thank you.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-10-25T23:19:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tReally quick_dd_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt_texture2D(tex_co_  vuv / 4. + fract(vec2(_t_co_ 3 - _t / 4) / 4. ))_sm__lt_br /_gt__lt_br /_gt_\n\t\tso its texture2D(texture_co_  cellsize? + please explain the fract part?)_lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]