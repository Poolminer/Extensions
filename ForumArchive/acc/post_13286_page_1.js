[{"Owner":"neshke89","Date":"2015-03-21T18:47:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m trying to create a room with a panel on a wall which is movable. I_t_m getting laggy movement with this code_co_ do anyone have any suggestions_dd__lt_br_gt__lt_a href_eq__qt_http_dd_//prntscr.com/6jlj3y_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//prntscr.com/6jlj3y_lt_/a_gt__lt_br_gt__lt_br_gt_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var createScene _eq_ function (engine) {    if (BABYLON.Engine.isSupported()) {        BABYLON.SceneLoader.Load(_qt_Resources/Models/_qt__co_ _qt_scene1.babylon_qt__co_ engine_co_ function (newScene) {            // Wait for textures and shaders to be ready             newScene.executeWhenReady(function () {                // Attach camera to canvas inputs                window.scene _eq_ newScene_sm_                 newScene.activeCamera.attachControl(window.canvas)_sm_                window.canvas.addEventListener(_qt_pointerdown_qt__co_ onPointerDown_co_ false)_sm_                window.canvas.addEventListener(_qt_pointerup_qt__co_ onPointerUp_co_ false)_sm_                window.scene.onDispose _eq_ function () {                    window.canvas.removeEventListener(_qt_pointerdown_qt__co_ onPointerDown)_sm_                    window.canvas.removeEventListener(_qt_pointerup_qt__co_ onPointerUp)_sm_                    window.canvas.removeEventListener(_qt_pointermove_qt__co_ onPointerMove)_sm_                }                window.scene.collisionsEnabled _eq_ true_sm_                window.scene.getMeshByName(elementNames.Floor).checkCollisions _eq_ true_sm_                window.scene.getMeshByName(elementNames.SideWall).checkCollisions _eq_ true_sm_                // BaseWall textures                baseWall _eq_ window.scene.getMeshByName(elementNames.BaseWall)_sm_                var baseWallMaterial _eq_ new BABYLON.StandardMaterial(_qt_wall-texture_qt__co_ window.scene)_sm_                var baseWallTexture _eq_ new BABYLON.Texture(_qt_../../../Resources/Textures/wall-texture-1.jpg_qt__co_ window.scene)_sm_                baseWallTexture.uScale _eq_ 13.0_sm_                baseWallTexture.vScale _eq_ 13.0_sm_                baseWallMaterial.diffuseTexture _eq_ baseWallTexture_sm_                baseWall.type _eq_ elementTypes.Wall_sm_                if (baseWall.material.diffuseTexture) {                    baseWall.material.diffuseTexture.dispose()_sm_                }                 baseWall.material _eq_ baseWallMaterial_sm_                 addPanel()_sm_                // Once the window.scene is loaded_co_ just register a render loop to render it                engine.runRenderLoop(function () {                    window.scene.render()_sm_                })_sm_            })_sm_        })_sm_    }}function addPanel() {    $.ajax({        type_dd_ _qt_GET_qt__co_        url_dd_ _qt_get-selected-panel_qt__co_        success_dd_ function (data) {            var response _eq_ JSON.parse(data)_sm_            if (response.Successful) {                var meshName _eq_ response.Data.panelName.concat(_qt_.babylon_qt_)_sm_                var preTexture _eq_ _qt_../../../Resources/Textures/_qt__sm_                var textureName _eq_ preTexture.concat(response.Data.panelTexture).concat(_qt_.jpg_qt_)_sm_                BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_Resources/Models/_qt__co_ meshName_co_ window.scene_co_ function (meshes) {                    if (window.scene !_eq_ null) {                        // var panelMaterial _eq_ new BABYLON.StandardMaterial(_qt_material_qt__co_ window.scene)_sm_                        // panelMaterial.diffuseTexture _eq_ new BABYLON.Texture (textureName_co_window.scene)_sm_                        // panelMaterial.diffuseTexture.uScale _eq_ 5.0_sm_                        // panelMaterial.diffuseTexture.vScale _eq_ 5.0_sm_                        meshes.forEach(function (mesh) {                            //   mesh.position _eq_ window.scene.activeCamera.getTarget()_sm_                            //   mesh.material _eq_ panelMaterial_sm_                            mesh.type _eq_ elementTypes.Panel_sm_                            mesh.checkCollisions _eq_ true_sm_                        })_sm_                    }                })_sm_            }            else {                alert(response.Error)_sm_            }        }    })}var getReferentPosition _eq_ function (elementType) {    // Use a predicate to get position on the baseWall    var pickinfo _eq_ window.scene.pick(window.scene.pointerX_co_ window.scene.pointerY_co_ function (mesh) {            return mesh _eq__eq_ baseWall_sm_        //        else if (elementType _eq__eq_ elementTypes.Movable) {       // }    })_sm_    if (pickinfo.hit) {        return pickinfo.pickedPoint_sm_    }    return null_sm_}var onPointerDown _eq_ function (evt) {    if (evt.button !_eq__eq_ 0) {        return_sm_    }    // check if we are under a mesh    var pickInfo _eq_ window.scene.pick(window.scene.pointerX_co_ window.scene.pointerY_co_ function (mesh) {        /*        if (!mesh.hasOwnProperty(_qt_type_qt_) || mesh.type _eq__eq_ null) {            return false_sm_        }        if (mesh.type _eq__eq_ elementTypes.Panel) {        */            return mesh !_eq__eq_ baseWall_sm_        /*        }        else if (mesh.type _eq__eq_ elementTypes.Panel) {            return mesh !_eq__eq_ window.scene.getMeshByName(elementNames.Panel1)_sm_        }        else {            return false_sm_        }        */    })_sm_    if (pickInfo.hit) {        window.currentMesh _eq_ pickInfo.pickedMesh_sm_        console.log(window.currentMesh)_sm_        window.startingPoint _eq_ getReferentPosition(window.currentMesh.type)_sm_        window.canvas.addEventListener(_qt_pointermove_qt__co_ onPointerMove_co_ false)_sm_    }}var onPointerUp _eq_ function () {    if (window.startingPoint) {        window.startingPoint _eq_ null_sm_        window.currentMesh _eq_ null_sm_        window.canvas.removeEventListener(_qt_pointermove_qt__co_ onPointerMove)_sm_    }}var onPointerMove _eq_ function (evt) {    console.log(window.currentMesh)_sm_    if (!window.startingPoint || !window.currentMesh) {        return_sm_    }    var current _eq_ getReferentPosition(window.currentMesh.type)_sm_    if (!current) {        return_sm_    }    var diff _eq_ current.subtract(window.startingPoint)_sm_    //diff.z _eq_ 0_sm_    //diff.y _eq_ 0_sm_//   window.currentMesh.position.x +_eq_ diff.x_sm_     window.currentMesh.moveWithCollisions(diff)_sm_    window.startingPoint _eq_ current_sm_    /*    var current _eq_ getReferentPosition(window.currentMesh.type)_sm_    if (!current) {        return_sm_    }    var diff _eq_ current.subtract(window.startingPoint)_sm_    if (window.currentMesh.type _eq__eq_ elementTypes.Movable) {        diff.x _eq_ 0_sm_        diff.z _eq_ 0_sm_        window.currentMesh.position.y +_eq_ diff.y_sm_        //    window.currentMesh.moveWithCollisions(diff)_sm_    }    else if (window.currentMesh.type _eq__eq_ elementTypes.Panel) {        console.log(_qt_panel_qt_)_sm_        //diff.y _eq_ 0_sm_       // diff.z _eq_ 0_sm_        console.log(window.currentMesh.checkCollisions)_sm_        window.currentMesh.position.x +_eq_ diff.x_sm_        // window.currentMesh.moveWithCollisions(diff)_sm_    }    */}_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-21T19:08:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Can you share it on the Playground. We will be able to update the code then _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"neshke89","Date":"2015-03-21T22:03:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_is it possible to upload files to playground? As I_t_m loading scene and mesh from 3d Max exported files_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-22T11:54:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi neshke89_co_ welcome to the forum!   No_co_ it is not yet possible to import .babylon files at the playground.  I hear it_t_s CORS related.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo be perfectly frank_co_ we don_t_t see many users attempt dragging of a vertical mesh (panel) along a vertical wall (basewall).  You present us with a fun and adventurous challenge.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was going to make a testing playground FOR you_co_ but I figured I would give you a chance to try it_co_ first.  Your problem is within the pick and move areas_co_ so you can use ANY mesh/scene for testing that section_co_ right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ if you would like to build a playground test scene... head for here... _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/?1_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/?1_lt_/a_gt_  Don_t_t worry.  It is impossible to accidentally over-write/damage any of our pre-built playground scenes.  You can use ANY of them... as starters for your own _qt_Custom_qt_ playground scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRemove the sphere_co_ leave the ground.  Add two CreatePlanes or flat-scaled boxes (sidewall and basewall)_co_ and get them into proper position with the ground/floor.  Then make one more plane/flatbox (your panel)_co_  and position it on the basewall_co_ just like your picture above. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAside_dd_  Are the popup intellisense windows in the playground... annoying?  I hear ya.  Just swear alot_co_ like I do.  It somehow helps.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  I_t_m currently researching a way to do a in-scene-code _lt_em_gt_popup.style.display _eq_ _qt_none_qt__lt_/em_gt_... for those intellisense poppers.  Ok_co_ back on topic...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSave often... and don_t_t accidentally hit control-r (reload) or you will lose your recent changes.  Always click the RUN button for scene testing.  Zip it and take the scene to your home computer_co_ if you wish.  When done_co_ paste the code back into a playground (maybe after hitting a CLEAR button)... and save it_co_ then tell us the URL of that SAVE.  (and maybe bookmark it for yourself_co_ too)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEvery time you SAVE in the playground_co_ the playground issues a new URL for your custom playground scene.  You_t_ll see it change after every SAVE.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEasy. Now you have your test scene.  Next_co_ install your picking/dragging code_co_ (likely removing references to _qt_window_qt_).  You are probably using Window to store things... because of scope issues.  (I hear you.  I_t_ve had MANY scope issues in my projects).  But_co_ if I were you_co_ I would _lt_u_gt_try to_lt_/u_gt_ eliminate all _qt_Window_qt_ references.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI recently did a playground for a somewhat-similar issue that Vahith was having.  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1TZI08%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1TZI08#1_lt_/a_gt_  Although this playground demo is using on-the-ground pick and drag... it might still be an easy _qt_starter scene_qt_ for you. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt minimum_co_ it might show some functions/examples that don_t_t use Window.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKeep editing your playground scene and hitting RUN_co_ doing saves as often as you like.  Get that playground to be as similar to your scene... as possible.  You essentially have 4 mesh... which are quite easy to create (for a testing scene) without needing a .babylon import. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tGood luck.  Ask questions if you get stuck... we_t_re here for you_co_ and when you get your little playground demo completed_co_ we will all be able to test your vertical dragging and see what it_t_s problem is.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSound good?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"neshke89","Date":"2015-03-22T23:34:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_First of all_co_ I must say WOW. I did not expect that much detailed answer I must thank you for your help. Regarding my problem_co_ I can manage meshes to move_co_ but performance is what is troubling me. Because of loading meshes i couldn_t_t set up playground_co_ but you can see code in action here (I will post whole source code below)_dd_ _lt_a href_eq__qt_http_dd_//configurator.devbox9.com/en/configurator_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//configurator.devbox9.com/en/configurator_lt_/a_gt_. _lt_br_gt_My problems are_dd__lt_/p_gt__lt_p_gt_Why is there no collision detection between two panels?_lt_/p_gt__lt_p_gt_Why does moving items sometimes stops working (between two self_co_ sometimes between panel and wall)?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ I_t_m going to open a newthread because I_t_m getting these two errors_dd__lt_/p_gt__lt_p_gt__lt_span_gt__lt_span_gt_-Image corrupt or truncated_dd_ blob_dd__lt_a href_eq__qt_http_dd_//configurator.devbox9.com/2236e2f7-c4ac-423f-be06-248962949285_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//configurator.devbox9.com/2236e2f7-c4ac-423f-be06-248962949285_lt_/a_gt__lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt_-_lt_span_gt__lt_span_gt_ NS_ERROR_NOT_AVAILABLE - this results in textures not loading_co_ I haven_t_t had no luck googling this_lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt_As you said that no one did moving panel on walls before - here_t_s source code that can serve as a guidence_dd__lt_br_gt_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var scene_sm_var canvas_sm_var sceneElements_sm_var currentMesh_sm_var startingPoint_sm_var baseWall_sm_var panel_sm_var basePath _eq_ _qt_Resources/Models/_qt__sm_var elementNames _eq_ {    Floor_dd_ _qt_Floor_Object002_qt__co_    SideWall_dd_ _qt_Box1176_qt__co_    BaseWall_dd_ _qt_Box1175_qt__co_    Panel1_dd_ _qt_wandelement1_qt_}var fileNames _eq_ {    Panel1_dd_ _qt_wandelement1_qt__co_    Panel2_dd_ _qt_wandelement1 (1)_qt__co_    Shelf_800x200_dd_ _qt_Konsolenboden-800x200_qt__co_    Shelf_800x280_dd_ _qt_Konsolenboden-800x280_qt__co_    Shelf_800x350_dd_ _qt_Konsolenboden-800x350_qt__co_    Korpus_800x450x430_dd_ _qt_Korpus-800x450x430_qt_}var elementTags _eq_ {    Panel_dd_ _qt_panel_qt__co_    Shelf_dd_ _qt_shelf_qt_}var elementTypes _eq_ {    Wall_dd_ 0_co_    Panel_dd_ 1_co_    Movable_dd_ 2_co_    New_dd_ 3}var createScene _eq_ function (engine) {    if (BABYLON.Engine.isSupported()) {        BABYLON.SceneLoader.Load(_qt_Resources/Models/_qt__co_ _qt_scene1.babylon_qt__co_ engine_co_ function (newScene) {            // Wait for textures and shaders to be ready            newScene.executeWhenReady(function () {                // Attach camera to canvas inputs                scene _eq_ newScene_sm_                newScene.activeCamera.attachControl(canvas)_sm_                canvas.addEventListener(_qt_pointerdown_qt__co_ onPointerDown_co_ false)_sm_                canvas.addEventListener(_qt_pointerup_qt__co_ onPointerUp_co_ false)_sm_                scene.onDispose _eq_ function () {                    canvas.removeEventListener(_qt_pointerdown_qt__co_ onPointerDown)_sm_                    canvas.removeEventListener(_qt_pointerup_qt__co_ onPointerUp)_sm_                    canvas.removeEventListener(_qt_pointermove_qt__co_ onPointerMove)_sm_                }                scene.collisionsEnabled _eq_ true_sm_                scene.getMeshByName(elementNames.Floor).checkCollisions _eq_ true_sm_                scene.getMeshByName(elementNames.SideWall).checkCollisions _eq_ true_sm_                // BaseWall textures                baseWall _eq_ scene.getMeshByName(elementNames.BaseWall)_sm_                var baseWallMaterial _eq_ new BABYLON.StandardMaterial(_qt_wall-texture_qt__co_ scene)_sm_                var baseWallTexture _eq_ new BABYLON.Texture(_qt_../../../Resources/Textures/wall-texture-1.jpg_qt__co_ scene)_sm_                baseWallTexture.uScale _eq_ 13.0_sm_                baseWallTexture.vScale _eq_ 13.0_sm_                baseWallMaterial.diffuseTexture _eq_ baseWallTexture_sm_                baseWall.type _eq_ elementTypes.Wall_sm_                if (baseWall.material.diffuseTexture) {                    baseWall.material.diffuseTexture.dispose()_sm_                }                baseWall.material _eq_ baseWallMaterial_sm_                addPanel()_sm_                // Once the window.scene is loaded_co_ just register a render loop to render it                engine.runRenderLoop(function () {                    scene.render()_sm_                })_sm_            })_sm_        })_sm_    }}//define global variables$(document).ready(function () {    canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_    var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_    $(_qt_#addShelf_qt_).on(_qt_click_qt__co_ addShelf)_sm_    createScene(engine)_sm_    window.addEventListener(_qt_resize_qt__co_ function () {        engine.resize()_sm_    })_sm_})_sm_function addShelf() {    var meshName _eq_ fileNames.Shelf_800x350_sm_    var meshFileName _eq_ meshName.concat(_qt_.babylon_qt_)_sm_    BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_Resources/Models/_qt__co_ meshFileName_co_ scene_co_ function (meshes) {            console.log(scene)_sm_            if (scene !_eq_ null) {                meshes.forEach(function (mesh) {                    mesh.type _eq_ elementTypes.New_sm_                    mesh.checkCollisions _eq_ true_sm_                    BABYLON.Tags.AddTagsTo(mesh_co_ elementTags.Shelf)_sm_                    mesh.actionManager _eq_ new BABYLON.ActionManager(scene)_sm_                    var panels _eq_ scene.getMeshesByTags(elementTags.Panel)_sm_                    panels.forEach(function (panel) {                        //registering triggers                        mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({                            trigger_dd_ BABYLON.ActionManager.OnIntersectionEnterTrigger_co_                            parameter_dd_ panel                        }_co_ function () {                            console.log(panel.id)_sm_                            mesh.possibleParent _eq_ panel_sm_                        }))_sm_                        mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({                            trigger_dd_ BABYLON.ActionManager.OnIntersectionExitTrigger_co_                            parameter_dd_ panel                        }_co_ function () {                            console.log(panel.id)_sm_                            if (mesh.possibleParent _eq__eq_ panel) {                                mesh.possibleParent _eq_ null_sm_                            }                        }))_sm_                    })_sm_                })_sm_            }        }_co_        function (error) {            console.log(_qt_error_qt_)_sm_            console.log(error)_sm_        })_sm_}function addPanel() {    $.ajax({        type_dd_ _qt_GET_qt__co_        url_dd_ _qt_get-selected-panel_qt__co_        success_dd_ function (data) {            var response _eq_ JSON.parse(data)_sm_            if (response.Successful) {                var meshName _eq_ response.Data.panelName.concat(_qt_.babylon_qt_)_sm_                var preTexture _eq_ _qt_../../../Resources/Textures/_qt__sm_                var textureName _eq_ preTexture.concat(response.Data.panelTexture).concat(_qt_.jpg_qt_)_sm_                BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_Resources/Models/_qt__co_ meshName_co_ scene_co_ function (meshes) {                    if (scene !_eq_ null) {                        // var panelMaterial _eq_ new BABYLON.StandardMaterial(_qt_material_qt__co_ scene)_sm_                        // panelMaterial.diffuseTexture _eq_ new BABYLON.Texture (textureName_co_scene)_sm_                        // panelMaterial.diffuseTexture.uScale _eq_ 5.0_sm_                        // panelMaterial.diffuseTexture.vScale _eq_ 5.0_sm_                        meshes.forEach(function (mesh) {                            //   mesh.position _eq_ scene.activeCamera.getTarget()_sm_                            //   mesh.material _eq_ panelMaterial_sm_                            if (scene.getMeshesByTags(elementTags.Panel).length &gt_sm_ 0) {                                mesh.position.z _eq_ scene.getMeshesByTags(elementTags.Panel)[0].position.z_sm_                            }                            mesh.type _eq_ elementTypes.Panel_sm_                            mesh.checkCollisions _eq_ true_sm_                            BABYLON.Tags.AddTagsTo(mesh_co_ elementTags.Panel)_sm_                        })_sm_                    }                })_sm_            }            else {                alert(response.Error)_sm_            }        }    })}function changeTexture(mesh_co_ textureName) {    var material_sm_    if (mesh.material !_eq_ null) {        material _eq_ mesh.material_sm_    }    else {        material _eq_ new BABYLON.StandardMaterial(_qt_material_qt__co_ scene)_sm_    }    var preTexture _eq_ _qt_../../../Resources/Textures/_qt__sm_    var texturePath _eq_ preTexture.concat(textureName).concat(_qt_.jpg_qt_)_sm_    material.diffuseTexture _eq_ new BABYLON.Texture(texturePath_co_ scene)_sm_    material.diffuseTexture.uScale _eq_ 5.0_sm_    material.diffuseTexture.vScale _eq_ 5.0_sm_    //freeing memory    if (material.diffuseTexture) {        material.diffuseTexture.dispose()_sm_    }    mesh.material _eq_ material_sm_}function takeScreenshot() {    if (scene !_eq_ null) {        BABYLON.Tools.CreateScreenshot(scene.getEngine()_co_ scene.activeCamera_co_ {precision_dd_ 2})_sm_    }}var getReferentPosition _eq_ function (currentMesh) {    console.log(currentMesh.name)_sm_    // Use a predicate to get position on the baseWall    var pickinfo _eq_ scene.pick(scene.pointerX_co_ scene.pointerY_co_ function (mesh) {        if (currentMesh.type _eq__eq_ elementTypes.Panel || currentMesh.type _eq__eq_ elementTypes.New) {            return mesh _eq__eq_ baseWall_sm_        }        else if (currentMesh.type _eq__eq_ elementTypes.Movable) {            if (currentMesh.hasOwnProperty(_qt_parent_qt_) &amp_sm_&amp_sm_ currentMesh.parent !_eq_ null) {                return currentMesh.parent _eq__eq_ mesh_sm_            }        }    })_sm_    if (pickinfo.hit) {        return pickinfo.pickedPoint_sm_    }    return null_sm_}var onPointerDown _eq_ function (evt) {    if (evt.button !_eq__eq_ 0) {        return_sm_    }    // check if we are under a mesh    var pickInfo _eq_ scene.pick(scene.pointerX_co_ scene.pointerY_co_ function (mesh) {        if (!mesh.hasOwnProperty(_qt_type_qt_) || mesh.type _eq__eq_ null) {            return false_sm_        }        if (mesh.type _eq__eq_ elementTypes.Panel || mesh.type _eq__eq_ elementTypes.New) {            return mesh !_eq__eq_ baseWall_sm_        }        else if (mesh.type _eq__eq_ elementTypes.Movable) {            return mesh !_eq__eq_ scene.getMeshByName(elementNames.Panel1)_sm_        }        else {            return false_sm_        }    })_sm_    if (pickInfo.hit) {        currentMesh _eq_ pickInfo.pickedMesh_sm_        if (currentMesh.type _eq__eq_ elementTypes.New) {            scene.getMeshesByTags(elementTags.Panel)[0].material.emissiveColor _eq_ new BABYLON.Color4(0_co_ 1_co_ 0_co_ 1)_sm_        }        startingPoint _eq_ getReferentPosition(currentMesh)_sm_        canvas.addEventListener(_qt_pointermove_qt__co_ onPointerMove_co_ false)_sm_    }}var onPointerMove _eq_ function (evt) {    if (!startingPoint || !currentMesh) {        return_sm_    }    var current _eq_ getReferentPosition(currentMesh)_sm_    if (!current) {        return_sm_    }    var diff _eq_ current.subtract(startingPoint)_sm_    if (currentMesh.type _eq__eq_ elementTypes.Movable) {        diff.x _eq_ 0_sm_        diff.z _eq_ 0_sm_        currentMesh.moveWithCollisions(diff)_sm_        //    currentMesh.moveWithCollisions(diff)_sm_    }    else if (currentMesh.type _eq__eq_ elementTypes.Panel || currentMesh.type _eq__eq_ elementTypes.New) {        diff.z _eq_ 0_sm_        //console.log(currentMesh.checkCollisions)_sm_        currentMesh.moveWithCollisions(diff)_sm_    }    startingPoint _eq_ current_sm_}var onPointerUp _eq_ function () {    if (startingPoint) {        startingPoint _eq_ null_sm_        if (currentMesh.type _eq__eq_ elementTypes.New) {            scene.getMeshesByTags(elementTags.Panel)[0].material.emissiveColor _eq_ new BABYLON.Color4(0_co_ 0_co_ 0_co_ 1)_sm_            //add element to panel            currentMesh.type _eq_ elementTypes.Movable_sm_            if (currentMesh.possibleParent) {                currentMesh.position.x _eq_ currentMesh.possibleParent.getBoundingInfo().boundingBox.center.x_sm_                SetParent(currentMesh_co_ currentMesh.possibleParent)_sm_            }            else {                currentMesh.dispose()_sm_            }            //currentMesh.parent _eq_ panel_sm_            //currentMesh.position.x _eq_ 0_sm_            //currentMesh.position.z _eq_ 0_sm_            //panel.subMeshes.push(mesh)_sm_        }        currentMesh _eq_ null_sm_        canvas.removeEventListener(_qt_pointermove_qt__co_ onPointerMove)_sm_    }}//HELPERSfunction SetParent(child_co_ parent) {    var globalPosition _eq_ child.position_sm_    child.parent _eq_ parent_sm_    var matrix _eq_ new BABYLON.Matrix()_sm_    parent.getWorldMatrix().invertToRef(matrix)_sm_    child.position _eq_ BABYLON.Vector3.TransformCoordinates(globalPosition_co_ matrix)_sm_    child.rotate(BABYLON.Axis.Y_co_ -3.14 / 2_co_ BABYLON.Space.LOCAL)_sm_    var positionX _eq_ parent.getBoundingInfo().boundingBox.center.x_sm_    child.setAbsolutePosition(new BABYLON.Vector3(positionX_co_ child.getAbsolutePosition().y_co_ child.getAbsolutePosition().z))_sm_}_lt_/pre_gt__lt_p_gt_I can post scene and models if someone wish to reproduce_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-23T01:29:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ahh_co_ sorry.   I can_t_t help much with Blender exporting... but maybe others can.  Yes_co_ a bogged-down scene can definitely affect drag-moves and collision detect. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was hoping you could temporarily MAKE all of your meshes in a playground scene_co_ and then we would know if something in the .babylon import was a problem (because the import would not be used in the playground demo). _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You know_co_ make the same scene_co_ but create the meshes with babylonJS_co_ in the playground_co_ and don_t_t import any models.  Then we could test the functionality of your code (in a bare-bones environment).  You know how it goes.  Try turning things off... to find what is causing the scene to be slow. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  A good thing to turn-off... is the importer._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Once you do that_co_ you can ask yourself _qt_Does the scene run much faster/better when simple _qt_local-made_qt_ mesh are used... instead of imported mesh?_qt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If YES_co_ then... you know... something is wrong with the Blender models... or something went goofy during the export_co_ or during the import.  (a problem in the .babylon file or the making-of)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I dunno.  Maybe some experts can spot something in your code.  Good luck._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"neshke89","Date":"2015-03-23T11:17:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yep_co_ I know what you mean. I just wanted to see if I made some rookie mistake_co_ that_t_s why I shared the code. It_t_s interesting issue so I will replicate in playground as soon as I can._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]