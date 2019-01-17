[{"Owner":"Lykos","Date":"2016-12-31T14:18:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis is my first post here. Firstly I want to say thanks to this community_co_ because almost everything I was trying to work with in babylon_co_ was already really well explained here.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to ask a question about making a 2D UI on babylon. At first I saw the bGUI_co_ which was deprecated in favor of Canvas2D... but I cannot make it work. Here is a link to a playground actually working _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#FFTQL%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#FFTQL#5 _lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried to get the zip and run the same code on my browser and unfortunately it doesn_t_t work. As I tried to figure out what was wrong_co_ I found this in browser console\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_TypeError_dd_ BABYLON.ScreenSpaceCanvas2D is not a constructor_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI think that maybe there is something wrong with the babylon.js version I_t_m using_co_ but I can_t_t figure it out. Looked as well in the Canvas2D documentation and I (hopefully) didn_t_t miss anything.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for any help _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jpdev","Date":"2017-01-01T13:47:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe exported file is missing this line_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-family_dd_monospace_sm_font-size_dd_medium_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre-wrap_sm_word-spacing_dd_0px_sm__qt__gt_&lt_sm_script _lt_span_gt_src_lt_/span_gt__eq__qt__lt_a href_eq__qt_https_dd_//babylonjs.azurewebsites.net/babylon.canvas2d.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//babylonjs.azurewebsites.net/babylon.canvas2d.js_lt_/a_gt__qt_&gt_sm__lt_/span_gt__lt_span style_eq__qt_font-family_dd_monospace_sm_font-size_dd_medium_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre-wrap_sm_word-spacing_dd_0px_sm__qt__gt_&lt_sm_/script&gt_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_medium_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre-wrap_sm_word-spacing_dd_0px_sm_float_dd_none_sm__qt__gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAdd it after the script line for babylon-js itself (line 12). Then the exported html file works fine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think this is a playground-exporter bug. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen creating a project locally_co_ if you want canvas2d functions_co_ download the canvas2d.js from the babylon repository (in the dist directory on github)._lt_br /_gt_\n\tCanvas2d is in it_t_s own file_co_ because not every project needs it_co_ to keep the main babylon file size small.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Lykos","Date":"2017-01-01T14:23:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_157171_qt_ data-ipsquote-contentid_eq__qt_27371_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1483278443_qt_ data-ipsquote-userid_eq__qt_6173_qt_ data-ipsquote-username_eq__qt_jpdev_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t34 minutes ago_co_ jpdev said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe exported file is missing this line_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_font-family_dd_monospace_sm_font-size_dd_medium_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre-wrap_sm_word-spacing_dd_0px_sm__qt__gt_&lt_sm_script _lt_span_gt_src_lt_/span_gt__eq__qt__lt_a href_eq__qt_https_dd_//babylonjs.azurewebsites.net/babylon.canvas2d.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//babylonjs.azurewebsites.net/babylon.canvas2d.js_lt_/a_gt__qt_&gt_sm__lt_/span_gt__lt_span style_eq__qt_font-family_dd_monospace_sm_font-size_dd_medium_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre-wrap_sm_word-spacing_dd_0px_sm__qt__gt_&lt_sm_/script&gt_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd_monospace_sm_font-size_dd_medium_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre-wrap_sm_word-spacing_dd_0px_sm_float_dd_none_sm__qt__gt_ _lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAdd it after the script line for babylon-js itself (line 12). Then the exported html file works fine.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI think this is a playground-exporter bug. \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWhen creating a project locally_co_ if you want canvas2d functions_co_ download the canvas2d.js from the babylon repository (in the dist directory on github)._lt_br /_gt_\n\t\t\tCanvas2d is in it_t_s own file_co_ because not every project needs it_co_ to keep the main babylon file size small.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWorked like a charm! It makes sense that_t_s on a separate js to include_co_ but I could_t_t find your answer on the documentation (maybe I mislooked it _dd_\\ ). If not_co_ I would suggest to add it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]