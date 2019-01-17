[{"Owner":"babbleon","Date":"2018-01-19T12:54:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am using shadowGenerator.useBlurCloseExponentialShadowMap _eq_ true_sm_ to cast shadows.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOddly_co_ the closer the shadow casting mesh is to the shadow receiving mesh_co_ the lighter the shadows.. see attached pic.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am not using this for self-shadowing_co_ just to cast a shadow from one mesh to another.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI appreciate shadow / lighting setup is or can be complex_co_ but is this behaviour expected or am I misusing useBlurCloseExponentialShadowMap ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/Selection_001.png.51a0c51c77fc84ebc460049344bac701.png_qt_ data-fileid_eq__qt_16686_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Selection_001.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16686_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/Selection_001.png.51a0c51c77fc84ebc460049344bac701.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-01-19T23:15:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya babbleon!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUmmm_co_ boy_co_ I_t_m not very experienced with these fancy shadows_co_ but I noticed one thing (possibly worthless)...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#ITTNDX%2312_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#ITTNDX#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlay-around with activating/de-activating lines 29/30.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know if anything helpful can be discovered in this playground_co_ but maybe.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tuseBlurExponentialShadowMap seems to eliminate the gap.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ I did not answer your _qt_Is this expected behavior? ...question_co_ did I?   Sorry.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps others will comment soon.  Stay tuned. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-19T23:22:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello close shadows are really useful when the extends of the scene is near 1.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFurthermore you have to precisely define the light.shadowMaxZ/MinZ in this mode.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-01-23T14:56:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMany thanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ &amp_sm_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ and sorry for the late reply.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsing _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_useBlurExponentialShadowMap makes my shadows start at the base of the leg._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_However_co_ I am intrigued by the use of useBlurCloseExponentialShadowMap and if somehow it_t_s possible to reverse the falloff of the shadow so that it is more intense on the ground closest to the base of the leg and then eventually disappears._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_I have played around with the light.shadowMaxZ &amp_sm_ light.shadowMinZ but I cannot make it look how I imagined_co_ not a great example but a bit like the image in the link below_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__lt_a href_eq__qt_https_dd_//pixabay.com/en/furniture-dining-table-chair-wood-964584/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//pixabay.com/en/furniture-dining-table-chair-wood-964584/_lt_/a_gt_ (see how the shadow is more intense on floor closer to the leg and then just fades away)._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis isn_t_t vital to get the shadow falloff like on the above_co_ but would be cool if I could!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-23T21:28:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is based on a tech named contact hardening shadows which is not really (or at least directly) supported by Bjs so far\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-03-05T20:16:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ - would you be able to point me to the relevant part of the code where the magic of useBlurCloseExponentialShadowMap happens please?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI feel as though the (useBlurCloseExponentialShadowMap) shadows currently have an inverted intensity - see my first post in this thread.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-03-06T10:27:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tsorry...found it_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/ShadersInclude/shadowsFragmentFunctions.fx_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/ShadersInclude/shadowsFragmentFunctions.fx_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]