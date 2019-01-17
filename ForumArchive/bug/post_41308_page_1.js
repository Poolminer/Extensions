[{"Owner":"entropy","Date":"2018-11-16T06:13:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI came across a couple of strange behaviors with different properties of anaglyph cameras.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe first one involves AnaglyphUniversalCamera_dd_ its rotationQuaternion can_t_t be animated. To illustrate_co_ check out the PG demo below. The default code uses the regular Universal camera_co_ but you can switch to the anaglyph version via lines 7 and 8. In either case_co_ animations of position and rotation are applied to the active camera. Note that the regular camera animates its position and orientation (as intended)_co_ but the anaglyph version only translates.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/indexStable.html#WR9PXQ_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/indexStable.html#WR9PXQ_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe second issue involves how the interaxialDistance (iD) setting affects the rendering of the scene. The behavior of this property is different between AnaglyphUniversalCamera (AUC) and AnaglyphArcRotateCamera (AARC). Here_t_s how I_t_d describe it_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPositive iD with AARC_dd_ It_t_s hard for my eyes to interpret the scene...I think closer objects are rendered *behind* farther objects (in a depth perception sense).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNegative iD with AARC_dd_ Everything looks fine. Close objects project forward into the space between my eyes and the screen_co_ while distant objects appear behind the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPositive iD with AUC_dd_ It looks okay_co_ except objects only appear behind the screen and never in front of it no matter how close they are to the camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNegative iD with AUC _dd_ It looks like the entire scene is compressed into the space in front of the screen...again it_t_s hard to interpret visually.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy preferred rendering is a negative iD with AARC since objects appear correctly both in front of and behind the screen. Regardless_co_ the iD behavior between the cameras is inconsistent. You can try playing with the sign of iD and switch between the two types of anaglyph cameras in the following PG_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#CURCZC%2311_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#CURCZC#11_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-16T16:46:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. This was a bug (the AnaglyphCamera was not updating its up vector)_dd_ It will be fixed by next nightly. Thanks a lot for reporting it!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is some screenshots first with AARC_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.c7023e83850b1d8a2fea3ddff0519cc1.png_qt_ data-fileid_eq__qt_21012_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21012_qt_ data-unique_eq__qt_nvzwhbi6h_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.thumb.png.44296dd889db24dbccc17ecbf6523d40.png_qt_ alt_eq__qt_image.png_qt__gt__lt_/a_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.1f92335e1bdb0ddd36bf29a4d3b7d9b0.png_qt_ data-fileid_eq__qt_21011_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21011_qt_ data-unique_eq__qt_z9ncaw34p_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.thumb.png.c76be90b0ae4d49c6c5265ccd1c2c9cb.png_qt_ alt_eq__qt_image.png_qt__gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(positive on the left / negative on the right)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is the expected result (the interpupilar is used to define where the red glass is as well_co_ so if it is on the right you have to use a negative value).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow AUC is completely broken _dd_D. I_t_ll work on fixing it _lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-16T17:02:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk this is fixed! Will be in next commit as well!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]