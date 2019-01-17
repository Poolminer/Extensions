[{"Owner":"matthewharwood","Date":"2016-11-02T09:12:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI want to animate a camera between two points. Think of it like a camera on rails. A bit more tricky is that the rails are interconnected. e.g.  Point_dd_ A moves to B  moves to C moves to A moves to D etc. Therefore_co_ any combination could work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn my local example_co_ I have an event that will trigger this switch. For this example lets just use a click or interval to iterate.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPROBLEM/QUESTION_dd__lt_br /_gt_\n\tHow can I reset/append the keyframes of an animation? Typically my logic will either not run or replay the same animation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#U4FO3%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#U4FO3#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope_co_ this animation_co_ I made will help communicate the interaction. _lt_strong_gt_Note that this is the camera moving_co_ not the meshes_lt_/strong_gt_.  At some point_co_ the meshes may slightly move relative to the camera_sm_ however_co_ that_t_s for next iteration.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_div class_eq__qt_ipsEmbeddedVideo_qt__gt_\n\t_lt_div_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt_true_qt_ frameborder_eq__qt_0_qt_ height_eq__qt_344_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/o2sdyxzHQ78?feature_eq_oembed_qt_ width_eq__qt_459_qt__gt__lt_/iframe_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-02T16:41:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello I would rather suggest creating a new one and blending from the previous one_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Animations#animation-blending_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Animations#animation-blending_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"matthewharwood","Date":"2016-11-02T18:11:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks for the quick answer. I_t_ll give this another shot after work.  From the blending tuts and your explanation_co_ If I understand correctly_co_ Do I need to just create a new animation and blend ? If so couldn_t_t I just move the animation into the click event?  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2BLI9T%2384_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2BLI9T#84_lt_/a_gt_  _lt_br /_gt__lt_br /_gt_\n\tOr I need to stopAnimation(prevCamera)_co_ create a new camera_co_ add animation to that camera_co_ push keys frame to new camera_co_ and scene.beginDirectAnimation. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-03T15:50:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou should just need to create a new anim and blend.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"matthewharwood","Date":"2016-11-04T03:20:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ For the life of me_co_ I cannot figure this out. _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2BLI9T%23107_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2BLI9T#107_lt_/a_gt_.  I_t_m missing something fundamental.  I_t_ve created a function that will return keys based on the current position of the camera and a static final destination of the camera. on Click Event the fpsbtn_co_ I create a new animation_co_ set blend_co_ create new keys_co_ set key_co_ reset animations_co_ stop previous animations_co_ and begin new animation. This code is based on the blending playground demo. Unfortunately this code creates a blink of the mesh sphere_sm_ moreover_co_ it doesn_t_t seem to transition the camera at all.  &gt_sm__&lt_sm_ Could I please get more help?_lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-04T13:50:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/21594-camera-boom-prototype/?do_eq_embed&amp_sm_comment_eq_122980&amp_sm_embedComment_eq_122980&amp_sm_embedDo_eq_findComment#comment-122980_qt__gt__lt_/iframe_gt_\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-04T15:36:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNot sure to follow_dd_ the playground you linked is animating the sphere and not the camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tis it expected? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-04T15:39:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tit is not just on the first one... and a sphere is a camera for movement principles_co_ take a look at the later playgrounds the camera is moving on a path.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"matthewharwood","Date":"2016-11-04T17:33:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ I_t_ve updated the playground link slightly here _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2BLI9T%23109_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2BLI9T#109_lt_/a_gt_   _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ _co_ I_t_ll read the camera boom prototype tonight.  It looks like I can learn a lot from that.  At a glance the camera boom prototypes may not solve my problems because there will be a potential infinite* amount of paths because on click animations could be cancelled mid keyframe and sent to a new destination point.  I feel like my playground example has the logic but misses syntax on how to blend these animations with their destination points.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-04T21:34:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThen you just clear the path and add a new one\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"matthewharwood","Date":"2016-11-06T21:20:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ With your Camera Boom demos_co_ I tried to clear the path with just setting to empty array and adding new paths.  Onclick_co_ the animation wont cancel or run the second set of paths. Any ideas on what I_t_m doing wrong? Demo_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#AGOCE%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#AGOCE#14_lt_/a_gt_. _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ Is there anyway to this Camera Boom-esq interaction with only Animation w/bending? \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-09T00:52:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSorry I_t_m a bit under the water so far. I could probably find sometimes between two meeting but I need a simpler repro with just a box and two animations highlighting the problem? (Which is that you cannot use blending despite my initial link_co_ correct?)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-09T02:29:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAs soon as I have time to help I will_co_ my bad Ive been stacked.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"matthewharwood","Date":"2016-11-09T04:48:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div class_eq__qt_ipsEmbeddedVideo_qt__gt_\n\t_lt_div_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt_true_qt_ frameborder_eq__qt_0_qt_ height_eq__qt_344_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/l_FMvg-P8lY?feature_eq_oembed_qt_ width_eq__qt_459_qt__gt__lt_/iframe_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tI drew out what I_t_m trying to accomplish.  I hope it helps a bit more.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"matthewharwood","Date":"2016-11-09T05:06:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2BLI9T%23112_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2BLI9T#112_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_  Here_t_s a sample of two spheres that need to be blended when you click on the FPS counter. The first animations works_sm_ however_co_ the blend doesnt.  I think my logic makes sense but syntax is inncorrect.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-09T05:29:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah editing my script produced for the boom prototype will do that_co_ and you could do that a lot easier with the animation system.  Or even just some dampened lerping without a time delta just a raw lerp.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"matthewharwood","Date":"2016-11-09T05:39:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ Given my playground example how could I do the animation blending so that on click it actually does the blend? _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_table-layout_dd_fixed_sm_width_dd_1416px_sm_line-height_dd_1.6_sm_color_dd_rgb(39_co_42_co_52)_sm_font-size_dd_14px_sm_margin-bottom_dd_20px_sm_margin-top_dd_0px_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t_lt_p style_eq__qt_margin-top_dd_0px_sm_margin-bottom_dd_0px_sm__qt__gt_\n\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2BLI9T%23112_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_color_dd_rgb(60_co_105_co_148)_sm_text-decoration_dd_underline_sm_background-color_dd_transparent_sm__qt__gt_http_dd_//www.babylonjs-playground.com/#2BLI9T#112_lt_/a_gt_.  Sans the messyness of the names of objects and props_co_ I feel like my logic is sound.  I read the blending docs and gave it my best but I just don_t_t get it.\n\t_lt_/p_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-09T05:52:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tA recursive loop that trys to normalize the cameras position to a set point and rotation target. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso camera.lookAt() will prolly help you or what ever it is.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-09T06:01:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo off the top of my head on my phone\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcamera.position _eq_ camera.position.add((camera.position.clone().add(targetvec)).scale(0.5)).scale(dampenamount))\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcamera.lookat(targetvec).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthats like over kill on stringing but yeah that_t_s the idea_co_ put that in a beforeregister function that skips if the cameras position is the same as the current target.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tnot really ideal but very simple and will give you an idea of how to do a better one.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tits kinda similar to finding a forward vector and just moving a mesh along it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-09T06:56:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#Q9GPE%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#Q9GPE#2_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tI just discovered that mesh.lookAt() or camera.lookAt() are crashing the playground so no rotation on this one cause im too tired... and want to go to bed..._lt_br /_gt__lt_br /_gt_\n\tBUT on your local the lookAt should work just fine... this is really rough and cut geter done in like 10 mins but you can tailor it for it to have inertia calculations  to make the camera accelerate and decelerate to target ect_co_ then do the like wise to rotation in radians then just multiply the radians by pi._lt_br /_gt__lt_br /_gt_\n\t***PINGING _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ why is lookAt broken? I used it on a project on 2.4 not less then 24 hours ago and tried on this playground for him to first do it to the camera which was crashing the playground_co_ and then to a blank mesh that the camera was parented to and same result.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"matthewharwood","Date":"2016-11-09T07:06:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ I_t_ll give this a closer look cuz this doesnt make much sense yet.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-09T07:19:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you have two points A_co_B that are seprated by space _dd__lt_br /_gt_\n\tA----------------------------------------------B_lt_br /_gt_\n\ttake half that space\n_lt_/p_gt_\n\n_lt_p_gt_\n\t---------------------- scale it down to what ever range you want_lt_br /_gt_\n\t---------------------- * 0.02 _eq_  _t_-_t__sm_ (something low its going be dependent on your IO speed)_lt_br /_gt_\n\tset Point A_t_s to its position minus that new step and repeat till within a range then snap to the position._lt_br /_gt__lt_br /_gt_\n\tthat would be what i call a raw lerp_co_ no delta calculation (I mean there effectively is because of the IO but yeah... but no but yeah this is a lazy mans lerp)_lt_br /_gt__lt_br /_gt_\n\tYour just finding your mid point cutting it down and then applying it finding a mid point cutting it down applying it..._lt_br /_gt_\n\tThis will work from your model you presented because you dont need curving or waypoints_co_ so a boom system like i first showed you would be over kill._lt_br /_gt__lt_br /_gt_\n\tBUUUUT if you were to use it_co_ you could do a myriad of things if you had a little more understanding of the script_co_ maybe ill make a more legit version and post it here sometime this week if I can get my other priorities done_co_ otherwise we may never have a new CYOS and ill piss off a bunch of clients as well... so yeah umm give me a little bit of time_co_ till them boot up a simple canvas element figure out how to set up a stable subtread IO proccess and start messing with vectors in a 2d environment run some tests get better at liner algebra (not talking smack just real advice i do simple experiments all the time)._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-09T07:29:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.neatflax.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.neatflax.com/_lt_/a_gt__lt_br /_gt__lt_br /_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ has a great example of how to do a rollercoaster and that might help you as well_co_ I think he uses the animation system.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"matthewharwood","Date":"2016-11-09T08:34:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ Bleh... through my poor research seems like BABYLON.Vector3.Lerp() is a static method of the Animation class_sm_ might we use that than the complicated math?\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tFor advanced keyframe animation_co_ you can also define the functions used to interpolate (transition) between keys. By default these functions are the following_dd_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.Animation.prototype.vector3InterpolateFunction _eq_ function (startValue_co_ endValue_co_ gradient) {\n  return BABYLON.Vector3.Lerp(startValue_co_ endValue_co_ gradient)_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBut the more I look into it_co_ it just seems like granularity is unnecessary? It appears that the basic interpolation + blending is good and free( _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ could maybe shed light on this?)  I checked out the rollercoaster example and the problem again is that the track path is created at runtime prior to the animations start.  The paths need are generated off of current camera position (dynamic)  and an end camera position (static).\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_/** Pseudo Code **/\n\n// On click of (B) go from BABYLON.Vector3(0_co_0_co_0) to BABYLON.Vector3(0_co_0_co_-10)_sm_  ( A-&gt_sm_ B)\n\n// Animation completes//\n\n// On click of (C) go from BABYLON.Vector3(0_co_0_co_-10)_sm_ to BABYLON.Vector3(0_co_10_co_0)_sm_ (B -&gt_sm_ C)\n\n// Animation cancels_sm_ animation is incomplete_sm_ Animation changes trajectory from new Event.\n\n// On click of (A) go from current.camera.position to BABYLON.Vector3(0_co_0_co_0) (currentPos -&gt_sm_ A)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]