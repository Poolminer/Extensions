[{"Owner":"richardsmd","Date":"2016-12-12T19:42:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m trying to build a sort of _qt_tunnel explorer_qt_ to show points of interest within a tunnel modeled after something in the real world. Within the tunnel are points of interest.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s a mockup with a tunnel and some points of interest- _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1VFLZF%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1VFLZF#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy default I expect users to free-roam with a FreeCamera_co_ but I_t_d also like to be able to _qt_jump to_qt_ any given defect by selecting it via UI not shown in the playground. I_t_m not sure how to do that though... my best theory is this_dd_\n_lt_/p_gt_\n\n_lt_ol_gt__lt_li_gt_\n\t\tAdd an invisible object in the approximate center-line of the tunnel (CL)\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tUpon selecting a point of interest to jump to_co_ locate the point on CL closest to the centeroid (_lt_strong_gt_mesh.getAbsolutePosition()_lt_/strong_gt_) of the point of interest and set the camera_t_s position to that point\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tRotate the camera to look at the point of interest\n\t_lt_/li_gt_\n_lt_/ol_gt__lt_p_gt_\n\tCan anyone help me implement step 2 (_lt_strong_gt_jumpNearestOnCenterline_lt_/strong_gt_ in playground)? Note that my actual tunnel not straight and constructed via a point cloud_co_ so there is no good/simple way to determine the center of the tunnel that I_t_m aware of\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve never worked with cameras or automatic camera positioning systems before so my solution is inspired by GIS. If you have a more straight-forward idea I_t_m all ears.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for your time_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMike\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-12-12T21:19:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and welcome!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can use camera.setTarget(box.position) to rotate your camera towards a POI\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn you case_co_ you can align the tunnel on z axis. So then clicking on a red POI will give you the POI.getAbsolutePosition(). Using this position you can keep the z and move your camera.position to (0_co_ 0_co_ z) and then use camera.setTarget\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"richardsmd","Date":"2016-12-12T21:47:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJust realized I had a typo - PG updated at _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1VFLZF%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1VFLZF#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ I_t_m confused by both your suggestions\n_lt_/p_gt_\n\n_lt_ol_gt__lt_li_gt_\n\t\tHow can I align on the Z axis? As stated above_co_ my tunnel is not straight. I_t_m somewhat familiar with rotations but unclear as to how I would determine the orientation of the localized part of the tunnel a point of interest appears in. Without that_co_ I couldn_t_t rotate correctly\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tcamera.setTarget doesn_t_t alter the X axis rotation correctly. See this PG update - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1VFLZF%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1VFLZF#7_lt_/a_gt_ (method is updated to use setTarget_sm_ runs automatically after 2 seconds. Drag/pan down to see the box). Am I using the method incorrectly?\n\t_lt_/li_gt_\n_lt_/ol_gt__lt_p_gt_\n\tThank you again_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMike\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-12T23:36:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Animations_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Animations_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1VFLZF%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1VFLZF#10_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#VNE2Z%2323_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#VNE2Z#23_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]