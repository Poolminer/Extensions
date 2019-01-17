[{"Owner":"MauJovi","Date":"2016-02-17T17:12:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m implementing a 3d map with just some squares and I wanna know what_t_s the best way to make a pathfinding algorithm between these squares...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy first thought was loading a mesh with just the path_co_ but i_t_m not sure what will i need to implement and what babylon already has.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan someone give me some tips? I already implemented the A*_co_ but just with divs...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Suphi","Date":"2016-02-17T21:17:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmaybe some of these may help\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//qiao.github.io/PathFinding.js/visual/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//qiao.github.io/PathFinding.js/visual/_lt_/a_gt__lt_br_gt__lt_br_gt__lt_a href_eq__qt_http_dd_//ashblue.github.io/javascript-pathfinding/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//ashblue.github.io/javascript-pathfinding/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/qiao/PathFinding.js/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/qiao/PathFinding.js/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.growingwiththeweb.com/projects/pathfinding-visualiser/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.growingwiththeweb.com/projects/pathfinding-visualiser/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.easystarjs.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.easystarjs.com/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//buildnewgames.com/astar/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//buildnewgames.com/astar/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.briangrinstead.com/blog/astar-search-algorithm-in-javascript_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.briangrinstead.com/blog/astar-search-algorithm-in-javascript_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MauJovi","Date":"2016-02-17T22:47:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFirst_co_ thank you for your reply.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah_co_ I know some of these and_co_ as I said_co_ I already implemented a A* algorithm at _lt_a href_eq__qt_http_dd_//pathfindingus.hol.es/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//pathfindingus.hol.es/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy real question is_co_ what_t_s the best way to make my pathfinding algorithm(yeah_co_ I know I_t_ll need a mesh based one) interact with my loaded mesh? Should I use the physics engine included in Babylon or is there a simple way of doing that?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Suphi","Date":"2016-02-18T09:53:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou could raycast to check if the grid is free to walk on or not but i personally would not do that\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti would have a object like this\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#8B4513_sm__qt__gt_var collisionData _eq_ {}_sm__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#006400_sm__qt__gt_//add a blocked position_lt_/span_gt__lt_br_gt__lt_span style_eq__qt_color_dd_#8B4513_sm__qt__gt_collisionData[x+_qt_|_qt_+z] _eq_ true_sm__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#006400_sm__qt__gt_//remove a blocked position_lt_/span_gt__lt_br_gt__lt_span style_eq__qt_color_dd_#8B4513_sm__qt__gt_delete collisionData[x+_qt_|_qt_+z]_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#006400_sm__qt__gt_//check if position is blocked_lt_/span_gt__lt_br_gt__lt_span style_eq__qt_color_dd_#8B4513_sm__qt__gt_if(x+_qt_|_qt_+z in collisionData)_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MauJovi","Date":"2016-02-18T11:02:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDo you mean having an object with the grid of the walkable path? I was wondering doing it with navmesh_co_ like this with Three.js _lt_a href_eq__qt_http_dd_//nickjanssen.github.io/PatrolJS/demo/demo.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//nickjanssen.github.io/PatrolJS/demo/demo.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve researched something with recastjs but i was not able to figure it out how it works. _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Suphi","Date":"2016-02-18T12:40:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tif you want to check with a ray you could do it like this\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_font color_eq__qt_#006400_qt__gt_//length to check higher length would result in less checks but low resolution_lt_/font_gt__lt_br_gt__lt_span style_eq__qt_color_dd_#8B4513_sm__qt__gt_var length _eq_ 1_sm__lt_/span_gt__lt_br_gt__lt_br_gt__lt_span style_eq__qt_color_dd_#006400_sm__qt__gt_//create a vector3 that points to the right you would need to check all directions_lt_/span_gt__lt_br_gt__lt_span style_eq__qt_color_dd_#8B4513_sm__qt__gt_var right _eq_ new BABYLON.Vector3(1_co_ 0_co_ 0)_sm__lt_/span_gt__lt_br_gt__lt_br_gt__lt_span style_eq__qt_color_dd_#006400_sm__qt__gt_//position of the grid we are currently checking from_lt_/span_gt__lt_br_gt__lt_span style_eq__qt_color_dd_#8B4513_sm__qt__gt_var position _eq_ new BABYLON.Vector3(x_co_ y_co_ z)_sm__lt_/span_gt__lt_br_gt__lt_br_gt__lt_span style_eq__qt_color_dd_#006400_sm__qt__gt_//cast a ray from the position to the right  to see if the right is free_lt_/span_gt__lt_br_gt__lt_span style_eq__qt_color_dd_#8B4513_sm__qt__gt_var ray _eq_ new BABYLON.Ray(position _co_ right_co_ length)_sm__lt_br_gt_\n\tvar pickingInfo _eq_ scene.pickWithRay(ray_co_ function (item) {return item.checkCollisions _eq__eq_ true_sm_})_sm_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#006400_sm__qt__gt_//we return true for meshes that have there checkCollisions set to true_lt_/span_gt__lt_br_gt__lt_span style_eq__qt_color_dd_#8B4513_sm__qt__gt_if (pickingInfo.hit){_lt_/span_gt__lt_br_gt_\n\t _lt_span style_eq__qt_color_dd_#006400_sm__qt__gt_//the ray hit so its not free to move to the right_lt_/span_gt__lt_br_gt__lt_span style_eq__qt_color_dd_#8B4513_sm__qt__gt_}_lt_/span_gt__lt_br_gt__lt_br_gt_\n\tmore about the ray can be found here _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.3/Ray_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.3/Ray_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MauJovi","Date":"2016-02-18T17:17:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo_co_ the answer is yes_co_ i_t_ll have to implement my navmesh algorithm checking the collisions right? I thought there was an easier way of doing that since Babylon has a physics framework included. Anyway_co_ thanks for your help!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Suphi","Date":"2016-02-18T17:35:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti_t_m not aware of something built into babylon but i_t_m still a noob maybe someone who has more experiences could say if there are any built in classes to help with path finding\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.3_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.3_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MauJovi","Date":"2016-02-19T11:37:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m not expending time trying this right now_co_ cause I have more to do first. I_t_m just doing researches and everything heads me to implementing my own with the physics engine or using recast.js_co_ but the demos doesn_t_t even work for me and I don_t_t know what i_t_m doing wrong... Is there some other opinion? UP!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-19T12:48:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAFAIK_co_ there_t_s no built-in path finding function in the BJS framework. You have to use any external library.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MauJovi","Date":"2016-02-25T13:32:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tanyone? any help? _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-02-25T17:39:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is not a directly related bjs question _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt_ I_t_m not really experienced with path finding algorithms\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MauJovi","Date":"2016-02-25T20:42:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ll try something loading a mesh only with the path and making logic with its BoundingInfo... may it work? Thanks everyone\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hunts","Date":"2017-11-16T21:14:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thas anyone tried these libraries with any bjs?\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_117050_qt_ data-ipsquote-contentid_eq__qt_20581_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1455743865_qt_ data-ipsquote-userid_eq__qt_18697_qt_ data-ipsquote-username_eq__qt_Suphi_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 2/17/2016 at 4_dd_17 PM_co_ Suphi said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tmaybe some of these may help\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//qiao.github.io/PathFinding.js/visual/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//qiao.github.io/PathFinding.js/visual/_lt_/a_gt__lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//ashblue.github.io/javascript-pathfinding/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//ashblue.github.io/javascript-pathfinding/_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//github.com/qiao/PathFinding.js/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/qiao/PathFinding.js/_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.growingwiththeweb.com/projects/pathfinding-visualiser/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.growingwiththeweb.com/projects/pathfinding-visualiser/_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.easystarjs.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.easystarjs.com/_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//buildnewgames.com/astar/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//buildnewgames.com/astar/_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.briangrinstead.com/blog/astar-search-algorithm-in-javascript_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.briangrinstead.com/blog/astar-search-algorithm-in-javascript_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]