[{"Owner":"Hersir","Date":"2017-03-30T06:27:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ I have scene with 2 objects _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#BXII%2318_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#BXII#18_lt_/a_gt_ and ArcRotateCamera on it. I choose it as I need to rotate around object and it does it job good. Now I want to create animation that changes camera target to second (fly to it) and than orbit around it. Is it possible with ArcRotateCamera or I should chose another camera as the base?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThx\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-03-30T11:00:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJust tring _co_Hope this will helped.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#BXII%2319_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#BXII#19_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-03-31T05:11:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  Here_t_s my version_co_ with clickable actionManagers on both targets_co_ and an invisible box being used as a moveable camera target.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#BXII%2323_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#BXII#23_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can turn OFF the visibility in line 20_co_ or disable .showBoundingBox in line 21... to make the moving target completely invisible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe _t_5000_t_ in lines 40 and 50... indicate that it will take about 5 seconds for the interpolation animation to complete.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInterpolation is a calculation that divides a time and distance into _qt_steps_qt__co_ so the engine can _qt_travel_qt_ each step_co_ approximately one step per frame.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope this helps.  Party on!  Ping me here... if you want more info about this playground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_PS_dd__lt_/strong_gt_  There is a graphics _qt_glitch_qt_ that happens as the invisiTarget crosses to new target (in my FireFox).  It happens when you accidentally click on the wrong sphere_co_ and then click on the correct sphere... less than 5 seconds later.  The glitch is caused by the animation of the wrong click... finishing.  I_t_ll think about a workaround for that.  We could TURN OFF the actionManager on the _lt_u_gt_current_lt_/u_gt_ target mesh... so it isn_t_t clickable.  We would need to turn it ON again_co_ when the invisiTarget changes position to a new target.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2017-03-31T05:41:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ Thx good example_co_ as usual. _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-03-31T05:52:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThx_co_ cool.  _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25175-bangtao/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25175_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25175-bangtao/_qt_ rel_eq__qt__qt__gt_@BangTao_lt_/a_gt__t_s idea of simply sliding the camera target along an axis... is good_co_ too.  Unfortunately_co_ it needs your mesh to always stay in the same positions.  Or at least_co_ it probably needed to establish a _qt_Lerp_qt_ (an interpolation) between current camera target_co_ and wanted camera target_co_ and then travel that path... which in this case... would be a Vector3-type lerp.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith the actionManagers_co_ yeah_co_ it_t_s a little code-heavy_co_ but it allows you to put the mesh anywhere.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ know that you can turn-off the context menu that pops-open over canvas upon _lt_strong_gt_RIGHT_lt_/strong_gt_-click_co_ and then use the right click to move the camera target.  THEN... you can reserve your left click... for doing even MORE  fun things to the mesh (such as drag-position_co_ drag-rotate_co_ and drag-scale).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll .getAbsolutePosition() can be changed to simply .position_co_ too.  [_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#BXII%2324_qt_ rel_eq__qt_external nofollow_qt__gt_test_lt_/a_gt_]\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wonder if the _qt_pointy hand_qt_ comes-on when we use OnRightPickTrigger.  There_t_s also OnLongPressTrigger.  hmm.  Anyway_co_ all the triggers and actions are shown in the _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/how_to_use_actions_qt_ rel_eq__qt_external nofollow_qt__gt_actionManager docs_lt_/a_gt_.  Have fun.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2017-03-31T05:55:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYes thx you all for good community support _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ and examples\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-03-31T06:03:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI just trying_co_hahah_co_I learned a new thing _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-03-31T06:07:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I edited my previous post... and mentioned Lerp... which stands for linear interpolation.  I think it is a function on the vector3 class.  You would need to establish a lerp... between current camera target position_co_ and wanted new position... and then use your render loop to step-along that lerp path_co_ likely using addToRef and addInPlace to keep moving the camera target_co_ lerp-step after lerp-step.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe action manager_co_ and BJS Animation classes... makes it all a bit easier.  But... you were on the correct track.  Cool.  We also have Bezier funcs that can be applied to lerps/animation.  They can do curved paths between two points.  Also ease-ins/outs.  I don_t_t know if those things are available on ActionManager-made interpolations_co_ but they are definitely available on Animation-class interpolations. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAn actionManager can easily start/stop BJS animations_co_ and in more than one way.  In fact_co_ I think it actually uses the BJS Animation class... to do its animations.  Plus... actionManagers can do nearly ANYTHING... via their ExecuteCodeAction.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tActionManagers can be put on Scene_co_ too_co_ not just on mesh.  Weird_co_ huh?  They are amazing.  Deltakosh is a genius_co_ both coding-wise and idea-wise_co_ and he freely lets us use/steal his stuff.  Pretty good guy.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-03-31T13:02:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_he is.Intelligence and selfless.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll _lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_get_lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_to_lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_know_lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_better_lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_the_lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_ActionManagers  Later。_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]