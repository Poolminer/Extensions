[{"Owner":"nittrus","Date":"2016-10-12T18:22:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo I would like to have my terrain cast shadows on it_t_s self_co_ like the mountains shadow the rest of the terrain_co_ etc._lt_br /_gt_\n\tBut when I try to do this by adding the groundPlane to the shadowGenerator_co_ the entire mesh turns black.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a way to do this_co_ or is this not something that can be done yet? I really hope to be able to pull this off! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-13T09:57:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again N.  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TCPB_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TCPB_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"nittrus","Date":"2016-10-13T17:52:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_147183_qt_ data-ipsquote-contentid_eq__qt_25729_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1476352626_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 10/13/2016 at 4_dd_57 AM_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi again N.  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TCPB_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TCPB_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHai wingy!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI see that working_co_ that is nice and is what I want_co_ but isn_t_t what I get but also_co_ I_t_m using BABYLON.Mesh.CreateGround not heightfield._lt_br /_gt_\n\tHowever_co_ I took that PG and modified it pretty close to what I have and found out that useVarianceShadowMap set to true was the culprit_co_ however_co_ now the shadow is showing for the hills but it looks destorted_co_ I been playing with bias but not quite getting a better result_co_ but it is better than the entire mesh being black_co_ so yay progress!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the modified PG_dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TCPB%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TCPB#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the help Wingy!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"nittrus","Date":"2016-10-13T18:15:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOK I got it working decently enough_co_ will try to clean it up later. If you have any pointers or tricks I_t_m all ears_co_ but it_t_s now within acceptable tolerances _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2016-10-16T07:28:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t.usePoissonSampling works_co_ without .forceBackFacesOnly (near perfect from a distance)_lt_br /_gt__lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#TCPB%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#TCPB#4_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tI think it is a bug in variance shadow mapping_co_ in the Chebycev inequality function. (Only the variance/blur variance shadows use this)_lt_br /_gt_\n\tI looked at it_co_ and modified it yesterday evening but I could not figure it out... Weird_co_ because it seems ok_co_ but still not working. Maybe with fresh brain._lt_br /_gt_\n\tI would like to use the much nicer variance shadows_co_ poisson is ugly from up close._lt_br /_gt__lt_br /_gt_\n\t(How nice would be a distance-field shadow which smoothes out at a distance from the shadow caster.)_lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2016-10-16T09:59:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIn BABYLON shader source_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/ShadersInclude/shadowsFragmentFunctions.fx#L141_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/ShadersInclude/shadowsFragmentFunctions.fx#L141_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tSomething very similar in playcanvas source_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//github.com/playcanvas/engine/blob/master/src/graphics/program-lib/chunks/shadowVSM_common.frag_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/playcanvas/engine/blob/master/src/graphics/program-lib/chunks/shadowVSM_common.frag_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tSo I think I understand now what it does_co_ but I cannot figure out why it is not working._lt_br /_gt_\n\tIf I switch on both receiveShadows and shadow casting on everything _co_ everything is shadowed._lt_br /_gt_\n\tPoisson works. (but it is not smooth)_lt_br /_gt__lt_br /_gt_\n\tI hope someone will help me !? _lt_img alt_eq__qt_&lt_sm__&lt_sm__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_dry.png_qt_ title_eq__qt_&lt_sm__&lt_sm__qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"nittrus","Date":"2016-10-16T21:21:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_147533_qt_ data-ipsquote-contentid_eq__qt_25729_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1476602913_qt_ data-ipsquote-userid_eq__qt_7708_qt_ data-ipsquote-username_eq__qt_BitOfGold_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t13 hours ago_co_ BitOfGold said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t.usePoissonSampling works_co_ without .forceBackFacesOnly (near perfect from a distance)_lt_br /_gt__lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#TCPB%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#TCPB#4_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\t\t\tI think it is a bug in variance shadow mapping_co_ in the Chebycev inequality function. (Only the variance/blur variance shadows use this)_lt_br /_gt_\n\t\t\tI looked at it_co_ and modified it yesterday evening but I could not figure it out... Weird_co_ because it seems ok_co_ but still not working. Maybe with fresh brain._lt_br /_gt_\n\t\t\tI would like to use the much nicer variance shadows_co_ poisson is ugly from up close._lt_br /_gt__lt_br /_gt_\n\t\t\t(How nice would be a distance-field shadow which smoothes out at a distance from the shadow caster.)_lt_br /_gt__lt_br /_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI had actually discovered that_co_ I even got it looking decent using poison sampling up close now and was able to lower the shadowmap size to regain a bit of performance._lt_br /_gt_\n\tI ended up having two lights for the sun position so to have a shadow generator for the terrain and one for the models_co_ I had to lower the light level of one and the other and adjust shadow darkness until they synced up_co_ it worked very well!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBlurvariance destroys performance so much that I won_t_t even consider using it at this time_co_ maybe if it gets better in the future but it does look nice_co_ but I go from 40FPS with poison and all the other stuff in my scene down to 22FPS with blurvariance.. and that is just with that mode on.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"nittrus","Date":"2016-10-16T22:35:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is a screen shot of it_co_ I_t_m quite satisfied _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_50c0ee887b84e4d21b826e48cb73e51d.png_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_515_qt_ src_eq__qt_https_dd_//i.gyazo.com/50c0ee887b84e4d21b826e48cb73e51d.png_qt_ width_eq__qt_1000_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2016-10-17T07:55:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tTwo lights! And i thought of every possible method but not this simple!_lt_br /_gt_\n\tYou made my day _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"nittrus","Date":"2016-10-17T14:51:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_147638_qt_ data-ipsquote-contentid_eq__qt_25729_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1476690944_qt_ data-ipsquote-userid_eq__qt_7708_qt_ data-ipsquote-username_eq__qt_BitOfGold_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t6 hours ago_co_ BitOfGold said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tTwo lights! And i thought of every possible method but not this simple!_lt_br /_gt_\n\t\t\tYou made my day _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tGlad to have helped! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\tJust remember there is a limit of lights you can have in a scene (I think 6 if I recall)_co_ but this was a light well used I think!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-17T15:59:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLove this thread _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tRegarding VSM_co_ this is a complex beast to harness (further more with int texture where we lose a lot of information )\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]