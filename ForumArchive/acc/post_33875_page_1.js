[{"Owner":"gamefan","Date":"2017-11-08T12:37:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe have been using babylon2.5 (oddly_co_ an alpha release) in our projects because it served our purposes. Now we want to update to 3.0.7 for various reasons. We have lots of meshes that are imported into an existing scene that have to be logically combined under a parent based on  a predefined config. I used this following code to arrive at combination_t_s size and center.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var getCombinationData _eq_ function(meshes) {\n        var clones _eq_ []_sm_\n        for (var i _eq_ 0_sm_ i &lt_sm_ meshes.length_sm_ i++) {\n            clones.push(meshes[i].clone(_qt_clone_qt_ + i))_sm_\n        }\n        var combinedMesh _eq_ BABYLON.Mesh.MergeMeshes(clones)_sm_\n        var boundingBox _eq_ combinedMesh.getBoundingInfo().boundingBox_sm_\n        var size _eq_ boundingBox.extendSize.scaleInPlace(2)_sm_\n        var center _eq_ boundingBox.center_sm_\n\n        //dispose off the clones_sm_\n        for (var k _eq_ clones.length_sm_ k &gt_sm_ 0_sm_ k--) {\n            clones[k - 1].dispose()_sm_\n        }\n        combinedMesh.dispose()_sm_\n\n        return {\n            size_dd_ size_co_\n            center_dd_ center\n        }_sm_\n    }_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tUsing babylonjs 3.0.7_co_ the boundingBox.center is different from that obtained using 2.5_co_  which I am assuming is right _co_ because a box made with size and center got from the above method_co_ neatly encapsulated the  meshes.  Has anything changed since 2.5 or An easy fix to doing this? The meshes can have parents ( but not different ones)._lt_br /_gt__lt_br /_gt_\n\tThanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-08T16:48:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdo you want the center in object space or in world space?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf in world space you need to call boundingBox.centerWorld.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust in case_co_ can you try to call combinedMesh.computeWorldMatrix(true) right after the merge?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamefan","Date":"2017-11-10T05:06:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi @Deltakosh_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo luck with computeWorldMatrix. I already tried centerWorld_co_ but using that also causes offsets. I would be needing the center in world space but sometimes the meshes that are combined have a parent_co_ in that case the center should be relative to the parent. I will see if transforming worldCenter to parent space would work._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd its strange because I tried my code in playground and it seems to work right. I guess there is something else.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamefan","Date":"2017-11-10T05:44:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI can confirm (with much relief) _co_ that this is case with 3.0.7 but the current preview (3.1-beta2) renders correctly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will have to check everything before continuing with this preview release_co_ but it looks great. Moreover _co_ we have nearly doubled the potential FPS. What a win!!!!. 1000 points to everyone.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-10T16:49:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah we did a lot of work to boost the internal engine _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]