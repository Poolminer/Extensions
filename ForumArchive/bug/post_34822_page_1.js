[{"Owner":"ASSa","Date":"2018-01-02T06:14:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m trying to draw an angle on XOY plane but it seems something is wrong. Here_t_s a sample to reproduce the issue_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#RQ5WYS_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#RQ5WYS_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI uses the following points to create the tube_co_ but the result is obviously not my expectation.\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ myPath _eq_ [_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_            _lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ BABYLON.Vector3(_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_co__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_            _lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ BABYLON.Vector3(_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_10_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_co__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_            _lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ BABYLON.Vector3(_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_10_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_    ]_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\tBut when I change the 3rd point from (0_co__lt_span style_eq__qt_color_dd_#e74c3c_sm__qt__gt_10_co_0_lt_/span_gt_) to (0_co__lt_span style_eq__qt_color_dd_#e74c3c_sm__qt__gt_0_co_10_lt_/span_gt_)_co_ i.e. to draw the angle on XOZ plane_co_ the graph looks ok.\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\tIn addition_co_ the angle also appears if changing the 3rd point from (_lt_span style_eq__qt_color_dd_#e74c3c_sm__qt__gt_0_lt_/span_gt__co_10_co_0) to (_lt_span style_eq__qt_color_dd_#e74c3c_sm__qt__gt_0.0001_lt_/span_gt__co_ 10_co_ 0)_co_ but the tube line tapers along x-axis.\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\tThanks\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-02T18:10:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPinging _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-01-02T20:21:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe internal path of the tube builds a Path3D object _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/how_to_use_path3d_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/how_to_use_path3d_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen built with not enough points and at some limits for the normal/binormal computations (like 90° angles) it can leads to some weird expected results. Just add more points to your path (more than only 3) and it should work.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]