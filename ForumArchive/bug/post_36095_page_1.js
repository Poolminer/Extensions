[{"Owner":"rockefeller","Date":"2018-03-03T13:09:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to create a custom _lt_strong_gt_RenderTargetTexture_lt_/strong_gt_ of type_lt_strong_gt_ BABYLON.Engine._lt_span style_eq__qt_color_dd_#3498db_sm__qt__gt_TEXTUREFORMAT_LUMINANCE_lt_/span_gt__lt_/strong_gt_ but it doesn_t_t work. here_t_s my code_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_textureFormat_lt_/strong_gt_ is always 5 (probably _lt_span style_eq__qt_color_dd_#2980b9_sm__qt__gt__lt_strong_gt_TEXTUREFORMAT_RGBA_lt_/strong_gt__lt_/span_gt_)_co_ regardless of what I set it to be.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#282c34_sm_color_dd_#bbbbbb_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#5c6370_sm__qt__gt_// Render target_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#c678dd_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_renderTarget_lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#56b6c2_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#c678dd_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#98c379_sm__qt__gt_BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#e5c07b_sm__qt__gt_RenderTargetTexture_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#98c379_sm__qt__gt__qt_depth_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_128_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#5c6370_sm__qt__gt_// res_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_scene_co__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_false_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#5c6370_sm__qt__gt_// generateMipMaps_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_true_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#5c6370_sm__qt__gt_// doNotChangeAspectRatio_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_Engine_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_TEXTURETYPE_UNSIGNED_INT_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#5c6370_sm__qt__gt_// type_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_false_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#5c6370_sm__qt__gt_// isCube_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_Texture_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_BILINEAR_SAMPLINGMODE_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#5c6370_sm__qt__gt_// samplingMode_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_false_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#5c6370_sm__qt__gt_// generateDepthBuffer_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_false_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#5c6370_sm__qt__gt_// generateStencilBuffer_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_false_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_)_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#5c6370_sm__qt__gt_//isMulti_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_renderTarget_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_noMipmap_lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#56b6c2_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_true_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_renderTarget_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_wrapU_lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#56b6c2_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_Texture_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_CLAMP_ADDRESSMODE_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_renderTarget_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_wrapV_lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#56b6c2_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_Texture_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_CLAMP_ADDRESSMODE_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_renderTarget_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_wrapR_lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#56b6c2_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_Texture_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_CLAMP_ADDRESSMODE_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_renderTarget_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_textureFormat_lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#56b6c2_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_Engine_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_TEXTUREFORMAT_LUMINANCE_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_renderTarget_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_hasAlpha_lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#56b6c2_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_false_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_renderTarget_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_gammaSpace_lt_/span_gt__lt_span style_eq__qt_color_dd_#56b6c2_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d19a66_sm__qt__gt_false_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#16a085_sm__qt__gt_/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_p_gt_\n\t\t\tMy wild guess is that the constructor doesn_t_t pass _lt_strong_gt_textureFormat_lt_/strong_gt_ to _lt_span style_eq__qt_color_dd_#e74c3c_sm__qt__gt__renderTargetOptions_lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_div style_eq__qt_background-color_dd_#282c34_sm_color_dd_#bbbbbb_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#e06c75_sm__qt__gt__renderTargetOptions_lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#56b6c2_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_{_lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_                generateMipMaps_lt_/span_gt__lt_span style_eq__qt_color_dd_#56b6c2_sm__qt__gt__dd__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_generateMipMaps_co__lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_                type_lt_/span_gt__lt_span style_eq__qt_color_dd_#56b6c2_sm__qt__gt__dd__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_type_co__lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_                samplingMode_lt_/span_gt__lt_span style_eq__qt_color_dd_#56b6c2_sm__qt__gt__dd__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_samplingMode_co__lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_                generateDepthBuffer_lt_/span_gt__lt_span style_eq__qt_color_dd_#56b6c2_sm__qt__gt__dd__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_generateDepthBuffer_co__lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_                generateStencilBuffer_lt_/span_gt__lt_span style_eq__qt_color_dd_#56b6c2_sm__qt__gt__dd__lt_/span_gt__lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_generateStencilBuffer_lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#bbbbbb_sm__qt__gt_            _lt_/span_gt__lt_span style_eq__qt_color_dd_#abb2bf_sm__qt__gt_}_sm__lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-03-05T16:07:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ttextureFormat is a read-only parameter after the texture was created.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can create a raw texture of type BABYLON.Engine.TEXTUREFORMAT_LUMINANCE using BABYLON.RawTexture.CreateLuminanceTexture(...) would that be helpful?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"rockefeller","Date":"2018-03-05T19:32:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan I use raw textures as rendertargets? if not_co_ it doesn_t_t help me much\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-06T20:15:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNope unfortunately.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRTT can be int_co_ half_co_ float but you cannot define the format (always RGBA)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif you want to_co_ you can create a feature issue on our repo as I think it could be a good idea to support this use case\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"rockefeller","Date":"2018-03-07T21:51:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDone_co_ here_t_s the issue _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/3901_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/3901_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-08T16:59:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWill work on it asap!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]