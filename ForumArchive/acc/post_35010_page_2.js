[{"Owner":"Dad72","Date":"2018-01-12T20:09:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\nvar engine _eq_ new BABYLON.Engine(canvas)_sm_\nvar scene _eq_ new BABYLON.Scene(engine)_sm_\n\nscene.clearColor _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\nvar camera _eq_ new BABYLON.FreeCamera(_qt_camera_qt__co_ new BABYLON.Vector3(-2.15_co_ 0_co_ -3.2)_co_ scene)_sm_\ncamera.minZ _eq_ 0.01_sm_\nvar light _eq_ new BABYLON.PointLight(_qt_light_qt__co_ new BABYLON.Vector3(0_co_ 5_co_ -5)_co_ scene)_sm_\n\nvar pathsToLoadFrom _eq_ [_qt_./assets/obj_files_10/_qt__co_ _qt_./assets/obj_files_11/_qt__co_ _qt_./assets/obj_files_12/_qt_]_sm_\n    \n//document.addEventListener(_qt_mousedown_qt__co_ push_path_co_ false)_sm_\n\n\nvar loader _eq_ function(paths){\n\tthis.mesh_pos _eq_ -5_sm_\n\tthis.meshs _eq_ []_sm_\n\tfor(let i_eq_0_sm_ i&lt_sm_paths.length_sm_ i++){\n\t\tthis._run(paths[i])_sm_\n\t\tthis.mesh_pos +_eq_ 1_sm_\n\t}\n\t\n\treturn this_sm_\n}_sm_\n\nloader.prototype._run _eq_ function(path) {\n\tBABYLON.SceneLoader.ImportMesh(_t__t__co_ _t_./_t__co_ path_co_ scene_co_ (meshes) _eq_&gt_sm_ {\n\t\tfor(let i_eq_0_sm_ i &lt_sm_ meshes.length_sm_ i++){\n\t\t\tlet mesh _eq_ meshes[i]_sm_\n\t\t\tmesh.position.x _eq_ this.mesh_pos_sm_\n\t\t\tthis.meshs.push(mesh)_sm_\n\t\t}\n\t})_sm_\t\n}_sm_        \n  \t\nengine.runRenderLoop(function () {\n   scene.render()_sm_\n})_sm_\n\nvar _l _eq_ new loader(pathsToLoadFrom)_sm_  \n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-12T20:11:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t^^^^ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_ just did the equivalent should fix the error as well. &lt_sm_3_lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-01-12T20:28:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt first_co_ line 31 was written _lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt_BABYLON.SceneLoader.ImportMesh(_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#e6db74_sm_font-size_dd_14px_sm__qt__gt__t__t__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#e6db74_sm_font-size_dd_14px_sm__qt__gt__t_./_t__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt__co_ path_co_ scene_co_ (meshes)_eq_&gt_sm_ { _lt_/span_gt__co_ and I received a 403 Forbidden console error that it couldn_t_t load from ././assets/obj_files_10/_co_ so I changed the line to        _lt_strong_gt_ BABYLON.SceneLoader.ImportMesh(_t__t__co_ _t__t__co_ path_co_ scene_co_ (meshes)_eq_&gt_sm_ { _lt_/strong_gt_and then the path was correct. But then I get the message in the console_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBJS - [12_dd_19_dd_45]_dd_ Unable to import meshes from ./assets/obj_files_11/_dd_ 403 Forbidden\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny Thoughts?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-12T20:32:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tlooks like its trying to load _qt_./assets/obj_files_11/_qt__lt_br /_gt__lt_br /_gt_\n\twhich is not a OBJ file_co_ load the obj file urls into the array and try again._lt_br /_gt__lt_br /_gt_\n\tYou can_t_t load folders*_co_ you gotta point to the file._lt_br /_gt__lt_br /_gt_\n\t*you can with some hacking*_lt_br /_gt__lt_br /_gt_\n\tSo_dd__lt_br /_gt_\n\tvar pathsToLoadFrom _eq_ [_qt_assets/obj_files_10/file.obj_qt__co_ _qt_assets/obj_files_11/file.obj_qt__co_ _qt_assets/obj_files_12/file.obj_qt_]_sm__lt_br /_gt_\n\tand get rid of the ./ in the paths string and leave it in the Loader path declaration.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-01-12T20:35:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was just working on identifying the meshes. Thanks for all of your help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-12T20:36:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAnytime buddy!  Sorry I have been so busy lately._lt_br /_gt__lt_br /_gt_\n\tMight be moving to Colorado soon for a senior Dev position_co_ if that happens Ill let you know.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-12T21:10:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_ and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou guys rock\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-01-12T22:35:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDid you try a path without the _t_./_t_ but _t__t_ (it is not useful to put _lt_strong_gt_./_lt_/strong_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t _lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt_BABYLON.SceneLoader.ImportMesh(_lt_/span_gt__lt_span style_eq__qt_background-color_dd_rgb(35_co_36_co_31)_sm_font-size_dd_14px_sm__qt__gt__lt_font color_eq__qt_#e6db74_qt__gt__qt__qt__lt_/font_gt__lt_/span_gt__lt_span style_eq__qt_background-color_dd_rgb(35_co_36_co_31)_sm_font-size_dd_14px_sm__qt__gt__lt_font color_eq__qt_#f8f8f2_qt__gt__co_ _lt_/font_gt__lt_font color_eq__qt_#e6db74_qt__gt__qt__qt__lt_/font_gt__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt__co_ path_co_ scene_co_ (meshes)_eq_&gt_sm_ { _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsame thing here _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar pathsToLoadFrom _eq_ [_qt_assets/obj_files_10/_qt__co_ _qt_assets/obj_files_11/_qt__co_ _qt_assets/obj_files_12/_qt_]_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn fact your mistake is that you use a path in importMesh in the file parameter. you do not call any files.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-01-12T22:43:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou had to do something like this in the ImportMesh _dd_ BABYLON.SceneLoader.ImportMesh(_t__t__co_ _lt_strong_gt_path_co_ fileOBJ_lt_/strong_gt__co_ scene_co_ (meshes) _eq_&gt_sm_ {\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var fileOBJ _eq_ ???_sm_\n\nloader.prototype._run _eq_ function(path) {\n\tBABYLON.SceneLoader.ImportMesh(_t__t__co_ path_co_ fileOBJ_co_ scene_co_ (meshes) _eq_&gt_sm_ {\n\t\tfor(let i_eq_0_sm_ i &lt_sm_ meshes.length_sm_ i++){\n\t\t\tlet mesh _eq_ meshes[i]_sm_\n\t\t\tmesh.position.x _eq_ this.mesh_pos_sm_\n\t\t\tthis.meshs.push(mesh)_sm_\n\t\t}\n\t})_sm_\t\n}_sm_      _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-01-12T22:50:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat_t_s what I did by resuming your code by adding the files.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\nvar engine _eq_ new BABYLON.Engine(canvas)_sm_\nvar scene _eq_ new BABYLON.Scene(engine)_sm_\n\nscene.clearColor _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\nvar camera _eq_ new BABYLON.FreeCamera(_qt_camera_qt__co_ new BABYLON.Vector3(-2.15_co_ 0_co_ -3.2)_co_ scene)_sm_\ncamera.minZ _eq_ 0.01_sm_\nvar light _eq_ new BABYLON.PointLight(_qt_light_qt__co_ new BABYLON.Vector3(0_co_ 5_co_ -5)_co_ scene)_sm_\n\nvar pathsToLoadFrom _eq_ [_qt_assets/obj_files_10/_qt__co_ _qt_assets/obj_files_11/_qt__co_ _qt_assets/obj_files_12/_qt_]_sm_\n\n// replace the files here by yours\nvar file _eq_ [_qt_files10.obj_qt__co_ _qt_files11.obj_qt__co_ _qt_files12.obj_qt_]_sm_\n\n\nvar loader _eq_ function(paths_co_ file){\n\tthis.mesh_pos _eq_ -5_sm_\n\tthis.meshs _eq_ []_sm_\n\tfor(let i_eq_0_sm_ i&lt_sm_paths.length_sm_ i++){\n\t\tthis._run(paths[i]_co_ file)_sm_\n\t\tthis.mesh_pos +_eq_ 1_sm_\n\t}\n\t\n\treturn this_sm_\n}_sm_\n\nloader.prototype._run _eq_ function(path_co_ file) {\n\tBABYLON.SceneLoader.ImportMesh(_t__t__co_ path_co_ file_co_ scene_co_ (meshes) _eq_&gt_sm_ {\n\t\tfor(let i_eq_0_sm_ i &lt_sm_ meshes.length_sm_ i++){\n\t\t\tlet mesh _eq_ meshes[i]_sm_\n\t\t\tmesh.position.x _eq_ this.mesh_pos_sm_\n\t\t\tthis.meshs.push(mesh)_sm_\n\t\t}\n\t})_sm_\t\n}_sm_        \n  \t\nengine.runRenderLoop(function () {\n   scene.render()_sm_\n})_sm_\n\nvar _l _eq_ new loader(pathsToLoadFrom_co_ file)_sm_  _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-01-13T11:52:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOf nothing DB... Always happy to help\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-13T16:33:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tyou can always do an array like this too_lt_br /_gt_\n\t[_lt_br /_gt_\n\t{filePath_dd__t_Blah/file_t__co_ fileName_dd__t_coolModel.obj_t_}_co__lt_br /_gt_\n\t{filePath_dd__t_Blah/file-location2_t__co_ fileName_dd__t_coolModel2.obj_t_}_lt_br /_gt_\n\t]_lt_br /_gt__lt_br /_gt_\n\tand then iterate through that so you don_t_t have two arrays.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]