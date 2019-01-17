[{"Owner":"SvenFrankson","Date":"2017-11-30T10:05:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt seems like in the GlossySpecular workflow_co_ the values of diffuseColor and diffuseTexture are not multiplied together. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen_co_ if you wan_t_t a material with a quite saturated color_co_ like\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_8px_sm__qt__gt__lt_img alt_eq__qt_green.jpg_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_250_qt_ src_eq__qt_http_dd_//svenfrankson.github.io/green.jpg_qt_ width_eq__qt_250_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAdding a texture with this green is not the same as setting this green as the diffuseColor.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSample playground is here _dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/indexstable#6DDR9C%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/indexstable#6DDR9C#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Is there a configuration for the PBR Material to get the result we see with a monochromatic texture_co_ without using any texture ? _lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks a lot ! Have a nice day_co_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-11-30T18:21:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou need to convert your color to linearSpace because factors or static colors are meant to be linear whereas texture works in gamma space.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLittle Sample_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/indexstable#6DDR9C%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/indexstable#6DDR9C#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst is standard (no gamma/linear space in there)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSecond is PBR flat color (using the gamma color in a linear space input)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThird highlights the PBR multiplication\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4 uses the texture (flat color in gamma space)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t5 uses the flat color only but in linear space for a linear space input\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope that helps\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SvenFrankson","Date":"2017-12-01T13:19:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIndeed it helps. Once again_co_ thanks a lot !\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]