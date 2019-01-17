[{"Owner":"TheTrope","Date":"2016-09-15T21:52:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m starting a VR project (Cardboard)_co_ and i_t_m trying different things to choose the bests options Babylon can offer_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen i compare VRDeviceOrientation Camera and WebVR camera (barrel activated)_co_ there is a huge performance gap. 15 fps with the first_co_ and 60 fps with the second one.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt look like the barrel option lower performances a lot on VRDeviceOrientationFreeCamera\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEven if VRDeviceOrientation Camera has a better quality_co_ is there a way to get better performances? I tried things like engine.setHardwareScalingLevel_co_ but i can_t_t get a better performance/quality ratio than WebVR Camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere an example i found on this forum _dd_ _lt_a href_eq__qt_http_dd_//plyojump.com/projects/webvr-babylon-orientation-webvr/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//plyojump.com/projects/webvr-babylon-orientation-webvr/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is one of my tests_dd_ _lt_a href_eq__qt_http_dd_//ns3301844.ip-5-135-158.eu/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//ns3301844.ip-5-135-158.eu/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks ! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-09-16T17:59:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCan you reproduce this difference in the Playground? It should not be so different (45 fps is A LOT)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-09-19T15:05:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJust a quick answer - VRDeviceOrientation has the option to enable a shader for distortion compensation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is a rather heavy shader. On mobiles it will drop your FPS_co_ yes. I am not sure in what resolution and with what device you are testing (Device orientation is mainly for mobiles_co_ whereas WebVR for Desktops with VR devices connected).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo if you are checking that on a desktop with a not-so-strong GPU but a descent resolution_co_ this is rather expected (thou I also think a 45 FPS difference is rather large). Ty disabling the camera distortion (the boolean in the orientation camera constructor) and see if this is what actually influencing your scene.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TheTrope","Date":"2016-09-21T14:56:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey thanks!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using it on mobile\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith no barrel ~60fps _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#XQY4I%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#XQY4I#10_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith barrel ~15-20fps_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#XQY4I%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#XQY4I#11_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe gap is huge !\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]