[{"Owner":"ozRocker","Date":"2015-12-01T03:00:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is just another experiment with animation and making it work on mobile devices.  If anyone has any issues viewing it_co_ please tell me _lt_a href_eq__qt_http_dd_//www.punkoffice.com/barb/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.punkoffice.com/barb/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I can only use 25 bones maximum on iPhone which is a shame because I can_t_t rig the fingers separately.  Any more bones and I get the _qt_Too many uniforms_qt_ error.  I_t_m not sure if there_t_s any way around this.  I even tried to half the polygon count and it didn_t_t help.  I guess I have to hope for RAM increases with the upcoming phones._lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-12-01T03:48:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For iPhones you can try to turn software skinning on with mesh._lt_span style_eq__qt_color_dd_rgb(237_co_106_co_67)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_computeBonesUsingShaders_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_ _eq_ false_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-12-01T04:11:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_107554_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_18968_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1448941721_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_For iPhones you can try to turn software skinning on with mesh._lt_span style_eq__qt_color_dd_rgb(237_co_106_co_67)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm__qt__gt_computeBonesUsingShaders_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm__qt__gt_ _eq_ false_lt_/span_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Ok cool_co_ I_t_ll give that a go next time and see if it gives me a few more bones._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve noticed that the .FBX file is 3.15MB but the .BABYLON file is 6.95MB  and its not getting compressed any further from the web server.  Is this cos the .FBX file is a binary file?  If I could get the .BABYLON file the same size as the .FBX file that_t_d be awesome!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-12-01T18:08:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It will be far better. Just turn gzip on on your server_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-01T18:43:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_First off_dd_  A warning about underwear??  Wow_co_ I thought I saw a Mocap for a _t_kick line_t_ (it was in french).  Once my QueuedInterpolation system got closer to done_co_ was going to do a test scene of nude young women (wt genitalia)_co_ maybe with breast shapekeys for bouncing .  Dude_co_ you are making me look bad. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_angry.png_qt_ alt_eq__qt__dd_angry_dd__qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In addition to transmission compression_co_ there may be other things.  I am going to assume you are coming from Unity.  I remember you expressed an interest improving its exporter.  Here is one of the first things I did to the Blender exporter.  It was generating float strings_co_ always with 4 decimals.  I made a function which stripped trailing 0_t_s.  If there was a _t_._t_ at the end_co_ then get rid of it too.  I cannot remember how much reduction I got_co_ but think it was about 10%.  That 700kb in your case._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here it is in Python_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_def format_f(num)_dd_    s _eq_ MAX_FLOAT_PRECISION % num # rounds to N decimal places while changing to string    s _eq_ s.rstrip(_t_0_t_) # ignore trailing zeroes    s _eq_ s.rstrip(_t_._t_) # ignore trailing .    return _t_0_t_ if s _eq__eq_ _t_-0_t_ else s_lt_/pre_gt__lt_p_gt_I also just did it again in my mocap class.  It has a toTypescript()_co_ so you do not have to distribute 120 fps mocap files &amp_sm_ parse them in the game._lt_/p_gt__lt_p_gt_Here is the typescript version_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_/* get as compact a number as much as possible with 4 decimals of precision */private _fmt(vals _dd_ number[]) _dd_ string{    var ret _eq_ _qt__qt__sm_    for (var i _eq_ 0_sm_ i &lt_sm_ vals.length_sm_ i++){        var val _eq_ vals[i].toFixed(4).toString()_sm_        while (val.charAt(val.length - 1) _eq__eq__eq_ _t_0_t_){            val _eq_ val.substr(0_co_ val.length - 1)_sm_        }                    if (val.charAt(val.length - 1) _eq__eq__eq_ _t_._t_){            val _eq_ val.substr(0_co_ val.length - 1)_sm_        }        ret +_eq_ val_sm_        if (i + 1 &lt_sm_ vals.length) ret +_eq_ _qt__co__qt__sm_    }                return ret_sm_}_lt_/pre_gt__lt_p_gt_Maybe just the project that directly helps you_co_ but not too difficult for getting started._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-12-01T23:08:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Actually_co_ I used only Blender for this.  The Unity3D Exporter doesn_t_t export armature and animation (as far as I_t_m aware)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am running GZIP on the web server.  It compresses other files but it doesn_t_t compress the .BABYLON file.  Is there something else I need to do to compress it? Or am I reading the developer tools incorrectly?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//www.punkoffice.com/pics/dev_logs.jpg_qt_ alt_eq__qt_dev_logs.jpg_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-12-02T16:17:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It depends on your server but you should check headers returned to see if the .babylon is really gzipped by the server._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For instance the Espilit scene on babylon.js is 27Mo but only 3Mo when sent to the client_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-02T16:34:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ah_co_ blender_co_ my bad.  Good news is the next version of the Blender exporter_co_ late Demember_co_ is going to massively reduce the export size of .blends with armatures.  The current version_co_ writes out a position for every vertex when there is a skeleton_co_ whether another triangle shares it or not. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This affects size of_dd_ positions_co_ normals_co_  uvs_co_ uvs2_co_ colors_co_ skeletonWeights_co_ skeletonIndices_co_ &amp_sm_ shapekeys. Once loaded in BJS_co_ this reduces memory requirements on both cpu &amp_sm_ gpu.  Shapekey morphing cpu &amp_sm_ cpu skinning are also proportionally reduced.  I do not know if vertex optimization does anything for gpu performance._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As an example_co_ take a fully decked out high poly MakeHuman with teeth and tongue (without any Limited Dissolve editing).  When merged all together_co_ this is what the current exporter will log_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_WARNING_dd_ Due to multi-materials &amp_sm_ this meshes size_co_ 32bit indices must be used.  This may not run on all hardware.WARNING_dd_ Maximum # of influencers exceeded for 20873 vertices_co_ extras ignorednum positions      _dd_  140280num normals        _dd_  140280num uvs            _dd_  280560num uvs2           _dd_  0num colors         _dd_  0num indices        _dd_  140280num skeletonWeights_dd_  561120num skeletonIndices_dd_  561120_lt_/pre_gt__lt_p_gt_The next version export of the same mesh logs_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_num positions      _dd_  29433num normals        _dd_  29433num uvs            _dd_  58866num uvs2           _dd_  0num colors         _dd_  0num indices        _dd_  140280Skeleton stats_dd_  \tTotal Influencers_dd_  60377\tAvg # of influencers per vertex_dd_  2.0513\tHighest # of influencers observed_dd_  7\texported as 7 influencers\tCompute bones using shaders_dd_  true\tnum skeletonWeights_dd_  117732\tnum skeletonIndices_dd_  117732_lt_/pre_gt__lt_p_gt_An optimization_co_ using Limited Dissolves_co_ especially of the teeth_co_ greatly reduces these numbers as well._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-12-03T00:13:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for the tips everyone!  It turns out my .babylon files were not being compressed.  I thought everything gets compressed on the web server_co_ didn_t_t realise it was only happening for only some file types.  I added the .babylon mime type then set compression for it and now its getting compressed. YAY!!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//www.punkoffice.com/pics/gzipped.jpg_qt_ alt_eq__qt_gzipped.jpg_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Looking forward to even smaller files from the new Blender exporter_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_em_gt_Edit_dd_ For those that want to know what I did_lt_/em_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I edited the apache2.conf file so it applies globally to all my sites_lt_/p_gt__lt_p_gt_I added these lines_dd__lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_# Mime typesAddType application/json .babylon# CompressionAddOutputFilterByType DEFLATE application/json_lt_/pre_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-12-03T18:12:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_See? Lower size than your fbx _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-12-04T01:20:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I noticed with GZIP compression enabled my callback function changed.  Before I used evt.loaded and evt.total to create a progress bar_co_ but with GZIP on evt.total is always zero so I can no longer get a percentage from that variable.  Its not the end of the world because I know the actual size of the .babylon file_co_ but it would be nice if I didn_t_t have to hardcode it in_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-12-04T09:24:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That_t_s unfortunatly impossible for BJS to determine the file size when gzipped by server._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-12-07T04:57:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_107554_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_18968_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1448941721_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_For iPhones you can try to turn software skinning on with mesh._lt_span style_eq__qt_color_dd_rgb(237_co_106_co_67)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm__qt__gt_computeBonesUsingShaders_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm__qt__gt_ _eq_ false_lt_/span_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I just tried this and I still get the same errors on iPhone with 42 bones_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-07T15:24:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_On another thread_co_ gryff managed to trip the auto downgrade of skinning and logging in 2.3.  I was not able to test this_co_ so I was glad that it happened.  I am wondering_co_ since this is most likely to occur on a mobile device_co_ whether these logs should be turned into window.alerts.  Getting a browser log on phones is not always possible.  Even if actual customers are actually seeing these_co_ it may be very helpful supporting them._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sorry Oz_co_ I cannot be helpful.  Finger manipulation using bones is going to be tough for mobile.  Someday_co_ there may be an alternative_co_ if you can built hand shape keys.  Requires Blender_co_ Tower of Babel_co_ &amp_sm_ future QueuedInterpolation extension though.  When you say you get the _t_too many uniforms_t_ error_co_ how do you know?  Prior to 2.3_co_ downgrading was completely silent_co_ I think.  I only have an iPad_co_ but I never saw how iOS safari could show the console._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-12-07T16:38:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Are you sure you use the computeBonesUsingShaders on the right mesh? There shouldn_t_t be a problem for iPhone then. can you share your experiment somewhere (with reference to babylon.max.js for debugging purpose)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-12-08T13:27:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok_co_ I_t_ve got it set up on the playground here _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1I1DDF%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1I1DDF#0_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve set computeBonesUsingShaders to true in that demo_co_ but for some reason when I set it to false it won_t_t even show up on the playground_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-08T17:29:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I can run it.  With or without forced cpu skinning_co_ the fingers look wrong (a little fast_co_ but I can tell).  I am running on a gtx960_co_ so I do not get a console log auto downgrade message when I just default to gpu._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think the problem is different from what you think.  I opened up the debug layer.  It reports you have _qt_0_qt_ meshes_co_ _qt_0_qt_ vertices.  You broke it.  what happens when you run this on 2.2?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-12-09T03:57:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve noticed I_t_m getting different results for Babylon 2.2 and Babylon 2.1.  I_t_ve put up a webpage with this animation.  Just ignore the way the hands look.  That_t_s an inaccuracy with the rigging.  I_t_m happy as long as they have bones and are not straight hands for this experiment._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//preview.punkoffice.com/hands/_qt_ rel_eq__qt_external nofollow_qt__gt_preview.punkoffice.com/hands/_lt_/a_gt_ - (default) Babylon.js version 2.2_co_ compute with shaders _eq_ TRUE_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//preview.punkoffice.com/hands/?version_eq_2.1&amp_sm_shaders_eq_false_qt_ rel_eq__qt_external nofollow_qt__gt_preview.punkoffice.com/hands/?version_eq_2.1&amp_sm_shaders_eq_false_lt_/a_gt_ - Babylon.js version 2.1_co_ compute with shaders _eq_ FALSE_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//preview.punkoffice.com/hands/?version_eq_2.2&amp_sm_shaders_eq_false_qt_ rel_eq__qt_external nofollow_qt__gt_preview.punkoffice.com/hands/?version_eq_2.2&amp_sm_shaders_eq_false_lt_/a_gt_ - Babylon.js version 2.2_co_ compute with shaders _eq_ FALSE_lt_/p_gt__lt_div_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//preview.punkoffice.com/hands/?version_eq_2.1&amp_sm_shaders_eq_true_qt_ rel_eq__qt_external nofollow_qt__gt_preview.punkoffice.com/hands/?version_eq_2.1&amp_sm_shaders_eq_true_lt_/a_gt_ - Babylon.js version 2.1_co_ compute with shaders _eq_ TRUE_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//preview.punkoffice.com/hands/?version_eq_2.2&amp_sm_shaders_eq_true_qt_ rel_eq__qt_external nofollow_qt__gt_preview.punkoffice.com/hands/?version_eq_2.2&amp_sm_shaders_eq_true_lt_/a_gt_ - Babylon.js version 2.2_co_ compute with shaders _eq_ TRUE_lt_/p_gt__lt_div_gt_ _lt_/div_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-12-09T17:32:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Warning_dd_ compute with shaders was introduced with bjs 2.2_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-12-09T23:42:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok_co_ I_t_ll stick with 2.2 and above for this experiment.  Does anyone know why my mesh doesn_t_t show when I disable computing with shaders? _lt_a href_eq__qt_http_dd_//preview.punkoffice.com/hands/?version_eq_2.2&amp_sm_shaders_eq_false_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//preview.punkoffice.com/hands/?version_eq_2.2&amp_sm_shaders_eq_false_lt_/a_gt_ and _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1I1DDF%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1I1DDF#0_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I haven_t_t done anything funny to the .babylon file.  Its straight from a Blender export and it runs as expected when I have compute with shaders set to true.  _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-12-10T00:57:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just add this_dd__lt_/p_gt__lt_p_gt_mesh.material.checkReadyOnlyOnce _eq_ false_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_@JCP_dd_ we should definitely remove this flag by default_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-12-10T02:24:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I got it working_co_ YAY! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ I disabled _qt_checkReadyOnlyOnce_qt_ so now my mesh shows up.  But I also discovered my code would stop with an error at _qt_executeWhenReady_qt_.  I had my _qt_computeUsingShaders_qt_ code in there so it never got executed. I took that code out of the _qt_executeWhenReady_qt_ body and put it in _qt_SceneLoader.Load_qt_.  I didn_t_t realise I could access the scene contents before _qt_executeWhenReady_qt_ but turns out I can._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The frame rate is noticeably slower but that_t_s expected.  Maybe I can reduce quality to speed it up._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-12-10T16:35:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Excellent!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-10T16:42:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yep_co_ already done.  See the checkbox on the picture on the Material namespace topic.  Responding there right after here._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_CheckOnlyOnce in the vast majority of cases can be enabled_co_ unfortunately when it cannot_co_ it can fail in unknown ways._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_@oz_dd_  Keep your old Blender log file for this_co_ and get ready in the next few days to re-export.  Your file size is going to drop off a cliff._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-10T17:45:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The fact there is now an auto fallback to computeBonesUsingShaders _eq_ false  (which I very much like)_co_ it would seem you can never set checkOnlyOnce unless the fallback code also marks the meshes material dirty like_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_public reduce(currentDefines_dd_ string)_dd_ string {    var currentFallbacks _eq_ this._defines[this._currentRank]_sm_    for (var index _eq_ 0_sm_ index &lt_sm_ currentFallbacks.length_sm_ index++) {        currentDefines _eq_ currentDefines.replace(_qt_#define _qt_ + currentFallbacks[index]_co_ _qt__qt_)_sm_    }    if (this._mesh &amp_sm_&amp_sm_ this._currentRank _eq__eq__eq_ this._meshRank){        this._mesh.material.markDirty()_sm_        this._mesh.computeBonesUsingShaders _eq_ false_sm_        currentDefines _eq_ currentDefines.replace(_qt_#define NUM_BONE_INFLUENCERS _qt_ + this._mesh.numBoneInfluencers_co_ _qt_#define NUM_BONE_INFLUENCERS 0_qt_)_sm_        Tools.Log(_qt_Falling back to CPU skinning for _qt_ + this._mesh.name)_sm_    }    this._currentRank++_sm_    return currentDefines_sm_}_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]