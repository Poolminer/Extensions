[{"Owner":"Pryme8","Date":"2018-01-09T16:36:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#AEBA7P%2327_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#AEBA7P#27_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tAs soon as I move the camera the\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_VolumetricLightScatteringPostProcess_lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tlight freaks out_co_ starts on Line 8._lt_br /_gt__lt_br /_gt_\n\t*EDIT*_lt_br /_gt_\n\tHmm I changed the density_co_ and it seems to work now. **NEVERMIND_co_ you can move the camera forward and backwards_co_ but any arc movement with the mouse makes it go nuts._lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-09T16:40:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPinging _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11802-luaacro/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11802_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11802-luaacro/_qt_ rel_eq__qt__qt__gt_@Luaacro_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2018-01-09T18:25:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHum_co_ thanks for reporting!\n_lt_/p_gt_\n\n_lt_p_gt_\n\twill try to understand why it works like this\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2018-01-10T20:42:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ According to the distance between the camera and the star_co_ it looks like you reached the limit of the scattering method _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tMore you go near the star more the scattering artifacts disappear. Unfortunately_co_ you should use this post-process only with _qt_enough big_qt_ objects on the screen_co_ like this_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#AEBA7P%23101_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#AEBA7P#101_lt_/a_gt_ (using the default density value in this example)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]