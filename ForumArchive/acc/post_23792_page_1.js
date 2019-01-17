[{"Owner":"Bob Razowsky","Date":"2016-07-13T13:22:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everybody!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m currently working with BABYLON.CSG and i_t_m facing a problem with UVs.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_8588_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_07/CaptureMesh.PNG.b04974f9122d5f6f83483d353ab335f1.PNG_qt_ alt_eq__qt_CaptureMesh.PNG_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can see on the image_co_ my mesh is composed of two boxes merged with BABYLON.CSG.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf y apply a texture on it_co_ we can clearly see that it kept the UVs of my boxes in place. Is there a way to recompute them?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-07-13T15:47:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is no automatic UV mapping for no basic shapes. But you can still do it manually by using mesh.getVerticesData(BABYLON.VertexBuffer.UVKind)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]