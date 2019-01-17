[{"Owner":"dbawel","Date":"2018-02-12T23:03:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a mesh (an airplane) which needs to be cloned 20 times - and then all 20 clones require their propeller to animate at different speeds and times. How do I identify each propeller or assign a variable (preferably a slot in a _qt_propeller_qt_ array) to each cloned propeller to animate - once again animate separately. When I clone each airplane_co_ how do I know the name of each child on the parent mesh_co_ and animate it_t_s children such as the propellers? How do I assign a unique name to each one? Once I have a unique name or variable assigned to each_co_ then I can animate each one separately - but I don_t_t know how to _qt_Get_qt_ the names of cloned meshes or assign to a slot in an array upon cloning. Any ideas?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-02-12T23:13:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_em_gt_scene.getMeshByName(_qt__lt_/em_gt__lt_em style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_uniqueName_lt_/em_gt__lt_em_gt__qt_)_lt_/em_gt_ allows you to retrieve the object by name.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen you _qt_clone_qt_ you add a name _dd_ _lt_em_gt_mesh.clone(_qt_uniqueName_qt_)_lt_/em_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-02-12T23:26:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tif your just transforming the clones use Instances unless they are needing new materials or other unique features._lt_br /_gt_\n\tand when you clone them stick them into an array for later reference would be way better then having to search through all the meshes for a unique name._lt_br /_gt_\n\t_lt_br /_gt_\n\tthen you just apply your animations to what ever correct instance in the array._lt_br /_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Snouto","Date":"2018-02-13T06:17:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI did this as a test not long ago and it worked fine_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var fan_eq_scene.getMeshByName(_qt_Industrial_Fan_1_qt_)_sm_ /* a mesh already loaded in the scene_co_ with animations */\nfor (var index _eq_ 0_sm_ index &lt_sm_ 10_sm_ index++) {\n    var newInstance _eq_ fan.createInstance(_qt_i_qt_ + index)_sm_ /* iterate the instance name */\n/* Probably you_t_ll want to reposition the new instance here. */\n    newInstance.animations.push(fan.animations[0])_sm_ /* copy the same animations from the original as these aren_t_t carried over in the new instance */\n    scene.beginAnimation(newInstance_co_ 0_co_ 30_co_ true)_sm_ /* start animating the new instance */\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-02-13T17:46:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_204596_qt_ data-ipsquote-contentid_eq__qt_35673_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1518478013_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t18 hours ago_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tif your just transforming the clones use Instances unless they are needing new materials or other unique features._lt_br /_gt_\n\t\t\tand when you clone them stick them into an array for later reference would be way better then having to search through all the meshes for a unique name._lt_br /_gt_\n\t\t\t_lt_br /_gt_\n\t\t\tthen you just apply your animations to what ever correct instance in the array._lt_br /_gt_\n\t\t\t_lt_br /_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI remember this plane from another topic_co_ &amp_sm_ looked at the .blend.  The propeller &amp_sm_ rubberband are child meshes_co_ so actual making of instances are more work.  Cloning also clones the children meshes unless you say not to_co_ but I do not think instancing does meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor cloning_co_ the trick is to know _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.mesh.ts#L221_qt_ rel_eq__qt_external nofollow_qt__gt_the name_lt_/a_gt_ the clone child gets.  Once you have that_co_ the next problem is that cloning does not copy any animation.  Fortunately_co_  animations_co_ defined at Node level_co_ is an array_co_ a.k.a reference object_co_ so only the reference array needs be copied.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo not think you need to copy animations for instances.  The bad news is that looks like you wish to change the speeds.  If that cannot be specified when starting the animation on a mesh_co_ you will have to deep copy the animations for clone_co_ &amp_sm_ you are just screwed for instances.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-02-14T02:01:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ -\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried every method I know to determine the names of the children of a clone. Even _lt_strong_gt_mesh._children()_sm__lt_/strong_gt_ doesn_t_t return the children of a clone. At least I couldn_t_t get any result from this function at all. I_t_m now considering separating all of the meshes from the parent file that need to animate. But considering there are dozens of meshes to animate - this adds allot of code which could easily be avoided as the children of a clone definitely have names. They must in order to  animate at all. But I_t_m running out of time_co_ and there appear to be no more options.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-02-14T15:07:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ forget about doing some call.  I already pointed you to the line where a cloned child gets its name.  Access the mesh clone by_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var source _eq_ scene.getMeshByName(_qt_parent.Prop_qt_).animations_sm_\n// in a loop like for each clone\nscene.getMeshByName(_qt_parent_01.Prop_qt_).animations _eq_ source_sm_\n. . .\nscene.getMeshByName(_qt_parent_19.Prop_qt_).animations _eq_ source_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThere are always options.  Crude but effective to find every mesh name in the scene written to console_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_for(var i _eq_ 0_co_ len _eq_ scene.meshes.length()_sm_ i &lt_sm_ len_sm_ i++) {\n    console.log(scene.meshes[i].name)_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tScrape out the exact details out of the console_co_ put into the first example_co_ &amp_sm_ throw away.  Move on to the rest.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]