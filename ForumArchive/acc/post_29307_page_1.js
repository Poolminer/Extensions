[{"Owner":"eljuko","Date":"2017-03-24T14:54:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow receive shadow actually works? i_t_v been trying to get it work on imported meshes without success. the weird part is that it works on plain plane just well _dd_S\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_v been trying something like this for hours and just can_t_t get it work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_EDIT_dd_ the plan was to get the mesh to receive shadows from itself._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\t\tvar light _eq_ new BABYLON.DirectionalLight(_qt_dir01_qt__co_ new BABYLON.Vector3(-1_co_ -2_co_ -1)_co_ scene)_sm_\n\t\tlight.position _eq_ new BABYLON.Vector3(20_co_ 40_co_ 20)_sm_\n\t\tlight.intensity _eq_ 1_sm_\n\n\t\tvar shadowGenerator _eq_ new BABYLON.ShadowGenerator(2048_co_ light)_sm_\n\t\tshadowGenerator.useVarianceShadowMap _eq_ true_sm_\n\t\tshadowGenerator.usePoissonSampling _eq_ true_sm_ \n\t\tshadowGenerator.bias _eq_ 0.01_sm_\n\n\t\tBABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_assets/models/sample/_qt__co_ _qt_house1.babylon_qt__co_ scene_co_ function (newMesh){\n\t\t\tnewMesh[0].material.specularPower _eq_ 0_sm_\n\t\t\tnewMesh[0].material.specularColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_\n\t\t\tnewMesh[0].material.diffuseColor _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\n\t\t\tnewMesh[0].material.emissiveColor _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\n\t\t\tnewMesh[0].position.x _eq_ -4_sm_\n\t\t\tnewMesh[0].position.z _eq_ 6_sm_\n\t\t\tnewMesh[0].position.y _eq_ -0.05_sm_\n\t\t\tnewMesh[0].rotation.y _eq_ Math.random()*(2*Math.PI)_sm_\n\t\t\tshadowGenerator.getShadowMap().renderList.push(newMesh[0])_sm_\n\t\t\tnewMesh[0].receiveShadows _eq_ true_sm_\n\t\t})_sm_\n\n\t\tvar material1 _eq_ new BABYLON.StandardMaterial(_qt_texture1_qt__co_ scene)_sm_\n\t\tmaterial1.emissiveColor _eq_ new BABYLON.Color3(0_co_0_co_0)\n\t\tmaterial1.diffuseTexture _eq_ new BABYLON.Texture(_qt_assets/models/sample/sand.png_qt__co_ scene)_sm_\n\t\tmaterial1.diffuseTexture.uScale _eq_ 500.0_sm_\n\t\tmaterial1.diffuseTexture.vScale _eq_ 500.0_sm_\n\n\t\tvar plane _eq_ BABYLON.Mesh.CreatePlane(_qt_plane_qt__co_ 1000.0_co_ scene)_sm_\n\t\tplane.rotation.x +_eq_ Math.PI / 2_sm_\n\t\tplane.material _eq_ material1_sm_\n\t\tplane.receiveShadows _eq_ true_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAnyone knows what i_t_m doing wrong?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- regards_co_ eljuko\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/shadowNotFound404.png.042bfddb11ab9abb916bbb5212702509.png_qt_ data-fileid_eq__qt_12194_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_shadowNotFound404.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12194_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/shadowNotFound404.png.042bfddb11ab9abb916bbb5212702509.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-03-24T19:13:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13444-eljuko/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13444_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13444-eljuko/_qt_ rel_eq__qt__qt__gt_@eljuko_lt_/a_gt__co_ good to see you again._lt_/span_gt_  Have you tried putting the s-gen creation... inside the onSuccess callback?  Might work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s try a _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1CMD3G%2320_qt_ rel_eq__qt_external nofollow_qt__gt_playground_lt_/a_gt_.  Yeah_co_ we got some shadows happening there.  Hmm.  Seeing some quality inconsistency.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot sure why creating shadowGen OUTSIDE-OF callback... would fail... but maybe.  Use this playground to test stuff_co_ as wanted.  Talk soon_co_ be well.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eljuko","Date":"2017-03-24T21:00:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey Wingnut! Nice to see you again too!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWill test it tomorrow_co_ i_t_ll let you know how it turns out.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-03-24T22:32:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI just noticed that you wanted the model to receive shadows from _lt_em_gt_itself._lt_/em_gt_  Perhaps I need to use a different model... something with some bends.  I_t_ll sniff around for a better test model.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUpdate_dd_  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1CMD3G%2321_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1CMD3G#21_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsing _qt_dude_qt_ model_co_ setting .receiveShadows on all mesh_co_ with light positioned -x and +y (high left)_co_ aimed... (1_co_ -1_co_ 0) (equal amounts of down and right?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think I see SOME shadow on inside of +X (right) leg.  But -X (left) arm _lt_em_gt_should_lt_/em_gt_ be casting a shadow on the side of the torso.  I don_t_t see it.  Turning on Poisson or VSM makes things... pretty ugly.  Head should also cast shadow onto top of right shoulder.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I understood what DK once said_co_ directional light .position is not important to lighting_co_ but IS important and used for origin point of the shadowMap camera.  Does that make sense?  Anyway_co_ directionLight.position should be considered in these tests.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s increase the directionalLight Y position... a lot...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1CMD3G%2322_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1CMD3G#22_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLooking better at Y _eq_ 150 in line 10.  Good arm shadow_co_ good head shadow_co_ good ground shadow.  Our Dude is about 100 units tall.  Getting that light elevated...  for use in the shadow generator... was super important.  *shrug*  Its .position _eq__eq_ shadowMap point-of-perspective... seemingly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot sure what the problems are_co_ if any exist.  I_t_m just making test playgrounds.  This one is better prepared for testing cast-on-self issues.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eljuko","Date":"2017-03-25T06:56:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNice demo_co_ you definitely made something i couldn_t_t _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWith _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1CMD3G%2323_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1CMD3G#23_lt_/a_gt_ that setup it actually starts to look pretty good!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat if i had like hundreds of imported scenes from blender_co_ do i have to make different shadowGen and light for each of them? I_t_m still breaking everything in my project but at least your demos gave me hope.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_v been working on this projects backend now_co_ and to be honest i_t_v been trying avoid this 3d part for far too long _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ So pardon me if i present stupid questions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-03-25T12:54:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again_co_ and no_co_ you didn_t_t ask any stupid questions. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tGenerally_co_ there_t_s only one _qt_scene_qt_ but there can be many _lt_u_gt_mesh_lt_/u_gt__co_  loadable from one or many .babylon files or using one of our mesh importer extensions (for .obj_co_ .gItf_co_ and .stl_co_ I believe).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd generally speaking_co_ one shadowGenerator per light_co_ but many mesh can be pushed into each shadowMap.renderList array.  Also_co_ our lights have _qt_excludedMeshes_qt_ and _qt_includedMeshes_qt_ settings_co_ and all our light-types EXCEPT the HemisphericLight... can be used as shadowGenerator lights.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m rather inexperienced myself.  I don_t_t know much about variance shadow maps (VSM)_co_ nor about Poisson_co_ nor about bias settings.  Some of these things are webGL-based and not necessarily BabylonJS-based.  I think webGL has no _qt_native_qt_ lights or shadows... so it is Deltakosh and the Core Team who have borrowed/coded our lights and shadows... probably using _qt_approved techniques_qt_ that can be learned on the web.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Note_dd__lt_/strong_gt_  Notice that VSM is now _qt_deprecated_qt_ and now _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Lights/Shadows/babylon.shadowGenerator.ts#L98_qt_ rel_eq__qt_external nofollow_qt__gt_ESM is recommended_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve heard shadows are performance soaks... a little heavy on the frame rates.  I think they might use something like _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Lights/Shadows/babylon.shadowGenerator.ts#L143_qt_ rel_eq__qt_external nofollow_qt__gt_renderTargetTextures for attaining the shadowMap_lt_/a_gt_ (like a screengrab snapshot from a temp camera located at the light_t_s position).  Therefore_co_ in SOME cases_co_ the BJS framework tries to avoid updating the shadow_t_s primary light... for every frame.  There is an adjustment on lights... for this reason.  light.needRefreshPerFrame()  (_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Lights/Shadows/babylon.shadowGenerator.ts#L440_qt_ rel_eq__qt_external nofollow_qt__gt_see source_lt_/a_gt_ for more info).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn fact_co_ while you are _qt_touring_qt_ the shadowGenerator_t_s TypeScript code... relax and tour.  Notice all the caching attempts.  These _qt_cachings_qt_ are some of the reasons why BJS out-performs the other frameworks.  Core programmers_co_ constantly trying to accelerate potential slow-down points.  When you say _qt_hundreds of imported scenes_qt_... that is not realistic_co_ and that won_t_t happen.  Hundreds of mesh... perhaps... but that too_co_ is not overly realistic.  You will likely use incremental loading_co_ instead.  And you may find that JS can _lt_strong_gt_generate_lt_/strong_gt_ _lt_em_gt_some_lt_/em_gt_ mesh... easier/faster than you can import Blender models.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ in other words... you_t_re in a browser_co_ in JS.  Don_t_t expect to have the power to take over the world.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  But... use the horsepower that you DO have.... wisely_co_ and often with trickery and visual foolery... and you will win the perf wars as well as anyone.  Look carefully at that shadowGenerator code that Deltakosh and his team coded.  It_t_s pretty nice.  Learn to work WITH-IT... and you will have good success with many-mesh shadows.  Do playground searches for shadowGenerator... see what others have done... check their playground_t_s performance numbers_co_ use browser_t_s dev-tools _qt_profiling_qt_ system... to see _qt_performance strangulation points_qt_.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  (bog points)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tScary_co_ and not so scary_co_ right?  That shadowGen is written in TypeScript/_lt_a href_eq__qt_https_dd_//raw.githubusercontent.com/BabylonJS/Babylon.js/master/dist/babylon.2.5.max.js_qt_ rel_eq__qt_external nofollow_qt__gt_JavaScript_lt_/a_gt_ ... so... that_t_s just a simple programming language that even your dog can learn.  So_co_ if you wanted to do so... you could borrow the current shadowGenerator code... (Deltakosh allows this)_co_ and put it into your project_co_ and even put _lt_strong_gt_your name_lt_/strong_gt_ on it_co_ and then hack it silly or not.  You can over-ride/over-rule the default shadowGen system.  Anything goes.  Maybe we haven_t_t got the computing horsepower to take over the world_co_ but we DEFINITELY have been given the tools and knowledge to do so. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust think of the _qt_worth_qt_... of that shadowGenerator code... use it to steal_co_ use it to learn-from_co_ use it to make great shadows_co_ and use it to learn about... how webGL treats lights and shadows (very rudely).  I really like touring our shadowGenerator source code.  I learn something new every time_co_ and I get stuck in a fun shadow project for 2-3 days_co_ playing_co_ testing_co_ learning.  They_t_re pretty cool_co_ and shadows add MUCH _qt_feel_qt_ to almost any scene.  It_t_s a curious _qt_how did they do that?_qt_ point of interest_co_ to say the least.  Render on!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eljuko","Date":"2017-03-25T16:45:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks again for mindblowing set. I_t_ll definitely look into that source once i have the time for it. Maybe after this project.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAbout hundreds of scenes from blender_dd_ my plan was to create something from multiple exports on the fly. And when i speak about a scene from blender it basically means 1-5 rather lowpoly meshes_co_ but not sure if i should dump every single mesh in one scene though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan_t_t tell if i can take over the world with javascript but if i_t_m ever gonna do it_sm_ i_t_m going to do it with JS _dd_]\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyhow_co_ finally got the time to start working on my game which has been in my head for really long now. I_t_m super excited about this project and hopefully will make announcement here a bit later this year.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTill i feel dumb again!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-03-25T22:20:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_168604_qt_ data-ipsquote-contentid_eq__qt_29307_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1490460312_qt_ data-ipsquote-userid_eq__qt_13444_qt_ data-ipsquote-username_eq__qt_eljuko_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t5 hours ago_co_ eljuko said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tbut not sure if i should dump every single mesh in one scene though.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t*nod*.  Yeah_co_ conditionally loading multiple BJS files could be useful under certain circumstances.  I really have low experience in those areas_co_ and it_t_s very dependent upon how your game operates.  The camera frustum (camera maxZ) will keep the render performance good... _lt_strong_gt_if_lt_/strong_gt_ user is out of range of other scenes/mesh.  But just because unneeded mesh aren_t_t being rendered... doesn_t_t mean they are gone from memory/cache.  Still_co_ it seems that BJS low frame rates are mostly caused by rendering bog_co_ and not by memory issues.  Still again_co_ there are garbage collection issues_co_ sometimes.  *scratch scratch*\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor ease of talking_co_ let_t_s call each of your scenes... a _qt_set_qt_... as in... a movie set (where a scene is shot).  Let_t_s pretend each _qt_set_qt_ has 5 mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow_co_ must the user have more than one _qt_set_qt_ in-view at any time?  Can/will they be spaced some distance apart from each other_co_ and user must travel?  Must they see the targeted set they are traveling-to?  Will you need perhaps 10 of these _qt_hundreds of sets_qt_ remaining rendered at the same time?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNosey_co_ aren_t_t I?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Thinkin_t_.  _qt_hundreds of_qt_ is sort of scary.  heh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eljuko","Date":"2017-03-27T06:57:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_ sorry for a bit late reply. The _qt_world_qt_ or should i say game board / area is rather small and almost fully dynamic depending on some random factors. User can almost see the whole game area in first view.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNosey_co_ perhaps _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ but i don_t_t mind. You actually put me think once again and i sure can clamp environmental meshes with subjects like desert_co_ city_co_ jungle and the list goes on. Originally i was planning to import each individual tree and rock for example which is a bit pointless.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut there are the random and userselect factor that kinda demand either that every single mesh will be loaded in 1 import or import as needed _eq_ multiple imports which may raise to rather large numbers_co_ but i think it will pay off_sm_ maybe not in the beginning but later on.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]