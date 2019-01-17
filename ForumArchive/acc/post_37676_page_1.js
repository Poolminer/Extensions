[{"Owner":"CaptainJustin","Date":"2018-05-15T16:57:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGood day\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m working on a small multiplayer game and I_t_ve bumped into a problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_d like to ask the community if you have any ideas about moving a mesh along a well understood line (xyz --&gt_sm_ xyz) at a particular speed?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt the moment I_t_m using a _t_hacky solution_t_. \n_lt_/p_gt_\n\n_lt_pre style_eq__qt_background-color_dd_rgb(43_co_43_co_43)_sm_font-size_dd_9pt_sm__qt__gt_\n_lt_span style_eq__qt_color_dd_rgb(152_co_118_co_170)_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(255_co_198_co_109)_sm__qt__gt_setInterval_lt_/span_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre style_eq__qt_background-color_dd_#2b2b2b_sm_color_dd_#a9b7c6_sm_font-size_dd_9pt_sm__qt__gt_\nmesh._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt_position_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt_x _lt_/span_gt_+_eq_ Math._lt_span style_eq__qt_color_dd_#ffc66d_sm__qt__gt_sin_lt_/span_gt_(_lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt_this_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt_sBullet_lt_/span_gt_.point.rotation) * _lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt_this_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt_sBullet_lt_/span_gt_.speed * _lt_span style_eq__qt_color_dd_#6897bb_sm__qt__gt_3\n_lt_/span_gt_mesh._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt_position_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt_z _lt_/span_gt_+_eq_ Math._lt_span style_eq__qt_color_dd_#ffc66d_sm__qt__gt_cos_lt_/span_gt_(_lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt_this_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt_sBullet_lt_/span_gt_.point.rotation) * _lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt_this_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt_sBullet_lt_/span_gt_.speed * _lt_span style_eq__qt_color_dd_#6897bb_sm__qt__gt_3\n_lt_/span_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI_t_ve noticed some lag when there are many bullets flying around.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt occurred to me_co_ that with the path and speed being static at the point of the bullet being instantiated I might be able to _qt_set it up and let it go_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMay I ask if anyone has come across a super efficient way to hand this over to Babylon or a lower level instead of using a timer and increment it every couple ms in JS?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-05-15T17:15:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis may be able to help you _lt_span_gt__dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#92EYG%2321_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#92EYG#21_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"CaptainJustin","Date":"2018-05-15T17:24:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you @Dad72. This looks fantastic! \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]