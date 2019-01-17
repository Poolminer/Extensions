[{"Owner":"QuintusHegie","Date":"2018-06-16T10:41:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tProbably some easy question... but I_t_ve been struggling too long with the math.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes anybody know how to compute the Linear Velocity (world space) of a Circus Cannon Ball based on the Cannon Tube mesh orientation?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn this case I use positive Y axis of cannon tube as _t_forward_t__co_ but in general I use the local Z axis as forward (to adhere to the definitions of BABYLON.Vector3.Forward() etc.).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnce I know how to dynamically compute the (normalized) direction of the tube_co_ I can then scale this vector with the cannon_t_s shooting power (e.g. longer fire button press results in farther shooting). And add some random vector noise to make easy ball have a slightly different path each time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease note that the tube is a child mesh on purpose so the orientation needs to be translated to world first.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s the playground so far_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#R8ZH46_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#R8ZH46_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe solution to this question will probably be useful for anyone else who is creating some kind of ballistic shooter game (not first person).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI noticed that all physics vectors are in world space only so therefore I am looking for these kind of transformations to roll up local mesh orientation to world physics direction.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\tQ\n_lt_/p_gt_\n\n_lt_p_gt_\n\tP.S. The cannon is set to auto-fire but you can use SPACE for fire as well_co_ and [ and ] to turn the cannon.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_06/558297876_shootcannonballthroughthehoop.png.d4ae72c5248cb7136421722ea563ba03.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_18755_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_06/1663530028_shootcannonballthroughthehoop.thumb.png.cabf6327e633b52e94eefd815fa13b51.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_shoot cannon ball through the hoop.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-16T13:58:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya QH.  Cool project/playground!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#R8ZH46%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#R8ZH46#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1.  I switched to the Oimo physics engine_co_ instead of the default CannonJS physics engine (lines 29/30).  It_t_s just my personal preference.  CannonJS causes annoying show-stopper _qt_physics not enabled_qt_ errors for me_co_ after a few edits in the playground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Switched to arcRotateCamera... also for personal reasons.  (In my Firefox_co_ freeCam up/down cursor... causes playground 1-line html scroll).  Spacebar also causes his one-line scroll for me.   So_co_ that_t_s why I increased auto-fire rate a bit... so I could avoid using my spacebar.  Someday I will figure out WHY up/down arrows and spacebar cause these playground problems_co_ I hope.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3.  Established a _qt_direction vector_qt_ in line 110.  There are _qt_math ways_qt_ of making a direction vector_co_ but... easiest for me is to position/parent an invisible box in front of cannontube_co_ then use a subtraction method.  Activate line 112 to see the direction vector on JS console... for each shot.  The first parameter of an applyImpulse call... needs a direction vector.  Its _qt_magnitude_qt_ is the power.  You may wish to do a little web-reading about direction vectors and magnitudes... they are interesting.  The _lt_em_gt_scale _lt_/em_gt_in line 114 ... is a direction vector _lt_strong_gt_magnitude_lt_/strong_gt_ amplifier/limiter.  Scaling a direction vector keeps the actual direction the same_co_ but makes the direction vector longer/shorter... sort-of.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Sort of an AMOUNT of direction.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4.  Used applyImpulse in line 114_co_ but I think setLinearVelocity and/or applyForce would also work fine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t5.  Remarked-out line 107.  Rotating the cannonball/bullet has no real effect on its physics flight-angle.  (But it might be cool if it did_co_ eh?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t6.  Added the _t_u_t_ and _t_d_t_ keys for cannontube up/down rotation... needed to do testing on that_co_ to make sure my dir vector was working correctly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t7.  Added a power setting in line 120... used in all firebullet calls.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t8.  Temporarily increased auto-fire rate in line 124.... for testing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 49 sets the visibility of itarg... the target box used to derive a direction vector (dir).  itarg will likely be invisible for final product.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ goof around with this... see what you like or hate... ask questions if you like (perhaps use @ wingnut to ping me for questions - but remove space before the _t_w_t_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you switch back to CannonJS in lines 29/30 area_co_ you will have to reduce _lt_em_gt_power_lt_/em_gt_ a BUNCH_co_ I think.  Our two main physics plugins do not have good applyImpulse crossover at this time.  Maybe better luck with applyForce or setLinearVelocity.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOthers are math-smarter than I_co_ and might have better versions/comments.  I hope I have been helpful.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-16T14:17:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOops_co_ Oimo does not have a _qt_meshImpostor_qt_ so you can_t_t shoot balls thru the ring.  Let_t_s try another version_co_ using CannonJS physics plugin/engine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#R8ZH46%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#R8ZH46#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere we go... CannonJS active_co_ ring meshImpostor working.  This uses applyForce instead of applyImpulse.  Power increase was needed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHotkeys same as previous...  _lt_strong_gt_[_lt_/strong_gt_ &amp_sm_ _lt_strong_gt_]_lt_/strong_gt_ to turn left/right_co_ _t__lt_strong_gt_u_lt_/strong_gt__t_ and _t__lt_strong_gt_d_lt_/strong_gt__t_ keys to raise/lower pitch/elevation_co_ _lt_strong_gt_spacebar_lt_/strong_gt_ to fire.  Seems to be working ok... but...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t...does anyone see a slight cannonball turn to the right... upon first ground-bounce?  *shrug*  Perhaps it is an optical illusion.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"QuintusHegie","Date":"2018-06-16T16:03:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Wingnut_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your responses!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat an excellent idea to use an imaginary _qt_crosshair_qt_ box in front of the cannon tube. This can be very useful for a player commanding the circus cannon to visually represent the _t_firing power setting_t_.  _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe playground circus cannon _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#R8ZH46%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#R8ZH46#4_lt_/a_gt_ seems to be working as desired. This is a useful solution.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe direction of bullets can be a bit deceiving because of the 3d perspective.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll implement your suggested approach into my game.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor some reason the bullet shot from the cannon in my game (not in the playground) now crashes into an imaginary physics wall (not the crosshair though) before reaching the target _t_hoop_t_... ah well_co_ the next challenge awaits _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tQ\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-16T17:18:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSounds good_co_ QH!  I_t_m glad.  Yeah_co_ maybe change itarg to be a plane_co_ with target reticle texture.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUmm... the invisible physics wall... MIGHT be caused by a sort-of-recent change to pivots.  Please ensure you are using the latest BJS and approved version of CannonJS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\thmm.  I_t_ll keep thinking about WHY there is an invisible physics wall.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre you using a different _qt_ring_qt_?  Perhaps a ring... created with modeling software (3dsMax/Blender/etc)?\n_lt_/p_gt_\n\n_lt_p_gt_\n\thmm.  Try shooting thru the ring from the opposite side_co_ perhaps.  See if invisible wall is hit AFTER the ball goes thru ring?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPosition ring further from cannontube.  Did invisible wall move_co_ too?   *shrug*  Just some testing ideas.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor a bit more realism_co_ you may wish to position each ball... at the _qt_front_qt_ of the cannontube... just barely inside the tube (and fire from there).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"QuintusHegie","Date":"2018-06-17T11:08:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah I changed the alpha targeting box to a plane mesh to save on vertices as well _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPositioning the starting point of the bullet at the end of the gun tube will make it even more realistic indeed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway the solution works very nicely. See the image from my BabylonJS Model Train Simulator game.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHint_dd_ The gun is stationed on a train wagon. When I move the train (and thus the gun) the trajectory of the bullets also change with it. See the painted arrows.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny potential _t_train robbers_t_ wouldn_t_t be happy any more now we_t_ve got the mounted gun working haha _lt_span class_eq__qt_ipsEmoji_qt__gt_😉_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Invisible collider walls_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe invisible (vertical and horizontal) collider walls seem to be a bug or thingee in the test level I am using for the cannon demo in my game.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think it has to do with the collider on the ground mesh_co_ which is a heightmap with post process CSG.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor BoxImpostor it takes the min+max height of the heightmap as the collision bounds..._lt_br /_gt_\n\tHeightmapImpostor crashes the browser (the heightmap isn_t_t square and may contain holes_co_ which may be the reason for this)._lt_br /_gt_\n\tMeshImpostor and PlaneImpostor same effect as BoxImpostor.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using cannonjs from\n_lt_/p_gt_\n\n_lt_div style_eq__qt_color_dd_#d4d4d4_sm_background-color_dd_#1e1e1e_sm_font-family_dd_Consolas_co_ _t_Courier New_t__co_ monospace_co_ _t_Segoe UI Emoji_t__sm_font-weight_dd_normal_sm_font-size_dd_14px_sm_line-height_dd_19px_sm_white-space_dd_pre_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#ce9178_sm__qt__gt__lt_a href_eq__qt_https_dd_//preview.babylonjs.com/cannon.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//preview.babylonjs.com/cannon.js_lt_/a_gt__lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tI_t_m not sure yet but the wrongly computed/crashing collider might be a bug in the framework. But then I want to be really sure before reporting it as a bug and create a playground sample first.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_06/1661477075_cannonphysicsgunbulletorientationbabylonjsmodeltrainsimulator.png.2cd380d72c1c2a0fc581c959e40e83d1.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_18773_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_06/1661477075_cannonphysicsgunbulletorientationbabylonjsmodeltrainsimulator.png.2cd380d72c1c2a0fc581c959e40e83d1.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_cannon physics gun bullet orientation babylonjs model train simulator.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-17T15:53:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_218381_qt_ data-ipsquote-contentid_eq__qt_38273_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1529233737_qt_ data-ipsquote-userid_eq__qt_30844_qt_ data-ipsquote-username_eq__qt_QuintusHegie_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t5 hours ago_co_ QuintusHegie said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tthe ground mesh_co_ which is a heightmap with post process CSG.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi QH!  Man that_t_s a cool scene/sim... I love it.  Is the CSG used to make the holes in the terrain?  I suspect so.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah_co_ I would definitely try a version WITHOUT the CSG terrain_co_ and see if the invisible collider goes-away.  Worth a test_co_ huh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t do CSG very often or well_co_ but I think you make mesh that can be used as _qt_cookie-cutters_qt_ (bool subtract)... for holes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMake sure that those cookie-cutter mesh... are low-height.  Make them just as short as is-possible.  I_t_m not sure if that will change anything_co_ but maybe.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt might also be interesting to do terrain.showBoundingBox _eq_ true_co_ and see if THAT is much bigger/taller than it should be.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust thinkin_t_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Turning Train Gun_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith the train gun/railcar turning_co_ is there an unwanted/unexpected effect happening?  Yep_co_ targeting the cannon while riding on a Y-turning flatcar... yeah... good fun!  Track-side deer and cars are already difficult to shoot_co_ but on a moving train... MUCH more difficult.  heh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could try something in the renderLoop... like... cannonfoot.rotation.y +_eq_ guncar.rotation.y_sm_  That might keep the gun aimed at a single direction_co_ even when the guncar is changing its Y-rotation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ keep in mind that you have a type of auto-targeting feature.  You_t_ll likely need a setCannonAimPerDirectionVector(directionVector).  That function would convert a direction vector... to a cannonfoot Y-rotation and a cannontube X-rotation.  (not an easy func to code_co_ likely).  Remember that you can always get a direction-to-some-target... by using...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar autoAimDirVec _eq_ sometarget.position.subtract(cannontube.position)_sm_  You might need to swap those items... cannontube.position.subtract(sometarget.position)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd_co_ you will need to do continuous auto-aiming in the renderLoop... if you want the gun to constantly _qt_track_qt_ some track-side target.  You might be able to steal some code from BJS camera.setDirection.... for your setCannonAimPerDirectionVector(directionVector) function.  When using auto-aim_co_ the trackside target replaces the itarg_co_ in a way.  But you MUST aim the cannontube and cannonfoot before firing_co_ or else the bullet will fire from the SIDE of the cannon.  The proper way... would be to _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#JEHHJ2_qt_ rel_eq__qt_external nofollow_qt__gt_fast-animate_lt_/a_gt_ the cannonfoot and cannontube... to the new auto-aim orientation... and THEN allow firing or auto-fire.  (That _t_fast-animate_t_ playground is full of advanced slerpy stuff and quaternion rotation... gruesome _t_look-At_t_ hacking.  You need to rotate TWO mesh - foot and tube... not just a single cone.  erf!  Tube gets the x-rotation_co_ foot gets the Y-rotation.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSort of need... click on something along the tracks.  When that happens_co_ directionVector starts being constantly calculated... between clicked mesh.... and cannontube.  Now we have a continuous direction-to-target vec3.  Then_co_ perhaps the auto-aim_co_ auto-aim locked_co_ and auto-aim/lock/fire buttons (3 buttons)... appear on-screen.  FUN! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tA click on ANY of the three buttons... swings the cannonfoot around_co_ and adjusts the cannontube elevation_co_ and gets ready for firing.  The targeting reticle should be good... I think it is parented to cannontube.  If either _t_locked_t_ button was pressed_co_ you must constantly (renderLoop) call setCannonAimPerDirectionVector(directionVector)... always using the freshest directionVector.  Target tracking.  Coooooool.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Kind of demented.  heh.  A GOOD auto-tracker would turn OFF the fire button... when firing would result in blasting your own boxcars/consist/rolling-stock.  _lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]