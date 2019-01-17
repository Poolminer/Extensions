[{"Owner":"nomadic_aviator","Date":"2015-02-10T15:56:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_First I want to say that I really love Babylon.js. It has made learning WebGL and 3D graphics much much easier. I have two questions regarding imported meshes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have managed to import and load a mesh I created in Blender_co_ however_co_ the mesh itself only seems to appear in Chrome and IE. It doesn_t_t appear in Firefox at all. When I look at the console_co_ I get this error_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_babylon.js_dd_3 BJS - [09_dd_46_dd_46]_dd_ Valid manifest file not found._lt_/span_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_a href_eq__qt_http_dd_//www.cosmiqcloud.com/universe/cosmiqlogo2.babylon.manifest?1423583206131_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.cosmiqcloud.com/universe/cosmiqlogo2.babylon.manifest?1423583206131_lt_/a_gt_ Failed to load resource_dd_ the server responded with a status of 404  _lt_/span_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_Scene &amp_sm_ textures will be loaded directly from the web server._lt_/span_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_I wanted to make sure this wasn_t_t something in my code and I am not really sure what a manifest file is._lt_/span_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_My second question is_dd_ _lt_/span_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_How do I make the imported mesh reflect on a mirrored surface?_lt_/span_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_Any insight you can give would be very helpful. Thank you._lt_/span_gt__lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My code is below and here is the link to the live demo is _lt_a href_eq__qt_http_dd_//www.cosmiqcloud.com/universe/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.cosmiqcloud.com/universe/_lt_/a_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-html_qt__gt_    &lt_sm_script&gt_sm_        var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_        var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_        var createScene _eq_ function () {            var scene _eq_ new BABYLON.Scene(engine)_sm_                    // Setup environment\t\t\tvar light _eq_ new BABYLON.DirectionalLight(_qt_Dir0_qt__co_ new BABYLON.Vector3(10_co_ -20_co_ 0)_co_ scene)_sm_\t\t\tlight.position _eq_ new BABYLON.Vector3(-160_co_ 240_co_ 1)_sm_\t\t\tlight.diffuse _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\t\t\tlight.specular _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\t\t\tlight.intensity _eq_ 0.7_sm_\t\t\t\t\t\tvar omnilight _eq_ new BABYLON.PointLight(_qt_Omni0_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 60)_co_ scene)_sm_\t\t\tomnilight.position _eq_ new BABYLON.Vector3(0_co_ 35_co_ 310)_sm_\t\t\tomnilight.diffuse _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\t\t\tomnilight.specular _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\t\t\tomnilight.intensity _eq_ 1.9_sm_\t\t\tvar camera _eq_ new BABYLON.FreeCamera(_qt_FreeCamera_qt__co_ new BABYLON.Vector3(25_co_ 0_co_ -170)_co_ scene)_sm_\t\t\t//var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 3 * Math.PI / 2_co_ Math.PI / 8_co_ 50_co_ BABYLON.Vector3.Zero()_co_ scene)_sm_\t\t\tscene.activeCamera.attachControl(canvas_co_ true)_sm_\t\t\tcamera.checkCollisions _eq_ true_sm_\t\t\tcamera.applyGravity _eq_ true_sm_\t\t\tcamera.ellipsoid _eq_ new BABYLON.Vector3(2_co_ 2_co_ 2)_sm_\t\t\t\t\t\t//Physics \t\t\tscene.enablePhysics()_sm_\t\t\tscene.setGravity(new BABYLON.Vector3(0_co_ -60_co_ 0))_sm_\t\t\tscene.collisionsEnabled _eq_ true_sm_                    // Meshes            var sphere2 _eq_ BABYLON.Mesh.CreateSphere(_qt_Sphere2_qt__co_ 16.0_co_ 20.0_co_ scene)_sm_\t\t\tsphere2.position.x _eq_ 0_sm_\t\t\tsphere2.position.y _eq_ 4_sm_\t\t\tsphere2.material _eq_ new BABYLON.StandardMaterial(_qt_texture1_qt__co_ scene)_sm_\t\t\tsphere2.material.reflectionTexture _eq_ new BABYLON.CubeTexture(_qt_textures/skybox_qt__co_ scene)_sm_\t\t\tsphere2.setPhysicsState({impostor_dd_ BABYLON.PhysicsEngine.BoxImpostor_co_ mass_dd_ 1_co_ friction_dd_ 30_co_ restitution_dd_ 2.0})_sm_\t\t\tsphere2.checkCollisions _eq_ true_sm_\t\t\tsphere2.material.alpha _eq_ .5_sm_\t\t\t\t\t\tvar sphere3 _eq_ BABYLON.Mesh.CreateSphere(_qt_Sphere2_qt__co_ 16.0_co_ 70.0_co_ scene)_sm_\t\t\tsphere3.position.x _eq_ 187_sm_\t\t\tsphere3.position.y _eq_ 35_sm_\t\t\tsphere3.position.z _eq_ 150_sm_\t\t\tsphere3.material _eq_ new BABYLON.StandardMaterial(_qt_texture1_qt__co_ scene)_sm_\t\t\tsphere3.material.reflectionTexture _eq_ new BABYLON.CubeTexture(_qt_textures/skybox_qt__co_ scene)_sm_\t\t\t//sphere3.setPhysicsState({impostor_dd_ BABYLON.PhysicsEngine.BoxImpostor_co_ mass_dd_ 1_co_ friction_dd_ 30_co_ restitution_dd_ 0.0})_sm_\t\t\tsphere3.checkCollisions _eq_ true_sm_\t\t\t\t\t\tvar knot _eq_ BABYLON.Mesh.CreateTorusKnot(_qt_knot_qt__co_ 7_co_ 2_co_ 128_co_ 64_co_ 2_co_ 3_co_ scene)_sm_\t\t\tknot.position _eq_ new BABYLON.Vector3(-19_co_ 10_co_ 16)_sm_ \t\t\t//knot.setPhysicsState({impostor_dd_ BABYLON.PhysicsEngine.BoxImpostor_co_ mass_dd_ 1_co_ friction_dd_ 30_co_ restitution_dd_ 1.0})_sm_\t\t\tknot.checkCollisions _eq_ true_sm_\t\t\tknot.material _eq_ new BABYLON.StandardMaterial(_qt_texture3_qt__co_ scene)_sm_\t\t\tknot.material.diffuseColor _eq_ new BABYLON.Color3(1_co_ .634_co_ .7)_sm_\t\t\tknot.material.reflectionTexture _eq_ new BABYLON.CubeTexture(_qt_textures/skybox_qt__co_ scene)_sm_\t\t\t\t\t\t//Animations\t\t\tvar animationKnot _eq_ new BABYLON.Animation(_qt_myAnimation_qt__co_ _qt_rotation.y_qt__co_ 30_co_ BABYLON.Animation.ANIMATIONTYPE_FLOAT_co_ BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)_sm_\t\t\t\t\t\t// An array with all animation keys\t\t\tvar keys _eq_ []_sm_   \t\t\t   \t\t keys.push({        \t\tframe_dd_ 0_co_        \t\tvalue_dd_ 4    \t\t})_sm_    \t\t    \t\tkeys.push({        \t\tframe_dd_ 20_co_        \t\tvalue_dd_ 8    \t\t})_sm_       \t\tkeys.push({        \t\tframe_dd_ 100_co_        \t\tvalue_dd_ 7    \t\t})_sm_\t\t\t\t\t    \t\tkeys.push({        \t\tframe_dd_ 360_co_        \t\tvalue_dd_ 5    \t\t})_sm_\t\t\t\t\t\t\t\t\t    \t\tkeys.push({        \t\tframe_dd_ 460_co_        \t\tvalue_dd_ 1    \t\t})_sm_\t\t\t\t\t\tanimationKnot.setKeys(keys)_sm_\t\t\t\t\t\tknot.animations.push(animationKnot)_sm_\t\t\t\t\t\t\t\t\tscene.beginAnimation(knot_co_ 0_co_ 100_co_ true)_sm_\t\t\t\t\t\t//Imported mesh\t\t\t\t\t\tvar cosmiqLogo _eq_ BABYLON.SceneLoader.ImportMesh(_qt_Cosmiq Logo_qt__co_ _qt__qt__co_ _qt_cosmiqlogo2.babylon_qt__co_ scene_co_ function (newMeshes) {\t\t\t// imported mesh attributes            cosmiqLogo _eq_ newMeshes[0]_sm_\t\t\t\t\t\tcosmiqLogo.position.y _eq_ 54_sm_            cosmiqLogo.position.z _eq_ 320_sm_            cosmiqLogo.scaling.x _eq_ 14.2_sm_            cosmiqLogo.scaling.y _eq_ 14.2_sm_            cosmiqLogo.scaling.z _eq_ 14.2_sm_\t\t\t\t\t\tcosmiqLogo.material _eq_ videoMat_sm_\t\t\tcosmiqLogo.emissiveColor _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\t\t\tcosmiqLogo.ambientColor _eq_ new BABYLON.Color3(1_co_ 0.2_co_ 0.7)_sm_\t\t\t})_sm_\t\t\t\t\t\t\t\t\t//Skybox\t\t\tvar skybox _eq_ BABYLON.Mesh.CreateBox(_qt_skyBox_qt__co_ 10000.0_co_ scene)_sm_\t\t\tvar skyboxMaterial _eq_ new BABYLON.StandardMaterial(_qt_skyBox_qt__co_ scene)_sm_\t\t\tskyboxMaterial.backFaceCulling _eq_ false_sm_\t\t\tskyboxMaterial.reflectionTexture _eq_ new BABYLON.CubeTexture(_qt_textures/skybox_qt__co_ scene)_sm_\t\t\tskyboxMaterial.reflectionTexture.coordinatesMode _eq_ BABYLON.Texture.SKYBOX_MODE_sm_\t\t\tskybox.infiniteDistance _eq_ true_sm_\t\t\tskyboxMaterial.diffuseColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_\t\t\tskyboxMaterial.specularColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_\t\t\tskybox.material _eq_ skyboxMaterial_sm_            //Video material            var videoMat _eq_ new BABYLON.StandardMaterial(_qt_textVid_qt__co_ scene)_sm_            videoMat.diffuseTexture _eq_ new BABYLON.VideoTexture(_qt_video_qt__co_ [_qt_textures/alien_ocean.mp4_qt_]_co_ 256_co_ scene_co_ false)_sm_            videoMat.backFaceCulling _eq_ false_sm_                    // Ground            var plane _eq_ BABYLON.Mesh.CreateBox(_qt_box_qt__co_ 6.0_co_ scene)_sm_            plane.position.y _eq_ -10_sm_\t\t\tplane.scaling.x _eq_ 240_sm_\t\t\tplane.scaling.z _eq_ 240_sm_             plane.setPhysicsState({impostor_dd_ BABYLON.PhysicsEngine.BoxImpostor_co_ mass_dd_ 0_co_ friction_dd_ 300_co_ restitution_dd_ 1.5})_sm_\t\t\tplane.checkCollisions _eq_ true_sm_                    // Materials                    var simpleMaterial _eq_ new BABYLON.StandardMaterial(_qt_texture2_qt__co_ scene)_sm_            simpleMaterial.diffuseColor _eq_ new BABYLON.Color3(1_co_ 0_co_ 0)_sm_//Red                             //Creation of a mirror material             var mirrorMaterial _eq_ new BABYLON.StandardMaterial(_qt_texture4_qt__co_ scene)_sm_             mirrorMaterial.diffuseColor _eq_ new BABYLON.Color3(0.4_co_ 0.4_co_ 0.4)_sm_             mirrorMaterial.reflectionTexture _eq_ new BABYLON.MirrorTexture(_qt_mirror_qt__co_ 1024_co_ scene_co_ true)_sm_              mirrorMaterial.reflectionTexture.mirrorPlane _eq_ new BABYLON.Plane(0_co_ -1.0_co_ 0_co_ -10.0)_sm_             mirrorMaterial.reflectionTexture.renderList _eq_ [sphere2_co_ skybox_co_ knot_co_ sphere3_co_ cosmiqLogo]_sm_             mirrorMaterial.reflectionTexture.level _eq_ 0.6_sm_                     //Sphere meshes             sphere2.subMeshes _eq_ []_sm_             var verticesCount _eq_ sphere2.getTotalVertices()_sm_                     sphere2.subMeshes.push(new BABYLON.SubMesh(0_co_ 0_co_ verticesCount_co_ 0_co_ 900_co_ sphere2))_sm_             sphere2.subMeshes.push(new BABYLON.SubMesh(1_co_ 0_co_ verticesCount_co_ 900_co_ 900_co_ sphere2))_sm_             sphere2.subMeshes.push(new BABYLON.SubMesh(2_co_ 0_co_ verticesCount_co_ 1800_co_ 2088_co_ sphere2))_sm_                            //Applying materials            plane.material _eq_ mirrorMaterial_sm_\t\t\t\t\t\t\t\t\t//Music \t\t\t// Load the sound and play it automatically once ready\t\t\tvar music _eq_ new BABYLON.Sound(_qt_Music_qt__co_ _qt_Beautiful.mp3_qt__co_ scene_co_  function () {            // Sound has been downloaded &amp_sm_ decoded                music.play()_sm_            })_sm_\t\t\t            return scene_sm_\t\t\t\t\t\t        }                var scene _eq_ createScene()_sm_        engine.runRenderLoop(function () {\t\t\t            scene.render()_sm_        })_sm_        // Resize        window.addEventListener(_qt_resize_qt__co_ function () {            engine.resize()_sm_        })_sm_    &lt_sm_/script&gt_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-02-10T20:04:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_babylon.js_dd_3 BJS - [09_dd_46_dd_46]_dd_ Valid manifest file not found. _lt_a href_eq__qt_?1423583206131_qt__gt_http_dd_//www.cosmiqclo...t?1423583206131_lt_/a_gt_ Failed to load resource_dd_ the server responded with a status of 404  Scene &amp_sm_ textures will be loaded directly from the web server._lt_/pre_gt__lt_p_gt_Don_t_t worry_co_ everything is ok _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ It is because your file manifest has not been found. More info here _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_22231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/page.php?p_eq_22231_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strike_gt_For the mirror_co_ did you check the _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_22161_qt_ rel_eq__qt_external nofollow_qt__gt_doc ?_lt_/a_gt__lt_/strike_gt_ Yes you did. So it_t_s more a JS problem than Babs problem._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Actually_co_ whern you do this _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_mirrorMaterial.reflectionTexture.renderList _eq_ [sphere2_co_ skybox_co_ knot_co_ sphere3_co_ cosmiqLogo]_sm_ _lt_/pre_gt__lt_p_gt_comsiqLogo is not fully loaded by ImportMesh (asynchronous)_co_ so you have to create your mirror in the calback function of importmesh._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"nomadic_aviator","Date":"2015-02-11T15:42:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Temechon_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you for your reply. I followed the instructions with the manifest file and I no longer see the error. However_co_ the mesh still doesn_t_t appear in Firefox._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I assume it is the browser and not so much babylon.js as it appears in other browsers just fine. Is there any type of fix for that_co_ or is that something I will have to live with._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ I am a bit of a babylon newbie_co_ so is there any type of documentation on creating a mirror in the callback_co_ or is it the same as the mirror I created. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Again_co_ thanks for you help. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-02-11T16:13:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Your problem is the logo scaling._lt_/p_gt__lt_p_gt_Try replacing this _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_cosmiqLogo.scaling.x _eq_ 14.2_sm_cosmiqLogo.scaling.y _eq_ 14.2_sm_cosmiqLogo.scaling.z _eq_ 14.2_sm__lt_/pre_gt__lt_p_gt_with this _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_cosmiqLogo.scaling.x _eq_ 1_sm_cosmiqLogo.scaling.y _eq_ 1_sm_cosmiqLogo.scaling.z _eq_ 1_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-02-11T16:54:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi nomad - welcome to BJS forum. Interesting looking creation._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a couple of questions_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Q1. What exactly am I looking for with this imported mesh? I tested the scene with Chrome and FF on Windows XP machine _co_ and Chrome_co_ IE_co_ FF on Win7 machine and the scene looks the same to me. Maybe I_t_m missing something subtle_co_ so be nice to know exactly what this mesh looks like._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Q2. I_t_ve said many times on this forum that I_t_m no javascript coder by any stretch of the imagination_co_ but one thing in your code strikes me as odd. In the_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var cosmiqLogo _eq_ BABYLON.SceneLoader.ImportMesh( ...._lt_/pre_gt__lt_p_gt_callback function you have a line _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_cosmiqLogo.material _eq_ videoMat_sm__lt_/pre_gt__lt_p_gt_yet that material is not defined before the ImportMesh call or within the callback function. Rather it is defined _lt_u_gt_after_lt_/u_gt_ the ImportMesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It seems to be a video - and I don_t_t see any video in the scene in any browser/OS._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As I said_co_ I_t_m not a javascript coder so maybe Q2 is irrelevant as I_t_m sure the coder will point out _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"nomadic_aviator","Date":"2015-02-12T02:06:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi gryff_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for the comment. I know the scene looks weird_co_ but I am really figuring out how elements of Babylon.js work.  I actually have a plan to create something not so weird as soon as I figure this portion out_co_ so bear with my weirdness for a little bit.   _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The mesh appears as a cloud with a star in it_co_ much like the cloud logo I have up top. The video mesh is just me figuring out how video textures work. That is a video of an ocean. I am a bit new to JavaScript_co_ so where exactly should I put the videoMat?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ I tried the scaling change that Temechon suggested_co_ which worked_co_ but now the mesh is very small. I created it in Blender_co_ so I will probably fix the scaling on that end._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]