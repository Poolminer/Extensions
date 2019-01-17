[{"Owner":"Nodragem","Date":"2018-11-17T11:00:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was wondering if there is an equivalent to the following in BABYLON.GUI_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/dynamictexture#fit-text-into-an-area_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/dynamictexture#fit-text-into-an-area_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEDIT_dd_ I found the textBlock property resizeToFit_co_ but that does not seem to do what I think_co_ here a playground example_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y%23724_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#724_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2018-11-17T13:13:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29687-nodragem/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29687_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29687-nodragem/_qt_ rel_eq__qt__qt__gt_@Nodragem_lt_/a_gt__lt_br /_gt_\n\tYou can use fontSize _eq_ _qt_100%_qt_ to fit fontSize to container_co__lt_br /_gt_\n\thowever_co_ it only works for height_co_ so width will still overflow if text is too long. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-11-17T13:51:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere are some PGs playing around with width_co_ needs more thought and work\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y%23725_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#725_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand with % _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y%23726_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#726_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nodragem","Date":"2018-11-17T15:49:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twow_co_ that is amazing _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_! I am going to use that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut... what is the resizeToFit property for?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-19T02:18:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI guess it forces the textblock to fit to the container.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nodragem","Date":"2018-11-24T18:53:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ _lt_span_gt__dd_ _lt_/span_gt_as stated in the first post_co_ that does not seem to be the case on my side_co_ and that_t_s why _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ came up with a nice solution _lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2018-11-25T04:50:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29687-nodragem/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29687_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29687-nodragem/_qt_ rel_eq__qt__qt__gt_@Nodragem_lt_/a_gt__lt_br /_gt_\n\tResizeToFit resizes the textblock_co_ not the fontsize_co_ perhaps it should be changed to do both._lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y%23736_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#736_lt_/a_gt_ ( uncomment line 44 )\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nodragem","Date":"2018-11-25T11:47:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyep that would be nice_sm_ maybe a feature request on Github?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]