[{"Owner":"hit2501","Date":"2017-04-23T23:50:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there any image or similar like this where I can see how to positionate lights (hemispheric or directionals)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t _lt_img alt_eq__qt_arc01.jpg_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_750_qt_ src_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/misc/arc01.jpg_qt_ width_eq__qt_1000_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI dont understand the three coordinates system.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry if this is a too _qt_noob_qt_ question.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you all.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-04-24T09:04:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi hit... that is _lt_strong_gt_not_lt_/strong_gt_ a noob question... no need to apologize. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDirection vectors are sometimes difficult to understand.  But .position vectors for lights... is easy_co_ though.  It works the same as mesh .positions.  With Z-facing camera (common)... X is left/right_co_ Y is up/down_co_ and Z is forward/backward. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will soon write a helper section in _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/lights_qt_ rel_eq__qt_external nofollow_qt__gt_our Lights Tutorial_lt_/a_gt_... about directions.  Perhaps I will give a copy to _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ for _lt_a href_eq__qt_http_dd_//babylonjsguide.github.io/basics/Lights_qt_ rel_eq__qt_external nofollow_qt__gt_HIS Lights Tutorial_lt_/a_gt__co_ too.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tFor now_co_ know that there is a method_dd_   _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.5/spotlight#setdirectiontotarget-target-rarr-vector3-classes-2-5-vector3-_qt_ rel_eq__qt_external nofollow_qt__gt_light.setDirectionToTarget(something.position)_lt_/a_gt_ ...that will help you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHemi lights _lt_u_gt_almost always_lt_/u_gt_ aim straight up... direction 0_co_ 1_co_ 0 and their .position is usually 0_co_0_co_0 (scene center) and rarely changed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSpotLights and DirectionalLights are the lights that MOST USE  .setDirectionToTarget().  THEIR .position is VERY important... because their .position is used for shadows creation.  PointLights also have important .position for same shadow reason_co_ but a pointLight is ALL-direction.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI am hurried now_co_ but you can put camera and spotlight inside doubleside box... and experiment aiming spotlight with setDirectionToTarget()... and then checking console.log(spotLight.direction).  You will learn direction vectors fast... when doing that.  Good luck... I_t_ll be back later.  Hope this helps.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hit2501","Date":"2017-04-24T15:03:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you very much Wingnut_co_ setDirectionToTarget(target) is what I was looking for. _lt_img alt_eq__qt__dd_lol_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ title_eq__qt__dd_lol_dd__qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]