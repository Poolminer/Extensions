[{"Owner":"fdeng","Date":"2018-11-06T12:05:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the obj file_co_ when an object has multi-material_co_ the obj file loader will create several meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_20803_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.44991f8000ae962343260610e418a0e6.png_qt_ alt_eq__qt_image.png.44991f8000ae962343260610e418a0e6.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to only create one mesh with multi-material_co_ but got the wrong result_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_20804_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.165b9e8c7e7f1fb10e86b9c9d7ac38e0.png_qt_ alt_eq__qt_image.png.165b9e8c7e7f1fb10e86b9c9d7ac38e0.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI attached the obj file and the new obj file loader I modified(_lt_strong_gt_objFileLoader_new.js_lt_/strong_gt_ )_co_ can anybody help to have a look why it is wrong. It troubled me a whole day now.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_20805_qt__gt_obj.rar_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-06T17:30:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPinging _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30070_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/_qt_ rel_eq__qt__qt__gt_@kcoley_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kcoley","Date":"2018-11-07T22:01:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32042-fdeng/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32042_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32042-fdeng/_qt_ rel_eq__qt__qt__gt_@fdeng_lt_/a_gt_.  Unfortunately_co_ multi-materials on a single mesh is currently not supported in Babylon.js.  The current way to get the obj to load would be to create multiple meshes with different material assignments. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fdeng","Date":"2018-11-08T01:13:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30070_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/_qt_ rel_eq__qt__qt__gt_@kcoley_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I want is not a really a single mesh_co_ but a mesh with BABYLON.MultiMaterial_co_ it will have multiple submesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmy code is like_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t                if (handledMesh.materials.length &gt_sm_ 1) {_lt_br /_gt_\n\t                    babylonMesh.subMeshes _eq_ []_sm__lt_br /_gt_\n\t                    var multimat _eq_ new BABYLON.MultiMaterial(_qt_multi_qt__co_ scene)_sm__lt_br /_gt_\n\t                    babylonMesh.material _eq_ multimat_sm__lt_br /_gt_\n\t                    for (var i _eq_ 0_sm_ i &lt_sm_ handledMesh.materials.length_sm_ i++) {_lt_br /_gt_\n\t                        var submat _eq_ materialsFromMTLFile.materials[handledMesh.materials_lt_em_gt_]_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t                        multimat.subMaterials.push(submat)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t                        var submesh _eq_ new BABYLON.SubMesh(i_co_ 0_co_ handledMesh.positions.length/3_co_ handledMesh.spans_lt_/em_gt__lt_em_gt__lt_em_gt_[0]_co_ handledMesh.spans_lt_/em_gt__lt_/em_gt__lt_em_gt__lt_em_gt__lt_em_gt_[1]_co_ babylonMesh)_sm__lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_br /_gt__lt_em_gt__lt_em_gt__lt_em_gt_\n\t                    }_lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_br /_gt__lt_em_gt__lt_em_gt__lt_em_gt_\n\t                }_lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_br /_gt__lt_em_gt__lt_em_gt__lt_em_gt_\n\t                else {_lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_br /_gt__lt_em_gt__lt_em_gt__lt_em_gt_\n\t                    babylonMesh.material _eq_ materialsFromMTLFile.materials[handledMesh.materials[0]]_sm__lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_br /_gt__lt_em_gt__lt_em_gt__lt_em_gt_\n\t                }\n_lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_/p_gt_\n_lt_em_gt__lt_em_gt__lt_em_gt_\n\n_lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_p_gt__lt_em_gt__lt_em_gt__lt_em_gt_\n\tYou can have a look of my entire code in the attachment in the top post\n_lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_/p_gt_\n_lt_em_gt__lt_em_gt__lt_em_gt_\n_lt_/em_gt__lt_/em_gt__lt_/em_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kcoley","Date":"2018-11-08T03:12:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32042-fdeng/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32042_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32042-fdeng/_qt_ rel_eq__qt__qt__gt_@fdeng_lt_/a_gt__co_ gotcha_co_ multiple submeshes makes sense.  I_t_ll take a look at your version.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kcoley","Date":"2018-11-08T04:18:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32042-fdeng/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32042_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32042-fdeng/_qt_ rel_eq__qt__qt__gt_@fdeng_lt_/a_gt_ I took a quick read-through and one thing that seems to be missing is adding the submesh to the your handledMesh array_dd__lt_br /_gt_\n\t_lt_br /_gt_\n\tSomething like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_handledMesh.subMeshes.push(submesh)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis playground may be a good reference in getting MultiMaterials to work with multiple submeshes if you haven_t_t seen this one yet.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#28EUMN%2321_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#28EUMN#21_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet me know if that helps.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fdeng","Date":"2018-11-08T05:35:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30070_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/_qt_ rel_eq__qt__qt__gt_@kcoley_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt seems not the reason_co_ when create a submesh like below_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_var submesh _eq_ new BABYLON.SubMesh(..._co_ mesh)_sm_   _lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_Actually the created submesh will be pushed to _lt_/em_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_subMeshes array of the parent mesh automatically._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_You can verify it in  this new PG_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#28EUMN%2324_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#28EUMN#24_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\tI removed these push actions_dd_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_sphere.subMeshes.push(submesh1)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_sphere.subMeshes.push(submesh2)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_sphere.subMeshes.push(submesh3)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_sphere.subMeshes.push(submesh4)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_sphere.subMeshes.push(submesh5)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_sphere.subMeshes.push(submesh6)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t \n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]