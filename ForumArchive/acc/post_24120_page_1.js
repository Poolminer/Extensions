[{"Owner":"MasterK","Date":"2016-07-28T03:39:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI develop a new Primitive type MY_PRIM base on RenderablePrim2D. And it almost same as Sprite2D\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt works right.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut in this case_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcreate two screenCanvas_co_ add MY_PRIM to each one.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdelete one screenCanvas_co_  there will be webgl errors. And other screenCanvas_t_s MY_PRIM object is not display. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWebGL_dd_ INVALID_OPERATION_dd_ uniform1i_dd_ location not for current program_lt_br /_gt_\n\tbabylon.engine.js_dd_1010 WebGL_dd_ INVALID_OPERATION_dd_ drawElementsInstancedANGLE_dd_ no valid shader program in use\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd if use Sprite2D instead of MY_PRIM_co_ there will be no error and display ok.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_ What should i take care of  to develop a new Primitive type???\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-07-28T11:54:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi again MK.  Could you make a playground that shows the problem?  That would probably help Nockawa and make it easy for others to learn_co_ too.  thx!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-07-29T09:03:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#E5BQM%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#E5BQM#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI create in playground_co_ but dont reproduce the error... And in another computer_co_ there will be same error by chance...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd I try to directly modify babylon.sprite2d.js in my local environment. And the error appears!!!! And I try to get back the original js file_co_ The error didn_t_t disappear!!!!! So confused... Because before i change the file_co_ there_t_s no error with babylon.sprite2d.js\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think it_t_s a bit hard for you to understand... Just look at the PG and check my primtive class ... I dont think the code has problem. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe sprite_t_s texture must be the root of the problem. as it used by effect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-07-29T09:11:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnd another question maybe more clear_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#WEGLG%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#WEGLG#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcan_t_t dispose sprite in canvas2d. \n_lt_/p_gt_\n\n_lt_p_gt_\n\ttried setting Group2D.GROUPCACHEBEHAVIOR_DONTCACHEOVERRIDE for WSC_co_ no effect.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-07-29T11:44:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI track the code. And find when worldSpaceCanvas_t_s sprite2d dispose_co_ the sprite2d effect and effectInstance was release_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo another ScreenCanvas_t_s sprite2d_t_s same effect is diabled.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs that OK? I_t_m not sure_co_ just ask.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_i see you fixed... I_t_ll update.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-07-29T15:36:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_137993_qt_ data-ipsquote-contentid_eq__qt_24120_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1469792680_qt_ data-ipsquote-userid_eq__qt_17014_qt_ data-ipsquote-username_eq__qt_MasterK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ MasterK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI track the code. And find when worldSpaceCanvas_t_s sprite2d dispose_co_ the sprite2d effect and effectInstance was release_co_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tSo another ScreenCanvas_t_s sprite2d_t_s same effect is diabled.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIs that OK? I_t_m not sure_co_ just ask.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_i see you fixed... I_t_ll update.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYep_co_ I_t_ve fixed it_co_ I didn_t_t knew how Effect instance were managed internally_co_ after talking with DK the best thing to do was not releasing the Effect_co_ it_t_s useless.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-07-30T03:21:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_138035_qt_ data-ipsquote-contentid_eq__qt_24120_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1469806561_qt_ data-ipsquote-userid_eq__qt_18979_qt_ data-ipsquote-username_eq__qt_Nockawa_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 hours ago_co_ Nockawa said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYep_co_ I_t_ve fixed it_co_ I didn_t_t knew how Effect instance were managed internally_co_ after talking with DK the best thing to do was not releasing the Effect_co_ it_t_s useless.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tDispose problem is solved.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStill sprite2d not display problem... \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSometime Sprite2DRenderCache.render is not called...And no display...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-07-30T03:39:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twhen render sprite2d_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tin Group2D.prototype._groupRender _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis._renderableData._renderGroupInstancesInfo.forEach(function (k_co_ v) {_lt_br /_gt_\n\t                    // Prepare the context object_co_ update the WebGL Instanced Array buffer if needed_lt_br /_gt_\n\t                    var renderCount _eq_ _this._prepareContext(engine_co_ context_1_co_ v)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tin Group2D.prototype._prepareContext\n_lt_/p_gt_\n\n_lt_p_gt_\n\trenderCount +_eq_ array.usedElementCount_sm_ _lt_span style_eq__qt_color_dd_#FF0000_sm__qt__gt_ (when usedElementCount _eq_ 0 not display (_lt_/span_gt__lt_span style_eq__qt_color_dd_#40E0D0_sm__qt__gt_very much time happens_lt_/span_gt__lt_span style_eq__qt_color_dd_#FF0000_sm__qt__gt_)_co_ when usedElementCount _eq_ 1 _co_ it display)_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-07-30T07:13:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI spotted the issue_co_ if was due to something else_co_ I hope the code is stable now.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-07-30T08:02:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_138094_qt_ data-ipsquote-contentid_eq__qt_24120_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1469862834_qt_ data-ipsquote-userid_eq__qt_18979_qt_ data-ipsquote-username_eq__qt_Nockawa_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t48 minutes ago_co_ Nockawa said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI spotted the issue_co_ if was due to something else_co_ I hope the code is stable now.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tfirst ready display is ok now.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut when i dispose a sprite2d from WSC_co_ it_t_s not disappear.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-07-30T08:19:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_138098_qt_ data-ipsquote-contentid_eq__qt_24120_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1469865767_qt_ data-ipsquote-userid_eq__qt_17014_qt_ data-ipsquote-username_eq__qt_MasterK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t44 minutes ago_co_ MasterK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tfirst ready display is ok now.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tBut when i dispose a sprite2d from WSC_co_ it_t_s not disappear.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tOk it_t_s fixed with the commit_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1287/commits/c05e2683b97ecfedfd20aec0561109ecf73e440d_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1287/commits/c05e2683b97ecfedfd20aec0561109ecf73e440d_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA PR is on its way.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]