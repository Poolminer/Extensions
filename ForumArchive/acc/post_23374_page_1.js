[{"Owner":"V!nc3r","Date":"2016-06-23T08:09:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy scene is an apartment_co_ and i want one cubemap for each room. I could generate it with precalculated render engine (vray_co_ cycles_co_ etc) but it force to reset &amp_sm_ redo all materials of the scene_co_ just for 6 texture generation...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo i think it_t_s easier to generate cubemap once during application launch. I suppose i just have to create one probe per room_co_ on their center_co_ with their refresh rate set to _lt_em_gt_once_lt_/em_gt_ _sm_ plus its allow to regenerate on demand if the user make change on material settings (change wood floor to tiles for example). Here are my questions _dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\thow can i easily push all the scene during the generation_co_ in each probes ?\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tit is possible to push meshes which already use the probe on their reflection texture (is this will generate conflict) ?\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\tThanks _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-23T15:32:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. After loading the scene_co_ just run it in the onload handler\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. This will not be a problem _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vijay Kumar","Date":"2016-06-24T03:53:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi V!nc3r_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcan you please share  your code  so that i can refer the code_co_ as i am  also working on similar kind of project .where i need shadows for more than 4 lights_co_ 2 mirror_t_s and more than 10 meshes which need reflection probe . \n_lt_/p_gt_\n\n_lt_p_gt_\n\twhen i assigning all these_co_ the scene is getting very slow.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tplease share your thoughts _co_how you doing things to improve scene performance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcould you please explain me about _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_1. After loading the scene_co_ just run it in the onload handler_lt_/span_gt_ . \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2016-06-24T07:21:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ i saw in the doc that we can assign meshes to probe like this _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_probe.renderList.push(myMesh)_sm_\nprobe.renderList.push(myOtherMesh)_sm_\nprobe.renderList.push(...)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSo i wrote a little code _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_pushMeshesToProbe(myProbe_co_[_qt_myMesh_qt__co__qt_myOtherMesh_qt__co__qt_..._qt_]_co_ scene)_sm_\n\nfunction pushMeshesToProbe(probe_co_ meshesList_co_ scene) {\n\t\t\tfor(var i _eq_ 0_sm_ i &lt_sm_ meshesList.length_sm_ i++) {\n\t\t\t\tif(scene.getMeshByName(meshesList[i])){\n\t\t\t\t\tprobe.renderList.push(scene.getMeshByName(meshesList[i]))_sm_\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn null_sm_\n\t\t}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBut in this case i still have to write name of each meshes for the meshesList array. Is their a magic function which say _qt__lt_em_gt_hey_co_ you see all these meshes ? select theim !_lt_/em_gt__qt_ _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18131-vijay-kumar/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18131_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18131-vijay-kumar/_qt_ rel_eq__qt__qt__gt_@Vijay Kumar_lt_/a_gt_ no pb_co_ but be patient _t_cause i_t_m not a dev_co_ so i wrote some not-optimized pieces of code. Have you already set a _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/tutorials/How_to_use_Reflection_probes_qt_ rel_eq__qt_external nofollow_qt__gt_refreshrate _lt_/a_gt_?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vijay Kumar","Date":"2016-06-24T10:21:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tfor(var i _eq_ 0_sm_ i &lt_sm_ scene.meshes.length_sm_ i++) {_lt_br /_gt_\n\t                if(scene.meshes_lt_em_gt_.parent.name.includes(_qt_meshparent_qt_)){_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t                    probe.renderList.push(scene.getMeshByName(scene.meshes_lt_/em_gt__lt_em_gt__lt_em_gt_)_sm__lt_/em_gt__lt_/em_gt__lt_br /_gt__lt_em_gt__lt_em_gt_\n\t                }_lt_/em_gt__lt_/em_gt__lt_br /_gt__lt_em_gt__lt_em_gt_\n\t            }\n_lt_/em_gt__lt_/em_gt__lt_/p_gt_\n_lt_em_gt__lt_em_gt_\n\n_lt_/em_gt__lt_/em_gt__lt_p_gt__lt_em_gt__lt_em_gt_\n\tlike this i am filtering the meshes from the scene_co_ making all the necessary meshes as child to a parent_co_ so that i can includes only these meshes in reflection probe.\n_lt_/em_gt__lt_/em_gt__lt_/p_gt_\n_lt_em_gt__lt_em_gt_\n\n_lt_/em_gt__lt_/em_gt__lt_p_gt__lt_em_gt__lt_em_gt_\n\tpreviously i didn_t_t used any refreshrate_co_ but now i am using  _lt_/em_gt__lt_/em_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Inconsolata_sm_font-size_dd_16px_sm_font-style_dd_normal_sm_font-weight_dd_300_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(240_co_240_co_240)_sm_float_dd_none_sm__qt__gt__lt_em_gt__lt_em_gt_probe.refreshRate _eq_ _lt_/em_gt__lt_/em_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_128_co_128)_sm_font-family_dd_Inconsolata_sm_font-size_dd_16px_sm_font-style_dd_normal_sm_font-weight_dd_300_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm__qt__gt__lt_em_gt__lt_em_gt_BABYLON_lt_/em_gt__lt_/em_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Inconsolata_sm_font-size_dd_16px_sm_font-style_dd_normal_sm_font-weight_dd_300_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(240_co_240_co_240)_sm_float_dd_none_sm__qt__gt__lt_em_gt__lt_em_gt_._lt_/em_gt__lt_/em_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_128_co_128)_sm_font-family_dd_Inconsolata_sm_font-size_dd_16px_sm_font-style_dd_normal_sm_font-weight_dd_300_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm__qt__gt__lt_em_gt__lt_em_gt_RenderTargetTexture_lt_/em_gt__lt_/em_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Inconsolata_sm_font-size_dd_16px_sm_font-style_dd_normal_sm_font-weight_dd_300_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(240_co_240_co_240)_sm_float_dd_none_sm__qt__gt__lt_em_gt__lt_em_gt_._lt_/em_gt__lt_/em_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_128_co_128)_sm_font-family_dd_Inconsolata_sm_font-size_dd_16px_sm_font-style_dd_normal_sm_font-weight_dd_300_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm__qt__gt__lt_em_gt__lt_em_gt_REFRESHRATE_RENDER_ONCE_lt_/em_gt__lt_/em_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Inconsolata_sm_font-size_dd_16px_sm_font-style_dd_normal_sm_font-weight_dd_300_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(240_co_240_co_240)_sm_float_dd_none_sm__qt__gt__lt_em_gt__lt_em_gt__sm__lt_/em_gt__lt_/em_gt__lt_/span_gt__lt_em_gt__lt_em_gt_\n_lt_/em_gt__lt_/em_gt__lt_/p_gt_\n_lt_em_gt__lt_em_gt_\n\n_lt_/em_gt__lt_/em_gt__lt_p_gt__lt_em_gt__lt_em_gt_\n\tnow the scene performance is very good.\n_lt_/em_gt__lt_/em_gt__lt_/p_gt_\n_lt_em_gt__lt_em_gt_\n\n_lt_/em_gt__lt_/em_gt__lt_p_gt__lt_em_gt__lt_em_gt_\n\ti am very much worried about shadows when i use shadowgenerator for than 4 lights the scene is damn slow.\n_lt_/em_gt__lt_/em_gt__lt_/p_gt_\n_lt_em_gt__lt_em_gt_\n\n_lt_/em_gt__lt_/em_gt__lt_p_gt__lt_em_gt__lt_em_gt_\n\tfor example_dd_ in hall atleast we should have 10 point light and shadows and when we apply shadows for all of them it is very slow.\n_lt_/em_gt__lt_/em_gt__lt_/p_gt_\n_lt_em_gt__lt_em_gt_\n\n_lt_/em_gt__lt_/em_gt__lt_p_gt__lt_em_gt__lt_em_gt_\n\tdo you have any suggestion to overcome this issue.\n_lt_/em_gt__lt_/em_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-24T14:46:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDo you really need 10 dynamic lights??? And by the way you can also set the refreshRate of your shadows to Once\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vijay Kumar","Date":"2016-06-24T15:02:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Deltakosh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_i have two questions _dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_ol_gt__lt_li_gt_\n\t\thow to keep refresh rate of _lt_strong_gt_shadow _lt_/strong_gt_to once because the content is static.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\thow to keep refresh rate of _lt_strong_gt_mirror _lt_/strong_gt_to once because the content is static.\n\t_lt_/li_gt_\n_lt_/ol_gt__lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-25T17:54:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t1. Easy_dd_ shadowGenerator.getShadowMap().refreshRate _eq_ BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONCE_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Impossible_dd_ the mirror rendering depends on the position of the viewer\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]