[{"Owner":"fenomas","Date":"2015-03-07T09:06:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is there any current or planned support for decals - i.e. projecting a texture onto a mesh?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t see anything in the APIs_co_ but from looking at how shadows work it seems like the engine might already have most of the needed moving parts._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If there_t_s already been discussion of this a pointer would be great._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-08T18:11:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_you can set texture.coordinatesMode _eq_ BABYLON.Texture.PROJECTION_MODE as a good first step _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-09T07:51:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for the reply_co_ but it doesn_t_t give any hints what the answer to my question is._lt_/p_gt__lt_p_gt_Also_co_ there don_t_t seem to be any docs or tutorials that discuss projection mode in any way. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Could you maybe wrap one or two more words around it?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-09T14:53:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thahaha!  Boy_co_ have I been in YOUR shoes a few times_co_ Fenny.  Careful... Deltakosh will label you as a _qt_puppy_qt__co_ and that is a fate worse than herpes. _lt_img alt_eq__qt__dd_D_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMetaphorically speaking_co_ you are expected to know how to split atoms... after your public tour of the nuclear power plant.  heh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m just having some fun_co_ here.  Actually_co_ it is _lt_u_gt_me_lt_/u_gt_ that is supposed to TRY to make sure we have documentation for all framework features_co_ and I have fallen behind in that responsibility.  Unfortunately_co_ I need to do the very same research as you are needing to do_co_ Fenomas... just so I can write some more documentation on this subject.  (but I love it)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst_co_ let_t_s get a very accurate definition of _qt_decal_qt_.  Let me try one... and Fenny_co_ you can correct it_co_ adjust it_co_ or do your own.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDecal - a texture that is _qt_placed upon_qt_ another texture/material... without needing texture coordinates for it.  It can be easily sized so that it APPEARS to be similar to a _lt_u_gt_sponsor _qt_sticker_qt_ placed on the side of a race car_lt_/u_gt_.  The sticker texture then moves _lt_u_gt_with_lt_/u_gt_ the car_co_ and _lt_u_gt_does not shift its location_lt_/u_gt_ upon the car whatsoever.  It becomes part of the diffuseTexture of the car... and it _lt_u_gt_can be_lt_/u_gt_ placed _lt_u_gt_after_lt_/u_gt_ the initial rendering.  (How_t_s that?)  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tNow let me tell you what I_t_ve found so far_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAccording to our MSDN-based tutorial called _lt_a href_eq__qt_https_dd_//www.eternalcoding.com/?p_eq_303_qt_ rel_eq__qt_external nofollow_qt__gt_Unleash the StandardMaterial_lt_/a_gt_ (far down in the _qt_ReflectionTexture_qt_ section)_co_ we can read that Spherical_co_ Cubic_co_ Planar_co_ and Projection... are called _qt_kinds of reflection_qt_.  This MIGHT imply that these _qt_kinds_qt_ or _qt_modes_qt_ are _lt_u_gt_ONLY_lt_/u_gt_ used with _lt_u_gt_reflectionTextures_lt_/u_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut that might not be true.  We would probably need a _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/search?utf8_eq_%E2%9C%93&amp_sm_q_eq_PROJECTION_MODE_qt_ rel_eq__qt_external nofollow_qt__gt_github search for PROJECTION_MODE_lt_/a_gt_ to learn how/when it is used or taken into consideration by other BJS systems.  (primarily... material/texture systems_co_ of course)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow for my pathetic test playground... _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1215MA_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1215MA_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was trying to _qt_project_qt_ (decal) the _lt_a href_eq__qt_http_dd_//upload.wikimedia.org/wikipedia/commons/5/51/Army-officer-icon.png_qt_ rel_eq__qt_external nofollow_qt__gt_picture of the officer_lt_/a_gt_... onto the side of an already-textured sphere.  It works... but it_t_s seemingly not sizeable_co_ and it moves-around on the sphere because it is a reflection texture.  This is not really what you/we are seeking.  What WE want... is more like a slide projector (spot light that _qt_shoots_qt_ an image).  We want the projected texture to move with the mesh (diffuse-ish)_co_ and not with the reflection.  The slide projector/texture projector... is attached to the car... or at least CAN be.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes any of this sound correct?  I hope so.  Otherwise I need a definition correction for the term _qt_decal_qt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is an old Bryce render that I THINK shows what is wanted...  _lt_a href_eq__qt_http_dd_//webpages.charter.net/wingthing/img/projector.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//webpages.charter.net/wingthing/img/projector.jpg_lt_/a_gt_  (the ISS projected onto the side of a hill).  Slide projector.  Movie projector.  Spotlight with picture attached.  Yay! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy projection (in that picture) is blurry_co_ but a GOOD projector should be able to blur_co_ or not. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tStickers.  Extra textures_co_ placed upon mesh anytime.  No need to have them in place prior to initial scene render.  Sound right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ here we go. Time to try to _t_crowbar_t_ secrets and cool ideas from Deltakosh and other renderGods.  Here_t_s a method I haven_t_t tried yet...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDeltakosh_co_ please... help us!  We don_t_t know what we_t_ll do without your beacon of guidance!!  Please... think about the starving CHILDREN (and their love of puppies)!!!  (noooo_co_ they won_t_t EAT the puppies_co_ geez!)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBlech_co_ I_t_m not very creative or fluent with my begging-to-avoid-legwork methods_co_ am I?  _lt_img alt_eq__qt__sm_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tDeltakosh COULD BE blowing breadcrumbs off-of his table_co_ and seeing if we can conjure a solve on our own.  I _lt_u_gt_do like_lt_/u_gt_ this trait about him.  When a fart is difficult to pass_co_ and fart-assistance is elusive_co_ then the _qt_hey_co_ I did it all by myself_qt_ fart is more appreciated.  _lt_img alt_eq__qt__sm_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  Or_co_ something like that_co_ anyway.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am the opposite.  If a user asks a question_co_ I like to drown them in TMI.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  But I have much more free time than DK.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYep_co_ the decal.  It_t_s related to the spotlight image projector that I have wanted to accomplish for awhile_co_ yet not the same.  One is lightMap_co_ the other is textureMap. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor some reason_co_ I think the textureMap version is easier to accomplish_co_ but without uvs on the mesh FOR the decal_co_ the decal _lt_u_gt_seems_lt_/u_gt_ to reject sizings and mesh-clamp. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think we need to work in the _qt_diffuse_qt_ area of town_co_ not in the _qt_reflect_qt_ area.  Thoughts?  (sorry for the long post)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-09T15:23:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_public static EXPLICIT_MODE _eq_ 0_sm_public static SPHERICAL_MODE _eq_ 1_sm_public static PLANAR_MODE _eq_ 2_sm_public static CUBIC_MODE _eq_ 3_sm_public static PROJECTION_MODE _eq_ 4_sm_public static SKYBOX_MODE _eq_ 5_sm__lt_/pre_gt__lt_p_gt_Well_co_ there are some constants in the _lt_em_gt_texture.ts_lt_/em_gt_ file._lt_/p_gt__lt_p_gt_I guess they each represent a pre-determined way to compute UVs._lt_/p_gt__lt_p_gt__lt_strike_gt_So PROJECTION_MODE might be the way to project an image onto a volume... different from PLANAR_MODE which would be the planar painting of a mesh (no volumic perspective taken in account)_lt_/strike_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You_t_re right Wingy_co_ it_t_s more a reflection only feature_co_ I guess..._lt_/p_gt__lt_p_gt_Different from what fenomas was talking about_co_ I think. I imagine decal is more about _dd__lt_/p_gt__lt_p_gt_given a mesh_co_ an axis or vector and a texture... how to apply this one onto the mesh following the axis ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-09T15:29:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__qt_volumic perspective_qt_.  Nice!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(Wingy tries to grind-off a fresh tumor with his Black &amp_sm_ Decker power sander.)  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-09T15:59:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_74755_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_12974_qt_ data-ipsquote-username_eq__qt_Wingnut_qt_ data-cite_eq__qt_Wingnut_qt_ data-ipsquote-timestamp_eq__qt_1425912792_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_I think we need to work in the _qt_diffuse_qt_ area of town_co_ not in the _qt_reflect_qt_ area.  Thoughts?  (sorry for the long post)_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hey_co_ thanks for the very in-depth reply!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m not sure about the terminology_co_ but what I_t_m asking about is like your projection example. Since such effects are quite similar to shadows_co_ except that one projects a static texture rather than a rendered silhouette_co_ I thought there might be code in the shadows implementation that could be used._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Regarding bread crumbs_co_ I know the devs are busy and I_t_m not asking anyone to write code for me. Just asking if the code that would be necessary is already in the engine_co_ planned for the future_co_ half yes and half no_co_ etc._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Finally_co_ for the puppy/fart stuff I_t_m afraid you lost me_co_ but I_t_m glad you_t_re having fun.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-09T16:11:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_74758_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_12974_qt_ data-ipsquote-username_eq__qt_jerome_qt_ data-cite_eq__qt_jerome_qt_ data-ipsquote-timestamp_eq__qt_1425914580_qt__gt__lt_div_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_You_t_re right Wingy_co_ it_t_s more a reflection only feature_co_ I guess...Different from what fenomas was talking about_co_ I think. I imagine decal is more about _dd_given a mesh_co_ an axis or vector and a texture... how to apply this one onto the mesh following the axis ?_lt_/pre_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yes_co_ I looked into it a fair bit and projection mode is only ever used for reflections. (I only checked the default shader.) Whether it could be used to simulate a projection_co_ I_t_ve no idea._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-09T16:43:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ You_t_re probably better-off lost... with the puppy/fart stuff.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  You are not being a puppy at all_co_ Fen. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Puppy is a term that DK and others use to describe folks who want everything done FOR them.  (I got some puppy in me)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was having fun with Deltakosh. _lt_u_gt_I think_lt_/u_gt_ he is sometimes quick to call folks _t_puppy_t_... cuz he_t_ a friggin_t_ God of 3D and BJS ops._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sometimes it seems that he wants us to know how to do things... that are very foreign to us.  But it_t_s all in good fun. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you place dynamite on Deltakosh in just the right places... you can blast very valuable information from him.  And sometimes_co_ he has no idea how to accomplish a challenge... because he is a toolmaker_co_ and does not know ALL of the things that are possible with those tools.  Often... the framework contributors are doing what you stated_co_ Fen.  Trying to get the doors open between users and the graphics drivers... bleeding edge... a somewhat un-tested frontier._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So_co_ yes_co_ I was using you to have fun with my buddy Deltakosh (who is really quite a fantastic guy).  I hardly know him.  I_t_m not sure that he isn_t_t a robot...  some kind of Azure Cloud-driven walking talking thinking coding bio-bot.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You probably understand the fart analogy_co_ too_co_ now.  Things are more satisfying when we can do them with no assistance from the big dogs.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now_co_ where were we before we found out that most of Wingy_t_s comedy failed? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Oh yeah... them things.  Light-projected texture-placing.... and _qt_put it anywhere in space_qt_ texture-placing that Jerome recently brought-up.  Jerome_co_ your way is the same as putting it on a plane somewhere in space_co_ right?  It won_t_t follow the contours of an object mesh.  The side of a race car has contours... and we would like it to follow those._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But... placing it at an arbitrary point in the space UPON THE CAR_t_s CURRENT TEXTURE... now... that_t_s sound yummy.  But it has to follow contours of the mesh... somehow.  (I think)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Actually_co_ both _qt_big dog_qt_ methods are needed.  We need the slide projector spotlight thing_co_ and we need the non-light _qt_stick this texture onto ANYTHING_qt_ system.  I think.  One texture based_co_ one light based.  Eh?  *scratch scratch*_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yeah_co_ Fen... good question.  Do we currently have the tools to do this?  Fun challenge.  Be well._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-09T16:56:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh_co_ I just thought of something.  Maybe... what we should be looking-at... is being able to contour a basic plane (actually_co_ a mid-rez createGround plane)... identical-to a section-of another mesh.  We would spawn a plane that was _qt_bent_qt_ just like the place we want to put the decal.  Then texture that bent-up plane however we like_co_ and then stick it to the side of the car. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Wow.  Sub-mesh spawning.  hmm.  I bet Jerome could pull it off.  He_t_s a plot-God!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-09T17:13:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_I guess the problem is more this one _dd__lt_/p_gt__lt_p_gt_you_t_ve got a mesh_co__lt_/p_gt__lt_p_gt_you_t_ve got a plane (defined by a vector and a point at the surface of the mesh)_co__lt_/p_gt__lt_p_gt_you_t_ve got a rectangular image_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You need then to make a plane projection of each visible mesh vertex (in terms of backfaceculling) onto this plane... well_co_ turning some 3D coordinates into 2D coordinates._lt_/p_gt__lt_p_gt_These will then be your computed image UVs (after the right translation in the image 2D system and scaling to 0-1)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Plane projection is not that complex_co_ just some maths... If the projected texture doesn_t_t need to move on the mesh surface_co_ it could be done once CPU side_co_ else I guess a shader should be necessary._lt_/p_gt__lt_p_gt_Selecting the visible vertices only is a mystery to me. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yes_co_ this should be the same algo than the one used to cast shadows.... unless another trick  is used  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ _dd_ _qt_in 3D everything is fake_qt_ (DK_t_s video)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-09T19:11:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Btw_co_ for the ribbon_co_ I implemented a texturing rule quite different._lt_/p_gt__lt_p_gt_It_t_s not based on a plane projection but on distance between vertices._lt_/p_gt__lt_p_gt_As a ribbon is designed by many successive paths side by side and paths are themselves successive Vector3_co_ I compute both _dd__lt_/p_gt__lt_ul_gt__lt_li_gt_distances of each vertex on a path from the path beginning (sum of every vector norms until each point)_co__lt_/li_gt__lt_li_gt_distances of each vertex at position i along j paths (pathA_point i -&gt_sm_ pathB_point i -&gt_sm_ pathC_point i -&gt_sm_ ... -&gt_sm_pathj_point i_co_ same sum method)_lt_/li_gt__lt_/ul_gt__lt_p_gt__lt_em_gt_(not sure I_t_m very clear  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/em_gt__lt_em_gt_ but it works ... )_lt_/em_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Scaled then to percentages_co_ this give U and V to be applied to the texture._lt_/p_gt__lt_p_gt_This give a volumic stretching effect _dd_ the whole image is stretched on the given vertices according to their relative distances._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-10T05:51:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tnod.  (Thanks Jerome)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPicture this_co_ if you please.  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#27RX3A_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#27RX3A_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell that was easy to picture with the help of the playground_co_ eh?  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tImagine shooting a distance-measuring ray... from each point on the green decal plane... to the sphere.  Once those distances are collected_co_ they can be used to contour (bend) the decal plane.  Once you have that plane contoured_co_ it will make a perfectly fine decal.  Just put any texture on it_co_ and you have your complete contour-matching _qt_sticker_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA 3d laser scanner!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ there_t_s user problems.  If any distance-checking ray... misses the sphere... the _qt_contour cloning_qt_ will fail.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ if the user is trying to make a decal that wraps around a tube/cylinder_co_ the decal cannot wrap to the back side.  The distance raycasts can_t_t _qt_see_qt_ the backside of the cylinder.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t*** Actually_co_ it CAN_co_ but you would have to rotate/position (orbit) the decal... precise amounts... around the scanned cylinder...  WHILE the ray-scan was being done.  Essentially_co_ you would fly the decal plane in an orbit around the cylinder... as it_t_s being distance-scanned.  (phew)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut in the case where the user wants a decal wrapped around a cylinder_co_ the user could just create ANOTHER textured cylinder and place it around the first (like a belt). \n_lt_/p_gt_\n\n_lt_p_gt_\n\t-----------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m talking about non-lightMap/shadowMap options_co_ here.  The light/shadow map option is still a good one_co_ I suspect.  But shadows and spotlights have blurry edges.  But maybe_co_ they are coded that way... for effect.  *shrug*\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not really AT ALL qualified to be yapping in this thread.  hehe.  Hell_co_ I_t_m just the social coordinator for this joint.  Nobody said the job would involve math_co_ and plotting_co_ and challenging questions from Fenomas.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-13T03:29:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Gentle reminder that it would be great if a dev could answer this question_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_74763_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_12974_qt_ data-ipsquote-username_eq__qt_fenomas_qt_ data-cite_eq__qt_fenomas_qt_ data-ipsquote-timestamp_eq__qt_1425916788_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Just asking if the code that would be necessary [to project a texture onto a mesh] is already in the engine_co_ planned for the future_co_ half yes and half no_co_ etc._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-13T07:55:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_half maybe _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-13T21:52:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sorry I was not clear enough _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To project a texture_co_ you can use a reflectionTexture on your standardMaterial and set _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ texture.coordinatesMode _eq_ BABYLON.Texture.PROJECTION_MODE_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-15T10:33:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_75226_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_12974_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1426283525_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_To project a texture_co_ you can use a reflectionTexture on your standardMaterial and set _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ texture.coordinatesMode _eq_ BABYLON.Texture.PROJECTION_MODE_lt_/span_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Okay_co_ then the texture gets drawn in screen coordinates._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Are you suggesting this could be done to project the texture onto a particular part of the mesh? I looked at the internals but I don_t_t see any way to control where the projection is drawn._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-15T16:50:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes you_t_re right_co_ so far we do not have a way to control the part where texture is drawn _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-17T04:21:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Okay_co_ so basically there is no code for what I_t_m asking about._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Out of curiosity_co_ what is projection mode meant to be used for?_lt_/p_gt__lt_p_gt_That is_co_ what is the use case for overlaying a texture onto a mesh in untransformed screen coordinates?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-17T18:18:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Shadow maps mainly_co_ mirrors as well_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And I disagree with you_co_ there is a lot to do what you_t_re asking for_dd__lt_/p_gt__lt_p_gt_- You can set your texture to the reflectionTexture of a stdMaterial_lt_/p_gt__lt_p_gt_- Then define coordinatesMode to projection_lt_/p_gt__lt_p_gt_- Overload this function_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/e98c6d93d80e3d7be61114be5b228784c26c6f84/Babylon/Materials/Textures/babylon.texture.js#L114_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/e98c6d93d80e3d7be61114be5b228784c26c6f84/Babylon/Materials/Textures/babylon.texture.js#L114_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is the code used by the shader_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Shaders/default.fragment.fx#L191_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Shaders/default.fragment.fx#L191_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As you can see it use the reflection matrix to compute the right UV. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So basically_co_ you just have to change the getReflectionMatrix of your texture and you_t_re done_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-18T18:07:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hmmph_co_ well why didn_t_t you say so in the first place?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UCORW_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UCORW_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_blink.png_qt_ alt_eq__qt__dd_blink_dd__qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-18T22:40:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_because I love to discuss with you guys _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_More seriously_co_ I have so many questions to answer so sometimes I just give some pointers _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ll work on a DecalTexture to simplify this (Or perhaps this is something you want to PR?)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-19T06:43:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I know you_t_re busy_co_ I meant just before where you said there was no way to control the positioning._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I mean_co_ I like a puzzle as much as the next guy_co_ but I read every single google hit for babylon and _qt_projection_mode_qt__co_ and none of them says anything except that it exists. So it_t_s not really something where a little hint will just lead to the answer. To be frank_co_ I still have no idea what projection mode is or what it_t_s meant to be doing or how it differs from other modes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_75793_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_12974_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1426718400_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_I_t_ll work on a DecalTexture to simplify this (Or perhaps this is something you want to PR?)_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If it can be generalized_co_ sure_co_ I think it would be a useful API. By generalized I mean something like_co_ the user specifies a mesh_co_ a texture_co_ a vec3 along which to project. Or would you need an up-vector as well? Anyway you see what I mean._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s definitely not something I can do though_co_ I just hammered that demo out by brute force and I assume it wouldn_t_t work for arbitrary meshes. I don_t_t even know what those hard-coded matrix values are doing_co_ or_co_ again_co_ what the damned mode is meant to be doing in the first place._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you do add an API it might be better to call it ReflectionDecal or something like that_co_ to distinguish it from what people would expect _qt_real_qt_ decals to be (i.e. _lt_a href_eq__qt_http_dd_//threejs.org/examples/#webgl_decals_qt_ rel_eq__qt_external nofollow_qt__gt_this_lt_/a_gt_)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-19T16:33:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_What_t_s the difference with the example you linked and what you got in the PG?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-19T17:03:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_In the link example the decals have their own reflections and so on. I imagine it_t_s probably creating a new geometry for each decal._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I guess the reflection method is presumably faster (if it generalizes to arbitrary meshes?). But impossible to have more than one decal per mesh_co_ which is unfortunate since people tend to use decals for bullet marks and so on._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]