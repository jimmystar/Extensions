[{"Owner":"andrew_","Date":"2015-08-17T12:06:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m doing this_dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var assets _eq_ []_sm_var loader _eq_ new BABYLON.AssetsManager(scene)_sm_var toLoad _eq_ [\t{ltype_dd_ _qt_m_qt__co_ name _dd_ _qt_lilly_qt__co_ src _dd_ _qt_assets/507601_Lilly.mp3_qt_ }\t\t\t\t\t]_sm_        toLoad.forEach(function(obj) {\t\t                if (obj.ltype_eq__eq__qt_m_qt_)\t\t{\t\tvar binaryTask _eq_ loader.addBinaryFileTask(obj.name_co_ obj.src)_sm_\t\tbinaryTask.onSuccess _eq_ function (task) {\t\tmusic _eq_ new BABYLON.Sound(_qt_lilly_qt__co_ task.data_co_ scene_co_ \t\tfunction () {\t\t// Sound has been downloaded &amp_sm_ decoded\t\tmusic.setVolume(0.1)_sm_\t\tmusic.play()_sm_\t\t}_co_ { loop_dd_ true })_sm_\t}}_lt_/pre_gt__lt_p_gt_and then this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_loader.onFinish _eq_ function() {\t\t// call the createScene function\t\tcreateScene()_sm_\t\t\t\t\t\t\t\t\t\t// run the render loop\t\tengine.runRenderLoop(function(){\t\t\t\tscene.render()_sm_\t\t})_sm_}loader.load()_sm__lt_/pre_gt__lt_p_gt_This works fine in that the music plays_co_ but it doesn_t_t start until the scene has been rendered for about 2 seconds._lt_/p_gt__lt_p_gt_I was trying to get the music to start first_co_ or at the same time as the scene animation starts._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for help!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-17T17:00:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This should work..I_t_m pulling in @davrous as he is the master of sound _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-08-17T19:58:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi! I_t_m going to have a look (or a ear _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_) asap._lt_/p_gt__lt_p_gt_Can you please repro it on the playground?_lt_/p_gt__lt_p_gt_David_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-08-17T20:39:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_One thing I found out looking at when a sound is specified in FileLoader.ts is it puts a block in until the sound is ready to play.  Something like this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var sound_sm_sound _eq_ new BABYLON.Sound(_qt_sceneSound.wav_qt__co_ soundsRootDir + _qt_sceneSound.wav_qt__co_ scene_co_                           () _eq_&gt_sm_ { scene._removePendingData(sound)_sm_ }_co_                           {autoplay_dd_ true_co_ loop_dd_ false})_sm_scene._addPendingData(sound)_sm__lt_/pre_gt__lt_p_gt_Maybe this will delay rendering till sound is ready_co_ then block removed in success callback.  Wonder what happens should url be wrong though.  When implementing this using asset manager_co_ the block and release might go in different spots.  I know very little about AssetsManager._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"andrew_","Date":"2015-08-18T19:35:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you very much._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]