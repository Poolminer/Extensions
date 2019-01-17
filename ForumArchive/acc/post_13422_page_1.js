[{"Owner":"hit2501","Date":"2015-03-26T23:27:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I got a question_co_ why when I import a plane from Blender into babylon I can see one side of the plane and when I move to the other side the plane disappear_co_ how can I fix this?   _lt_/p_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Thanks._lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-27T00:37:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi again!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_  You might try putting a StandardMaterial on it...  and then try _lt_em_gt_mesh.material.backFaceCulling _eq_ false_sm__lt_/em_gt_  maybe._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-03-27T07:12:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi ! _lt_/p_gt__lt_p_gt_Double sided meshes are not supported by webgl. One workaround is to set the property backFaceCulling of its material to _qt_false_qt_ (exactly like Wingnut said)._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var st _eq_ new BABYLON.StandardMaterial(_qt_myplanematerial_qt__co_ scene)_sm_st.backFaceCulling _eq_ false_sm_plane.material _eq_ st_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hit2501","Date":"2015-03-27T18:13:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks again_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ill try it but I did it with a flattened cube and works fine._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]