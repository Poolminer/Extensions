[{"Owner":"Xipherx","Date":"2017-09-13T12:49:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi All_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m updating from Babylon 2.4 my project that simulate a 360 static scene with a WebVRFreeCamera and a cube with images as Textures on each side.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn 2.4 I used _qt_trackPosition_dd_ false_qt_ in WebVROptions to not consider HTCVive position but only rotation_co_ but in Babylon 3.0 doesn_t_t work anymore.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan anybody help me?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-13T17:13:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tping _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-09-13T19:27:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23668-xipherx/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23668_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23668-xipherx/_qt_ rel_eq__qt__qt__gt_@Xipherx_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat_t_s a wonderful question_co_ that I guess many will have when they start working with WebVR.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDue to the nature of WebVR_co_ the entire transformation of the headset is submitted to the scene. It is actually very important to keep the entire transformation tracking_co_ as it prevents the motion sickness that is sadly a part of VR experiences (when implemented wrong).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSince we moved to WebVR 1.1_co_ we are obligated to use the transformation provided by the headset_co_ as we are using the view and projection matrix of the VR device itself. We have no control over the position anymore_co_ and therefore trackPoisition doesn_t_t work anymore. We do however update the camera_t_s position using the variable devicePosition_co_ which is a Vector3.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut worry not_co_ as there are workarounds. You will have to implement them yourself_co_ but it shouldn_t_t be a big problem. The best two ways (that I can think of) use the parent system of Babylon_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) set the camera_t_s parent to be an invisible mesh and set its position to be the negative of camera.devicePosition\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) Set the entire world in a container_co_ and move this container together with the camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA very quick demo for 1 can be found here - _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#5MV04%2338_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#5MV04#38_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is not too stable and needs to be improved_co_ but this would be the basic starting point for you.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Xipherx","Date":"2017-09-14T07:47:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI see_co_ thank you very much!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]