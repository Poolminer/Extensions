[{"Owner":"chicagobob123","Date":"2018-02-05T17:02:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan I get the bounding box of a mesh and create a mesh from it apply material and colorize it with a semi transparent color? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have googled it and the information is a bit sparse. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-02-05T17:37:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSomething like this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#TZSWRR_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#TZSWRR_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2018-02-05T17:40:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks so much. I didn_t_t know there was width height and depth that you could pass in. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just did something similar except I used scaling to make the box. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#QVIDL9%2321_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#QVIDL9#21_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2018-02-05T18:07:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJust loose thoughts_co_ this might be useful to a game.. You can use it to mark damage or even call it a shield or cloak of sometime.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-02-07T00:51:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep_co_ that_t_s right_co_ CB.  It is also a way of indicating that a mesh has been _qt_selected_qt_ (chosen). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll in all... a powerful/handy little feature.  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#TZSWRR%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#TZSWRR#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe can keep talking_co_ but you might want to _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/28008-marking-questions-as-solved/_qt_ rel_eq__qt__qt__gt_mark thread as _t_solved_t__lt_/a_gt__co_ cb.  (thx)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/35452-glow-layer/_qt_ rel_eq__qt__qt__gt_new glowLayer stuff_lt_/a_gt_ looks like an interesting post-process thing.... too.  A way to show something is selected or has a force field.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHighlightLayer works pretty good_co_ too.  I don_t_t think either does _qt_alpha blending_qt_ real well_co_ though.  Watch out for issues with using it on semi-transparent mesh.  But other than that little thing_co_ both of those _qt_layers_qt_ things... work great.  I like _t_em.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have also used .emissiveColor to suddenly make a mesh _qt_get bright_qt__co_ or start flashing on/off.  Mesh _qt_state_qt_ changing... mesh.isEngulfedInFlames _eq_ true_sm_  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you have a dark scene... just light-up the mesh in a bright spotlight... when it gets selected/chosen.  Lots of possibilities.  It sure is nice having an easy language like JS... be connected to a powerful 3D rendering engine_co_ eh?  What a playground!   _lt_a href_eq__qt_https_dd_//i.huffpost.com/gen/1240251/thumbs/o-SLIDE-9-570.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_Etch-A-Sketch_lt_/a_gt_... eat your heart out.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  We got WAY MORE than two knobs... NOW.  heh!  We got us a Super-Sonic Etch-A-Sketch-from-hell_co_ now.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut still_co_ nobody has _qt_grown_qt_ a _lt_a href_eq__qt_http_dd_//www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/fibnat.html_qt_ rel_eq__qt_external nofollow_qt__gt_Fibonacci-infested_lt_/a_gt_ JS-generated pine cone.  What the heck_co_ eh?  Hardly anybody _lt_a href_eq__qt_https_dd_//people.eecs.berkeley.edu/~sequin/CS285/2011_REPORTS/CS285%20final%20paper_Suryaveer&amp_sm_Jeremy.pdf_qt_ rel_eq__qt_external nofollow_qt__gt_dynamically-generates pine cone and cauliflower stuff_lt_/a_gt_... with Fibonacci/Golden Mean/Phi numbers. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tReally_co_ Fibonacci numbers (often called PHI - a ratio) show-up in a crapload of nature-things.  SO MUCH SO_co_ that some have claimed that it is the key to the secret of life on Earth... and consciousness.  It is also very music-related (harmonies) (ours ears have Fibonacci shape_co_ including the cochlea)... and _qt_Fib_qt_ is the basis for _lt_a href_eq__qt_http_dd_//www.tuks.nl/pdf/Reference_Material/Heterodyning_and_Powers_of_Phi.pdf_qt_ rel_eq__qt_external nofollow_qt__gt_heterodyning and other fun stuff_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYa see_co_ there_t_s _lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/fib_canal/viewer.htm_qt_ rel_eq__qt_external nofollow_qt__gt_an _qt_energy vortex_qt_ just south of Minneapolis_lt_/a_gt_... and if I can get enough singers_co_ with a high-powered PA system_co_ to sing _qt_the right harmony_qt_... while standing at the center of that vortex... then...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t...probably nothing will happen.  But... Fibonacci numbers will be VERY involved... in that _qt_nothing happened_qt__co_ definitely.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  (What a waste of a perfectly good comment_co_ eh?  *nod*)  heh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2018-02-07T02:36:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_203695_qt_ data-ipsquote-contentid_eq__qt_35496_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1517850165_qt_ data-ipsquote-userid_eq__qt_21732_qt_ data-ipsquote-username_eq__qt_chicagobob123_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 2/5/2018 at 11_dd_02 AM_co_ chicagobob123 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI would mark solved but i dont know how to mark it complete\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vorion","Date":"2018-02-07T03:14:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJust edit your first post in this thread_co_ and add a solved tag_co_ like the link _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ posted suggests _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2018-02-07T14:12:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry eyes at night not as good as they once were. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]