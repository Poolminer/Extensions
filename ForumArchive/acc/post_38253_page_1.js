[{"Owner":"clementlandrin","Date":"2018-06-15T09:58:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone ! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m new in Babylon and I_t_m trying to do an interactive water surface. What I want is not the waterMaterial provided by Babylon because this one only causes periodic waves and I want to create a wave impact on a flat water surface.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI used a ground and UpdateVerticesData to create the wave (you can find a demo of my current project _lt_a href_eq__qt_https_dd_//clementlandrin.github.io/_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy problem is that water is supposed to reflect and do refraction_co_ and i think Babylon_t_s refraction and reflection can_t_t be apply to a non flat surface (I found _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#22KZUW%2315_qt_ rel_eq__qt_external nofollow_qt__gt_this playground_lt_/a_gt_ showing that refraction can be done by a refraction plane apply to a refraction texture).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan I apply mirrors (for reflection) and refraction textures (for refraction) on the triangles (which are flat) componing my ground and how ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs this way to do ok for a realtime rendering ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for any answers !\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-06-15T10:53:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou need a shader to dissipate over surfaces . and caustics would carry allot with a good amount of bubbles. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]