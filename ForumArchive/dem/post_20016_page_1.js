[{"Owner":"Dal","Date":"2016-01-21T02:36:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you may or may not know_co_ a little while back_co_ Microsoft released the full source code for Visual Studio Code under the MIT license._lt_br_gt_\n\tThe really cool thing about that is_co_ VS Code is built on top of the Monaco code editor... the same editor that drives the Babylon.js playground._lt_br_gt_\n\tThat means we can finally start to use that awesome code editor in our own apps and Babylon tools!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s not any documentation available for the editor at the moment_co_ and the VS Code github already has a couple of issues open asking for it_co_ but it_t_s not yet materialized._lt_br_gt__lt_br_gt_\n\tI decided to have a go at figuring it out myself_co_ using the Typescript Playground and Babylon Playground for pointers. I managed to come up with this_dd__lt_br_gt__lt_br_gt__lt_a href_eq__qt_https_dd_//www.darrylryan.com/playground/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.darrylryan.com/playground/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis does now mostly work - it can syntax highlight the typescript code_co_ the intellisense autocomplete and type checking all works. I_t_ve also implemented a way to compile and run the code in the same way that the Typescript playground does it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor now though I have a few problems I haven_t_t solved_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- The gulp build task for the editor doesn_t_t seem to build all the parts it needs. The loader tries to load other files too. I therefore had to rip some files from the full build of VS Code. This makes a bit of a mess and it ends up way bigger than it needs to be. I_t_m hoping there_t_s a better build task for it that I_t_ve missed_co_ or that there will be one soon as the VS Code team are working on it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- The browser console lists a lot of warnings about duplicate file requires. I_t_m not sure how to solve that yet as I haven_t_t figured out where they_t_re coming from.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-  The BIG problem that I_t_m hoping _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt__gt_@Deltakosh_lt_/a_gt_ might be able to help with is that I really can_t_t figure out how to load extra TypeScript definition files in such as the BABYLON framework. The method used in the BabylonJS Playground doesn_t_t seem to work for me_co_ the methods don_t_t exist on the objects being called_co_ so I guess the API has changed between the VS Code version and the one on Azure. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe full source code (MIT license) is here if you want to dig around and help me out _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ _lt_br_gt__lt_a href_eq__qt_https_dd_//cloud.loudened.com/index.php/s/xYeeyYAsVVresJ2/download_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//cloud.loudened.com/index.php/s/xYeeyYAsVVresJ2/download_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDal\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-01-21T18:03:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is great!! Unfortunately I did not have time to check how VSCode works comparatively with the PG\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut my plan is to Open source the playground as soon as I can\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-01-21T18:05:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPlayground open source_co_ cool\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-01-21T19:29:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI was wondering today_co_ while sitting in a train_co_ how possible something like that would be.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou just cleared my thoughts. Thanks!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMay I wonder - is it the full VSCode? is there a kind of a virtual file system to organize your code?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dal","Date":"2016-01-22T18:00:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@RaananW My thing is just the editor ripped out. The full VS Code source is available now but it runs within Electron in order to have access to the file system... that stuff won_t_t be possible from the browser. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m planning to make a full Babylon IDE using this though_co_ which will support saving to cloud storage and possibly browser local storage.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-01-27T13:23:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_113766_qt_ data-ipsquote-contentid_eq__qt_20016_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1453399428_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 21/1/2016 at 7_dd_03 PM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tBut my plan is to Open source the playground as soon as I can\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tJust to know_co_ you think when put open source?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am very interested to see how the intellisense system is realize for my editor. that of the playground is really great.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you DK_co_ looking forward.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-01-27T16:10:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNot yet unfortunatey_co_ my ask was rejected _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-01-27T17:16:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhy rejected ? _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-01-28T16:45:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tbecause MS is not ready yet to make it OSS (I mean the code editor)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]