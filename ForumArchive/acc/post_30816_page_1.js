[{"Owner":"aWeirdo","Date":"2017-06-02T14:03:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co__lt_br /_gt_\n\tI_t_m working with some sprites which are very close together and have over-lapping transparent areas_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti need to be able to pick each sprite_co_ but due to the overlapping (which in this case can_t_t be avoided)_co_ it sometimes picks the wrong sprite._lt_br /_gt__lt_br /_gt_\n\tI have been trying to look around for a solution_co__lt_br /_gt_\n\tbut so far came up empty handed_co__lt_br /_gt__lt_br /_gt_\n\tDoes anyone know of a way to detect if you hit one of these transparent areas?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-06-02T18:01:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis is what i_t_ve been able to track down so far_co_ getting an alpha value from canvas image_co_ _lt_a href_eq__qt_http_dd_//jsfiddle.net/cwolves/GaEeG/2/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/cwolves/GaEeG/2/_lt_/a_gt__lt_br /_gt_\n\tI suspect it should be possible to apply it to a texture_t_s data aswell..\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gijs","Date":"2017-06-03T06:36:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ you can do this with BABYLON.WeirdSpriteManager_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2A9U5V%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#2A9U5V#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe manager has the function _lt_em_gt_pickSpritePixel_lt_/em_gt__co_ which takes a child sprite as argument_co_ and returns the pixel under the pointer. It does this by putting a plane mesh at the sprite position with the right rotation and scale_co_ then pick that mesh to get the image (x_co_ y) coordinates_co_ and then get the pixel from the _lt_em_gt_imageData_lt_/em_gt_ like in your jsfiddle. It uses its own copy of the sprite image.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ Here is the typescript source_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ data-fileid_eq__qt_13273_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_13273_qt_ rel_eq__qt__qt__gt_WeirdSpriteManager.ts_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit 2_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith the mesh not pickable_co_ and _lt_em_gt_Math.round_lt_/em_gt_ instead of _lt_em_gt_Math.floor_lt_/em_gt_ in the _lt_em_gt_pickSpritePixel_lt_/em_gt_ function_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2A9U5V%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#2A9U5V#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ data-fileid_eq__qt_13276_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_13276_qt_ rel_eq__qt__qt__gt_WeirdSpriteManager.ts_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-06-03T09:02:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI love it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt_\n\tthank you Gijs\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]