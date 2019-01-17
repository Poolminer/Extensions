[{"Owner":"joshcamas","Date":"2014-09-21T05:28:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey guys!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve been trying to set up a world in my game. I_t_m building this world in blender_co_ btw._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_First I tried making a small world. It worked quite well_dd_ _lt_a href_eq__qt_http_dd_//steinhauer.x10.mx/camera/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//steinhauer.x10.mx/camera/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The terrain is a sculpted plane with texture-painted material. Yay!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But... when I made the map bigger_co_ the texture became FAR too large to handle_co_ and such._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So I_t_m (trying) to set up a _qt_chunk_qt_ system - many planes side by side become the terrain._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any other ideas? _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks!_lt_/p_gt__lt_p_gt_-Josh_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_PS_dd_ Also_co_ is it possible to load custom properties of objects in babylon? Thanks!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-09-21T15:51:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi joshC!  Take a look at our tutorials... _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/Tutorials_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/Tutorials_lt_/a_gt_ .  At the bottom of #2 (basic elements) there is talk about Kostar_t_s tiled ground_co_ and a URL to a tasty tutorial he made_co_ regarding it. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As far as custom properties (established in Blender?)... I don_t_t have an answer for that.  But I DO know that adding custom properties to your scene items AFTER they have been imported... is as easy as adding properties to ANY JS object.  Pseudo-speaking_co_ use..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_var myItem _eq_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_24646_qt_ rel_eq__qt_external nofollow_qt__gt_scene_lt_/a_gt_.getWhateverByWhatever(name/id/tag)_sm__lt_/p_gt__lt_p_gt_myItem.someproperty _eq_ whatever. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There are lots of getter methods on the scene class object.  (You know all this already_co_ don_t_t you?  *nod*)  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I love the title of this thread_co_ by the way.  It is the BIG pre-project question_co_ isn_t_t it? _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-09-21T20:39:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_haha thanks for the link!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I couldn_t_t think of a better word for the thread_co_ so that had to do xD_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT_dd_ On another note_co_ I really would like having a editor using babylon_co_ instead of using blender as the world editor._lt_/p_gt__lt_p_gt_I_t_ve seen worldMonger_co_ but that_t_s not enough. I_t_m wanting to texture paint the world! Is this possible in babylon?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT 2_dd_ After some thought_co_ there are 2 possibilities_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1) I create the terrain itself in blender_co_ aka sculpt and texture paint it_co_ then in an edited-version of the babylon editor I add rocks and trees and houses_lt_/p_gt__lt_p_gt_2) OR I use worldmonger_t_s code and combine it with the babylon editor - then I sculpt_co_ texture paint_co_ and then add the rocks and stuff for each terrain chunk._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The edited-editor (_lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_) would not be drag and drop - instead_co_ it would be kinda like the Elder Scrolls_t_ construction kit... you click _qt_add new object type_qt_ then say where it is located_co_ and then you can _qt_paste_qt_ that into the world whenever you want._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Which idea sounds easier and better? Any other ideas? _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-09-22T04:12:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Dad72 has what appears to be an excellent editor called CastorEngine.  But it is not modeling software.  It is a scene assembly and game-logic tool_co_ as best I can tell.  And_co_ I_t_d say its in alpha or even pre-alpha... yet it is very powerful-looking._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But_co_ generally speaking_co_ yes_co_ you can paint the scene and the ground materials.  Take a look at my world famous (pfft)  _lt_strong_gt__lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/skyboxes/skybox_tour.htm_qt_ rel_eq__qt_external nofollow_qt__gt_Skybox Tour_lt_/a_gt__lt_/strong_gt_ (as seen on the _lt_a href_eq__qt_http_dd_//www.babylonjs.com/_qt_ rel_eq__qt_external nofollow_qt__gt_BJS main website_lt_/a_gt_).  Hit [ until you get to Ely37 and then pan the camera around.  Nice_co_ eh?  I didn_t_t paint those skybox textures_co_ but somebody did_co_ and why not you_co_ too_co_ Josh?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now painting the texture of heightMapped ground tiles while viewing the scene with Babylon.JS... I don_t_t think anyone is doing that quite yet.  We_t_ve been waiting for YOU... to build the Super HeightMap Painter for us.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Believe me_co_ you have all the tools you need_co_ including the raycasting mentioned in another thread.  A little bit of 2D paint program_co_ mixed with Blender_co_ exported to Babylon_co_ then tweaked_co_ animated_co_ and game-logic_t_d in JS_co_ and magic can happen. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Patience is important_co_ and here in the early days of webGL_co_ work-arounds and compromises will be needed.  But again_co_ it_t_s all here or near.  Babylon.JS is a fantastic framework_co_ and it_t_s primary code wranglers are GREAT (smart_co_ nice_co_ accommodating_co_ patient with newbies_co_ etc etc).  Sure_co_ it is a little French around here_co_ but these guys and gals have blazed some excellent trails and are keeping the framework right up on the bleeding edge of _qt_what_t_s happening_qt_ for webGL tech._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Get comfy in 2D paint_co_ for a while longer_co_ I_t_d say.  And_co_ make Blender a good friend.  The BJS framework is second to none_co_ and IT will not be the thing that gets in the way of getting things done.  It will be the other tools_co_ or the webGL API_co_ or the speed of JS... that will throw rocks at your project_co_ not the framework.  BJS is feature-packed_co_ and much easier to use than all the other webGL frameworks.  Plus_co_ if you don_t_t have the device you need_co_ then write it_co_ or ask for it_co_ and it will happen if it_t_s possible and wise.  This is a great forum with excellent people hanging around it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Everything you need... is right here... but not necessarily handed to you on a silver platter.  Read read read (and steal code from others.)  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  And don_t_t forget to look at Dad72_t_s CastorEngine... _lt_a href_eq__qt_http_dd_//castorengine.com/image.php?class_eq_galerie&amp_sm_id_eq_Images_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//castorengine.com/image.php?class_eq_galerie&amp_sm_id_eq_Images_lt_/a_gt_ ._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-09-22T22:43:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yee I never planned on not using blender for modeling. I am personally terrible at modeling_co_ but I_t_ve worked on a few animations so I know my way around_co_ somewhat._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I considered CasterEngine_co_ but I_t_m assuming it_t_s english translation isn_t_t that great_co_ and plus I like making my own editors and such. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ It looks VERY impressive_co_ and I may end up using it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m just wondering if it_t_s possible to edit a texture_t_s... texture during run time. _dd_/_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Blender simply will not work for sculpting and texturing. Multiple planes requires multiple materials and textures_co_ and each texture needs to be saved and loaded by hand. To even edit multiple planes at once you need a plugin! The problem is if I made my own terrain editor it would need SO many features... to be able to grab_co_ flatten_co_ and so much more. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-09-23T00:16:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yep_co_ you want to load your VW van with painting tools_co_ and drive into the mountains and valleys of a webGL scene_co_ and paint land.  It should save the texture every 2 minutes_co_ and have a 100-level UNDO.  You want to get right into the cracks and crevices of the mountain_co_ and paint little critters peeking out from between the rocks_co_ and get right down to _qt_painting-with-a-needle_qt_ level.  You want auto-dithering_co_ opacity_co_ and all the brushes found in PhotoShop.  You also want an image sprayer_co_ packed with grasses and flowers and leafs and moss_co_ and a special sprayer for dirt. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Your _qt_paint van_qt_ has a half-$million in lights (light up your current work area in about 4000 ways)_co_ and also a big screen tv and stereo... and is packed with free music_co_ TV shows_co_ and movies... all of which you can use while painting mountains._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And it needs to have full vertex drag_t_n_t_drop 3D editing and soft-selection_co_ warps and binds_co_ full vertex and face welding_co_ smoothers and un-smoothers_co_ and this model editor also auto-saves and has a 100-level undo.  It should also do your laundry and fetch groceries_co_ and grow pot for ya.  (yay!)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Well?  Have you got it written yet?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  I_t_ll take a copy when you get it all done_co_ if that_t_s cool._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m just chewin_t_ the rag with you_co_ as you know.  Dreaming.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  I would guess (I do that often)... that one of the larger hassles of live-editing textures... is writing (the edited texture) to a drive_co_ from a browser.  That activity is somewhat discouraged. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But _qt_submitting_qt_ a texture to a server_co_ and then re-loading that texture into the scene from the originating site... might be a little more security-tolerable. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Your dream is a fine one_co_ J... and I suspect that you are not the only person dreaming it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think you should go for it_co_ J.  Think-out your rough game plan_co_ write up some pseudo code (flow chart)... you would be a Babylon.JS hero if (when) you pulled it off... that_t_s for sure.  What a fun environment that would be_co_ huh?  nod.  I_t_m with ya!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-09-23T00:21:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wacko.png_qt_ alt_eq__qt__dd_wacko_dd__qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-09-23T00:23:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m not sure at all what I want..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have never done terrain design before_co_ but you seem to know what your talking about. Maybe you should write it! &gt_sm_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jokes aside_co_ Ima at least *try* to built a extremely simple terrain editor._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How will terrain work?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My current idea consists of _lt_em_gt_chunks._lt_/em_gt_ A chunk is a (something x something) plane_co_ each with a different texture. Each chunk can hold static objects_co_ such as rocks and houses and such. These objects are loaded when the chunk is loaded. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What_t_s cool is how I_t_ll load chunks to edit in the terrain editor would nearly be the same way these chunks are loaded in my game. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The static object idea is a far off dream. What I want to build first is simply the planes-loading / saving system. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think that I would create a custom _qt_world-file_qt_ that the game will load from._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ these chunks would probably be saved in a 2x2 array._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-09-23T00:32:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well don_t_t be sad over it_co_ if possible.  Start small_co_ have fun_co_ prepare for lots of mind changes.  You have an excellent free (and easy) framework_co_ a powerful programming language underneath it_co_ an entire planet for an audience_co_ things are actually looking very good_co_ right?  This is an exciting time and you have an exciting environment to play-in.  PARTY!!!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-09-23T03:23:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The beginning of it all_dd_ _lt_a href_eq__qt_http_dd_//steinhauer.x10.mx/editor/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//steinhauer.x10.mx/editor/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-09-23T16:17:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Love it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-09-25T01:22:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve been trying to get the code from worldmonger to this project_co_ but have been having trouble._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So I_t_m going to start from the beginning._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Question 1_dd_ How do you access a vertex_t_s x_co_ y_co_ and z? Thanks!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT_dd_ Never mind_co_ got that! _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am however_co_ confused on how to edit these vertices along with the faces..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Could someone show an example of editing vertices_t_ positions_co_ and update everything to make it look normal? Thanks!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-09-25T15:42:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can get the XYZ position of a point_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var pickInfo _eq_ ground.pick(evt.clientX_co_ evt.clientY)_sm_var posY _eq_ pickInfo.pickedPoint.y_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-09-25T17:33:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey josh_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Did you read this _lt_a href_eq__qt_http_dd_//pixelcodr.com/tutos/trees/trees.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//pixelcodr.com/tutos/trees/trees.html_lt_/a_gt_  ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Good luck _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-09-25T23:30:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_hmmm..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I put your code into mine_co_ and it got some strange results..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The vertices are moved_co_ yes. But it seems the faces are not... correct._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ the ground is only visible when the camera is moved to a very specific location. If not_co_ it disappears! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT_dd_ nvm! When I subdivided it_co_ thats when it broke! yay!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-09-25T23:51:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_HOLY CRAP IT DOES SOMETHING OMG IT IS AMAZING XD_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here it is_dd_ _lt_a href_eq__qt_http_dd_//steinhauer.x10.mx/editor/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//steinhauer.x10.mx/editor/_lt_/a_gt_ (It takes a bit to load the textures)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT_dd_ Huzzah! I made it so when you use a brush it also affects the planes near! Now I need to fix corners!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT 2_dd_ Huzzah even more! Now corners work!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]