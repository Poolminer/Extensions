[{"Owner":"Pierre Glibert","Date":"2018-02-02T15:28:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello community _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe have an object ( 2 meshes ) with multi material exported with 3dsmax to GLTF format.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn inspector_co_ we saw that the exporter splitted our object to 13 meshes. One mesh for each material.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it possible to keep the same object but with a multi material option instead ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave a nice day _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-02T19:07:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPinging _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28074-noalak/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28074_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28074-noalak/_qt_ rel_eq__qt__qt__gt_@noalak_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pierre Glibert","Date":"2018-02-06T08:01:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28074-noalak/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28074_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28074-noalak/_qt_ rel_eq__qt__qt__gt_@noalak_lt_/a_gt_ _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you help me please ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-06T19:10:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tActually this is more for _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-02-06T19:23:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe main issue is that the mesh and primitives in glTF does not match exactly with Babylon_t_s mesh/submesh and multimaterials. I have recently changed the loader to load each glTF primitive to its own Babylon mesh because there were too many edge cases that didn_t_t work correctly. We can perhaps revisit this and figure out a way to only merge the primitives when it is possible to merge them.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pierre Glibert","Date":"2018-02-07T15:36:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your answer. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI understand what you say... but ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s just not easy_co_ in the workflow_co_ to work with that because our meshes are transformed/splitted with other name compared to 3dsmax scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you find a way for _qt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_mesh/submesh and multimaterials_qt_ _lt_/span_gt_that will be cool. If not_co_ don_t_t worry _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOtherwise_co_ good work _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-02-07T17:33:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22396-pierre-glibert/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22396_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22396-pierre-glibert/_qt_ rel_eq__qt__qt__gt_@Pierre Glibert_lt_/a_gt_ Ok_co_ I will keep this in mind. There should be a way to figure out when it_t_s okay to merge_co_ but need to experiment with it a bit before doing so.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]