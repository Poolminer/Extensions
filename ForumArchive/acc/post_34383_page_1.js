[{"Owner":"BurtGummer","Date":"2017-12-04T19:26:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m evaluating webgl frameworks for some projects and I_t_ve noticed a much higher CPU load for babylon.js demos than three.js demos_co_ even ones that aren_t_t updating anything!  Even the basic scene in the playground  is running at 40% CPU_co_ nothing moving_co_ in a hidden tab! (I_t_m not sure why that_t_s happening_co_ I though requestAnimationFrame was supposed to not run in background_co_ maybe its a chromebook thing.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can make a few guesses as to why_co_ maybe since babylon.js is a _t_game engine_t_ its doing a lot more in the loop_co_ or maybe there_t_s just something wrong with it running on my chromebook.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf everything is in fact acting normally maybe its acceptable for this higher load since a game would have the users undivided attention anyway.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes this mean that Babylon.js would be a poor choice for things that run on the _t_side_t__co_ like a graphical tool or demo?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan I trim things out of babylon.js that might be contributing to the load?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-12-05T08:04:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29545-burtgummer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29545_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29545-burtgummer/_qt_ rel_eq__qt__qt__gt_@BurtGummer_lt_/a_gt_ hi and welcome \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks to start this post\n_lt_/p_gt_\n\n_lt_p_gt_\n\tactually some samples can_t_t be compared each other but if you tell 2 exact sample we can notice that  and tell exact reason \n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut anyway i wanna  share my experience about loading and rendering in webgl (in browser not mobile) \n_lt_/p_gt_\n\n_lt_p_gt_\n\t4 resource available to use  _lt_strong_gt_ GPU _co_ CPU  _co_ Ram (SmartArray_co_Js default array) _co_  Storage (indexed DB)_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand 3 different state   _lt_strong_gt_First time Load _co_ Load _co_Live Render (frame render _co_ bone  &amp_sm_ rig_co_ physics_co_morph _co_ Live Reflects_co_shadow _co_ PostProcess )_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsome time we use _lt_strong_gt_WorkerProcesser _lt_/strong_gt_ for load and cache in background for have more _lt_strong_gt_stable and fast load _lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tso you most compare all this stuff and notice how much heavy 2 compared scene from each others  (textures and polygon vertex count)\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti am sure all engine have flexibility tools for make user wanted optimize and resource using but this is important witch have more tools and flexibility and community for support\n_lt_/p_gt_\n\n_lt_p_gt_\n\tso if we have exact samples we can find any bug and fix that \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt_*if you wanna do anything in GPU ping me i promise you have my best try for that_lt_/u_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tregards Naz.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-12-05T10:04:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCould you please show us some comparable demos ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-05T16:37:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not experiencing the same thing as you but here are a few pointers_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- By default Babylon.js relies on a engine.runRenderLoop which internally will use the RequestAnimationFrame (which is supposed to be called only when tab is active _dd_))\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- This way_co_ the rendering will be executed 60 times per sec. If your scene is simple the CPU should be around 0.5 to 3% due to scene traversal mostly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- You can at any time decide to render only when you want by NOT using the runRenderloop function but instead call manually scene.render()\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Even with the runRenderloop function we provide a boolean to stop rendering if the tab is not focused with engine.renderEvenInBackground _eq_  false (true by default)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor instance here is the PG running on my computer_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/image.png.36f1a48e5eee15af766a5a40451f5c8e.png_qt_ data-fileid_eq__qt_16119_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16119_qt_ data-unique_eq__qt_g81njfsu4_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/image.thumb.png.d8305e4e7c38b5b1096de3cccaae3ab4.png_qt_ alt_eq__qt_image.png_qt__gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BurtGummer","Date":"2017-12-05T18:20:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIts a little confusing since I_t_m using a chromebook.  The window manager and desktop manager are also chrome_co_ or something like that.   \n_lt_/p_gt_\n\n_lt_p_gt_\n\tComparing demos and the top two CPU threads with guessed averages as I stared at htop for about 10 seconds.  Maybe its a clue that the second chrome process in both these examples (the 18% and the 23%) have a command line switch _qt_--type gpu-process_qt_  and are fairly equal_co_ but the top processes (also chrome) might be the _t_window_t_ or _t_window render_t_ process.  Note that I picked a three.js demo that appears more elaborate.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//threejs.org/examples/#webgl_lights_pointlights_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//threejs.org/examples/#webgl_lights_pointlights_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t20% CPU\n_lt_/p_gt_\n\n_lt_p_gt_\n\t18% CPU\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/_lt_/a_gt_   (basic scene in pulldown)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t40% CPU\n_lt_/p_gt_\n\n_lt_p_gt_\n\t23% CPU\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-05T19:58:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe problem is that the playground contains the editor which is doing a lot of stuff  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tcan you try with this one?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/frame.html#PPC2HF_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/frame.html#PPC2HF_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BurtGummer","Date":"2017-12-05T20:16:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYea that editor is a hog.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt knocked about 10% off the CPU_co_ but we_t_re still at about 20% for Three.js and 30% for Babylon.js. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd maybe its just a chromebook thing. ( a really ghetto chromebook too )\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLooks like what I have to do now is  rewrite that babylon.js demo in three (or vice-versa) and see how they compare.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-06T23:53:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m pretty sure it is related to DOM update because of the FPS\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you try this one_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/frame.html?noui#PPC2HF_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/frame.html?noui#PPC2HF_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BurtGummer","Date":"2017-12-07T00:20:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYea that fixed it_co_ thanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut now I don_t_t know if Three.js got an unfair advantage because the example was inside such a _qt_simple_qt_ webpage.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI won_t_t be making a full screen game but more of a 3d tool inside a complicated website_co_ so I have more experimenting to do.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]