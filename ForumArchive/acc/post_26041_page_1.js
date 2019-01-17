[{"Owner":"Richard C","Date":"2016-10-26T19:21:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHelp again please.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to animate an object in two vector x and y (usually to move an obj diagonally across the canvas).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar animateSub_eq_ new BABYLON.Animation(_qt_tutoAnimation_qt__co_ _qt_position.x_qt__co_ 30_co_ BABYLON.Animation.ANIMATIONTYPE_FLOAT_co_ BABYLON.ANIMATIONLOOPMODE_CONSTANT)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow do I set the target property to both .x and .y simultaneously and how is the value represented in each key ie value_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRichard C\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-26T20:45:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi RC.  Change _qt_position.x_qt_ to _qt_position_qt_... and change _qt_ANIMATIONTYPE_FLOAT_qt_ to _qt_ANIMATIONTYPE_VECTOR3_qt_.  Now take a fresh look at the world of animation (and do some playground searches as needed).  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tActually_co_ the playground searcher couldn_t_t find _qt_ANIMATIONTYPE_VECTOR3_qt_ if it was lit in neon.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  Oh well. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOur playground search might be at the mercy of some admin folk at Azure.  Them Azure folks seem to have something against periods and underscores in their search terms.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAll in all_co_ here_t_s a PG _dd_  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#11ZVTO%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#11ZVTO#4_lt_/a_gt_   See line 33.  Party on. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]