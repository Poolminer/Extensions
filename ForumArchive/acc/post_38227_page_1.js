[{"Owner":"BlackShadauw","Date":"2018-06-14T06:24:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am stuck an don_t_t find any workable solution on the web.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to apply transparency on a simple box (with / or without UV mapp)_co_ but if in my Blender it seems to be OK_co_ in my BSJ scene it dosent work_co_ the transparency dosen_t_t apply _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny idea what could be missing ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_18730_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_06/Capture.JPG.b17321ea024fcb46fe0f9f436caa0762.JPG_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Capture.JPG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_18730_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_06/Capture.thumb.JPG.154b4d013a6ba7745a71e9573f16147c.JPG_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-06-14T07:33:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve also notice this issue_co_ and it seems you just have to put the value _lt_em_gt_2_lt_/em_gt_ of your _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/api/classes/babylon.pbrmaterial#transparencymode_qt_ rel_eq__qt_external nofollow_qt__gt_transparencyMode _lt_/a_gt_material property (on the BJS side). Or maybe play with the AlphaMode directly from the gltF node ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackShadauw","Date":"2018-06-15T09:17:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20526_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/_qt_ rel_eq__qt__qt__gt_@V!nc3r_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks yea finaly the transparencyMode did the trick.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut this is sad to pass by BJS when using glTF for that kind of stuff._lt_br /_gt_\n\tMy glTF alpha_co_ alphamode etc values are not applied on the Material object in Babylon _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn chrome inspector i have these (as you can see before that_t_s not what I made.. well never mind)\n_lt_/p_gt_\n\n_lt_ol style_eq__qt_color_dd_#212121_sm_font-size_dd_12px_sm__qt__gt_\n\t_lt_li_gt_\n\t\t_lt_span style_eq__qt_color_dd_#881391_sm__qt__gt_albedoTexture_lt_/span_gt__lt_span_gt__dd__lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_undefined_lt_/span_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_span style_eq__qt_color_dd_#881391_sm__qt__gt_alpha_lt_/span_gt__lt_span_gt__dd__lt_/span_gt__lt_span style_eq__qt_color_dd_#1c00cf_sm__qt__gt_1_lt_/span_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_span style_eq__qt_color_dd_#881391_sm__qt__gt_alphaCutOff_lt_/span_gt__lt_span_gt__dd__lt_/span_gt__lt_span style_eq__qt_color_dd_#1c00cf_sm__qt__gt_0.4_lt_/span_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_span style_eq__qt_color_dd_#881391_sm__qt__gt_alphaMode_lt_/span_gt__lt_span_gt__dd__lt_/span_gt__lt_span style_eq__qt_color_dd_#1c00cf_sm__qt__gt_2_lt_/span_gt_\n\t_lt_/li_gt_\n_lt_/ol_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-06-15T10:50:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31632-blackshadauw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31632_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31632-blackshadauw/_qt_ rel_eq__qt__qt__gt_@BlackShadauw_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve written about this before_co_ but in my opinion the best pipeline into BJS is using the .Babylon format exported from Blender - which is the most compatible and repeatable format to use. I like Kronos_co_ yeet the glTF format is lacking.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope this helps.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackShadauw","Date":"2018-06-15T12:00:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt_ Thanks for your opinion_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYea i maybe will pass under babylon format...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI avoided it until now to have an easy setting texture in glTF format that i could not have with .byblon as i saw._lt_br /_gt_\n\tI avoided .babylon too_co_ to have cycle for a more realistic texture render._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-06-15T13:06:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31632-blackshadauw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31632_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31632-blackshadauw/_qt_ rel_eq__qt__qt__gt_@BlackShadauw_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere are things you need to know to prepare your scene for the ..babylon format. I can help you through this - ad it_t_s not difficult if you know what you_t_re doing. Many others can help also.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-06-17T16:42:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31632-blackshadauw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31632_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31632-blackshadauw/_qt_ rel_eq__qt__qt__gt_@BlackShadauw_lt_/a_gt__lt_/span_gt_ _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20526_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/_qt_ rel_eq__qt__qt__gt_@V!nc3r_lt_/a_gt__lt_/span_gt__lt_br /_gt_\n\tyou need an alpha texture_lt_br /_gt_\n\tsee here_dd_ _lt_a href_eq__qt_https_dd_//github.com/KhronosGroup/glTF-Blender-Exporter/blob/master/scenes/01_alpha_blend.blend_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/KhronosGroup/glTF-Blender-Exporter/blob/master/scenes/01_alpha_blend.blend_lt_/a_gt__lt_br /_gt_\n\ttest_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#T7A2L7%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#T7A2L7#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-06-18T04:46:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlpha is definitely supported in GLTF and it could either be stored in a texture as seen before or as part of the 4th channel of the base color.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#T7A2L7%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#T7A2L7#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAdding _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt_ who can definitely help on this and the current status of the blender exporter.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-06-18T08:28:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOf course it works when using an alpha texture_co_ but sometimes you want alpha in a material without texture - like the example case of this thread - _co_ and if so we have to tweak the transparencyMode when in BJS.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-06-18T09:33:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt__lt_br /_gt_\n\tYes_co_ you can hack the GLTF *.txt file_co_ but the ultimative goal would be if the exporter would support it._lt_br /_gt_\n\t_lt_img alt_eq__qt_blender gltf alpha export_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed ipsAttachLink_image ipsAttachLink_right_qt_ data-fileid_eq__qt_18786_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_06/balpha.jpg.50e422e6777e18a9a9394e385ef97b6f.jpg_qt_ style_eq__qt_width_dd_640px_sm_height_dd_auto_sm_float_dd_right_sm__qt_ /_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20526_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/_qt_ rel_eq__qt__qt__gt_@V!nc3r_lt_/a_gt__lt_br /_gt_\n\tyeah_co_ i understand that. unfortunately that_t_s how the devs from GLTF intended it _dd_ /_lt_br /_gt_\n\t_lt_br /_gt_\n\tthe docs_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/KhronosGroup/glTF-Blender-Exporter/blob/master/docs/user.md#alpha_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/KhronosGroup/glTF-Blender-Exporter/blob/master/docs/user.md#alpha  _lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-06-18T16:30:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt_ Yup I totally understand that. I was just highlighting that alpha is available in GLTF without texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt_ is looking into the corresponding blender support atm.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-06-18T17:00:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is an issue with the material interface. In order to get alphaMode set in the glTF_co_ you have to set the BaseColorFactor_t_s alpha to something smaller than 1.0. Like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_18789_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_06/screenshot.png.8e3582c3a056890aabd39b514d659c7a.png_qt_ alt_eq__qt_screenshot.png.8e3582c3a056890aabd39b514d659c7a.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf this is an issue_co_ please post something in the _lt_a href_eq__qt_https_dd_//github.com/KhronosGroup/glTF-Blender-Exporter/issues_qt_ rel_eq__qt_external nofollow_qt__gt_glTF-Blender-Exporter repo_lt_/a_gt_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-06-18T18:17:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_Ah_co__lt_strong_gt_ BaseColorFactor_lt_/strong_gt_ _t_s_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_﻿_lt_span_gt_ _lt_/span_gt_alpha YES it works! _lt_/span_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackShadauw","Date":"2018-06-22T09:25:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_ for me it dosent work properly_co_ i need to cheat a little.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter using your settings BghGary_co_ i must to force with javascript the alpha mode to _qt_0.X_qt_ and to force transparencyMode to _qt_2_qt_ to have some transparent effect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNothing happend with only the GlTF file.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-06-23T03:42:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31632-blackshadauw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31632_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31632-blackshadauw/_qt_ rel_eq__qt__qt__gt_@BlackShadauw_lt_/a_gt_ Can you post the glTF file? Does it have alphaMode set in the materials?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-06-23T12:59:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs I believe _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31632-blackshadauw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31632_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31632-blackshadauw/_qt_ rel_eq__qt__qt__gt_@BlackShadauw_lt_/a_gt_ is saying_co_ and also in my experience_co_ the only reliable result you_t_ll get is to not rely on Blender or any other external package to set many of your material values. I personally never do this_co_ as I lose control over any functions handling my materials_co_ and depending on the export application_co_ many of your material values will not export properly depending on how they were applied - especially using glTF.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-06-23T15:14:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tglTF is intended as a portable runtime format and supports a PBR metallic roughness material model_co_ which includes alpha as coverage. We call it the JPEG of 3D. It is not intended for interchange_co_ though you are free to do so. If the intent of the original model uses a material model within the scope of glTF_co_ it should work. The original question about applying transparency using Blender should work.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackShadauw","Date":"2018-06-24T08:58:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is all files the white piece should be about 50% transparent.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn my (small) experience with glTF file and blender it appear to be very difficult to have a good setting when exporting for webGL.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo many parameters to understand which one should be or should not to be activated to have the desire effect. It is really nice to count on you guys.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut with only the documentation it is realy hard to understand how things works._lt_br /_gt_\n\tSomething that would be great is a repository with some workable exemples .blend files and other that people could download_co_ study the content_co_ make tests.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will make a try with .babylon\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_18858_qt__gt_test.zip_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-06-24T13:13:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI just replied to a message which deals with this issue. The question is how to achieve photo realism. The following is my personal approach_co_ however it works for me. I hope the person I messaged with isn_t_t offended I posted my response_dd_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_em_gt__lt_strong_gt_Just think about how difficult it is to render photo-realism in ANY 3D application. I have years of experience working with practically every renderer_co_ and it takes considerable knowledge to render what we do for feature film and broadcast. However_co_ WebGL does not currently have the rendering capabilities that external renderers such as RenderMan_co_ Mental Ray_co_ VRay_co_ etc. has. It is very limited_co_ unles you_t_re a wiz at writing OpenGL shaders. If you_t_re intersted in this and have the skill set to do it_co_ then visit Shadertoy _lt_a href_eq__qt_https_dd_//www.shadertoy.com/_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_background-color_dd_transparent_sm_color_dd_#3d6594_sm__qt__gt_https_dd_//www.shadertoy.com/_lt_/a_gt_ and modify any shader that suits you. _lt_/strong_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_em_gt__lt_strong_gt_Otherwise_co_ you can always achieve photo realistic results in WebGL by first taking a good digital camera (not a camera phone_co_ as lenses mean everything)_co_ and shooting your own real world textures specific to your mesh. Then import only the model (and animation if you need) into WebGL and apply and new material using real world textures specific to your model. I must point out that you MUST be proficient in Photoshop to really make realism come to life in WebGL V1. I can expand this if you like. But the point is to gain as much control over your materials and textures as possible in the render engine of WebGL (generally the same on all standard browsers)_co_ and not let a 3D app versioned exporter do it for you if you truly want photo realism. The learning curve on this is very fast - even for a beginner in babylon. But I must point out that if you_t_re looking for realism_co_ NEVER download textures from the web._lt_/strong_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_em_gt__lt_strong_gt_Let me know if I need to expand on any of this._lt_/strong_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-06-25T17:01:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_219281_qt_ data-ipsquote-contentid_eq__qt_38227_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1529830724_qt_ data-ipsquote-userid_eq__qt_31632_qt_ data-ipsquote-username_eq__qt_BlackShadauw_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn ‎6‎/‎24‎/‎2018 at 1_dd_58 AM_co_ BlackShadauw said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHere is all files the white piece should be about 50% transparent.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYeah_co_ I also made this mistake a few times. You changed the BaseColor property instead of BaseColorFactor property. My understanding is that you use BaseColor for textures and BaseColorFactor for the factor. The _lt_a href_eq__qt_https_dd_//github.com/KhronosGroup/glTF-Blender-Exporter/blob/master/docs/user.md#alpha_qt_ rel_eq__qt_external nofollow_qt__gt_documentation_lt_/a_gt_ states this exactly_co_ but still it_t_s easy to do it wrong.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_219281_qt_ data-ipsquote-contentid_eq__qt_38227_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1529830724_qt_ data-ipsquote-userid_eq__qt_31632_qt_ data-ipsquote-username_eq__qt_BlackShadauw_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn ‎6‎/‎24‎/‎2018 at 1_dd_58 AM_co_ BlackShadauw said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tBut with only the documentation it is realy hard to understand how things works._lt_br /_gt_\n\t\t\tSomething that would be great is a repository with some workable exemples .blend files and other that people could download_co_ study the content_co_ make tests.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI would suggest filing an issue on _lt_a href_eq__qt_https_dd_//github.com/KhronosGroup/glTF-Blender-Exporter/issues_qt_ rel_eq__qt_external nofollow_qt__gt_glTF-Blender-Exporter_lt_/a_gt_. If you are hitting this_co_ I_t_m sure others will have the same issue.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackShadauw","Date":"2018-06-27T08:47:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi thanks a lot !!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFinaly i have some transparency yea  awesome_co_ i have less hairs but it works _lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_br /_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_BaseColorFactor_lt_span_gt_ _lt_/span_gt__lt_/span_gt_was the good thing\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-27T16:08:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thairs are overrated _lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_This is me_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_06/file.jpeg.47d38912151ef49bd0e0a3f1409665e9.jpeg_qt_ data-fileid_eq__qt_18931_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_18931_qt_ data-unique_eq__qt_u8c51icmm_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_06/file.thumb.jpeg.b1f6456855155e9b49be191bb75fba62.jpeg_qt_ alt_eq__qt_file.jpeg_qt__gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-06-28T08:36:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs this tshirt you wearing? _lt_span class_eq__qt_ipsEmoji_qt__gt_😁_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_rkXYLi1.jpg_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_533_qt_ src_eq__qt_https_dd_//i.imgur.com/rkXYLi1.jpg_qt_ width_eq__qt_533_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-28T15:25:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCorrect!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackShadauw","Date":"2018-06-29T07:29:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tahah you make my day both of you _lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]