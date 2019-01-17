[{"Owner":"aWeirdo","Date":"2016-02-25T21:02:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI recently started looking into how it would be best to handle collisions in a multiplayer situation_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti notised there are a few threads on the subject_co_ but all died out_co_ so i desided to start a new one.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsing babylon on client-side_co_ ofc_co_ and node.js for server.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMultiplayer games normally load their maps + content server-side for a lot of reasons_co_ collision checking among those_co_ but the best way of doing it_co_ i_t_m still not quite sure.. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a few ideas on how it can be approached_co_ my concerns are however game smoothness.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn this example_co_ all scenes and objects within these scenes_co_ respectively_co_ are imported on the client-side from .babylon files_co_ _lt_br_gt_\n\twhich means that_co_ all possible objects a player can collide with is contained in these files_co_ (no player / player / mob collision).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tScenes_co_ now refered to as _qt_map or maps_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt game start_co_ players are put into an js object_co_ _lt_br_gt_\n\teach player is identified by a id_co_ but the object also contains the player_t_s xyz positions_co_ y rotation_co_ gameId and a map id_co_ refering to which map the player is currently on.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tvar players _eq_ []_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tfunction Player(){\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    this.playerId _eq_ players.length_sm__lt_br_gt__lt_br_gt_\n\t\t\t    //Game Setup_lt_br_gt_\n\t\t\t    this.gameId _eq_ 0_sm_ //Id used to track a specific game_lt_br_gt_\n\t\t\t    this.mapId _eq_ 0_sm_ //map of the specific game\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    //Current Position &amp_sm_ Rotation_lt_br_gt_\n\t\t\t    this.pX _eq_ 0_sm__lt_br_gt_\n\t\t\t    this.pY _eq_ 0_sm__lt_br_gt_\n\t\t\t    this.pZ _eq_ 0_sm__lt_br_gt_\n\t\t\t    this.rY _eq_ 0_sm__lt_br_gt_\n\t\t\t}\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t//Server adds each player after they have been matched.._lt_br_gt_\n\t\t\tvar addPlayer _eq_ function(args){\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    var player _eq_ new Player()_sm__lt_br_gt_\n\t\t\t        player.playerId _eq_ args.id_sm__lt_br_gt_\n\t\t\t        player.gameId _eq_ args.gameId_sm__lt_br_gt_\n\t\t\t        player.mapId _eq_ args.mapId_sm__lt_br_gt_\n\t\t\t        player.pX _eq_ args.startingX_sm__lt_br_gt_\n\t\t\t        player.pY _eq_ args.startingY_sm__lt_br_gt_\n\t\t\t        player.pZ _eq_ args.startingZ_sm__lt_br_gt_\n\t\t\t    players.push( player )_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    return player_sm__lt_br_gt_\n\t\t\t}_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tImport each map on the server-side into a js object when the nodejs server is started.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tvar maps _eq_ []_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tfunction Map(){\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    this.mapId _eq_ maps.length_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t}_lt_br_gt__lt_br_gt_\n\t\t\t//At nodejs server startup_co_ load each map and all physical objects found inside the .babylon file (incomplete)_lt_br_gt_\n\t\t\tvar loadMap _eq_ function(args){\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    var map _eq_ new Map()_sm__lt_br_gt_\n\t\t\t        map.mapId _eq_ args.mapId_sm__lt_br_gt_\n\t\t\t    maps.push( map )_sm__lt_br_gt_\n\t\t\t}_sm_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t (I haven_t_t got the code to load maps into the object yet)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br_gt_\n\tEach map should have a global id that is used for both client and server-side_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti.e. first map could be called 1.babylon_co_ second map 2.babylon_co_ and respectively the id_t_s would be 1 and 2._lt_br_gt_\n\tThose id_t_s can then be used to identify which data inside the maps object to use when checking collisions.._lt_br_gt_\n\t    (client-side map loading example_co_ player requests information from server_co_ sever returns map id_co_ BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_assets/scenes/_qt__co_ +mapId+_qt_.babylon_qt__co_ scene_co_ function (newMeshes) ) \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tExample 1_dd_(very high server load_co_ but impossible for the player to cheat others than himself)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t//update loop_lt_br_gt_\n\tServer sends all players positions_co_ to all clients within the same game_co_ every xx ms.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t//movement_lt_br_gt_\n\tPlayer sends a movement requests to the server._lt_br_gt_\n\tServer calculates next position and checks the maps object if the calculated position is possible_co_ i.e. is the height increase from previous location to new locations too large(i.e. the player is running against a wall)._lt_br_gt_\n\tServer changes the player_t_s position to the new position(in the player object) if the player didn_t_t collide with anything and it is then sent to all players via the update loop.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tExample 2_dd_(low server load_co_ but less secure) //player can disable collision and tamper with movement speeds_co_ etc and still might not be caught.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t//update loop_lt_br_gt_\n\tServer sends all players positions_co_ to all clients within the same game_co_ every xx ms.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t//movement_lt_br_gt_\n\tPlayer calculates movement and collision on the client-side_co_ sends data to server._lt_br_gt_\n\tServer updates the player object with the players position._lt_br_gt_\n\tServer makes random checks if a player_t_s movement is possible (i.e. 1/10 of all requests the server recieves or (something like..) every 50_t_th request for each player)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried to reduce it as much as possible to only contain information related to collisions_co_ if i left anything unanswered or seemed to forget something important_co_ please let me know..\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat are your thoughts on this/these approaches? Would it be possible? Better ideas as to how it can be done?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-29T20:59:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again aW!  Sorry that you are not getting responses.  You might want to check-out _lt_a href_eq__qt_http_dd_//dailyjs.com/2015/03/20/scenevr/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//dailyjs.com/2015/03/20/scenevr/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have asked about _qt_world serving_qt_ in The Wingnut Chronicles thread... but I received the same response as you have gotten (crickets chirping).  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tNotice that the SceneVR server... also boots a CannonJS physics engine on the server-side.  A user named _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt_ once talked about that same thing.  It might be worthwhile to dig into _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/search/?&amp_sm_q_eq_dbawel%20server&amp_sm_type_eq_forums_topic&amp_sm_nodes_eq_16_co_28_co_29_co_30_co_31_qt_ rel_eq__qt__qt__gt_some of his posts_lt_/a_gt_.  I_t_m quite sure _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_ has some serious experience with _qt_serving_qt__co_ too.  And_co_ a _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/search/?&amp_sm_type_eq_forums_topic&amp_sm_nodes_eq_28_co_16_co_29_co_30_co_31_qt_ rel_eq__qt__qt__gt_forum search_lt_/a_gt_ for _t__lt_em_gt_server_lt_/em_gt__t_ and _t__lt_em_gt_multiplayer_t__lt_/em_gt_ might return something useful_co_ as well. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThings like _qt_serving webGL_qt_ and _qt_webGL multiplayer_qt_ might be good searches to do... on the web itself.  In many ways_co_ the server is a separate entity from the scene graph... and from the framework that fills that graph.  I can foresee a day when... a server might work with MANY kinds of client-side frameworks... considering you will be serving each user_t_s startup scene.  Your server could actually ORDER the client-side to use whatever framework you choose... and use _lt_u_gt_your choice_lt_/u_gt_ of fallback options.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you choose to make the client-side do repeated _qt_packet pulls_qt_ for example_co_ then YOU would install the packet-pulling code... into the user_t_s client... when they first log-in.  You_co_ as the server-meister (world archwizard)_co_ call the shots.  *shrug*  Here is _lt_a href_eq__qt_https_dd_//www.google.com/search?q_eq_serverside+JS_qt_ rel_eq__qt_external nofollow_qt__gt_another good web search_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInteresting topic_co_ and an interesting post from you!  I wish I knew more about it... so I could speak intelligently with you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCome to think of it_co_ even if I DID know more about it_co_ I probably couldn_t_t speak intelligently.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  Good luck. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]