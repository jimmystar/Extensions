[{"Owner":"dsman","Date":"2015-10-10T12:47:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I tested VirtualJoystickCamera . Right joystick to control panning and rotation of camera works on all browser. But left joystick isn_t_t working on any mobile browser. I checked on following browser. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Android 4.4 _lt_/p_gt__lt_p_gt_Default Chrome_co_ Firefox for android_co_ Opera_co_ MIUI default browser _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_iOS 9_lt_/p_gt__lt_p_gt_Safari _co_ Opera_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This is very good choice of camera for free camera movement and application/gave targeting touch devices. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any clue what is wrong here ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-10-10T12:52:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ It should work. But I_t_ve recently updated it to use jQuery PEP polyfill instead of hand.js._lt_/p_gt__lt_p_gt_ Are you using PEP? Are the samples on the babylonjs.com website not working neither?_lt_/p_gt__lt_p_gt_David_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-10-10T13:49:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve just tested on an iPhone 6 / iOS 8.0 and our scenes on babylonjs.com work with the virtual joysticks camera (using the camera control panel). _lt_/p_gt__lt_p_gt_Can you please share a repro somewhere?_lt_/p_gt__lt_p_gt_Thanks!_lt_/p_gt__lt_p_gt_David _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2015-10-10T13:51:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Actually I was using Babylon 2.0  . I upgraded to Babylon 2.2 and it started working.  Don_t_t know why is it so. May be you have the answer. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was using jquery _co_ handjs and babylon 2.0 and just updated babylon 2.0 to 2.2 . _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-10-10T16:18:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok cool! _lt_/p_gt__lt_p_gt_Starting with Babylon 2.3_co_ we will use PEP instead of hand.js_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-10-10T16:33:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is this yet implemented ? I mean _dd_ if we use the alpha version_co_ will PEP yet work with BJS ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-10-10T19:10:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ this is in the 2.3 alpha. Compared to hand.js_co_ you need to set the touch-action attribute on the html element whereas we_t_re supporting the CSS property with hand.js. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]