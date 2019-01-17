[{"Owner":"jacquesr","Date":"2016-01-29T10:31:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m addressing this directly to the babylon devs_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom what I can read from examples using models with textures_co_ the textures are always in separate image files. Are there any plans to include the textures as e. g. byte array directly inside the .babylon json? Or is there already a way to do so?_lt_br_gt__lt_br_gt_\n\tThe background is that I would like to define a theme for a 3D scene I_t_m working on to contain models and also textures and the themes should be exchangable at runtime\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo the best would be that the theme object contains everything. It would be great to have the babylon JSONs that I store in it also already contain the textures binaries.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tKind Regards\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJacques\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2016-01-29T11:56:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOne solution could be for you to embed your textures as base64 images in a JSON. In your app you load and parse the JSON file (_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_AssetsManager_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_AssetsManager)_lt_/a_gt__co_ and then create your babylon textures from that base64 images (same method as for pics).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you prefer to store your textures in the .babylon file_co_ you_t_ll need to write your own data file_co_ and a specific loader_co_ based on the one already existing for the .babylon extension. BJS has already prepared such a process for you _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_Create_Your_Own_File_Importer_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/How_to_Create_Your_Own_File_Importer_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave a nice day.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-01-29T16:15:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBoth Blender exporters have an _t_inline textures_t_ checkbox. For full documentation_co_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/tree/master/QueuedInterpolation/Blender_qt_ rel_eq__qt_external nofollow_qt__gt_see_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_exporterSettings.png_qt_ class_eq__qt_ipsImage_qt_ src_eq__qt_https_dd_//raw.githubusercontent.com/BabylonJS/Extensions/master/QueuedInterpolation/Blender/doc-assist/exporterSettings.png_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2016-01-29T16:38:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHmm JCP_co_ that means .babylon file can already directly embed textures ?! Didn_t_t know that.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-01-29T17:18:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep_co_ since BJS 2.1_co_ I think.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-02-01T17:39:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYour texture just has to be in base64. I think it_t_s handled correctly in the scene loader.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"satguru","Date":"2016-02-01T23:13:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan the scene serializer do this too?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-02-02T17:15:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI seriously doubt it.  When I did it for Blender (using python)_co_ I relied on the base64 library to do all the work.  You should investigate if Javascript has such a factility.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]