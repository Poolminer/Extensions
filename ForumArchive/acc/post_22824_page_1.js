[{"Owner":"ClearBoy","Date":"2016-05-27T13:55:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want export animation with textures_co_ but..\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLog_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_File _qt_{Fake\\Path}\\Blender\\2.77\\scripts\\addons\\io_export_babylon.py_qt__co_ line 329_co_ in execute\n    mesh _eq_ Mesh(object_co_ scene_co_ nextStartFace_co_ forcedParent_co_ nameID_co_ self)\n  File _qt_{Fake\\Path}\\Blender\\2.77\\scripts\\addons\\io_export_babylon.py_qt__co_ line 785_co_ in __init__\n    bakedMat _eq_ BakedMaterial(exporter_co_ object_co_ recipe)\n  File _qt_{Fake\\Path}\\Blender\\2.77\\scripts\\addons\\io_export_babylon.py_qt__co_ line 2131_co_ in __init__\n    self.bake(_t_diffuseTexture_t__co_ _t_DIFFUSE_COLOR_t__co_ _t_TEXTURE_t__co_ image_co_ mesh_co_ uvName_co_ exporter_co_ recipe)\n  File _qt_{Fake\\Path}\\Blender\\2.77\\scripts\\addons\\io_export_babylon.py_qt__co_ line 2163_co_ in bake\n    self.bakeCycles(cycles_type_co_ image_co_ uvName_co_ recipe.nodeTrees)\n  File _qt_{Fake\\Path}\\Blender\\2.77\\scripts\\addons\\io_export_babylon.py_qt__co_ line 2211_co_ in bakeCycles\n    bpy.ops.object.bake(type _eq_ bake_type_co_ use_clear _eq_ True_co_ margin _eq_ 5_co_ use_selected_to_active _eq_ False)\n  File _qt_{Fake\\Path}\\Blender\\2.77\\scripts\\modules\\bpy\\ops.py_qt__co_ line 189_co_ in __call__\n    ret _eq_ op_call(self.idname_py()_co_ None_co_ kw)\nERROR_dd_  Converting py args enum _qt_DIFFUSE_COLOR_qt_ not found in (_t_COMBINED_t__co_ _t_AO_t__co_ _t_SHADOW_t__co_ _t_NORMAL_t__co_ _t_UV_t__co_ _t_EMIT_t__co_ _t_ENVIRONMENT_t__co_ _t_DIFFUSE_t__co_ _t_GLOSSY_t__co_ _t_TRANSMISSION_t__co_ _t_SUBSURFACE_t_)\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBlender_dd_ 2.77\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWindows 10\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-05-27T15:21:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNothing to do with animation.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-05-27T15:49:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ the names you give in python code for cycles baking types have changed_co_ since 2.74_co_ when I put it in_co_ and 2.77.  No one probably cares_co_ but I am just making notes for myself.  Here is the call for 2.74_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/Selection_196.png.0e6d4a491c1bb55648872daa400d96f6.png_qt_ data-fileid_eq__qt_7832_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7832_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/Selection_196.thumb.png.a6c032835dcb2befaa89b77512370632.png_qt_ alt_eq__qt_Selection_196.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is 2.77_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/Selection_197.png.a7acb018bfe8a560af9e5dea5e623178.png_qt_ data-fileid_eq__qt_7831_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7831_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/Selection_197.thumb.png.d22df7d4ba58a5ecdc6a8fb471422b84.png_qt_ alt_eq__qt_Selection_197.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt actually looks like an improvement.  I was sort of confused by 3 different diffuses.  Not going to get to this right now.  Perhaps change o 2.76.  Docs say this changed in 2.77\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]