[{"Owner":"Aswin Shrestha","Date":"2014-10-08T12:41:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I wanted to add physics to the emitted particles for fluid simulation but I don_t_t think Babylonjs has that kind of capability as of now. Is there any workaround for this?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Basically_co_ I want to simulate a waterfall_co_ and the particles emitted would strike the stationary pond/water. I figured_co_ using the meshes for this approach would hamper the performance too much. So_co_ manipulating the vertex array for this might be a better option I think. How do I simulate this effect?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-10-08T15:22:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can hook the particles system to update the vertex buffer before rendering ._lt_/p_gt__lt_p_gt_You can check the _lt_strong_gt_update _lt_/strong_gt_function of the particleSystems and replace it with yours_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Aswin Shrestha","Date":"2014-10-08T17:34:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ahh okay. Thanks._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]