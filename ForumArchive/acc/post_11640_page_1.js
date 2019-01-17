[{"Owner":"reddozen","Date":"2015-01-11T03:12:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is there a good way to find the center point for a models bounding box?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My problem is that we_t_re currently loading in models that have been translated before being exported_co_ and their world coordnates are based on this pre translation. This will wreak havok on things like level of detail. So I figure the best way to remove the translations is to use the bounding box center as the actual model coordinates. I_t_ll loop through all the models in the scene and then generate a list of corrected coordinates. then I can just reset them all to 0_co_0_co_0._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-01-11T14:06:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you use Blender_dd_ mesh vertices have coordinates relative to the object origin_co_ so setting that origin thoughtfully may allow you to solve your issue. Probably applies to other modeling software_co_ although I can_t_t say for sure._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Apart from that_co_ using_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_refreshBoundingInfo()_lt_/pre_gt__lt_p_gt_and then_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_&lt_sm_static&gt_sm_Center()_lt_/pre_gt__lt_p_gt_ on a BABYLON.Mesh object should do precisely what you want _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2015-01-11T16:37:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ll try that_co_ but wouldnt that mean that babylon is ignoring the translation? What I mean is that the translation is saved in 3DS Max_co_ so when it_t_s loaded in Babylon_co_ I would assume that the center of mesh woul include the translation difference_co_ and it would tell me that the center is the center of the translation bounds. That_t_s why I was referring to the bounding boxes. they are kind of absolute_co__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-01-11T17:30:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ I_t_m not sure about the 3DSMax exporter behaviour_co_ and I don_t_t have this software at my disposal so I can_t_t try it myself._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What you can do is try the debug layer feature in BJS 2.0 alpha available on _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js_qt_ rel_eq__qt_external nofollow_qt__gt_github_lt_/a_gt_. This will allow you to display bounding boxes and mesh origins on screen_co_ which may help you check if everything is as you intend it to be._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Using this feature is ultra simple_co_ just add_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_scene.debugLayer.show()_sm__lt_/pre_gt__lt_p_gt_in your code._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hope this helps!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-11T18:06:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Translation is saved into mesh.position. The bounding boxes are updated on the first render. So if you are checking the bounding boxes right after loading without waiting for a render_co_ you will have to force the update _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2015-01-12T17:02:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_DK_co__lt_/p_gt__lt_p_gt_Does this mean that I need to have physically seen them in the scene_co_ or am I fine to wait until after I have confirmed that all the verts are loaded?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-12T19:56:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_if you do not want to wait_co_ callingmesh.computeWorldMatrix(true) is fine_lt_/p_gt__lt_p_gt_else you have to wait for a frame to be physically rendered_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2015-01-12T20:25:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sounds good. thanks!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]