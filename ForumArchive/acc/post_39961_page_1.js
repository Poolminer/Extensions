[{"Owner":"KerwinK","Date":"2018-09-12T18:42:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_strong_gt_Can anyone please tell me if it is possible to load a *.glb file off a local drive with Babylon.viewer.js?_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_ I have a valid glb file I named part2.glb... and it works fine to display locally in the Mixed Reality viewer in Windows 10... and also up in Remix 3D community models page.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ when I try to open it off a local drive with the simple 2 line HTML syntax (see below) I receive an error in the browser page display _qt__lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_Error loading the model_lt_/span_gt__qt_.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_head&gt_sm_\n    &lt_sm_title&gt_sm_Babylon.js Viewer - Display a 3D model&lt_sm_/title&gt_sm_\n    &lt_sm_!-- &lt_sm_script src_eq__qt_https_dd_//preview.babylonjs.com/viewer/babylon.viewer.js_qt_&gt_sm_&lt_sm_/script&gt_sm_ --&gt_sm_\n    &lt_sm_script src_eq__qt_C_dd_\\Babylon.js\\Babylon.js-master\\dist\\viewer\\babylon.viewer.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n&lt_sm_/head&gt_sm_\n&lt_sm_body&gt_sm_\n   &lt_sm_!-- &lt_sm_babylon model_eq__qt_https_dd_//models.babylonjs.com/boombox.glb_qt_ templates.main.params.fill-screen_eq__qt_true_qt_&gt_sm_&lt_sm_/babylon&gt_sm_ --&gt_sm_\n   &lt_sm_babylon model_eq__qt_C_dd_\\part2.glb_qt_ templates.main.params.fill-screen_eq__qt_true_qt_&gt_sm_&lt_sm_/babylon&gt_sm_ --&gt_sm_   \n&lt_sm_/body&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"devAxeon","Date":"2018-09-13T08:06:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32771-kerwink/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32771_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32771-kerwink/_qt_ rel_eq__qt__qt__gt_@KerwinK_lt_/a_gt__co__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tFirst_co_ you should try to install a web server and launch your html file on it. Take a look at wamp_co_ xampp or easyphp.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen you will be able to load your file with relavive path (ex_dd_ model_eq__qt_./assets/part2.gbl_qt_).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KerwinK","Date":"2018-09-17T02:56:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28559-devaxeon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28559_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28559-devaxeon/_qt_ rel_eq__qt__qt__gt_@devAxeon_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthank you for the suggestion... however_co_ I still get the same error with the file placed on a web server with a relative path.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-17T15:50:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan you check the console and the f12 network profiler to get more info about the error?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KerwinK","Date":"2018-09-17T21:52:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@deltakosh  thank you for the suggestion...  here is the error it is displaying_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_float_dd_none_sm_background-color_dd_transparent_sm_color_dd_rgb(255_co_5_co_5)_sm_font-family_dd_Consolas_co_ _t_Lucida Console_t__co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_400_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre-wrap_sm_word-spacing_dd_0px_sm__qt__gt_BJS - [16_dd_28_dd_19]_dd_ Load Error_dd_ There was an error loading the model. Unable to import meshes from //part2.glb_dd_ Failed to load scene._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_ As I mentioned in my original post... the model_lt_span style_eq__qt_float_dd_none_sm_background-color_dd_transparent_sm_color_dd_rgb(53_co_60_co_65)_sm_font-family_dd_Roboto_co_ _t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_400_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_ works fine to display locally in the Mixed Reality viewer in Windows 10 and also up in Remix 3D community models page._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KerwinK","Date":"2018-09-18T03:50:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI solved the issue of being able to open a *.glb file on a local drive.  Placing Babylon.viewer.js and part.glb within the same folder and referencing directly as shown below in the snippet (i.e. with no folder path specification) it works. \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_!DOCTYPE html&gt_sm_\n\n&lt_sm_html lang_eq__qt_en_qt_ xmlns_eq__qt_http_dd_//www.w3.org/1999/xhtml_qt_&gt_sm_\n&lt_sm_head&gt_sm_\n    &lt_sm_title&gt_sm_Babylon.js Viewer - Display a 3D model&lt_sm_/title&gt_sm_\n    &lt_sm_!-- &lt_sm_script src_eq__qt_https_dd_//preview.babylonjs.com/viewer/babylon.viewer.js_qt_&gt_sm_&lt_sm_/script&gt_sm_ --&gt_sm_\n    &lt_sm_script src_eq__qt_babylon.viewer.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_/head&gt_sm_\n&lt_sm_body&gt_sm_\n    &lt_sm_!-- &lt_sm_babylon model_eq__qt_https_dd_//models.babylonjs.com/boombox.glb_qt_ templates.main.params.fill-screen_eq__qt_true_qt_&gt_sm_&lt_sm_/babylon&gt_sm_ --&gt_sm_\n    &lt_sm_babylon model_eq__qt_part2.glb_qt_ templates.main.params.fill-screen_eq__qt_true_qt_&gt_sm_&lt_sm_/babylon&gt_sm_ \n&lt_sm_/body&gt_sm_\n&lt_sm_/html&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-18T21:35:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWonderful! \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]