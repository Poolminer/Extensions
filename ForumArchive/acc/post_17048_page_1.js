[{"Owner":"paulsouthport","Date":"2015-09-09T19:44:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Evening all_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m playing with Google Cardboard using the VRDeviceOrientationFreeCamera_lt_/p_gt__lt_p_gt_I_t_m wondering if anyone knows the best way to create a move function so that the camera is always moving forward in the direction of the camera (the camera rotation is from the head movement)?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_thanks_lt_/p_gt__lt_p_gt_Paul_lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-09-09T20:49:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Paul_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_to do that you will have to calculate the camera_t_s direction (using its target and current position) and update its position. I created a very simple playground that shows how (I guess there are other ways_co_ but i find this the easiest to understand)._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WB2TN_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WB2TN_lt_/a_gt__lt_/p_gt__lt_p_gt_You can see I scaled the direction - this would be the _qt_speed_qt_ of the camera._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"paulsouthport","Date":"2015-09-09T21:27:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Excellent_co_ thanks Raanan_co_ that works nicely._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]