[{"Owner":"JCPalmer","Date":"2015-06-16T15:27:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_During my development of projecting scenes onto 3D TVs from mobile devices_co_ I noticed on an android tablet_co_ that the frame rate dropped significantly.  Decided to make the simplest test possible to try to confirm what I thought was happening.  Made this its own topic_co_ rather than bury it on page 5 of another topic._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A post process performing poorly on tablets also has implications for things other than TVs.  Driving one the new VR / AR headsets from a mobile device would look pretty infeasible.  Not to mention the other built in post processes_dd_ blur_co_ refraction_co_ light scattering_co_ etc._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The test basically draws a plane over an over_co_ in batches of 250.  Batch 1 is thrown away.  Batch 2 is timed to get a base line fps.  Finally_co_ the simplest possible post process shader is added.  Batch 3 is timed for comparison to batch 2._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Results are written to console_co_ but this not viewable on tablet browsers_co_ so the plane doubles after the test to hold a texture of the results (fps without / fps with).  On desktops_co_ there should be little impact._lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_06_2015/post-8492-0-42306000-1434467087.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_06_2015/post-8492-0-42306000-1434467087.png_qt_ data-fileid_eq__qt_4475_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-8492-0-42306000-1434467087.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_Here is the link_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//googledrive.com/host/0B6-s6ZjHyEwUfmRCVV8zWGdwZVJtN3FZdXdvOERlNmRlcmRDVG1xdFVsMXZ2dHFMQ0haMGc_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//googledrive.com/host/0B6-s6ZjHyEwUfmRCVV8zWGdwZVJtN3FZdXdvOERlNmRlcmRDVG1xdFVsMXZ2dHFMQ0haMGc_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have not run this specific test yet on my devices_co_ since the googledrive link is so long to type.  Will update this topic_co_ shortly.  Others have different processors.  Please add the results for your own mobile devices.  No bother for desktops (though maybe the hybrids like Surface could be interesting)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-06-16T15:39:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yep_co_ I found on_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sony xperia v3 tablet _lt_a href_eq__qt_http_dd_//www.devicespecifications.com/en/model/ab922b5e_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.devicespecifications.com/en/model/ab922b5e_lt_/a_gt__co_ running android 5 was 57.35 / 26.37_lt_/p_gt__lt_p_gt_Apple iPad Air2 tablet _lt_a href_eq__qt_http_dd_//www.devicespecifications.com/en/model/ad8a3023_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.devicespecifications.com/en/model/ad8a3023_lt_/a_gt__co_ running iOS 8.3 was 60.01 / 58.58_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hoping others with other hardware will show whether this is an android problem or that just certain hardware._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-06-16T16:20:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_As a side note_co_ to get the console on your PC while running your website on any device_co_ you should use www.vorlonjs.com_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Nokia 1520 (Windows Phone 8.1)_dd_ 49.50 / 18.01_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-06-17T09:06:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wohaa vorlonjs is really a great tool !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2015-06-17T13:51:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ looks like I would recommend FF Mobile from my results..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Samsung Note 4_lt_/p_gt__lt_p_gt_Android 5.0.1_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Built In Browser_dd_ Just the blue square. No results_lt_/p_gt__lt_p_gt_Chrome Mobile Browser (43.0.2357.93)_dd_ 34.7 / 14.3_lt_/p_gt__lt_p_gt_FireFox Mobile Browser (38.0.5)_dd_ 59.79 / 40.86_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-06-17T17:26:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wow_co_ that was quick.  I got both a Chrome &amp_sm_ an Android update today.  The Chrome seems to be being updated automatically.  I am now 43.0.2357.93.  I did not think to do a run prior to the Android update_co_ but version looks to be same as reddozen._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now running Android 5.0.2_co_ which is what I thought had before  (build 23.1.A.1.28).  Anyway reran the test for Sony_co_ and now 57.92 / 55.24_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for the vorlonjs tip.  I have not played yet_co_ but with my clavicle still healing &amp_sm_ summer_co_ I seem to get almost nothing done lately._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_co_  I am positive you_t_re busy with E3 right now_co_ or you are fool_co_ since you are in LA.  When you get back.  Check the versions on your V2_co_ please.  Run a before &amp_sm_ after updates.  Thanks!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-06-17T18:34:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ I got a little ahead of myself.  Thought I could now just run my 3D tester CocoonJS app_co_ and everything would be fixed.  It still drops down to 5 fps any time a 3D render is engaged though._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I ran the 3D tester scene on the browser.  I was relying on either the console or canvas+ built in fps meter_co_ so could not see results directly.  The disappearing dialog is done over a fixed # of frames however_co_ and the time to disappear was much better._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I just went the other way by running (will get to vorlonjs some other time) this test on canvas+.  Result is 56.85 / 21.53.  This means that this is very much a hardware / OS / renderer combination_co_ as reddozen also is showing.  Will see what happens from an XDK app_co_ but not today._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]