[{"Owner":"focomoso","Date":"2017-10-31T18:12:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI updated to 3.1.0-alpha3.6 and am now getting the error_dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_Uncaught TypeError_dd_ Cannot read property _t_removeEventListener_t_ of null_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhen I call engine.dispose(). The line in question is_dd_\n_lt_/p_gt_\n\n_lt_pre style_eq__qt_background-color_dd_rgba(206_co_17_co_38_co_.05)_sm_color_dd_#293238_sm_font-size_dd_11px_sm_padding_dd_.5em_sm_text-align_dd_left_sm__qt__gt_\n_lt_code_gt__lt_span style_eq__qt_background-color_dd_#fccfcf_sm__qt__gt__lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#c80000_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_color_dd_#881280_sm__qt__gt_._lt_/span_gt__lt_span_gt__renderingCanvas_lt_/span_gt__lt_span style_eq__qt_color_dd_#881280_sm__qt__gt_._lt_/span_gt__lt_span_gt_removeEventListener(_lt_/span_gt__lt_span style_eq__qt_color_dd_#1155cc_sm__qt__gt__qt_focus_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#881280_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#c80000_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_color_dd_#881280_sm__qt__gt_._lt_/span_gt__lt_span_gt__onCanvasFocus)_lt_/span_gt__lt_span style_eq__qt_color_dd_#881280_sm__qt__gt__sm__lt_/span_gt__lt_/span_gt__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_s_gt_The canvas has been disposed of elsewhere and_lt_/s_gt_ Edit_dd_ the canvas is still defined when the dispone() is called. I need to dispose of the context because this app opens and closes the gl canvas repeatedly and will evntually give a _qt_Too many active WebGL contexts._qt_ warning.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a way to dispose of the context without calling .dispose()? Or is there a way to have the .dispose() method only try to remove listeners if the canvas is still defined?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"focomoso","Date":"2017-10-31T20:05:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI did some more digging and it seems that the framework I_t_m using (React) cleans up the canvas while the dispose method is being called. All we need to fix this is to add an if (this._renderingCanvas) {} around the _renderCanvas.removeEventListener calls.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"focomoso","Date":"2017-10-31T20:33:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tStrange... I went to do a pr to make this change myself and the version babylonjs@3.1.0-alpha3.6 already has this in_co_ but when I get the package with npm_co_ it_t_s not there... \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-10-31T21:47:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah we did not updated npm yet _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-11-01T12:53:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWill arrive in babylonjs@3.1.0-alpha3.7_co_ we will publich a new npm package soon.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]