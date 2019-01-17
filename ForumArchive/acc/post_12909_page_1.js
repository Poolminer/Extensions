[{"Owner":"eljuko","Date":"2015-03-04T15:47:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello there_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was wondering how to create volumetric fog for my future project. First i was thinking to make the fog with particles somehow_co_ but i guess it can_t_t look that good._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any hope getting similar results as in the image below?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//help.chaosgroup.com/vray/help/150SP1/images/examples/vrayenvironmentfog/height_20.png_qt_ alt_eq__qt_height_20.png_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2015-03-05T13:58:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_According to the screenshot_co_ I think you can do it using a post-process with the depth renderer instead of adding objects in the scene but not sure_lt_/p_gt__lt_p_gt_I_t_ll try it for my pleasure ^^_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-05T14:45:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnd for my pleasure.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  Low-laying fog is very cool.  I_t_d love to see it laying in the valleys of a heightMap ground.  Unfortunately_co_ to REALLY get _lt_u_gt_great_lt_/u_gt__co_ rolling_co_ low-laying fog_co_ I think we would need to use _qt_fluid dynamics_qt_.  Fog acts like a liquid_co_ sometimes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd_co_ fluid dynamics in JS?  phew.  My cpu would explode from over-torque.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI thought about using a giant _qt_slab_qt_ rectangle for eljuko_t_s challenge... setting half-transparency and then using a post-process BLUR or post-process rendering pipeline BLUR on it.  The only problem is that when the camera is inside-of a half-alpha box_co_ the view is clear... no fake fog.  It looks good when the camera is outside-of the blur/fog box_co_ though.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tFog is a different system than your average BJS system_co_ that_t_s for sure.  Engine-based.  Unique.  Eljuko_co_ our current fog system can be seen and played-with... at #13 Environment playground demo... _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/?13_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/?13_lt_/a_gt_ and is _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/babylon101/environment_qt_ rel_eq__qt_external nofollow_qt__gt_documented here_lt_/a_gt_.  (environment doc) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI see no simple way to make the fog lay-low.  I_t_m not sure _lt_strong_gt_how_lt_/strong_gt_ a person would make fog happen _lt_strong_gt_only_lt_/strong_gt_ in the area that is.... say... 3 units above y_eq_0.  (waist-deep fog above ground plane).  But there_t_s some real smart people nearby_co_ including professional BJS helper-God Luaacro.  He_t_s a genius.  Superhero.  He_t_s gonna kick this issue_t_s butt.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eljuko","Date":"2015-03-05T19:10:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for the replies._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_i suppose i could you use just a plain _qt_plane_qt_ and scroll some nice textures on it hoping it wont look completely stupid (i_t_m no rocket scientist)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But let see if Superhero(s) have interest in this  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"spritefire","Date":"2015-03-06T06:47:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think having a fog that is all the one level of height shouldn_t_t be too difficult to achieve. Just use a pane that covers the area that uses a texture that is grainy and has opacity along with FOD for the horizon. To have the fog move you could use a dynamic moving texture moving very slowly and for when you view below the fog line having a grainy opacity texture on a pane that is in front of the view port (and the pane raises and lowers to meet the horizon of the fog) to give the illusion of immersion and thickness. Maybe also could add the very_co_ very_co_ very slightest reflection (like how the water effects are done) just to make it awesome._lt_br_gt_That said this same technique (pane in view port) could also be used for underwater effects too._lt_br_gt__lt_br_gt_That way it is super light weight on the processor (would work on mobile) and easy to achieve._lt_br_gt__lt_br_gt_I don_t_t think you would need fluid dynamics unless you wanted it to have a smoke affect where wind would create currents (which would be awesome) however that unit of the course I am doing to create shaders etc is a few months away so can_t_t create something like that (just yet)._lt_br_gt__lt_br_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-03-06T09:02:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I don_t_t think making a textured plane is enough to achieve the result shown on the first post. The trick is that the further away in the fog volume a pixel is_co_ the stronger the fog color will be on that pixel._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_First of all_co_ there_t_s already a volumetric light effect in BJS that may be interesting to check out_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/?24_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/?24_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve found _lt_a href_eq__qt_http_dd_//www.terathon.com/lengyel/Lengyel-UnifiedFog.pdf_qt_ rel_eq__qt_external nofollow_qt__gt_this article_lt_/a_gt_ which may be of interest_co_ if any of you has the time &amp_sm_ courage to dive into it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Hope that helps._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-06T18:48:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Great comment and link_co_ jahow!  Wow.  Might be _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/?25_qt_ rel_eq__qt_external nofollow_qt__gt_#25_lt_/a_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Spritefire_co_ getting a still-pic to look like that... yeah_co_ trickery is possible.  Being able to nav a character around and have it continue to look good... much harder.  (you know)   haha_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Using our new volumetric light scattering (VLS) system... to make a low-laying fog bank_co_ eh?  Now there_t_s an interesting idea.  hmm.  I might try that.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eljuko","Date":"2015-03-07T14:56:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_will keep this all in my mind once i jump in to it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Wingnut_co_ can you throw a snapshot if you get nice results? _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ i_t_d gladly see what_t_s the VLS capable of._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_- thanks _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-07T17:26:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again_co_ eljuko_co_ and other forumers!  Hope you (and the rest of the forum gang) are well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ my intent was to just try radiating some VLS godrays up from a basic ground plane... but...  that seemed too boring for a Saturday morning (you know_co_ cartoons and all).  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSo... the particles system.  erf.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1UNX9H_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1UNX9H_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(that PG - temporarily broke_co_ check back soon)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s ok_co_ and not ok.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  That_t_s some THICK FOG_co_ eh?  *nod*  Around 29000 particles in a low-laying rectangle.  61 rows/units by 61 columns/units... 7 units deep.  (1 unit spacing between particles)  Alternating rows are shifted .5 units toward -x (to make it look less like a farmer_t_s field - fill in the gaps between particle columns a bit).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLike so many of my other particle demos (see The Wingnut Chronicles pig-thread)_co_ I localize (put it into _lt_u_gt_my_lt_/u_gt_ code) the entire BJS ParticleSystem_co_ and then hack-away at it.  In this demo_co_ I made modifications to about 30% of the BJS ParticleSystem_co_ so_co_ when optimized/cleaned_co_ about 70% of the particle system code can be removed from the playground/project.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSet line 21 to true_co_ and you have each particle being a VLS godray emitter_co_ too.  Can you say FPS hog?  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tOther fun adjustments include particle color1_co_ min and max sizes_co_ particle texture_co_ godrays exposure.  I have color1 set to dark grays_co_ currently (line 548)_co_ but there is such a HUGE concentration of particles in a single place... that it all appears white... and still quite thick. *scratch scratch*\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s TONS of things to tweak/adjust in that demo... and I can explain more about _qt_the hack_qt_ later_co_ if you want to hear more.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ grab a zip_co_ take it home_co_ hack away_co_ consider it _lt_u_gt_your_lt_/u_gt_ code.  Or play in the playground and make more saves (anybody)... and tell us the URL_t_s to successes (or to failures_co_ too).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr maybe ignore the demo_co_ and me_co_ because... it just _qt_ain_t_t doin_t_ it_qt_.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tGood luck_co_ be well.  I may still try a VLS godrays solution WITHOUT using particles. It depends on which cartoons I watch for the rest of the day.  Or maybe I_t_ll watch a John Wayne movie and try some super-macho solution.  heh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere have been SOME reports that the fog isn_t_t working the first time.  Reload until it works (in theory).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAn interesting challenge_co_ eljuko!  For being a newbie_co_ you sure do know how to bring us _qt_professional-grade_qt_ adventures to try.  _lt_img alt_eq__qt__sm_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-10T17:11:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ I tried another version of the _qt_low-laying fog_qt_ challenge  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a rel_eq__qt__qt__gt_http_dd_//playground.babylonjs.com/#5R8A1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t50 layers of thin white boxes with decreasing .visibility as the stack gets taller.  Looks ok as long as you don_t_t nav-around too much.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe shift variable should be set to 0 for a linear stack.  I made the stack shift sideways a bit_co_ just for fun.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis playground has a little extra feature.  It talks to you (text).  Yet another way for Wingnut to yap.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-10T22:28:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Nice !!_lt_/p_gt__lt_p_gt_Wingy your fog is really convincing from above. Not sure this method of multi layering could be applicable in real case_co_ but it_t_s nicely done._lt_/p_gt__lt_p_gt_Also love your yapping HTML DOM text! Great idea_co_ as always!!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-11T05:47:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWingy\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ it_t_s slow on my old computer at home (10 fps)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut really really convincing !!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd so funny  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ /_gt_  _dd_ speaking PG !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI like this way of faking too... maybe 10 layers only would have do the job with best perfs ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#5R8A1%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#5R8A1#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tless convincing... _dd_ 10 layers only_co_ but bigger to give impression of far distance_co_ greater scaleY too (30 fps)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-11T07:59:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Both example run at 60 fps on my pro desktop computer_co_ yeeaah_lt_/p_gt__lt_p_gt_nice job Wingy !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-11T19:18:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thx.  Fun.  We could probably increase performance even more by NOT putting a different material on every box.  Since .visibility is not a .material property_co_ all the layers could use the same material._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But as it is_co_ a person COULD change the diffuseColor of each layer... slightly.  They could even put a black and white (all grays) fire texture on some middle or upper layer(s)... and its moving _qt_vapors_qt_ could be seen from above.... because the upper layers are very transparent._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And how about an all-grays fireTexture on EVERY layer?  Wow. All the same fireTexture?  Each layer has its own?  Lots of fun to be had... when using _qt_the stack_qt_ method.  Fisher-Price and Playskool_co_ eat your hearts out.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Ain_t_t NO toybox like a BJS toybox._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-12T08:39:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Another idea... don_t_t know_lt_/p_gt__lt_p_gt_Well_co_ when you give to vertices of a same face different colors_co_ the GPU interpolates colors when rastering_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let_t_s know imagine you could do the same with alpha_co_ not color._lt_/p_gt__lt_p_gt_Probably a new fragment shader would be needed (well_co_ a new kind of material) to create some alpha gradient along the height of the mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So we_t_ll do the job with a lone mesh with this kind of material._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any thoughts_co_ GLSL experts ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eljuko","Date":"2015-03-13T07:31:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sorry for late reply_co_ been kinda busy at _lt_strike_gt_work_lt_/strike_gt_ playing heroes of the storm  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Wingnut_co_ that sure looks _lt_strong_gt_amazing_lt_/strong_gt_! Getting stable 60fps with both_co_ no problems. I_t_ll look closer once i land back to my PC_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_74586_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_12909_qt_ data-ipsquote-username_eq__qt_Wingnut_qt_ data-cite_eq__qt_Wingnut_qt_ data-ipsquote-timestamp_eq__qt_1425749197_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_For being a newbie_co_ you sure do know how to bring us _qt_professional-grade_qt_ adventures to try.   _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_    - I_t_ll do my best  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-13T14:18:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks Eljuko... good to hear that we might be on-track to accomplish the challenge.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  It_t_s been fun so far._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jerome... just maybe_co_ we have alpha interpolation already built-in._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Materials/babylon.standardMaterial.js#L302_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Materials/babylon.standardMaterial.js#L302_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Only mentioned once in that class..._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_ if (mesh.hasVertexAlpha) {    defines.push(_qt_#define VERTEXALPHA_qt_)_sm_}_lt_/pre_gt__lt_p_gt_Where is it used?  In the default shader (a gorgeous work of art_co_ by the way)..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Shaders/default.fragment.fx#L677_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Shaders/default.fragment.fx#L677_lt_/a_gt_ ..._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_#ifdef VERTEXALPHA    alpha *_eq_ vColor.a_sm_#endif_lt_/pre_gt__lt_p_gt_This means... if we use Color4 data for our vertex colors (which includes an alpha component in the 4th slot)_co_ and set the mesh.hasVertexAlpha _eq_ true... we should be fartin_t_ through silk._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And we are_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1UHFAP%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1UHFAP#5_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Line 132... blankmesh.hasVertexAlpha _eq_ true_sm_  // Turn on the magic!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Line 78 area - the colors array.  All are now type color4.  Points 0 &amp_sm_ 1_co_ no alpha... they are at the top of the mesh.  Points 6 &amp_sm_ 7_co_ half alpha... they are halfway-up the mesh.  The remainder of points... all low on the mesh and high on the alpha.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_SO cool.  Deltakosh sure takes good care of us_co_ eh?  There_t_s MANY toys in our BJS toybox that we haven_t_t even discovered_co_ yet.  I_t_m going to build a statue of Deltakosh on my rental apartment front lawn._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jerome_co_ since you were the one to think-up this idea (the second time - apparently Deltakosh nosed you out for first time)... then you should be the first to try the one-box low-laying fog.  (if you wish).  I think you are going to hit one big show-stopper.  When the camera goes inside-of the fog box_co_ I think the camera view will go _qt_clear_qt_... showing no fog.  That is prevalent in my demo_co_ too.  Alpha is a surface thing_co_ not a _qt_volumic_qt_ thing. (Wingy grins at Jerome about the term _qt_volumic_qt__co_ again.)  We had this issue with the other attempts_co_ as well._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But still...good job_co_ Jerome and Deltakosh.  This _qt_dithered alpha_qt_ has lots of applications/uses_co_ but maybe not for this.  All in all_co_ this is still a feature/idea that rocks!  I love it.  Party on!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-13T14:39:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1UHFAP%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1UHFAP#6_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You were right _dd_ alpha is interpolated as well by default !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just changed quickly the shape (convex now)_co_ colors (only white)_co_ alpha (from 0.4 to 1) and deleted the speculars._lt_/p_gt__lt_p_gt_It could do the job after some refining_co_ I guess _dd_ no more light reflection and better gradient. Or a better material applied._lt_/p_gt__lt_p_gt_Don_t_t know ..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-13T17:00:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_nod... that demo was used to experiment with the red and green specular _qt_triangle_qt_ reflections that would _qt_travel_qt_ in-to and out-of the concave areas... when you navved the camera in a certain way._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was doing puppy-level experiments with lighting normals and light placements... to see if/how I could enhance those pretty specular triangles that happened in the dents.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Lighting for plotted mesh... 101.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  The scene has (had) lots of unnecessary debris from those experiments._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1UHFAP%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1UHFAP#7_lt_/a_gt_ (full alpha)   See the exciting green specular triangle in the hole?  Some mathematics somewhere... decided that should be there.  heh_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And then we puppies learn about BJS _qt_supercolors_qt_... the abilites to crank color levels all the way up to level ?._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1UHFAP%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1UHFAP#9_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_line 16... I use a supercolor level 3 for my light_t_s specular color.  BOOM_co_ the triangle lights-up like neon._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe someday we_t_ll allow BABYLON.Color3.Blue(5) _eq_&gt_sm_  Color3(0_co_ 0_co_ 5)  (mad scientist at work)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-13T19:03:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I didn_t_t even know we could go higher than 1 for rvb values !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2015-03-16T14:26:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey I still never tried to do using a post-process !_lt_/p_gt__lt_p_gt_But_co_ the effect you_t_re searching for_co_ will you set the camera into the fog ? Or always over it ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe you can use a procedural texture applied to a plane ? I_t_m maybe wrong_co_ what do you think ?_lt_/p_gt__lt_p_gt_This method is according to the Wingnut method with the planes (2nd example)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]