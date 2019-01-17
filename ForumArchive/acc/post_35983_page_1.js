[{"Owner":"Vorion","Date":"2018-02-26T22:58:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tis it possible to link a gui control_co_ like the one in this example _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y%2320_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#20_lt_/a_gt__co_ to a TransformNode_co_ instead of a mesh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-02-27T03:38:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn the typescript it is explicitly an AbstractMesh_co_ but I also tried in your PG and got an error_dd__lt_br /_gt_\n\th.getBoundingInfo is not a function.  I think it_t_s from here_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/62400581618983fd2b089b0a32347074427c9961/gui/src/advancedDynamicTexture.ts#L343_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/62400581618983fd2b089b0a32347074427c9961/gui/src/advancedDynamicTexture.ts#L343_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat getBoundingInfo() method starts on AbstractMesh_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/classes/3.0/abstractmesh#getboundinginfo-rarr-boundinginfo-classes-3-0-boundinginfo-_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/classes/3.0/abstractmesh#getboundinginfo-rarr-boundinginfo-classes-3-0-boundinginfo-_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tThat method is not available on Node (That AbstractMesh derives from).  Although_co_ I don_t_t see why it couldn_t_t work for a Node.... the short answer is no.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_ can you get away with an empty mesh what you are trying to do?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-27T16:38:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tEven creating an AbstractMesh should work (I need at least an abstractMesh to get a bounding box)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vorion","Date":"2018-02-27T17:34:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ thanks _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]