[{"Owner":"zied sellami","Date":"2016-03-21T08:08:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs it possible to insert a html code inside babylon.js to show a menu ?_lt_br_gt_\n\tIf it is true _sm_ can anyone give me an example\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-03-21T12:20:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat_t_s a very developer-structured question _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if(isPossibleToImplementHtmlMenu()) giveExample()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tto isPossibleToImplementHtmlMenu() _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheck CastorGUI (_lt_a href_eq__qt_https_dd_//github.com/dad72/CastorGUI_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/dad72/CastorGUI_lt_/a_gt_)_co_ bGui (_lt_a href_eq__qt_https_dd_//github.com/Temechon/bGUI_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/Temechon/bGUI_lt_/a_gt_)_co_ Dialog System (_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/tree/master/Dialog_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/tree/master/Dialog_lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tto giveExample() - check the respected linkes above. I am sure you will find what you need.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOf course_co_ never forget that an html canvas object is an HTML(!) object_co_ so it can be integrated in a website exactly like a div element. You can always create a menu like you are used to and simply put the canvas on that page.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-03-21T14:28:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you want to know it it_t_s possible to insert some classical HTML nodes within the canvas (WebGL) element_co_ the answer is no.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut it_t_s not BJS_co_ it_t_s the HTML5 syntax.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-03-22T00:20:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@jerome is correct_co_ not that I need to mention this since he is one of the key contributers to the babylon.js framework - and a genious._lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt_ But you can utilize HTML functions by building an extension and calling this from within your babylon.js script such as the GUI extensions @RaananW (also a genious) lists in his post. If you povide the HTML function(s) you are specifically looking to call_co_ you will most likely receive the info you_t_re looking for as you may find some of the same functions available in babylon.js_co_ or one of the existing extensions which I personally use all 3 of the extensions @RaananW lists regularly. There are also methods to set up multiple canvas_t_ to execute various functions that you might be seeking to accomplish. So as it was previously mentioned_co_ it is difficult to answer your question with anything of value given such little information.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-03-22T01:38:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys!  Maybe this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1HLSBC%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1HLSBC#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt_FIRST_co_ push _lt_strong_gt_-Editor_lt_/strong_gt_ button._lt_/u_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tClick on box_co_ html menu opens there.  Click again_co_ it closes.  Raanan_t_s (and others_t_) suggestions for using extensions... is wiser.  But the above demo is more _qt_gruesome_qt_. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-03-22T09:35:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think you are the best resource for playgrounds-that-should-be-listed-somewhere-but-aren_t_t\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-03-22T10:37:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou also have this page you can contribute to _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/generals/playgrounds_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/generals/playgrounds_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-03-22T12:26:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_ welcome to the forum_co_ Zied!  Good to have you with us.  I hope we are giving you the answers you want.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_@temechon - _lt_/span_gt_Wow_co_ that even has an _qt_author_qt_ column.  I know-of some playgrounds that have over 10 authors.  First it was this_co_ then it became that_co_ then something else_co_ then... etc. etc.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_  Fun!  Mega-collaborations.  Gotta love it!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI use precision laser-guided playground search.  I_t_m one of only a few who build HTML dynamically inside playground demos_co_ so precision searches for certain keywords... usually finds my chicken-scratch playgrounds.  I usually search for _t_kludge_t_ or _t_yech_t_ or _t_mess_t__co_ and all my playgrounds appear.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_  (Zied_co_ I_t_m trying to be a comedian_co_ and failing nicely.  YOU might want to _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/playground_qt_ rel_eq__qt_external nofollow_qt__gt_search our playgrounds_lt_/a_gt_ for terms like _t_appendChild_t_ and _t_createElement_t__co_ and of course_co_ bGUI_co_ castorGui_co_ and Dialog) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve been collecting URL_t_s to great playgrounds made by everyone.  I rename them appropriately in a bookmarks folder.  I would be glad to add my pile to that list (most would be author unknown).  I think playgrounds are the #1 teaching system that we have.  I highly-cherish them.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyhoo... back on topic (Wingy looks left and right suspiciously_co_ in fear of TP_t_s).  Studying _lt_a href_eq__qt_https_dd_//github.com/dataarts/dat.gui_qt_ rel_eq__qt_external nofollow_qt__gt_dat.GUI_lt_/a_gt_ is a decent way to learn about doing HTML _lt_u_gt_near_lt_/u_gt_ webGL_co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to convert what SOME (Jerome) have said... to puppy-talk.  (I like puppy-talk.)  Umm_co_ you can_t_t launch a fully-operational web browser on a BabylonJS plane or box.  Our in-scene player-characters REALLY want to use web browsers on the computer screens (planes) in their virtual worlds_co_ but we have not yet been able to provide that for them.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_  WebGL avatars (Little Computer People) are somewhat oppressed.  Their food isn_t_t very nourishing_co_ either.  Pixels are their primary food staple.  heh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-03-22T12:36:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFeel free to share your bookmarks with the community _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-03-23T05:44:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18865-zied-sellami/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18865_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18865-zied-sellami/_qt__gt_@zied sellami_lt_/a_gt_ - personally_co_ I have sved myself many_co_ many hours in using the extensions developed by Temechon_co_ JCPalmer_co_ and Dad72 which have provided me with every single GUI element I have ever needed to create fully functional and aesthetic interfaces for apps primarily - but for games as well. Using the bGUI_co_ CasterGui_co_ and Dialog extensions will save you countless hours and provide you with quality GUIs beyond what you will be able to develop yourself - and I use all 3 together in a single scene as they all offer different approaches and functions to GUI development. So I personally cannot recommend these 3 extensions any higher than i already have_co_ as these are all essential to practicaly every application I build these days - and each one of these have fully supported by their authors so that I have not had any delays in my own development as the usage of each of these extensions require a small amount of trial to fully utilize. But each of the authors of these extensions have responded in record time with answering support issues.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo for GUI elements and functions_co_ I have come to rely upon these 3 extensions for all of my interfaces. And for other HTML functions_co_ as I previously mentioned_co_ I have discovered babylon.js functions within the BJS framework to cover most HTML operations such as full support of HTML video functions within videoTexture and material functios as well as some support for most any necessary HTML function you might require witin a scene. and if it isn_t_t yet supported_co_ the babylon.js master file is so easy to understand (for the most part)_co_ that you can either find a way to modify it to your specific needs_co_ or build an extension of your own to take advantage of most any HTML function - and you can find excellent examples of this by reviewing the GUI extensions previously mentioned_co_ as well as the Castor Engine created by Dad72 and available on Github for download.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI began using three.js as it was recommended to me by a collegue David Allan Smith at Lockheed Martin Virtual Labs_sm_ and it was a sufficient choice for my needs at the time. However_co_ once I discovered babylon.js in 2014_co_ I found it far more versatile in the many ways to accomplish similar tasks_co_ and far more optimized and efficient compared to three.js - especially in working with character animation_co_ cameras and control systems_co_ but in so many other areas that there are very dramatic differences between three.js and babylon.js - not to mention the legacy issues with three.js limiting the developer to far more lengthy processes in building simple scenes requiring user and camera controls. As most everyone discovers quite quickly_co_ you_t_ll most likely become addicted to the power which babylon.js provides developers with considerable experience_co_ as well as newbies who happen to stumble upon this framework by chance_co_ and never look back once they get a taste of this rapidly evolving framework and the many extensions and tools available online daily with far more rapid growth and an expanding user base far beyond any other WebGL framework.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd @Wingnut - thanks for always trying your very best to help the newbies and the experienced alike - as you are truly the Playground Aficionado in the babylon.js community_co_ with more Playground scenes than anyone I_t_m aware of. I know you_t_ve saved me countles hours posting examples of practically every type of function available in BJS. I just don_t_t know where you find the time._lt_img alt_eq__qt_B)_qt_ data-emoticon_eq__qt_true_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_cool.png_qt_ title_eq__qt_B)_qt__gt_ I can only imagine a desk and chair with a toilet built in so you don_t_t have to get up as this might take time away from your coding. And this is backed up by your sense of humor - which you truly outdid yourself in your last post on this thread - as I could only follow about 5% of what you were saying - which either means that I_t_m not on the same intellectual plane as you are_co_ or perhaps you loose you mind from time to time - perhaps both are true. But it_t_s always entertaining_co_ I have to say. Keep it coming_co_ my friend._lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DJousto","Date":"2016-03-23T12:11:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18865-zied-sellami/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18865_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18865-zied-sellami/_qt__gt_@zied sellami_lt_/a_gt_ to go back to you initial question\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIs it possible to insert a html code inside babylon.js\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tdon_t_t forget that you_t_re in a web page_co_ you can display html elements over your canvas (you can buid a menu and affect a static position)_co_ and interact with those elements inside you JS_co_  to you initial question there are many solutions_co_ can you be more precise on your needs ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\there is a very basic example (menu on the left top corner) _lt_a href_eq__qt_http_dd_//boobiz.fr/webgl/babylon/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//boobiz.fr/webgl/babylon/index.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfor the moment i didn_t_t implement interaction with js\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-03-23T12:23:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_  I_t_d add a LIKE to that_co_ but I have reached my 10-LIKES-per-day limit_co_ and it_t_s only 6_dd_45 AM here in the USA.  I really need my LIKES limit raised to 50 per day.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the nice words.  Your posts help lots of people_co_ too.  And_co_ they are interesting to read.  I love it when advanced programmers and pro idea-guys like yourself... talk.  And yes_co_ I don_t_t have much of a life other than BJS_co_ but I am proud of that.  BJS is wonderful_co_ and it starts to open doors that VRML never could.  I_t_m not into games as much as SOME are_co_ but I love VR worlds_co_ and I love the _qt_art_qt_ of 3D graphics_co_ and the abilities for 3D to help visualize.. great for learning and data analysis.  To date_co_ we have NEVER had easier VR than we do with Babylon.js.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat part of my last post did you not understand?  Was it the part about using web browsers running on computer monitors in our scenes?  It gets worse.  A computer monitor in a BJS scene... could render the same scene that the computer monitor resides-within.  And in THAT BJS scene_co_ another monitor... with a BJS scene rendered on it... that has a monitor running a BJS scene... ad infinitum.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_  Goofy_co_ huh?  And_co_ you are correct_co_ I am not what most folks would call _qt_normal_qt_.  I have strange priorities.  To SOME degree_co_ I reverted to childhood ways. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut YOU... are no less unique.  I find you very fascinating to follow.  If I had YOUR brainpower_co_ I_t_d be truly dangerous.  heh.  You_t_re a good guy_co_ DB... I like hanging around with you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19572-djousto/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19572_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19572-djousto/_qt__gt_@DJousto_lt_/a_gt_  Yep_co_ absolutely correct.  The undefined word to Zied_t_s question... _qt_inside_qt_.  All of our replies are based-upon varying versions of the definition of _qt_inside_qt__co_ eh?  That_t_s why I took it to the weirdest version... running browsers and other apps... on a VR computer screen that is a BJS plane or the side of a BJS box.  That version of _qt_inside_qt_ is the most unusual.  All the other replies are actually _qt_inside_qt_ the browser_co_ not inside BJS.  And even if we ever DO get a browser running on a BJS plane_co_ technically_co_ we_t_ll be _qt_inside_qt_ a browser again... and not really inside BJS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s face it.  It was a weird_co_ discussion/thought-provoking question... mega-vague... and we should probably shake Zied_t_s hand for blowing our minds.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-03-23T20:02:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@Wingnut - I think you began to loose me at the somewhat oppressed little computer people.who don_t_t have very nourishing food with their primary food staple as pixels. But as I_t_ve mentioned previously_co_ I believe you exist on a much higher celestrial plane than I do_co_ and only so often - I_t_m able to cross into your realm of existance - if only for a short time. Just remember to empty your chair_co_ as cleanliness is next to Godliness_co_ and we need you to keep the faith for us all - of course_co_ with a little help from our friends._lt_img alt_eq__qt__dd_rolleyes_dd__qt_ data-emoticon_eq__qt_true_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_rolleyes.gif_qt_ title_eq__qt__dd_rolleyes_dd__qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-03-23T20:46:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFYI_co_ I wrote the Dialog extension_co_ but I use html elements for pages where the controls are taking up a permanent dedicated screen area where the scene must never display_co_ and non-game scenes.  I use html tables to contain things_co_ since I found it handles resize the best.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you set the background color of the page _eq__eq_ the scene background color_co_ it has a really good look.  This is also good for_dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tslider controls\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\ttext input\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tdrop downs\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_03/Selection_169.png.2a1e5700b2655cdf9e1fcdbc2459a145.png_qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_6944_qt_ data-unique_eq__qt_mnkb7gdrt_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_03/Selection_169.thumb.png.e4c63ef27dca87b037417e82eeb8a9d6.png_qt_ alt_eq__qt_Selection_169.thumb.png.e4c63ef27dca87b0_qt__gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"zied sellami","Date":"2016-03-28T17:00:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthanks guys for the the solutions and the ideas that you provide. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-03-28T18:43:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_121778_qt_ data-ipsquote-contentid_eq__qt_21326_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1458765998_qt_ data-ipsquote-userid_eq__qt_8492_qt_ data-ipsquote-username_eq__qt_JCPalmer_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 3/23/2016 at 1_dd_46 PM_co_ JCPalmer said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tFYI_co_ I wrote the Dialog extension_co_ but I use html elements for pages where the controls are taking up a permanent dedicated screen area where the scene must never display_co_ and non-game scenes.  I use html tables to contain things_co_ since I found it handles resize the best.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf you set the background color of the page _eq__eq_ the scene background color_co_ it has a really good look.  This is also good for_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_ul_gt__lt_li_gt_\n\t\t\t\tslider controls\n\t\t\t_lt_/li_gt_\n\t\t\t_lt_li_gt_\n\t\t\t\ttext input\n\t\t\t_lt_/li_gt_\n\t\t\t_lt_li_gt_\n\t\t\t\tdrop downs\n\t\t\t_lt_/li_gt_\n\t\t_lt_/ul_gt__lt_p_gt_\n\t\t\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_03/Selection_169.png.2a1e5700b2655cdf9e1fcdbc2459a145.png_qt__gt__lt_img alt_eq__qt_Selection_169.thumb.png.e4c63ef27dca87b0_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_6944_qt_ data-unique_eq__qt_mnkb7gdrt_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_03/Selection_169.thumb.png.e4c63ef27dca87b037417e82eeb8a9d6.png_qt__gt__lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI am so interested in this for so many different reasons...  I really have been mulling over an auto talking animator forever based off text input and timings or inflection settings.  I think it would be priceless for all sort of animation deployments.  Do you have this open source?_lt_br_gt__lt_br_gt_\n\tAs far as HTML menus go. just do a wrapping Div over your canvas_co_ set pointer-events to null_co_ except for on the elements you want to be able to interact with._lt_br_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI should upload my new version of TERIABLE_co_ it has some really dynamic html menus and would give you some ideas i bet._lt_br_gt__lt_a href_eq__qt_http_dd_//pryme8.github.io/TERIABLE/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//pryme8.github.io/TERIABLE/_lt_/a_gt__lt_br_gt_\n\there is the old one_co_ not as intense of menu html menu stuff_co_ but yea at least its an example for you._lt_br_gt__lt_br_gt_\n\tAlso you could just append Items with javascript or jquery to the body and have the z-index  higher then your canvas honestly there are a ton of ways to accomplish this._lt_br_gt__lt_br_gt_\n\tas far as actually creating HTML elements in the canvas without some sort of scripting or library that would handle all of that for you in a manor similar to regular DOM creation is not valid option.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-03-28T22:20:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo_co_ at some point it will be though.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]