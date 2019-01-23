[{"Owner":"peraxel7","Date":"2016-08-14T18:32:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ new to Babylon.js and the forum. I want to use the renderOutline property on the rabbit.babylon model from _lt_a href_eq__qt_http_dd_//www.babylonjs.com/Demos/BONES/_qt_ rel_eq__qt_external nofollow_qt__gt_BONES demo_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_models/_qt__co_ _qt_rabbit.babylon_qt__co_ scene_co_ function (newMeshes_co_ particleSystems_co_ skeletons) {\n  var mdl_Rabbit _eq_ newMeshes[0]_sm_\n  mdl_Rabbit.position _eq_ new BABYLON.Vector3(0_co_ 0_co_ 40)_sm_\n  mdl_Rabbit.renderOutline _eq_ true_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIt changes the position of the rabbit but it does not render outline. Also for some reason_co_ I could use newMeshes[12] and the rabbit would still display correctly. mdl_Rabbit.showBoundingBox doesn_t_t work either.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOverall it_t_s obvious I don_t_t understand how the ImportMesh works. So_co_ what am I missing and how do I get renderOutline to work?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-15T16:15:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello you can turn debugLayer on to check how many meshes where imported_co_ what_t_s their name and where they are _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tjust run scene.debugLayer.show()\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-08-15T16:55:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23170-peraxel7/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23170_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23170-peraxel7/_qt_ rel_eq__qt__qt__gt_@peraxel7_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tit might already be working_co_ but very hard to see.\n_lt_/p_gt_\n\n_lt_p_gt_\n\ttry adding outlineWidth and outlineColor to make it more visible_co_ see example below of skull PG demo.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#18ZFZ9_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#18ZFZ9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_Update_sm__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just tried doing it on the rabbit_co_ and it doesn_t_t work out of the box because the rabbit is made out of several meshes_co_ in which case you need to _qt_apply_qt_ the outline on each mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsee_sm_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#18ZFZ9%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#18ZFZ9#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"peraxel7","Date":"2016-08-15T19:32:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ got it working now. I was actually surprised that debugLayer could show the bounding box whereas I had failed. Thanks for the comments. Iterating all the meshes to outline all of them will probably come into use one of these days at well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTurns out I needed to set newMeshes[0] to newMeshes[1].\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt least I got to spend a few hours reading the documentation _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Onwards to the next user error!_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]