[{"Owner":"Art Vandelay","Date":"2017-08-04T15:11:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have an obj file of an object composed of several meshes. When I load this file using the object file loader and try to drag it (as in the drag and drop tutorial in the playground) only one of the meshes is selected. What is the correct way to make sure the object is selected?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-04T22:22:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thello\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhat about creating a dummy parent for all meshes and manipulating  it?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Art Vandelay","Date":"2017-08-05T07:50:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks for the reply. Just to clarify_co_ is there a special way to do this in babylonjs?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2017-08-05T09:14:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tlet parent _eq_ new BABYLON.Mesh(_t_parent_t__co_ scene)_sm__lt_br /_gt_\n\tobject1.parent _eq_ parent_sm__lt_br /_gt_\n\tobject2.parent _eq_ parent_sm__lt_br /_gt__lt_br /_gt_\n\tparent.position.x _eq_ 2_sm_ // Object1 and object2 will have their x +_eq_2\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Art Vandelay","Date":"2017-08-05T09:20:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]