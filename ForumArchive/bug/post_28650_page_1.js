[{"Owner":"shen","Date":"2017-02-23T13:30:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is the demo _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1B1PUZ%2322_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1B1PUZ#22_lt_/a_gt__co_ press any key to move the mesh with animation and BoneLookController will stop working. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt only happens to the first Bone Controller. BoneIKController also has this problem_co_ if it_t_s the first created. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-02-23T17:09:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for reporting this bug shen.  There seems to be a timing issue when using scene.registerBeforeRender and that type of animation.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo fix this issue_co_ DeltaKosh just added an onBeforeComputeObservable to the Skeleton class that you can use instead_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1B1PUZ%2326_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1B1PUZ#26_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou might need to ctrl-f5 to update the playground with the new code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"shen","Date":"2017-02-23T20:06:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the quick fix. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI keep playing with it and find that If _qt_sphere.parent _eq_ mesh_qt_ was set_co_ _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_Bone Controller just use the original target position when moving with the animation. _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1B1PUZ%2329_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1B1PUZ#29_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDid I forget updating the target position somewhere? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-02-25T23:08:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRight now_co_ the BoneLookController doesn_t_t support using meshes as targets.  So you will need to do something like this when targeting a parented mesh_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1B1PUZ%2334_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1B1PUZ#34_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_d like to point out that your initial PG is now working.  There was an issue in Bone.getPosition() that caused the bug.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"shen","Date":"2017-02-27T12:16:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks adam! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI broke it again. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1B1PUZ%2331_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1B1PUZ#31_lt_/a_gt_ When the bone and the target meets at the same position_co_ the head is broken.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1B1PUZ%2332_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1B1PUZ#32_lt_/a_gt_ The head turned before the target move to the direction and the animation speed is not right. If line 42 was commented out_co_ the animation speed is right_co_ but Bone Controller is not working. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-02-27T14:07:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor now_co_ try to avoid placing the target on the head bone.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou should probably set the target position like this when you need to set the absolute position_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1B1PUZ%2333_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1B1PUZ#33_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthat doesn_t_t fix the issue_co_ but it might fix some other issue.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]