[{"Owner":"unicomp21","Date":"2016-03-25T08:45:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCould someone clue me in on how the fsign and tangent in the normal map (ie writing out the bitmap)?  Is fsign in the alpha component?  Or am I way off base?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe intention is to use the normal maps in babylon.js_co_ which I believe is already using the mikkt blender format?  I need to encode these normal maps myself.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//svn.blender.org/svnroot/bf-blender/trunk/blender/intern/mikktspace/mikktspace.h_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//svn.blender.org/svnroot/bf-blender/trunk/blender/intern/mikktspace/mikktspace.h_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-25T18:04:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey...here is how we use the normal map_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/ShadersInclude/bumpFragmentFunctions.fx#L28_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/ShadersInclude/bumpFragmentFunctions.fx#L28_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2016-03-26T12:40:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe bump normal getting pulled from the texture_co_ how do I compose if from \n_lt_/p_gt_\n\n_lt_pre style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_word-spacing_dd_0px_sm_white-space_dd_pre-wrap_sm__qt__gt_\nthe m_setTSpaceBasic callback?_lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//svn.blender.org/svnroot/bf-blender/trunk/blender/intern/mikktspace/mikktspace.h_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//svn.blender.org/svnroot/bf-blender/trunk/blender/intern/mikktspace/mikktspace.h_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2016-03-26T19:42:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNevermind_co_ just realized it_t_s giving me the coordinate system within which I can create the bump vector.  Thanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2016-03-29T08:41:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAny chance there is a javascript version of mkktspace.[ch]?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-29T16:31:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNo idea\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]