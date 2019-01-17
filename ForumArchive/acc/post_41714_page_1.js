[{"Owner":"gamedev44","Date":"2018-12-05T12:51:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI usually use a document on mouse up listener when implementing drag and drop_co_ in case the user releases the mouse outside of the canvas.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI find that the universal camera misses on mouseup even within the canvas.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow do implement a document on mouse up listener  with the universal camera_co_ what do I call from the listener?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-12-05T18:56:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twell this should not be the case. The UniversalCamera is using scene.onPointerObservable which in turn is using document to listen to mouse up _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_can you repro?_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-12-06T03:55:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  I made (adjusted) a little playground_dd_  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#KWJPDC%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#KWJPDC#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWatch console while clicking sphere.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t see any problems.  Universal cam... I got good actionManager events_co_ I got good DOM events_co_ it all seems okay.  (but I_t_m not always sure what _qt_okay_qt_ means - forever noob that I am).  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotice that the DOM pointerUp event._lt_em_gt_defaultPrevented_lt_/em_gt_ _eq_ true.  I don_t_t know if THAT would cause any problems for anyone_co_ but I thought I would _qt_point_qt_ it out.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope this helps.   _lt_strong_gt_PS_dd__lt_/strong_gt_  Scenes without lights (like above playground)_co_ which instead use emissive on all scene materials_co_ are a bit unusual_co_ but still good fun.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamedev44","Date":"2018-12-06T20:00:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSeems that there are two reasons\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. I have babylon in an iframe - so the document listener doesn_t_t include the parent\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. I am using babylon gui buttons and the mouse up isn_t_t captured when I release over a button\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamedev44","Date":"2018-12-06T20:17:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tall my buttons have this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    button_center.onPointerUpObservable.add(function (event) {_lt_br /_gt_\n\t        button_ui_up()_sm__lt_br /_gt_\n\t    })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a call I can make to tell the camera the mouse is up in there?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamedev44","Date":"2018-12-06T20:38:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is a the button fix which is a little backwards..\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. By default isPointerBlocker is set to true which  lets the camera keep rotating with the mouse on a mouse up event over a button. That leaves the camera in a strange state where it can start to zoom in.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. isPointerBlocker set to true doesn_t_t stop mouse events from reaching clickable meshes_co_ so I had already distinguished between button mousedown and mouse up events with code to prevent my clickable meshes reacting to clicks on the button above. I did this by setting a boolean _qt_button_pressed_qt_ to true onPointerDownObservable and _qt_button_pressed_qt_ to false onPointerUpObservable so that my general onpointerdown function could reject picking meshes if button_pressed is true.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I can then set isPointerBlockerto false because I_t_m not using it and get the camera to listen to onmouseup over the GUI buttons.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamedev44","Date":"2018-12-06T22:19:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe iframe is more difficult.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. This function does not fire when the camera is being moved with the mouse down out of the iframe_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twindow.onmouseout _eq_ function () {_lt_br /_gt_\n\t    console.log(_qt_out_qt_)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. I don_t_t know what function to call to simulate a mouseup event to the camera_co_ when the mouse leaves the iframe\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-12-07T12:55:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again.  Hey_co_ good info-gathering/reporting_co_ thx!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou should probably try _lt_u_gt__lt_strong_gt_canvas_lt_/strong_gt__lt_/u_gt_.onMouseOut or whatever.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere has been other forum threads about mouse remaining in _qt_drag mode_qt_ after it exits the canvas area.  But I can_t_t remember the fix.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBe sure to _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/index.php?app_eq_core&amp_sm_module_eq_search&amp_sm_controller_eq_search&amp_sm_type_eq_forums_topic&amp_sm_nodes_eq_16_co_28_co_29_co_30_co_31_co_38_qt_ rel_eq__qt__qt__gt_search the forum_lt_/a_gt_ for _t_iframe_t_ and maybe even _t_pointerLock_t_ (because a mouse that gets _lt_em_gt_stuck_lt_/em_gt_ in drag-mode... after it accidentally is dragged off-canvas... is SIMILAR TO pointerLock).  It_t_s NOT a pointerLock-based problem_co_ though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tiFrames are strange.  They are _qt_isolated_qt_... in a rather tight security sandbox.   There are 17 returns when doing _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/playground/?code_eq_iframe_qt_ rel_eq__qt_external nofollow_qt__gt_playground search for _t_iframe_t__lt_/a_gt_.  Might be something to learn_co_ there.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps... don_t_t use iframes?  *shrug*  Anyway_co_ take a look_co_ at our docs... _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/gui_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/gui_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee the little _qt_eyeballs_qt_?  Click on those_co_ and a BJS scene _qt_pops-open_qt__co_ and they don_t_t suffer-from _qt_accidentally drag-camera-pointer off-canvas_qt_ problems.  BUT_co_ they DO allow camera dragging even when the pointer exits the canvas area.  SO_co_ maybe not the correct solve_co_ yet.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIssue review_dd_  DOM-event for canvas onPointerOut/onMouseOut... NOT seen triggering (so far - needs further tests?)... if pointer leaves canvas while dragging.  buttonUP while pointer is off-canvas... not seen by DOM_co_ either.  Ok_co_ stay tuned for better comments from wiser people than I.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamedev44","Date":"2018-12-07T16:39:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ Thanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI found the fix by combining document.onmouseout with another thread here that describes how to test if the mouse is still in the document using coordinates_co_ which covers the situation when the pointer is down while dragging the camera onmouseout.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]