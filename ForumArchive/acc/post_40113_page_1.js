[{"Owner":"devAxeon","Date":"2018-09-19T16:25:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m looking for a sight that is not following the scene_t_s geometry like the gaze tracker mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I tried to create a plane with a texture_co_ child of the VR camera_co_ that is at the center and in front of this camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s what I_t_ve tried_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#Q1VRX3%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#Q1VRX3#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut it isn_t_t always in the center_co_ or doesn_t_t work without a headset connected (like for google cardboard).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFurthermore_co_ It would be nice if we can have the good scene.activeCamera on the _t_onEnteringVR_t_ event \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you so much for your help !!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-09-19T17:51:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAdding _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_ our own VR guru _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-09-19T20:01:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28559-devaxeon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28559_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28559-devaxeon/_qt_ rel_eq__qt__qt__gt_@devAxeon_lt_/a_gt_ Valid concerns.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is an odd quirk with the webVR camera that it_t_s position is not actually your head_co_ instead it is stationary and it_t_s sub cameras are the ones that move (left/right eye cameras). See _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/webvr_helper#accessing-vr-device-position-and-rotation_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/webvr_helper#accessing-vr-device-position-and-rotation_lt_/a_gt_ _co_ I would update the position of your plane on every frame like done in the example there. This is definitely not ideal as you will have to have separate logic for a vr camera vs non vr camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe way _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_onEnteringVR looks to be designed is that it fires right before VR is entered. This also seems odd to me_co_ I can add an onEnteredVR event if desired._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith the introduction of the webXR apis/phasing out of webVR coming to browsers we are thinking of adding new webXR support (Maybe as webXR camera) to babylon that addresses many of the existing concerns raised about the webVR apis. _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/3899_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/3899_lt_/a_gt_ . \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"devAxeon","Date":"2018-09-20T13:00:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_ Thanks for those explanations !_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Here_t_s what I tried next_co_ but I_t_m missing something_co_ dunno what... _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#Q1VRX3%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#Q1VRX3#3_lt_/a_gt__lt_/span_gt__lt_br /_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_onEnteredVR_lt_/span_gt_ event could help in some cases yep !!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBtw_co_ good _qt_luck_qt_ for the the webXR implementation_co_ can_t_t wait to test it !!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-09-20T20:49:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTry this _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#Q1VRX3%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#Q1VRX3#7_lt_/a_gt_. It looked like your issue was that sight was still a child of the camera. I undid that and positioned it at cameraPos + cameraForward*distance and it worked.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"devAxeon","Date":"2018-09-21T08:36:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGreat !! Thank you very much _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_ !!_lt_br /_gt_\n\tJust one last question_dd_ do you have any idea why this doesn_t_t work without a headset (eg_dd_ chrome)?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to make it work with google cardbords_co_ but I don_t_t know why it doesn_t_t have the same behavior...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-09-21T18:32:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGive this a shot _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#Q1VRX3%2310_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#Q1VRX3#10_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso note that using babylon objects ._variables are private which means they should not be used in production code and could be changed in the next release.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"devAxeon","Date":"2018-09-24T08:13:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat works perfectly !! Thank you so much for your help _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt__lt_/span_gt_ !!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]