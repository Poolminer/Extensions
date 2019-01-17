[{"Owner":"3Dlove","Date":"2015-03-18T14:44:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello everybody _dd_-)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I would like to create a mesh containing several meshes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Because_co_ currently_co_ I use a loop to generate meshes_co_ 100 meshes for instance_co_ just in order to create a wall._lt_/p_gt__lt_p_gt_And if I want clone this wall_co_ it_t_s impossible because I have to clone the all 100 meshes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1- And the Meshes Tree is ugly with these 100 meshes_co_ is it possible to not show a mesh in the Meshes Tree ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2- Is it possible to create a mesh which contains other meshes ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is my example_co_ I simplify it with grey and green materials_co_ but in my project_co_ I have materials more complex._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#SFWRR%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#SFWRR#1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for your help _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-03-18T15:47:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sure meshes can be parented to a designated parent.  When cloning of the parent_co_ the children are also done._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_childMesh.parent _eq_ parentMesh_sm__lt_/pre_gt__lt_p_gt_If you are just building _qt_bricks_qt__co_ 100 meshes is probably not the way to go.  There is overhead for each mesh every frame.  Unless you also have 100 materials_co_ think the overhead should be less with 100 sub-meshes. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You might want 1 mesh with 100 sub-meshes. You could still create the 100 Meshes use createPlane_co_ assign all the materials_co_ &amp_sm_ relative positions.  When ready merge the meshes.  Search merge meshes or look in doc_co_ I do not have it in my code base to give an example.  _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"3Dlove","Date":"2015-03-18T22:22:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Okay for parent and childrens _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I tried to use createInstance in order to have better performances_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_here is my updated example _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#SFWRR%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#SFWRR#2_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_but with createInstance_co_ the merging isn_t_t working I believe._lt_/p_gt__lt_p_gt_Without_co_ that work but there is a problem with materials_co_ just the 1st used material is applicated to the merged mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In fact_co_ I would like to create a wall with metal bars and windows_co_ the thing is that I don_t_t know the width_t_s wall because it_t_s dynamic_co_ the width can be 50_co_ and 100 in another case. The height is constant._lt_/p_gt__lt_p_gt_So I have just 2 materials (window and bar)_co_ but many replicated windows and bars._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Tell me if I_t_m not really understandable _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-19T20:26:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi again_co_ 3D!_lt_/p_gt__lt_p_gt_  I am off-topic_co_ but_co_ why merge?  Trying to get performance up?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And why all the computeWorldMatrix?  You_t_re trying to take over the world_co_ aren_t_t you?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I made another_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#SFWRR%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#SFWRR#3_lt_/a_gt_  I turned-off the merging and the computes... and the debug layer... just to see if any of it was necessary.  Seems to work fine without those things.  But I think 3DLove has a bigger plan in mind._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_One way to solve your dynamic wall size... is to use PERCENT.  For example_co_ no matter the wall length_co_ your first window begins 18% from the left edge.  Your first window occupies the location 18-22% (it is 4% wide). _lt_/p_gt__lt_p_gt_etc_co_ etc._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When you work in percentages (of dynamic wall size)_co_ it all scales perfectly... in theory.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]