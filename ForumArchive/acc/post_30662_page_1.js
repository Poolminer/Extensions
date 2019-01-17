[{"Owner":"Chrundle","Date":"2017-05-25T20:41:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFirst post! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI want to animate an object_t_s position based on input from the user_t_s mouse wheel. The mouse wheel can fire events many times per second. I don_t_t want to destroy the old animation_co_ and create a new one_co_ for each of these many events. I_t_d prefer to _qt_update_qt_ the keyframes of the existing animation instead (i.e. continue the animation from its current frame and position_co_ to a new endPosition at a new keyframe). I_t_d also like to _qt_restart_qt_ the animation again from its current value_co_ if it happens to reach the final keyframe and stop_co_ then the user scrolls again later. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat is the preferred way to _qt_update_qt_ an animation in Babylon.js? Can I just use animation.setKeys() again to update the keyframes? Also_co_ if the animation completes_co_ then more scroll events are fired later_dd_ how can I _qt_restart_qt_ the animation from its previous end position_co_ and trigger it to run again to a new end position? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you so much in advance for your help! \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nesh108","Date":"2017-05-26T06:17:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHeya _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/27102-chrundle/?do_eq_hovercard_qt_ data-mentionid_eq__qt_27102_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/27102-chrundle/_qt_ rel_eq__qt__qt__gt_@Chrundle_lt_/a_gt__co_ interesting project.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I am not aware of any _qt_pretty_qt_ solution so here is how I would do it_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Normal Animation_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.beginAnimation(myAnimatedMesh_co_ 0_co_ 120_co_ true_co_ 1)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSimple and sweet. This runs the animation from frame 0 to 120 and loops it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_b_gt_Manual Animation_dd__lt_/b_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let frameFrom _eq_ 0_sm_\nlet frameTo _eq_ 1_sm_\nlet lastFrame _eq_ 120_sm_\nlet frameAdvance _eq_ 1_sm_\nlet isRunning _eq_ false_sm_\n\nfunction executeFrame() {\n   if(!isRunning) {\n     isRunning _eq_ true_sm_\n     scene.beginAnimation(myManuallyAnimatedMesh_co_ frameFrom_co_ frameTo_co_ false_co_ 1_co_ function() {\n      if(frameTo &lt_sm_ lastFrame) {\n        frameFrom _eq_ frameTo_sm_\n        frameTo +_eq_ frameAdvance_sm_\n      } else {\n        frameFrom _eq_ 0_sm_\n        frameTo _eq_ 1_sm_\n      }\n      isRunning _eq_ false_sm_\n     })_sm_\n  }\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tWith this_co_ you can adjust how many frames each _qt_executeFrame_qt_ can play and loop at the end. I haven_t_t tested it but it shouldn_t_t be too far from the working version _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Chrundle","Date":"2017-05-30T21:09:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Nesh_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks so much for your help! Your solution definitely solves the issue of controlling the number of frames / looping of the animation. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ I_t_m still confused on how to update the keyframes of the animation WHILE it is running. (Ex. if the user scrolls the mouse wheel again while the first animation is still running.) Should I just use setKeys() again? Or retrieve the existing keys with getKeys()_co_ then update their values? Or is there a better way? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again for your help! \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]