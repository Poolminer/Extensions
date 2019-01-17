[{"Owner":"brianzinn","Date":"2018-08-24T06:55:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe thought experiment continues... some kind of GLML (graphics library markup language??) could be useful.  I spent quite a bit of time manually adding Rectangles and StackPanels with TextBlocks/Images and it got a bit difficult to keep track of sometimes!  My original idea was to make a JSON structure to load to 2D GUI something like_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_[\n  [{ type_dd_ _t_rectangle_t_ background_dd_ _t_white_t_}]\n  [{ type_dd_ _t_stackPanel_t_ isVertical_dd_false onClick_dd_ () _eq_&gt_sm_ { console.log(_t_clicked_t_)} children_dd_[\n      {type_dd__t_textBlock_t_ text_dd__t_hi_t_}_co_\n      {type_dd__t_image_t_ src_dd__t_/images/x.png_t_}\n    ]\n  }]\n]_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAnyway_co_ that_t_s how the idea started - that wouldn_t_t take too much effort.  Then I wanted that if you changed the background property of the first rectangle from _t_white_t_ to _t_blue_t_ or whatever_co_ that the rectangle would change colour in the scene automatically.  I could do that with something like ES6 Proxy and flow the properties.  A list in a stack panel - maybe could be an RxJS observable array or like a Knockout or MobX observable array - it would need to automatically call removeControl() or addControl() accordingly on list updates.  Something like that would be quite portable.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI ended up implementing in ReactJS as I had a project sort of on the go.  Essentially with markup like this_co_ I have accomplished those goals_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_Scene id_eq__qt_sample-canvas_qt_ onMeshPicked_eq_{this.meshPicked}&gt_sm_\n... camera_co_ lights_co_ buttons ...\n{this.state.showModal _eq__eq__eq_ true &amp_sm_&amp_sm_\n  &lt_sm_Plane name_eq__qt_dialog_qt_ width_eq_{1} height_eq_{dialogHeight/dialogWidth} onCreated_eq_{this.setPlane}&gt_sm_\n    &lt_sm_AdvancedDynamicTexture createForParentMesh_eq_{true}&gt_sm_\n      ... header\n      &lt_sm_Rectangle height_eq__qt_60%_qt_ thickness_eq_{2} color_eq__qt_#EEEEEE_qt_&gt_sm_\n        &lt_sm_StackPanel&gt_sm_\n          &lt_sm_Text text_eq_{`You have clicked on _t_${this.state.clickedMeshName}_t_ ...`} ... /&gt_sm_\n            {this.state.allowedMeshes.map(allowedMesh _eq_&gt_sm_ (\n                &lt_sm_Text key_eq_{...} text_eq_{_t_• _t_ + allowedMesh} color_eq__qt_black_qt_ fontSize_eq_{28} height_eq__qt_20%_qt_ /&gt_sm_\n            ))}\n        &lt_sm_/StackPanel&gt_sm_\n      &lt_sm_/Rectangle&gt_sm_\n       ... footer\n    &lt_sm_/AdvancedDynamicTexture&gt_sm_\n  &lt_sm_/Plane&gt_sm_\n}\n&lt_sm_/Scene&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIf _t_this.state.clickedMeshName_t_ changes in my application_co_ then it automatically updates the associated TextBlock.text in the scene without me explicitly writing code to do so.  I can wire this up to props instead and get changes from redux/websockets or anywhere and the GUI (ie_dd_ TextBlocks in a StackPanel) will automatically add/remove themselves to build lists dynamically - reflecting or observing the current state._lt_br /_gt_\n\tHere is a working example harnessing the built-in capabilities of the React framework for flowing state changes. Obviously to some extent just enough to get the example working.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tClick on different boxes *while* the dialog is open.  Click a box to open the dialog (button is colour of selected box) and dynamic list of remaining boxes is shown.  Try in VR for best experience (it_t_s not a full-screen GUI - it just follows the camera) _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//brianzinn.github.io/create-react-app-babylonjs/with2DUI_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//brianzinn.github.io/create-react-app-babylonjs/with2DUI_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s a work in progress_co_ so not perfect!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-24T15:35:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is reallllly cool! Thanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25365_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/_qt_ rel_eq__qt__qt__gt_@brianzinn_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]