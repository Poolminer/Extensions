[{"Owner":"Nikos123","Date":"2015-12-27T22:33:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_How can I achieve an ease like so_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//easings.net/fr#easeInOutSine_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//easings.net/fr#easeInOutSine_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This is the most natural ease for acceleration/deacceleration_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nikos123","Date":"2015-12-27T22:50:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_My best approximation_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_var _lt_/span_gt_bezierEase _eq_ _lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_new _lt_/span_gt_BABYLON.BezierCurveEase(_lt_span style_eq__qt_color_dd_#6897bb_sm__qt__gt_0.445_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#6897bb_sm__qt__gt_0.05_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#6897bb_sm__qt__gt_0.55_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#6897bb_sm__qt__gt_0.95_lt_/span_gt_)_lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__sm__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt_Is this correct?_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nikos123","Date":"2015-12-27T22:59:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Actually this isn_t_t what I want now_co_ what I need is a ease to top speed then an ease down to 0 speed. Investigating._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-12-28T02:22:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Again!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNikos... I have a funny feeling that you don_t_t want ease-in or ease-out at all.  I think you want _lt_u_gt_linear_lt_/u_gt_ acceleration and deceleration.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1HZKPM_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1HZKPM_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\thold A or D keys... check out how that acts.  Is that anything like the _qt_feel_qt_ you are looking for?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDown in the renderLoop_co_ I am constantly rotating _t_rotSpeed_t_ amount.  _lt_em_gt_RotSpeed_lt_/em_gt_ starts at 0_co_ but the longer you hold the A or D keys... the faster or slower it goes (because rotSpeed is increasing/decreasing its rotational increments). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tUp at the top of the playground... there you can see the A/D keys... adding or subtracting .001 rotSpeed per keypress.  This gives you a linear easing to full speed_co_ and a linear easing to stop.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe thing to remember is that the code in registerBeforeRender is running constantly. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow_t_s it feel to you?  Is this close to what you are looking-for... as far as easing?  *shrug*\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]