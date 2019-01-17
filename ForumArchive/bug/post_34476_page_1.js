[{"Owner":"cx20","Date":"2017-12-10T02:31:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI tried to display the glTF model with the latest version of Babylon.js (v3.1 rc-1).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ it seems that some models do not display properly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBoxTextured ... Texture is not displayed_lt_br /_gt_\n\tBoxAnimated ... Animation only works partially_lt_br /_gt_\n\tRiggedSimple_co_ RiggedFigure_co_ CesiumMan_co_ Monster_co_ BrainStem_co_ VirtualCity ... Animation does not work\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//cx20.github.io/gltf-test/examples/babylonjs/index.html?model_eq_BoxTextured&amp_sm_scale_eq_1_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//cx20.github.io/gltf-test/examples/babylonjs/index.html?model_eq_BoxTextured&amp_sm_scale_eq_1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//cx20.github.io/gltf-test/examples/babylonjs/index.html?model_eq_BoxAnimated&amp_sm_scale_eq_0.5_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//cx20.github.io/gltf-test/examples/babylonjs/index.html?model_eq_BoxAnimated&amp_sm_scale_eq_0.5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//cx20.github.io/gltf-test/examples/babylonjs/index.html?model_eq_RiggedSimple&amp_sm_scale_eq_0.2_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//cx20.github.io/gltf-test/examples/babylonjs/index.html?model_eq_RiggedSimple&amp_sm_scale_eq_0.2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-11T18:56:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPinging _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2017-12-11T21:24:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe animation is because the default behavior of the loader for playing animations has changed. The default behavior before played all the animations. The new default behavior plays just the first animation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee _lt_a href_eq__qt_https_dd_//github.com/KhronosGroup/glTF/issues/1052_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/KhronosGroup/glTF/issues/1052 _lt_/a_gt_and _lt_a href_eq__qt_https_dd_//github.com/KhronosGroup/glTF-Sample-Models/issues/108_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/KhronosGroup/glTF-Sample-Models/issues/108_lt_/a_gt__lt_span style_eq__qt_float_dd_none_sm_background-color_dd_transparent_sm_color_dd_rgb(53_co_60_co_65)_sm_font-family_dd_Roboto_co_ _t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_400_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_ _lt_/span_gt_for more information about this. The sample models will be updated (hopefully soon) such that playing the first animation will behave correctly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the meantime_co_ if you want the old behavior to play all the animations_co_ you can now specify a new property _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/gltf#version-2-properties_qt_ rel_eq__qt_external nofollow_qt__gt_animationStartMode_lt_/a_gt_ on the loader to play all the animations at once.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe black texture thing is a different issue that only happens for webgl1. I_t_ll look into that separately.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-11T23:15:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBlack texture is fixed by latest nightly\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/3365/commits/0c5c647a1fb468c5afdc529dfd310d869b92794b_qt_ ipsnoembed_eq__qt_false_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/3365/commits/0c5c647a1fb468c5afdc529dfd310d869b92794b_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"cx20","Date":"2017-12-12T14:26:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI confirmed that the sample below works with Babylon.js v3.1-rc-2.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//cx20.github.io/gltf-test/examples/babylonjs/index.html?model_eq_BoxTextured&amp_sm_scale_eq_1_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//cx20.github.io/gltf-test/examples/babylonjs/index.html?model_eq_BoxTextured&amp_sm_scale_eq_1_lt_/a_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//cx20.github.io/gltf-test/examples/babylonjs/index.html?model_eq_BoxAnimated&amp_sm_scale_eq_0.5_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//cx20.github.io/gltf-test/examples/babylonjs/index.html?model_eq_BoxAnimated&amp_sm_scale_eq_0.5_lt_/a_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//cx20.github.io/gltf-test/examples/babylonjs/index.html?model_eq_RiggedSimple&amp_sm_scale_eq_0.2_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//cx20.github.io/gltf-test/examples/babylonjs/index.html?model_eq_RiggedSimple&amp_sm_scale_eq_0.2_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to test again when the sample model is updated.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-12T16:24:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]