[{"Owner":"Kesshi","Date":"2016-06-30T13:28:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn this playground i_t_m using SSAO_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#27DV4V_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#27DV4V_lt_/a_gt__lt_br /_gt_\n\tIf you click on the canvas_co_ the 2 spheres will be removed from the scene (but not disposed). The problem is that SSAO effect of the spheres remains visible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think this line is causing the issue_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/Textures/babylon.renderTargetTexture.ts#L238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/Textures/babylon.renderTargetTexture.ts#L238_lt_/a_gt__lt_br /_gt_\n\tgetActiveMeshes returns a SmartArray and the internal data array is used directly here wihtout using the real length of the SmartArray.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis also means that the frustum culling is not working correclty for the DepthRenderer at the moment.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-06-30T14:48:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ another option_co_ if you don_t_t want to dispose them_co_ you can also set isVisible _eq_ false_sm_ to remove them from the _qt_render list_qt_ _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#27DV4V%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#27DV4V#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-30T15:24:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGood catch\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll fix it\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]