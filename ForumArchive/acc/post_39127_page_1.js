[{"Owner":"DylanD","Date":"2018-07-27T19:48:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello again everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am trying to get my Facebook instant game to production_co_ but when I try to load the game_co_ it never loads_co_ and gives me this error_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[Error] Failed to load resource_dd_ the server responded with a status of 404 () (babylon.js_co_ line 0)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[Error] TypeError_dd_ Prototype value can only be an object or null_lt_br /_gt_\n\t    setPrototypeOf (babylon.gui.js_dd_25_dd_257)_lt_br /_gt_\n\t    (anonymous function) (babylon.gui.js_dd_25_dd_257)_lt_br /_gt_\n\t    (anonymous function) (babylon.gui.js_dd_33)_lt_br /_gt_\n\t    (anonymous function) (babylon.gui.js_dd_561)_lt_br /_gt_\n\t    (anonymous function) (babylon.gui.js_dd_563)_lt_br /_gt_\n\t    (anonymous function) (babylon.gui.js_dd_564)_lt_br /_gt_\n\t    universalModuleDefinition (babylon.gui.js_dd_19)_lt_br /_gt_\n\t    Global Code (babylon.gui.js_dd_21)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5218_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt_ rel_eq__qt__qt__gt_@Temechon_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis same project works as a web app and loads properly.  Its only when I build and upload to Facebook that it can no longer load babylon (or anything for that matter).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know why it can_t_t find the files.  They are located here_dd_  ./node_modules/babylonjs/babylon.js\n_lt_/p_gt_\n\n_lt_p_gt_\n\tso I don_t_t know why Facebook won_t_t load them.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis is how my index.html looks_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_!DOCTYPE html&gt_sm_\n&lt_sm_head&gt_sm_\n  &lt_sm_link rel_eq__qt_stylesheet_qt_ type_eq__qt_text/css_qt_ href_eq__qt_css/style.css_qt_ /&gt_sm_\n  \n  &lt_sm_script src_eq__qt_node_modules/babylonjs/babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n  \n  &lt_sm_script src_eq__qt_node_modules/babylonjs-gui/babylon.gui.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n  &lt_sm_script src_eq__qt_node_modules/babylonjs-materials/babylonjs.materials.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n\n  &lt_sm_meta name_eq__qt_viewport_qt_ content_eq__qt_width_eq_device-width_co_ initial-scale_eq_1.0_co_ maximum-scale_eq_1.0_co_ user-scalable_eq_no_qt_ /&gt_sm_\n  \n    &lt_sm_script src_eq__qt_node_modules/systemjs/dist/system.src.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n   \n    &lt_sm_script src_eq__qt_js/systemjs.config.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n    \n    \n    &lt_sm_script&gt_sm_\n      System.import(_t_app_t_).then(function() {\n         \n          console.log(_t_Imported_t_)_sm_\n            \n          \n      }).catch(function(err){ \n          console.error(err)_sm_ \n        })_sm_\n    &lt_sm_/script&gt_sm_\n    &lt_sm_script src_eq__qt_https_dd_//connect.facebook.net/en_US/fbinstant.6.2.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n&lt_sm_/head&gt_sm_\n&lt_sm_body&gt_sm_\n    \n    &lt_sm_canvas id_eq__qt_renderCanvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm_\n    \n\n&lt_sm_/body&gt_sm_\n&lt_sm_/html&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tit seems that those errors go away if I put the connect.facebook src script after everything but then it gives me this error_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[Error] Failed to load resource_dd_ the server responded with a status of 404 () (game.js_co_ line 0)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny ideas how to fix this?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-07-31T12:37:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo its seems Facebook file scope is kind of weird_co_ as I can_t_t load and asset that has ./ in front of it...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-07-31T12:48:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYup that seems to be the problem... So weird...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-07-31T13:02:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI believe it is also case sensitive....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYea it is.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo it is case sensitive and you cannot start a file direction(?) with ./ or / for loading resources_co_  if you want to import a class or library you can use ./\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo if you have loading problems check these_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- does your html src_t_s use ./_co_ if so get rid of them\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-does any thing that points to a file have the exact name (upper case) and not start with ./ if not then make sure you have the exact naming_co_ and no ./\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot exactly sure why this happens_co_ this was just my experience.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-31T15:00:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGood to know _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-07-31T15:21:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thmmm_co_ I need to prolly talk to you about something _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31709-dyland/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31709_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31709-dyland/_qt_ rel_eq__qt__qt__gt_@DylanD_lt_/a_gt_._lt_br /_gt_\n\t_lt_br /_gt_\n\tIm gonna send you a message.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]