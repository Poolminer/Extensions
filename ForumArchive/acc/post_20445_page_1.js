[{"Owner":"Nockawa","Date":"2016-02-10T21:46:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk guys_co_ I know this is not strictly about BabylonJS_co_ but I hope that some of you already faced this issue and have an answer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy HTML skills are very close to...nothing_co_ but I spent a good amount of time searching_co_ trying before asking for help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll I want to do is using Bootstrap to create an header and footer_co_ and I want my canvas to take the WHOLE space available between these header &amp_sm_ footer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there really no way to get out of this without some JavaScript code? What is the best way to go ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve made a fiddle for you to understand clearly what I_t_d like to achieve.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//jsfiddle.net/nockawa/z0L72nn1/33/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//jsfiddle.net/nockawa/z0L72nn1/33/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2016-02-10T21:57:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is a CSS related question.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust do this in your CSS _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_#myCanvasID {\n   width_dd_ 100%_sm_\n   height_dd_ 100%_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tWhere myCanvasID is the id of your HTML canvas element.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-02-10T22:06:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHave you looked at the fiddle?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI believe I already does that_co_ and still it doesn_t_t work... _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JazzAceman","Date":"2016-02-10T22:20:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMake sure that all parent elements are also set to 100% width / height.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-02-10T22:29:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\traaaaaaaaah_co_ at last !!! I_t_ve made it! I analyses the CSS of the Babylonjs playground_co_ replicate everything until I could find the answer and also the culprit !\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//jsfiddle.net/nockawa/z0L72nn1/34/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//jsfiddle.net/nockawa/z0L72nn1/34/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn my case I was doing EVERYTHING right_co_ except one little tiny thing_dd_ the bootstrap container must be defined with _qt_position_dd_ absolute_qt_ then I use the top/bottom/height to specify the placement of it_co_ and it works !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHTML/CSS are a mess...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]