[{"Owner":"Vousk-prod.","Date":"2015-03-04T18:56:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi everyone_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_Deltakosh_co_ on 03 Jan 2015 - 8_dd_33 PM_co_ said_dd__lt_/p_gt__lt_p_gt_    To support WebVR specification (_lt_a href_eq__qt_http_dd_//blog.tojicode.com/2014/07/bringing-vr-to-chrome.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blog.tojicode.com/2014/07/bringing-vr-to-chrome.html_lt_/a_gt_) and CardBoard devices _lt_a rel_eq__qt_external nofollow_qt__gt_(_lt_/a_gt__lt_a href_eq__qt_https_dd_//www.google.com/get/cardboard/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.google.com/get/cardboard/_lt_/a_gt_) _lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I tried by curiosity to put a WebVRCamera in a scene_co_ I get the expected splitted stereo view with some fov distortion_co_ but the camera is not moving at all_co_ even when changing orientation of the smartphone. Is it expected behavior ?_lt_/p_gt__lt_p_gt_Is WebVRCamera intended to be used with a cardboard ? And how are we supposed to use it then ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-03-04T19:22:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co_ _lt_/p_gt__lt_p_gt_Try the VRDeviceOrientationCamera_co_ it has the orientation events registered._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-04T19:48:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Can I combine VRDeviceOrientationCamera and WebVRCamera to move the WebVR one according to impulses from VRDeviceOrientation one ?_lt_/p_gt__lt_p_gt_Maybe via a parenting_co_ I will try that._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-04T22:41:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_VRDeviceOrientationCamera is exactly what you are looking for_dd_ Same rendering as WebVRCamera but tied with device orientation events_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And yes VRDeviceOrientatonCamera is for CardBoard_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_WebVRCamera is for Oculus for instance when used with WebVR browser (chrome_co_ firefox)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-05T01:21:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ah coool !!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hmmm_co_ I_t_ve just tried that VRDeviceOrientationCamera but with no success_co_ the view is not moving at all (android device_co_ FF_co_ Chrome and native browser)._lt_/p_gt__lt_p_gt_Is there something I need to activate for deviceOrientation to be computed ?_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#NA4OQ%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#NA4OQ#8_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-05T01:29:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Did you attachControl the camera?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there error in the console?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-05T01:49:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ooops I didn_t_t attachControl _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ alt_eq__qt_^_^_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ (I falsly presumed that canvas events listening is not applicable for this kind of camera)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now it moves !! Yeah !!_lt_/p_gt__lt_p_gt_But roll (alpha) is not taken in account_co_ and pitch (beta) and yaw (gamma) are inverted... (that could be corrected by inserting the phone inside the cardboard in the other direction but that_t_s not possible_co_ the camera hole is on the left_co_ and the magnet button also)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-05T03:59:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Please correct the camera directly _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ I_t_ll validate the PR_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-05T22:09:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok._lt_/p_gt__lt_p_gt_Hmm_co_ little question _dd_ why babylon.oculusCamera.js and babylon.oculusGamepadCamera.js are duplicate in BJS/Cameras/ AND in BJS/Cameras/VR/ folders ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-05T22:34:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_They should not be _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_and will you test_co_ please check on all devices (windows phone_co_ android and IOS)_dd_ we need to come with a portable solution_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-05T22:48:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yep we should check on every kind of devices_co_ unfortunatly I only have android one (Samsung Galaxy S4) to test._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-05T23:08:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Another problem _dd_ VRDeviceOrientationCamera extends OculusCamera (prototype._onOrientationEvent)_co_ but I don_t_t have an oculus rift to check and validate any change in that class..._lt_/p_gt__lt_p_gt_It seems that the orientation changes come from the _qt_regular_qt_ deviceorientation event listener... does the browser catch the plugged oculus rift_t_s movements and convert them to deviceorientation events ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Pretty sure that alpha_co_ beta_co_ gamma values won_t_t be consistent on every different kind of devices AND oculus rift... _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_dry.png_qt_ alt_eq__qt_&lt_sm__&lt_sm__qt__gt__lt_/p_gt__lt_p_gt_Wouldn_t_t be less hasardous to override prototype._onOrientationEvent for the VRDeviceOrientationCamera ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-05T23:12:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve also noticed some month ago that alpha_co_ beta_co_ gamma values are interpreted differently on each browser _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_dry.png_qt_ alt_eq__qt_&lt_sm__&lt_sm__qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-05T23:19:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh_co_ we_t_ll also have to pay attention to gimbal lock problem _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_dry.png_qt_ alt_eq__qt_&lt_sm__&lt_sm__qt__gt__lt_/p_gt__lt_p_gt_Looks like this universal/portable VRDeviceOrientationCamera won_t_t be an easy task_co_ particularly for a non math-skilled people like me _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt_ _dd_lol_dd_ _co_ but I_t_ll try to do my best !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-03-05T23:44:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I had the same problem with this camera. I didn_t_t play too much with the solution_co_ but technically the screen orientation should also be taken into account. then you need to inverse the device_t_s movement using the screen orientation data._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-05T23:49:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ooops_co_ just noticed that VRDeviceOrientationCamera already overrides prototype._onOrientationEvent... Will be easier to code_co_ no need to change anything in parent class._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-06T00:20:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@RaananW_dd_ I agree we need to be as generic as possible_co_ and taken screen orientation in account seems important for that. But if this camera is specificaly designed for cardboard_co_ the orientation of the smartphone will always be landscape... In fact in general terms_co_ camera designed for head mounted display VR viewing is always stereoscopic_co_ and since we all have our two eyes on an horizontal line_co_ it_t_s always parallel side by side stereoscopy_co_ which usually implies landscape mode for viewing confort._lt_/p_gt__lt_p_gt_If we decide to take screen orientation in account_co_ how will we decide when to switch from one orientation to other_co_ do you think that people who _qt_yawed_qt_ their head to 90° really would see their scene suddenly changing orientation ? Better to simply continue following their head movement I think._lt_/p_gt__lt_p_gt_In fact this screen orientation stuff is a more complex (but interesting) problem. Should the BJS engine lock screen orientation when using this kind of camera_co_ to avoid the browser to suddenly rotate during VR experience ? Is it possible_co_ and is it or not too intrusive ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-06T01:54:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m afraid this is too intrusive_lt_/p_gt__lt_p_gt_And for me_co_ you should just work on VRDEviceCamera and not on parent camera_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"FlashyGoblin","Date":"2016-04-15T17:12:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_74408_qt_ data-ipsquote-contentid_eq__qt_12914_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1425601235_qt_ data-ipsquote-userid_eq__qt_6528_qt_ data-ipsquote-username_eq__qt_Vousk-prod._qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 3/5/2015 at 7_dd_20 PM_co_ Vousk-prod. said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t@RaananW_dd_ I agree we need to be as generic as possible_co_ and taken screen orientation in account seems important for that. But if this camera is specificaly designed for cardboard_co_ the orientation of the smartphone will always be landscape... In fact in general terms_co_ camera designed for head mounted display VR viewing is always stereoscopic_co_ and since we all have our two eyes on an horizontal line_co_ it_t_s always parallel side by side stereoscopy_co_ which usually implies landscape mode for viewing confort.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf we decide to take screen orientation in account_co_ how will we decide when to switch from one orientation to other_co_ do you think that people who _qt_yawed_qt_ their head to 90° really would see their scene suddenly changing orientation ? Better to simply continue following their head movement I think.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIn fact this screen orientation stuff is a more complex (but interesting) problem. Should the BJS engine lock screen orientation when using this kind of camera_co_ to avoid the browser to suddenly rotate during VR experience ? Is it possible_co_ and is it or not too intrusive ?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHas there been any solution for this? I_t_d like to be able to toggle between a DeviceOrientationCamera and a VRDeviceOrientationCamera. That way the user can use their phone with or without a Google Cardboard viewer. The rotation and positioning of both camera are really buggy. I don_t_t know enough about device orientation details to attempt it myself. With VR hitting hard this year_co_ this seems like a missed opportunity for Babylon.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2016-04-15T20:37:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can switch manually between the two cameras (attach/detach control) according to screen orientation (there is a dedicated js event listener if I remember well).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd after deeper tests_co_ I discovered that the problem is not really the device orientation cameras but... the devices and browsers (for instance galaxy s4 completely messed up the magnetometer data in every browsers and many native apps_co_ but it_t_s ok in cardboard apps because they accessed sensors differently).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"FlashyGoblin","Date":"2016-04-15T22:48:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCorrect_co_ Vousk. I am able to attach and detach camera accordingly. They just don_t_t play nice with all device orientations like you said. But with Babylon keeping to the theme of keeping things simple_co_ and with the numerous amount of cameras_co_ it_t_d be great if there was a VR solution that worked. For example with webvr-boilerplate with ThreeJS_co_ there is one camera that toggles in and out of VR mode. With all of BJS_t_s features and tools_co_ I seriously believe that Babylon could kill ThreeJS_co_ if only the WebVR support was better. And I think now is the time to pull ahead with VR becoming so hot.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2016-04-15T23:03:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tFor now WebVR is only supported by recent nightly mobile versions of Chromium and Firefox. As usual for new cool stuff_co_ we_t_ll have to wait it becomes a standard for a global adoption... Until that we can_t_t do really better orientation support.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"FlashyGoblin","Date":"2016-04-15T23:19:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tRight_co_ I totally understand that and it makes sense. It would be awesome to use the polyfill fallback that ThreeJS uses. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]