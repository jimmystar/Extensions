[{"Owner":"yaoge","Date":"2017-03-07T14:11:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI need to load a large scene_co_ the model comes from UAV scanning generated_co_ I hope to be able to smooth loading on most devices_co_ including mobile phones. In my solution_co_ I need to release objects outside the view (objects and materials are released)_co_ but I found that the BJS_t_s own Frustum Clipping did not release the object outside the view_co_ but I will use LOD_co_ I will load multiple precision models_co_ if not released_co_ LOD will be meaningless_co_ how can I do_co_ I need to rewrite BJS code? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried to use incremental load_co_ it did not release the memory of the object_co_ but I found in Debug Layer when moving the viewport the total vertices  in the change_co_ I do not know what reason? But the total meshes not change；_lt_a href_eq__qt_http_dd_//www.babylonjs.com/Demos/Espilit/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/Demos/Espilit/_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-07T17:18:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrustum clipping will not release meshes because loading and creating them is really long. Meshes outside frustum are just ignored but stay in memory for performance reason.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want to dispose all meshes outside of the frustum_co_ how can you then know they are in the frustum (if they are disposed _dd_))\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"yaoge","Date":"2017-03-08T00:05:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_166223_qt_ data-ipsquote-contentid_eq__qt_28894_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1488907082_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t6 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tMeshes outside frustum are just ignored but stay in memory for performance reason.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThen I use LOD_co_ then it will load a number of precision models to the memory_co_ which is likely to collapse in the low-end devices.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_166223_qt_ data-ipsquote-contentid_eq__qt_28894_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1488907082_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t6 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIf you want to dispose all meshes outside of the frustum_co_ how can you then know they are in the frustum (if the\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYes i do not know.But like this_dd__lt_a href_eq__qt_http_dd_//d3h9zulrmcj1j6.cloudfront.net/Graz_3MX_V4/App/index.html?scene_eq_Graz_3MX_V4&amp_sm_cX_eq_540.7329&amp_sm_cY_eq_-552.9746&amp_sm_cZ_eq_873.5893&amp_sm_upX_eq_0.0000&amp_sm_upY_eq_0.0000&amp_sm_upZ_eq_1.0000&amp_sm_tX_eq_128.4614&amp_sm_tY_eq_-118.5311&amp_sm_tZ_eq_412.5452#%2F_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//d3h9zulrmcj1j6.cloudfront.net/Graz_3MX_V4/App/index.html?scene_eq_Graz_3MX_V4&amp_sm_cX_eq_540.7329&amp_sm_cY_eq_-552.9746&amp_sm_cZ_eq_873.5893&amp_sm_upX_eq_0.0000&amp_sm_upY_eq_0.0000&amp_sm_upZ_eq_1.0000&amp_sm_tX_eq_128.4614&amp_sm_tY_eq_-118.5311&amp_sm_tZ_eq_412.5452#%2F_lt_/a_gt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIts performance is great_co_ I do not know how it Frustum clipping_co_ but I found that when moving the viewport_co_ the network shows that it has been loading the model.So I guess it will be completely released meshes outside of the frustum.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-09T00:55:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI don_t_t know this technology unfortunately.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou should dig into their code to see how they do it (But I_t_m sure they keep data in memory)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]