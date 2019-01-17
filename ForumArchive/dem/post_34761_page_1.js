[{"Owner":"jodo","Date":"2017-12-27T23:28:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Guys! I haven_t_t been active here for quite some time and haven_t_t done anything with Babylon.JS for quite a long time. But after checking out the changelogs_co_ I saw that we can now run Babylon.js Server Side_co_ how awesome is that!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I had to squeeze in some time and implement a proof of concept multiplayer simulation with Client and Server side physics engine. It_t_s quite basic. The Client can control a ball by spinning it forward or backward (with _lt_strong_gt_W_lt_/strong_gt_ and _lt_strong_gt_S_lt_/strong_gt_). By changing the camera angle (with _lt_strong_gt_A_lt_/strong_gt_ and _lt_strong_gt_D_lt_/strong_gt_) you can change the direction of the impulse. With _lt_strong_gt_Space_lt_/strong_gt_ you can jump around. To check out how it behaves with multiple players you can either ask someone to also visit the site at the same time or just open a new tab in your browser. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTechnical it is rather simple. Server and Client communicate via Websockets. The client applies impulses to it_t_s ball_co_ these parameters for these impulses are sent to the server. The server applies these also and keeps the state for the whole world up to date. Each render loop the server sends the current state to all the clients (ideally 60 Hz). The clients then correct the position_co_ direction and velocity of all objects including their own ball if needed. I haven_t_t tried it out with higher delays_co_ but I would suspect the result will be quite _qt_jumpy_qt_. Interpolation for correction and prediction of movement is not (yet) implemented. _lt_br /_gt_\n\tAdded Server Update Rate and Ping to see lags and delay in perspective to these metrics. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the code_dd_ _lt_a href_eq__qt_https_dd_//github.com/j-o-d-o/multiplayer-babylon-js-game_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/j-o-d-o/multiplayer-babylon-js-game_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the Demo_dd_ _lt_a href_eq__qt_http_dd_//185.82.21.82_dd_8700/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//185.82.21.82_dd_8700/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a great article about Server-Client Game Networking techniques_dd_ _lt_a href_eq__qt_http_dd_//www.gabrielgambetta.com/client-server-game-architecture.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.gabrielgambetta.com/client-server-game-architecture.html_lt_/a_gt_ which was somewhat the motivation to implement this proof of concept.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_16400_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/multiplayer_game.png.91c0fb7e547801c665b4a0223ac9c237.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_multiplayer_game.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16400_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/multiplayer_game.thumb.png.aec4ae229e743f470b1b080a6fda550f.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-28T16:44:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWoot!!! This is kinda cool!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Threedy","Date":"2017-12-28T16:57:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWell done! I tried this a couple years ago_co_ but I ran cannon.js separately on the server (at that time I don_t_t think there was any Babylon.js implementation on the server). I see that you are using Oimo.js which should perform a bit better than Cannon (with the cost of less features). At the time_co_ once I had &gt_sm_6 clients joining_co_ the game becomes very laggy (even including interpolation). I see that the same also happens in your demo. Do you have any plans to tackle this issue? I couldn_t_t figure it out and thought that it was simply the physics engine _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_._lt_br /_gt__lt_br /_gt_\n\tLooking forward for more updates!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jodo","Date":"2017-12-28T18:06:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_@Threedy Yeah_co_ the server side NullEngine() just came out with v3.1 about a month ago (according to the _t_what_t_s new.md_t_ file)_co_ so you had a much much harder task 6 month ago _sm_ )_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_I haven_t_t got time yet to go into detailed performance debugging. But I would say it is a network problem and not a physics engine / simulation issue. 10 objects are definitely no problem at all for the physics engine_co_ even on bad hardware. There is almost no CPU used on the Server_co_ but pretty much all of Memory is allocated. (Also_co_ other small test applications are running on it). And it is a really small server (just 1GB of RAM). I am not a network specialist_co_ but I assume decreasing the server update rate could help as well as decreasing the size of each update message. _lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_When 10 users are connected_co_ all RAM is used and there is about 800kb/s outgoing traffic. You can see that the ping stays pretty much the same for the first few connections and at some point_co_ just skyrockets to 2000 ms and higher. I assume TCP packages start getting lost while 10*60 new packages are Queuing up per second which quickly stacks up to such a high ping. (Someone please correct me in case I am talking garbage here) _sm_ ). _lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_I also assume (yes_co_ lots of assuming here) that using UDP would decrease the network problem_co_ but as we know_co_ it isn_t_t possible with browsers. _lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gijs","Date":"2017-12-28T22:10:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOw_co_ for a minute I thought I overloaded the server _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_pq7Nytr.jpg_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_564_qt_ src_eq__qt_https_dd_//i.imgur.com/pq7Nytr.jpg_qt_ width_eq__qt_1000_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut thanks for sharing this_co_ it_t_s interesting and helpful.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Threedy","Date":"2017-12-28T23:42:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_199782_qt_ data-ipsquote-contentid_eq__qt_34761_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1514484394_qt_ data-ipsquote-userid_eq__qt_18042_qt_ data-ipsquote-username_eq__qt_jodo_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t5 hours ago_co_ jodo said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt__lt_span_gt_@Threedy Yeah_co_ the server side NullEngine() just came out with v3.1 about a month ago (according to the _t_what_t_s new.md_t_ file)_co_ so you had a much much harder task 6 month ago _sm_ )_lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt__lt_span_gt_I haven_t_t got time yet to go into detailed performance debugging. But I would say it is a network problem and not a physics engine / simulation issue. 10 objects are definitely no problem at all for the physics engine_co_ even on bad hardware. There is almost no CPU used on the Server_co_ but pretty much all of Memory is allocated. (Also_co_ other small test applications are running on it). And it is a really small server (just 1GB of RAM). I am not a network specialist_co_ but I assume decreasing the server update rate could help as well as decreasing the size of each update message. _lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt__lt_span_gt_When 10 users are connected_co_ all RAM is used and there is about 800kb/s outgoing traffic. You can see that the ping stays pretty much the same for the first few connections and at some point_co_ just skyrockets to 2000 ms and higher. I assume TCP packages start getting lost while 10*60 new packages are Queuing up per second which quickly stacks up to such a high ping. (Someone please correct me in case I am talking garbage here) _sm_ ). _lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt__lt_span_gt_I also assume (yes_co_ lots of assuming here) that using UDP would decrease the network problem_co_ but as we know_co_ it isn_t_t possible with browsers. _lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHmm you_t_re right. I most likely have messed up something there.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ looking forward to your project and hopefully more updates!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"timetocode","Date":"2018-05-03T22:29:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey sorry to post 6  months after you wrote this_co_ but I_t_m a network programmer (mostly) who has recently discovered BJS + NullEngine and I was wondering how to get the physics in NullEngine working. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy code is very similar to yours_co_ I_t_m not sure what I_t_m doing wrong. I made a thread about it. I_t_ve also posted a buncha optimization tricks below if anyone is interested.\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed8336655747_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/37371-nullengine-and-oimo/?do_eq_embed_qt_ style_eq__qt_height_dd_339px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m the author of nengi.js which is a networking layer / engine. Performance has been my focus_co_ and depending drastically on the game and how its programmed (and the hardware)_co_ it has been possible to get 50-300 concurrent players_co_ and 100s or 1000s of other entities in a single instance. My only shipped products are in 2D so far. I don_t_t have much experience in 3D_co_ but representing a change in xyz and rotation xyz is gonna be a bit heavier than the simpler data in 2D. I would still guesstimate that 20-150 CCU are possible depending on many variables_co_ and that the game client can run at 60-144 fps while the server runs at 20 fps.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe first and largest is to bundle the game state for any given frame from the server into a single snapshot. So rather than sending one client 20 messages about the 20 objects around it_co_ we can create one message with 20 objects in it. Even while remaining in JSON  this can push games from ~5-15 CCU to 25-40 CCU. The reason this is so massive is that socket.send is expensive to call (even with very little data in it). This also makes that whole clientside prediction stuff easier later on.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tReducing server tick rates is good for performance_co_ and not as bad for the game as it may seem. Most high performance first person shooters even in 2018 use a server tick rate of 20. I_t_ve seen one that uses 33. This will require entity interpolation on the clientside to keep the game running at requestAnimationFrame rates. The client can save the snapshots it receives from the server each frame_co_ and when it has 2 or more of them_co_ it can begin moving the clientside representation of the objects to positions that are lerped between the two snapshots. This allows us to have 60 or 144 fps (or whatever) movement on the client.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe id_co_ x_co_ y_co_ z_co_ rotX_co_ rotY_co_ and rotZ are probably 99% of the data sent for a 3d multiplayer game. So these are candidates for optimization. The id is the single most sent property. In binary an id can be a UInt16 usually. In JSON/text anything short will do_co_ just avoid UUIDs. The position/rotation in binary will be great as Float32s. In JSON perhaps just trimming a few decimal places is as good as it gets (but still pretty big!).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSending input (commands_co_ keystrokes_co_ etc) from client to server is rarely a choke point_co_ so not much optimization needs to occur here. Despite how counterinuitive it may sound_co_ it is possible to move a player at 60 fps or 144 fps even if the server tick rate is 20. The trick to doing this is to collect the client_t_s inputs across a frame (in whatever format you desire_co_ e.g. w_dd_ true_co_ a_dd_ false_co_ s_dd_ false_co_ d_dd_ true_co_ facing_dd_xyz rotations) and then to stamp the clientside deltaTime for that frame to the data. Upon receiving the data on the server_co_ the server can then deterministically move the player.  For example if W was true_co_ the server can set the entity to face whaterver direction the client said it was facing_co_ calculate a normalized forward vector_co_ and then move by speed * client.command.deltaTime. This is a deterministic calculation thanks to having deltaTime stamped on. The client itself (if performing client-side prediction) can process this identical command locally_co_ thus moving by the same amount. Even if the server tickrate is 20_co_ and the client tickrate is 60_co_ all this means is that the server each time it ticks will have on average 3 pending frames of data per client which it processes in order.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPreventing the client from cheating by sending duplicate commands or changing the deltaTime to be a large number (to move faster or teleport) can be accomplished by summing the deltaTimes that come through each frame. The sum of the deltaTimes should always be less than (but close to) the total time since the client has connected (cause that_t_s what deltaTime truly is) otherwise it means a client has sent the server more than 5 minutes of input in 5 minutes of time (or whatever). This either means space and time are coming down around us_co_ or someone is cheating.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]