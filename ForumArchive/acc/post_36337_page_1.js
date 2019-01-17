[{"Owner":"MackeyK24","Date":"2018-03-13T13:20:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat the best way to get the filename of the scene that was loaded... Not the scene.database.currentSceneUrl \n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut the actual _qt_sceneFilename_qt_ that get passed to the SceneLoader.Load().\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt get used ALOT internally in babylon.SceneLoader but the engine actually STORES the sceneFilename.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ do you think we can store the sceneFilename from the SceneLoader.Load() on the scene and expose some kind of scene.filename property ... Not the ImportMeshes_co_ but just the main SCENE LOAD FILENAME\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-03-13T15:24:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can use the metadata for this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tscene.metadata _eq_ {fileName_dd_ _t_***_t_}_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd get name _dd_ scene.metadata.fileName_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-03-13T17:50:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_208218_qt_ data-ipsquote-contentid_eq__qt_36337_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1520954676_qt_ data-ipsquote-userid_eq__qt_5292_qt_ data-ipsquote-username_eq__qt_Dad72_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ Dad72 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYou can use the metadata for this.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tscene.metadata _eq_ {fileName_dd_ _t_***_t_}_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAnd get name _dd_ scene.metadata.fileName_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYeah i know i can do that... but then i will only be able to get the scene Filename from a Scene that i actually serialize with the scene filename.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut that might be how i have to go about it_co_ and just use_qt_unknown.babylon_qt_ for scene files that i do not create\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould be sweet if the scene had a scene.filename or something that contained the filename of the first scene loaded via SceneLoader.Load and NOT SceneLoader.ImportMeshes\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-03-14T08:22:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tor you could always suggest a PR to your problem and we will consider it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t see any reason to expose the scene file name (mainly since it is a variable provided by you_co_ that can be tracked by you as well)_co_ but if you provide a proper use case for that_co_ why not?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]