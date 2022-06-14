// ==UserScript==
// @name         SUSTech Sakai Session Keeper
// @version      1.0
// @description  Thanks to sjtu LukeXuan.
// @author       Yuk1i
// @match        https://sakai.sustech.edu.cn/*
// ==/UserScript==
if(top === window) {
    const session_keeper_interval = 300 * 1000;
    console.log('Sakai Session Keeper is enabled, credit @Yuk1i.');
    window.addEventListener('load', function() {
        if (window.portal) {
            window.portal.timeoutDialog.enabled = false;
        }
        setInterval(function() {
            $.ajax({
                url: '/direct/session/current.json',
                dataType: "json"
            });
            console.log('access current api to keep session');
        }, session_keeper_interval);
    }, false);
}
