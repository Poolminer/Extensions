[{"Owner":"klaude","Date":"2017-09-18T14:26:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ guys.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m newbie on 3d programming.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to display sprite like GUI that has a function linkWithMesh. but it hasn_t_t.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn this example_co_  sprite_t_s position from a mesh is changing_co_ not fixed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#87HQN6_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#87HQN6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe mesh must have BILLBOARDMODE_ALL.\n_lt_/p_gt_\n\n_lt_p_gt_\n\thow to make sprite to track mesh_t_s position like GUI_t_s linkWithMesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-09-18T15:07:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHowdy! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWelcome to the forum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEven thou sprite looks 2d_co_ we are 3d in our core. You will need to update the position in all axes in order to place the sprite on top of the mesh. Here is an example how it can be done_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#87HQN6%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#87HQN6#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf dealing with different types of nodes_co_ ou could also use the parenting system (_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/position_co__rotation_co__scaling_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/position_co__rotation_co__scaling_lt_/a_gt_ _co_ search for parenting).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"klaude","Date":"2017-09-19T05:15:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ RaananW.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tforgot to state linkOffsetX_co_ linkOffsetY of GUI.Control.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsing parenting function_co_ It works what i want. but only when it comes to mesh. (yellow one)\n_lt_/p_gt_\n\n_lt_p_gt_\n\thow to make sprite like plane2 in the next example.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#87HQN6%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#87HQN6#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]