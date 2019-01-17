[{"Owner":"Zahir Junejo","Date":"2016-09-06T19:32:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi fellow Babylonians_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried to import a mesh of a boat_co_ but i want to change the color of its material. I cannot change it for some reason.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\there is the part of code_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t                let boat _eq_ new BABYLON.AbstractMesh(_qt_boat_qt__co_ scene)_sm__lt_br /_gt_\n\t                boatMaterial _eq_ new BABYLON.StandardMaterial(_qt_boatMat_qt__co_ scene)_sm__lt_br /_gt_\n\t                boatMaterial.diffuseColor _eq_ new BABYLON.Color3(1.0_co_ 0.2_co_ 0.5)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t                BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_assets/_qt__co_ _qt_speedboat.babylon_qt__co_ scene_co_  (meshes_co_ particleSystems) _eq_&gt_sm_ { _lt_br /_gt_\n\t                meshes[0].material _eq_ boatMaterial_sm__lt_br /_gt_\n\t                boat _eq_ meshes[0]_sm__lt_br /_gt_\n\t                })_sm__lt_br /_gt_\n\t                               _lt_br /_gt_\n\t                let boatSpeed _eq_ 1_sm__lt_br /_gt_\n\t                boat.position _eq_ new BABYLON.Vector3(-10_co_ 0_co_ 100)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut bright side_co_ experience on babylon has been great so far. But just need help on this.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"max123","Date":"2016-09-06T19:43:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWhy not just use _lt_em_gt_meshes[0].material.diffuseColor _eq_ new BABYLON.Color3(1.0_co_ 0.2_co_ 0.5)_sm__lt_/em_gt_ ? Unless_co_ of course_co_ the same material is used by other meshes. Also_co_ why do you create an AbstractMesh variable and then reassign it to the loaded mesh?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Zahir Junejo","Date":"2016-09-06T19:46:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI tried that but that also did not work the colour still remained grey but same thing done to skull.babylon file worked.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"max123","Date":"2016-09-06T19:54:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tis your meshes[0] definitely your boat mesh? I_t_ve been burnt by scene arrays_t_ indices before _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Zahir Junejo","Date":"2016-09-06T19:57:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI guess i can relate to that. Yes meshes[0] is boat mesh because that is the only mesh in the blender version of this file. I have not done any splitting.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2016-09-06T20:32:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tMaybe it has a multimaterial ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Zahir Junejo","Date":"2016-09-07T08:29:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYes how did you know that?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-09-07T16:55:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan you call scene.debugLayer.show() ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis way you_t_ll be able to see how many meshes are in your scene\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Zahir Junejo","Date":"2016-09-07T18:26:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh my god_co_ are you David catuh? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will definitely look into scene.debuglayer.show but the problem has been solved for now. By using\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMeshes[0].getscene.getmaterialbyid...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was able to change colours for both materials.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks anyways everyone. But really_co_ are you Mr Catuh?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-09-08T04:01:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tyes he is\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-09-08T16:39:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI am but why is it important? _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]