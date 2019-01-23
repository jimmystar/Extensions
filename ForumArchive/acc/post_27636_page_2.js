[{"Owner":"Nockawa","Date":"2017-01-19T14:43:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBefore answering your question_co_ I just want to be sure that you_t_re aware that due to event bubbling you may get an event triggered by the Text2D prim that is raised in the Rect2D prim_co_ to know which Prim triggered the event you have to use the relatedTarget property in PrimitivePointerInfo object.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t#1 this may related to what I just say above_co_ Over/Out are bubbling_co_ which means if you set an Observer on the Rect2D and the event occurs on the Text2D_dd_ you will be notified of Text2D related events. Enter/Leave are _lt_strong_gt_not_lt_/strong_gt_ bubbling_co_ so in the same situation you won_t_t be notified.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t#2 Well in your case everything is pickable so isContainer_t_s value doesn_t_t matter.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t#3 If you set isContainer _eq_ true and isPickable _eq_ false on the Rect2D_co_ you won_t_t have events for the Text2D_co_ I will stop looking for event to raise as soon as I meet the Rect2D.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t#3b no_co_ isContainer is really a very specific case_co_ one I couldn_t_t ignore_co_ I don_t_t remember the use case exactly but MasterK really made his point when his expressed the need to have this behavior_co_ so I developed it. But most of the time you can ignore it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s not mouse because these events are supposed to be raised is you have a touch screen or a screen compatible with a stylus.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-19T18:36:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ very good_co_ thanks.  Good reminders (relatedTarget_co_ isPickable_co_ etc).  I forgot that Text2D is _qt_generating_qt_ over/out events_co_ even if I_t_m not observing any Text2D.  Its parental rect2D observer was hearing Text2d_t_s bubblings... as you stated.  Yep_co_ yep_co_ yep.  New demo_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#UAG5H%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#UAG5H#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s all working perfect_co_ and just like you said it would.  New enhanced console loggings on this one... showing more info.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tONE minor thing... I thought I should mention.  Currently_co_ (in the new demo) the left button Text2D is NOT producing bubbled overs and outs_co_ and it is caused by line 13. Line 13 is a size setting on the rect2d.  You_t_ll notice there is also a size setting on the Text2d in line 21_co_ currently disabled.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tONLY when there is a sizer on the rect2d... does the text2D fail to bubble over/out events to rect2d.  Here_t_s the truth table_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 13 active ONLY_dd_  no Text2D over/out bubble to rect2d._lt_br /_gt_\n\tLine 13 &amp_sm_ 21 active_dd_  Text2D bubble - &gt_sm_ rect2d okay_lt_br /_gt_\n\tLine 21 active ONLY_dd_  Text2D bubble - &gt_sm_ rect2d okay_lt_br /_gt_\n\tLine 13 &amp_sm_ 21 disabled_dd_  Text2D bubble - &gt_sm_ rect2d okay\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOkay_co_ that_t_s it.  I could be mistaken.  No big deal... just thought I_t_d tell you about this interesting sizing thing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAgain_co_ good work. I_t_m having a blast torturing this.  It_t_s pretty solid. I_t_m having difficulties making it screw-up.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Don_t_t drag that playground editor/canvas divider bar_co_ though.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I probably need to find a refreshAfterResize() or something. I should read the docs someday.  _dd_/\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-01-19T20:22:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat_co_ my friend_co_ is a bug you just found! thank you !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter some investigation looks like an auto sized Text2D doesn_t_t update its BoundingInfo2D correctly which prevent it from being accurately picked during intersection test.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m digging and (I hope) will fix it quickly!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-01-19T20:53:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ the bug is fixed and pushed. _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ please update the PG.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-19T22:31:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks guys!!! \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-22T17:48:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOkay_co_ so_co_ while I have your ear... um... _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t...the reason the playground slider and other canvas resizing... is screwing up the proportional placement of _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#UAG5H%2312_qt_ rel_eq__qt_external nofollow_qt__gt_the buttons_lt_/a_gt_... is because none of the values... use percentages_co_ correct?  (sizes_co_ x_co_ y_co_ origins_co_ etc)  Would that be a programmer-calculated thing?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor example_co_ if I could place left button x_dd_ _qt_5%_qt_ and right button x_dd_ _qt_85%_qt__co_ then we could do a nicer canvas re-size/re-scale_co_ and have it be cool_co_ right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNockawa... is _qt_allowing percentages_qt_ (and thus nicer canvas re-scales)... planned?  Is it part of the _qt_primitives phase_qt_ of C2D dev?  Any thoughts?  Thx.  Sorry if you already told me and I forgot.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-01-22T17:57:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou can_t_t use percentage for x/y/pos. these area number based properties so it_t_s in pixel.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut if you rely on positioning instead of absolute position_co_ which means using alignment and marging_co_ you should be able to express your offsets in percentage\n_lt_/p_gt_\n\n_lt_p_gt_\n\tanother way to achieve something _qt_responsive_qt__co_ would be to use the designSize when you create the canvas. you set a _qt_ideal/design_qt_ size_co_ then you rely on absolute position (x/y/pos) and size for your prim_co_ then I will take care of _qt_scaling everything_qt_ in order to keep the proportions you asked for... it may be a little hard to understand_co_ but just create a canvas with a designSize of 500_co_500 then position everything according to this size_co_ then run you PG and resize the window\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-22T18:23:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThx.  _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#UAG5H%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#UAG5H#13_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 4.  Alright.  Something happened.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Now I just need to wire the engine resize observer... to the Canvas.reconbobulate() method_co_ and then... uhh... no.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t.reconbobulate() is a GUI-lib layer thing_co_ right?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  But yes_co_ I understand.  When the super-scaler is coded... it will use _lt_em_gt_.designSize_lt_/em_gt_ as a factor.  So... folks should set one... to be ready for the future scaler?  *nod*  ?  *nod*  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tCan .designSize do percentages?   (of window.innerWidth/innerHeight)  heh  *sigh*  Life is hard... when ya carry a Wingnut brain... it really is.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-01-22T19:22:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMasterK asked for the designSize feature_co_ basically it allow him to do a game with a predefined screen/canvas resolution (the designSize) then the rendered canvas will adapt to the real canvas/screen_t_s resolution. still no percentage.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith 2D Engine pixel is always the unit. when you start dealing with percentage it_t_s more about GUI...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-22T20:51:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlright_co_ thx.  Am I being annoying?  I hope not. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsers can do their own percentages system... IF they can get a canvas _lt_strong_gt_size_lt_/strong_gt_... when scene.executeWhenReady comes around.  (We probably need a canvas resize observer_co_ too_co_ for after-resize prim re-positioning and possible prim re-sizing).  Manual re-scale.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#UAG5H%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#UAG5H#14_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn lines 108-114_co_ I_t_m trying everything in the toolbox (to get a canvas size).  I tried every property on ssc2d that looked appropriate.  Couldn_t_t get it.  Yet the browser object-inspector shows good numbers for all of those properties.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI suppose I could measure the render canvas... if an explicit canvas size is not user-set.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think executeWhenReady is executingBeforeReady.  Thoughts? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCanvas2d system is a _qt_late binding_qt_ thing_co_ it seems.  (Wingy talking out his butt again.)  Am I driving down MasterK avenue_co_ here?  Did he go looking for canvas size_co_ too?  Bet so.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tDoes ._notifDebugMode need an added _t_y_t_... and _supprtInstancedArray need an added _t_o_t_?  Just checking.  (Thx for putting up with me_co_ eh?)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-01-22T20:59:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou should use _qt_actualSize_qt__co_ but it won_t_t change the fact that you_t_re right_co_ if you query this property right away you won_t_t get a proper value_co_ the canvas has to be rendered at least once for the correct value to be fetched.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis is something that I should fix because it_t_s no longer acceptable. in this case it should be _qt_lazy evaluation_qt_ instead of _qt_late binding_qt_ (which is not the more accurate term to use_co_ well most accurate would be _qt_real bugged_qt_ _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ )\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-22T21:18:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh_co_ you_t_re right.  _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#UAG5H%2315_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#UAG5H#15_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust put a scene.render() in there (Line 108)_co_ and suddenly I have good numbers at the console.  Interesting!  I wonder if this is related to the old days... when we would see a prim2d appear in the lower left corner of the canvas... and a moment later... it got moved to its proper position.  hmm. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tVery good.  Demented manual scaling experiments... on the horizon.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I_t_ll have a drag-to-resize widget on the upper right corner of every ssc2d... by midnight tonight.  (yeeeeah).  (Patience_co_ Wingy.  Patience.)  heh \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSpeaking of patience... looks like _qt_Loading assets...Please wait_qt_ is stuck ON... in that PG.  (Wingy tries _qt_percussive calibration_qt_)  (banging on it)   Something is wrong with my .executeWhenReady().  Mister playground doesn_t_t like it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]