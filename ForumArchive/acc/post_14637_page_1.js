[{"Owner":"UP_AND_ATOM","Date":"2015-05-20T14:43:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m very new to Babylon.js and have spent a few days reading through the docs and forums_co_ but I haven_t_t been able to find a good answer for this. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let_t_s say I have a rotating and scaled cube in my scene and I want to get the absolute position of each vertex. I found this topic for translating world coords to screen coords_dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/9584-converting-3d-vertex-to-2d-point-on-screen/_qt__gt_http_dd_//www.html5gamedevs.com/topic/9584-converting-3d-vertex-to-2d-point-on-screen/_lt_/a_gt_ but so far I can only figure out how to get the position of the mesh itself_co_ not for its vertices. In fact_co_ even after digging around in the mesh object_co_ I can_t_t even find where the vertices are stored. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How do I get the coordinates of a mesh_t_s vertices so that I can translate them to screen coords so I can draw debug lines on a canvas?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-20T18:11:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To get vertices_t_ position_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var arr _eq_ mesh.getVertexBuffer(BABYLON.VertexBuffer.PositionKind)_lt_/pre_gt__lt_p_gt_This will be an array of floats. so 3 floats per vertex._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then you can use var vertex _eq_ BABYLON.Vector3.FromArray(arr_co_ 0) to get the first one and BABYLON.Vector3.FromArray(arr_co_ 3) to get the second and so on_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_to get the world coordinate of the vertex_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.Vector3.TransformCoordinates(vertex_co_ mesh.getWorldMatrix())_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UP_AND_ATOM","Date":"2015-05-20T18:40:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Great_co_ this is very helpful. The results I_t_m seeing are slightly off_co_ but much closer than what I had before._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve got two canvases positioned on top of each other_co_ one for 2D and one for 3D. The 3D one has a cube that_t_s being translated_co_ rotated_co_ and scaled_co_ and attached to a parent sphere that is rotating along the X axis. The camera is bobbing up and down. I wanted to get as many things changing the on-screen coordinates of the cube as possible so I could be sure I didn_t_t leave anything out of the equation._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The coordinates I get from TransformCoordinates are all very small_co_ though. I tried multiplying them by 50 and when I do_co_ it looks like they_t_re mirrored from what is being rendered on the _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here_t_s the relevant function_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_Sphere_qt__co_ 16_co_ 1_co_ scene)_sm_  var box _eq_ BABYLON.Mesh.CreateBox(_t_Box_t__co_ 2_co_ scene)_sm_  box.parent _eq_ sphere_sm_  var cameraMovingUp _eq_ true_sm_  box.position.x _eq_ 2.5_sm_    engine.beginFrame _eq_ function() {    if(cameraMovingUp) {      camera.rotation.x +_eq_ 0.0025_sm_      box.scaling.x +_eq_ 0.01_sm_      box.scaling.y +_eq_ 0.005_sm_      box.position.x +_eq_ 0.025_sm_      if(camera.rotation.x &gt_sm_ 0.15) {        cameraMovingUp _eq_ false_sm_      }    } else {      camera.rotation.x -_eq_ 0.0025_sm_      box.scaling.x -_eq_ 0.01_sm_      box.scaling.y -_eq_ 0.005_sm_      box.position.x -_eq_ 0.025_sm_      if(camera.rotation.x &lt_sm_ -0.15) {        cameraMovingUp _eq_ true_sm_      }    }    sphere.rotation.y +_eq_ 0.05_sm_    ctx.clearRect(0_co_ 0_co_ drawCanvas.width_co_ drawCanvas.height)_sm_    ctx.beginPath()_sm_       ctx.fillStyle _eq_ _t_#ff4500_t__sm_        var arr _eq_ box.getVertexBuffer(BABYLON.VertexBuffer.PositionKind)._data_sm_    var len _eq_ arr.length_sm_        for (var i_eq_0_sm_ i&lt_sm_len_sm_ i+_eq_3) {      var vertex _eq_ BABYLON.Vector3.FromArray(arr_co_ i)_sm_      var coords _eq_ BABYLON.Vector3.TransformCoordinates(vertex_co_ box.getWorldMatrix())_sm_      ctx.fillRect(coords.x - 2_co_ coords.y - 2_co_ 4_co_ 4)_sm_    }    ctx.strokeStyle _eq_ _t_#FF4500_t__sm_    ctx.stroke()_sm_  }_sm__lt_/pre_gt__lt_p_gt_And a screenshot_dd_ _lt_a href_eq__qt_http_dd_//i.imgur.com/qAMsh8Z.png_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//i.imgur.com/qAMsh8Z.png_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can see the red rectangles grouped together in the upper-left corner._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I know I_t_m missing something important_co_ but I can_t_t figure out what. Can you point me in the right direction?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UP_AND_ATOM","Date":"2015-05-20T18:49:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wait_co_ I got it! I had to do this with the results_dd__lt_br_gt_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.Vector3.Project(coords_co_          BABYLON.Matrix.Identity()_co_   scene.getTransformMatrix()_co_   camera.viewport.toGlobal(engine))_sm__lt_/pre_gt__lt_p_gt_It_t_s working perfectly now. Thanks so much for your help._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-21T17:14:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I was about to mention that WorldMatrix was not enough but you figured out by yourself _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]