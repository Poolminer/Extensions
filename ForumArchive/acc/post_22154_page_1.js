[{"Owner":"Light","Date":"2016-04-25T17:40:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGood day.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m working in small proyect using babylon.js_co_ it_t_s so great_co_ but im having some troubles. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) How do i detect if im looking directly to an object? I try to search for options and found on playground a solution to make a line from camera and detect a collition with line and object. But its not the best solution can you help me with this? And not working well sometimes_co_ because of VR camera distortion. And line have alpha at 1 but i still can see it.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_lines _eq_ BABYLON.Mesh.CreateLines(_qt_lineMesh_qt__co_ [\n            new BABYLON.Vector3(0_co_ 0_co_ 0)_co_\n            new BABYLON.Vector3(0_co_ 0_co_ 3000)\n            ]_co_ scene)_sm_\n            lines.material.alpha _eq_ 1_sm_\n            lines.parent _eq_ camera_sm_\n\nsphere _eq_ BABYLON.Mesh.CreateSphere(_qt_sphere1_qt__co_ 16_co_ 100_co_ scene)_sm_\nsphere.position_eq_new BABYLON.Vector3(300_co_-400_co_-500)_sm_\n\nif(lines.intersectsMesh(sphere_co_ true)){\nconsole.log(_qt_you found me_qt_)_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t2) I have an object flying slowly around me sometimes when it on top of me or below me in Y_eq_0_co_ it disappears or start to flashing if im looking at it until its not around Y_eq_0.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3) I_t_m using VRDeviceOrientationFreeCamera if I have distortion at 0 it_t_s OK but if I change it_co_ it_t_s bacame too laggie. Is there any solution? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for all possible help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry for my bad English. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-04-26T12:52:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Light_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou could use the scene.pickWithRay function for that. It fires the predefined ray (in your case a ray in the camera_t_s direction) and checks if it collides against the meshes define din the predicate. It returns  a PickingInfo object that contains all the info you need about the collision point.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can see how it works in this cool example (that is not made by me! I just found it) - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1BAPRM%2368_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1BAPRM#68_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Light","Date":"2016-04-26T14:27:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for response. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will try to implement this in my project.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStill have no idea what to do with the flickering sometimes_co_ not sure why it_t_s happening. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]