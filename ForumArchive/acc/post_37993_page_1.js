[{"Owner":"JasonX","Date":"2018-06-02T12:59:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLink here to test. Using latest 3.2.0 via CDN\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.marduksoft.com/demo3d/potatoman.php_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.marduksoft.com/demo3d/potatoman.php_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith Arcrotatecamera_co_ doesn_t_t work under Android version of Firefox. Can_t_t rotate/zoom no gestures working.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOther than that_co_ works with Desktop chrome_co_ Firefox and Android Chrome (latest version)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-06-03T05:55:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUnfortunately I_t_ve found this occurring device specific from time to time. If I require the _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_Arc Rotate Camera_co_ I typically use another camera and set it_t_s attributes to emulate an ARC. Otherwise_co_ this will continue to be the case as it_t_s not a babylon.js issue_co_ but an issue with the device_co_ OS_co_ and browser._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_Also_co_ if you want to remove the error_dd_ _lt_strong_gt__lt_em_gt_potatoman.babylon.manifest?1528004661664_dd_1 Failed to load resource_dd_ the server responded with a status of 404 (Not Found)_lt_/em_gt__lt_/strong_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_Then create an empty text file _qt_name.manifest_qt_ which it is looking for_co_ and the error will no longer be reported. I and others have asked for this to be ignored if not in existance in the past_co_ but perhaps there is a reason why it can_t_t be ignored. I assume _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ is still updating the .babylon exporter_co_ so perhaps he might remove the .manifest reference from the babylon.js exe. But again_co_ I_t_m not sure why this is still referenced. It doesn_t_t affect the loading of a .babylon file._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JasonX","Date":"2018-06-03T09:47:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_ I solved the problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLooks like need to include jquery_t_s pep.js and set an attribute touch-action_eq_none in rendercanvas. Here_t_s the code that works in android chrome and android firefox.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_div style_eq__qt_color_dd_#d4d4d4_sm_background-color_dd_#1e1e1e_sm_font-family_dd_Consolas_co_ _t_Courier New_t__co_ monospace_sm_font-weight_dd_normal_sm_font-size_dd_14px_sm_line-height_dd_19px_sm_white-space_dd_pre_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_&lt_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_canvas_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_id_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#ce9178_sm__qt__gt__qt_renderCanvas_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_touch-action_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#ce9178_sm__qt__gt__qt_none_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_&gt_sm_&lt_sm_/_lt_/span_gt__lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_canvas_lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_&gt_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_&lt_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_script_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_src_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#ce9178_sm__qt__gt__qt_https_dd_//code.jquery.com/pep/0.4.3/pep.js_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_&gt_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_&lt_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_/_lt_/span_gt__lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_script_lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_&gt_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_&lt_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_script_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_src_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#ce9178_sm__qt__gt__qt_https_dd_//cdnjs.cloudflare.com/ajax/libs/babylonjs/3.2.0/babylon.js_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_&gt_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_&lt_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_/_lt_/span_gt__lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_script_lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_&gt_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_&lt_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_script_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_src_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#ce9178_sm__qt__gt__qt_/scripts/potatoman.js_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_&gt_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_&lt_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_/_lt_/span_gt__lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_script_lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_&gt_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2018-06-03T10:15:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_ for the touch to work_co_ you have to use jQuery PEP and set the right property on the canvas element. We should probably reinforce that somewhere in the documentation even if this is already specified_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/babylon101/cameras_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/babylon101/cameras_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor the .manifest_co_ this is the only I have to check you_t_re requesting offline for those ressources. You can disable this check by changing the enableOfflineSupport boolean property on the engine object_lt_span_gt__dd_ _lt_/span_gt__lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/caching_resources_in_indexeddb_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/caching_resources_in_indexeddb_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-06-04T14:16:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am not sure why I am in this topic.  BTW_co_ there was a recent  _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Exporters/commit/29e47359a4ca2f724127d8beceb3a76ac8a5035a#diff-f617f40aec319a57df2ee989ac70dcd1_qt_ rel_eq__qt_external nofollow_qt__gt_PR_lt_/a_gt_ by _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/27284-funfetched/?do_eq_hovercard_qt_ data-mentionid_eq__qt_27284_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/27284-funfetched/_qt_ rel_eq__qt__qt__gt_@FunFetched_lt_/a_gt_  to automatically create a .manifest file in the exporter.  This will at least do this for you_co_ and be more than just an empty file _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_# Create or update .manifest file\nif self.scene.writeManifestFile_dd_\n    file_handler _eq_ open(self.filepathMinusExtension + _t_.babylon.manifest_t__co_ _t_w_t__co_ encoding_eq__t_utf8_t_)\n    file_handler.write(_t_{\\n_t_)\n    file_handler.write(_t_\\t_qt_version_qt_ _dd_ _t_ + str(calendar.timegm(time.localtime())) + _t__co_\\n_t_)\n    file_handler.write(_t_\\t_qt_enableSceneOffline_qt_ _dd_ true_co_\\n_t_)\n    file_handler.write(_t_\\t_qt_enableTextureOffline_qt_ _dd_ true\\n_t_)\n    file_handler.write(_t_}_t_)\n    file_handler.close()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tYou have to click the checkbox_co_ since it is not done by default.  I do not have anything to do the loading side.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-06-04T21:08:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI thought you wrote the .babylon exporter?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]