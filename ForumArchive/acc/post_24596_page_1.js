[{"Owner":"Pierre Glibert","Date":"2016-08-20T08:06:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello people_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI had a good conversation with _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_. I asked him if he could add parent variable for instance in .babylon file and he did it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can read it here _dd_ \n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/24352-blender-exporter-50/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\tAt the moment_co_ the fileloader do not apply the right parent but always the same parent of original mesh.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\tI will try to find solution for the babylon fileloader read parent for instance and apply this_lt_span_gt_ _lt_/span_gt__lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ style_eq__qt_vertical-align_dd_middle_sm_border_dd_0px_sm__qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t_lt_strong_gt_My idea &gt_sm__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t_lt_em_gt_Add this in mesh file _dd__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_pre style_eq__qt_font-family_dd_monospace_co_ monospace_sm_font-size_dd_14px_sm_color_dd_rgb(39_co_42_co_52)_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n_lt_code style_eq__qt_font-family_dd_monospace_co_ monospace_sm_font-size_dd_1em_sm_padding_dd_.5em_sm_color_dd_rgb(248_co_248_co_242)_sm_background_dd_rgb(35_co_36_co_31)_sm__qt__gt__lt_span style_eq__qt_color_dd_rgb(117_co_113_co_94)_sm__qt__gt_// Instances_lt_/span_gt_\n_lt_span style_eq__qt_font-weight_dd_bold_sm_color_dd_rgb(249_co_38_co_114)_sm__qt__gt_if_lt_/span_gt_ (parsedMesh.instances) {\n...\n\n  _lt_span style_eq__qt_font-weight_dd_bold_sm_color_dd_rgb(249_co_38_co_114)_sm__qt__gt_if_lt_/span_gt_ (parsedInstance.parentId) {\n    instance._waitingParentId _eq_ parsedInstance.parentId_sm_\n  }\n\n...\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t_lt_em_gt_Because in fileLoader_co_ this code allready exist and all instances are in _qt_meshes_qt_ array _dd_ _lt_/em_gt_\n_lt_/p_gt_\n\n_lt_pre style_eq__qt_font-family_dd_monospace_co_ monospace_sm_font-size_dd_14px_sm_color_dd_rgb(39_co_42_co_52)_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n_lt_code style_eq__qt_font-family_dd_monospace_co_ monospace_sm_font-size_dd_1em_sm_padding_dd_.5em_sm_color_dd_rgb(248_co_248_co_242)_sm_background_dd_rgb(35_co_36_co_31)_sm__qt__gt_// Connect parents \n_lt_span style_eq__qt_font-weight_dd_bold_sm_color_dd_rgb(249_co_38_co_114)_sm__qt__gt_for_lt_/span_gt_ (_lt_span style_eq__qt_font-weight_dd_bold_sm_color_dd_rgb(249_co_38_co_114)_sm__qt__gt_index_lt_/span_gt_ _eq_ _lt_span style_eq__qt_color_dd_rgb(174_co_129_co_255)_sm__qt__gt_0_lt_/span_gt__co_ cache _eq_ scene.meshes._lt_span style_eq__qt_font-weight_dd_bold_sm_color_dd_rgb(249_co_38_co_114)_sm__qt__gt_length_lt_/span_gt__sm_ _lt_span style_eq__qt_font-weight_dd_bold_sm_color_dd_rgb(249_co_38_co_114)_sm__qt__gt_index_lt_/span_gt_ &lt_sm_ cache_sm_ _lt_span style_eq__qt_font-weight_dd_bold_sm_color_dd_rgb(249_co_38_co_114)_sm__qt__gt_index_lt_/span_gt_++) {\n  var mesh _eq_ scene.meshes[_lt_span style_eq__qt_font-weight_dd_bold_sm_color_dd_rgb(249_co_38_co_114)_sm__qt__gt_index_lt_/span_gt_]_sm_\n  _lt_span style_eq__qt_font-weight_dd_bold_sm_color_dd_rgb(249_co_38_co_114)_sm__qt__gt_if_lt_/span_gt_ (mesh._waitingParentId) {\n    mesh.parent _eq_ scene.getLastEntryByID(mesh._waitingParentId)_sm_\n    mesh._waitingParentId _eq_ undefined_sm_\n  }\n  \n  ...\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin-bottom_dd_0px_sm_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\tWhat do you think_lt_span_gt_ _lt_/span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt_ style_eq__qt_color_dd_rgb(255_co_255_co_255)_sm_text-decoration_dd_underline_sm_padding_dd_0px 5px_sm_font-size_dd_12.6px_sm_background_dd_rgb(48_co_132_co_196)_sm__qt__gt_@Deltakosh_lt_/a_gt_?\n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin-bottom_dd_0px_sm_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\tHave a nice day_co_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin-bottom_dd_0px_sm_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\tLetsbro studio team.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-24T14:41:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi L!  Sorry for the slow replies.  Time to bump this to the top of the list and hope for more responses.  I think everyone went water skiing or something.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-25T16:02:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI think this is fine.. Are you ready to submit a PR?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pierre Glibert","Date":"2016-08-25T19:03:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ for your reply. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will see how to contribute to Babylon very soon and submit this update _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pierre Glibert","Date":"2016-08-30T15:23:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis correction is done _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]