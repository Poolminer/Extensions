[{"Owner":"ProfessorF","Date":"2014-01-02T17:44:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m writing a research article on infographics_co_ and one of the examples I created was an infographic for videogames_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_01_2014/post-5799-0-73415700-1388687428.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_01_2014/post-5799-0-73415700-1388687428.png_qt_ data-fileid_eq__qt_664_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-5799-0-73415700-1388687428.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was reminded of this graphic as I was programming a third-person-follow camera in Babylon.js.  You can use these basic math concepts to move characters_co_ move missiles_co_ to position cameras etc.  And this is even the basic math you need to know for _qt_monsters_qt_ orienting towards a player and chasing the player._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_While this looks like it_t_s just for 2D games_co_ you can use it for basic 3D games--just think in terms of the XZ instead of the XY coordinate system._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyway_co_ yes_co_ I use a lot of linear algebra knowledge for more advanced graphics programming_co_ but for basic _qt_stuff_qt_ the knowledge in this diagram is good enough (I think)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Feedback would be appreciated. I_t_d like to hear what other basic math the community uses._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you in advance_co__co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_- Nick _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Update_dd_ Below is a more general infographic_co_ which may be of use to highschool math teachers for trignometry &amp_sm_ geometry problems.(I almost never use the arcsin_co_ arccos  functions in my virtual worlds--dx_co_ dy_co_ arctan_co_ distance formula) _lt_br_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_01_2014/post-5799-0-68793900-1388761614.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_01_2014/post-5799-0-68793900-1388761614.png_qt_ data-fileid_eq__qt_665_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-5799-0-68793900-1388761614.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bluevessel Games","Date":"2014-01-02T17:53:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_thanks_co_ very interesting!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-01-03T00:04:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This level of mathematics is incomprehensible to me. I have never learned algebra in my life._lt_br_gt_I have never made a game by employing of such mathematical._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-01-03T02:55:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_have to be conservative with distance. sqrts can be expensive. A lot of times you_t_re better off doubling your test value and dropping the sqrt._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_if (10&lt_sm__eq_sqrt(pow(2_co_2)+pow(3_co_2))) becomes if(pow(10_co_2)&lt_sm__eq_(pow(2_co_2)+pow(3_co_2)))_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_or really just flat our multiply them..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_if(10*10)&lt_sm__eq_((2*2)+(3*3)))_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ProfessorF","Date":"2014-01-03T15:17:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Good point reddozen.  I like learning about all the _qt_tweaks_qt_ developers make to the math._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Dad72_co_ depending on the game_co_ you may not need this math at all.  But if you have to rotate your avatar (A) towards some object (O)_co_ you need an angle_co_ and that_t_s the math I use to figure out that angle.  Although be careful in Babylon.js because 3D characters are already rotated -90 degrees (like dude).  So if you want dude facing 45 degrees_co_ you have to actually rotate -(90+45).  _lt_br_gt__lt_br_gt_I_t_ll add some examples to this thread.  But in one of the posts I show the code for clicking on a plane and orienting + moving Dude towards the click.  I_t_ll clean it up and repost here using the variables in the infographic._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks guys!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-03T15:39:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That_t_s just brutally cool_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ProfessorF","Date":"2014-01-03T17:07:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Dad72_co_ here_t_s one way I use the math_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_\n_lt_/p_gt__lt_div class_eq__qt_ipsEmbeddedVideo_qt_ contenteditable_eq__qt_false_qt__gt__lt_div_gt__lt_iframe width_eq__qt_480_qt_ height_eq__qt_270_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/ARs1iGMmoXg?feature_eq_oembed_qt_ frameborder_eq__qt_0_qt_ allowfullscreen_eq__qt_true_qt__gt__lt_/iframe_gt__lt_/div_gt__lt_/div_gt__lt_br_gt__lt_br_gt_Below is the exact code I used.  _lt_p_gt_ _lt_/p_gt__lt_p_gt_Note_dd__lt_/p_gt__lt_p_gt_1) All y-variables are replaced by z-variables because the plane is XZ_co_ not XY_lt_/p_gt__lt_p_gt_2) Where I click becomes ox_co_oz_lt_/p_gt__lt_p_gt_3) Dude starts off rotated 90 degrees so you_co_ can_t_t just do_dd_ A_eq_atan2(dz_co_ dx). You have to correct_dd_ A_eq_-(Math.PI/2+atan2(dz_co_ dx))_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_CODE using the basic math. If you use this code_co_ you will have to put dude.babylon in the folder Assets/Dude_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_&lt_sm_!DOCTYPE html&gt_sm_&lt_sm_html xmlns_eq__qt_http_dd_//www.w3.org/1999/xhtml_qt_&gt_sm_&lt_sm_head&gt_sm_    &lt_sm_title&gt_sm_Tutorial_dd_ Basic Math for Video Games&lt_sm_/title&gt_sm_    &lt_sm_script src_eq__qt_js/babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_    &lt_sm_script src_eq__qt_js/hand.js_qt_&gt_sm_&lt_sm_/script&gt_sm_    &lt_sm_script&gt_sm_        window.addEventListener(_qt_load_qt__co_ start)_sm_  // first line of code executed        window.addEventListener(_qt_click_qt__co_ handleClick)_sm_         var canvas_co_ engine_co_ scene_co_ light_co_ camera_co_ zero_co_ ground_co_            Avatar_co_ ox_co_ oz_co_ dx_co_ dz_co_ A_co_ D_sm_        function start() {            canvas _eq_ document.getElementById(_qt_cvRAVE_qt_)_sm_            engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_            scene _eq_ new BABYLON.Scene(engine)_sm_            light _eq_ new BABYLON.DirectionalLight(_qt_sun_qt__co_ new BABYLON.Vector3(1_co_ -1_co_ 1)_co_ scene)_sm_             camera _eq_ new BABYLON.FreeCamera(_qt_cam_qt__co_ new BABYLON.Vector3(0_co_ 8_co_ -10)_co_ scene)_sm_            ground _eq_ new BABYLON.Mesh.CreateGround(_qt_ground_qt__co_ 1024_co_ 1024_co_ 1_co_ scene)_sm_            ground.material _eq_ new BABYLON.StandardMaterial(_qt_texGround_qt__co_ scene)_sm_            ground.material.diffuseTexture _eq_ new BABYLON.Texture(_qt_geotrigtexture.png_qt__co_ scene)_sm_            BABYLON.SceneLoader.ImportMesh(_qt_him_qt__co_ _qt_assets/dude/_qt__co_ _qt_dude.babylon_qt__co_ scene_co_ function (meshes_co_ particles_co_ skeletons) {                Avatar _eq_ meshes_sm_                Avatar[0].scaling _eq_ new BABYLON.Vector3(.1_co_ .1_co_ .1)_sm_                scene.beginAnimation(skeletons[0]_co_ 0_co_ 120_co_ true_co_ 1.0)_sm_            })_sm_            scene.activeCamera.attachControl(canvas)_sm_            engine.runRenderLoop(update)_sm_        }        function update() {            if (Avatar) {                ax _eq_ Avatar[0].position.x_sm_                az _eq_ Avatar[0].position.z_sm_                dx _eq_ ox - ax_sm_                dz _eq_ oz - az_sm_                D _eq_ Math.sqrt(dx * dx + dz * dz)_sm_                // Dude is rotated 90_sm_ Positive Y rotations are clockwise                // You need to correct dude by duderot+90--backwards (negative)                A _eq_ -(Math.atan2(dz_co_ dx) + Math.PI / 2)_sm_                                if (D &gt_sm_ 1) {                    Avatar[0].rotation.y _eq_ A_sm_                    Avatar[0].position.x +_eq_ (dx / D)_sm_                    Avatar[0].position.z +_eq_ (dz / D)_sm_                                   }            }            scene.render()_sm_        }        function handleClick(event) {            // _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/11---Picking-collisions_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/11---Picking-collisions_lt_/a_gt_            var picked _eq_ scene.pick(event.clientX_co_ event.clientY)_sm_            if (picked.hit) {                ox _eq_ picked.pickedPoint.x_sm_                oz _eq_ picked.pickedPoint.z_sm_            }        }    &lt_sm_/script&gt_sm_    &lt_sm_style&gt_sm_        html_co_ body {            width_dd_ 100%_sm_            height_dd_ 100%_sm_            padding_dd_ 0_sm_            margin_dd_ 0_sm_        }        #cvRAVE {            width_dd_ 100%_sm_            height_dd_ 100%_sm_        }    &lt_sm_/style&gt_sm_&lt_sm_/head&gt_sm_&lt_sm_body&gt_sm_    &lt_sm_canvas id_eq__qt_cvRAVE_qt_&gt_sm_&lt_sm_/canvas&gt_sm_&lt_sm_/body&gt_sm_&lt_sm_/html&gt_sm_ _lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-01-03T18:04:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks You ProfessorF_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The ideal would be to have in Babylon in BABYLON.Mesh the function _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt__lt_span_gt_LookAt_lt_/span_gt_(_lt_span_gt_worldPosition_lt_/span_gt__dd_Vector3_co_ _lt_span_gt_worldUp_lt_/span_gt__dd_Vector3 _eq_ Vector3.up)_sm__lt_/span_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_Ennemie.position.LookAt(new BABYLON.Vector3(Player.position.x_co_ Player.position.y_co_ Player.position.z)_co_ BABYLON.Vector3.up)_sm__lt_/pre_gt__lt_p_gt_Thus the enemy would look at in the direction of the player and move in his direction._lt_br_gt__lt_br_gt_@DeltaKosh_dd_ It would be possible to have this feature in Babylon._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-03T18:10:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If Prof is ok to make a pull request it will be great_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ProfessorF","Date":"2014-01-03T18:14:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ that would be useful.  You will have to add a rotation-correction factor because most character models are rotated -90 degrees._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Although it may still be good to know the math so that you have more flexible control over the movement of objects._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-01-03T18:14:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You have not replied to my question DeltaKosh?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-03T18:16:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I do. I said yes and I proposed Prof to do the job_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-01-03T18:19:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ah_co_ ok_co_ i had not understood. Sorry and Thank You._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ProfessorF","Date":"2014-01-03T19:12:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Haha_co_ yeah I can add that.  I_t_ll add that over the weekend!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-01-03T19:50:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_18700_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_2872_qt_ data-ipsquote-username_eq__qt_ProfessorF_qt_ data-cite_eq__qt_ProfessorF_qt_ data-ipsquote-timestamp_eq__qt_1388776365_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Haha_co_ yeah I can add that.  I_t_ll add that over the weekend!_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Great if you add a function LookAt( )_sm_ Thanks in advance ProfessorF_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-01-04T15:45:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_With the function _lt_strong_gt_LookAt( )_lt_/strong_gt__co_ it would be interesting also to be able to retrieve the distance between the player and the target._lt_br_gt_For example_dd_ (Member _qt__lt_strong_gt_magnitude_lt_/strong_gt__qt_)_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_dirToMain _eq_ Player.position - Enemi.position_sm_if(dirToMain.magnitude &gt_sm_ 2) //play movement...else //stop movement_lt_/pre_gt__lt_p_gt_his would in addition to watch the target with _qt__lt_strong_gt_LookAt( )_lt_/strong_gt__qt__co_ to know the distance that the separated._lt_br_gt__lt_br_gt_It would be also interesting to have a Member _qt__lt_strong_gt_velocity_lt_/strong_gt__qt_ for the movement of a mesh. (rigidbody.velocity) or/and function _lt_strong_gt_TransformDirection(BABYLON.Vector3.forward * speed)_lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What you think of that?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-04T17:02:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_the distance is simple to evaluate_dd_ _lt_span style_eq__qt_color_dd_rgb(102_co_0_co_102)_sm__qt__gt_Player_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_position.subtract(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_0_co_102)_sm__qt__gt_Enemi_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_position).length()_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-01-04T17:29:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Cool_co_ Thanks DeltaKosh._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-01-04T18:41:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_18790_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_2872_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1388854941_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_the distance is simple to evaluate_dd_ _lt_span style_eq__qt_color_dd_rgb(102_co_0_co_102)_sm__qt__gt_Player_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt_position.subtract(_lt_span style_eq__qt_color_dd_rgb(102_co_0_co_102)_sm__qt__gt_Enemi_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt_position).length()_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_dad72_co_ you may want to use _lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_getAbsolutePosition _lt_/span_gt_instead of _lt_span style_eq__qt_background-color_dd_rgb(247_co_247_co_247)_sm_font-size_dd_12px_sm__qt__gt_position _lt_/span_gt_just in case Player and Enemi do not have the same parent. If they have the same parent or no parent_co_ you are fine to use position like suggesting by deltakosh._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ProfessorF","Date":"2014-01-06T04:16:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Okay Dad72_co_ I almost have something working. Just have to make sure it_t_s efficient and check on some weird rotation. Anyway_co_ is this basically what you wanted for the LookAt_dd__lt_br_gt__lt_br_gt__lt_/p_gt__lt_div class_eq__qt_ipsEmbeddedVideo_qt_ contenteditable_eq__qt_false_qt__gt__lt_div_gt__lt_iframe width_eq__qt_480_qt_ height_eq__qt_270_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/R_4kMV2lBVE?feature_eq_oembed_qt_ frameborder_eq__qt_0_qt_ allowfullscreen_eq__qt_true_qt__gt__lt_/iframe_gt__lt_/div_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-01-06T08:37:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That seems nice ProfessorF. Do you have to call LookAt any time you need it (in an update function for example) or is it like a flag that you add to the mesh so it will always look at its target? Something similar to physics constraint._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-01-06T12:00:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ that is exactly this ProfessorF. Good works. It shalt be very useful._lt_br_gt_Thank You_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ProfessorF","Date":"2014-01-06T14:03:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_18951_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_2872_qt_ data-ipsquote-username_eq__qt_gwenael_qt_ data-cite_eq__qt_gwenael_qt_ data-ipsquote-timestamp_eq__qt_1388997424_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_That seems nice ProfessorF. Do you have to call LookAt any time you need it (in an update function for example) or is it like a flag that you add to the mesh so it will always look at its target? Something similar to physics constraint._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Yes_co_ currently you have to call it in update. Although I can add a flag.  Thanks._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-01-06T14:21:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Great. It could be nice to add a constraints mechanism to mesh like an array of callbacks which would be called at each update. Thus_co_ your _qt_flag_qt_ would be a callback to constrain the mesh to look at. I can think about another constrain _qt_catch me if you can_qt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ This constrain would be used instead of infiniteDistance for example._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-07T03:08:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Constraints can be easily done with mesh._lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_registerBeforeRender(func)_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]