[{"Owner":"d13","Date":"2017-10-17T13:53:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Everyone!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m bust building a semi-realistic solar system model.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI found this example extremely helpful_dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1UGDQC%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1UGDQC#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ I have a question about how calculate realistic elliptical orbits.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI know that an ellitical orbit can be calculated by modifying this line of code_dd_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_12px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_pre_gt_\n_lt_code_gt_planet.position _eq_ new BABYLON.Vector3(10 * Math.sin(alpha)_co_ planet.parent.position.y_co_ 10 * Math.cos(alpha))_sm__lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tAnd_co_ the eccentricity of each planet is well documented_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.enchantedlearning.com/subjects/astronomy/glossary/Eccentricity.shtml_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.enchantedlearning.com/subjects/astronomy/glossary/Eccentricity.shtml_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI know that an ellitical orbit can be calculated by modifying this line of code_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut what I don_t_t yet know is how calculate an ellipse based on those numbers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan anyone help?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-10-17T14:13:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\teasy way _dd_ just set a different radius on x and on z (5 and 10 instead of both 10)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1UGDQC%2317_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1UGDQC#17_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2017-10-17T14:53:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Jerome!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn trying to come up with realistic orbits I need to somehow incorporate the actual eccentricity data.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor example_co_ Earth_t_s is 0.017.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy guess is that I should integrate it something like this?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_planet.position _eq_ new BABYLON.Vector3((10 - 0.017) * Math.sin(alpha)_co_ planet.parent.position.y_co_ 10 * Math.cos(alpha))_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-10-17T15:37:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThere is a cool lib for this_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//github.com/mgvez/planet-positions_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/mgvez/planet-positions_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tit returns Three.Vector3_co_ but you can .copyFrom that to BABYLON._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-10-17T15:39:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWhere point on ellipse is given by  (a.cos(theta)_co_ b.sin(theta)) with b &lt_sm_ a and with eccentricity e_co_ then b _eq_ a.sqrt(1 - e_lt_sup_gt_2_lt_/sup_gt_)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2017-10-17T17:08:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks John!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCould you explain how I could integrate that into the current formula?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-10-17T18:22:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_new BABYLON.Vector3(10 * Math.sqrt(1 - 0.017 * 0.017) * Math.cos(alpha)_co_ planet.parent.position.y_co_ 10 * Math.sin(alpha))_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2017-10-17T18:33:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh I see!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat makes perfect sense now_co_ thank you!!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-21T00:31:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey d13/others... if a more-finished playground version of that solar system... ran across the forum floor and pooped on my shoe... I wouldn_t_t mind at all.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tthx.  That would be a VERY popular playground_co_ I suspect.  If it uses _lt_a href_eq__qt_https_dd_//www.nasa.gov/image-feature/pluto-in-3-d_qt_ rel_eq__qt_external nofollow_qt__gt_elevation data_lt_/a_gt_ to form the planets_co_ it will surely earn a slot on the BJS Main Website demos.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd that means... a party!  YAY!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-10-21T09:52:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt__dd__lt_br /_gt_\n\tI_t_m doing my version of solar system right now. _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tBut I don_t_t think I can get Neil Degrasse Tyson to narrate it from a silver spaceship... But who knows_co_ the weekend is long and prosper(ous)._lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-10-21T09:55:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/ssystem1.jpg.f4e797e28b99497ed58483e36ba3b429.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_15329_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/ssystem1.thumb.jpg.a2270256e4430067f5ae00d92ea0e8f1.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_ssystem1.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-10-21T23:50:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tHey _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tAn alpha version is more or less working now_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//www.bitofgold.com/solarsystem/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.bitofgold.com/solarsystem/_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tSaturn has no rings (yet)_co_ and it_t_s hard to position the sky to the correct rotation. (the earth axis is near  the north star_co_ but other stars are not perfectly in the right direction...)_lt_br /_gt_\n\tI used only CC or free texture maps._lt_br /_gt__lt_br /_gt_\n\tI always wanted to do a planetarium or solar system model. It took less than a day. BABYLON is awesome!_lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/ssystem2.jpg.a2bf15447456c6acc32e79e27d9771f3.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_15339_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/ssystem2.thumb.jpg.d1555b0eb745c3a554c23338de202661.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_ssystem2.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-10-22T04:54:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tsuperb !\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-10-22T04:56:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tdid you know that another famous BJS user did some planetarium project too ? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//barth.paleologue.fr/solaris/en.php?v_eq_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//barth.paleologue.fr/solaris/en.php?v_eq_true_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-10-22T06:59:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNo I didn_t_t_co_ it looks rad! It has even the famous moons. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt_\n\tI even learnt some things about the solar system_co_ like I never imagined the enormous Jupiter turns every 10 hours. Never imagined it so fast._lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2017-10-23T12:10:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_192604_qt_ data-ipsquote-contentid_eq__qt_33484_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1508545906_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 2017-10-20 at 8_dd_31 PM_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIf it uses _lt_a href_eq__qt_https_dd_//www.nasa.gov/image-feature/pluto-in-3-d_qt_ rel_eq__qt_external nofollow_qt__gt_elevation data_lt_/a_gt_ to form the planets_co_ it will surely earn a slot on the BJS Main Website demos.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWhere would be the best place to start to implement such a feature?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-23T14:15:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi d13!  First_co_ may I say that I love this topic.  I_t_m enjoying EVERYONE_t_s comments and demos_co_ and I am learning TONS!  You guys are interesting and FUN!!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOthers will surely have other implementation opinions_co_ but in MY opinion... I_t_d say start-with a big bottle of Jack Daniel_t_s Tennessee Sippin_t_-Whiskey.  Yum.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Perhaps some herbal enjoyments_co_ too.  (shhh)  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tNext_co_ say the term _qt_DEM_qt_ a few times... see how it feels.  _qt_DEM_qt_ will soon control your _qt_worlds_qt_.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps_co_ visit here.  _lt_a href_eq__qt_https_dd_//earthdata.nasa.gov/community/community-data-system-programs/measures-projects/nasadem_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//earthdata.nasa.gov/community/community-data-system-programs/measures-projects/nasadem_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ that_t_s some basic info about DEM... written by DEM-guys.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ next_co_ let_t_s go to Mercury.  _lt_a href_eq__qt_https_dd_//www.melown.com/mercury/?pos_eq_obj_co_-61.627417_co_7.456315_co_fix_co_-35.19_co_123.56_co_-13.42_co_0.00_co_58772.15_co_55.00_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.melown.com/mercury/?pos_eq_obj_co_-61.627417_co_7.456315_co_fix_co_-35.19_co_123.56_co_-13.42_co_0.00_co_58772.15_co_55.00_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotice that... _qt_bumpy-ness_qt_ can be simulated via texture colors/baked shadows... at ANY higher altitudes above the planet.  Not until the camera is placed in a low-altitude position with the horizon-line in-view... do we see the planet_t_s TRUE heightMap elevation data (its bumps).  So_co_ although _qt_a purist_qt_ would want to use THE BEST resolution DEM data that NASA will give us for free... and have each planet pre-rendered max-rez at the beginning of the scene-start_co_ it might not be wise to do so (practically speaking).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis might be a great use for _qt_incremental loading_qt_... or incremental LODing.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  With me?  If so_co_ have another shot of booze_co_ cuz you ain_t_t drunk enough_co_ yet.  heh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne last thing.  You can be SURE that a couple thousand other demented 3D scientists... have already tried to do this.  (This solar system is a rather popular subject_co_ worldwide.  Maybe more popular than BJS!)   SO... there is certainly code to steal_co_ hidden in various worldwide dumpsters (neglected folders).  But perhaps more importantly_co_ there are already JSON files containing planetary DEM data for ALL nearby NASA-noticed planets... freely available. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhere?  I dunno.  You need to go fishing.  Put various pertinent keywords onto your hook_co_ and cast into the logs and lily pads... where _qt_big fish_qt_ hang-out.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIt might not be SUPER hi-rez data_co_ but it is _qt_reasonable_qt_ and manageable.  And there_t_s surely more than one resolution available_co_ too.... for each planet.  Some planets might not have completed elevation data... so you may need to design a _qt_fudging engine_qt_ that fills-in the areas where you have no DEM data.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWow_co_ huh?  phew.  I_t_m pooped.  You?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Party on!  [_lt_a href_eq__qt_https_dd_//www.melown.com/intergeo2017/?pos_eq_obj_co_15.083684_co_50.914799_co_fix_co_365.98_co_-20.70_co_-77.86_co_0.00_co_64.17_co_45.00_qt_ rel_eq__qt_external nofollow_qt__gt_fun link_lt_/a_gt_]  (mouse-dragging/wheeling active).  Fudging engine!  Artificial intelligence fuzzy-logic body-putty generator... filling-in the cracks.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  (Wingnut sprays some Jaggy-B-Gone on the BJS CSG system_co_ just... cuzzzz)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2017-10-26T12:19:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_192185_qt_ data-ipsquote-contentid_eq__qt_33484_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1508254679_qt_ data-ipsquote-userid_eq__qt_7708_qt_ data-ipsquote-username_eq__qt_BitOfGold_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 2017-10-17 at 11_dd_37 AM_co_ BitOfGold said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThere is a cool lib for this_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//github.com/mgvez/planet-positions_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/mgvez/planet-positions_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\t\t\tit returns Three.Vector3_co_ but you can .copyFrom that to BABYLON._lt_br /_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThis is awesome_co_ thanks so much for sharing it!!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve just started using it and it_t_s basically done all my work for me _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve got the entire solar system working with accurate orbits_co_ and I even used the radius values supplied by `planet-positions.js`\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy next step is scaling_dd_ I_t_m experimenting with ways of keeping the relative sizes of the planets accurate but aesthetically scaling the distances between them so that the entire solar system could be viewed as a whole from one camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would love to accurately space the planets_co_ but the problem there is that the solar system is very_co_ very big and very_co_ very empty_dd_\n_lt_/p_gt_\n\n_lt_div class_eq__qt_ipsEmbeddedVideo_qt__gt_\n\t_lt_div_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt_true_qt_ frameborder_eq__qt_0_qt_ height_eq__qt_270_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/1AAU_btBN7s?feature_eq_oembed_qt_ width_eq__qt_480_qt__gt__lt_/iframe_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlthough_co_ I might add a slider to let users set the scale to a realistic 1_dd_1 if they want to. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2017-10-26T12:27:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_192655_qt_ data-ipsquote-contentid_eq__qt_33484_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1508629854_qt_ data-ipsquote-userid_eq__qt_7708_qt_ data-ipsquote-username_eq__qt_BitOfGold_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 2017-10-21 at 7_dd_50 PM_co_ BitOfGold said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tAn alpha version is more or less working now_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//www.bitofgold.com/solarsystem/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.bitofgold.com/solarsystem/_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tMy I ask how you did your planet labels?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(I_t_ve very new to using BabylonJS so I_t_m not sure how this is typically done.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve been using simple HTML tags and this bit of code to make them follow the planet positions_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_  planetMeshes.forEach((planet_co_ index) _eq_&gt_sm_ {\n    scene.updateTransformMatrix()_sm_\n\n    let label _eq_ planetLabels[index]_sm_\n    var position2D _eq_ V3.Project(\n          planet.position_co_\n          BABYLON.Matrix.Identity()_co_\n          scene.getTransformMatrix()_co_\n          camera.viewport.toGlobal(engine.getRenderWidth()_co_ engine.getRenderHeight())\n      )_sm_\n\n    label.style.left _eq_ position2D.x + _qt_px_qt__sm_\n    label.style.top _eq_ position2D.y + _qt_px_qt__sm_\n  })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t... the only problem with that is that the labels are on &lt_sm_div&gt_sm_ layer above the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo it looks a bit weird when a planet passes behind another because its label still floats on top.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-10-26T15:35:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello_co_ you can use GUI with tracking positions_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/gui#tracking-positions_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/gui#tracking-positions_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-10-26T16:39:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFirst you make a full screen GUI_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ scene.gui _eq_ BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI(_qt_UI_qt_)_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAfter that_co_ add a label connected to each planet mesh (planet.model is a BABYLON.Mesh)_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var rect1 _eq_ new BABYLON.GUI.Rectangle()_sm_\nrect1.width _eq_ _qt_150px_qt__sm_\nrect1.height _eq_ _qt_40px_qt__sm_\nrect1.color _eq_ _qt_rgba(255_co_255_co_255_co_0.37)_qt__sm_\nrect1.thickness _eq_ 0_sm_\nrect1.background _eq_ _qt_transparent_qt__sm_\nscene.gui.addControl(rect1)_sm_\nvar label _eq_ new BABYLON.GUI.TextBlock()_sm_\nlabel.text _eq_ planet.title_sm_\nrect1.addControl(label)_sm_\n\nrect1.linkWithMesh(planet.model)_sm_   \nrect1.linkOffsetY _eq_ -40_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2017-10-26T17:43:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7708_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/_qt_ rel_eq__qt__qt__gt_@BitOfGold_lt_/a_gt_ Thank you so much!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will try that and let you know hot it goes! \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-10-28T09:00:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIf you would travel at the 99% of speed of light_co_ from the spaceship_t_s view it would take only about 6.1 minutes to reach Jupiter. And Jupiter would look as a flat ellipsioid_co_ not a sphere_co_ about 1/14th width of the diameter._lt_br /_gt_\n\t(But_co_ the video would be shorter _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_)_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-10-28T09:03:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAnd you would not see anything in front of you_co_ only a band of stars at the sides_co_ as light would turn into red and then infrared. Behind you the light would turn blue and into ultraviolet._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]