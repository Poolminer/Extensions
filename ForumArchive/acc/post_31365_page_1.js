[{"Owner":"Borislav","Date":"2017-06-29T21:08:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs that possible?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I set it like that_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_face.position.x _eq_ char.position.x\n\nface.position.z _eq_ char.position.z_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIt will just stand still.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI currently have.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_face.position _eq_ char.position_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIt makes the cube follow the mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ I want the cube on the head_co_ but it is in the torso.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//cityworld.16mb.com/levels/1/play/preview.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//cityworld.16mb.com/levels/1/play/preview.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Borislav","Date":"2017-06-29T21:23:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI just found out I could just make the cube longer so it reaches the head.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-30T01:48:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Also_co_ look at this...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tface.setPivotMatrix(BABYLON.Matrix.Translation(0_co_ -something_co_ 0))_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat can move a face/head up or down.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso...  you can try fun things like...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tface.position.y _eq_ face.position.y + 2_sm__lt_br /_gt_\n\tface.bakeCurrentTransformIntoVertices()_sm__lt_br /_gt_\n\tface.position.y _eq_ face.position.y - 2_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFun with pivot/origin adjustings.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_After_lt_/strong_gt_ you perform up/down pivotMatrix adjustments or move-bake-unmove actions like these_co_ it is sometimes fun to animate around the X-axis. It can make you smile...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tscene.beforeRender _eq_()_eq_&gt_sm_ {_lt_br /_gt_\n\t     face.rotation.x +_eq_ .005_sm__lt_br /_gt_\n\t}\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOffset rotation.  Pendulum-ing.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Good luck.  Hope this helps.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]