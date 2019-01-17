[{"Owner":"notjesseolsson","Date":"2014-10-26T16:10:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Using the new babylon.js 1.14 I created a simple blender scene and loaded it with babylon_co_ and the loading animation from the babylonjs.com appeared while it loaded. No offense to the babylon.js team_co_ but I don_t_t find it to be the prettiest of loading animations. Can this be disabled? My code is literally from here_dd_ _lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2013/06/28/babylon-js-how-to-load-a-babylon-file-produced-with-blender.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2013/06/28/babylon-js-how-to-load-a-babylon-file-produced-with-blender.aspx_lt_/a_gt_._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"macguyvok","Date":"2014-10-26T17:30:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It certainly can. From _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/Using-AssetsManager_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt__dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ _t_Segoe UI_t__co_ Arial_co_ freesans_co_ sans-serif_sm__qt__gt_If you want to disable the loading screen_co_ you have to set _lt_/span_gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_assetsManager.useDefaultLoadingScreen_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ _t_Segoe UI_t__co_ Arial_co_ freesans_co_ sans-serif_sm__qt__gt_ to false._lt_/span_gt__lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Should be all you need to do.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"notjesseolsson","Date":"2014-10-26T18:09:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks macguyvok. From his link I found that you have to do the following_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.SceneLoader.ShowLoadingScreen _eq_ false_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]