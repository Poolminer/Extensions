[{"Owner":"burbonvagin","Date":"2014-08-14T20:14:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m trying get mesh.movewithcollisions working_co_ and I_t_m not sure why the player sphere is partially intersecting the sphere and the plane. I have some physics in the scene_co_ but turning them off doesn_t_t change the result._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_html_dd_ _lt_a href_eq__qt_http_dd_//jesseolsson.github.io/bug_movewithcollisions/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jesseolsson.github.io/bug_movewithcollisions/_lt_/a_gt__lt_/p_gt__lt_p_gt_javascript_dd_ _lt_a href_eq__qt_http_dd_//jesseolsson.github.io/bug_movewithcollisions/index.js_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jesseolsson.github.io/bug_movewithcollisions/index.js_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-08-14T23:50:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_moveWithCollisions does not use the physics. You must use an elipsoide as with the freecamera and enable the collision on objects._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_see _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/09-Cameras-collisions_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/09-Cameras-collisions_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__eq_&gt_sm_ _lt_strong_gt_4 - Object vs. object collision_lt_/strong_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"burbonvagin","Date":"2014-08-15T01:38:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_thanks! how do you simulate gravity on a character like this? do you just move it down until he intersects a mesh_co_ or is there a better way?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-08-15T01:41:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_scene.gravity _eq_ new BABYLON.Vector3(0_co_ -0.15_co_ 0)_sm__lt_/pre_gt__lt_p_gt_If use you an elipsoid it receive the gravity_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"burbonvagin","Date":"2014-08-15T04:11:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_that sounds awesome_co_ but I can_t_t get it to work. _lt_a href_eq__qt_https_dd_//33fbbfe7efe608e329702f900dfc06fc804016bb.googledrive.com/host/0BzDfAgmFmMswMWdkenBneEFWRVE/mirror_for_junior2/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//33fbbfe7efe608e329702f900dfc06fc804016bb.googledrive.com/host/0BzDfAgmFmMswMWdkenBneEFWRVE/mirror_for_junior2/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-08-15T11:10:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The cube uses the gravity of the scene_co_ require_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_cube.applyGravity _eq_ true_sm__lt_/pre_gt__lt_p_gt_and that the cube does not fall through the ground_co_ require_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_plane.checkCollisions _eq_ true_sm__lt_/pre_gt__lt_p_gt_have you read this tutorial here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/09-Cameras-collisions_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/09-Cameras-collisions_lt_/a_gt__lt_/p_gt__lt_p_gt_Everything is written on the gravity and collisions_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"burbonvagin","Date":"2014-08-15T17:57:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_i can easily get it to work with the camera_co_ like the tutorial shows. I can_t_t get it to work with a mesh though. I think I added all the properties here_dd_ _lt_a href_eq__qt_https_dd_//33fbbfe7efe608e329702f900dfc06fc804016bb.googledrive.com/host/0BzDfAgmFmMswMWdkenBneEFWRVE/mirror_for_junior2/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//33fbbfe7efe608e329702f900dfc06fc804016bb.googledrive.com/host/0BzDfAgmFmMswMWdkenBneEFWRVE/mirror_for_junior2/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-08-15T19:01:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_In your Vector3_co_  you put 0 on the Y position_co_ which has the effect of leaving your object_t_s position or you put it on its height _qt_2_qt_ _eq_&gt_sm_ _lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_medium_sm__qt__gt_cube.position _eq_ new BABYLON.Vector3(0_co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_span style_eq__qt_font-family_dd_monospace_sm_font-size_dd_medium_sm__qt__gt__lt_strong_gt_2_lt_/strong_gt__lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_medium_sm__qt__gt__co_ 0)_lt_/span_gt__lt_/p_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_if you made _lt_strong_gt_-0.1_lt_/strong_gt__co_ it_t_ll work._lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cube.moveWithCollisions (new BABYLON.Vector3 (0_co_01_co_ _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_strong_gt_-0.1_lt_/strong_gt__lt_/span_gt__co_ 0))_sm__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"burbonvagin","Date":"2014-08-15T19:26:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_thanks_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"burbonvagin","Date":"2014-08-15T19:55:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_this is a replacement for gravity though_co_ right? because when i turn off gravity it still works._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-08-15T21:07:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think scene.gravity is for camera_co_ or it may be a bug?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-08-16T16:29:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_scene.gravity is only for camera collisions_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-08-16T17:17:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for the confirmation_co_ this is what seemed to me_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]