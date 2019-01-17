[{"Owner":"XTender","Date":"2017-10-31T13:32:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI generate a Ribbon from a path array which looks like in the attached image.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI assign a single color material to the mesh_co_ now I would like to add an another material/color to the center _qt_strip_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow can I achieve it. or did I have to create 3 separate paths (left _co_ center_co_ right) ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/trackwireframe.png.2cdf80679340a66580cd9db0ca152db2.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_15484_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/trackwireframe.thumb.png.6aa51eaa73c1e341fa3b15b1d4cc6d04.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_trackwireframe.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-10-31T13:39:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can use different parts of a same texture ans assign them manually to the ribbon vertices with the parameter _lt_em_gt_uvs_lt_/em_gt_ what is a flat array of Vector2 (one doublet (u_co_v) per vertex) _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.meshBuilder.ts#L130_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.meshBuilder.ts#L130_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can also set different colors to each ribbon vertex with the parameter _lt_em_gt_colors_lt_/em_gt_ what is a flat array of Color4 (one color4 per ribbon vertex) _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.meshBuilder.ts#L131_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.meshBuilder.ts#L131_lt_/a_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"XTender","Date":"2017-10-31T13:56:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe didn_t_t use a Texture just plain colors.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried the second approach_co_ did I have to predefine the VertexColor for every vertex?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo i have to _qt_precalculate_qt_ how many vertices I will get?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso didn_t_t I get unwanted _qt_gradients_qt_ from the center stripe to the outer vertices?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"XTender","Date":"2017-10-31T14:09:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk I think i got it. but it would be nice to know if it is possible to get rid of the _qt_gradient_qt_ I know that it_t_s just a vertex color which affects all surrounding faces but maybe there is a solution which is not too complicated _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/59f884159a436_Bildschirmfoto2017-10-31um15_08_23.png.16ec428ad032eb4ec88cee0920897256.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_15486_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/59f884180d41e_Bildschirmfoto2017-10-31um15_08_23.thumb.png.6d11a03ca1f31f83fb93147cc032fcac.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Bildschirmfoto 2017-10-31 um 15.08.23.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-10-31T15:42:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tActually the triangle (facet) colors are interpolated between two vertices_co_ that why you_t_ve got this gradient between the grey vertex and the next red one. If you don_t_t wan_t_t this gradient_co_ well_co_ just add the required paths (vertices) each holding the grey and the red colors on the same positions.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"XTender","Date":"2017-10-31T16:06:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat_t_s an idea. But that would bump up the polycount. Actually our designer ment that he kinda like the gradient.so everybody is happy.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the solution.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-10-31T16:54:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tyep about the polycount although it might be not that important ... If you care about this_co_ you could also keep in memory the whole path data_co_ then create a smaller ribbon (say_co_ the visible part only) and update it from the data with the camera movement\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]