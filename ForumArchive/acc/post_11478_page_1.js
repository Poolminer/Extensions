[{"Owner":"iiceman","Date":"2015-01-04T18:01:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tjust a quick (maybe weird) question_dd_ I want an invisible mesh to cast a shadow and cant get it to work. As soon as I set visibility on the mesh or alpha on the material to something else than 1_co_ I don_t_t get a shadow anymore. Am I doing something wrong or is this maybe intended like that? What could be a work around to get my shadow without the user seeing the mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlayground example here_dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#I2H3M_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#I2H3M_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-01-04T18:30:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCannot answer_co_ but have _qt_improved_qt_ you example_dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#I2H3M%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#I2H3M#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTorus2 was never added to the render list.  Also turned problem lines into comments.  Un-comment to see problem\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-01-04T18:42:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre class_eq__qt_ipsCode prettyprint prettyprinted_qt__gt_\n_lt_span class_eq__qt_pln_qt__gt_shadowGenerator_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_._lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_setTransparencyShadow_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_(_lt_/span_gt__lt_span class_eq__qt_kwd_qt__gt_true_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_)_sm__lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ _lt_/span_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tseems to solve the problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#I2H3M%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#I2H3M#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-01-04T22:15:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you guys! Again a quick and helpful answer_co_ very nice!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_@JCPalmer_co_ I was in a hurry and just threw that playground together after it didn_t_t work in my actual project_co_ thanks for fixing things up! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]