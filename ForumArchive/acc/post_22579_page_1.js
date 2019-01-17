[{"Owner":"ramymabrouk","Date":"2016-05-15T19:01:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti am exporting a mesh array from blender and applying texture on the meshes_co_ it works fine if i dont group the mesh array into a single mesh_co_ which is required to implement drag and drop_co_ it generates this error _qt__lt_strong_gt_(index)_dd_1 [.CommandBufferContext]GL ERROR _dd_GL_INVALID_OPERATION _dd_ glDrawElements_dd_ attempt to access out of range vertices in attribute 2_lt_/strong_gt__qt_ when i merge textured meshes or add texture to merged meshes_co_ any ideas ? (the imported .babylon file is attached) \n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_7670_qt__gt_sofa.babylon_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-05-15T20:40:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Ramy_co_ welcome to the forum. I_t_m no scripter so I will leave them to explain the error and how to get around it in code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ there are some workarounds_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. Merge the meshes in Blender - probably have to rework the UVs though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. A solution that I suggested on this_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/22262-using-extension-obj-loader/?do_eq_findComment&amp_sm_comment_eq_127110_qt_ rel_eq__qt__qt__gt_ thread_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA variation on 2 would be to make a simple LOD mesh for the whole sofa_co_ make it transparent_co_  pickable and the parent to all the other messages.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ramymabrouk","Date":"2016-05-16T02:48:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi gryff_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for your answer_co_ actually I used Tags instead of merging because there is no unmerge utility and it has to use one texture and in some cases the same mesh groups may have more than one texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthank you\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-05-16T02:59:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou can have a more texture with shader builder but need to know where you want to use \n_lt_/p_gt_\n\n_lt_p_gt_\n\tcan you make playground or any example?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-16T15:41:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCould you share your code on the playground? Seeing the error live could help a lot\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ramymabrouk","Date":"2016-05-19T01:33:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tunfortantly I do not know how to upload files to the playground_co_ please find my code and the attached files\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_function addsofa(filename) {\n        // The first parameter can be used to specify which mesh to import. Here we import all meshes\n        BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_assets/scenes/_qt__co_ filename + _qt_.babylon_qt__co_ scene_co_ function (newMeshes) {\n                // Set the target of the camera to the first imported mesh\n                // camera.target _eq_ newMeshes_sm_\n                tagname _eq_ randString(10)_sm_\n                for (i_eq_0_sm_i&lt_sm_newMeshes.length_sm_i++){\n                        newMeshes[i].material _eq_ new BABYLON.StandardMaterial(tagname + i_co_ scene)_sm_\n                        newMeshes[i].material.emissiveTexture _eq_ new BABYLON.Texture(_qt_assets/textures/tex5.jpg_qt__co_scene_co_true_co_false_co_2)\n                        newMeshes[i].material.diffuseColor _eq_ new BABYLON.Color3(0_co_0_co_0)_sm_\n                        newMeshes[i].material.specularColor _eq_ new BABYLON.Color3(0_co_0_co_0)_sm_\n                        \n                        BABYLON.Tags.EnableFor(newMeshes[i])_sm_\n                        newMeshes[i].addTags(tagname)_sm_                       \n                }\n                var newMesh _eq_ new BABYLON.Mesh.MergeMeshes(newMeshes)_sm_\n        })_sm_        \n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tthe last files is the one generating the error\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/tex5.jpg.26c0a0b8dd57634fcc669aa2db4b86e8.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7697_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/tex5.jpg.26c0a0b8dd57634fcc669aa2db4b86e8.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_tex5.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_7698_qt__gt_sofa.babylon_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-19T02:01:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can just save your .babylon to dropbox or onedrive and reference it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tDoes your code works without tags stuff?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ramymabrouk","Date":"2016-05-19T02:28:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthe tags stuff is added later_co_ i have used it to identify the meshes_co_ it is working great\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-19T04:11:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSo sorry_co_ I_t_m not sure to understand what is your problem then _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ramymabrouk","Date":"2016-05-19T16:20:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tso far I have solved my problem_co_ in fact the merging approach was not the best one_co_ but I thought the error I have found may be something important_co_ and I am very thankful for your interest.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]