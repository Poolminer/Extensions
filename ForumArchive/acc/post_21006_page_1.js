[{"Owner":"Anonymous","Date":"2016-03-07T08:51:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tvar b1_eq_new BABYLON.Mesh.CreateBox(_qt_box1_qt__co_3.0_co_scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar b11_eq_new BABYLON.StandardMaterial(_qt_b11_qt__co_scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tb11.diffuseColor_eq_new BABYLON.Color3(1_co_1_co_0)_sm__lt_br_gt_\n\tb1.material_eq_b11_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_i have created one box and applied material property and i have also subtracted another box from b1 box using babylon.csg like_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar b2_eq_new BABYLON.Mesh.CreateBox(_qt_box2_qt__co_1.0_co_scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar b1CSG_eq_BABYLON.CSG.FromMesh(b1)_sm__lt_br_gt_\n\t    var b2CSG_eq_BABYLON.CSG.FromMesh(b2)_sm__lt_br_gt_\n\t    _lt_br_gt_\n\t    subCSG_eq_b1CSG.subtract(b2CSG)_sm__lt_br_gt_\n\t    _lt_br_gt_\n\t    b1.dispose()_sm__lt_br_gt_\n\t    b2.dispose()_sm__lt_br_gt_\n\t    _lt_br_gt_\n\t    subCSG.toMesh(_qt_csg_qt__co_new BABYLON.StandardMaterial(_qt_mat_qt__co_scene)_co_scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter this_co_ hole is created inside box1 but the material property i have given is not applied to the box1.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow can i apply this material property to box1 after dispose method?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks...!!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-03-07T15:17:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Anonymous (who is that masked stranger) and welcome to the forum. Do you know about the _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/_qt_ rel_eq__qt_external nofollow_qt__gt_playground_lt_/a_gt_ ? Putting your code into the playground is the best way to get help from the many responsive people on this forum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNOTE do not use new when creating a box mesh. In your line  subCSG.toMesh(_qt_csg_qt__co_new BABYLON.StandardMaterial(_qt_mat_qt__co_scene)_co_scene)_sm_  the new standard material you created has not been given any properties use a material you have previously set see PG below.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a working playground _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#GSRTH%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#GSRTH#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]