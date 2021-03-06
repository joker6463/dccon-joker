configData = {
  numChatMax        : 20,
  personalColor     : false,
  badgeVisible      : true,
  badgeChannelId    : 0,
  themeURI          : "https://krynen.github.io/yeokka/theme/",
  theme             : "default",
  themeName         : "",
  msgExistDuration  : 0,
  msgAniDuration    : 0,
  debugLevel        : 2,
  useDisplayName    : true,
  loadCheerImgs     : true,
  loadTwitchCons    : true,
  loadDcCons        : true,
  dcConsURI         : "https://watert.gitlab.io/emotes/yeokka/BBCC/",
  subMonthsMsg      : "☆ {!0:{months} 개월 }구독{0: 시작}! ☆",
  cheersMsg         : "☆ {!0:{bits} 비트 }후원 ! ☆",
  clipReplaceMsg    : "[ 클립 ]",
  linkReplaceMsg    : "[ 링크 ]",
  webSocket         : "wss://irc-ws.chat.twitch.tv:443",
  nick              : "justinfan16831",
  pass              : "foobar",
  channel           : "#joker6463",
  retryInterval     : 2,
  allMessageHandle  : false,
  muteUser          : ["Nightbot"],
  deleteBanMsg      : true,
  commands          : [
    {exe:"clear", msg:"!!clear"},
    {exe:"theme", msg:"!!theme"},
    {exe:"load", msg:"!!load"},
    {exe:"scale", msg:"!!scale"}
  ],
  replaceMsgs       : [
    {orig:/^!{1,2}[a-zA-Z]+/, to:"{no_display}"}     // 봇 호출 영문 메세지 미표시
  ]
};
