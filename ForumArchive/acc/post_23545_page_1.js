[{"Owner":"tbgeorge","Date":"2016-06-30T20:11:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ I_t_m trying to load a scene that has meshes with transparent textures on them (leaves). Though when I have those meshes cast shadows_co_ it ignores the transparency and the shadow is incorrect. But when I do it with code_co_ it seems to work as intended. Here is a link to my babylon playground_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JA4FW%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JA4FW#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ I was having a weird issue with the texture even causing shadows to cast at all_co_ my solution was to put a single black pixel in the upper left and lower left corners of the texture and this caused shadows to show up.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny help is appreciated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-07-01T16:01:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tyour code is correct because you are setting your texture to the diffuse channel and thus the engine will use it to do alpha testing. If the texture was set to opacity channel it would have triggered the alpha blending mode which is not compatible with shadows.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou should check with your DCC tool (blender? max?) and be sure to set your texture in the diffuse channel\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"tbgeorge","Date":"2016-07-05T16:24:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWell_co_ that shouldn_t_t be the issue here_co_ unless I_t_m understanding you incorrectly_co_ because if you look at line 59-65_co_ I_t_m assigning the loaded meshes the same material I assigned to the Babylon created planes ( which is casting shadows correctly ). What I_t_m confused about is how they are using the exact same material_co_ though their shadows are still different.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-07-05T22:24:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tActually It was me the one who misunderstood _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIt was a bug_co_ now fixed_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/debug.html#1JA4FW%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/debug.html#1JA4FW#6_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]