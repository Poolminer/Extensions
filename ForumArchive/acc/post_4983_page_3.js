[{"Owner":"Wingnut","Date":"2014-04-09T01:26:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi g.  I think that_t_s a spot light prop_co_ not a point light prop.  There is talk about it in the tutorial.  It is the rate of power falloff over distance.  Set it to 0_co_ and the spotlight keeps going_co_ and going_co_ and going.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  One could call it distance-reach resistance. The amount of dirt and dust particles in the air... causing drag on our photons.  hehe.  Photon friction.  Somebody stop me_co_ please!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Oh_co_ so you want to know the difference between spotlight.intensity and spotlight.exponent_co_ you say?  I have no idea.  I have never gotten spotlight.intensity to work worth a hoot.  Our spotlights have this gruesome hotspot in their center that just refuses to be tamed.  .exponent works pretty good_co_ though.  We will probably have to look into radial falloff eventually... softness/hardness around the edges of the spotlight circle._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It all comes down to what _t_beat_t_ or _t_song_t_ BJS is going to march-to.  Dad72 exemplified it when he said something like _qt_other engines do it this way_qt__co_ and that was why BJS does it a certain way.  Now we are marching to the beat of Blender exporting_co_ trying to honor the bloat and creaping featurism from _lt_u_gt_that_lt_/u_gt_ modeler._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t know where it_t_s going.  Sceneloader might be the death of what could have been good_co_ and completely dynamic.  We could have grown our models instead of importing them.  I hope DK has some really old versions of BJS on his drive_co_ so that when all this fluff drives us batty_co_ we can branch an old version and get back to the basic fun... with an API that one can learn in a few days._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Gryff_co_ IF you ARE seeing an .exponent on Blender point lights_co_ I_t_m pretty sure the folks who coded the Blender-&gt_sm_babylon exporter would want to know that.  Maybe they now do.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Be good._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-04-09T01:51:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_I think that_t_s a spot light prop_co_ not a point light prop._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You are right of course - I had been playing with both the spot and point light in Blender and was not concentrating when I typed. I wondered if _qt_exponent_qt_ meant it was used for _qt_falloff_qt_ though I could not see what blender parameters influenced it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But that raises a question_co_ _lt_u_gt_both_lt_/u_gt_ the point light and spot light have falloff properties in Blender_co_ so why is there no _t_exponent_qt_ for the point light? Think of lanterns_co_ street light_co_ globe lights_co_ table lights etc. - lighting which has a limited range_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Every time I look at lights - I have questions._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-04-09T02:32:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ point light_t_s .intensity prop actually works pretty nice_co_ so_co_ with a point light_co_ intensity is the same as falloff... i suspect.  It should be that way with spotlight_co_ too.  intensity _eq_ power _eq_ shoot-distance... i would think.  I speculate quite a bit_co_ though_co_ and because i do that_co_ I_t_m wrong about 89.4% of the time when i say stuff.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-04-09T03:50:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_with a point light_co_ intensity is the same as falloff._lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It should not be though - and its a poor work around.. The main reason I was attracted to babylon.js was the ability to create a complete scene in Blender - meshes_co_ cameras_co_ animations and ... lights. I installed EasyPHP on my computer yesterday_co_ so now I can view .babylon files locally - and my experiments with lighting have been disappointing_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I want to create mood and atmosphere - dark and  brooding - but that does not look possible right now. What I see in Blender may not be what I get in .babylon _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_I speculate quite a bit_co_ though_co_ and because i do that_co_ I_t_m wrong about 89.4% of the time when i say stuff._lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You do a fine job Wingy - I have downloaded a bunch of your demo files - to learn from them _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_TC_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers.gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-09T04:53:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey Griff_co_ could you tell me what is missing according to you in babylon.js when you export your scene? What does it look like in Blender and what are the difference in babylon.js ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-04-09T13:31:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That might be a new (maybe pinned) forum topic. Blender Exporting - Before &amp_sm_ After.  You always wanted your own _qt_Goes On Forever_qt_ forum topic_co_ right gryff?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  You are free to answer deltakosh here_co_ of course_co_ but I bet if you started a new forum topic_co_ named something like that_co_ or similar_co_ introduced its purpose in the first post_co_ maybe DK would be willing to pin it.  Potentially_co_ it is a pretty big topic.  Then you could use the second post to loosely quote dk_t_s comment... and pour your heart out into an answer.  *shrug*_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You don_t_t need to be an expert.  I think deltakosh would be interested in hard facts_co_ or opinions_co_ or feelings_co_ or any words on the subject.  I am speculating again_co_ though_co_ so I could be wrong.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_PS_dd_ Thanks for your kind words.  You have become a friendly team member and valuable asset as well._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-09T15:50:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Agree with WIngnut for the new post _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-04-19T04:55:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ I hope gryff returns someday._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Meantime_co_ i have begun work on _lt_u_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/05-Cameras_qt_ rel_eq__qt_external nofollow_qt__gt_the cameras tutorial #5_lt_/a_gt__lt_/u_gt_.  First_co_ I saved the original_co_ as I always do.  Then I installed the version that I recently edited.  I removed touchCamera temporarily.  It will be re-added real soon_co_ or included in a new tutorial that talks about our 5 _t_specialty cameras_t_.  I consider touchCamera a specialty camera.  Others may not agree._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The current camera tutorial only covers freeCamera and arcRotateCamera.  I can put touchCamera back in there quickly_co_ if someone feels it needs to be done.  I am going to be working over the next few days.. to add more to the current tutorial_co_ or possibly make a tutorial called _qt_specialty cameras_qt_.  I need to think about it.  Suggestions certainly welcome._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The section that WAS in the cameras tutorial about touch cameras... was just a simple introduction to them_co_ anyway.  I think touchCameras will need to be talked about in much more depth... and it might not belong in the _qt_basic series_qt_.  I don_t_t know enough about touch cameras yet_co_ to write much good information about them.  I will get right to work on it_co_ though.  I realize that mobile devices use touch-events quite extensively_co_ so I will not ignore the toughCamera too long.  I do not use mobile devices_co_ but many others do.  The next few days of my life will be dedicated to learning all 5 of the _qt_specialty cameras_qt_... as fast as possible_co_ and quickly writing as much as i can about them_co_ somewhere._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Meantime_co_ take a look at the fresh cameras tutorials which covers free and arc.  Help me find and fix mistakes...  and make comments and suggestions here.  Shrink and relocate the new picture_co_ as wanted (or even remove it).  Adjust anything.  Be well!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_PS_dd_  DK - you and Davrous and friends... can write information documents in French_co_ in ascii_co_ and I will do my best to quickly translate to English and also into MD_co_ and make them look somewhat like a tutorial.  It doesn_t_t have to be pretty_co_ but type lots.  Reiterate much_co_ so the software translator has lots of text to work with. With those software translations and with looking at the code_co_ I should be able to quickly write some tolerable .md documents.  Just fire them at _lt_u_gt_wingthing at charter.net_lt_/u_gt_  I_t_ll translate_co_ markdown_co_ and put them all on a new wiki menu... maybe something like_lt_br_gt__qt_The Trailblazer Tutorials_qt_  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  We can enter new territories fast_co_ with bulldozers_co_ even if it gets messy.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-20T17:04:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You did a really great job on tutorials!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_From my point of view_co_ I think this tutorial (#5) should a least cover_dd_ free_co_ arc and touch. We have special articles for virtual joysticks and occulus. Anaglyph cameras are just free or arc with postprocesses_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-20T17:06:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The freeCamera can aim at a target_dd_ just use camera.lockTarget _eq_ vector3 or other object_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-20T17:07:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_BTW I would like to thank you so much for all the work you_t_re doing on tutorials. This helps A LOT!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-04-20T19:48:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks.  I will get touchCam put back in there within a day or two._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You say _qt_camera.lockTarget _eq_ vector3 or other object_qt_.  By _t_object_t__co_ do you mean a mesh?  How about a light? I don_t_t know why anyone would use a light as a target_co_ but still curious. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The docs claim it takes a _t_type_t_.  Users won_t_t know what  a _t_type_t_ is.  Should that be adjusted in the API for more clarity?  Is Temechon the man for that?  Should I PM him?  Should I post in documentation thread?  Is he still alive?  Thoughts?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This is what I see_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_freecamera.setTarget() - vector3 ONLY_co_ and does not lock._lt_/p_gt__lt_p_gt_freecamera.lockedtarget - vector3 or _t_object_t_  (light too?) - locks - no extra args for offsets like mesh.lookAt()_lt_/p_gt__lt_p_gt_freecamera.lookAt() - not planned._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_mesh.lookAt() - vector3 ONLY + extra args for offsets.  NEVER a mesh_co_ camera or light_co_ but _lt_u_gt_can_lt_/u_gt_ use mesh.position_co_ camera.position_co_ or light.position - a-ok.  Never locks._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_mesh.lockedtarget - not planned._lt_/p_gt__lt_p_gt_mesh.setTarget() - not planned. mesh.lookAt() is identical except for optional yaw_co_ pitch_co_ roll offsets._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think that_t_s all correct_co_ yes?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  (My brain hurts)  hehe_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Did anyone think about making freecam.setTarget allow a second arg - boolean?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_freecam.setTarget(mesh_or_vector3_co_ locked_or_not)?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then add a .target to freecam_co_ and if its set_co_ its a locked target.  If .target is clear_co_ no locked target.  Then remove .lockedtarget_co_ and use .target instead.  *shrug*  (Just ignore me)  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_By the way_co_ I really LOVE the pageup and pagedown keys I added to a freecam... for a project i was doing.  Should freecam have 6 keys?  Maybe SHIFTED up-cursor and SHIFTED down-cursor... make the freecam go up and down the Y-axis?  (I think that_t_s called ped-up and ped-down in the TV industry... abbreviation for pedestal-up and pedestal-down).  That would make a freecam... be REALLY _t_free_t__co_ eh? (Again_co_ just ignore me)  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Moving onward_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I will re-install touchCam in basic 5.  What about deviceOrientation? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Should I talk about the other 4 cameras _lt_u_gt_at all_lt_/u_gt__co_ in Basic #5?  These _t_special articles_t_ for occulus and VJ... should I link to those?  Do those special articles need to be made into md?  Someday? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Does deviceOrientation have a special article? Link to it_co_ from tutorial #5?  Will IT need a convert to md_co_ someday? Or just talk about it in tutorial 5_co_ maybe just after touchCam?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Occulus_co_ Touch_co_ VirtualJoyStick_co_ and deviceOrientation_co_ are really types of inputs for cam control_co_ right?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anaglyph is NOT just a different input control cam_co_ it is a completely different situation_co_ yes?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For example_co_ an anaglyph cam... can be controlled by Occulus_co_ Touch_co_ deviceOrientation_co_ or VirtualJoystick_co_ right?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_SO many questions_co_ huh?  *nod*.  Sorry._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-04-21T08:35:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ 3_dd_15 AM_co_ and I am starting to see _qt_the big picture_qt_ of the touchCamera.  It represents a step into the world of DOM gesture events (pointer events_co_ and static gesture events_co_ and manipulation gesture events).  There are _t_layers_t_ involved here which include our inputControllers_co_ hand.js_co_ and the code for the touchCamera itself._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The system looks like it is meant to keep the average user from being concerned over the details.  i think we will try to do the same (not too many details)_co_ in our tutorial_co_ if everyone agrees.  I will probably give them a small _qt_taste_qt_ of the system behind the touchCamera... just to give them some search _t_fodder_t_ (key words) so they can learn more on their own.  Someday_co_ in a separate document_co_ we could probably diagram how DOM gestures work with handJS and work with our inputControllers.  But for now_co_ I think the users of the Playpen Series tutorials just want to know how it works _lt_u_gt_for them_lt_/u_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But_co_ I _lt_u_gt_do_lt_/u_gt_ think that _lt_u_gt_somewhere_lt_/u_gt__co_ somehow_co_ I need to include a quick sentence about hand.js intercepting eventListener additions and removals... and maybe telling them to see hand.js for more information about that.  Anyone have thoughts about that?  (thx)  I _lt_u_gt_have seen_lt_/u_gt_ some users try to build their own camera controllers_co_ and maybe they will want to know that hand.js is involved in their eventListeners  *shrug*._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I suppose we need an _qt_Everything You Ever Wanted to Know About Hand.js - For Dummies_qt_ document_co_ someday.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_PS_dd_ Who is Simon Ferquel?  What does he call himself... here?  Is he here?  Apparently he has done quite a bit of work with oculus and anaglyph operations_co_ which appear to be IE11 only.  I did _lt_strong_gt__lt_u_gt__lt_a href_eq__qt_http_dd_//tinyurl.com/moyxqwp_qt_ rel_eq__qt_external nofollow_qt__gt_an English translate of a blog post_lt_/a_gt__lt_/u_gt__lt_/strong_gt_ by him.  And it looks like davrous... and a chap named Eric Vernie are involved_co_ too.  Trailblazers!  Yay!  Thanks_co_ you guys!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-21T18:20:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Too many questions _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_By object I mean something with a position property_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Temechon is the good guy for docs_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DeviceOrientation could be in tutorial #5_lt_/p_gt__lt_p_gt_For special camera I think links are good ideas_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_anaglyph can not be controlled by oculus. It is a really independent camera_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Agree about details_sm_ Keep it simple _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And for instance hand.js is not required anymore for ie11 (because ie11 directly support pointer events)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-04-21T19:38:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi.  Thanks for info._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The _lt_strong_gt__lt_u_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/05-Cameras_qt_ rel_eq__qt_external nofollow_qt__gt_new camera tutorial_lt_/a_gt__lt_/u_gt__lt_/strong_gt_ is installed.  I lightly-covered all 8 cameras (2 anaglyph).  I will be proofreading and testing links for a few days. Please do not make edits for 2-3 days_co_ but you can tell me things that need changing_co_ adjusting_co_ and fixing... here in this topic thread... and I will do them.   I am sure I have made many mistakes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I did not include a _t_constructor_t_ for the OculusOrientedCamera_co_ yet. I am still a bit short on knowlege about it_co_ but I provided plenty of links for users to learn about it.  I may need some expert help with the constructor.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ we can drop _qt_specialty_qt_ too... I made that up_co_ of course.  They just seemed _qt_special_qt_ to me... special purpose.  *shrug* _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Be well!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-22T23:35:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m not a huge fan of Specialty _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-04-23T01:36:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ _qt_specialty_qt_ is removed... but I just replaced it with _qt_unique purpose_qt_.  There is still a separation between the first 2 cameras and the last 5 cameras... in the document.  I can completely remove that separation and let the document flow right to the bottom without any sub-catergorizing of the last 5 cameras.  I_t_m easy.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That would make the bottom 5 cameras... not seem _t_unique_t_ at all.  It would make those bottom 5 cameras look just as common as any other bjs camera.  Thoughts?  thx._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The last 5 cameras ARE each _t_unique_t__co_ though... as they all require unique gear.  touch - uses a touch pad/screen_co_ devOrient... uses a mobile device with tilt sensors_co_ oculus uses the O.R. headset_co_ anaglyph needs 3d glasses_co_ and virtualJoystickCam puts _t_things_t_ on the user_t_s screen.  Maybe think carefully before _t_grouping_t_ the _t_unique purpose_t_ cameras...  in-with freecam and arcrotate.  *shrug*_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Speaking of vjcam and the virtual joysticks_co_ I need to add some more teaching about that._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What if user wants them reversed... cyan on right_co_ yellow on left?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What if user wants axes inverted? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What if user_t_s scene.clearColor is cyan or yellow? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If user wanted to explore BABYLON.VirtualJoystick in the API_co_ could it be done?  Could they find VirtualJoysticksCamera.leftjoystick._joystickColor and change its value?  Would they know it used a string instead of a Color3?  Would they know which strings are allowed?  Do I ask enough questions?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It IS kind of cool that a virtual joystick is a piece of canvas_co_ and not mesh.  That is why web colors and dom node stuff is used on vjCanvas.   Pretty cool.  I like it.  That overlayed-canvas system is good for all kinds of gui uses. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Do you know of a document where you and/or davrous talk about the virtual joysticks?  thx.  No need to answer my questions about how they work.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  I understand them.  I could write a separate tutorial about them_co_ I think. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But the api needs updating so users can browse a BABYLON.VirtualJoystick.... and learn its properties.  Our API is only rated to 1.9.0_co_ though.  Work work work.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Should I donate some money to the Temechon beer fund?  Are we going to have a picnic sometime this summer?  Can you get Microsoft to buy my plane ticket to it?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  PARTY!!  I_t_d love to meet you guys.  Someday_co_ maybe._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-23T02:32:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Perhaps we can try to send a PM to Temechon _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-23T02:36:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For Virtual Joystick you should ask Davrous (Or PM him)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-04-23T02:46:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yeah_co_ I found a document about the virtual joysticks... _lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/davrous/archive/2013/02/22/creating-an-universal-virtual-touch-joystick-working-for-all-touch-models-thanks-to-hand-js.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blogs.msdn.com/b/davrous/archive/2013/02/22/creating-an-universal-virtual-touch-joystick-working-for-all-touch-models-thanks-to-hand-js.aspx_lt_/a_gt_.  As far as Temechon goes_co_ I don_t_t want to bother him.  Last time I PM_t_d him_co_ i told him about .fov being listed twice_co_ and it never got repaired_co_ and I haven_t_t seen him since then.  I am scared that he is fed up with maintaining the API.  It is now two BJS versions behind_co_ and I don_t_t know anything about him.  I take it he is not one of your colleagues in the Paris MS offices?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I worry about Temechon.  Maybe he is overwhelmed and/or has some real life troubles.  I would hate to lose his knowledge_co_ good hard work_co_ and friendliness._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-23T02:51:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Let me try to talk to him_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-04-25T07:44:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ I guess I am done editing on the camera tutorial for the moment.  Anyone else who wants to edit on it_co_ fix my mistakes_co_ clarify_co_ add things_co_ please feel free to do so.  Thanks for the delay.  Maybe I/we should shrink that new picture?  It_t_s pretty big and _qt_in your face_qt_.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was also thinking about a small picture down in the oculus and anaglyph area...  showing a stereoscopic scene... to show the red-cyan shift of _t_eyeSpace_t_.  *shrug*  But its real easy to construct an anagylphFreeCamera or an anaglyphArcRotateCamera using the constructors I have provided... and SEE the red-cyan shift for themselves.  And then users can play with the .eyeSpace property and it_t_s all real easy... 3D glasses or not._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have not played with the Virtual Joysticks very much_co_ but it seems they could be used with ANY camera.  Our VirtualJoysticksCamera activates Virtual Joysticks automatically_co_ though. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t know much about the Oculus Rift_co_ but I suspect that IT controls the camera... via head-tracking.  So it would not be a good candidate for VJ (virtual joysticks).  But anaglyphFreeCamera could use them nicely._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Although I have no touch devices_co_ I think the VJ camera is touch-ready.  I used my mouse to control them during my testing of the constructor in the tutorial.  In David Rousset_t_s video_co_ we don_t_t see his thumbs on the screen_co_ but I think that is because of the way the video is recorded.  I think he is controlling those VJ_t_s... with his thumbs.  He has both joysticks active at the same time_co_ and that would require two mouse_co_ two joysticks_co_ or... a pair of David Rousset thumbs.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hope everyone is well._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-25T15:52:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oculus Camera is not...satisfying to me right now. We will rewrite it quickly_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-25T15:53:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__qt_Friend and hero_qt_ ? _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-06-04T15:20:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wake up_co_ Tutorial Talk topic!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_   Hi gang.  I have noticed that all of our github wiki-based tutorials have a _qt_menu_qt_ (pages) on the right side_co_ these days (_lt_strong_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/How-to-use-Actions_qt_ rel_eq__qt_external nofollow_qt__gt_like this_lt_/a_gt__lt_/strong_gt_).  This reduces the available width for tutorial content.  It makes many of our code examples in our tutorials... word wrap.  Did a template get changed somewhere_co_ and do we editors... or readers... have the power to remove the right side menu?  Anyone know?  Thanks for any information on that._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To go a step further_co_ github wiki pages do not _t_scale_t_.  What I mean by _t_scaling_t_ is... the text on the pages does not re-FLOW... when using control-mousewheel to change font sizes_co_ or when resizing (restoring) the browser window.  This often happens when the CSS uses _qt_px_qt_ for its sizings... instead of percentages.  Does anyone know if we can do our own stylesheets for the Babylon.js wiki pages_co_ or maybe use a stylesheet loaded last thing_co_ so we can do our own style over-rides?  I can read about it myself_co_ too.  I was just hoping to take a shortcut to knowledge_co_ here.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For those who have never seen great scaling..._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.blender.org/documentation/blender_python_api_2_63_2/info_overview.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.blender.org/documentation/blender_python_api_2_63_2/info_overview.html_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can control-mousewheel that puppy to HUGE fonts before that scollbar on the bottom of the screen turns-on.  That_t_s because the text re-flows.  I like webpages that do good scaling.  Maybe it is because I am getting old and need big fonts.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My primary concern_co_ though_co_ is the loss of page width caused by the right-side PAGES menu and I am wondering IF that was something chosen by Babylon.js admin_co_ or IF it is something that github wiki admin forced upon us_co_ or what.  All comments welcome_co_ as always.  I hope everyone is well._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]