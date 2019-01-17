[{"Owner":"elessar.perm","Date":"2015-01-06T12:52:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi guys!_lt_/p_gt__lt_p_gt_I_t_m working on realistic ocean simulation for a browser game at the moment._lt_/p_gt__lt_p_gt_The best known way to simulate ocean waves is Jerry Tessendorf_t_s method with statistical model._lt_/p_gt__lt_p_gt_I won_t_t paste any formulas here for simplification_co_ so here is core problem_dd_ calculations are expensive and I don_t_t want to compute water heightmap by CPU in browser because the algorithm may be paralleled very well and GPU is able to compute the grid much faster._lt_/p_gt__lt_p_gt_Is there any way to use GPU computing from babylon.js?_lt_/p_gt__lt_p_gt_I_t_m thinking about using shader with texture renderTarget to generate heightmap and then use the results in physics simulation in javascript and pass it to the shader material for rendering water surface. _lt_/p_gt__lt_p_gt_Is it worth or not? Can anyone suggest any other methods?_lt_/p_gt__lt_p_gt_Thanks!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-01-06T15:30:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_GPGPU for WebGL_co_ welcome to the weeds!  Before OpenCL came out_co_ I had tried to use OpenGL 2.0 for GPGPU. Got into a nVidia developer program to test OpenCL at the first opportunity.  It was much easier._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I see major issues using OpenGL 2.0 ES for GPGPU.  OpenGL 2.0 was bad enough.  Basically_co_ you build a vertex shader with a single_co_ ortho_co_ quad.  Passed up any substantial data to read as textures.  The main part of the program is a_co_ or a series of_co_ fragment shaders_co_ which read the textures.  Cannot quite remember how you got the data back to the cpu. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_OpenGL 2.0 ES does not support quads_co_ so you_t_ll have to build 2 triangles.  Makes basing your calculation on your location in the quad more involved.  Probably have to get the vertex shader involved to know which triangle you are in._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then inter operating with BabylonJS seems difficult. Web workers seems like a better way to go_co_ even if it is async.  There are virtually no single core cpus on the market today.  BabylonJS is only using 1 core.  Flooring a separate core seems much more attractive._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2015-01-06T17:00:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello elessar.perm !_lt_/p_gt__lt_p_gt_I love what you_t_re going to do _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Something you can do (because we don_t_t have Compute Shaders _dd__t_( ) is to create a _qt_Screen Quad_qt_ for your height map calculation. You can see the screen quad vertices organization in this file for example _dd_ _lt_a href_eq__qt_https_dd_//github.com/clbr/MLAA-test-app/blob/master/screenquad.h_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/clbr/MLAA-test-app/blob/master/screenquad.h_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Once you have your ScreenQuad mesh_co_ apply a ShaderMaterial that will generate your height map using one or multiple passes into your RTT(s)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Basically_co_ the vertex program of the Screen Quad should look like (to be fullscreen) _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_attribute vec3 position_sm_attribute vec2 uv_sm_varying vec2 vUV_sm_void main(void) {    gl_Position _eq_ vec4(position_co_ 1.0)_sm_    vUV _eq_ uv_sm_}_lt_/pre_gt__lt_p_gt_And in your pixel program you_t_ll calculate the height map._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s only an idea_co_ not sure it will work !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_May the force be with you !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"elessar.perm","Date":"2015-01-06T18:34:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_66613_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_11512_qt_ data-ipsquote-username_eq__qt_Luaacro_qt_ data-cite_eq__qt_Luaacro_qt_ data-ipsquote-timestamp_eq__qt_1420563639_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Hello elessar.perm !_lt_/p_gt__lt_p_gt_I love what you_t_re going to do _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Something you can do (because we don_t_t have Compute Shaders _dd__t_( ) is to create a _qt_Screen Quad_qt_ for your height map calculation. You can see the screen quad vertices organization in this file for example _dd_ _lt_a href_eq__qt_https_dd_//github.com/clbr/MLAA-test-app/blob/master/screenquad.h_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/clbr/MLAA-test-app/blob/master/screenquad.h_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Once you have your ScreenQuad mesh_co_ apply a ShaderMaterial that will generate your height map using one or multiple passes into your RTT(s)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Basically_co_ the vertex program of the Screen Quad should look like (to be fullscreen) _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_attribute vec3 position_sm_attribute vec2 uv_sm_varying vec2 vUV_sm_void main(void) {    gl_Position _eq_ vec4(position_co_ 1.0)_sm_    vUV _eq_ uv_sm_}_lt_/pre_gt__lt_p_gt_And in your pixel program you_t_ll calculate the height map._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s only an idea_co_ not sure it will work !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_May the force be with you !_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_Exactly what I wanted to to do._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_But the main question is will it be significant faster that web worker version or not._lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2015-01-06T19:56:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh course it will because vertices &amp_sm_ pixels operations you want to do are in almost all cases faster on GPUs ^^_lt_/p_gt__lt_p_gt_You can read the little article I wrote about CPU &amp_sm_ GPU computations at _dd_ _lt_a href_eq__qt_https_dd_//medium.com/community-play-3d/computing-your-own-depth-shadow-pass-into-cp3d-439293b36457_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//medium.com/community-play-3d/computing-your-own-depth-shadow-pass-into-cp3d-439293b36457_lt_/a_gt__lt_/p_gt__lt_p_gt_There is a performance comparison between both methods at the end._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"elessar.perm","Date":"2015-01-06T20:02:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_I mean I_t_m not sure that babylon.js will perform all necessary actions fast enough_co_ such as mapping buffers and transport to GPU._lt_/div_gt__lt_br_gt__lt_div_gt_These operations may really be the bottleneck of this method_co_ overwhelming the performance improvement of GPU calculations_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_But I_t_ll try of course.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Romanichel_2.0","Date":"2015-01-06T20:45:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If you don_t_t have to read back the data on the CPU (ie the waves simulation are only used as inputs of other shaders) it should be doable (maybe not in every browser / devices)._lt_/p_gt__lt_p_gt_You have to render a quad and store your simulation data into textures accessible in read/write by the gpu (if I recall_co_ for wave simulations_co_ you need access to frame n-1 and n-2 to compute frame n)_co_ and use the data produces in the texture inside your redering vertex shader (you animate vertex positions of a grid)._lt_/p_gt__lt_p_gt_In the DX9.1 era_co_ with some Nvidia custom extensions_co_ I used to do something quite similar _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"elessar.perm","Date":"2015-01-06T20:50:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Unfortunately I have to read back the data because I need it for ship physics simulation  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-01-06T21:49:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_strong_gt_cpu time_lt_/strong_gt_ need not be less then _lt_strong_gt_gpu time + transfer back_lt_/strong_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you can live with your height map being one frame behind_co_ _lt_strong_gt_cpu time_lt_/strong_gt_ must only be less then _lt_strong_gt_BJS cpu time + gpu time_lt_/strong_gt_.  This is due to to the fact that you will be running async on an otherwise unused cpu core._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Executing on the gpu will need to be sync_co_ and take away time for the rest.  A better question is_dd_  what will give better throughput?  Also_co_ in a photo finish_co_ I would always do the less exotic way (web worker).  If you need some OpenGL extensions_co_ you could have device issues._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"elessar.perm","Date":"2015-01-06T21:54:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Thank you all for your answers! I think I will try web worker approach and determine if the speed is sufficient. If not_co_ I will think further._lt_/div_gt__lt_br_gt__lt_div_gt_I will post results when it_t_s done  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-01-07T15:32:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Think it would be wise to actually write an inline version first_co_ which can be adapted for a web worker if required.  _qt_Right first_co_ Fast later_qt_.  You could be fighting too many simultaneous battles attempting to go straight to a web worker._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ I would avoid objects like BABYLON.Vector3. Put the output of your height map inside of a Float32Array if possible.  3 reasons_dd__lt_/p_gt__lt_ol_gt__lt_li_gt_Typed arrays are known for slightly slower initialization_co_ but also slightly faster access.  I use them extensively_co_ and found at least they are not slower.  Difficult to actually measure.  You only need to create it once._lt_/li_gt_\t_lt_li_gt_Typed arrays are not inside of the VM heap_co_ unlike an array of BABYLON.Vector3. If you have to use Vector3_co_ make sure to DO NOT create them over and over.  Use .inPlace() methods_co_ or .x_co_ .y_co_ .z _eq_ .  Throw away instances will put a lot of pressure on the heap causing more garbage collection._lt_/li_gt_\t_lt_li_gt_If this were ever to come from the GPU_co_ a Float32Array is how it would come._lt_/li_gt__lt_/ol_gt__lt_p_gt_If this were to be changed to a web worker_co_ then you would just create 2 arrays.  The current one for babylon to use_co_ and the future one being updated by the the web worker._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"elessar.perm","Date":"2015-01-07T21:16:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you for your help. Of course_co_ I will start from basic version and adopt parallelization later. But I didn_t_t think about typed arrays. Sounds good.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-01-08T16:21:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For future search result_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I did a double check on returning data from OpenGL 2.0 ES_co_ since I knew this was an obvious area to cut back on for mobile.  The function gl.readPixels is in ES_co_ but it is hobbled to only return in Uint8Array.  OpenGL 2.0 can return in 20 different formats._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Getting readPixels &amp_sm_ your own unrelated shaders to inter-operate probably would require pretty close familiarity with the BabylonJS source code._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"elessar.perm","Date":"2015-01-08T20:14:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Just understood some interesting thing. I don_t_t need full grid for physics simulation_co_ because it will be used just for some relatively small amount of objects_co_ so for them I can use CPU._lt_/div_gt__lt_br_gt__lt_div_gt_I need the full grid only for rendering and I can compute it in the fragment shader._lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]