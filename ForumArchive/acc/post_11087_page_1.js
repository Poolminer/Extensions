[{"Owner":"The Snow Irbix","Date":"2014-12-15T19:23:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello guys !_lt_/p_gt__lt_p_gt_I need again a little bit of help_co__lt_/p_gt__lt_p_gt_I love babylonJS and his community_co_ you are awesome guys !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Firstly_co_ I would like to use blacks particles_co_ but I don_t_t know how can I do this_co_ because it_t_s the transparent color._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Secondly_co_ I would like to know if it is possible to slow or speed up the time in the game_co_ to create a _qt_slow motion_qt_ effect._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Finally_co_ I try to create a physic destruction_co_ with a bullet and a wall _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#DBETC_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#DBETC_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The goal is to remove the physic link when the force is too strong._lt_/p_gt__lt_p_gt_To do this_co_ I thought run a fonction test collisions with all objects_co_ but is too long_co_ due to the big number of meshes that compose my scene._lt_/p_gt__lt_p_gt_So_co_ is it possible to call a callback function when the physic engine detect a collision ? If it is_co_ how ?_lt_/p_gt__lt_p_gt_And how can I remove a physic link between two meshes ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-12-15T19:49:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can create black particles by setting the alpha mode to standard_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_myparticleSystem.blendMode _eq_ BABYLON.ParticleSystem.BLENDMODE_STANDARD_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then you can change upadte speed for particles with myparticleSystem.updateSpeed_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Latest point is not supported so far but I_t_m opened to contributions _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"The Snow Irbix","Date":"2014-12-15T20:43:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you_co_ I understand now how use particle _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And for the second point_co_ I would like to slow every object in the scene_co_ even the camera_co_ all the world_co_ not just particles_co_ and without lost Frames. I don_t_t think it is possible but I hope ^^_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I will try to create my own function to remove physics links _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]