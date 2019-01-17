[{"Owner":"Adrian","Date":"2014-09-14T15:36:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m trying to build some basic scene. I have a ground (with material)_co_ a box(without material) and a directional light._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_            /* Build ground */            var ground _eq_ BABYLON.Mesh.CreateGround(_qt_ground1_qt__co_ 100_co_ 100_co_ 1_co_ scene)_sm_            var groundMaterial _eq_ new BABYLON.StandardMaterial(_qt_ground_qt__co_ scene)_sm_             groundMaterial.diffuseTexture _eq_ new BABYLON.Texture(_qt_/sand.png_qt__co_ scene)_sm_            groundMaterial.diffuseTexture.uScale _eq_ 10_sm_            groundMaterial.diffuseTexture.vScale _eq_ 10_sm_                        ground.position.x _eq_ 0_sm_            ground.position.y _eq_ 0_sm_            ground.position.z _eq_ 0_sm_                        groundMaterial.specularColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_            ground.material _eq_ groundMaterial_sm_            ground.receiveShadows _eq_ true_sm_            ground.checkCollisions _eq_ true_sm_                                    /* Build box */            var box _eq_ BABYLON.Mesh.CreateBox(_qt_box1_qt__co_ 1_co_ scene)_sm_            box.position _eq_ new BABYLON.Vector3(1_co_ 1_co_ 1)_sm_            box.checkCollisions _eq_ true_sm_            box.receiveShadows _eq_ true_sm_            /* Build light */            var light _eq_new BABYLON.DirectionalLight(_qt_dir01_qt__co_ new BABYLON.Vector3(-2_co_ -2_co_ -2)_co_ scene)_sm_            light.position _eq_ new BABYLON.Vector3(20_co_ 40_co_ 20)_sm_                        /* Shadows */            var shadowGenerator _eq_ new BABYLON.ShadowGenerator(2048_co_ light)_sm_            shadowGenerator.useVarianceShadowMap _eq_ true_sm_            shadowGenerator.getShadowMap().renderList.push(box)_sm__lt_/pre_gt__lt_p_gt_You can see the result in attached picture. The shadow is awful totally pixelated and my cube/box has serrated edge. I am probably doing something wrong. Some help would be very appreciated !_lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_09_2014/post-10611-0-47721600-1410708861.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_09_2014/post-10611-0-47721600-1410708861_thumb.png_qt_ data-fileid_eq__qt_2712_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-10611-0-47721600-1410708861_thumb.p_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-09-14T18:59:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Put a higher value for the size of the textures. partly solve the problem_co_ but decreases performance._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_136)_sm__qt__gt_var_lt_/span_gt__lt_span_gt_ shadowGenerator _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__eq__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_136)_sm__qt__gt_new_lt_/span_gt__lt_span_gt_ BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_0_co_102)_sm__qt__gt_ShadowGenerator_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_strong_gt__lt_span style_eq__qt_color_dd_rgb(0_co_102_co_102)_sm__qt__gt_4096_lt_/span_gt__lt_/strong_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ light_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_)_sm__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Or try_dd_ _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_shadowGenerator.usePoissonSampling _eq_ true_sm_ _lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Adrian","Date":"2014-09-15T04:53:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi dad72_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is the result with _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_// Shadowsvar shadowGenerator _eq_ new BABYLON.ShadowGenerator(4096_co_ light)_sm_shadowGenerator.useVarianceShadowMap _eq_ true_sm_shadowGenerator.getShadowMap().renderList.push(box)_sm_            shadowGenerator.usePoissonSampling _eq_ true_sm_ _lt_/pre_gt__lt_p_gt_The result is still disappointing. Is it possible to use ray traced shadows instead of shadow map?_lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_09_2014/post-10611-0-58131800-1410756667.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_09_2014/post-10611-0-58131800-1410756667_thumb.png_qt_ data-fileid_eq__qt_2715_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-10611-0-58131800-1410756667_thumb.p_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-09-15T15:50:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It is true that the shadows are not very pretty. I_t_m not sure you can have better results. I_t_ve never managed to get very good results with the shadows._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Adrian","Date":"2014-09-15T15:57:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_No_co_ it_t_s not pretty at all ! I thought it was possible to have advanced light with opengl_co_ like occlusion for example._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-09-15T18:26:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Could you share your code on playground so we can help you ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Adrian","Date":"2014-09-16T10:25:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Deltakosh_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is the code i use to create my scene _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var createScene _eq_ function () {        /* Build scene */    var scene _eq_ new BABYLON.Scene(engine)_sm_    scene.gravity _eq_ new BABYLON.Vector3(0_co_ -9.81_co_ 0)_sm_    /* Build camera */    var camera _eq_ new BABYLON.FreeCamera(_qt_FreeCamera_qt__co_ new BABYLON.Vector3(0_co_ 5_co_ 0)_co_ scene)_sm_    scene.activeCamera _eq_ camera_sm_    camera.applyGravity     _eq_ true_sm_    camera.checkCollisions  _eq_ true_sm_    camera.speed            _eq_ 1_sm_    camera.attachControl(canvas_co_ false)_sm_    /* SKY #2 */    var skybox _eq_ BABYLON.Mesh.CreateBox(_qt_skyBox_qt__co_ 1000.0_co_ scene)_sm_    BABYLON.Effect.ShadersStore.gradientVertexShader _eq_ _qt_precision mediump float_sm_attribute vec3 position_sm_attribute vec3 normal_sm_attribute vec2 uv_sm_uniform mat4 worldViewProjection_sm_varying vec4 vPosition_sm_varying vec3 vNormal_sm_void main(){vec4 p _eq_ vec4(position_co_1.)_sm_vPosition _eq_ p_sm_vNormal _eq_ normal_sm_gl_Position _eq_ worldViewProjection * p_sm_}_qt__sm_    BABYLON.Effect.ShadersStore.gradientPixelShader _eq_ _qt_precision mediump float_sm_uniform mat4 worldView_sm_varying vec4 vPosition_sm_varying vec3 vNormal_sm_uniform float offset_sm_uniform vec3 topColor_sm_uniform vec3 bottomColor_sm_void main(void){float h _eq_ normalize(vPosition+offset).y_sm_gl_FragColor _eq_ vec4(mix(bottomColor_co_topColor_co_max(pow(max(h_co_0.0)_co_0.6)_co_0.0))_co_1.0)_sm_}_qt__sm_    var shader _eq_ new BABYLON.ShaderMaterial(_qt_gradient_qt__co_ scene_co_ _qt_gradient_qt__co_ {})_sm_    shader.setFloat(_qt_offset_qt__co_ 10)_sm_    shader.setColor3(_qt_topColor_qt__co_ BABYLON.Color3.FromInts(0_co_119_co_255))_sm_    shader.setColor3(_qt_bottomColor_qt__co_ BABYLON.Color3.FromInts(240_co_240_co_ 255))_sm_    shader.backFaceCulling _eq_ false_sm_    skybox.material _eq_ shader_sm_    /* Build ground */    var ground _eq_ BABYLON.Mesh.CreateGround(_qt_ground1_qt__co_ 100_co_ 100_co_ 1_co_ scene)_sm_    var groundMaterial _eq_ new BABYLON.StandardMaterial(_qt_ground_qt__co_ scene)_sm_     groundMaterial.diffuseTexture _eq_ new BABYLON.Texture(_qt_/grass.png_qt__co_ scene)_sm_    groundMaterial.diffuseTexture.uScale _eq_ 10_sm_    groundMaterial.diffuseTexture.vScale _eq_ 10_sm_    ground.position.x _eq_ 0_sm_    ground.position.y _eq_ 0_sm_    ground.position.z _eq_ 0_sm_    groundMaterial.specularColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_    ground.material _eq_ groundMaterial_sm_    ground.receiveShadows _eq_ true_sm_    ground.checkCollisions _eq_ true_sm_    /* Build Fog */    /*    scene.fogMode _eq_ BABYLON.Scene.FOGMODE_EXP2_sm_    scene.fogDensity _eq_ 0.1_sm_    scene.fogStart _eq_ 1_sm_    scene.fogEnd _eq_ 5_sm_    scene.fogColor _eq_ new BABYLON.Color3(0.8_co_0.83_co_0.8)_sm_    */    var box _eq_ BABYLON.Mesh.CreateBox(_qt_plane_qt__co_ 1_co_ scene)_sm_    box.position _eq_ new BABYLON.Vector3(0_co_ 1_co_ 0)_sm_    box.rotation _eq_ new BABYLON.Vector3(0_co_ 0_co_ 0)_sm_    /*    var boxMaterial _eq_ new BABYLON.StandardMaterial(_qt_ground_qt__co_ scene)_sm_     boxMaterial.diffuseTexture _eq_ new BABYLON.Texture(_qt_/ground.png_qt__co_ scene)_sm_    boxMaterial.diffuseTexture.uScale _eq_ 1_sm_    boxMaterial.diffuseTexture.vScale _eq_ 1_sm_    box.material _eq_ boxMaterial_sm_    */    box.checkCollisions _eq_ true_sm_    box.receiveShadows _eq_ true_sm_    /* Build light */    var light _eq_new BABYLON.DirectionalLight(_qt_dir01_qt__co_ new BABYLON.Vector3(-2_co_ -2_co_ -2)_co_ scene)_sm_    light.position _eq_ new BABYLON.Vector3(20_co_ 40_co_ 20)_sm_    // Shadows    var shadowGenerator _eq_ new BABYLON.ShadowGenerator(4096_co_ light)_sm_    shadowGenerator.useVarianceShadowMap _eq_ true_sm_    shadowGenerator.getShadowMap().renderList.push(box)_sm_    shadowGenerator.usePoissonSampling _eq_ true_sm_     return scene_sm_}_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Adrian","Date":"2014-09-16T10:43:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have also noticed something weird_co_ which has noting to do with shadows_co_ but... if i remove the box from my scene the ground look _qt_higher_qt_ than if there is a box ... isn_t_t weird? As you can in attached pictures_co_ with box it looks like the ground has a higher Y than without box on my scene..._lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_09_2014/post-10611-0-67362300-1410864181.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_09_2014/post-10611-0-67362300-1410864181.png_qt_ data-fileid_eq__qt_2733_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-10611-0-67362300-1410864181.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_09_2014/post-10611-0-47605700-1410864185.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_09_2014/post-10611-0-47605700-1410864185.png_qt_ data-fileid_eq__qt_2734_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-10611-0-47605700-1410864185.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-09-16T17:04:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@Adrian_dd_  I put your scene on the playground. This is what deltakosh wondering it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/playground/#1WNW4B_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/playground/#1WNW4B_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Adrian","Date":"2014-09-16T19:11:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh ok_co_ i misunderstood_co_ thanks for doing it for me dad72._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-09-16T22:31:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_is it better?_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/playground/#1WNW4B%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/playground/#1WNW4B#1_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-09-17T00:56:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For my part_co_ I do not find it better. If it is a solar system rotating or other_co_ the light is not always close to objects_co_ so the edges shadows will always have this problem._lt_/p_gt__lt_p_gt_More light is away from the objects and there are defects on the shadows. With several object on a large stage_co_ a single light may not be close to everything the objects._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Adrian","Date":"2014-09-17T05:36:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I tried to put the light further and i agree with dad72. There is an other point_co_ that shadow is very sharp_co_ is there no way to create a more realistic ambient ? like with occlusion ? I tried hemispheric light_co_ but this kind of light does not create shadows._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-09-17T18:04:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Shadow maps are really expensive if you want to get more precise maps_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-09-17T18:08:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_And soft shadows are EXTREMELY expensive_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-09-17T22:24:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_hmm..._lt_/p_gt__lt_p_gt_That seems kinda strange..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How do shadows work? Is it like a texture on the planes on a mesh?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If so_co_ couldn_t_t you only update the shadow when the caster or casted plane moves/rotates/etc?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_idk how this stuff works_co_ so maybe this is already so_co_ it just feels strange that having simple shadows is so expensive. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-09-17T23:00:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think that with a shader_co_ the shadows would be cheaper. I think I read this somewhere on another engine. But I could not know enough to understand how it works._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Adrian","Date":"2014-09-18T13:57:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I understand that shadow map are extremly expensive in ressources but on babylonjs.com there is a scene called _qt_The train_qt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How can i reproduce such exterior lighting? it would be perfect for me !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eucly2","Date":"2014-09-18T14:23:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think in BabylonJS the shadows generator use dynamics shadows and that is expensive but in the scene _qt_The train_qt_ the shadows are include in the textures (painting when they have create the scene in 3dsMax for example)._lt_/p_gt__lt_p_gt_That why is an optimized scene._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Adrian","Date":"2014-09-18T14:46:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ i see ... so if i understand well i can_t_t create an external lighting ? Even without shader ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-09-18T15:25:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can make very good outdoor lighting using port-processes. Watch the demo of WorlMonger_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-09-18T15:28:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@Dad72_dd_ Dynamic lights are ALREADY done using shaders _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Adrian","Date":"2014-09-18T15:53:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thats exactly what i wanna do ! Sources are downloadable ? there is some example somewhere?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-09-18T16:26:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ here_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Samples_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Samples_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Adrian","Date":"2014-09-19T09:52:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ so with your help i made some progress. Below is a screenshot of my scene. I used the worldmonger example to create my scene._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The black shadow is supposed to be a pine tree but as you can see there is almost no light on it ? i don_t_t understand how lighting works._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a point light called sun _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var sun _eq_ new BABYLON.PointLight(_qt_Omni_qt__co_ new BABYLON.Vector3(20_co_ 100_co_ 2)_co_ scene)_sm__lt_/pre_gt__lt_p_gt_The lighting on the ground is ok _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var ground _eq_ BABYLON.Mesh.CreateGround(_qt_ground_qt__co_ 30_co_ 30_co_ 30_co_ scene_co_ sun)_sm_ground.material _eq_ new BABYLON.StandardMaterial(_qt_ground_qt__co_ scene)_sm_ground.material.diffuseColor _eq_ BABYLON.Color3.FromInts(193_co_ 181_co_ 151)_sm_ground.material.specularColor _eq_ BABYLON.Color3.Black()_sm_ground.receiveShadows _eq_ true_sm_ground.checkCollisions _eq_ true_sm__lt_/pre_gt__lt_p_gt_But the lighting on the tree doesn_t_t work _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_asset/3D/_qt__co_ _qt_tree.babylon_qt__co_ scene_co_ function (newTree) {      setup(newTree[0])_sm_})_sm_            function setup(mesh) {     mesh.position.y _eq_ 5_sm_     mesh.scaling.x _eq_ mesh.scaling.y _eq_ mesh.scaling.z _eq_ 2_sm_     mesh.checkCollisions _eq_ true_sm_}_lt_/pre_gt__lt_p_gt_I don_t_t understand what i_t_am doing wrong._lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_09_2014/post-10611-0-29591600-1411119898.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_09_2014/post-10611-0-29591600-1411119898_thumb.png_qt_ data-fileid_eq__qt_2754_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-10611-0-29591600-1411119898_thumb.p_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]