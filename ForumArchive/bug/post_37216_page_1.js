[{"Owner":"FunFetched","Date":"2018-04-24T20:21:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m currently working on a project that has both a live and development version_co_ utilizing offline storage and .manifest files for all of my Scene objects. Everything works as expected until I run the old project after having just run the new one in Chrome_co_ specifically. The latest versions of the .scene files are always loaded from the cache_co_ despite the older version number in their .manifest files. I did some digging_co_ and found this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Database.prototype._loadVersionFromDBAsync _eq_ function (url_co_ callback_co_ updateInDBCallback) {\n...\n    transaction.oncomplete _eq_ function (event) {\n        if (version) {\n        // If the version in the JSON file is &gt_sm_ than the version in DB\n            if (_this.manifestVersionFound &gt_sm_ version.data) {\n                _this.mustUpdateRessources _eq_ true_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tNotice that the version number comparison operator is &gt_sm__co_ not !_eq_. Shouldn_t_t the comparison be !_eq_ to cover any changes to the .manifest file version_co_ regardless of its age? I_t_ve changed this on my end_co_ and all is well now.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-04-24T22:58:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt_t_s not a bug_co_ it_t_s the expected result.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is because the versions of the manifest are supposed to be incrementing. using! _lt_strong_gt_!_eq__lt_/strong_gt_ this could also allow to decrement_co_ which is not consistent with a version system. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut maybe Deltakosh could have an idea for your particular case of being able to go back to an old version put cache.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"FunFetched","Date":"2018-04-24T23:28:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_212730_qt_ data-ipsquote-contentid_eq__qt_37216_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1524610691_qt_ data-ipsquote-userid_eq__qt_5292_qt_ data-ipsquote-username_eq__qt_Dad72_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t31 minutes ago_co_ Dad72 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIt_t_s not a bug_co_ it_t_s the expected result.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThis is because the versions of the manifest are supposed to be incrementing. using! _lt_strong_gt_!_eq__lt_/strong_gt_ this could also allow to decrement_co_ which is not consistent with a version system. \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tBut maybe Deltakosh could have an idea for your particular case of being able to go back to an old version put cache.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWhile it may not be technically consistent with a version system_co_ I would argue that it_t_s actually vital to a version_lt_strong_gt__lt_em_gt_ing_lt_/em_gt__lt_/strong_gt_ system. All versioning systems allow the ability to roll back changes_co_ which in this case breaks the operation of the engine if those rollbacks include important changes to scene files. It would be like Unity insisting that it load the absolute latest version of all assets_co_ regardless of which version/branch/fork of the game you happen to be working on.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ I have thousands of users who sometimes test new versions of the game_co_ only to return to the old one while I make changes. They need a way for their browsers to seamlessly retrieve the appropriate assets for both_co_ regardless of which way they_t_re moving through the versioning chain. It would be essentially impossible for me to explain to all of them that they need to open up their developer console_co_ search for the babylonjs IndexedDB and delete it when they_t_re done testing.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-25T20:35:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt was designed to work with incrementing version.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat_t_s being said_co_ I get your point and we probably can add a boolean which force the system to do a !_eq__eq_ instead of &gt_sm_. If you can do the PR today I should be able to merge it for 3.2 (Which is due this friday)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"FunFetched","Date":"2018-04-26T06:39:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_212846_qt_ data-ipsquote-contentid_eq__qt_37216_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1524688513_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t9 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIt was designed to work with incrementing version.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThat_t_s being said_co_ I get your point and we probably can add a boolean which force the system to do a !_eq__eq_ instead of &gt_sm_. If you can do the PR today I should be able to merge it for 3.2 (Which is due this friday)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWill do_co_ but I doubt I_t_ll be able to get to it before the merge. I_t_m going to continue to stubbornly stand by my opinion that this should be the default behavior_co_ though _dd_). I could be swayed if someone were to lay out a scenario where this would break something_co_ but I can_t_t for the life of me think of one myself. I have_co_ however_co_ witnessed first hand how the current behavior does.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-26T16:20:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk you convinced me _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Next commit will change to !_eq__eq_ _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"FunFetched","Date":"2018-04-27T21:10:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tEven better_sm_ thanks! _lt_span class_eq__qt_ipsEmoji_qt__gt_😀_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]