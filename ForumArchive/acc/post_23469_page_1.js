[{"Owner":"N1warhead","Date":"2016-06-28T00:31:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey guys_co_ I am just plainly getting fed up with this_co_ sorry for saying that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut here_t_s the main issue_co_ and I swear it just has to be a bug.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOkay_co_ I can load up a babylon scene file of my mesh_co_ okay works perfectly fine. I can do it with SceneLoader.Load and ImportMesh. Works perfectly fine. However_co_ the second I try to export an Animation from max (with the Exporter). It goes crazy_co_ it no longer recognizes the \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_engine.runRenderLoop(function () {\n\t\t\t    scene.render()_sm_\n\t\t\t})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tWith both Load and ImportMesh. I just plainly don_t_t know what else to do. it works in SandBox. But it refuses to load on the Website. Well it says it creates the model (via console log). But it just plainly doesn_t_t like the above snipper of code_co_ it keeps saying Camera isn_t_t defined. When it fact it is (I created one in Max Scene)_co_ I also try to create one via code_co_ and it just crashes and says it doesn_t_t recognize any of this \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ //  var camera _eq_ new BABYLON.FreeCamera(_t_camera1_t__co_ new BABYLON.Vector3(0_co_ 5_co_ -10)_co_ scene)_sm_\n\t\t\t          //   camera.attachControl(canvas_co_ false)_sm_\n\t\t\t           //    scene.camera _eq_ camera_sm_\n\t\t\t            //   scene.activeCamera.attachControl(canvas)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tYes they are commented out_co_ because it doesn_t_t like them.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn fact 95% of my code is commented out because it doesn_t_t like any of these two things\n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_pre_gt_\n_lt_code_gt_ // BABYLON.SceneLoader.Load(_qt__qt__co_ _qt_Model/WomanBabylonConvert/Woman.babylon_qt__co_ engine_co_ function (scene) {\n\t\t\t    BABYLON.SceneLoader.ImportMesh(_qt_character1_qt__co_ _qt_AnimationStock/_qt__co_ _qt_Woman.babylon_qt__co_ scene_co_ function (newMeshes_co_ particleSystems_co_ skeletons) {_lt_/code_gt__lt_/pre_gt_\n\t_lt_span style_eq__qt_background_dd_url(&quot_sm_//www.html5gamedevs.com/applications/core/interface/ckeditor/ckeditor/plugins/widget/images/handle.png&quot_sm_)_sm__qt__gt__lt_/span_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tHere is the entire code.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ window.addEventListener(_t_DOMContentLoaded_t__co_ function(){\n\n            var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\n\t\t\tvar engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n    \n\n\n\t\t\tvar createScene _eq_ function () {\n\n\t\t\t    var scene _eq_ new BABYLON.Scene(engine)_sm_\n\n\t\t\t   // BABYLON.SceneLoader.Load(_qt__qt__co_ _qt_Model/WomanBabylonConvert/Woman.babylon_qt__co_ engine_co_ function (scene) {\n\t\t\t    BABYLON.SceneLoader.ImportMesh(_qt_character1_qt__co_ _qt_AnimationStock/_qt__co_ _qt_Woman.babylon_qt__co_ scene_co_ function (newMeshes_co_ particleSystems_co_ skeletons) {\n\t\t\t        // Wait for textures and shaders to be ready\n\t\t\t        var mesh _eq_ newMeshes[0]_sm_\n\t\t\t        mesh.rotation.y _eq_ Math.PI_sm_\n\t\t\t        mesh.position _eq_ new BABYLON.Vector3(0_co_ 0_co_ 0)_sm_\n\t\t\t        scene.beginAnimation(skeletons[0]_co_ 0_co_ 100_co_ true_co_ 1.0)_sm_\n\n\t\t\t        scene.executeWhenReady(function () {\n\t\t\t            // Attach camera to canvas inputs\n\t\t\t            var light _eq_ new BABYLON.HemisphericLight(_qt_hemi_qt__co_ new BABYLON.Vector3(1_co_ 0_co_ 1)_co_ scene)_sm_\n\t\t\t          //  var camera _eq_ new BABYLON.FreeCamera(_t_camera1_t__co_ new BABYLON.Vector3(0_co_ 5_co_ -10)_co_ scene)_sm_\n\t\t\t          //   camera.attachControl(canvas_co_ false)_sm_\n\t\t\t           //    scene.camera _eq_ camera_sm_\n\t\t\t            //   scene.activeCamera.attachControl(canvas)_sm_\n\t\t\t           // var mesh _eq_ scene.mesh_sm_\n\t\t\t            //mesh.position _eq_ new BABYLON.Vector3(0_co_ 0_co_ -8)_sm_\n\t\t\t           // var sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_sphere1_qt__co_ 16_co_ 2_co_ scene)_sm_\n\t\t\t           // scene.meshes[0].scaling _eq_ new BABYLON.Vector3(1_co_ 1_co_ 1)_sm_\n\t\t\t            //mesh.scaling _eq_ new BABYLON.Vector3(20_co_ 20_co_ 20)_sm_\n\t\t\t             //  console.log(scene.cameras[0])_sm_\n\t\t\t            console.log(scene.meshes[0])_sm_\n\n\t\t\t            //scene.meshes[0].convertToFlatShadedMesh()_sm_\n\t\t\t            //scene.meshes[0].showBoundingBox _eq_ true_sm_\n\t\t\t            light.groundColor _eq_ new BABYLON.Color3(0.2_co_ 0_co_ 0.3)_sm_\n\t\t\t            var ground _eq_ BABYLON.Mesh.CreateGround(_t_ground1_t__co_ 6_co_ 6_co_ 2_co_ scene)_sm_\n\t\t\t            // Once the scene is loaded_co_ just register a render loop to render it\n\t\t\t            //  engine.runRenderLoop(function () {\n\t\t\t            //      scene.render()_sm_\n\t\t\t            // })_sm_\n\t\t\t        })_sm_\n\t\t\t    }_co_ function (progress) {\n\t\t\t        // To do_dd_ give progress feedback to user\n\t\t\t    })_sm_\n\t\t\t    return scene_sm_\n\n\t\t\t}\n\n\t\t\tvar scene _eq_ createScene()_sm_\n\n                // Once the scene is loaded_co_ just register a render loop to render it\n\t\t\tengine.runRenderLoop(function () {\n\t\t\t    scene.render()_sm_\n\t\t\t})_sm_\n    \n   // window.addEventListener(_qt_resize_qt__co_ function () {\n  //      scene.resize()_sm_\n //   })_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI seriously don_t_t know what else to do. All I am trying to do is load a .babylon file that has an Animation... (IT WORKS WITHOUT ANIMATION). But not with an animation. Please help me.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry if I sounded kinda rude_co_ been at this single problem for 14 hours today.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"N1warhead","Date":"2016-06-28T01:44:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGo ahead and delete this mods.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI got it working_co_ and don_t_t even know how I got it working.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust started over_co_ for the fourth time and now it works.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-06-28T01:56:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_lt_br /_gt_\n\tGood to hear after 14h you get it to work_lt_br /_gt_\n\tJust a quick note_dd__lt_br /_gt_\n\tYou add your scene (importmesh) to the one you are creating  as\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmore global var(iable) scene _eq_ ect._co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tno need to add extras like light etc. in the scene that you are importing_co_ when you already export them_lt_br /_gt_\n\tthrough your 3d Program. you are run in troubels if your add new extras/objects/function and calls when their are scoped_co_ and not visible by the global scene_lt_br /_gt__lt_a href_eq__qt_http_dd_//www.w3schools.com/js/js_scope.asp_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.w3schools.com/js/js_scope.asp_lt_/a_gt__lt_br /_gt__lt_br /_gt__lt_span style_eq__qt_color_dd_rgb(248_co_248_co_242)_sm_font-family_dd_monospace_co_ monospace_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(35_co_36_co_31)_sm_float_dd_none_sm__qt__gt_scene.executeWhenReady(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(249_co_38_co_114)_sm_font-family_dd_monospace_co_ monospace_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm__qt__gt__lt_span style_eq__qt_font-weight_dd_bold_sm_color_dd_rgb(102_co_217_co_239)_sm__qt__gt_function_lt_/span_gt_ _lt_span style_eq__qt_color_dd_rgb(248_co_248_co_242)_sm__qt__gt_()_lt_/span_gt_ {_lt_/span_gt__lt_br /_gt_\n\tis just a control structures like if else_lt_br /_gt_\n\tif importmesh has fully loaded then do stuff._lt_br /_gt_\n\t beginanimation should be in the scope of executeWhenReady ..._lt_br /_gt__lt_br /_gt_\n\tbest\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]