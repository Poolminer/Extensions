[{"Owner":"Mark Bufton","Date":"2017-05-12T19:50:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m attempting to make a train simulator which includes working controls (brake lever_co_ throttle leaver_co_ switches_co_ horn controls....I_t_m sure you get the idea). With switches I decided I could just toggle them on picking with the actions manager. The levers_co_ however_co_ provide me with more of a challenge.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs they revolve on a pivot I thought of using an (invisible) imposter mesh for the user input and setting the rotation of the lever meshes to correspond with the imposters x_co_ y or z position_co_ meaning the user_t_s input will _qt_move_qt_ the lever_co_ so added the drag and drop code from the playground demo.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt works in principle. A bit messy maybe - especially as I also need to figure out how best to accurately _t_reset_t_ the imposter to the levers handle position on the pick up event to be best placed for the next use. My question (finally) is_co_ _qt_is there a way to apply drag drop input to only the imposter mesh(es)_co_ rather than having desks_co_ windows_co_ instuments etc etc moving around the scene (as highly amusing as that is)?_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks everyone. I_t_ll include a couple of screenshots to give a little context. In short_co_ I want the levers to be movable (rotatable) by the _t_driver_t_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMark.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/Screenshot_2017-05-12-20-47-00.png.104b59d322607bf6fe62f25c40d794b4.png_qt_ data-fileid_eq__qt_12944_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Screenshot_2017-05-12-20-47-00.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12944_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/Screenshot_2017-05-12-20-47-00.thumb.png.e980fde72c914f2208df3eaa8bd6b40b.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/Screenshot_2017-05-12-20-44-12.png.f6b01b9e425c2261766f1dcf73054266.png_qt_ data-fileid_eq__qt_12945_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Screenshot_2017-05-12-20-44-12.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12945_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/Screenshot_2017-05-12-20-44-12.thumb.png.a606613605b5958ff4b2fd10885d7f0e.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-05-13T00:45:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Mark!  Good-lookin_t_ scene/control panel.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan I ask... what made you want physics active on the controls?  I don_t_t think that is the best of ideas_co_ but maybe you have some plans.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps you need something like mesh.isPickable _eq_ true/false... to get drag_t_n_t_drop selectivity.  That might be handy.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_eq__eq__eq__eq_ tons of extra crap _eq__eq__eq__eq_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave you studied our _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/?18_qt_ rel_eq__qt_external nofollow_qt__gt_drag_t_n_t_drop demo_lt_/a_gt_?  If so_co_ you probably realize the importance of the getGroundPosition() function... to the onPointerMove event handler (see line 106).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSome kind of _qt_ground_qt_ must be _qt_behind_qt_ the drag-start and drag-end positions_co_ or else onPointerMove cannot calculate a _qt_diff_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2JXSKY%235_qt_ rel_eq__qt_external nofollow_qt__gt_a modification of the drag_t_n_t_drop demo_lt_/a_gt__co_ where a user needed a fake joystick... to control a submarine movement.  As you can see_co_ it is variable.  The more you pull the joystick_co_ the faster the xspeed and zspeed.  _lt_strong_gt_Note_dd__lt_/strong_gt_ Some user has put a slow-rotation into the sub... at line 134_co_ possibly to help test lines 142-143... not important to you_co_ but still_co_ might be nice to remove before your tests.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEven in that demo_co_ a _qt_ground_qt_ is kept behind the entire joystick handle... for the very same reason... to calculate a diff.  In lines 142/143_co_ the xspeed and zspeed are applied to the green submarine.  Not important_co_ though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLines 110-114 are rotation limiters... making sure that the joystick (currentmesh) only rotates a certain amount of degrees.  You may need similar code to limit the rotation of your controls.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor your black-handle rotating control_co_ and white-handle slider control... the _qt_knobs_qt_ for both... extend higher than the panel they are mounted-upon - a panel which _lt_strong_gt_could_lt_/strong_gt_ be used for that darned getGroundPosition func.  You might have another ground behind the dashboard panels (perhaps the same ground that the tracks are laid-upon)_co_ and you simply need to set some dashboard panels .isPickable _eq_ false ... to keep them from being accidentally dragged.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can tell_co_ camera position is very important_co_ so that both controls can have a _qt_ground_qt_ behind them.  If you tilt the camera on the red-bat joystick demo... in a way that the ground is NOT behind the joystick handle_co_ the drag_t_n_t_drop does not work on the handle.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSO_co_ maybe... a locked camera beta might be important.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2JXSKY%2332_qt_ rel_eq__qt_external nofollow_qt__gt_Here is another version_lt_/a_gt_... where I have locked the camera.upperBetaLimit _eq_ 1.0 (line 8).  This keeps the camera from rotating downward to an amount &gt_sm_ 1.0 radians.  (1.57 radians means camera can orbit-down to straight-on look_co_ and 3.14 means camera can go well below ground.)  With 1.0_co_ the joystick handle ALWAYS has a ground behind its entire height.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSO_co_ if you make your control handles slightly shorter_co_ and/or make the panel they are mounted-to... slightly deeper_co_ and/or set the camera in a way that ALWAYS keeps their panel... behind them (so getGroundPosition() keeps working properly)... then you might be more successful_co_ and without using any physics.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOf course_co_ you can read the .rotation numbers on both levers... and convert those to values used for train brakes_co_ dynamic brakes_co_ loco brakes_co_ throttle_co_ etc.  I_t_m a train sim fan BIGTIME.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_   I even did _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1ND6TH%2313_qt_ rel_eq__qt_external nofollow_qt__gt_some early physics engine work... for steam loco wheels_lt_/a_gt_ (with help from physics expert friends).  _lt_strong_gt_Note_dd_  _lt_/strong_gt_Lately_co_ CannonJS has been starting in _qt_slow motion mode_qt_... and we have not yet found the reason.  You might wish to switch that playground... from version_dd_ latest_co_ to version_dd_ 2.5.  (via a pull-down menu in upper right corner of playground app).  It should run 100% using 2.5.  It has not yet been proven that I ALONE am not seeing CannonJS sometimes start in slow-motion-mode.  It might be my computer only.  _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI need to ping _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25131-enwolveren/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25131_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25131-enwolveren/_qt_ rel_eq__qt__qt__gt_@enwolveren_lt_/a_gt_ here_co_ because I promised that when I got the train wheel demo updated (we formerly-used _lt_em_gt_setPhysicsState_lt_/em_gt_ calls_co_ but lately_co_ BJS has changed to mesh.physicsImpostor _eq_ (blah blah blah) format)...  I would tell him.  I hadn_t_t updated the train wheel demo until... just now.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I didn_t_t really answer your question about how to keep physicsImpostors perfectly aligned-with the mesh... after the mesh is force-moved/stopped.  It is not always easy_co_ because physicsImpostors are supposed to control mesh_co_ and not mesh controlling physicsImpostors.  But_co_ just the same_co_ let me tell you something I_t_ve learned.  Physics bodies sometimes have _qt_residual energy_qt_ that might need nulling-out when their mesh is manually forced to a stop.  Here are 2 _qt_energy removers_qt_ that might be handy.  They are for CannonJS_co_ but OimoJS (the by-default 3rd-party physics engine for BJS) has similar settables._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// using our CannonJS OR OimoJS physicsPlugin layer (preferred method)\nmesh.physicsImpostor.setLinearVelocity(mesh.physicsImpostor_co_ BABYLON.Vector3.Zero())_sm_\nmesh.physicsImpostor.setAngularVelocity(mesh.physicsImpostor_co_ new BABYLON.Vector3(0_co_ 0_co_ 0))_sm_\n\n// or... using the _qt_native_qt_ CannonJS physics _qt_bodies_qt_ - deep-hacking\nmesh.physicsImpostor.physicsBody.velocity _eq_ new CANNON.Vec3(0_co_0_co_0)_sm_\nmesh.physicsImpostor.physicsBody.angularVelocity _eq_ new CANNON.Vec3(0_co_0_co_0)_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI think you get the idea.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Here_t_s _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/playground?code_eq_setLinearVelocity_qt_ rel_eq__qt_external nofollow_qt__gt_some assorted playgrounds that use _qt_setLinearVelocity_qt__lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAgain_co_ I would suggest NOT using physics in the control handles_co_ but... you might have some plan that I don_t_t know about.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMain thing is... have fun!  Hope this helps_co_ somehow.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mark Bufton","Date":"2017-05-13T12:50:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Wingnut_co_ you_t_ve been a great help_co_ as always.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI always look forward to your replies as I learn so much more than I would on my own. I shall have a play with my scene now and see if I can get things moving forwards......and backwards_co_ left and right a little.....hell_co_ maybe do a few barrel rolls haha.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMark.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-05-14T13:01:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_    var getGroundPosition _eq_ function () {\n        // Use a predicate to get position on the ground\n        var pickinfo _eq_ scene.pick(scene.pointerX_co_ scene.pointerY_co_ function (mesh) { return mesh _eq__eq_ ground_sm_ })_sm_\n        if (pickinfo.hit) {\n            return pickinfo.pickedPoint_sm_\n        }\n        return null_sm_\n    }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSee that _lt_em_gt_return mesh _eq__eq_ ground_sm__lt_/em_gt_ out there on the end of that line?  A _qt_predicate_qt_.  Let_t_s pretend that you DID change from using a WORLD ground (where tracks might be laid) in a var named _t_ground_t_... to using the panel that the controls are mounted-upon.  I think you understand... that this predicate MIGHT need to be changed to _lt_em_gt__eq__eq_ panel_sm_ _lt_/em_gt_or similar.  I think a plane will work just as well as a ground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s talk for a second about ONE reason why you MIGHT want physics on the controls... and that is... when the steam boiler (or a dropped bomb) blows-up the loco.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou_t_ll want pieces of loco flying and bouncing across the ground_co_ including those handles.  But_co_ possibly_co_ all those loco parts get physics added AFTER the yea-decision to blow-up the loco.  That_t_s how I would do it.  You can launch a few boiler bolts and rivets while setting-up your pre-explosion physics and prepare setLinearVelocity directions and amounts for each loco part.  Then puff some particleSystem smoke and fire_co_ and POOM... set all linearVelocities and watch stuff fly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf using this idea... the physics (on little loco &amp_sm_ rolling-stock parts) is active ONLY during the explosion.  Set the physicsEngine.world.allowSleep _eq_ true... so the parts don_t_t _qt_Brownian jitter_qt_ after they skid to a stop.  Just after explosion_co_ you could iterate thru the loco parts... and check for physicsBody.isSleeping.  If sleeping_co_ possibly... um... part.bakeCurrentTransformIntoVertices() (freeze the part where it is_co_ and reset its .rotation_co_ .position_co_ and .scaling back to 0_co_0_co_0)_co_ and then remove it_t_s physicsImpostor (keep performance high).  I_t_m not sure if you NEED to do that _qt_bake_qt_... but... if you remove the impostor from a mesh_co_ it MIGHT move.  If it doesn_t_t_co_ no problems.  If it does_co_ the bake might prevent that.  You also might look-into changing mesh impostor... to _qt_noImpostor_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd_co_ you know_co_ for good train explosions (they were bombed pretty heavily in certain wars)... you need lots of separate pieces on the loco.  But this might hurt performance for regular gameplay.  So... possibly a complete model swap-out just before explosion... might be the wise way.  camera/mesh _lt_em_gt_.layerMask_lt_/em_gt_ might be handy_co_ too.  It allows you to display SOME mesh and hide other mesh.  Then with one command_co_ show different mesh_co_ and hide different mesh. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ most of the time_co_ you would hide the hi-rez (hi-parts) loco until explosion time.  At explosion time_co_ you position the hi-rez loco _eq__eq_ lo-rez loco_co_ then tell the camera to change layerMask.  If everything works nice_co_ the user doesn_t_t notice.  And then POOM!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBy the way_co_ when I say hi-rez... it doesn_t_t necessarily mean hi-detail.  In fact_co_ low-detail would be fine for explosion.  But_co_ the more separate fly-able parts_co_ the cooler the explosion.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Using _lt_em_gt_some_lt_/em_gt_ parts as emitters for particleSystems... can cause a stream of smoke/sparks spewing from a flying part.  Gorgeous.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve never written a video game_co_ so... there_t_s a good chance that I am predominantly clueless.  But_co_ it_t_s still some crap to think about_co_ especially if you are doing a war sim where bombing trains is pertinent.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tForum superhero Jerome once made a rollercoaster thing.  You can _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1HH4OJ%2316_qt_ rel_eq__qt_external nofollow_qt__gt_watch from afar_lt_/a_gt__co_ or _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1HH4OJ%2314_qt_ rel_eq__qt_external nofollow_qt__gt_use the followCam_lt_/a_gt__co_ or _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1HH4OJ%2317_qt_ rel_eq__qt_external nofollow_qt__gt_climb aboard_lt_/a_gt_ (motion-sickness barf-warning).  See ya later... good luck.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mark Bufton","Date":"2017-05-15T06:30:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWow_co_ now there_t_s an idea....well_co_ several.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am definitely going to enjoy playing with this _sm_-)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]