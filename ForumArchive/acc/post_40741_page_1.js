[{"Owner":"JZ7878","Date":"2018-10-19T08:31:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to add a hole one a mesh which created via CreateRibbon function (the mesh itself is a bit complext_co_ but I simplify in the demo).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFollowing the demo _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#T6NP3F%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#T6NP3F#0_lt_/a_gt_ I create a demo_co_ links is _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#J4H6RF_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#J4H6RF_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut seems it will failed to do the subtract operation on the mesh created via CreateRibbon_co_ any one can help me on it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I want to add a hole on this type of mesh_co_ which is the better way I can have a try ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advace.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-10-19T16:10:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32801-jz7878/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32801_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32801-jz7878/_qt_ rel_eq__qt__qt__gt_@JZ7878_lt_/a_gt_ and welcome to the forum from me. The issue is the use of double sides for the ribbons. To ensure the normal directions for the sides are correct (ie point away from solid) to produce the _t_solid looking_t_ mesh you need to swap the order of some of your arrays. I have done this by using the reverse function but you could change the appropriate arrays by hand. The _t_direction_t_ of the ribbon will also affect how CSG works. So here is a cube made up of single sided ribbons in correct direction\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#J4H6RF%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#J4H6RF#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can also remove the backface culling lines.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI stuck to using a standard box as it was easier to experiment with just one _t_ribbon cube_t_.  You can try the same approach with a _t_ribbon hole maker_t_ making sure normals will be correct.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JZ7878","Date":"2018-10-20T00:49:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\twow_co_ thanks very much_co_  that_t_s realy what I want_co_ you make me better understand it_co_   and I will try it right now.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]