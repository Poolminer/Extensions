[{"Owner":"Fahad","Date":"2018-01-08T19:19:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m Trying To Use The StandardRenderingPipeline But It Gives Errors_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_div style_eq__qt_background-color_dd_#ffffff_sm_border-top_dd_1px solid #f0f0f0_sm_color_dd_#000000_sm_padding_dd_.1em .2em_sm__qt__gt_\n\t\t\tWebGL_dd_ INVALID_ENUM_dd_ texImage2D_dd_ invalid type\n\t\t_lt_/div_gt_\n\n\t\t_lt_div style_eq__qt_background-color_dd_#ffffff_sm_border-top_dd_1px solid #f0f0f0_sm_color_dd_#000000_sm_padding_dd_.1em .2em_sm__qt__gt_\n\t\t\tBJS - [01_dd_05_dd_47]_dd_ Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED...\n\t\t_lt_/div_gt_\n\n\t\t_lt_div style_eq__qt_background-color_dd_#ffffff_sm_border-top_dd_1px solid #f0f0f0_sm_color_dd_#000000_sm_padding_dd_.1em .2em_sm__qt__gt_\n\t\t\t[.Offscreen-For-WebGL-0xb47d0400]GL ERROR _dd_GL_INVALID_FRAMEBUFFER_OPERATION\n\t\t_lt_/div_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_div style_eq__qt_background-color_dd_#ffffff_sm_border-top_dd_1px solid #f0f0f0_sm_color_dd_#000000_sm_padding_dd_.1em .2em_sm__qt__gt_\n\t \n_lt_/div_gt_\n\n_lt_div style_eq__qt_background-color_dd_#ffffff_sm_border-top_dd_1px solid #f0f0f0_sm_color_dd_#000000_sm_padding_dd_.1em .2em_sm__qt__gt_\n\t \n_lt_/div_gt_\n\n_lt_div style_eq__qt_background-color_dd_#ffffff_sm_border-top_dd_1px solid #f0f0f0_sm_color_dd_#000000_sm_padding_dd_.1em .2em_sm__qt__gt_\n\tI Used The Code _t_new BABYLON.StandardRenderingPipeline(_qt_standard_qt__co_scene_co_1.0_co__qt__qt__co_[camera])_sm__t_ At The End Of createScene()_sm_\n_lt_/div_gt_\n\n_lt_div style_eq__qt_background-color_dd_#ffffff_sm_border-top_dd_1px solid #f0f0f0_sm_color_dd_#000000_sm_padding_dd_.1em .2em_sm__qt__gt_\n\tCan Anyone Help Me?\n_lt_/div_gt_\n\n_lt_p_gt_\n\t(I_t_m Using The Latest Preview Version Of BabylonJS)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-08T22:14:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPinging _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11802-luaacro/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11802_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11802-luaacro/_qt_ rel_eq__qt__qt__gt_@Luaacro_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2018-01-08T23:16:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLooks like your device do not support floating point textures. On which device are you testing?\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti’ll try to reproduce using integer textures\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Fahad","Date":"2018-01-09T04:31:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m Using Walton Primo GF4\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAndroid Version _dd_ 5.1\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRAM _dd_ 1GB\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCPU _dd_ MT6580\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGPU _dd_ Mali 400\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2018-01-10T12:15:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29939-fahad/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29939_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29939-fahad/_qt_ rel_eq__qt__qt__gt_@Fahad_lt_/a_gt_ For the 4rth parameter_co_ can you try to set « null » instead of empty quotes ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]