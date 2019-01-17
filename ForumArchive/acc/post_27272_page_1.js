[{"Owner":"Satiana","Date":"2016-12-23T16:51:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHEY!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGuyz_co_ this is so very confusing to me. All i want is to display a single string in one of the corners of the screen. With it i would display my score. So basicly what i would like to display is something like_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar textToDisplay _eq_ _qt_Score_dd_ _qt_ + gameScore_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll the answers that i found (been working on this for few hours) were very confusing and basicly useless. I did find dynamicTexture.drawText and got it to work_co_ but it had a few problems_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-the text moved with camera (didnt stay in the corner)_co_ im guessing it has something to do with the renderingPlane.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-the text didnt rewrite all the time so _qt_Score_dd_ _qt_ is writen OK but the numbers just get writen atop of eachother_co_ and after picking up the 1st coin its just a mess.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCould you give me some pointers on how to solve this problem?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you very much!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSatiana\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jpdev","Date":"2016-12-24T08:05:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you stay with the dynamic texture_co_ you have to clear it before writing new text on it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is an example_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1FL8ZL%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1FL8ZL#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tnote_dd_ this clear is only needed_co_ if your text does not have a color as a background.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut now you have the score on a texture - and you still can_t_t easily place it to be at a fixed position on the screen.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am using babylonJS2dCanvas for this_co_ have a quick look here how it can look ingame_dd_ _lt_a href_eq__qt_http_dd_//yavsadventskalender.de/fly/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//yavsadventskalender.de/fly/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is done this way_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/tutorials/Using_the_Canvas2D_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/tutorials/Using_the_Canvas2D_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExample with score_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#2AVSFH%23126_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#2AVSFH#126_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ Here is another example_co_ with no background and placed top right on the screen_dd_ _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#2AVSFH%23127_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#2AVSFH#127_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbe aware_co_ that you need to include the canvas2d js file from the babylon dist directory.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_ the undefined check in my score example is only because I call the function before the scene is really ready. (because of the simple setTimeout stuff_co_ if you do it in the render loop when everything is setup_co_ the undefined check is not needed.)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Adem","Date":"2016-12-24T14:46:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/6173-jpdev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_6173_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/6173-jpdev/_qt_ rel_eq__qt__qt__gt_@jpdev_lt_/a_gt_exactly what i needed for my game_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Satiana","Date":"2016-12-24T16:28:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/6173-jpdev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_6173_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/6173-jpdev/_qt_ rel_eq__qt__qt__gt_@jpdev_lt_/a_gt_ ur  a f*** GOD!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you sooooo much_co_ suck a simple and functional solution!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI cant thank you enough_co_ I LOVE YOU\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Satiana","Date":"2016-12-24T16:57:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBtw does anyone know how to change the color of the text? i tried fill and color and nothing works. my code looks like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var canvas _eq_ new BABYLON.ScreenSpaceCanvas2D(scene_co_ {\n            id_dd_ _qt_ScreenCanvas_qt__co_\n            children_dd_ [\n                new BABYLON.Text2D(_qt_x_qt__co_ {\n                    id_dd_ _qt_text_qt__co_\n                    marginAlignment_dd_ _qt_h_dd_ right_co_ v_dd_top_qt__co_\n                    marginRight_dd_ 40_co_ marginTop_dd_ 40_co_\n                    fontName_dd_ _qt_20pt Arial_qt__co_\n                    color_dd_ _qt_black_qt__co_\n                })\n            ]\n        })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThank you so much guyz! You are amazing\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-12-24T17:46:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDid you try this for color?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcolor_dd_ BABYLON.Color3.Black()_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tor \n_lt_/p_gt_\n\n_lt_p_gt_\n\tcolor_dd_ new BABYLON.Color3(0_co_ 0_co_ 0)_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn Babylon it works like this_co_ can also be in canvas2D\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Satiana","Date":"2016-12-24T18:02:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah i did_co_ but it doesnt work. Im guessing that BABYLON.Text2d(_qt_x_qt__co_ {**THIS HERE**}) is not a part of actual babylon...it looks more like a css class or something...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot sure what to do\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-12-24T23:04:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTry_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_fill_dd_ _qt_black_qt__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFill instead of color\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI believe that children[] do not have color or fill property_co_ but_co_ this can be like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var canvas _eq_ new BABYLON.ScreenSpaceCanvas2D(scene_co_ {\n            id_dd_ _qt_ScreenCanvas_qt__co_\n            fill_dd_ _qt_black_qt__co_\n            children_dd_ [\n                new BABYLON.Text2D(_qt_x_qt__co_ {\n                    id_dd_ _qt_text_qt__co_\n                    marginAlignment_dd_ _qt_h_dd_ right_co_ v_dd_top_qt__co_\n                    marginRight_dd_ 40_co_ marginTop_dd_ 40_co_\n                    fontName_dd_ _qt_20pt Arial_qt__co_                   \n                })\n            ]\n        })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"lihis","Date":"2016-12-25T00:55:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24960-satiana/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24960_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24960-satiana/_qt_ rel_eq__qt__qt__gt_@Satiana_lt_/a_gt_ Hey.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.4/Text2D_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.4/Text2D_lt_/a_gt_ from here you can see on that list that Text2D has something called defaultColor. In the parameters box you can also see the expected input for defaultColor is Color4.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo i believe this should work_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_defaultFontColor_dd_ new BABYLON.Color4(1_co_ 0_co_ 0_co_ 1)_sm_ //red_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ Oh wait it actually says defaultColor in the first list and on the parameters it says defaultFontColor. Don_t_t know what that_t_s about. But i think defaultFontColor is the one you want to use.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jpdev","Date":"2016-12-25T09:57:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyep_co_ defaultFontColor is the way to go_dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tColor changing text playground_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#2AVSFH%23129_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#2AVSFH#129_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]