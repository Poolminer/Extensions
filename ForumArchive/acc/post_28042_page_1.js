[{"Owner":"aWeirdo","Date":"2017-01-28T10:20:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#a9a9a9_sm__qt__gt_Hey all_co__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#a9a9a9_sm__qt__gt_I_t_m working on a fps correction multiplier for movement speed._lt_br /_gt__lt_br /_gt_\n\tit is working_co_ but when _qt_fake_qt_ fps drops happens it goes nuts _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt__lt_br /_gt_\n\tWith _qt_fake_qt_ fps drops_co_ i mean if you tab out of the game page_co_ wait a few seconds_co_ then tab back on the game page_co__lt_br /_gt_\n\tbecause javascript basicly pauses on non-active pages_co_ the fps drops to 0 very shortly and takes a few seconds to work it_t_s way back up to being stable_co_ which in turn increase the fpsCorrection value and suddenly you_t_re half way across the map _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#a9a9a9_sm__qt__gt_(note that even though the fps says 10 or something after tabbing out/in_co_ it still acts as if it was running 60 fps when moving without the fpsCorrection_co_ where if it was actually running at 10 fps it would move much slower_co_ thus i call it _qt_fake_qt_ fps drop)_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt__lt_span style_eq__qt_color_dd_#a9a9a9_sm__qt__gt_Is there any good ideas to avoid this drop?_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#a9a9a9_sm__qt__gt_cheers._lt_/span_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#696969_sm__qt__gt__lt_em_gt_Update_lt_/em_gt__sm_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#696969_sm__qt__gt_This is the (so far) final result._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\nvar updateSpeed _eq_ 1000 / engine.fpsRange_sm_ // Target 60 fps\nvar deltaCorrection _eq_ 1_sm_ // Speed correction\n\n\n\n// registerBeforeRender\n\nvar delta_time _eq_ engine.getDeltaTime()_sm_\n\n// Correction for _t_real_t_ low fps_co_ support down to 10 fps.\nif (delta_time &lt_sm_ updateSpeed * 6)\n  deltaCorrection _eq_ delta_time / updateSpeed_sm_\n\n// Handle script pauses by executing processUpdates * delta_time/updateSpeed to catch up with missing frames.\nif (delta_time &gt_sm__eq_ updateSpeed * 6) {\n  deltaCorrection _eq_ 1_sm_ //Reset correction to 1.\n  for (var delta _eq_ delta_time_sm_ delta &gt_sm_ 0_sm_ delta -_eq_ updateSpeed) processUpdates()_sm_\n\n\n} else { //Regular frame\n  processUpdates()_sm_\n}\n\n// processUpdates_co_ this is where the movement happens.\nvar speed _eq_ currentMesh.speed * deltaCorrection_sm_\n\n// etc etc.._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-01-28T12:01:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOne solution is measuring delta time between frames_co_ not FPS._lt_br /_gt_\n\tIf delta time is bigger than_co_ say 0.33s (that is 3FPS)_co_ you know it is not a regular frame but a pause._lt_br /_gt_\n\tThen you can skip moving or anything_co_ waiting for a regular frame._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-01-28T14:28:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tas BoG_co_ I would suggest multiplying your delta time with the movement speed_co_ so whenever you get _t_real_t_ FPS drops_co_ the speed will be consistent.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you run at 60FPS_co_ you_t_ll get a delta time of ~17ms(0.017)_co_ so if your delta time is more than some threshold_co_ you know that the tab is either paused_co_ or something causes the engine to hang_co_ so you shouldn_t_t move anyways.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-01-29T13:55:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7708_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/_qt_ rel_eq__qt__qt__gt_@BitOfGold_lt_/a_gt_ &amp_sm_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22713_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/_qt_ rel_eq__qt__qt__gt_@Raggar_lt_/a_gt_ _lt_br /_gt__lt_br /_gt_\n\tThanks for the suggestions _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#808080_sm__qt__gt__lt_em_gt_Update_sm__lt_/em_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt was a bit triggy to do_co_ it_t_s a multiplayer game so i can_t_t simply _qt_pause_qt_ the movement (thats what i was trying to avoid in the first place)_co_ i needed it to catch up_co_ and i wanted to avoid having the server interfere._lt_br /_gt__lt_br /_gt_\n\tI updated and marked the original post as solved.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]