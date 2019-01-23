[{"Owner":"jangbi","Date":"2018-05-10T13:54:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#242729_sm_font-size_dd_15px_sm_text-align_dd_left_sm__qt__gt_I want to create new mesh before each render_co_ here_t_s my code_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let snake _eq_ [\n    sphere1_co_\n    sphere2_co_\n    sphere3\n]_sm_\n\n(function(){\n    let counter _eq_ 4_sm_\n    scene.registerBeforeRender(function(){\n        let newOne _eq_ BABYLON.MeshBuilder.CreateSphere(\n            _qt_sphere_qt_ + counter_co_\n            {\n\n            }_co_\n            scene\n        )_sm_\n        let head _eq_ snake[0]_sm_\n        newOne.position _eq_ head.position_sm_\n        newOne.position.x +_eq_ 0.02_sm_\n        snake.unshift(newOne)_sm_\n        ++counter_sm_\n    })_sm_\n})()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tMy expecting behavior is to create a series of spheres_co_ each position.x is slightly higher than the previous one. However_co_ there are only three meshes in the scene after rendering_co_ like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_enter image description here_qt_ src_eq__qt_https_dd_//i.stack.imgur.com/EcURq.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to know what is wrong with my code_co_ and how to implement it properly?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy the way_co_ what is the difference between scene.removeMesh(mesh) and mesh.dispose()?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s the relative link in stackoverflow_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//stackoverflow.com/questions/50235364/create-mesh-before-render-in-babylon-js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//stackoverflow.com/questions/50235364/create-mesh-before-render-in-babylon-js_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-10T16:15:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tscene.removeMesh will just remove the mesh from the scene but the mesh still exists\n_lt_/p_gt_\n\n_lt_p_gt_\n\twith dispose_co_ the mesh will be disposed AND removed from the scene\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn your case I suggest this slightly change_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_newOne.position _eq_ head.position.clone()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jangbi","Date":"2018-05-11T04:46:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ Thanks for your answer_co_ but as for my first question_co_ I expected that will produce a series of spheres_co_ but there_t_re only three spheres existed all the time_co_ I want to know what_t_s wrong with my implementation.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-11T15:15:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou should provide a repro in the PG_dd_ it helps a lot to get a fast answer _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Just by running your code I think it will crash after 3 tries as the snake array will be empty so on the 4th call snake[0] will be undefined and then it will crash. You should definitely check your console to see if there is an exception_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jangbi","Date":"2018-05-12T06:34:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_    let canvas_co_\n        engine_co_\n        camera_co_\n        scene_sm_\n\n    function initEngine(){\n        canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\n        engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n    }\n\n    function createScene(){\n        initEngine()_sm_\n\n        let scene _eq_ new BABYLON.Scene(engine)_sm_\n\n        camera _eq_ new BABYLON.ArcRotateCamera(_qt_camera_qt__co_ Math.PI / 2_co_ Math.PI / 2_co_ 4_co_ BABYLON.Vector3.Zero()_co_ scene)_sm_\n        camera.attachControl(canvas_co_ true)_sm_\n        \n\n        let light1 _eq_ new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(0_co_1_co_0)_co_ scene)_sm_\n\n        let ground _eq_ BABYLON.MeshBuilder.CreateGround(\n            _qt_ground_qt__co_\n            {\n                width_dd_30_co_\n                height_dd_30\n            }_co_\n            scene\n        )_sm_\n\n        ground.position.y -_eq_ 0.5_sm_\n\n        let sphere1 _eq_ BABYLON.MeshBuilder.CreateSphere(\n            _qt_sphere1_qt__co_\n            {\n\n            }_co_\n            scene\n        )_sm_\n\n        let sphere2 _eq_ sphere1.clone(_qt_sphere2_qt_)_sm_\n        let sphere3 _eq_ sphere1.clone(_qt_sphere3_qt_)_sm_\n\n        sphere1.position.z _eq_ -18_sm_\n        sphere2.position.z _eq_ -19_sm_\n        sphere3.position.z _eq_ -20_sm_\n\n        let snake _eq_ [\n            sphere1_co_\n            sphere2_co_\n            sphere3\n        ]_sm_\n\n        (function(){\n            let counter _eq_ 4_sm_\n            scene.registerBeforeRender(function(){\n                let newOne _eq_ BABYLON.MeshBuilder.CreateSphere(\n                    _qt_sphere_qt_ + counter_co_\n                    {\n\n                    }_co_\n                    scene\n                )_sm_\n                let head _eq_ snake[0]_sm_\n                newOne.position _eq_ head.position_sm_\n                newOne.position.x +_eq_ 0.02_sm_\n                snake.unshift(newOne)_sm_\n                ++counter_sm_\n            })_sm_\n        })()_sm_\n\n        window.addEventListener(_qt_resize_qt__co_ function(){\n            engine.resize()_sm_\n        })_sm_\n\n        return scene_sm_\n    }\n\n    scene _eq_ createScene()_sm_\n    \n    engine.runRenderLoop(function(){\n        // box.position.z +_eq_ 0.01_sm_\n        scene.render()_sm_\n    })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_Here_t_s the minimal demo.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-14T20:12:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jangbi","Date":"2018-05-15T16:21:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ What_t_s the meaning of this link?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-15T17:21:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is the link to the playground to underline my remark_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents ipsClearfix_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__t_display_dd_ inline !important_sm_ float_dd_ none_sm_ background-color_dd_ transparent_sm_ color_dd_ rgb(53_co_ 60_co_ 65)_sm_ font-family_dd_ _qt_Roboto_qt__co__qt_Helvetica Neue_qt__co_Helvetica_co_Arial_co_sans-serif_sm_ font-size_dd_ 14px_sm_ font-style_dd_ normal_sm_ font-variant_dd_ normal_sm_ font-weight_dd_ 400_sm_ letter-spacing_dd_ normal_sm_ orphans_dd_ 2_sm_ text-align_dd_ left_sm_ text-decoration_dd_ none_sm_ text-indent_dd_ 0px_sm_ text-transform_dd_ none_sm_ -webkit-text-stroke-width_dd_ 0px_sm_ white-space_dd_ normal_sm_ word-spacing_dd_ 0px_sm__t__gt_You should provide a repro in the Playground_dd_ it helps a lot to get a fast answer_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jangbi","Date":"2018-05-16T04:46:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#RLJDN8_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#RLJDN8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Magilla","Date":"2018-05-16T06:10:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI tried to start putting debugging statements into that playground example_co_ but it runs so poorly_co_ it keeps crashing my browser.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-05-16T07:01:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmmmhh.. I didn_t_t test your PG but it looks like you create a new mesh each frame with no stop condition. This means_co_ every 16 ms_co_ a new instance is allocated in memory. This would crash very quickly any browser imho.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jangbi","Date":"2018-05-16T15:18:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31362-magilla/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31362_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31362-magilla/_qt_ rel_eq__qt__qt__gt_@Magilla_lt_/a_gt_ I know what you guys mean. But my point is_co_ my expecting code behavior is to generate a series of spheres instead of just 3. And if you add snake.pop().dispose() before each render_co_ you will see there_t_s only one sphere_co_ not three.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-16T17:13:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat has nothing to do with BJS. Purely a JS question_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#RLJDN8#2_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#RLJDN8#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jangbi","Date":"2018-05-17T15:38:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//stackoverflow.com/questions/50235364/create-mesh-before-render-in-babylon-js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//stackoverflow.com/questions/50235364/create-mesh-before-render-in-babylon-js_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs my explanation correct?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-17T16:36:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyes _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]