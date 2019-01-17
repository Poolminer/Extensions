[{"Owner":"javalang","Date":"2017-04-04T10:17:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhat is the best way to load an external script in playground? I have a playground and every time I start the browser an error message is displayed _lt_strong_gt__qt_Compilation error_lt_br /_gt_\n\tLine 7_dd_15 - BABYLONX is not defined_qt_. _lt_/strong_gt_If I press then the run button_co_ everything works fine. I tried to move the document.appendChild()  outside the createScene() function but no change.  Maybe there is a better aproach?\n_lt_/p_gt_\n\n_lt_p_gt_\n\there is the playground_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1MYQ3T%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1MYQ3T#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_ I_t_ve tried following_co_ but also without success_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_$.holdReady(true)_sm_\n$.getScript(_qt_https_dd_//rawgit.com/androdlang/Extensions/master/ClonerSystem/src/babylonx.cloner.js_qt__co_ function() {\n     $.holdReady(false)_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-04-04T16:29:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve found a workaround but it_t_s really a hack\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var createScene _eq_ function () {\nvar url _eq_ _qt_https_dd_//rawgit.com/androdlang/Extensions/master/ClonerSystem/src/babylonx.cloner.js_qt__sm_\nvar s _eq_ document.createElement(_qt_script_qt_)_sm_\ns.src _eq_ url_sm_document.head.appendChild(s)_sm_\nvar run_eq_document.getElementById(_qt_runButton_qt_)_sm_\nif (typeof BABYLONX _eq__eq__eq_ _t_undefined_t_) {\n    // variable is undefined\n    setTimeout(function(){run.click()_sm_}_co_500)  \n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1MYQ3T%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1MYQ3T#10_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-04-04T17:06:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys!  How about one more version?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1MYQ3T%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1MYQ3T#14_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMight work_co_ might not.  I sound _t_sure_t_ of myself_co_ eh?  heh.  I avoided demo.scene.  I guess it wasn_t_t needed.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-04T17:15:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIf you want I can add the Cloner System by default on the PG\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-04-04T17:49:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ Unfortunately there is a default constructor which detects empty arguments and instanciates an engine and a scene in parallel. So each time you reload_co_ the whole scene is getting slower and slower. My idea was to absolutly minimize the overhead code for the demo.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ Yes that would be fine_co_ but on the other hand I will you not overload with pull requests (there will be a lot of activities next time) . If  you could include my repro (_lt_a href_eq__qt_https_dd_//rawgit.com/androdlang/Extensions/master/ClonerSystem/src/babylonx.cloner.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//rawgit.com/androdlang/Extensions/master/ClonerSystem/src/babylonx.cloner.js_lt_/a_gt_) that would be fine _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-04T17:52:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI prefer referencing the main repo _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tCan you update these files?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Playground/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Playground/index.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Playground/frame.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Playground/frame.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Playground/debug.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Playground/debug.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo worry for PR _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ I_t_m a github addict\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-04-04T18:43:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tPERFECT!!! Thank you\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPG is working now as expected_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1MYQ3T%2316_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1MYQ3T#16_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2017-04-04T19:21:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAnd to answer the question_co_ for futur forum users _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.tools.ts#L460_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.tools.ts#L460_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]