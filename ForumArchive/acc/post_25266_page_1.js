[{"Owner":"krum110487","Date":"2016-09-18T13:54:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ I am fairly new to babylonjs_co_ but I found this weird thing where on each layer sprites will run at different speeds.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tto see this in action simply change the layermask from LAYER_FG to LAYER_BG.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var spriteManagerPlayer _eq_ new BABYLON.SpriteManager(_qt_playerManager_qt__co_ _qt_textures/player.png_qt__co_ 2_co_ 64_co_ scene)_sm_\n\tspriteManagerPlayer.layerMask _eq_ LAYER_FG_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#CSAVV%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#CSAVV#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfrom playing around with it_co_ it seems the foreground is running 3 times as fast_co_ you can see it demonstrated in this code_dd__lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#CSAVV%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#CSAVV#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also noticed that when I leave the tab and come back in chrome they start to get out of sync_co_ but if you stay on the page_co_ they will stay in sync.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tis this expected? I am a bit confused as to why this may be.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRight now I am experimenting with 2d and 3d plains on different layers_co_ I am also going to be experimenting with renderGroups. So forgive the messy code._lt_br /_gt__lt_br /_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2016-09-18T14_dd_11_dd_41Z_t_ title_eq__t_09/18/2016 02_dd_11  PM_t_ data-short_eq__t_2 yr_t__gt_September 18_co_ 2016_lt_/time_gt_ by krum110487_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_Found new information\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-09-19T17:07:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello I guess the problem comes from the runRenderLoop. The playground has its own renderloop already defined.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis sample seems then to work_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#CSAVV%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#CSAVV#8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]