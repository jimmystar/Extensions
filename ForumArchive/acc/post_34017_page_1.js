[{"Owner":"Hersir","Date":"2017-11-15T11:53:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ downloaded news dist folder from master branch and now scene.pick is broken for me_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// prefix is RegEx\nconst predicate _eq_ (currentMesh) _eq_&gt_sm_ prefix.test(currentMesh.name) &amp_sm_&amp_sm_ currentMesh.isPickable_sm_\nconst pick _eq_ scene.pick(scene.pointerX_co_ scene.pointerY_co_ predicate)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t It finds objects but in mirror so to pick object that is lets say in top of screen are clickable in same position but bottom of screen.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWorks fine with newest beta version on npm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny ideas ? I will try to dig into code as I saw that pick was changed recently.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-11-15T12:44:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo_co_ the order of the picked meshes was reversed ? is that the problem?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWant to reproduce it on the playground? you can switch between latest and stable and see if there are any changes.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2017-11-15T12:53:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ no mesh was picked in wrong place_co_ rendered in top left corner but scene.pick found it in bottom left corner_co_ so somehow it founds meshes in mirrored positions. (if mesh posiiton.x is lets say 50 it was picked at posiiton.x -50 ) Still trying  to pinpoint the issue\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-11-15T12:55:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI see! I thought you meant mirrored as in the order of the picked meshes (if more than one is selected). Ok_co_ waiting for your assessment! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]