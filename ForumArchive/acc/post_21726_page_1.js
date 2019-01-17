[{"Owner":"OMAR","Date":"2016-04-05T18:34:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tis there a way of detecting a collision between a known mesh and an unknown one?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor example here_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1M7CV7%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1M7CV7#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere we have box and let_t_s say I want to check if this box collides with left or right box but without using box.intersectsMesh(mesh) considering that we actually don_t_t know what we are colliding with and want to get the info about the object we are colliding with.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI searched the docs yet couldn_t_t find it_co_ is there way to do it? Thanks _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2016-04-05T18:45:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHey_co_ thats actually a good question.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"OMAR","Date":"2016-04-05T19:39:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m searching for something like a collision listener_co_ or more precisely_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_box.onCollisionEnter _eq_ function(other) {\n   // other is the object we have collided with\n   if (other.name _eq__eq__eq_ _qt_box2_qt_){\n      // name of the collided object is box2\n   } else if (other.tag _eq__eq__eq_ _qt_box3_qt_) {\n      // tag of the collided object is box3\n   }\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tPerhaps something like this? This function could fire every time when our object collides with another object and store a reference to that object that we collided with_co_ so that we can use its info later to implement some logic there\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-04-05T19:50:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthere is a collision event listener_co_ let me see if I can dig through Raans release notes_co_ he posted an updated on that not to long ago! and I actually got to use it_co_ im just not sure where that playground went._lt_br /_gt__lt_br /_gt_\n\tahhh I dont have time to dig right now actually I need to get back to work._lt_br /_gt__lt_br /_gt_\n\tRequesting _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt__sm_ he will know where to point you right away.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-04-05T19:59:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twell! I was summoned _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBabylon_t_s internal collision system might be helpful here - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1M7CV7%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1M7CV7#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you use moveWithCollision_co_ the onCollide function of the mesh will be triggered when it collides against a different mesh with checkCollisions set to true. This way you can collide against _qt_unknown_qt_ meshes. The reason it goes _qt_into_qt_ the other mesh is the ellipsoid which I didn_t_t set. And the reason it is triggered each frame is because moveWithCollision is set in a beforeRender loop. those things can be easily fixed _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"OMAR","Date":"2016-04-06T16:28:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ is there a way of doing this without using moveWithCollision? Or perhaps something more like a trigger that checks for collisions all the time and fires up when it detects one?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ Like for example in my previous PG keeping that lerping stuff yet still checking collisions_co_ that would be hella useful!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-04-06T16:39:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou could build one. Iterate thorough the entire list of meshes and check for intersection. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you wonder about performance_co_ this is the reason it doesn_t_t exist natively.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could tag meshes to be checked against_co_ or give them a specific mesh. This way your list of meshes will be smaller_co_ not impacting the performance so much.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"OMAR","Date":"2016-04-06T17:10:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ So I came up with this method_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1M7CV7%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1M7CV7#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it stupid? I mean... if it_t_s stupid but it works_co_ then it_t_s not stupid I guess lol?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ It also detects box2 when the scene starts_co_ I dont know why\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother Edit_dd_ RaananW you are a genius! Doing something like this is actually really powerful_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var colliders _eq_ []_sm_ // all meshes that can collide go here\n\nfunction checkCollisions(meshToCheckCollisions) {\n   scene.registerBeforeRender(function() {\n      for (var i _eq_ 0_sm_ i &lt_sm_ colliders.length_sm_ i++) {\n         if (meshToCheckCollisions.intersectsMesh(colliders[i]){\n            // do something or maybe return something\n         }\n      }\n   }\n}\n\nvar player _eq_ BABYLON.Mesh.CreateBlahblahblah(blahblah)_sm_\n\nvar boxes _eq_ BABYLON.Mesh.CreateBoxBlahblah(blahblah)_sm_\nvar anotherbox _eq_ boxes.createInstance(_qt_another box_qt_)_sm_\n\ncolliders.push(boxes_co_ anotherbox)_sm_\n\ncheckCollisions(player)_sm_ // perfect!_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-04-06T18:27:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_124023_qt_ data-ipsquote-contentid_eq__qt_21726_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1459962600_qt_ data-ipsquote-userid_eq__qt_20291_qt_ data-ipsquote-username_eq__qt_OMAR_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ OMAR said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t// do something or maybe return something\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYou will not be able to return anything from this function_co_ as this is running in a different scope. But_co_ you can do something like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var colliders _eq_ []_sm_ // all meshes that can collide go here\n\nfunction checkCollisions(meshToCheckCollisions_co_ onCollide) {\n   scene.registerBeforeRender(function() {\n      colliders.forEach(function(c) {\n          if (meshToCheckCollisions.intersectsMesh(c) {\n              onCollide &amp_sm_&amp_sm_ onCollide(c)_sm_\n          }\n      })_sm_\n   }\n}\n\nvar player _eq_ BABYLON.Mesh.CreateBlahblahblah(blahblah)_sm_\n\nvar boxes _eq_ BABYLON.Mesh.CreateBoxBlahblah(blahblah)_sm_\nvar anotherbox _eq_ boxes.createInstance(_qt_another box_qt_)_sm_\n\ncolliders.push(boxes_co_ anotherbox)_sm_\n\ncheckCollisions(player_co_ function(collidedAgainst) {\n   doSomethingWith(collidedAgainst)_sm_\n})_sm_ // perfect!_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]