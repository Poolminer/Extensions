[{"Owner":"br4tp1t","Date":"2015-05-31T20:29:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_im trying to show imported mesh but nothing appears_co_ my code looks like this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_canvas _eq_ document.getElementById(_qt_3dcanvas_qt_)_sm_    engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_    var createScene _eq_ function () {        var scene _eq_ new BABYLON.Scene(engine)_sm_        scene.clearColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_        var camera _eq_ new BABYLON.FreeCamera(_qt_camera1_qt__co_ new BABYLON.Vector3(0_co_ 5_co_ -10)_co_ scene)_sm_        camera.setTarget(BABYLON.Vector3.Zero())_sm_        camera.attachControl(canvas_co_ false)_sm_        var light _eq_ new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_        light.intensity _eq_ .5_sm_        //var sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_sphere1_qt__co_ 16_co_ 2_co_ scene)_sm_        //sphere.position.y _eq_ 1_sm_        var ground _eq_ BABYLON.Mesh.CreateGround(_qt_ground1_qt__co_ 6_co_ 6_co_ 2_co_ scene)_sm_        BABYLON.SceneLoader.ImportMesh(_qt_rack_hp_qt__co_ _qt_./_qt__co_ _qt_rack_hp.babylon_qt__co_ scene_co_ function (newMeshes) {            alert(newMeshes[0].id)_sm_            newMeshes[0].position _eq_ new BABYLON.Vector3(0_co_0_co_0)_sm_            camera.target _eq_ newMeshes[0]_sm_        })_sm_        return scene_sm_    }_sm_    var scene _eq_ createScene()_sm_    engine.runRenderLoop(function () {        scene.render()_sm_    })_sm__lt_/pre_gt__lt_p_gt_i can see that mine http server sended the rack_hp.babylon file_co_ also the alert with _qt_newMeshes[0].id_qt_ is showing_co_ i was trying also to change position of this mesh and change camera.target but nothing helped_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_here are mine files(im sending also obj file that ive converted with blender to babylon)_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//www.dropbox.com/s/gkgh1m7o1jnmbsq/rack_hp.mtl?dl_eq_0_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.dropbox.com/s/gkgh1m7o1jnmbsq/rack_hp.mtl?dl_eq_0_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//www.dropbox.com/s/wsgq88rxmejg75w/rack_hp.obj?dl_eq_0_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.dropbox.com/s/wsgq88rxmejg75w/rack_hp.obj?dl_eq_0_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//www.dropbox.com/s/llhw5zahezuu9rm/rack_intrapp.babylon?dl_eq_0_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.dropbox.com/s/llhw5zahezuu9rm/rack_intrapp.babylon?dl_eq_0_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Regards_co__lt_/p_gt__lt_p_gt_Piotr_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-06-01T11:12:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co_ can you show us a demo of this scene somewhere? Will be easier to debug._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"br4tp1t","Date":"2015-06-01T11:17:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co_ you mean how this mesh looks like in blender or what do you mean by demo of this scene? _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-06-01T11:47:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_this javascript code running somewhere online. Will help us help you _dd_-)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"br4tp1t","Date":"2015-06-01T12:32:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_a href_eq__qt_http_dd_//bcagroup.pl/babylon/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//bcagroup.pl/babylon/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-06-01T13:11:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Piotr_co_ welcome to the babylon forum _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think your problem lies with the object you are exporting._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The object is huge and even though the origin of the object is at (0_co_0_co_0) (yellow dot_co_ A in image below) the closest faces are a long way from that origin point (see B and C in image below)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you are making the camera look at the origin - probably does not see the actual mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_06_2015/post-7026-0-39550100-1433164110.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_06_2015/post-7026-0-39550100-1433164110.png_qt_ data-fileid_eq__qt_4399_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-7026-0-39550100-1433164110.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-06-01T13:12:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co_ a quick look at your object - it is not centered at 0_co_0_co_0 _co_ so setting its position at 0_co_0_co_0 is not going to work _dd_-)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Try doing that (after loading the mesh)_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_newMeshes[0].position _eq_ newMeshes[0].getBoundingInfo().boundingBox.center.clone().negate()_lt_/pre_gt__lt_p_gt_and back away a bit_co_ you will see the object._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-06-01T13:13:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_And gryff explained how to fix it _dd_-) perfect_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-06-01T13:38:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_And gryff explained how to fix it_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Well not really RaananW - just the problem _sm_-)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_One fix Piotr is _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1. In Object Mode in Blender_co_ select the object_co_ then go Object-&gt_sm_Transform-&gt_sm_Geometry To Origin._lt_/p_gt__lt_p_gt_2. Now re-export the mesh_lt_/p_gt__lt_p_gt_3. Because the object is so large_co_  and your camera settings are_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var camera _eq_ new BABYLON.FreeCamera(_qt_camera1_qt__co_ new BABYLON.Vector3(0_co_ 5_co_ -10)_co_ scene)_sm__lt_/pre_gt__lt_p_gt_it means you are likely to be inside the object_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To fix this_co_ will have to_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1. Scale down the object or_lt_/p_gt__lt_p_gt_2. Move the camera so that its Z position is is perhaps ~ -150 to -200 units_lt_/p_gt__lt_p_gt_3. And possibly set the maxZ value of the camera to perhaps 500_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"br4tp1t","Date":"2015-06-01T13:44:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok i can see mine mesh_co_ but dont have any idea how to move it corectly to center view_co_ or how to export it corectly_co_ because im not familiar with bledner etc _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-06-01T13:45:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_And _lt_strong_gt_NOW_lt_/strong_gt_ gryff explained how to fix it _dd_-) _lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"br4tp1t","Date":"2015-06-01T13:56:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok really thanks for help_co_ ive exported once again the mesh but now ive scaled it down in blender and moved to center position it works like a charm _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Thanks guys _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_but now ive got second question_co_ what is the best way to clone mine mesh because i need to make like 200 of them in one scene_co_ and all of them need its own unique id so i can identify them_co_ is there a way to save custom variables to mesh? so when i click them ill get mine variable/variables?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-06-01T13:58:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_but dont have any idea how to move it corectly to center view_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As I said above Piotr_co_ _qt__lt_em_gt_In Object Mode in Blender_co_ select the object_co_ then go Object-&gt_sm_Transform-&gt_sm_Geometry To Origin._lt_/em_gt__qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can select an object by right clicking on it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then see image below for the _qt__lt_em_gt_Object-&gt_sm_Transform-&gt_sm_Geometry To Origin._qt__lt_/em_gt_ part._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_06_2015/post-7026-0-57602600-1433167053.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_06_2015/post-7026-0-57602600-1433167053.png_qt_ data-fileid_eq__qt_4403_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-7026-0-57602600-1433167053.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-06-01T14:27:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_best way to clone mine mesh because i need to make like 200 of them in one scene_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Piotr_co_ I_t_m not sure using _lt_em_gt_mesh.clone()_lt_/em_gt_ will be the way to go as your mesh has 42_co_000+ tris. And that would leave you with 8 million+ tris in your scene. This might be an alternative_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/How-to-use-instances_qt_ rel_eq__qt_external nofollow_qt__gt_Instances_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However_co_ with _qt__lt_em_gt_Instances_lt_/em_gt__qt_ you can only _lt_u_gt_vary certain properties_lt_/u_gt_ of the meshes (see the link)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"br4tp1t","Date":"2015-06-01T14:59:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_instances are perfect _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ cheers again_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]