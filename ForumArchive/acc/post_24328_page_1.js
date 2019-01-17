[{"Owner":"DigiHz Data","Date":"2016-08-07T09:25:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThese properties are not documented as far as i know.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre uAng and vAng values in radians? (If not_co_ then what?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tuAng and vAng is for rotating the texture in a material_co_ but to get the texture to rotate we must affect BOTH uAng and vAng?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan someone please try to explain what wrapU and wrapV really does? (And how to use it).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tested changing the wrapU and wrapV without any viewable change at _lt_a href_eq__qt_http_dd_//materialeditor.raananweber.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//materialeditor.raananweber.com/_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-08T00:04:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi DD!  Yep_co_ we need a section added to our Advanced Texturing tutorial_co_ which covers these things.  You can also read about these properties on the web.  Texture scale_co_ angle_co_ offset_co_ and wrap... are the _qt_big 4_qt_ properties of texture mapping.  Search on the web_co_ and do some playground experimenting_co_ you_t_ll master the big 4 texturing properties easily.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you likely know_co_ uvw is the same as xyz... but for textures.  (they simply needed 3 more alphabet letters_co_ so someone chose the 3 letters BEFORE xyz.... in the alphabet sequence).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tu _eq_ xvalue_co_ v _eq_ yvalue_co_ w _eq_ zvalue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYep_co_ i think uAng and vAng is radians.  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1SXPJA_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1SXPJA_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(that is a little testing and playing playground)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  It is a modification of our _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/?4_qt_ rel_eq__qt_external nofollow_qt__gt_materials playground demo_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry it took so long to get you an answer.  Hopefully you find/found some information on the web.  Or you can play for 15 minutes in that playground demo_co_ and you_t_ll be a pro.  Try mapping textures onto different BJS _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/?2_qt_ rel_eq__qt_external nofollow_qt__gt_Basic Elements_lt_/a_gt_... for fun and learning... too.  Animate these various properties_co_ just like I did_co_ or use sine and cosine ping-pong/orbit formulas... from our _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/?6_qt_ rel_eq__qt_external nofollow_qt__gt_lights demo_lt_/a_gt_.  FUN!  Hope this helps.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-08-08T18:35:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Wingnut.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tuAng_co_ vAng and wAng IS in radians. (I confirmed it now).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlaying with your playground however does not affect wrapU or wrapV.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI still need an explanation about what wrapU and wrapV really does.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ you use floats in your playground for wrapU and wrapV....I thought that wrapU and wrapV where integers.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2016-08-08T21_dd_04_dd_58Z_t_ title_eq__t_08/08/2016 09_dd_04  PM_t_ data-short_eq__t_2 yr_t__gt_August 8_co_ 2016_lt_/time_gt_ by DigiHz Data_lt_/strong_gt_\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-08T22:34:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi DD!  Yeah_co_ I knew my un-thorough answer was going to come back and bite me in the butt.  Sorry about that.  I was in a hurry_co_ and didn_t_t give you a proper answer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s see if I can do better.  I_t_m not an expert AT ALL_co_ not even close... but I did a little study_co_ and got a playground that shows _lt_em_gt_some _lt_/em_gt_things.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1CJRM2%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1CJRM2#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt appears that there are three possible settings for wrapU and wrapV...  and you_t_ll see them in lines 17-23.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI believe BABYLON.Texture.WRAP_ADDRESSMODE is the default for both wrapU and wrapV.  Activating line 18 or line 22... changes nothing... so I_t_ll assume that to be true.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tExperiment... by activating lines 17_co_ 19_co_ 21_co_ 23... preferably one at a time_co_ and hit RUN each time_co_ and watch.  You_t_ll see the differences.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry about the limp answer_co_ this time_co_ and last comment.  To be truthful_co_ I_t_m not very good at textures_co_ and I was scared of telling you something incorrect.  I still am. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe some REAL expert will visit and tell us what they know about this subject.  If we learn enough_co_ we can write a section of documentation... or convince the expert to write it for us.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAside_dd_ That is a picture of _lt_a href_eq__qt_https_dd_//en.wikipedia.org/wiki/Ted_Nelson_qt_ rel_eq__qt_external nofollow_qt__gt_Ted Nelson_lt_/a_gt__co_ last seen hanging-out at a University in Hawaii.  It is rumored that his writings... inspired _lt_a href_eq__qt_https_dd_//en.wikipedia.org/wiki/Tim_Berners-Lee_qt_ rel_eq__qt_external nofollow_qt__gt_Tim Berners-Lee_lt_/a_gt_ to create an early version of the _qt_World Wide Web_qt_.  Ted thinks Tim made some wrong moves_co_ and_co_ well_co_ you can read all about it.  Ted invented a term/idea called _lt_a href_eq__qt_https_dd_//en.wikipedia.org/wiki/Transclusion_qt_ rel_eq__qt_external nofollow_qt__gt_transclusion_lt_/a_gt_ and the theory is only in partial use_co_ so far.  It is related to a _qt_mashup_qt__co_ which is a webpage whose parts are gathered from multiple sources... very common.  Exciting_co_ huh?  (yawn)  (snore)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-08-08T23:06:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMaybe this can help to understand the texture wrapping _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//docs.worldviz.com/vizard/Texture_wrapping.htm_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//docs.worldviz.com/vizard/Texture_wrapping.htm_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-08-09T03:49:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Wingnut_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think i get it now.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks alot.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_s_gt_I updated the playground to _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1CJRM2%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1CJRM2#7_lt_/a_gt__lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ttypo error in _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1CJRM2%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1CJRM2#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI updated the playgrond to _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1CJRM2%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1CJRM2#8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn your version you give example for direct access to the texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI added reference to the materials texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd thanks Daddy for your link.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2016-08-09T04_dd_35_dd_12Z_t_ title_eq__t_08/09/2016 04_dd_35  AM_t_ data-short_eq__t_2 yr_t__gt_August 9_co_ 2016_lt_/time_gt_ by DigiHz Data_lt_/strong_gt_\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-08-09T04:30:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tA little bit of info_co_ so that we not confuse anyone else about our previous posts about wrapU and wrapV.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere are 3 different modes in BJS according to the constants in BJS source.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTexture.CLAMP_ADDRESSMODE _eq_ 0_sm__lt_br /_gt_\n\tTexture.WRAP_ADDRESSMODE _eq_ 1_sm_ (This is the default)_lt_br /_gt_\n\tTexture.MIRROR_ADDRESSMODE _eq_ 2_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExamples_dd__lt_em_gt_(Taking the var_t_s from the above playgrounds)_lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt__lt_em_gt_On texture directly_dd__lt_/em_gt__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\toutputplaneTexture.wrapU _eq_ BABYLON.Texture.CLAMP_ADDRESSMODE_sm_// This is best way to use it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\toutputplaneTexture.wrapU _eq_ 0_sm_// This is not so very good to use. (Maybee the constant changes in the future release of BJS)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt__lt_strong_gt_On materials texture channel_dd__lt_/strong_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tground.material.diffuseTexture.wrapU _eq_ BABYLON.Texture.CLAMP_ADDRESSMODE_sm_// This is best way to use it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tground.material.diffuseTexture.wrapU _eq_ 0_sm_// This is not so very good to use. (Maybee the constant changes in the future release of BJS)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSame for the 2 other modes.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-09T17:46:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell said_co_ well thunk_co_ well tested_co_ well done.  AND... you just wrote a post that will serve as docs... when folks search the forum for answers... in the future.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFYI_dd_  You can edit a URL in a forum post... by choosing edit (the message)_co_ then double-click on the URL_co_ and a URL editing panel should pop-open. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have been known to change a URL to a playground demo... 5 times... AFTER the initial post was made.  (when I open my mouth before I_t_ve completed my work).  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the info_co_ DD!  Are you going to tackle/learn the _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/Textures/babylon.texture.js#L251_qt_ rel_eq__qt_external nofollow_qt__gt_3 samplingMode and 9 coordinatesMode_lt_/a_gt__lt_em_gt_ _lt_/em_gt_constants_co_ next?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe could have a BIG tutorial section... being created here.  YAY!  Materials is a big subject... lots to _qt_doc_qt_ about.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-09T20:28:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tExcellent thread. Love to read more of this _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-08-09T21:21:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI spent a few hours tonight getting it all right.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a great playground for you all to play around with that i made for FREE _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tuOffset_co_ vOffset_co_ uScale_co_ vScale_co_ uAng_co_ vAng_co_ wAng_co_wrapU_co_and wrapV\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1HGNPS%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1HGNPS#0_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-08-09T21:35:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWingnut.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThx for that info about changing url.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI not sure what to do next.To busy trying to make my editor stable enought so i can release a new version soon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ i do what i can for the forum and BJS (when i have the time).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow do i add that link to people here (the blue background with users name)  eg_dd_ @Wingnut\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-10T00:33:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi DD.  Um_co_ that _qt_ping_qt_ tag is done while typing... start with typing the @ symbol... followed by one character_co_ and then a drop-down panel opens with lots of usernames on it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor example_co_ for me_co_ type @  and then w... wait a moment... maybe type i... then type n.  The list of names will get smaller and smaller as you type more letters after the @ symbol.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo...  type @wing_co_ and then select my name from the list of names. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHard to describe. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd_co_ sometimes the system doesn_t_t work.  Generally speaking_co_ type the word @wing and you should see a list... with my name in it.  Just click or choose my name_co_ and it puts that blue tag into your post.  Practice a bit_co_ and avoid hitting the escape button.... which seems to make it stop working.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOther times_co_ when I can_t_t get the @ selector box to open... I have to save the message_co_ then choose edit again_co_ and then sometimes it works again. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ the selector panel is white backdrop_co_ so sometimes you don_t_t notice it has opened and is offering you names to choose-from.  The @ symbol is the key.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFantastic playground_co_ by the way.  Ya got some datGUI happening there... well done!  Great learning tool!!!  Excellent!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-08-10T05:41:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\treally great demo\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-08-10T11:26:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIndeed_co_ great demo.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-08-10T14:37:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you all.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen we do make playgrounds_co_ we should try to make them not only working_co_ but understandable to.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFYI_dd_ That demo run at 35 fps on my smartphone _qt_Samsung Galaxy S5_qt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-08-10T15:16:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAdditional info again _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThe playground i made before will only work 100% in BJS v2.5.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was using BJS v2.4 in my project_co_ and i had problem with the wrapping modes (if i had more than 1 texture channel in a material).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI downloaded the BJS v2.5 preview_co_ and now it works in my project.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis issue seams to have been fixed in BJS v2.5.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCalling _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ . Can you explain what has changed about that?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-11T17:44:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy memory is failing _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut here is the what_t_s new_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/preview%20release/what_t_s%20new.md_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/preview release/what_t_s new.md_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI do not think about something regarding texture wrapping\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-08-15T22:36:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ I am not tackeling those things you mentioned yet.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut i am tackling things about videoTexture_co_ And there seam to be need for tutorials and more info about this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMany people (me included) have problems with videoTexture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo....I will open a new thread later named _qt_videoTextures explained_qt_. and give some more in depth info about it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut...since i am going to see my wife and family FAR away_co_ i do not know WHEN i have the time to do it. (Only Buddha knows ) _lt_img alt_eq__qt__dd_rolleyes_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_rolleyes.gif_qt_ title_eq__qt__dd_rolleyes_dd__qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]