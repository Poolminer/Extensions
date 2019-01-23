[{"Owner":"anycast","Date":"2018-10-28T10:38:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m doing an Adobe extension using Adobe CEP (Common Extensibility Platform). Adobe CEP uses CEF to enable HTML5 content within an Adobe application_co_ so any HTML/Javascript code within it should behave just as in a browser.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve created a simple extension by copy/pasting a babylonjs sample_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_!doctype html&gt_sm_\n&lt_sm_!--\n/*************************************************************************\n* ADOBE CONFIDENTIAL\n* ___________________\n*\n* Copyright 2014 Adobe\n* All Rights Reserved.\n*\n* NOTICE_dd_ Adobe permits you to use_co_ modify_co_ and distribute this file in\n* accordance with the terms of the Adobe license agreement accompanying\n* it. If you have received this file from a source other than Adobe_co_\n* then your use_co_ modification_co_ or distribution of it requires the prior\n* written permission of Adobe. \n**************************************************************************/\n--&gt_sm_\n&lt_sm_html&gt_sm_\n&lt_sm_head&gt_sm_\n    &lt_sm_meta charset_eq__qt_utf-8_qt_&gt_sm_\n    &lt_sm_link rel_eq__qt_stylesheet_qt_ href_eq__qt_css/styles.css_qt_ /&gt_sm_\n    &lt_sm_link id_eq__qt_hostStyle_qt_ rel_eq__qt_stylesheet_qt_ href_eq__qt_css/theme.css_qt_ /&gt_sm_\n    &lt_sm_title&gt_sm_&lt_sm_/title&gt_sm_\n    \n    &lt_sm_style&gt_sm_\n            html_co_ body {\n                overflow_dd_ hidden_sm_\n                width_dd_ 100%_sm_\n                height_dd_ 100%_sm_\n                margin_dd_ 0_sm_\n                padding_dd_ 0_sm_\n            }\n\n            #renderCanvas {\n                width_dd_ 100%_sm_\n                height_dd_ 100%_sm_\n                touch-action_dd_ none_sm_\n            }\n        &lt_sm_/style&gt_sm_\n\n    &lt_sm_script src_eq__qt_https_dd_//code.jquery.com/pep/0.4.3/pep.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n    &lt_sm_script src_eq__qt_https_dd_//preview.babylonjs.com/loaders/babylonjs.loaders.min.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n    &lt_sm_script src_eq__qt_https_dd_//cdn.babylonjs.com/babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n\n&lt_sm_/head&gt_sm_\n\n&lt_sm_body&gt_sm_\n\n    &lt_sm_canvas id_eq__qt_renderCanvas_qt_ touch-action_eq__qt_none_qt_&gt_sm_&lt_sm_/canvas&gt_sm_\n\n    &lt_sm_script&gt_sm_\n        var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_ // Get the canvas element\n        var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_ // Generate the BABYLON 3D engine\n\n        /******* Add the create scene function ******/\n        var createScene _eq_ function () {\n\n            // Create the scene space\n            var scene _eq_ new BABYLON.Scene(engine)_sm_\n\n            // Add a camera to the scene and attach it to the canvas\n            var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ Math.PI / 2_co_ Math.PI / 2_co_ 2_co_ new BABYLON.Vector3(0_co_0_co_5)_co_ scene)_sm_\n            camera.attachControl(canvas_co_ true)_sm_\n\n            // Add lights to the scene\n            var light1 _eq_ new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(1_co_ 1_co_ 0)_co_ scene)_sm_\n            var light2 _eq_ new BABYLON.PointLight(_qt_light2_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ -1)_co_ scene)_sm_\n\n            // Add and manipulate meshes in the scene\n            var sphere _eq_ BABYLON.MeshBuilder.CreateSphere(_qt_sphere_qt__co_ {diameter_dd_6}_co_ scene)_sm_\n\n            return scene_sm_\n        }_sm_\n        /******* End of the create scene function ******/\n\n        var scene _eq_ createScene()_sm_ //Call the createScene function\n\n        // Register a render loop to repeatedly render the scene\n        engine.runRenderLoop(function () {\n                scene.render()_sm_\n        })_sm_\n\n        // Watch for browser/canvas resize events\n        window.addEventListener(_qt_resize_qt__co_ function () {\n                engine.resize()_sm_\n        })_sm_\n\n\n        canvas.addEventListener(_qt_mouseup_qt__co_ function(){\n            console.log(_qt_Mouse UP!_qt_)_sm_\n        })_sm_\n\n        canvas.addEventListener(_qt_mousedown_qt__co_ function(){\n            console.log(_qt_Mouse DOWN!_qt_)_sm_\n        })_sm_\n\n        canvas.addEventListener(_qt_click_qt__co_ function(){\n            console.log(_qt_Mouse Click!_qt_)_sm_\n        })_sm_\n    &lt_sm_/script&gt_sm_\n\n\n&lt_sm_/body&gt_sm_\n&lt_sm_/html&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis displays what it_t_s supposed to display (a sphere)_co_ but dragging the mouse on top of the canvas doesn_t_t rotate the camera. Scrolling the mouse wheel zooms in/out as it_t_s supposed to though. I_t_ve added some listeners for mouse events and they all work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried doing something similar with threejs_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_!DOCTYPE html&gt_sm_\n&lt_sm_html lang_eq__qt_en_qt_&gt_sm_\n&lt_sm_head&gt_sm_\n    &lt_sm_title&gt_sm_three.js webgl - orbit controls&lt_sm_/title&gt_sm_\n    &lt_sm_meta charset_eq__qt_utf-8_qt_&gt_sm_\n    &lt_sm_meta name_eq__qt_viewport_qt_ content_eq__qt_width_eq_device-width_co_ user-scalable_eq_no_co_ minimum-scale_eq_1.0_co_ maximum-scale_eq_1.0_qt_&gt_sm_\n    &lt_sm_style&gt_sm_\n        body {\n            color_dd_ #000_sm_\n            font-family_dd_ Monospace_sm_\n            font-size_dd_ 13px_sm_\n            text-align_dd_ center_sm_\n            font-weight_dd_ bold_sm_\n            background-color_dd_ #fff_sm_\n            margin_dd_ 0px_sm_\n            overflow_dd_ hidden_sm_\n        }\n\n        #info {\n            color_dd_ #000_sm_\n            position_dd_ absolute_sm_\n            top_dd_ 0px_sm_\n            width_dd_ 100%_sm_\n            padding_dd_ 5px_sm_\n        }\n\n        a {\n            color_dd_ red_sm_\n        }\n    &lt_sm_/style&gt_sm_\n&lt_sm_/head&gt_sm_\n&lt_sm_body&gt_sm_\n    &lt_sm_div id_eq__qt_info_qt_&gt_sm_\n        &lt_sm_a href_eq__qt_http_dd_//threejs.org_qt_ target_eq__qt__blank_qt_ rel_eq__qt_noopener_qt_&gt_sm_three.js&lt_sm_/a&gt_sm_ - orbit controls example\n    &lt_sm_/div&gt_sm_\n    &lt_sm_script src_eq__qt_js/three.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n    &lt_sm_script src_eq__qt_js/OrbitControls.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n    &lt_sm_script src_eq__qt_js/WebGL.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n    &lt_sm_script&gt_sm_if ( WEBGL.isWebGLAvailable() _eq__eq__eq_ false ) {\n                document.body.appendChild( WEBGL.getWebGLErrorMessage() )_sm_\n            }\n            var camera_co_ controls_co_ scene_co_ renderer_sm_\n            init()_sm_\n            //render()_sm_ // remove when using next line for animation loop (requestAnimationFrame)\n            animate()_sm_\n            function init() {\n                scene _eq_ new THREE.Scene()_sm_\n                scene.background _eq_ new THREE.Color( 0xcccccc )_sm_\n                scene.fog _eq_ new THREE.FogExp2( 0xcccccc_co_ 0.002 )_sm_\n                renderer _eq_ new THREE.WebGLRenderer( { antialias_dd_ true } )_sm_\n                renderer.setPixelRatio( window.devicePixelRatio )_sm_\n                renderer.setSize( window.innerWidth_co_ window.innerHeight )_sm_\n                document.body.appendChild( renderer.domElement )_sm_\n                camera _eq_ new THREE.PerspectiveCamera( 60_co_ window.innerWidth / window.innerHeight_co_ 1_co_ 1000 )_sm_\n                camera.position.set( 400_co_ 200_co_ 0 )_sm_\n                // controls\n                controls _eq_ new THREE.OrbitControls( camera_co_ renderer.domElement )_sm_\n                //controls.addEventListener( _t_change_t__co_ render )_sm_ // call this only in static scenes (i.e._co_ if there is no animation loop)\n                controls.enableDamping _eq_ true_sm_ // an animation loop is required when either damping or auto-rotation are enabled\n                controls.dampingFactor _eq_ 0.25_sm_\n                controls.screenSpacePanning _eq_ false_sm_\n                controls.minDistance _eq_ 100_sm_\n                controls.maxDistance _eq_ 500_sm_\n                controls.maxPolarAngle _eq_ Math.PI / 2_sm_\n                // world\n                var geometry _eq_ new THREE.CylinderBufferGeometry( 0_co_ 10_co_ 30_co_ 4_co_ 1 )_sm_\n                var material _eq_ new THREE.MeshPhongMaterial( { color_dd_ 0xffffff_co_ flatShading_dd_ true } )_sm_\n                for ( var i _eq_ 0_sm_ i &lt_sm_ 500_sm_ i ++ ) {\n                    var mesh _eq_ new THREE.Mesh( geometry_co_ material )_sm_\n                    mesh.position.x _eq_ Math.random() * 1600 - 800_sm_\n                    mesh.position.y _eq_ 0_sm_\n                    mesh.position.z _eq_ Math.random() * 1600 - 800_sm_\n                    mesh.updateMatrix()_sm_\n                    mesh.matrixAutoUpdate _eq_ false_sm_\n                    scene.add( mesh )_sm_\n                }\n                // lights\n                var light _eq_ new THREE.DirectionalLight( 0xffffff )_sm_\n                light.position.set( 1_co_ 1_co_ 1 )_sm_\n                scene.add( light )_sm_\n                var light _eq_ new THREE.DirectionalLight( 0x002288 )_sm_\n                light.position.set( - 1_co_ - 1_co_ - 1 )_sm_\n                scene.add( light )_sm_\n                var light _eq_ new THREE.AmbientLight( 0x222222 )_sm_\n                scene.add( light )_sm_\n                //\n                window.addEventListener( _t_resize_t__co_ onWindowResize_co_ false )_sm_\n            }\n            function onWindowResize() {\n                camera.aspect _eq_ window.innerWidth / window.innerHeight_sm_\n                camera.updateProjectionMatrix()_sm_\n                renderer.setSize( window.innerWidth_co_ window.innerHeight )_sm_\n            }\n            function animate() {\n                requestAnimationFrame( animate )_sm_\n                controls.update()_sm_ // only required if controls.enableDamping _eq_ true_co_ or if controls.autoRotate _eq_ true\n                render()_sm_\n            }\n            function render() {\n                renderer.render( scene_co_ camera )_sm_\n            }&lt_sm_/script&gt_sm_\n&lt_sm_/body&gt_sm_\n&lt_sm_/html&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe code above works fine and I_t_m able to control the camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you have any idea why I_t_m being unable to control camera rotation with babylonjs? How can I debug this to figure out why the camera is not rotating? I_t_m an experienced C++ developer but very inexperienced in Javascript.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlex\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-29T17:55:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello! can you try to remove the pep.js link just in case?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso we are using pointer events and not mouse events which could be the issue here. (can you also try to use camera.attachControl(canvas_co_ false)?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"anycast","Date":"2018-10-31T07:51:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ thanks for your answer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRemoved pep.js and used camera.attachControl(canvas_co_true)_co_ didn_t_t work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRemoved pep.js and used camera.attachControl(canvas_co_false)_co_ didn_t_t work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAdded pep.js back with camera.attachControl(canvas_co_false)_co_ didn_t_t work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI really want to use babylon.js for this (it seems much more evolved than three.js) _co_ so I_t_m going to learn javascript and start mucking around in the code. If you have any more ideas or if I can do anything to help you figure out what_t_s going on_co_ please feel free to let me know.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ssaket","Date":"2018-10-31T08:12:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi there !_lt_br /_gt_\n\tHave you checked your network tab? ( just to make sure that pep.js is loading and I can_t_t think of anything else)_lt_br /_gt_\n\tIn the meantime_co_ I copy pasted your code to codePen_co_ it_t_s working. Here_t_s the link (_lt_a href_eq__qt_https_dd_//codepen.io/anon/pen/pxXwqX_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//codepen.io/anon/pen/pxXwqX_lt_/a_gt_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"anycast","Date":"2018-10-31T14:06:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just placed all code in a local folder to make sure it was being loaded. Still doesn_t_t allow me to drag the camera inside Adobe Illustrator.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe code works fine in a browser_co_ it just doesn_t_t work at 100% inside Adobe_t_s chromium container (the events are being captured by the canvas but for some reason the camera isn_t_t rotated when I drag around).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-31T14:55:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor some reason the pointer events seem to be ignored\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tcan you manually add a addEventListener(_qt_pointerdown_qt_) to see if it is captured?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso a hack to force using mouse events_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code class_eq__qt_language-javascript_qt__gt_BABYLON.Engine.GetPointerPrefix _eq_ function() {\n\nreturn _qt_mouse_qt_\n\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"anycast","Date":"2018-11-01T10:54:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI added your hack to force mouse events before the engine creation line. I also added a pointerdown listener to the canvas. It still doesn_t_t work. Here are two screenshots_co_ the first showing the console while the code is running inside Adobe Illustrator and the second one inside Chrome_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAdobe Illustrator\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_20747_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/340984415_Screenshot2018-11-01at10_16_29.png.509dd15b7f7207149c471dfc95031aa6.png_qt_ alt_eq__qt_340984415_Screenshot2018-11-01at10_16_29.png.509dd15b7f7207149c471dfc95031aa6.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tChrome_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/657373274_Screenshot2018-11-01at10_17_27.png.f033de898507e152c68e2e828c74bfc8.png_qt_ data-fileid_eq__qt_20748_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_20748_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/532154254_Screenshot2018-11-01at10_17_27.thumb.png.eb3f6a4e63bee73dc4d671d9896e2546.png_qt_ alt_eq__qt_532154254_Screenshot2018-11-01at10_17_27.thumb.png.eb3f6a4e63bee73dc4d671d9896e2546.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m running this in macOS Mojave. Chrome ignores the mouse up/down events. Adobe Illustrator ignores pointer events.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt seems that Adobe_t_s Chromium container doesn_t_t support pointerdown events_co_ but if that_t_s the case_co_ your hack_co_ which I presume merely substitutes the string _qt_pointer_qt_ by _qt_mouse_qt__co_ should work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUpdate_dd_ I placed a console.log inside your BABYLON.Engine.GetPointerPrefix code_co_ and it_t_s not getting called. Did I place your hack in the right place?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-01T14:58:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou have to call my code before instantiating the scene.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"anycast","Date":"2018-11-01T17:35:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt doesn_t_t get called when dragging. I placed a call in the window resize handler and it_t_s returning what it should_co_ it_t_s just not getting called at all when dragging.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tested it in Chrome and I_t_m not seeing any console log messages coming from BABYLON.Engine.GetPointerPrefix as I would expect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_!doctype html&gt_sm_\n&lt_sm_!--\n/*************************************************************************\n* ADOBE CONFIDENTIAL\n* ___________________\n*\n* Copyright 2014 Adobe\n* All Rights Reserved.\n*\n* NOTICE_dd_ Adobe permits you to use_co_ modify_co_ and distribute this file in\n* accordance with the terms of the Adobe license agreement accompanying\n* it. If you have received this file from a source other than Adobe_co_\n* then your use_co_ modification_co_ or distribution of it requires the prior\n* written permission of Adobe.\n**************************************************************************/\n--&gt_sm_\n&lt_sm_html&gt_sm_\n&lt_sm_head&gt_sm_\n    &lt_sm_meta charset_eq__qt_utf-8_qt_&gt_sm_\n    &lt_sm_link rel_eq__qt_stylesheet_qt_ href_eq__qt_css/styles.css_qt_ /&gt_sm_\n    &lt_sm_link id_eq__qt_hostStyle_qt_ rel_eq__qt_stylesheet_qt_ href_eq__qt_css/theme.css_qt_ /&gt_sm_\n    &lt_sm_title&gt_sm_&lt_sm_/title&gt_sm_\n\n    &lt_sm_style&gt_sm_\n        html_co_ body {\n            overflow_dd_ hidden_sm_\n            width_dd_ 100%_sm_\n            height_dd_ 100%_sm_\n            margin_dd_ 0_sm_\n            padding_dd_ 0_sm_\n        }\n\n        #renderCanvas {\n            width_dd_ 100%_sm_\n            height_dd_ 100%_sm_\n            touch-action_dd_ none_sm_\n        }\n    &lt_sm_/style&gt_sm_\n    &lt_sm_script src_eq__qt_https_dd_//code.jquery.com/pep/0.4.3/pep.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n    &lt_sm_script src_eq__qt_https_dd_//preview.babylonjs.com/loaders/babylonjs.loaders.min.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n    &lt_sm_script src_eq__qt_https_dd_//cdn.babylonjs.com/babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n&lt_sm_/head&gt_sm_\n&lt_sm_body&gt_sm_\n    &lt_sm_canvas id_eq__qt_renderCanvas_qt_ touch-action_eq__qt_none_qt_&gt_sm_&lt_sm_/canvas&gt_sm_\n    &lt_sm_script&gt_sm_\nvar canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_ // Get the canvas element\n\n        var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_ // Generate the BABYLON 3D engine\n\n        /******* Add the create scene function ******/\n        var createScene _eq_ function () {\n\n            // Create the scene space\n            var scene _eq_ new BABYLON.Scene(engine)_sm_\n\n            // Add a camera to the scene and attach it to the canvas\n            var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ Math.PI / 2_co_ Math.PI / 2_co_ 2_co_ new BABYLON.Vector3(0_co_0_co_5)_co_ scene)_sm_\n            camera.attachControl(canvas_co_ true)_sm_\n\n            // Add lights to the scene\n            var light1 _eq_ new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(1_co_ 1_co_ 0)_co_ scene)_sm_\n            var light2 _eq_ new BABYLON.PointLight(_qt_light2_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ -1)_co_ scene)_sm_\n\n            // Add and manipulate meshes in the scene\n            var sphere _eq_ BABYLON.MeshBuilder.CreateSphere(_qt_sphere_qt__co_ {diameter_dd_6}_co_ scene)_sm_\n\n            return scene_sm_\n        }_sm_\n        /******* End of the create scene function ******/\n\n        BABYLON.Engine.GetPointerPrefix _eq_ function() {\n            console.log(_qt_returning mouse._qt_)_sm_\n            return _qt_mouse_qt__sm_\n\n        }\n        var scene _eq_ createScene()_sm_ //Call the createScene function\n\n        // Register a render loop to repeatedly render the scene\n        engine.runRenderLoop(function () {\n                scene.render()_sm_\n        })_sm_\n\n        // Watch for browser/canvas resize events\n        window.addEventListener(_qt_resize_qt__co_ function () {\n                engine.resize()_sm_\n\n                console.log(BABYLON.Engine.GetPointerPrefix())_sm_\n        })_sm_\n\n\n        canvas.addEventListener(_qt_mouseup_qt__co_ function(){\n            console.log(_qt_Mouse UP!_qt_)_sm_\n        })_sm_\n\n        canvas.addEventListener(_qt_mousedown_qt__co_ function(){\n            console.log(_qt_Mouse DOWN!_qt_)_sm_\n        })_sm_\n\n        canvas.addEventListener(_qt_pointerdown_qt__co_ function(){\n            console.log(_qt_pointerdown_qt_)_sm_\n        })_sm_\n\n        canvas.addEventListener(_qt_click_qt__co_ function(){\n            console.log(_qt_Mouse Click!_qt_)_sm_\n        })_sm_&lt_sm_/script&gt_sm_\n\n&lt_sm_/body&gt_sm_\n&lt_sm_/html&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"anycast","Date":"2018-11-01T17:49:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDid_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_engine.GetPointerPrefix _eq_ function() {\n            console.log(_qt_returning mouse._qt_)_sm_\n            return _qt_mouse_qt__sm_\n\n        }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut it made no difference.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-02T14:59:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI feel so stupid _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_This is the correct code_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_  BABYLON.Tools.GetPointerPrefix _eq_ function() {\n    console.log(_qt_returning mouse._qt_)_sm_\n    return _qt_mouse_qt__sm_\n\n  }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSorry about the inconvenience \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"anycast","Date":"2018-11-02T20:36:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey! No need to apologize to me. You_t_re helping me a lot. As for feeling stupid_co_ that comes with the territory. I_t_m a 43 year old very seasoned developer and I have had (and still have) quite a few shtoopid moments (_lt_a href_eq__qt_http_dd_//esr.ibiblio.org/?p_eq_8143_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//esr.ibiblio.org/?p_eq_8143_lt_/a_gt_). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tGood news though_co_ it works in Adobe Illustrator now. When I feel comfortable enough with Javascript (and everything else it involves) I_t_ll try to change babylon.js so that it works in all scenarios without hacks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks a lot for all your help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-05T21:05:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPerfect (and btw I_t_m 42 _lt_span_gt__dd_))_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]