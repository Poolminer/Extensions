[{"Owner":"Convergence","Date":"2015-08-23T13:23:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I discovered babylon.js last week_co_ and its very good mostly _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Lets me finally take a crack at game design_co_ since full environments like Unity are too daunting for me._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I started playing around with it_co_ and one of the issues I encountered was that imported meshes with an opacity map are not displayed correctly in my scene_co_ the meshes behind _t_bleed through_t_._lt_/p_gt__lt_p_gt_I unfortunately cannot setup my scene in the playground since it loads .babylon meshes and is enveloped by php/mysql already_co_ but I have a screenshot_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As you can see_co_ I circled two areas where the bushes in the background bleed through the bush in the foreground. Also a bit to the right more foliage is bleeding through_co_ which I didn_t_t circle._lt_/p_gt__lt_p_gt_Oddly enough the grass_co_ which obviously also uses an opacity map also doesn_t_t suffer from this. But the grass is just a Plane_co_ not an imported mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//i.imgur.com/o2tL4RG.jpg_qt_ alt_eq__qt_o2tL4RG.jpg_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2015-08-24T09:20:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have another question.. How are the statistics supposed to be interpreted?  When i point my camera downwards in the above scene I get decent to good FPS (30+)_co_ however when I point my camera upwards towards the forest canopy_co_ the fps drops quite a bit. The tree meshes are really simple (3 cylinders for branches  and 10 planes for leaves)_co_ textures no larger than 512/512. However I can_t_t seem to get more than about 20 FPS_co_ which seems a bit stranger considering the number of indices/meshes/draw calls are less. Anything I_t_m missing? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The only thing that I can think of is that the faces for the leaves are quite large_co_ and large polygons take a lot more time to draw?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//i.imgur.com/J5hGWRL.jpg_qt_ alt_eq__qt_J5hGWRL.jpg_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-08-24T10:42:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_you try to use _qt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Optimizing_Your_Scene_with_Octrees_qt_ rel_eq__qt_external nofollow_qt__gt_Octree_lt_/a_gt__qt_ to optimize your scene. this could increase your fps._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_To the first question_co_ I think Deltakosh can help_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Pretty scene also...  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2015-08-24T11:24:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for the suggestion _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Do you mean to use Octrees for selecting which meshes will be displayed? Hmm I don_t_t think its mesh selection that is really the problem_sm_ with only the grass/building visible and the trees invisible_co_ the FPS shoots up to 40+_co_ and the trees number just 50. Most of which are in front of the camera anyway_co_ so would need to be rendered.._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2015-08-24T12:13:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_maybe you must make a shader and use discard for hide leafs i think alpha is very big progress for webgl._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-08-24T17:13:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Try use octree on your the scene you can try and see what that the result_co_ it gives very good results on my scenes._lt_/div_gt__lt_br_gt__lt_div_gt_For trees_co_ used the _qt_instances_qt_  to optimize._lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-24T17:49:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello your first problem is due to OpacityMap which generates mesh that does not write in depth buffer. For foliage or grass you should move your alpha in the diffuseMap and set hasAlpha _eq_ true like in this demo_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/?4_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/?4_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For your performance question_dd_ you can see that your potential FPS (only rendering) in around 145 when pointing up. So this is not related to babylon.js rendering engine. Do you have complex tasks running around? (in your own JS code)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In the meantime I suggest you to use the profiler of your browser to identify the bottleneck _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2015-08-25T01:20:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for the answers_co_ they solved the problem _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Changing to diffuseMap with alpha channel helped both problems coincidentally. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ No more alpha bleed and increased FPS. So separete .opacityTextures are indeed much more expensive for the GPU_co_ apparently._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-25T16:49:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sounds weird but drivers are something behaving strangely _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2015-09-11T01:40:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hmm_co_ after trying to narrow it down_co_ (because the FPS is better_co_ but still not great)_co_ I found the Tree Instances demo at the _lt_a href_eq__qt_http_dd_//babylonjs.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs.com/_lt_/a_gt_ site to be very similar and having similar performance problems. (I can_t_t link it because for some reason the individual demos don_t_t have their own URLs)_co_ but this one_dd_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//babylonjs.com/Screenshots/instances.jpg_qt_ alt_eq__qt_instances.jpg_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In that demo_co_ which is fairly simple_co_ if you look down_co_ the FPS is fine (up to 60)_co_ but when looking straight ahead having a bunch of trees in view_co_ the FPS drops dramatically also. Since the renderloop in that demo is really simple_co_ it can_t_t be some scripting every frame._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any thoughts?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-09-11T05:44:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_96102_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_16661_qt_ data-ipsquote-username_eq__qt_Convergence_qt_ data-cite_eq__qt_Convergence_qt_ data-ipsquote-timestamp_eq__qt_1441935654_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Any thoughts?_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think that_t_s meant to be a heavy demo_co_ isn_t_t it? It_t_s intentionally drawing lots and lots of trees_co_ so naturally rendering takes longer when looking forward. Perhaps the debug info could make it clearer what_t_s eating the performance though._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2015-09-11T07:02:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_96117_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_16661_qt_ data-ipsquote-username_eq__qt_fenomas_qt_ data-cite_eq__qt_fenomas_qt_ data-ipsquote-timestamp_eq__qt_1441950272_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_I think that_t_s meant to be a heavy demo_co_ isn_t_t it? It_t_s intentionally drawing lots and lots of trees_co_ so naturally rendering takes longer when looking forward. Perhaps the debug info could make it clearer what_t_s eating the performance though._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hmmm_co_ well_co_ even if you disable the ground mesh in that demo in the debug layer (which reduces the #draw calls to a mere 2!)_co_ the FPS is still mediocre for me. Also_co_ the scene has way less indices/verts/mats/textures/draw calls than some other demos_co_ IE. the Hill Valley demo - which has great FPS (50-60) on my laptop.  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The disparity between reported potential FPS and real FPS is just very big in the tree demo_co_ and I wonder why _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_. It couldn_t_t be scripting in the render loop_co_ because the render loop is near-empty code-wise._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ahiru","Date":"2015-09-11T07:20:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Can_t_t answer the FPS-drop question (though I hope you_t_ll find the answer_co_ because it_t_s important for my project_co_ too)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But I can help you with one thing_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_96102_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_16661_qt_ data-ipsquote-username_eq__qt_Convergence_qt_ data-cite_eq__qt_Convergence_qt_ data-ipsquote-timestamp_eq__qt_1441935654_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Hmm_co_ after trying to narrow it down_co_ (because the FPS is better_co_ but still not great)_co_ I found the Tree Instances demo at the _lt_a href_eq__qt_http_dd_//babylonjs.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs.com/_lt_/a_gt_ site to be very similar and having similar performance problems. (I can_t_t link it because for some reason the individual demos don_t_t have their own URLs)_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/?INSTANCES_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/?INSTANCES_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You have to provide the name of the example behind it._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-09-11T07:53:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_96123_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_16661_qt_ data-ipsquote-username_eq__qt_Convergence_qt_ data-cite_eq__qt_Convergence_qt_ data-ipsquote-timestamp_eq__qt_1441954968_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Hmmm_co_ well_co_ even if you disable the ground mesh in that demo in the debug layer (which reduces the #draw calls to a mere 2!)_co_ the FPS is still mediocre for me. Also_co_ the scene has way less indices/verts/mats/textures/draw calls than some other demos_co_ IE. the Hill Valley demo - which has great FPS (50-60) on my laptop.  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The disparity between reported potential FPS and real FPS is just very big in the tree demo_co_ and I wonder why _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_. It couldn_t_t be scripting in the render loop_co_ because the render loop is near-empty code-wise._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Rendering different kinds of stuff has different kinds of costs. E.g. in the trees demo if you disable _qt_Diffuse_qt_ you should see the performance shoot up_co_ even though the # of draw calls_co_ indices_co_ etc. are the same._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ I think the _qt_potential FPS_qt_ is misleading you a bit - all BJS is doing there is telling you the inverse of how long it took to execute its render() call. Effectively_co_ that_t_s the FPS you_t_d be getting _lt_em_gt_if the render call was dominating performance_lt_/em_gt_. If the bottleneck is elsewhere (like the GPU)_co_ I don_t_t think that number tells you much._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2015-09-11T09:11:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_96129_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_16661_qt_ data-ipsquote-username_eq__qt_fenomas_qt_ data-cite_eq__qt_fenomas_qt_ data-ipsquote-timestamp_eq__qt_1441958021_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Rendering different kinds of stuff has different kinds of costs. E.g. in the trees demo if you disable _qt_Diffuse_qt_ you should see the performance shoot up_co_ even though the # of draw calls_co_ indices_co_ etc. are the same._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ I think the _qt_potential FPS_qt_ is misleading you a bit - all BJS is doing there is telling you the inverse of how long it took to execute its render() call. Effectively_co_ that_t_s the FPS you_t_d be getting _lt_em_gt_if the render call was dominating performance_lt_/em_gt_. If the bottleneck is elsewhere (like the GPU)_co_ I don_t_t think that number tells you much._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Good to know about the potential FPS _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ I didn_t_t find an explanation so far what it should be representing._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However in the quest to narrow down the bottleneck_co_ that begs the question why this fairly simple scene with only some instanced low-poly trees is already bogging down the GPU_sm_ if you take any game from the last decade that tries to pass off as realistic_co_ its bound to be more complex than this scene (there are a multitude of games with more complex/realistic forestscapes) and I don_t_t remember this laptop having such FPS problems with it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_co_ too_co_ saw that disabling the Diffuse channel makes the FPS go up_co_ but as a solution its not really viable_co_ of course _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-09-11T10:07:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_On my computer this scene is at 60FPS all the time. I think it is a problem of processor_co_ graphics card or ram. a problem of the computer and therefore no Babylon._lt_/p_gt__lt_p_gt_Even your scene you submit runs well for me._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_IT must be said that I turn with a good graphics card _t_GTX560 TI 1G GDDR5_t__co_  processor_dd_ I5_co_ 6 Go of ram_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2015-09-11T11:01:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_96142_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_16661_qt_ data-ipsquote-username_eq__qt_dad72_qt_ data-cite_eq__qt_dad72_qt_ data-ipsquote-timestamp_eq__qt_1441966035_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_On my computer this scene is at 60FPS all the time. I think it is a problem of processor_co_ graphics card or ram. a problem of the computer and therefore no Babylon._lt_/p_gt__lt_p_gt_Even your scene you submit runs well for me._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_IT must be said that I turn with a good graphics card _t_GTX560 TI 1G GDDR5_t__co_  processor_dd_ I5_co_ 6 Go of ram_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you for the response. Yes_co_ I understand different setups will yield different FPS_co_ but I_t_m still struggling to understand why forests are apparently so taxing for my laptop. BABYLON will be ran on a big variety of setups anyway._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Take these two demos as comparison both run one after the other_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The rather complex Hill Valley demo_co_ with lots of meshes/mats etc and even multiple reflective surfaces_dd_ _lt_a href_eq__qt_http_dd_//babylonjs.com/?HILLVALLEY_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs.com/?HILLVALLEY_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//i.imgur.com/U0wwPiQ.jpg_qt_ alt_eq__qt_U0wwPiQ.jpg_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Instanced trees_co_ i disabled the ground to reduce draw calls to 2_dd_ _lt_a href_eq__qt_http_dd_//babylonjs.com/?INSTANCES_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs.com/?INSTANCES_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//i.imgur.com/YAYjafc.jpg_qt_ alt_eq__qt_YAYjafc.jpg_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Looking at the #draw calls/verts/indices/mats the forest  should get much better FPS_co_ but instead its getting much worse FPS. Perhaps you will get 60 FPS for both_co_ but I want to find out why my laptop suffers on the forest scene._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_PS. to even things out more - disabling collisions and fog on the forest scene helps a little bit_co_ FPS increases to 24-26_co_ still about half of the Hill Valley scene._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-11T17:47:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Are you using big textures? This may break GPU cache and thus reduce drastically the FPS._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2015-09-11T23:17:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_512x512 max.. is that considered big? The ground heightmap is 1024._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-12T02:01:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_To identify the bottleneck_co_ you should turn off every channel (in the texture channel block) using the debug layer and see which one is impacting your FPS_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then if this is not relevant_co_ do the same with options bucket_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-09-12T06:10:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_just a lead _dd_ freeze the world matrix of all your immobile meshes also_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2015-09-13T03:26:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank for the help so far._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think I isolated the problem more_dd_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In this demo_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UB5PM%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UB5PM#2_lt_/a_gt_ which is basically a plane cloned a thousand times (thousand polys sounds like a lot_co_ but should be peanuts for a gfx card) with an alpha texture (representing the forest performance problem)_co_ I get the same bad FPS. (Increase numClones until your FPS starts to drop below acceptable)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then_co_ just decreasing the size of the plane (from 8 to 1) fixes the FPS issue for me.  Anyone else has the same experience or is it just my machine?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_disabling hasAlpha also kind of fixes the issue. Also interesting is that changing the rotation axis from x to z (with the original size of 8) drops the FPS to 2_co_ lol. Of course non of these changes affect draw calls_co_ textures_co_ mesh count_co_ etc._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-13T04:27:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello I have no issue on my machine but this seems to highlight an issue with alpha testing which is pixel dependant. So your issue seems to come from your gfx card here_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you turn diffuse off_co_ does the problem disappear?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ahiru","Date":"2015-09-14T03:42:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Get the same issue (Radeon HD 2600 Pro) - Size_dd_ 8 Instances_dd_ 50 - already down to 15 FPS (but the potential jump between 300 - 500 FPS)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Switching diffuse of or even textures of does not help - changing to wireframe does immediately jump to 48-56 FPS steady._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2015-09-14T07:32:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_96354_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_16661_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1442118467_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Hello I have no issue on my machine but this seems to highlight an issue with alpha testing which is pixel dependant. So your issue seems to come from your gfx card here_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you turn diffuse off_co_ does the problem disappear?_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_co_ I will just assume it is my crappy gfx card _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Can_t_t wait to be working on a decent desktop system again._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Turning off diffuse_co_ the FPS increases to 30_co_ still a while away from the desired 60. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]