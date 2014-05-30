/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

define([], function () {
  return {
    "interface": "<% /*\r\n   This is basically all the markup and interface for TogetherJS.\r\n   Note all links should be like http://localhost:8080/togetherjs/*\r\n   these links are rewritten with the location where TogetherJS was deployed.\r\n\r\n   This file is inlined into togetherjs/templates.js\r\n*/ %>\r\n<div id=\"togetherjs-container\" class=\"togetherjs\">\r\n\r\n  <!-- This is the main set of buttons: -->\r\n  <div id=\"togetherjs-dock\" class=\"togetherjs-dock-right\">\r\n    <div id=\"togetherjs-dock-anchor\" title=\"Передвинуть панель\">\r\n      <span id=\"togetherjs-dock-anchor-horizontal\">\r\n        <img src=\"http://localhost:8080/togetherjs/images/icn-handle-circle@2x.png\" alt=\"drag\">\r\n      </span>\r\n      <span id=\"togetherjs-dock-anchor-vertical\">\r\n        <img src=\"http://localhost:8080/togetherjs/images/icn-handle-circle@2x.png\" alt=\"drag\">\r\n      </span>\r\n    </div>\r\n    <div id=\"togetherjs-buttons\">\r\n      <div style=\"display: none\">\r\n        <button id=\"togetherjs-template-dock-person\" class=\"togetherjs-button togetherjs-dock-person\">\r\n          <div class=\"togetherjs-tooltip togetherjs-dock-person-tooltip\">\r\n            <span class=\"togetherjs-person-name\"></span>\r\n            <span class=\"togetherjs-person-tooltip-arrow-r\"></span>\r\n          </div>\r\n          <div class=\"togetherjs-person togetherjs-person-status-overlay\"></div>\r\n        </button>\r\n      </div>\r\n      <button id=\"togetherjs-profile-button\" class=\"togetherjs-button\" title=\"Это Вы\">\r\n        <div class=\"togetherjs-person togetherjs-person-self\"></div>\r\n        <div id=\"togetherjs-profile-arrow\"></div>\r\n      </button>\r\n      <button id=\"togetherjs-share-button\" class=\"togetherjs-button\" title=\"Добавить друга\"></button>\r\n      <button id=\"togetherjs-audio-button\" class=\"togetherjs-button\" title=\"Включить микрофон\">\r\n        <span id=\"togetherjs-audio-unavailable\" class=\"togetherjs-audio-set\" data-toggles=\".togetherjs-audio-set\">\r\n        </span>\r\n        <span id=\"togetherjs-audio-ready\" class=\"togetherjs-audio-set\" data-toggles=\".togetherjs-audio-set\" style=\"display: none\">\r\n        </span>\r\n        <span id=\"togetherjs-audio-outgoing\" class=\"togetherjs-audio-set\" data-toggles=\".togetherjs-audio-set\" style=\"display: none\">\r\n        </span>\r\n        <span id=\"togetherjs-audio-incoming\" class=\"togetherjs-audio-set\" data-toggles=\".togetherjs-audio-set\" style=\"display: none\">\r\n        </span>\r\n        <span id=\"togetherjs-audio-active\" class=\"togetherjs-audio-set\" data-toggles=\".togetherjs-audio-set\" style=\"display: none\">\r\n        </span>\r\n        <span id=\"togetherjs-audio-muted\" class=\"togetherjs-audio-set\" data-toggles=\".togetherjs-audio-set\" style=\"display: none\">\r\n        </span>\r\n        <span id=\"togetherjs-audio-error\" class=\"togetherjs-audio-set\" data-toggles=\".togetherjs-audio-set\" style=\"display: none\">\r\n        </span>\r\n      </button>\r\n      <button id=\"togetherjs-chat-button\" class=\"togetherjs-button\" title=\"Чат\"></button>\r\n      <div id=\"togetherjs-dock-participants\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- The window for editing the avatar: -->\r\n  <div id=\"togetherjs-avatar-edit\" class=\"togetherjs-modal\"\r\n       style=\"display: none\">\r\n    <header> Обновить аватар </header>\r\n    <section>\r\n      <div class=\"togetherjs-avatar-preview togetherjs-person togetherjs-person-self\"></div>\r\n      <div id=\"togetherjs-avatar-buttons\">\r\n        <input type=\"file\" class=\"togetherjs-upload-avatar\">\r\n        <!--<button id=\"togetherjs-upload-avatar\" class=\"togetherjs-primary\">Upload a picture</button>-->\r\n        <!--<button id=\"togetherjs-camera-avatar\" class=\"togetherjs-default\">Take a picture</button>-->\r\n      </div>\r\n    </section>\r\n    <section class=\"togetherjs-buttons\">\r\n      <button class=\"togetherjs-cancel togetherjs-dismiss\">Отмена</button>\r\n      <span class=\"togetherjs-alt-text\">или</span>\r\n      <button class=\"togetherjs-avatar-save togetherjs-primary\">Сохранить</button>\r\n    </section>\r\n  </div>\r\n\r\n  <!-- The window for sharing the link: -->\r\n  <div id=\"togetherjs-share\" class=\"togetherjs-window\"\r\n       data-bind-to=\"#togetherjs-share-button\" style=\"display: none\">\r\n    <header> Пригласить друга </header>\r\n    <section>\r\n      <div class=\"togetherjs-not-mobile\">\r\n        <p>Скопируйте эту ссылку и приклейте её в IM или в имейл:</p>\r\n        <input type=\"text\" class=\"togetherjs-share-link\">\r\n      </div>\r\n      <div class=\"togetherjs-only-mobile\">\r\n        <p>Скопируйте эту ссылку и приклейте её в IM или в имейл:</p>\r\n        <input type=\"text\" class=\"togetherjs-share-link\">\r\n        <!-- <a class=\"togetherjs-share-link\" href=\"#\">Press your thumb here.</a> -->\r\n      </div>\r\n    </section>\r\n  </div>\r\n\r\n  <!-- Participant Full List view template: -->\r\n  <div id=\"togetherjs-participantlist\" class=\"togetherjs-window\"\r\n       data-bind-to=\"#togetherjs-participantlist-button\" style=\"display: none\">\r\n    <header> Участники </header>\r\n    <section>\r\n      <div class=\"togetherjs-not-mobile\">\r\n        <ul>\r\n          <li id=\"togetherjs-participant-item\">\r\n            <img class=\"togetherjs-person togetherjs-person-small\" src=\"http://localhost:8080/togetherjs/images/btn-menu-change-avatar.png\">\r\n            <span class=\"tj-name togetherjs-person-name\">NAME</span>\r\n            <span class=\"tj-status\">&#9679;</span>\r\n            <p class=\"tj-urllocation\">Сейчас на: <a class=\"togetherjs-person-url togetherjs-person-url-title\" href=\"\">http://www.location.comwww.location.comwww.location.comasdfsafd</a></p>\r\n            <p class=\"tj-follow\">Последовать:\r\n              <label class=\"togetherjs-follow-question\" for=\"togetherjs-person-status-follow\">\r\n                <input type=\"checkbox\" id=\"togetherjs-person-status-follow\">\r\n              </label>\r\n            </p>\r\n            <section class=\"togetherjs-buttons\">\r\n              <!-- Displayed when the peer is at a different URL: -->\r\n              <div class=\"togetherjs-different-url\">\r\n                <a class=\"togetherjs-nudge togetherjs-default tj-btn-sm\">Толкнуть друга</a>\r\n                <a href=\"#\" class=\"togetherjs-follow togetherjs-person-url togetherjs-primary tj-btn-sm\">Присоединиться к нему</a>\r\n              </div>\r\n              <!-- Displayed when the peer is at your same URL: -->\r\n              <div class=\"togetherjs-same-url\" style=\"display: none\">\r\n                <span class=\"togetherjs-person-name\"></span> с Вами на одной странице.\r\n              </div>\r\n            </section>\r\n          </li>\r\n        </ul>\r\n    </section>\r\n  </div>\r\n\r\n  <!-- Participant detail template: -->\r\n  <div id=\"togetherjs-template-participant-window\" class=\"togetherjs-window\" style=\"display: none\">\r\n    <header><div class=\"togetherjs-person togetherjs-person-small\"></div><span class=\"togetherjs-person-name\"></span></header>\r\n\r\n    <section class=\"togetherjs-participant-window-main\">\r\n      <p class=\"togetherjs-participant-window-row\"><strong>Роль:</strong>\r\n        <span class=\"togetherjs-person-role\"></span>\r\n      </p>\r\n\r\n      <p class=\"togetherjs-participant-window-row\"><strong>Сейчас на:</strong>\r\n        <a class=\"togetherjs-person-url togetherjs-person-url-title\"></a>\r\n      </p>\r\n\r\n      <p class=\"togetherjs-participant-window-row\"><strong>Статус:</strong>\r\n        <span class=\"togetherjs-person-status\"></span>\r\n      </p>\r\n\r\n      <p class=\"togetherjs-participant-window-row\"><strong class=\"togetherjs-float-left\">Следовать за этим участником:</strong>\r\n        <label class=\"togetherjs-follow-question togetherjs-float-left\" for=\"togetherjs-person-status-follow\">\r\n          <input type=\"checkbox\" id=\"togetherjs-person-status-follow\">\r\n        </label>\r\n        <span class=\"togetherjs-clear\"></span>\r\n      </p>\r\n\r\n    </section>\r\n\r\n    <section class=\"togetherjs-buttons\">\r\n      <!-- Displayed when the peer is at a different URL: -->\r\n      <div class=\"togetherjs-different-url\">\r\n        <a class=\"togetherjs-nudge togetherjs-default\">Толкнуть друга</a>\r\n        <a href=\"#\" class=\"togetherjs-follow togetherjs-person-url togetherjs-primary\">Присоединиться к нему</a>\r\n      </div>\r\n      <!-- Displayed when the peer is at your same URL: -->\r\n      <div class=\"togetherjs-same-url\" style=\"display: none\">\r\n        <span class=\"togetherjs-person-name\"></span> с Вами на одной странице.\r\n      </div>\r\n    </section>\r\n  </div>\r\n\r\n  <!-- The chat screen: -->\r\n  <div id=\"togetherjs-chat\" class=\"togetherjs-window\" data-bind-to=\"#togetherjs-chat-button\"\r\n       style=\"display: none\">\r\n    <header> Чат </header>\r\n    <section class=\"togetherjs-subtitle\">\r\n      <div id=\"togetherjs-chat-participants\" data-toggles=\"#togetherjs-chat-no-participants\" style=\"display: none\">\r\n        <span id=\"togetherjs-chat-participant-list\"></span>\r\n        &amp; Вы\r\n      </div>\r\n      <div id=\"togetherjs-chat-no-participants\" data-toggles=\"#togetherjs-chat-participants\">\r\n        Здесь больше никого нет.\r\n      </div>\r\n    </section>\r\n\r\n    <div style=\"display: none\">\r\n\r\n      <!-- Template for one message: -->\r\n      <div id=\"togetherjs-template-chat-message\" class=\"togetherjs-chat-item togetherjs-chat-message\">\r\n        <div class=\"togetherjs-person\"></div>\r\n        <div class=\"togetherjs-timestamp\"><span class=\"togetherjs-time\">HH:MM</span> <span class=\"togetherjs-ampm\">AM/PM</span></div>\r\n        <div class=\"togetherjs-person-name-abbrev\"></div>\r\n        <div class=\"togetherjs-chat-content togetherjs-sub-content\"></div>\r\n      </div>\r\n\r\n      <!-- Template for when a person leaves: -->\r\n      <div id=\"togetherjs-template-chat-left\" class=\"togetherjs-chat-item togetherjs-chat-left-item\">\r\n        <div class=\"togetherjs-person\"></div>\r\n        <div class=\"togetherjs-ifnot-declinedJoin\">\r\n          <div class=\"togetherjs-inline-text\"><span class=\"togetherjs-person-name\"></span> покинул сеанс.</div>\r\n        </div>\r\n        <div class=\"togetherjs-if-declinedJoin\">\r\n          <div class=\"togetherjs-inline-text\"><span class=\"togetherjs-person-name\"></span> отказался присоединиться к сеансу.</div>\r\n        </div>\r\n        <div class=\"togetherjs-clear\"></div>\r\n      </div>\r\n\r\n      <!-- Template when a person joins the session: -->\r\n      <div id=\"togetherjs-template-chat-joined\" class=\"togetherjs-chat-item togetherjs-chat-join-item\">\r\n        <div class=\"togetherjs-person\"></div>\r\n        <div class=\"togetherjs-inline-text\"><span class=\"togetherjs-person-name\"></span> присоединился к сеансу.</div>\r\n        <div class=\"togetherjs-clear\"></div>\r\n      </div>\r\n\r\n      <!-- Template for system-derived messages: -->\r\n      <div id=\"togetherjs-template-chat-system\" class=\"togetherjs-chat-item\">\r\n        <span class=\"togetherjs-chat-content togetherjs-sub-content\"></span>\r\n      </div>\r\n\r\n      <!-- Template when a person joins the session: -->\r\n      <!-- <div id=\"togetherjs-template-chat-joined\" class=\"togetherjs-chat-item togetherjs-chat-join-item\">\r\n        <div class=\"togetherjs-person\"></div>\r\n        <div class=\"togetherjs-inline-text\"><span class=\"togetherjs-person-name\"></span> joined the session.</div>\r\n        <div class=\"togetherjs-clear\"></div>\r\n      </div> -->\r\n\r\n      <!-- Template for when someone goes to a new URL: -->\r\n\t  <!--\r\n      <div id=\"togetherjs-template-url-change\" class=\"togetherjs-chat-item togetherjs-chat-url-change\">\r\n        <div class=\"togetherjs-person\"></div>\r\n        <div class=\"togetherjs-inline-text\">\r\n          <div class=\"togetherjs-if-sameUrl\">\r\n            <span class=\"togetherjs-person-name\"></span>\r\n            с Вами на одной странице.\r\n          </div>\r\n          <div class=\"togetherjs-ifnot-sameUrl\">\r\n            <span class=\"togetherjs-person-name\"></span>\r\n            отправился на: <a href=\"#\" class=\"togetherjs-person-url togetherjs-person-url-title\" target=\"_self\"></a>\r\n            <section class=\"togetherjs-buttons togetherjs-buttons-notification-diff-url\">\r\n              <div class=\"togetherjs-different-url togetherjs-notification-diff-url\">\r\n                <a class=\"togetherjs-nudge togetherjs-default\">Толкнуть друга</a>\r\n                <a href=\"#\" class=\"togetherjs-follow togetherjs-person-url togetherjs-primary\">Присоединиться к нему</a>\r\n              </div>\r\n            </section>\r\n\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"togetherjs-clear\"></div>\r\n      </div>\r\n    </div>\r\n\t-->\r\n\r\n    <section id=\"togetherjs-chat-messages\">\r\n      <!-- FIX ME// need to have some dialogue that says something like - There are no chats yet! -->\r\n    </section>\r\n    <section id=\"togetherjs-chat-input-box\">\r\n      <textarea id=\"togetherjs-chat-input\" placeholder=\"Напечатайте своё сообщение здесь\"></textarea>\r\n    </section>\r\n  </div>\r\n\r\n  <!-- this is a kind of warning popped up when you (successfully) start RTC: -->\r\n  <div id=\"togetherjs-rtc-info\" class=\"togetherjs-window\"\r\n       data-bind-to=\"#togetherjs-audio-button\"\r\n       style=\"display: none\">\r\n\r\n    <header> Аудио-чат </header>\r\n    <section>\r\n      <p>\r\n        Включите <strong>микрофон браузера</strong> возле адресной строки вверху.\r\n      </p>\r\n      <p>\r\n        Разговор по микрофону через веб-браузер - экспериментальное свойство.\r\n      </p>\r\n      <p>\r\n        Почитайте больше об аудио-чате <a href=\"https://github.com/mozilla/togetherjs/wiki/About-Audio-Chat-and-WebRTC\" target=\"_blank\">здесь</a>.\r\n      </p>\r\n    </section>\r\n\r\n    <section class=\"togetherjs-buttons\">\r\n      <label for=\"togetherjs-rtc-info-dismiss\" style=\"display: inline;\">\r\n        <input class=\"togetherjs-dont-show-again\" id=\"togetherjs-rtc-info-dismiss\" type=\"checkbox\">\r\n        Больше не показывать.\r\n      </label>\r\n      <button class=\"togetherjs-default togetherjs-dismiss\" type=\"button\">Закрыть</button>\r\n    </section>\r\n  </div>\r\n\r\n  <!-- this is popped up when you hit the audio button, but RTC isn't\r\n  supported: -->\r\n  <div id=\"togetherjs-rtc-not-supported\" class=\"togetherjs-window\"\r\n       data-bind-to=\"#togetherjs-audio-button\"\r\n       style=\"display: none\">\r\n    <header> Аудио-чат </header>\r\n\r\n    <section>\r\n      <p>Аудио-чат требует, чтобы Вы использовали<a href='https://github.com/mozilla/togetherjs/wiki/About-Audio-Chat-and-WebRTC' target='_blank'>браузер поновее</a>!</p>\r\n      <p>\r\n        Для живого аудио-чата требуется более новый (или другой) браузер, чем тот, который Вы используете.\r\n      </p>\r\n      <p>\r\n        Посмотрите на <a href='https://github.com/mozilla/togetherjs/wiki/About-Audio-Chat-and-WebRTC' target='_blank'>'этой странице'</a> дополнительную информацию и список поддерживаемых браузеров.\r\n      </p>\r\n    </section>\r\n\r\n    <section class=\"togetherjs-buttons\">\r\n      <div class=\"togetherjs-rtc-dialog-btn\">\r\n        <button class=\"togetherjs-default togetherjs-dismiss\" type=\"button\">Закрыть</button>\r\n      </div>\r\n    </section>\r\n  </div>\r\n\r\n  <!-- The popup when a chat message comes in and the #togetherjs-chat window isn't open -->\r\n  <div id=\"togetherjs-chat-notifier\" class=\"togetherjs-notification\"\r\n       data-bind-to=\"#togetherjs-chat-button\"\r\n       style=\"display: none\">\r\n    <img src=\"http://localhost:8080/togetherjs/images/notification-togetherjs-logo.png\" class=\"togetherjs-notification-logo\" alt=\"\">\r\n    <img src=\"http://localhost:8080/togetherjs/images/notification-btn-close.png\" class=\"togetherjs-notification-closebtn togetherjs-dismiss\" alt=\"[close]\">\r\n    <section id=\"togetherjs-chat-notifier-message\">\r\n    </section>\r\n  </div>\r\n\r\n  <!-- The menu when you click on the profile: -->\r\n  <div id=\"togetherjs-menu\" class=\"togetherjs-menu\" style=\"display: none\">\r\n    <div class=\"togetherjs-menu-item togetherjs-menu-disabled\" id=\"togetherjs-menu-profile\">\r\n      <img id=\"togetherjs-menu-avatar\">\r\n      <span class=\"togetherjs-person-name-self\" id=\"togetherjs-self-name-display\" data-toggles=\"#togetherjs-menu .togetherjs-self-name\">[nickname]</span>\r\n      <input class=\"togetherjs-self-name\" type=\"text\" data-toggles=\"#togetherjs-self-name-display\" style=\"display: none\" placeholder=\"Введите своё имя\">\r\n    </div>\r\n    <div class=\"togetherjs-menu-hr-avatar\"></div>\r\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-update-name\"><img src=\"http://localhost:8080/togetherjs/images/button-pencil.png\" alt=\"\"> Обновить своё имя</div>\r\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-update-avatar\"><img src=\"http://localhost:8080/togetherjs/images/btn-menu-change-avatar.png\" alt=\"\"> Изменить аватар</div>\r\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-update-color\"><span class=\"togetherjs-person-bgcolor-self\"></span> Выбрать цвет профиля</div>\r\n    <div class=\"togetherjs-hr\"></div>\r\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-help\">Помощь</div>\r\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-feedback\">Отзывы и предложения</div>\r\n    <div id=\"togetherjs-invite\" style=\"display: none\">\r\n      <div class=\"togetherjs-hr\"></div>\r\n      <div id=\"togetherjs-invite-users\"></div>\r\n      <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-refresh-invite\">Refresh users</div>\r\n      <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-invite-anyone\">Пригласить кого-нибудь</div>\r\n    </div>\r\n    <div class=\"togetherjs-hr\"></div>\r\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-end\"><img src=\"http://localhost:8080/togetherjs/images/button-end-session.png\" alt=\"\"> Закончить <span class=\"togetherjs-tool-name\">TogetherJS</span></div>\r\n  </div>\r\n\r\n  <!-- template for one person in the invite-users list -->\r\n  <div style=\"display: none\">\r\n    <div id=\"togetherjs-template-invite-user-item\" class=\"togetherjs-menu-item\">\r\n      <!-- FIXME: should include avatar in some way -->\r\n      <span class=\"togetherjs-person-name\"></span>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- A window version of #togetherjs-menu, for use on mobile -->\r\n  <div id=\"togetherjs-menu-window\" class=\"togetherjs-window\" style=\"display: none\">\r\n    <header>Установки и профиль</header>\r\n    <section>\r\n    <div class=\"togetherjs-menu-item\">\r\n      <img class=\"togetherjs-menu-avatar\">\r\n      <span class=\"togetherjs-person-name-self\" id=\"togetherjs-self-name-display\"></span>\r\n    </div>\r\n    <div class=\"togetherjs-menu-hr-avatar\"></div>\r\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-update-name-button\"><img src=\"http://localhost:8080/togetherjs/images/button-pencil.png\" alt=\"\"> Обновить своё имя</div>\r\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-update-avatar-button\"><img src=\"http://localhost:8080/togetherjs/images/btn-menu-change-avatar.png\" alt=\"\"> Изменить аватар</div>\r\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-update-color-button\"><span class=\"togetherjs-person-bgcolor-self\"></span> Выбрать цвет профиля</div>\r\n    <div class=\"togetherjs-hr\"></div>\r\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-help-button\">Помощь</div>\r\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-feedback-button\">Отзывы и предложения</div>\r\n    <div class=\"togetherjs-hr\"></div>\r\n    <div class=\"togetherjs-menu-item\" id=\"togetherjs-menu-end-button\"><img src=\"http://localhost:8080/togetherjs/images/button-end-session.png\" alt=\"\"> Закончить TOOL_NAME</div>\r\n    </section>\r\n    <section class=\"togetherjs-buttons\">\r\n      <button class=\"togetherjs-dismiss togetherjs-primary\">Хорошо</button>\r\n    </section>\r\n  </div>\r\n\r\n  <!-- The name editor, for use on mobile -->\r\n  <div id=\"togetherjs-edit-name-window\" class=\"togetherjs-window\" style=\"display: none\">\r\n    <header>Обновить имя</header>\r\n    <section>\r\n      <div>\r\n        <input class=\"togetherjs-self-name\" type=\"text\" placeholder=\"Введите своё имя\">\r\n      </div>\r\n    </section>\r\n    <section class=\"togetherjs-buttons\">\r\n      <button class=\"togetherjs-dismiss togetherjs-primary\">Хорошо</button>\r\n    </section>\r\n  </div>\r\n\r\n  <div class=\"togetherjs-menu\" id=\"togetherjs-pick-color\" style=\"display: none\">\r\n    <div class=\"togetherjs-triangle-up\"><img src=\"http://localhost:8080/togetherjs/images/icn-triangle-up.png\"></div>\r\n    <div style=\"display: none\">\r\n      <div id=\"togetherjs-template-swatch\" class=\"togetherjs-swatch\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Invisible elements that handle the RTC audio: -->\r\n  <audio id=\"togetherjs-audio-element\"></audio>\r\n  <audio id=\"togetherjs-local-audio\" muted=\"true\" volume=\"0.3\"></audio>\r\n  <audio id=\"togetherjs-notification\" src=\"http://localhost:8080/togetherjs/images/notification.ogg\"></audio>\r\n\r\n  <!-- The intro screen for someone who joins a session the first time: -->\r\n  <div id=\"togetherjs-intro\" class=\"togetherjs-modal\" style=\"display: none\">\r\n    <header>Присоединиться к сеансу TOOL_NAME?</header>\r\n    <section>\r\n      <p>Ваш друг просит Вас присоединиться к его TOOL_SITE_LINK браузер-сеансу, чтобы сотрудничать с Вами в реальном времени!</p>\r\n      <p>Хотели бы Вы присоединиться к его сеансу?</p>\r\n    </section>\r\n\r\n    <section class=\"togetherjs-buttons\">\r\n      <button class=\"togetherjs-destructive togetherjs-modal-dont-join\">Нет, не присоединяться</button>\r\n      <button class=\"togetherjs-primary togetherjs-dismiss\">Да, присоединиться к сеансу</button>\r\n    </section>\r\n  </div>\r\n\r\n  <!-- Shown when a web browser is completely incapable of running TogetherJS: -->\r\n  <div id=\"togetherjs-browser-broken\" class=\"togetherjs-modal\" style=\"display: none\">\r\n    <header> Извините </header>\r\n\r\n    <section>\r\n      <p>\r\n        Извините, TOOL_NAME не работает на этом браузере. Просьба <a href='https://github.com/mozilla/togetherjs/wiki/Supported-Browsers#supported-browsers'>обновиться до поддерживаемого браузера</a>, чтобы попробовать TOOL_NAME.\r\n      </p>\r\n\r\n      <p id=\"togetherjs-browser-broken-is-ie\" style=\"display: none\">\r\n        Нам нужна Ваша помощь в починке TogetherJS на Internet Explorer!  Вот список <a href=\"https://github.com/mozilla/togetherjs/issues?labels=IE&milestone=&page=1&state=open\" target=\"_blank\">ошибок на GitHub</a>, которые нам нужно починить, и над которыми Вы можете поработать.\r\n        Internet Explorer <a href=\"https://github.com/mozilla/togetherjs/wiki/Supported-Browsers#internet-explorer\"> в настоящее время не поддерживается</a>.  Если Вы действительно хотите испытать TogetherJS, советуем Вам использовать Firefox или Chrome.\r\n      </p>\r\n    </section>\r\n\r\n    <section class=\"togetherjs-buttons\">\r\n      <button class=\"togetherjs-dismiss togetherjs-primary\">Закончить TOOL_NAME</button>\r\n    </section>\r\n\r\n  </div>\r\n\r\n  <!-- Shown when the browser has WebSockets, but is IE (i.e., IE10) -->\r\n  <div id=\"togetherjs-browser-unsupported\" class=\"togetherjs-modal\" style=\"display: none\">\r\n    <header> Браузер не поддерживается </header>\r\n\r\n    <section>\r\n      <p>\r\n        Нам нужна Ваша помощь в починке TogetherJS на Internet Explorer!  Вот список <a href=\"https://github.com/mozilla/togetherjs/issues?labels=IE&milestone=&page=1&state=open\" target=\"_blank\">ошибок на GitHub</a>, которые нам нужно починить, и над которыми Вы можете поработать.\r\n        Internet Explorer <a href=\"https://github.com/mozilla/togetherjs/wiki/Supported-Browsers#internet-explorer\"> в настоящее время не поддерживается</a>.  Если Вы действительно хотите испытать TogetherJS, советуем Вам использовать Firefox или Chrome.\r\n      </p>\r\n\r\n      <p>Вы можете продолжать пробовать использовать TOOL_NAME, но скорее всего Вы получите массу ошибок. Мы Вас предупредили.</p>\r\n\r\n    </section>\r\n\r\n    <section class=\"togetherjs-buttons\">\r\n      <button class=\"togetherjs-dismiss togetherjs-primary\">Закончить TOOL_NAME</button>\r\n      <button class=\"togetherjs-dismiss togetherjs-secondary togetherjs-browser-unsupported-anyway\">Всё равно попробовать TOOL_NAME</button>\r\n    </section>\r\n\r\n  </div>\r\n\r\n  <div id=\"togetherjs-confirm-end\" class=\"togetherjs-modal\" style=\"display: none\">\r\n    <header> Закончить сеанс? </header>\r\n    <section>\r\n      <p>\r\n        Вы уверены, что хотите завершить свой сеанс TOOL_NAME?\r\n      </p>\r\n    </section>\r\n    <section class=\"togetherjs-buttons\">\r\n      <button class=\"togetherjs-cancel togetherjs-dismiss\">Отмена</button>\r\n      <span class=\"togetherjs-alt-text\">или</span>\r\n      <button id=\"togetherjs-end-session\" class=\"togetherjs-destructive\">Закончить сеанс</button>\r\n    </section>\r\n  </div>\r\n\r\n  <div id=\"togetherjs-feedback-form\" class=\"togetherjs-modal\" style=\"display: none;\">\r\n    <header> Отзывы и предложения </header>\r\n    <iframe src=\"https://docs.google.com/a/mozilla.com/forms/d/1lVE7JyRo_tjakN0mLG1Cd9X9vseBX9wci153z9JcNEs/viewform?embedded=true\" width=\"400\" height=\"300\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Загружаю форму ...</iframe>\r\n    <!-- <p><button class=\"togetherjs-modal-close\">Close</button></p> -->\r\n  </div>\r\n\r\n  <div style=\"display: none\">\r\n    <!-- This is when you join a session and the other person has already changed to another URL: -->\r\n\t<!-- \r\n    <div id=\"togetherjs-template-url-change\" class=\"togetherjs-modal\">\r\n      <header> Следую на новый URL... </header>\r\n      <section>\r\n        <div class=\"togetherjs-person\"></div>\r\n        Следую\r\n        <span class=\"togetherjs-person-name\"></span>\r\n        на <a href=\"\" class=\"togetherjs-person-url togetherjs-person-url-title\"></a>\r\n      </section>\r\n    </div>\r\n\t-->\r\n\r\n    <!-- This is when someone invites you to their session: -->\r\n    <div id=\"togetherjs-template-invite\" class=\"togetherjs-chat-item\">\r\n      <div class=\"togetherjs-person\"></div>\r\n      <div>\r\n        <span class=\"togetherjs-person-name\"></span>\r\n        пригласил <strong class=\"togetherjs-if-forEveryone\">кого-либо</strong>\r\n        <strong class=\"togetherjs-ifnot-forEveryone\">Вас</strong>\r\n        на <a href=\"\" data-togetherjs-subattr-href=\"href\" class=\"togetherjs-sub-hrefTitle\" target=\"_blank\"></a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- The pointer at the side of a window: -->\r\n  <div id=\"togetherjs-window-pointer-right\" style=\"display: none\"></div>\r\n  <div id=\"togetherjs-window-pointer-left\" style=\"display: none\"></div>\r\n\r\n  <!-- The element that overlaps the background of the page during a modal dialog: -->\r\n  <div id=\"togetherjs-modal-background\" style=\"display: none\"></div>\r\n\r\n  <!-- Some miscellaneous templates -->\r\n  <div style=\"display: none\">\r\n\r\n    <!-- This is the cursor: -->\r\n    <div id=\"togetherjs-template-cursor\" class=\"togetherjs-cursor togetherjs\">\r\n      <!-- Note: images/cursor.svg is a copy of this (for editing): -->\r\n      <!-- crossbrowser svg dropshadow http://demosthenes.info/blog/600/Creating-a-True-CrossBrowser-Drop-Shadow- -->\r\n      <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n      \t width=\"15px\" height=\"22.838px\" viewBox=\"96.344 146.692 15 22.838\" enable-background=\"new 96.344 146.692 15 22.838\"\r\n      \t xml:space=\"preserve\">\r\n      <path fill=\"#231F20\" d=\"M98.984,146.692c2.167,1.322,1.624,6.067,3.773,7.298c-0.072-0.488,2.512-0.931,3.097,0\r\n      \tc0.503,0.337,1.104-0.846,2.653,0.443c0.555,0.593,3.258,2.179,1.001,8.851c-0.446,1.316,2.854,0.135,1.169,2.619\r\n      \tc-3.748,5.521-9.455,2.787-9.062,1.746c1.06-2.809-6.889-4.885-4.97-9.896c0.834-2.559,2.898,0.653,2.923,0.29\r\n      \tc-0.434-1.07-2.608-5.541-2.923-6.985C96.587,150.793,95.342,147.033,98.984,146.692z\"/>\r\n      </svg>\r\n      <!-- <img class=\"togetherjs-cursor-img\" src=\"http://localhost:8080/togetherjs/images/cursor.svg\"> -->\r\n      <span class=\"togetherjs-cursor-container\">\r\n        <span class=\"togetherjs-cursor-name\"></span>\r\n        <span style=\"display:none\" class=\"togetherjs-cursor-typing\" id=\"togetherjs-cursor-typebox\">\r\n          <span class=\"togetherjs-typing-ellipse-one\">&#9679;</span><span class=\"togetherjs-typing-ellipse-two\">&#9679;</span><span class=\"togetherjs-typing-ellipse-three\">&#9679;</span>\r\n        </span>\r\n        <!-- Displayed when the cursor is below the screen: -->\r\n        <span class=\"togetherjs-cursor-down\">\r\n\r\n        </span>\r\n        <!-- Displayed when the cursor is above the screen: -->\r\n        <span class=\"togetherjs-cursor-up\">\r\n\r\n        </span>\r\n      </span>\r\n    </div>\r\n\r\n    <!-- This is the element that goes around focused form elements: -->\r\n    <div id=\"togetherjs-template-focus\">\r\n      <div class=\"togetherjs-focus togetherjs-person-bordercolor\"></div>\r\n    </div>\r\n\r\n    <!-- This is a click: -->\r\n    <div id=\"togetherjs-template-click\" class=\"togetherjs-click togetherjs\">\r\n    </div>\r\n  </div>\r\n</div>\r\n",
    walkthrough: "<!--\r\n    Any elements with .togetherjs-walkthrough-firsttime will only be\r\n    displayed on during the first-time experience.  Any elements with\r\n    .togetherjs-walkthrough-not-firsttime will only be displayed when\r\n    the walkthrough is accessed through the Help menu.\r\n\r\n    Note you *cannot* use <section class=\"togetherjs-walkthrough-slide\r\n    togetherjs-walkthrough-firsttime\">: the number of sections must be the\r\n    same regardless.\r\n  -->\r\n<div id=\"togetherjs-walkthrough\" class=\"togetherjs-modal togetherjs-modal-wide\">\r\n  <header>Вы используете TOOL_NAME!<button class=\"togetherjs-close\"></button></header>\r\n\r\n  <div id=\"togetherjs-walkthrough-previous\"></div>\r\n  <div id=\"togetherjs-walkthrough-next\"></div>\r\n\r\n  <section class=\"togetherjs-walkthrough-slide\">\r\n    <p class=\"togetherjs-walkthrough-main-image\"><img src=\"http://localhost:8080/togetherjs/images/walkthrough-images-intro.png\"></p>\r\n\t<p>TOOL_NAME - это служба для Вашего сайта, которая помогает Вам сотрудничать с другими в реальном времени на сайте SITE_NAME </p>\r\n  </section>\r\n\r\n  <section class=\"togetherjs-walkthrough-slide\">\r\n    <div class=\"togetherjs-walkthrough-firsttime\">\r\n      <div class=\"togetherjs-walkthrough-main-image\">\r\n        <div class=\"togetherjs-walkthrough-avatar-section\">\r\n          <div class=\"togetherjs-avatar-preview togetherjs-person togetherjs-person-self\"></div>\r\n          <div class=\"togetherjs-avatar-upload-input\"><input type=\"file\" class=\"togetherjs-upload-avatar\"></div>\r\n        </div>\r\n        <input class=\"togetherjs-self-name\" type=\"text\" placeholder=\"Введите своё имя\">\r\n        <div class=\"togetherjs-swatch togetherjs-person-bgcolor-self\"></div>\r\n        <div class=\"togetherjs-save-settings\">\r\n          <button class=\"togetherjs-avatar-save togetherjs-primary\">\r\n            <span id=\"togetherjs-avatar-when-unsaved\">\"\"Сохранить\"\"</span>\r\n            <span id=\"togetherjs-avatar-when-saved\" style=\"display: none\">Сохранено!</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <p>Задайте свои аватар, имя и пользовательский цвет вверху. При желании изменить их позднее, щёлкните по кнопке Профиль.</p>\r\n    </div>\r\n    <div class=\"togetherjs-walkthrough-not-firsttime\">\r\n      <p class=\"togetherjs-walkthrough-main-image\"><img src=\"http://localhost:8080/togetherjs/images/walkthrough-images-profile.png\"></p>\r\n      <p>Вы можете изменить свои аватар, имя и пользовательский цвет, используя кнопку Профиль.</p>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"togetherjs-walkthrough-slide\">\r\n    <p class=\"togetherjs-walkthrough-main-image togetherjs-ifnot-creator\"><img src=\"http://localhost:8080/togetherjs/images/walkthrough-images-invite.png\">\r\n    </p>\r\n    <p class=\"togetherjs-ifnot-creator\">Вы можете пригласить ещё друзей на Ваш сеанс, послав им ссылку с приглашением на панели TOOL_NAME.</p>\r\n    <p class=\"togetherjs-walkthrough-main-image togetherjs-if-creator\">\r\n      <span class=\"togetherjs-walkthrough-sendlink\">\r\n        Скопируйте и приклейте эту ссылку в IM или в имейл, чтобы пригласить друзей.<br>\r\n      </span>\r\n      <input type=\"text\" class=\"togetherjs-share-link\">\r\n    </p>\r\n    <p class=\"togetherjs-if-creator\">Пошлите другу ссылку вверху, чтобы он мог присоединиться к Вашему сеансу! Вы также можете найти эту ссылку с приглашением на панели TOOL_NAME.</p>\r\n  </section>\r\n\r\n  <section class=\"togetherjs-walkthrough-slide\">\r\n    <p class=\"togetherjs-walkthrough-main-image\"><img src=\"http://localhost:8080/togetherjs/images/walkthrough-images-participant.png\"></p>\r\n    <p>Друзья, которые присоединятся к Вашему сеансу TOOL_NAME, появятся здесь. Вы можете щёлкнуть по аватару друга, чтобы увидеть больше информации.</p>\r\n  </section>\r\n\r\n  <section class=\"togetherjs-walkthrough-slide\">\r\n    <p class=\"togetherjs-walkthrough-main-image\"><img src=\"http://localhost:8080/togetherjs/images/walkthrough-images-chat.png\"></p>\r\n    <p>Когда Ваши друзья присоединятся к Вашему сеансу TOOL_NAME, Вы сможете общаться с ними здесь!</p>\r\n  </section>\r\n\r\n  <section class=\"togetherjs-walkthrough-slide\">\r\n    <p class=\"togetherjs-walkthrough-main-image\"><img src=\"http://localhost:8080/togetherjs/images/walkthrough-images-rtc.png\"></p>\r\n    <p>Если Ваш браузер поддерживает аудио-чат, Вы можете запустить его нажатием на иконку микрофона. Узнайте побольше об этой экспериментальной функции <a href=\"https://github.com/mozilla/togetherjs/wiki/About-Audio-Chat-and-WebRTC\" target=\"_blank\">здесь</a>.</p>\r\n  </section>\r\n\r\n  <section class=\"togetherjs-walkthrough-slide\">\r\n    <p class=\"togetherjs-walkthrough-main-image\"><img src=\"http://localhost:8080/togetherjs/images/walkthrough-images-logo.png\"></p>\r\n    <p>Ну вот Вы и готовы использовать TOOL_NAME. Теперь начинайте сотрудничать на сайте SITE_NAME!</p>\r\n  </section>\r\n\r\n  <div style=\"display: none\">\r\n    <!-- There is one of these created for each slide: -->\r\n    <span id=\"togetherjs-template-walkthrough-slide-progress\" class=\"togetherjs-walkthrough-slide-progress\">&#9679;</span>\r\n  </div>\r\n  <section id=\"togetherjs-walkthrough-progress\">\r\n  </section>\r\n\r\n  <section class=\"togetherjs-buttons\">\r\n    <button class=\"togetherjs-primary togetherjs-dismiss\">Я готов!</button>\r\n  </section>\r\n\r\n</div><!-- /.togetherjs-modal -->\r\n",
    names: "Лысый Лис, Большой Бобёр, Умная Сова, Жирный Жираф, Серый Волк, Толстый Тюлень, Рыба-кит, Кисьян Котяра, Известная Игуана"
  };
});
