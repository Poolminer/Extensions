[{"Owner":"Wingnut","Date":"2018-03-08T18:41:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thehe.  Zero volunteers for taking over the helm.  Alright!  _qt_The BJS Forum - Where Teamwork is ... _qt_  (nevermind)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI must be the worst campfire story teller in the world.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ we move-on in brain pain...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#91I2RE%2342_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#91I2RE#42_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have begun the separation of the two controls.  Now_co_ it_t_s _qt_ButtonRing_qt_ and _qt_DragPuck_qt_.  Source code for both... included in PG.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll isPickOnOuterRing/isPickOnInnerSquare testing/flags... are gone.  Although there are still _qt_hotwired_qt_ bindings to camera global vars such as xspeed_co_ zspeed_co_ and slew_co_ those will soon be gone_co_ too.  We_t_ll be wiring up to each control_t_s onValueChanged observers_co_ instead.  We need to follow the rules of GUI control-making... if we ever expect to get these controls accepted into GUI core.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow... ButtonRing has its own onValueChanged handling - its .value holds strings - button names_co_ so far.  Changes likely.  We must be prepared for 0 - 100 buttons.  _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ DragPuck now has its own onValueChanged handling - its .value holds a vector2-like pair of floats  {x_dd_ float_co_ y_dd_ float}.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEverything seems to work_co_ somewhat.  YAY!   Lot_t_s of work ahead.  Help welcome_co_ as always.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI should probably leave Vikk_t_s thread and go camp/yap in the Wingnut Chronicles thread_co_ eh?  *shrug*\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_update_dd_  _lt_/strong_gt_I wanted to see a quick mock-up of a LARGE/HUD buttonRing_co_ and _lt_strong_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#91I2RE%2343_qt_ rel_eq__qt_external nofollow_qt__gt_here tizzzz_lt_/a_gt__lt_/strong_gt_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-03-09T18:51:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again_co_ girls.  Continuing with our adventure... an important test after separating the two controls... is to see if they will still work when placed atop one another.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAgain_co_ all the .isClickOnCenterSquare and .isClickOnOuterRing has been removed from both controls... so cooperating is more difficult.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#91I2RE%2350_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#91I2RE#50_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere we go.  The sw_co_ se_co_ nw_co_ ne buttons... need to be clicked on their outer edges.  I believe the center dragger_t_s canvas... is a bit too wide and tall yet.  Its corners are doing hitTestBlocking.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotice line 540... dragger._zIndex _eq_ 1_sm_  Positioning control canvai... atop one another... can get ugly.  Lots of testing ahead.  The secret is with the SIZE of the dragger_t_s canvas.  It should fit within the circle of the buttonring.  The purple drawn square in the middle... is likely a bit smaller than the actual control canvas (I think).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotice globals changed names.  Now _lt_em_gt_dolly_co_ truck_co_ turn_co_ _lt_/em_gt_and_lt_em_gt_ tilt.  _lt_/em_gt__t_Turn_t_ should probably be renamed to _t_pan_t_.  Dolly and truck are z and x camera _lt_u_gt_positions_lt_/u_gt__co_ and turn and tilt are Y and X camera _lt_u_gt_rotations_lt_/u_gt_.  In short_co_ the dragpuck does camera tilts/turns (rotations)_co_ and the buttonring does trucks and dollies (positions).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have also started to remove the hotwired things_co_ and starting to ONLY depend upon onValueChanged observing.  Still working on that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBUT... in general_co_ it appears that even though these two controls are completely separated now_co_ they COULD (maybe) be placed atop each other... to form an IPOD controller (like Vikk wants).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso notice... no containers or stacks in this one.  I_t_m adding the controls directly to the ADT (container) _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_  I_t_m using some scary negative values in controls .top and .left properties_co_ but it gets the job done.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is probably NEVER wise to overlap two controls atop each other... but... this is a unique case.  Each of these controls needed THEIR OWN PRIVATE onValueChanged... due to their difference in .value dataTypes.  They needed to be separated.  Besides_co_ sometimes users want a dragpuck without a buttonring_co_ and sometimes they want a buttonring without a dragpuck.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLastly_co_ buttonring.value is now an angle_co_ in degrees.  Notice buttonring.onValueChangedObservable at lines 574-641.  It is now the user_t_s responsibility to determine which button on the ring... was clicked.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis means that a buttonring control never knows how many buttons it has.  AND_co_ all the buttons_co_ and their labels_co_ and the blue ring itself_co_ and the white divider lines between buttons... COULD be done ALL with a single image.  The buttonring controller COULD produce no graphics at all.  ALL the graphics... could be provided by the user.... via the overlay image (what used to be the labeling image).  The controller itself ONLY would produce angles between center of control_co_ and clicked position.  Weird idea_co_ eh? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe buttonring control would create no graphics at all.  And thus_co_ it could be renamed... a _t_clickAngle controller_t_.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  The buttonring controller might also produce a _t_distance-from-center_t_ that the click happened... so... {angle_dd_ value_co_ distance_dd_ value}_co_ perhaps.  With an added _t_distance_t_ in the buttonring.value_co_ it is possible to have multiple button rings surrounding one another.  WOW.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you re-visit the HUD-sized buttonring... _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#91I2RE%2343_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#91I2RE#43_lt_/a_gt_ ... you can see that clicks INSIDE of the ring... also work.  This unwanted artifact happens because no click distance-from-center is calculated or included in buttonring.value.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAhh... Wingy just rattling-on... to try to avoid being scared.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_shield-complete-1.0.jpg_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_562_qt_ src_eq__qt_http_dd_//www.project-jarvis.com/wp-content/uploads/2017/11/shield-complete-1.0.jpg_qt_ width_eq__qt_1000_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe_t_re not quite ready for THIS_co_ yet... but I can smell it on the wind.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-09T22:14:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLol if we can get into that it_t_s gonna be terrific!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-03-10T02:34:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_   A person needs to be a great 2d paintbox artist.  I_t_m not_co_ so I stole something...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#91I2RE%2353_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#91I2RE#53_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tClick around _qt_out there_qt_.  Watch console.  Now the button ring is producing an angle and a distance.  No graphics are drawn by the buttonring control.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ with meticulous onValueChanged processing (line 322+) ... a person COULD determine which _qt_button?_qt_ in the HUD... was clicked.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI didn_t_t have the patience to build 50 button filters...   _lt_strong_gt_if (angle &lt_sm_ ?? &amp_sm_&amp_sm_ angle &gt_sm_ ?? &amp_sm_&amp_sm_ distance &lt_sm_ ?? &amp_sm_&amp_sm_ distance &gt_sm_ ??) { console.log(_qt_button27 clicked_qt_)_sm_ doStuff(27)_sm_ } _lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSomehow_co_ it all seems insanely possible.  I bet the pros are using an angle/distance system_co_ too... for their circular button-ring widgets.  They almost HAVE TO BE_co_ because... defining a _qt_click zone_qt_... around a curved button... would seem arduous/miserable beyond belief. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ there_t_s many things that I don_t_t know... yet.  Goofy project... this buttonring thing.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe gfx started out as _lt_strong_gt__lt_a href_eq__qt_https_dd_//d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/SScGOMwcgizu1231h/videoblocks-animation-of-a-futuristic-black-hud_sglux7kql_thumbnail-full01.png_qt_ rel_eq__qt_external nofollow_qt__gt_THIS_lt_/a_gt_.  _lt_/strong_gt_I sucked-off the black background with my Corel ShopVac.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-----------------------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYa know... _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22401-gijs/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22401_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22401-gijs/_qt_ rel_eq__qt__qt__gt_@Gijs_lt_/a_gt__lt_/span_gt_ helped us perform a _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#WWBIKZ%234_qt_ rel_eq__qt_external nofollow_qt__gt_getPixelUnderPointer()_lt_/a_gt__co_ recently.  Generally_co_ a color4 is returned... { r_dd_ redVal_co_ g_dd_ greenVal_co_ b_dd_ blueVal_co_ a_dd_ alpha }\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat if we invented a _lt_strong_gt_PixelPlus_lt_/strong_gt_ datatype?  { r_dd_ redVal_co_ g_dd_ greenVal_co_ b_dd_ blueVal_co_ a_dd_ alpha_co_ metadata_dd_ _lt_em_gt_anything_lt_/em_gt_ }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_Anything_lt_/em_gt_ might be a button number_co_ such as 27.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTHEN_co_ we don_t_t need an angle or distance.  We click on the screen_co_ it returns the _lt_strong_gt_getPixelPlusUnderPointer()_lt_/strong_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSO...  we simply_lt_strong_gt_ doStuff(control.getPixelPlusUnderPointer().metadata)_sm__lt_/strong_gt_  This is the same as a _lt_strong_gt_doStuff(27)_lt_/strong_gt__co_ right?  You bet.   A masking canvas/buffer/array.  hmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tScary idea.  Overloading the entire canvas... adding an extra byte to every pixel that has alpha &gt_sm_ 0... just to _qt_define_qt_ click zones.  Goofy!  (maybe).  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPixels_co_ pulling metadata travel trailers full of junk... down the highway!  Whooda thunkit?   Next thing we know_co_ pixel rights movements... and dark vs. light pixel wars.  ImageBuffer sects from various _t_backgrounds_t_ and _t_borders_t__co_ fighting over paddings and margins.  The Photonic Wars.  hmm.   nah. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust make every button a slightly different color.  Easier.  doStuff(pixel).  The button_t_s color... is also its ID.  But that kills shaded button graphics and specular shines.  That sucks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNah...  .metadata is the way.  The extra buffer.  The mask array... on GUI control.  And how... does a person... create/edit THAT thing (considering the size of OUR control_t_s canvas)?   OMG.  Brain tumor land_co_ baby.  It (the mask) needs to be created in the 2D paintbox app_co_ and saved as a separate file... me thinks.  Speculating.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPrecision click zones.  Yech. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-03-11T15:30:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#91I2RE%2356_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#91I2RE#56_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPhew.  Gruesome.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Needless to say_co_ it was VERY good news to me... when I discovered that some/all GUI controls... can be smoothly z-rotated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDon_t_t stare at it too long... you could get an _lt_strong_gt_iris_lt_/strong_gt_ tumor.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThese 13 rings... are NOT dependent-upon the custom buttonring control AT ALL.  This is simply 13 GUI image controls (transparent background pngs)... placed atop each other_co_ and rotated independently.  Easy for BJS GUI system.  Not so easy for Wingy and his Corel PhotoPaint program.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-03-12T15:06:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ hi again.  Now that I have wandered off-topic with the futuristic _qt_iris_qt_ GUI... it is time to get back to work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#91I2RE%2358_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#91I2RE#58_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is the in-dev buttonring control_co_ placed atop the in-dev dragpuck control... to make Vikk_t_s _qt_ipod controller_qt_ or something similar.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn a previous chapter_co_ I pointed-out that our northeast_co_ northwest_co_ southeast_co_ and southwest buttons... needed to be clicked on their outer edges.  I thought the problem was that the inner square... was smaller than its whole control-canvas area (on the dragpuck control).  Assorted work in lines 94-101 area... has now adjusted the _lt_em_gt_squareSize_lt_/em_gt_ to be the entire control-canvas width/height.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd_co_ we can see that my theory was correct.  The inner _qt_dragpuck_qt_ control (its main canvas)... is-Blocking hit tests.  (it is blocking part of our buttonring buttons).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith a little dragpuck size and padding adjustments... we_t_re back in the center_co_ with no nw/ne/sw/se button overlap problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#91I2RE%2359_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#91I2RE#59_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut... clicking/dragging in the red center square (dragpuck controller canvas)... we can see some issues.  The puck is allowed to be dragged/clicked to a position that is partially OFF-OF the red canvas area.  We might not be able to fix this_co_ OTHER THAN limiting the drag-distance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn a perfect world_co_ we would like the puck to be dragged to the inner edge of the button ring_co_ and stop there.  To do that... our puck canvas must get bigger... and that will cause problems with pick-blocking on our NW/NE/SW/SE buttons again.  SO_co_ this is a pending issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ I added _lt_strong_gt__this._puckDiameter _eq_ 8_sm_ _lt_/strong_gt_to the dragpuck control... at line 33. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can turn-off the mostly-unnecessary red center square...  by disabling line 160.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll in all_co_ I_t_m not sure how to improve this.  A round canvas would be nice_co_ but that is not something soon to be invented. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tChanging the puck circle to be an image control or sprite... that is added-to the ADT itself... MIGHT be doable_co_ but we could encounter canvas z-index pick-blocking there_co_ as well. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIdeas welcome.  Get the inner drag puck... to stop at the inner edge of the button ring... (without its canvas partially blocking any buttons) and we win.  Thx for ideas/tests.  Party on!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-03-14T02:57:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ onward with the adventure.  (oh no - yet another ignore-able message from Wingy)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#91I2RE%2363_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#91I2RE#63_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn this version_co_ all work is happening on the buttonring control.  Besides new .wheelThickness and .color properties_co_ the _lt_em_gt_distance _lt_/em_gt_parameter that returns in a buttonring_t_s .value object... has been put to FULL use.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow_co_ you MUST click precisely on the blue ring buttons.  If you click inside the ring_co_ or beyond its radius_co_ no click is triggered.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWITH this accurate radius checker (at line 454)_co_ we get more power.  We get the power to have a second buttonring (red)... surrounding/overlaying the first buttonring (blue).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCurrently_co_ only the north and south buttons of the red ring... are active (camera ped-up and ped-down).  But_co_ it works!  YAY!  And so do all 8 blue-ring buttons!  YAY 2.0!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just had to try a 2-ringer.  We now have a total of THREE controls placed atop each other.  Actually_co_ FIVE controls_co_ if you include the two labeling images.  Yet only two ._zIndex settings were needed... on the dragpuck (line 548) and on buttonring2 (line 666).  Easy.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA 3rd_co_ 4th and 5th ring is certainly possible.  Remembering the 13 rings of our futuristic _qt_iris_qt_ reticle GUI... yes... 13 rings _lt_em_gt_should_lt_/em_gt_ be possible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEarlier_co_ we discovered that a buttonring control CAN draw its own colored circles and button dividers (like those seen in this PG).  Currently_co_ only the little arrows... are an overlayed image.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBUT... as with the futuristic _qt_iris_qt_ graphics_co_ the programmer can provide ALL of the graphics_co_ telling the buttonring controller to NOT draw anything.  Yet_co_ the buttonring_t_s angle-of-click and distance-of-click values... are handed-down to buttonring.onValueChanged... where the programmer uses those values to determine which ring-button was clicked.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPhew_co_ that_t_s a lot of words.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInteresting thing_dd_  Look at lines 482-484 of buttonring_t_s onPointerUp.  I NEED buttonring.onValueChanged to trigger... after the onPointerUp.  This is mainly to stop the camera movements upon pointerUp.  Line 482 made that possible.  Using lines 483/484... did NOT work.  buttonring.onValueChanged does NOT trigger... if using lines 483/484 instead of 482. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry it.  Disable 482_co_ activate 483/484.  The camera never stops moving (onValueChanged code lines 586-590 and 676-679 never runs).  OnValueChanged seems it won_t_t observe discrete property value-changes on a value _lt_em_gt_object_lt_/em_gt_.  hunh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI guess that_t_s expected_co_ but ain_t_t it interesting?  I change both properties on the value object (483/484)_co_ and the onValueChanged observer didn_t_t even notice.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  Not a very attentive observer_co_ eh?  heh.  I suppose we would need to create a checksum on an object_co_ and then check for a checksum change (I just spit a little)... to test if _lt_u_gt_ANY_lt_/u_gt_ property on some object... changed.  (huh?).  Or maybe my value object... needs its own .onValueChanged observing/notifications.  Smart values.  Cool.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-03-18T13:13:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#91I2RE%2365_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#91I2RE#65_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhelp_co_ no new ideas showed-up.  This is about as close as I can get... to perfection... using the 2-overlayed-controls method.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe drag puck has drag-limiters on it... to keep if from going off-of its canvas.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe corners of the drag control_t_s canvas... block picking on the inside edges of the NW_co_ NE_co_ SW_co_ and SE buttons on the buttonring control.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny more size-reduction of the drag control_co_ and we lose drag range.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would love the drag puck being able to reach the inner edge of the button ring... but I just can_t_t figure out how to do it (with 2 separate controls). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith a single _t_compound control_t_... more possible_co_ but control.value will look like ...  {x_dd_ xDragValue_co_ y_dd_ yDragValue_co_ angle_dd_ ringClickAngleValue_co_ distance_dd_ ringClickDistanceValue}.  Four values... for one controller.  The first two values... are for the drag puck.  The second two... for the button ring.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think... the last version of the _qt_ipod control_qt_ that used a single control... is _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#91I2RE%2338_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#91I2RE#38_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyone_co_ feel free to run with it.  It needs work before it would be ready for core_co_ if ever.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot that there_t_s been much interest in this project_co_ anyway. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ I_t_m gonna bail on this adventure.  I_t_ve been sick quite a bit_co_ lately_co_ and I_t_m going to get back to more-enjoyable/less-grinding projects.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope you have found something usable_co_ Vikk.    Be well.   Sorry if I disappointed anyone.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]