[{"Owner":"jokyfoot","Date":"2015-07-02T22:58:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve been spending the last two days searching the web for an online 3d javascript enviroment and I_t_ve been looking for something specific_dd_ Interactive user controlled lighting. I_t_ve gone though at least 20 different 3D viewers but none of them seen to have this feature._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Last night_co_ I came across this website_dd_ _lt_a href_eq__qt_http_dd_//3d.si.edu/browser_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//3d.si.edu/browser_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It has an amazing 3d interface_co_ the most creative_co_ and user friendly UI for controling lighting. You can control the scene lighting_co_ by moving a point along the surface of a Sphere. It changes both the position and direction of the light with a single mouse click. Additionally_co_ you can have up to 3 lights_co_ and you can also change the color and intensity._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_[_lt_img src_eq__qt_http_dd_//i.imgur.com/DYdlRPm.png_qt_ alt_eq__qt_DYdlRPm.png_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Unfortunately_co_ it was designed by Autodesk specifically for the Smithsonian website_co_ so I am unable to use it for mine._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Would something like this be possible/easy using babylon.js?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-07-03T15:51:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can have a look at this project for a good start_dd_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.castorengine.com/castorengine/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.castorengine.com/castorengine/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-07-03T16:15:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The link Deltakosh gives you is to test the editor. Do used only for purposes of testing only._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And you can download it on the deposit for personal use_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//bitbucket.org/Dad72/castorengine/overview_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//bitbucket.org/Dad72/castorengine/overview_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I wonder if I will not host online castorEngine and do a session system and storage space limit per project as does PlayCanvas and other online editor. ca gonna be the next step to make castorEngine I think its easy access._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-07-03T19:17:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ dad72s editor might be a bit too much to start with (it would be for me at least). I think it should be possible and it shouldn_t_t be too hard to achieve what you want. If it_t_s just about the light you can do something like that_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#10RHFF_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#10RHFF_lt_/a_gt_ It_t_s far from perfect but I think it shows that user controlled light can be done preeettty easy _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_With the help of the community you should be able to recreate pretty much all of the effects seen in that Smithsonian 3D viewer (that thing is pretty cool). I would love to see it done with babylon. js!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_By the way_dd_ Hi and welcome to the forum jokyfoot _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-07-03T19:51:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey iceman_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It shouldn_t_t be difficult at all to recreate what Autodesk built for the Smithsonian viewer.  With all of the recent posts on the BJS forum focusing on GUIs and object transforms_co_ as well as dragging and dropping .babylon files and other media directly into the browser_co_ most any and all of the scripts required have been posted in just the past few months. And most all of them have been reviewed and tested to present the most optmized processes for each of the many diferent methods to build more universally applicable tools.  As for GUIs_co_  I_t_ve become a fan of bGUI_co_ but in testing all of the gui extensions published recently_co_ each one has their own unique features to offer._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I doubt it would take someone as talented as you much time at all to build a very general GUI with all of the features you are requesting.  BabylonJS has taken a huge leap this year and is now comparable to three.js and practically all other WebGL frameworks - at least in my opinion.  However_co_ I find BabylonJS far more practical and very familiar to my experience in developing user friendly tools_sm_ and certainly game oriented apps (games_co_ of course.)  I_t_m surprised that the user base is still relatively small_co_ but I_t_m certain this will change rapidly as this year progresses.  The experience level of the average user of this forum is amazing to me_co_ and due to the dedication and commitment to quality found here_co_ most all scripts and certainly extensions have been thoroughly tested and optimized to where practically anyone visiting for the first time can reasonably grasp what is happening within the code.  So why not?  I think you_t_re the person to do what you_t_re asking - and if it turns out to be an extension_co_ then all the better.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jokyfoot","Date":"2015-07-03T23:25:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ll check out the castor Engline_co_ though I need something elegant and simple that a user can understand immediately._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_88078_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_15537_qt_ data-ipsquote-username_eq__qt_iiceman_qt_ data-cite_eq__qt_iiceman_qt_ data-ipsquote-timestamp_eq__qt_1435951078_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Well_co_ dad72s editor might be a bit too much to start with (it would be for me at least). I think it should be possible and it shouldn_t_t be too hard to achieve what you want. If it_t_s just about the light you can do something like that_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#10RHFF_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#10RHFF_lt_/a_gt_ It_t_s far from perfect but I think it shows that user controlled light can be done preeettty easy _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_With the help of the community you should be able to recreate pretty much all of the effects seen in that Smithsonian 3D viewer (that thing is pretty cool). I would love to see it done with babylon. js!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_By the way_dd_ Hi and welcome to the forum jokyfoot _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you_co_ this is really awesome. I_t_m suprized that it took so few lines of code to create that._lt_/p_gt__lt_p_gt_The project I_t_m working on is an Art Model/Still Life reference library for artists_co_ where users can load a model_co_ change the camera angle_co_ lighting_co_ and maybe even depth of field and other camera controls_co_ until they_t_ve set up a scene they_t_d like to draw._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I really only know enough javascript to get by as a wordpress designer_co_ but what you_t_ve shown me is inspiring enough to learn this._lt_/p_gt__lt_p_gt_To get that example you posted working as a part of a user interface_co_ and also effect the lighting of a model in another main window_co_ would I need to create two scenes?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-07-04T00:49:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi jokyfoot_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Interesting username.  There are two primary extensions for creating GUIs (user interfaces) in BJS - the Dialogue extension from JCPalmer and the bGUI extension from Temechon.  They can both be found on GitHub in the BabylonJS directory under extensions.  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here are links if you need them_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_bGUI extension by Temechon_dd__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_     - Source code _dd_ _lt_a href_eq__qt_https_dd_//github.com/Temechon/bGUI_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/Temechon/bGUI_lt_/a_gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_     - Demo _dd_ _lt_a href_eq__qt_http_dd_//temechon.github.io/bGUI/_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//temechon.github.io/_lt_span style_eq__qt_color_dd_#FF0000_sm_background-color_dd_#FFFF00_sm__qt__gt_bGUI_lt_/span_gt_/_lt_/a_gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_     - Documentation _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_25102_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs...age.php?p_eq_25102_lt_/a_gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Dialogue extension by JCPalmer_dd__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_     _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/tree/master/Dialog_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/B...e/master/Dialog_lt_/a_gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_I recommend using one of these extensions for your interface as they have simple functions for creating GUI elements without the need for you to code everything yourself.  These have saved me countless hours of work_co_ as you are able to build full functioning GUIs extremely fast - and the time required is dependant on the graphics you use of course. I tend to use the bGUI extension more often_co_ as I_t_m simply more familiar with this - although both will save you tons of time and cut your lines of code down dramaticaly._lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_I_t_ve been able to create beautiful graphic interfaces with bGUI_co_ using icons and interface elements I build in Photoshop - which look as good as any full color interface for the most widely used graphic applications.  In bGUI - you are able to use 3D objects as buttons and apply the graphics as textures - which I generally use planes as opposed to other 3D objects for more traditional GUI appearance.  Dialogue extension is similar_co_ and both have their own unique strengths.  Either way_co_ it only requires 1 canvas for both the GUI elements and your babylon scene.  Check out the links and the demos that each one of these brilliant guys have created as examples.  In looking at the GUI for the Smithsonian you posted_co_ it wouldn_t_t take me more than a few hours to build all the graphic elements in Photoshop and code these into any babylon scene as controls - and it would look and function EXACTLY as the interface Autodesk built.  Otherwise_co_ you_t_re looking at days of work with mixed results if you try and build a GUI from scratch without using one of these extensions._lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Please post the link to any GUIs you might build using either one of these extensions_co_ as they are relatively new_co_ and there are few examples at this early time in their life. This will help and encourage others to use these as well.  Again_co_ I must have saved myself at least 40 hours of work on my last app using bGUI_co_ and cut the lines of code I had to script by at least by 30 to 40%._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-07-04T11:09:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@dbawel. It also has to the extentions _lt_strong_gt_CastorGUI.  _lt_/strong_gt_It is part of the extensions to create GUI which create a layer above the canvas. It is as simple to use._lt_br_gt_ _lt_br_gt__lt_strong_gt_Topic_dd__lt_/strong_gt__lt_br_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/15121-extension-castorgui-a-gui-library-for-canvas/?p_eq_85691_qt__gt_http_dd_//www.html5gamedevs.com/topic/15121-extension-castorgui-a-gui-library-for-canvas/?p_eq_85691_lt_/a_gt__lt_br_gt_ _lt_br_gt__lt_strong_gt_Extention_dd__lt_/strong_gt__lt_br_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions_lt_/a_gt__lt_br_gt_ _lt_br_gt__lt_strong_gt_Demo_dd__lt_/strong_gt__lt_br_gt__lt_a href_eq__qt_http_dd_//www.castorengine.com/castorengine/Data/JS/CastorGUI/demo/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.castorengine.com/castorengine/Data/JS/CastorGUI/demo/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-07-04T21:17:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey Dad_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I just responded to another post on the release of your GUI extension.  I look forward to integrating the GUI extension to the _qt_Castor Engine_qt_ in a new app this week. The app is a multiuser social app with browser integration_co_ music sharing_co_ real-time video sharing_co_ photo database_co_ and an interactive toolkit (details coming later)_co_ so I_t_m not sure if any of the GUI extensions will suffice.  However_co_ I_t_m eager to try your GUI extension and see if it might provide the functionality I need._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sorry_co_ I didn_t_t mean to overlook your GUI extension_co_ but I was a little confused as the Caster Engine has so many different functions.  The more I check it out_co_ the more impressed I am and can_t_t believe all of the hard work and countless hours you must have spent in its development thus far.  It_t_s unbelievable just how many functions are available in the Castor Engine now.  Are you still calling it the _qt_Castor Engine?_qt_  I_t_ll be reading through all the availale documentation today_co_ as I_t_m sure there_t_s allot of functionality I_t_m not yet famililar with.  You almost make developing in WebGL too easy. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_   If you keep on developing such simple APIs_co_ I_t_ll soon be out of a job. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ alt_eq__qt__dd_huh_dd__qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jokyfoot","Date":"2015-07-04T22:08:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_88105_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_15537_qt_ data-ipsquote-username_eq__qt_dbawel_qt_ data-cite_eq__qt_dbawel_qt_ data-ipsquote-timestamp_eq__qt_1435970998_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Hi jokyfoot_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Interesting username.  There are two primary extensions for creating GUIs (user interfaces) in BJS - the Dialogue extension from JCPalmer and the bGUI extension from Temechon.  They can both be found on GitHub in the BabylonJS directory under extensions.  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here are links if you need them_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_bGUI extension by Temechon_dd__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_     - Source code _dd_ _lt_a href_eq__qt_https_dd_//github.com/Temechon/bGUI_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/Temechon/bGUI_lt_/a_gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_     - Demo _dd_ _lt_a href_eq__qt_http_dd_//temechon.github.io/bGUI/_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//temechon.github.io/_lt_span style_eq__qt_color_dd_#FF0000_sm_background-color_dd_#FFFF00_sm__qt__gt_bGUI_lt_/span_gt_/_lt_/a_gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_     - Documentation _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_25102_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs...age.php?p_eq_25102_lt_/a_gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Dialogue extension by JCPalmer_dd__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_     _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/tree/master/Dialog_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/B...e/master/Dialog_lt_/a_gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_I recommend using one of these extensions for your interface as they have simple functions for creating GUI elements without the need for you to code everything yourself.  These have saved me countless hours of work_co_ as you are able to build full functioning GUIs extremely fast - and the time required is dependant on the graphics you use of course. I tend to use the bGUI extension more often_co_ as I_t_m simply more familiar with this - although both will save you tons of time and cut your lines of code down dramaticaly._lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_I_t_ve been able to create beautiful graphic interfaces with bGUI_co_ using icons and interface elements I build in Photoshop - which look as good as any full color interface for the most widely used graphic applications.  In bGUI - you are able to use 3D objects as buttons and apply the graphics as textures - which I generally use planes as opposed to other 3D objects for more traditional GUI appearance.  Dialogue extension is similar_co_ and both have their own unique strengths.  Either way_co_ it only requires 1 canvas for both the GUI elements and your babylon scene.  Check out the links and the demos that each one of these brilliant guys have created as examples.  In looking at the GUI for the Smithsonian you posted_co_ it wouldn_t_t take me more than a few hours to build all the graphic elements in Photoshop and code these into any babylon scene as controls - and it would look and function EXACTLY as the interface Autodesk built._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Cool_co_ If you can do it in just a few hours maybe I should just pay you to do it. Are you interested?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-07-04T23:40:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you Dbawel for your pleasant comment about CastorEngine. Yes there is a lot of work on it_co_ I have the most complete keeping the ease of use and efficiencies and have the idea for the future of integration directly on the web and allocate spaces users to avoid their download and install. Yes the name is still CastorEngine._lt_/p_gt__lt_div_gt_CastorGUI is derived from CastorEngine to create a GUI via scripts on editor but can be used separately for any project with HTML5 canvas._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Do not hesitate if you have questions about CastorGUI or CastorEngine on its main topic._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-07-05T01:20:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@dad72 - I will certainly let you know when I have questions_co_ as I_t_m sure I will with a new extension.  Again_co_ thanks for doing all of the hard work and allowing us all to share in the fruits of your labor.  I hope one day I can find the time to contribute a tool to benefit others as well.  Right now I only have time to advise with whatever experience I might have._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_@jokeyfoot - I don_t_t have any time in the next few weeks_co_ but I_t_m certainly happy to assist you with the integration if you haven_t_t had the experience.  It all depends on the functions of the application and what you_t_re controlling with the interface.  There are some limitations to using the GUI extensions_co_ as there isn_t_t complete compatability with multiple canvas_t_ - depending again on what other functions are in your script.  In mentioning building this in a few hours_co_ this is what it would take to build the GUI and the graphic objects.  But the total time required is all relevant to your application as well as server commands that are passing through to the application.  If it_t_s primarily booleen operations that you_t_re passing through to your application_co_ then it_t_s fairly straight forward.  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The application needs to be completely functioning before attaching any GUI controls_co_ so you_t_ll need to control your application by keyboard commands and/or controllers that could then be replaced with GUI elements.  If you don_t_t have your application built yet_co_ then you will definately want to design the app and GUI together in advance before you begin building the application. Then the application needs to be built and completely functioning before you commit to building the GUI - as applications always change during development_co_ and you certainly don_t_t want to waste time building GUI elements that will never be used.  Also_co_ the application is the most important element.  I know this sounds obvious_co_ but I_t_ve seen developers sacrifice function for aesthetics._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What most people have trouble with in viewing your application example would be the color wheels - but this is something I_t_ve built before_co_ and can certainly direct you in getting this to work. I have never used the application you referenced_co_ but the controls are all familiar.  Let me know if you have your application built_co_ or when you might have this complete.  I_t_ll then be happy to help you with how to build a beautiful GUI as quickly as possible and to attach this to your app._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I hope I_t_m not telling you things that you already know - I don_t_t want to presume anything._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So I can certainly help accelerate the process_co_ but you_t_ll want to take advantage of the enormous resource here on the BabylonJS forum. There are literally decades of experience on this forum_co_ and I_t_m continually amazed at the level of knowledge and the generousity of the sharing of knowledge by this community._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Message me if you like_co_ and I can certainly advise and help overcome the pitfalls I_t_m aware of.  But the fastest way to complete your app is to share as much as you can on this forum.  By the way_co_ your username still cracks me up._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-07-05T02:21:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@ jokeyfoot - I just re-read your initial post.  The application you_t_re considering is fairly straight forward to write and integrate a GUI to control.  However_co_ what is the application that you would apply this tool?  I could create a scene with interactive lighting and an identical GUI to what Autodesk created_co_ but would this be a stand alone app?  I suppose it could be_co_ as you could then write out the positions and color of your lights.  But the tool would need a few more features to make it practical.  The setup from the application would then need to be translated into Javascript for the BJS or other WebGL framework - which perhaps is more difficult than it sounds - unless you pass through an application such as Blender_co_ Maya_co_ or Max to write out a .babylon file.  But you might also look at a new file format for lighting and camera setups.  That_t_s not a bad idea at all_co_ and I_t_m certain that DK would support it natively if you put in the effort._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I might propose a new file format called a _qt_.setup_qt_ file and an app where you can drag and drop .babylon files and other files into this browser app_co_ and use the interface controls to add cameras_co_ add and control the color of lights_co_ change camera position and all light attributes and do this in real time for precise lighting and camera framing. The main advantage would be similar to what I and others typically build for film projects in pre production which is a similar set of controls_co_ and a single exporter to write out a camera and lighting file which can then simply be referenced and loaded in many scenes for consistant lighting.  This would cut the amount of coding down to a single file to load - as opposed to creating cameras and lights and all of the attributes required for each element in every scene.  Allot of time is wasted doing this_co_ and jokeyfoot is right_co_ as there is no repeatable method for setting up lights and cameras_co_ as well as light intensity_co_ camera interest_co_ etc. This would be a tool and a file format that I_t_m sure everyone would use to become a standard element in BJS._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jokyfoot","Date":"2015-07-18T03:37:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_88176_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_15537_qt_ data-ipsquote-username_eq__qt_dbawel_qt_ data-cite_eq__qt_dbawel_qt_ data-ipsquote-timestamp_eq__qt_1436062917_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_@ jokeyfoot - I just re-read your initial post.  The application you_t_re considering is fairly straight forward to write and integrate a GUI to control.  However_co_ what is the application that you would apply this tool?  I could create a scene with interactive lighting and an identical GUI to what Autodesk created_co_ but would this be a stand alone app?  I suppose it could be_co_ as you could then write out the positions and color of your lights.  But the tool would need a few more features to make it practical.  The setup from the application would then need to be translated into Javascript for the BJS or other WebGL framework - which perhaps is more difficult than it sounds - unless you pass through an application such as Blender_co_ Maya_co_ or Max to write out a .babylon file.  But you might also look at a new file format for lighting and camera setups.  That_t_s not a bad idea at all_co_ and I_t_m certain that DK would support it natively if you put in the effort._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I might propose a new file format called a _qt_.setup_qt_ file and an app where you can drag and drop .babylon files and other files into this browser app_co_ and use the interface controls to add cameras_co_ add and control the color of lights_co_ change camera position and all light attributes and do this in real time for precise lighting and camera framing. The main advantage would be similar to what I and others typically build for film projects in pre production which is a similar set of controls_co_ and a single exporter to write out a camera and lighting file which can then simply be referenced and loaded in many scenes for consistant lighting.  This would cut the amount of coding down to a single file to load - as opposed to creating cameras and lights and all of the attributes required for each element in every scene.  Allot of time is wasted doing this_co_ and jokeyfoot is right_co_ as there is no repeatable method for setting up lights and cameras_co_ as well as light intensity_co_ camera interest_co_ etc. This would be a tool and a file format that I_t_m sure everyone would use to become a standard element in BJS._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I would be using it as a simple model viewer for artists to view a .babylon file with lighting options_co_ so it_t_d just be a standalone app. It would be cool to save the settings too_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I love the _qt_.setup_qt_ file idea_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-07-20T22:34:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If I built this_co_ would anyone besides jokeyfoot use it?  Is the concept clear enough to everyone?  Any and all thoughts are welcome_co_ as I_t_m considering it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-07-20T22:53:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Would be a very cool way to show models for sure! Hard to tell if I would use it... only created one model so far.... but always enjoying looking at models of other people. So yeah_co_ I guess I would at least use it to check out the cool stuff other people made... _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-07-23T00:51:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I thought it would be useful as an API interface to graphically create lights and cameras_co_ and place them interactively in a scene - as you would be able to render your scene while interactively in real time placing lights (and their attibutes)_co_ cameras_co_ and potentially models used to shadow (or _qt_flag_qt_ in lighting terms) scene objects for lighting effects.  We could even introduce some shaders such as lens flares and place them interactively in our scenes.  Then simply write out a new file format named _qt_.setup_qt_ which creates a new scene object containing these elements._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And when building a babylon script_co_ there would need to be a new loader to load the .setup file which would load these elements without having to declare each one independantly with its attributes as we do now.  This would optimize code_co_ but would also provide consistant cameras and lights from scene to scene._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I hope this explanation makes more sense_co_ as I_t_m considering building this if DK might consider creating a new loader for this new file format_co_ and providing I make the time necessary to build this._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jokyfoot","Date":"2015-07-25T03:48:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Awesome_co_ you should totally do it. I_t_m still in the process of learning Babylon.js_co_ but I_t_ve made some visual references to show the tools mentioned_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//i.imgur.com/blRUJad.png_qt_ alt_eq__qt_blRUJad.png_qt__gt__lt_img src_eq__qt_http_dd_//i.imgur.com/Dtah2Bz.png_qt_ alt_eq__qt_Dtah2Bz.png_qt__gt__lt_img src_eq__qt_http_dd_//i.imgur.com/14JfC8j.png_qt_ alt_eq__qt_14JfC8j.png_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-07-25T08:12:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sooo... when will it be ready? _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jokyfoot","Date":"2015-07-25T13:53:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_lol_co_ that_t_s just a photoshop mock up. I_t_m still learning this_co_ so I haven_t_t even started yet_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-07-25T16:14:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I know I know... but a good concept will help alot. By the way_dd_ that_t_s not a 3D Model in that screen... or is it?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jokyfoot","Date":"2015-07-26T00:01:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yep_co_ that_t_s a 3d model. Scanned from life. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]