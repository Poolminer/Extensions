[{"Owner":"BangTao","Date":"2017-01-17T11:07:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tseems like i should recomputed the coordinates every time i changed the mesh_t_s position(after move or after animation). i can_t_t get the position use the method(↓)\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh.getVerticesData(BABYLON.VertexBuffer.PositionKind)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t i don_t_t know how to deal with it.Can some body give me some advices or PG?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThx......Problems never stop coming for me ....\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-01-17T11:23:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI give my apologies to you now but I personally can no longer help you for the reasons given in these topics\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/27698-can-i-get-meshs-all-vectors-position/?do_eq_embed&amp_sm_comment_eq_159466&amp_sm_embedComment_eq_159466&amp_sm_embedDo_eq_findComment_qt__gt__lt_/iframe_gt__lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/27681-two-questions-about-facetdata-and/?do_eq_embed&amp_sm_comment_eq_159099&amp_sm_embedComment_eq_159099&amp_sm_embedDo_eq_findComment_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tI know if is very frustrating for you to keep getting problems but for me I am not getting enough information to help you further. I hope others might be able to help.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-01-17T11:34:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank u anyway.and you are very nice!_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-01-17T12:44:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou need to understand first what the local space is (where the positions are set) and what the world space is (where these positions are translated according to what we call the mesh world matrix).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease have read and a look at all this material before _dd_ _lt_a href_eq__qt_https_dd_//www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-17T12:46:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   Hey BT_co_ you might want to try mesh.bakeCurrentTransformIntoVertices()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn psuedo_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmove mesh      and/or..._lt_br /_gt_\n\tscale mesh      and/or..._lt_br /_gt_\n\tposition mesh     then..._lt_br /_gt_\n\tmesh.bakeCurrentTransformIntoVertices()     This sets mesh.position_co_ .rotation_co_ and .scaling all to 0_co_ but keeps mesh state unchanged.  Lastly..._lt_br /_gt_\n\tvar myMovedVerts _eq_ mesh.getVerticesData(BABYLON.VertexBuffer.PositionKind)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe vertex positions  (the myMovedVerts data) will NOW be changed... matching new mesh transformations. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThey have changed because you _qt_baked_qt_ the vertices... to match the new mesh .position_co_ .rotation_co_ and .scaling. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe this helps.  Hope so.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Please learn to create _lt_a href_eq__qt_http_dd_//babylonjs-playground.azurewebsites.net/_qt_ rel_eq__qt_external nofollow_qt__gt_playground_lt_/a_gt_ examples_co_ if possible_co_ as JohnK asks.  When forum helpers can _qt_see the problem_qt_... in a BJS playground example_co_ it is much easier for us to help.  Do your best.  thanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-17T18:51:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello just to be sure. You do not want to move a mesh like mesh.position.x _eq_ ... ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you explain what you want to achieve?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-01-18T00:50:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you are working with positions that you get from \n_lt_/p_gt_\n\n_lt_p_gt_\n\tmesh.getVerticesData(BABYLON.VertexBuffer.PositionKind)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou_t_ll need to use_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBABYLON.Vector3.TransformCoordinates\n_lt_/p_gt_\n\n_lt_p_gt_\n\tor\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBABYLON.Vector3.TransformCoordinatesRef\n_lt_/p_gt_\n\n_lt_p_gt_\n\tto transform the positions from local space to world space.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#GAY2K%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#GAY2K#0_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-01-18T01:18:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_thank u _co_look at these two pics._lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11257_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/587ebd7ddc129_)1NH8F@F0M3U4CE5(5M.png.2945fb3c714f3f3f7b8eb16672f3c061.png_qt_ alt_eq__qt_)1NH8F}@F0M3U4C%E5[%(5M.png_qt_ /_gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11260_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/587ebdec2df4c_@RQ()G1H70DMOM3RM(VQN.png.0152ca232ad2240cb1ab5f09775d1a0b.png_qt_ alt_eq__qt_@RQ{()G1H70DMO{M3RM(VQN.png_qt_ /_gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11258_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/587ebd7f6119c_Y345)VO5@OSP8TZ23XJQ.png.62798df3988488419b24c2ef6c37e75d.png_qt_ alt_eq__qt_Y{345)VO[5%@OSP8TZ23XJQ.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI wanna add event (get current all vertexes data )to every frame(from 0 to 100) of the animation.and i did what _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ says_co_but the position not correct，when i annotation the code.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_//getKeyFrameEvents(mod_co_states_co_C)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t it like this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11261_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/GIF1.gif.a8c4c5642490ba741e5048c9d8f6e158.gif_qt_ alt_eq__qt_GIF1.gif_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tbut if i open it _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11262_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/GIF2.gif.c71470954f3fbdfe645cecfab4195555.gif_qt_ alt_eq__qt_GIF2.gif_qt_ /_gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11263_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/587ec0d9d67cc_HGH181HT0IRRLTQUM)C8R.png.d9159b51061d4583ef04bcf6b7cd726a.png_qt_ alt_eq__qt_HGH181HT0IRRLTQ~UM)C[8R.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI think i have get al the vertexes data_co_the ball is not at the right position///\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/587ec22e21275_6CG2PB(0FSF@WZJR52T.png.fb0ade2b79761b2749612f22656e147b.png_qt_ data-fileid_eq__qt_11264_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11264_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/587ec22e6f26f_6CG2PB(0FSF@WZJR52T.thumb.png.e85e4c0caca2800b6cb1e45cc5450bcd.png_qt_ alt_eq__qt_6`CG}2PB(0FSF@WZ~JR5]2T.png _qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-01-18T08:35:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m not sure i understand everything that_t_s going on here_co_ or why.. but_co_ why not just change the mesh.position.y?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1NF8VG%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1NF8VG#1_lt_/a_gt_ babylonJs is awesome.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-01-18T09:33:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tit_t_s like _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#251XZI%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#251XZI#0_lt_/a_gt_ _co__co__co_the y get large~~~~~~i wanna attach events to animations (every frame) to do something ...but i don_t_t know how to add these evens\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-01-18T09:52:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25175-bangtao/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25175_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25175-bangtao/_qt_ rel_eq__qt__qt__gt_@BangTao_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can get the current frame of the animation like this_sm_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#251XZI%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#251XZI#4_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-01-18T10:54:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe previous PG I did for you _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9WUJN%2317_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9WUJN#17_lt_/a_gt_ did _lt_strong_gt_already_lt_/strong_gt_ showed you how to add an event to an animation. However now you have given me an playground of your own to work from I can help a little further but please try to read and understand any code given in help and how you might learn from it for your own use..\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst of all scene.registerBeforeRender and creating an animation are two completely different ways of animating an object and you do not use both at the same time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe following PG just uses your animation and I have removed the scene.registerBeforeRender loop and have added events on some frames _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#251XZI%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#251XZI#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis PG just uses the scene.registerBeforeRender loop and I have removed the animation  and actions are undertaken at different render counts  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#251XZI%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#251XZI#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease study these two playgrounds how they are different to each other and how they are different to yours.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso as far as I can see\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh.getVerticesData(BABYLON.VertexBuffer.PositionKind)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tas no relevance at all to what you are trying to achieve. This I have removed from both the PGs above.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease_co_ please_co_ please try to read some of the tutorials you have been given links to_co_ if English is a problem can you find anybody to help you with the translation?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-01-18T11:10:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_I know_co_and i have learned a lot with your help_co_i know how to add event.how to create animation and so on_co__co__co_but ....if there r many event to add_co_then i wanna use loop to achieve what i want( _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#251XZI%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#251XZI#7_lt_/a_gt_)_co_but it didn_t_t work.and then i write some recursive function_co_and can add event just like the _qt_loop_qt_.but  there there_t_s a new problem which is the last post ...\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-01-18T11:48:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t  The problem here is a javascipt one rather than a BJS one. Something to do with callback functions or passing parameters to an anonymous function or something like that - beyond my capabilities however.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-01-18T12:45:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25175-bangtao/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25175_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25175-bangtao/_qt_ rel_eq__qt__qt__gt_@BangTao_lt_/a_gt_ _lt_br /_gt_\n\tThis is because the for..loop is long over and the index (or _qt_ i _qt_) value is 4 by the time any of the events are fired_co_ so all boxes are created at the same position_co__lt_br /_gt__lt_br /_gt_\n\twe can by-pass this by using a function to create the event_co_ this way we save a local _qt_copy_qt_ of the index value inside the function and are able to save it to each event._lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#251XZI%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#251XZI#10_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-01-18T14:03:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25175-bangtao/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25175_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25175-bangtao/_qt_ rel_eq__qt__qt__gt_@BangTao_lt_/a_gt_ just realised that the animationEvent stores the frame number as a property so can do this _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#251XZI%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#251XZI#11_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever depending on what events you want to happen on each frame this might not be the way to go about it. You might be able to do what you want without animationevents and just use a collection of animations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould you please draw some key frames showing the objects you want to animate and where they are in the key frames and what they might look like.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt least please try to describe in words\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor example\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlane circles around the sky every few seconds it drops a parachute which falls to the ground\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-01-19T08:08:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ for (var i _eq_ 0_sm_ i &lt_sm_ mod.animations[0].getKeys().length_sm_ i++) {\n    newEvent(i)_sm_\n }\n function newEvent(i) {\n    mod.animations[0].addEvent(new BABYLON.AnimationEvent(i_co_ function () {\n    get2dData(copyNewVertexes(mod.animations[0].getKeys()[i].value.x_co_mod.animations[0].getKeys()[i].value.y_co_mod.animations[0].getKeys()[i].value.z))_sm_\n    }_co_ true))_sm_\n }\n function copyNewVertexes(x_co_y_co_z){\n    var verticesTemp _eq_ []_sm_\n    var count _eq_0_sm_\n    for(var i_eq_0_sm_i&lt_sm_verticesOrigin.length_sm_i++){\n        verticesTemp[count++]_eq_verticesOrigin[i]+x_sm_\n        verticesTemp[count++]_eq_verticesOrigin[i+1]+y_sm_\n        verticesTemp[count++]_eq_verticesOrigin[i+2]+z_sm_\n        i+_eq_2_sm_\n     }\n     verticesAll.push(verticesTemp)_sm_\n     return verticesTemp_sm_\n  }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you_co_i finally make it with your help!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-01-19T08:29:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGlad you made what you wanted pity we never saw the final version in a playground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-01-19T11:19:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYes_co_ please show us the result.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-01-19T12:04:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_finally_co_here.just a simples._lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#251XZI%2316_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#251XZI#16_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]