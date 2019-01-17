[{"Owner":"joshcamas","Date":"2017-01-31T19:44:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHia guys!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn my current simple physics engine test (_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1BVXYE%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1BVXYE#6_lt_/a_gt_)_co_ I_t_m trying to grab the boundaries of meshes in a global way.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I_t_m just trying to get the bounding box_t_s coordinates.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried using minimum and maximum_co_ but that doesn_t_t seem to change depending on rotation of the mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tminimumWorld and maximumWorld works_co_ but not... the values are really strange_co_ and sometimes logs correctly and other times are identical to min and max.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I need to make an example playground I will _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-01-31T20:17:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tkind of hard to know what your pg is supposed to look like_co_ but saying you were having problems with min/maxWorlds_co_ I switched to extendSize_co_ which is amount extended past origin.  It is basically your halfSize.  After more clean up_co_ I get _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1BVXYE%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1BVXYE#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI that what it is supposed to look like?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2017-01-31T20:39:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHmmm problem is I_t_m trying to find the bounding box that reacts to rotations of meshes. See how the plane is rotated? Theres that wireframe mesh that_t_s supposed to visualize the bounding box I_t_m trying to get.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExtend size doesn_t_t seem to do this. I print the object_t_s extend size_t_s z_co_ and it prints 0 for the plane (incorrect) and 1 for the sphere (correct)_lt_br /_gt__lt_br /_gt_\n\tEDIT_dd_ HOLY CRAP IT WORKS! _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1BVXYE%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1BVXYE#12_lt_/a_gt_ _lt_br /_gt__lt_br /_gt_\n\tI was using minimum world bounds incorrectly_co_ turns out it works _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]