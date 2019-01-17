[{"Owner":"syue87","Date":"2018-04-23T19:55:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m trying to achieve the following effect with babylon.js in 3d for a visualizer for 3d printing. I need to be able to gradually change the color and the size(or shape) of the extrusion along a single extruded path. It is possible?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_17983_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_04/zKWKaRJjybNEDzGS9kGa9C8JcTxaRRqIUZwz3-iuHyo.jpg.f082126a71b96ded757e096640543782.jpg_qt_ alt_eq__qt_zKWKaRJjybNEDzGS9kGa9C8JcTxaRRqIUZwz3-iuHyo.jpg.f082126a71b96ded757e096640543782.jpg_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-04-24T02:09:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTry looking at tube meshes _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#Z1SIC%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#Z1SIC#1_lt_/a_gt_ . See _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1A4DON%2319_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1A4DON#19_lt_/a_gt_ to see how to smoothly change size using the radiusFunction parameter. As for changing color you could try to use the gradient Material like in the previous playground but it_t_s not properly aligned to the tube so it might be better to manually create your own gradient textures to map properly to the tubes shape.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]