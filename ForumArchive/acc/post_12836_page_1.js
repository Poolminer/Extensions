[{"Owner":"Toushin","Date":"2015-03-02T09:24:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am confused because of an error I am encountering right now._lt_/p_gt__lt_p_gt_Here is the complete output in Firefox_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BJS - [10_dd_13_dd_36]_dd_ Babylon.js engine (v2.0.0) launched                                                        babylon...ebug.js (Zeile 2927)GET _lt_a href_eq__qt__qt__gt_http_dd_//xxx/res/webgl/Mesh1.03.babylon_lt_/a_gt_.manifest?1425287616896_t_&gt_sm__lt_a href_eq__qt_http_dd_//xxx/res/webgl/Mesh1.03.babylon_qt__gt_http_dd_//xxx/res/webgl/Mesh1.03.babylon_lt_/a_gt_.manifest?1425287616896  200 OK 2ms                                babylon...ebug.js (Zeile 14169)GET _lt_a href_eq__qt_http_dd_//xxx/res/css/stylesheet.css%C2%A0%C2%A0%C2%A0_qt__gt_http_dd_//xxx/res/css/stylesheet.css   _lt_/a_gt_                          304 Not Modified 3ms                            hand-1.3.8.js (Zeile 725)GET _lt_a href_eq__qt_http_dd_//xxx/res/webgl/Mesh1.03.babylon_qt__gt_http_dd_//xxx/res/webgl/Mesh1.03.babylon_lt_/a_gt_                         200 OK 55ms\t                             babylon...ebug.js (Zeile 2594)UnknownError                                                                                             babylon.2.0.debug.js (Zeile 14195)var request _eq_ this.idbFactory.open(_qt_babylonjs_qt__co_ 1)_sm__lt_/pre_gt__lt_p_gt_And here in Chrome_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BJS - [10_dd_21_dd_31]_dd_ Babylon.js engine (v2.0.0) launchedGET _lt_a href_eq__qt_/res/js/Babylon.js-master/babylon.volumetricLightScatteringPostProcess.js.map_qt__gt_http_dd_//.../res/js/Babylon.js-master/babylon.volumetricLightScatteringPostProcess.js.map_lt_/a_gt_ 404 (Not Found)   babylon.volumetricLightScatteringPostProcess.js.map_dd_1_lt_/pre_gt__lt_p_gt_Except for adding comments to my Babylon code_co_ I have literally not changed it in weeks now and it always ran without error._lt_/p_gt__lt_p_gt_Until last Friday I ran version 1.14 of Babylon_co_ when I suddenly encountered this error. I then updated to version 2.0 but still have this error._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My scene is still rendered_co_ seemingly without problems. Everything still seems to work. But getting this error without being able to find the cause is pretty grating._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-03-02T09:40:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Regarding chrome - _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The Chrome error is simply a sourcemap file not found. It_t_s not really an error._lt_/p_gt__lt_p_gt_Chrome tries to find the sourcemap file if it is declared in your javascript file. It actually only happens when you have your console open (try rendering the scene first and then opening the console_co_ you will notice it is trying to load the map only then)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So_co_ Tl_sm_dr - alles ist in Ordnung_co_ this is not really an error._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Regarding firefox - _lt_/p_gt__lt_p_gt_If you changed your babylon source code_co_ it would be hard to tell you what_t_s wrong in Zeile 14195_co_ But it doesn_t_t look like the same mapping problem. What_t_s in this row?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Toushin","Date":"2015-03-02T10:43:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Let me clarify_dd__lt_br_gt__lt_br_gt_The code I personally wrote for Babylon_co_ meaning creating a scene_co_ adding a camera_co_ lights_co_ materials and importing a mesh has not changed in the last few weeks. But last Friday I suddenly encountered this error using version 1.14. I then updated to 2.0 but the error remained._lt_br_gt__lt_br_gt_From what I can tell with my limited knowledge_co_ while trying to open a Database asynchronously_co_ if this has not happened Babylon then tries to create an indexed database and here something goes wrong. But don_t_t take my word for it_co_ I just tried to decipher the code based on function-names and comments._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Edit_dd_ I just finished testing with Firefox 35.0 and the error does not happen_co_ so I am pretty sure it has something to do with the new Firefox version 36.0. It seems it updated on my system last friday_co_ so that_t_s why I encountered this error then._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-03-02T10:58:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_In firefox It certainly looks like an error_co_ I just wanted to say that the chomre and firefox errors are not the same  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_Would be great to know what_t_s in this row to be able to debug this. _lt_/p_gt__lt_p_gt_How can this be reproduced? any loaded scene does that? _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Toushin","Date":"2015-03-02T12:23:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It seems this error is caused when I try to import a mesh into my scene._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In this case I created my mesh in 3dsmax_co_ converted it with the babylon-plugin and imported it with _qt_BABYLON.SceneLoader.ImportMesh(...)_sm__qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If I just add a normal box to my scene for example_co_ I do not encounter this error._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Toushin","Date":"2015-04-22T10:58:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So_co_ after sitting on this problem for over a month_co_ I tried to narrow down when the error appears._lt_br_gt_ _lt_br_gt__lt_a href_eq__qt_https_dd_//www.dropbox.com/s/f2b5gzxl27qn43y/base%20example.rar?dl_eq_1_qt_ rel_eq__qt_external nofollow_qt__gt_This_lt_/a_gt_ scene throws 3 such errors_co_ when opened with the latest Firefox._lt_br_gt_ _lt_br_gt_The first for_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_res/webgl/_qt__co_ _qt_Mug1.04.babylon_qt__co_ scene_co_ function(newMeshes) {}_sm__lt_/pre_gt__lt_p_gt_The second for_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_inlayBackMaterial.diffuseTexture _eq_ new BABYLON.Texture(_qt_http_dd_//i725.photobucket.com/albums/ww255/Toushin/background_zpsmnkep3ya.jpg_qt__co_ scene)_sm__lt_/pre_gt__lt_p_gt_The third for_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_inlayForeMaterial.diffuseTexture _eq_ new BABYLON.Texture(_qt_http_dd_//i725.photobucket.com/albums/ww255/Toushin/Foreground_zpsskfkts3l.png_qt__co_ scene)_sm__lt_/pre_gt__lt_p_gt_If I comment out lines 43 - 51 and 70 - 72_co_ and instead create two boxes with these materials _lt_u_gt_no_lt_/u_gt_ errors appear. I believe_co_ it therefore has something to do with the .SceneLoader.ImportMesh function I am using._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To prevent misunderstandings_co_ I have _lt_u_gt_not_lt_/u_gt_ changed the babylon javascript file in any way and I am using _qt_babylon.2.0.debug.js_qt_._lt_/p_gt__lt_p_gt_Also this same code to import a mesh worked without problems in an earlier version of Firefox_co_ I believe 35._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The scene seems to render correctly_co_ so I am unsure if I should simply ignore this error_co_ but it still bugs me._lt_/p_gt__lt_p_gt_Help would really be appreciated._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-04-22T11:24:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_try with relatif paths interne _dd_  new BABYLON.Texture (_qt_./albums/ww255/Toushin/background_zpsmnkep3ya.jpg_qt_)_sm__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Toushin","Date":"2015-04-24T09:49:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This doesn_t_t really help me_co_ since the textures are from an external website_co_ in this case Photobucket._lt_/p_gt__lt_p_gt_And like I said_co_ the textures throw no error_co_ when I remove the .SceneLoader.ImportMesh function._lt_/p_gt__lt_p_gt_Just placing the code for the textures outside this function removes the errors for them_co_ but the .SceneLoader.ImportMesh function still throws the error._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ I already tried changing the string for the rooturl parameter to _qt_./res/webgl/_qt__co_ but this didn_t_t help any._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-04-24T10:47:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Your textures assigned to models from your modeling software should be present in the same folder as the model._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_new BABYLON.Textures must be used to change after the existing textures_co_ or to add a mesh which does not have textures._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-04-24T11:22:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Are you sure Photobucket website has CORS enabled ? You cannot load a file from outside your server if the security policiy of the external server is not _qt_open enough_qt_._lt_/p_gt__lt_p_gt_Maybe your problem is related to that (generally there is a CORS warning in the console when this occurs_co_ but maybe not in your case_co_ for unknow reason _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_mellow.png_qt_ alt_eq__qt__dd_mellow_dd__qt__gt_ ...)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Toushin","Date":"2015-04-24T11:35:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@dad72 My model does not use any textures at all. I just assign some meshes a new material which has a texture_co_ which is from an external source in this example._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_@Vousk-prod. Photobucket is open enough_co_ because the textures are actually loaded and correctly displayed_co_ so I don_t_t imagine the problem lies there._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let_t_s please focus not so much on the textures_co_ because in this case they shouldn_t_t really matter so much. In fact_co_ removing everything from within the BABYLON.SceneLoader.ImportMesh function and only having something like_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_res/webgl/_qt__co_ _qt_Mug1.04.babylon_qt__co_ scene_co_ function(newMeshes) {})_sm__lt_/pre_gt__lt_p_gt_displays my model and throws the error._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-04-24T11:43:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You have a link so we can see._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-04-24T20:53:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Can you check that your IDB is not full? Could you try emptying it?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Toushin","Date":"2015-04-28T12:04:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sorry for the late reply deltakosh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How would I go about checking and emptying the IDB?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-04-28T18:36:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_IDB is indexDataBase_co_ eg. data stored in the _qt_application cache_qt_ of your browser (nothing to do with the browsing temp files)._lt_/p_gt__lt_p_gt_You can use the dev tools in most browsers to check the content_co_ and to empty it you just have to follow instructions on the internet regarding the browser you_t_re using._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Toushin","Date":"2015-04-29T11:45:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ after deleting my IDB and restarting Firefox the error disappeared_co_ so thanks deltakosh and vousk-prod. for your help._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-04-29T11:49:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You_t_re welcome._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]