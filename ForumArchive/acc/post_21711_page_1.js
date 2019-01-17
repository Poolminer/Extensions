[{"Owner":"BryceJS","Date":"2016-04-05T00:11:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I have been searching and I can_t_t seem to figure this one out. I am trying to find out what the best way to end my game is? I can_t_t seem to come across something such as scene.end() or something of that nature. What is the best practice for where I should put my winstate conditional in babylon.js? It seems like when I put it in my engine.runRenderLoop the game appears to freeze and I am unable to append anything to the page or break out of that runRenderLoop.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"OMAR","Date":"2016-04-05T05:37:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20571-brycejs/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20571_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20571-brycejs/_qt_ rel_eq__qt__qt__gt_@BryceJS_lt_/a_gt_!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ the way I do it is split my game into _qt_parts_qt_ and putting these parts inside corresponding functions like showMenu()_co_ startGame()_co_ endGame() etc. I also keep global variables to track what is going on for example var totalScore _eq_ 0 to keep scores or var isPlaying _eq_ false etc. Setting isPlaying to false at the end of the game can help you call other functions associated with behaviours that should happen when the player ends the game. Btw_co_ engine.runRenderLoop() should always run_co_ your freezing problem could be a bug. Perhaps you could provide a code snippet or something so we can see what could cause the freezing? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTake care _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-04-05T12:29:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tscene.dispose() maybe ? _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.3/Scene#dispose-rarr-void_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.3/Scene#dispose-rarr-void_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]