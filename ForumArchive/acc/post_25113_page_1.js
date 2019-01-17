[{"Owner":"PhasedEvolution","Date":"2016-09-11T21:29:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello. I am new to babylon.js. I have used phaser before for isometric. I want to create a isometric tiled map_co_ similar to this in babylon._lt_img alt_eq__qt_map.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_9431_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/map.png.b110970b4bcce292a6212253facd464c.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI have set up an isometric camera view with setTarget at ground.position (I created a ground). I want a similar view the one on the image. I don_t_t actually know how do you generate isometric maps like those in babylon. Is with a for loop like_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor some reason the tiles are spawning all in the same place despite xx and zz being always different.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_function spawnGrassTiles (half_tile_width_co_half_tile_height_co_size_x_co_size_y) {\n        for (var xx _eq_ 0_sm_ xx &lt_sm_ size_x_sm_ xx +_eq_ half_tile_width) {\n            for (var zz _eq_ 0_sm_ zz &lt_sm_ size_y_sm_ zz +_eq_ half_tile_height) {\n                var grass_tile _eq_ new BABYLON.Sprite(_qt_grass_tiles_qt__co_ grassTilesCreator)_sm_\n                grass_tile.position.x _eq_ xx_sm_\n                grass_tile.position.z _eq_ zz_sm_\n            }\n        }\n    }\n\n// do I need to specify the y position?_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tOr do I create a ground and edit it somehow? Thank you \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thefailtheory","Date":"2016-09-11T21:48:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am interested in any continuation but i don_t_t know if i have to switch to babylonejs for the moment\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthx for the question\n_lt_/p_gt_\n\n_lt_p_gt_\n\tpropositions\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit would be nice to add this tree to the grass tiles _lt_a href_eq__qt_http_dd_//codepen.io/featuresmega/pen/WGQEaw_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//codepen.io/featuresmega/pen/WGQEaw_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand to have a pen just for the ground\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Milton","Date":"2016-09-12T11:38:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUsing Sprites in a 3D engine sort of defeats the purpose you_t_re looking for._lt_br /_gt_\n\tUse meshes for your tiles_co_ and sprites for eye candy._lt_br /_gt_\n\tFor an Isometric example_co_ take a look at _lt_a href_eq__qt_https_dd_//github.com/davidbasalla/isogame_qt_ rel_eq__qt_external nofollow_qt__gt_this_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tConcerning your actual problem_co_ maybe it_t_s a scale/zoom thing? Ask _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PhasedEvolution","Date":"2016-09-12T13:54:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_143638_qt_ data-ipsquote-contentid_eq__qt_25113_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1473680309_qt_ data-ipsquote-userid_eq__qt_5834_qt_ data-ipsquote-username_eq__qt_Milton_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ Milton said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tUsing Sprites in a 3D engine sort of defeats the purpose you_t_re looking for._lt_br /_gt_\n\t\t\tUse meshes for your tiles_co_ and sprites for eye candy._lt_br /_gt_\n\t\t\tFor an Isometric example_co_ take a look at _lt_a href_eq__qt_https_dd_//github.com/davidbasalla/isogame_qt_ rel_eq__qt_external nofollow_qt__gt_this_lt_/a_gt_.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tConcerning your actual problem_co_ maybe it_t_s a scale/zoom thing? Ask _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI know about meshes. I just didn_t_t know you do _qt_tilemaps_qt_ with them in 3D engines... Is it the same logic? Just exchange the tiles for meshes with a texture? I think you are right. It is a problem of zoom because the values I did console.log (the coordinates) were very small (0.0121_co_ etc). I need to change the camera zoom or something like that I think.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs for isometric example you linked it doesn_t_t seem to load because it can_t_t find some of the assets (I don_t_t know if it is because of that_co_ just saw it on the console). I get a black screen with a loading.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Milton","Date":"2016-09-12T14:34:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHmm_co_ the example works fine for me. Just download the _lt_a href_eq__qt_https_dd_//github.com/davidbasalla/isogame/archive/master.zip_qt_ rel_eq__qt_external nofollow_qt__gt_zip_lt_/a_gt__co_ unzip it in your www directory_co_ and behold_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_isogame_01.png_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_607_qt_ src_eq__qt_http_dd_//davidbasalla3d.com/assets/images/isogame_01.png_qt_ width_eq__qt_1000_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThis is the perfect example of how to make an Isometric game._lt_br /_gt_\n\tTileMap is just a 2D render term. It means uploading all Tile images to the GPU_co_ and then whatever you draw_co_ it can do it *fast*._lt_br /_gt_\n\tA _t_tilemap_t_ in 3D just means you have some sort of internal representation of what your world is supposed to look like. It has *nothing* to do with your renderer._lt_br /_gt_\n\tYou can load a Tiled map_co_ but you_t_ll have to do the rest yourself.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PhasedEvolution","Date":"2016-09-12T15:35:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think I got the concept... well the game is structured in a different way than what I am used to see (not that I have seen lots of things already _dd_D). I haven_t_t still been able to run the game but I am exploring the files and trying to adapt the logic to my purposes. Anyway the errors I am getting when running are these_dd_ _lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/Captursssssar.PNG.24d6cb61cbb93b36c174dd68b14f6c21.PNG_qt_ data-fileid_eq__qt_9439_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_9439_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/Captursssssar.thumb.PNG.4488e6d943e9f8568bf0cd6a7fab4f24.PNG_qt_ alt_eq__qt_Captursssssar.PNG_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Milton","Date":"2016-09-12T15:41:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou do not seem to be using a web server?_lt_br /_gt_\n\tYou can_t_t just double click index.html...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLook at _lt_a href_eq__qt_http_dd_//phaser.io/tutorials/getting-started/part2_qt_ rel_eq__qt_external nofollow_qt__gt_this_lt_/a_gt_._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PhasedEvolution","Date":"2016-09-12T15:49:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah I have seen that... Well in phaser I used to run with in internet explorer and it just loaded the game entirely with no errors and so I moved with that. And I also thought since it was a local file would matter nothing... \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell just installed mongoose_co_ seems fine\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]