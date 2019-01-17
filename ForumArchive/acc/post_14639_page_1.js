[{"Owner":"UP_AND_ATOM","Date":"2015-05-20T16:30:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have a scene that I update every frame by calling scene.render(). I want to be able to run all the scene calculations_co_ but without drawing to the canvas. How can I update the scene without telling it to draw to the engine_t_s canvas?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-20T18:15:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t know why you would like to do this but I think this should work_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_scene.autoClear _eq_ false_sm_scene.activeCamera.isIntermediate _eq_ true_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UP_AND_ATOM","Date":"2015-05-20T18:58:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well what I_t_d like to do is draw lines on a different canvas based on the position of the 3D objects in the scene. I don_t_t want to actually show the scene_co_ but instead just use it to calculate the locations of objects. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When I do what you suggested_co_ it just hides the background of the scene but the objects are still rendering. Is there a method that does everything that scene.render() does_co_ but without actually drawing to the canvas?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-05-20T19:45:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am not sure if I understood the use-case_co_ but I_t_ll give it a shot _dd_-)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You have two canvases_co_ one is a webgl and the other is (probably) a simple 2d canvas. the one is on top of the other_co_ probably using CSS. Why wouldn_t_t you use CSS (display hidden for example) to hide the webgl canvas? _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UP_AND_ATOM","Date":"2015-05-20T20:40:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sure_co_ but that doesn_t_t reduce the overhead for actually doing the rendering. I can hide it easily but I_t_m hoping to avoid a performance hit for calculating data that I won_t_t end up needing._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-05-20T21:37:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am not sure if the actual rendering takes so long. Never tested_co_ but I understand that it is not needed_co_ when you don_t_t want to show anything on the webgl canvas._lt_/p_gt__lt_p_gt_The fastest solution I would have is this_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1WNTNW_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1WNTNW_lt_/a_gt__lt_/p_gt__lt_p_gt_Simply overwrite the render function of the rendering manager_co_ and it won_t_t render a thing. It will_co_ however_co_ follow the changes in the scene (open your console and move the camera with the arrows_co_ you will see the values change)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am not sure how helpful this is_co_ it is actually just a hack _dd_-)  Maybe DK can help more._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UP_AND_ATOM","Date":"2015-05-21T01:17:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I actually hadn_t_t thought to override the render function but I_t_ll try doing that next. I_t_m sure the cost of rendering isn_t_t very high but I did want to run some tests. Thanks for the idea!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-05-21T01:58:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_What is it that you need that doesn_t_t get done until a render occurs? If you just need an object_t_s updated position etc._co_ calling the method to update its world matrix might do the trick without need of a render._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UP_AND_ATOM","Date":"2015-05-21T15:38:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I haven_t_t been able to locate that method. Do you happen to know where I can find it?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-05-21T17:00:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The method I was thinking about is _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Mesh/babylon.abstractMesh.ts#L414_qt_ rel_eq__qt_external nofollow_qt__gt_computeWorldMatrix_lt_/a_gt_. I_t_m not sure if it would do what you need_co_ but worth a try. The internals have a lot of special cases_co_ so for example if the mesh has a parent I_t_m not sure if you_t_d need to call it on the parent first_co_ etc.._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2015-05-21T17:20:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Or you can use _qt_window.requestAnimationFrame(callback)_qt_ instead of scene.render() and in callback do all you want. Sorry but I not understand exactly what you are looking for. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UP_AND_ATOM","Date":"2015-05-21T19:56:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I want to update the location of each mesh that_t_s visible by the camera_co_ but avoid any overhead from lighting and rendering_co_ since I_t_m not using Babylon.js to actually do any displaying. I just want to be able to get the x and y (screen) coords of each vertex of certain meshes. I_t_m familiar with requestAnimationFrame_co_ but I haven_t_t been able to figure out what exactly I need to update every frame to keep the Babylon.js simulation going. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Does that make sense?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-21T20:45:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_having the right location of a mesh can be done by calling scene.animate() then for every mesh_dd_ mesh.computeWorldMatrix()_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UP_AND_ATOM","Date":"2015-05-22T00:45:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I can_t_t find references to scene.animate in the code or docs. Does it go by another name?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-22T01:45:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sorry this is scene._animate()_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/babylon.scene.ts#L734_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/babylon.scene.ts#L734_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]