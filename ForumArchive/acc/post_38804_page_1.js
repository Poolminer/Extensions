[{"Owner":"royibernthal","Date":"2018-07-12T12:46:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ I_t_m trying to export a model that has 2 animated meshes. After export_co_ the animation applies to only one of them.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI recall you said that having multiple animated meshes will require extra work. How should I approach this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-07-12T13:54:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAssuming your mesh object name is _lt_strong_gt_Object_lt_/strong_gt__co_ then animation name should be _lt_strong_gt_Object_lt_/strong_gt_-Action. See how you get on with that.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2018-07-12T17:36:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNot sure what you meant. Anyway_co_ all I needed to do was play all the loaded skeletons simultaneously.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Alenvei","Date":"2018-07-12T21:38:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAre you tried to call animation by name... like this ?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_./_qt__co_ _qt_myAvatar.babylon_qt__co_ this.scene_co_function (newMeshes_co_ particleSystems_co_ skeletons) {\nvar avatar _eq_ newMeshes[0]_sm_\navatar.skeleton.beginAnimation(_qt_Idle_qt__co_ true_co_ 1)_sm_\n//avatar.skeleton.beginAnimation(_qt_Walk_qt__co_ true_co_ 1)_sm_\n//avatar.skeleton.beginAnimation(_qt_Run_qt__co_ true_co_ 1)_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2018-07-13T00:22:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat_t_s not the issue_co_ read above - solved. Thanks for trying to help though.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]