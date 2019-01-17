[{"Owner":"JBP","Date":"2016-11-07T09:36:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello_co_ can anyone tell me if the current implementation of the Physics engines (oimo_co_ cannon) support Web Worker or its a single thread implementation ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"tips4design","Date":"2016-11-07T16:48:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt_t_s usually not worth running your physics in a separate Web Worker if you need to access the state of the world each frame_co_ as reading/transferring data from the worker thread is costly and doing it each frame might be slow.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-11-07T17:01:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes since version 2.1 Workers is supported for the_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt__lt_span_gt_ _lt_/span_gt_Physics engines (oimo and cannon)_lt_span_gt_ _lt_/span_gt__lt_/span_gt_ _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTutorial_dd_ _lt_a href_eq__qt_https_dd_//blog.raananweber.com/2015/05/26/collisions-using-workers-for-babylonjs/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//blog.raananweber.com/2015/05/26/collisions-using-workers-for-babylonjs/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo enable it to do_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.workerCollisions _eq_ true_sm_  _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2016-11-07T17:06:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSetTimeStep 1/10 on phone with WebView Works smooth as 1/50 on desktop !!! Accuracy of physics work same. I verified this on My Project Perplexus. I have WebView for Android perplexus Project and with 1/10 It Works brilliant. On desktop It Works as fast as Real Perplexus If you ever try this Game. Try experiment on different devices with setTimeStep 1/10 or 1/5 for slower devices.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JBP","Date":"2016-11-07T17:10:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_150253_qt_ data-ipsquote-contentid_eq__qt_26244_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1478538118_qt_ data-ipsquote-userid_eq__qt_5292_qt_ data-ipsquote-username_eq__qt_Dad72_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t7 minutes ago_co_ Dad72 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYes since version 2.1 Workers is supported for the_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt__lt_span_gt_ _lt_/span_gt_Physics engines (oimo and cannon)_lt_span_gt_ _lt_/span_gt__lt_/span_gt_ _dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tTutorial_dd_ _lt_a href_eq__qt_https_dd_//blog.raananweber.com/2015/05/26/collisions-using-workers-for-babylonjs/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//blog.raananweber.com/2015/05/26/collisions-using-workers-for-babylonjs/_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tTo enable it to do_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt_scene.workerCollisions _eq_ _lt_span_gt_true_lt_/span_gt__sm_  _lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHello_co_ but this if for the build in collisions right ?_lt_br /_gt_\n\tI asking for the oimo or cannon plug-in is the _qt_world.step()_qt_ function called inside a Worker ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2016-11-07T17:17:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2B84TV%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2B84TV#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is example of setTimeStep for physics. I did also as Dad72 say. But default 1/50 Works slow. The Real speed was when I add slider gui setings for setTimeStep. SetTimeStep is realy qul staff for slow phones WebView beleave me. If you dont try it\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]