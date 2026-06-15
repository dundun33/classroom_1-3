/* ===== ここだけ毎回貼り替える ===== */
/* updateISO  : New判定・相対日付の基準日 (YYYY-MM-DD)        */
/* updateTime : 更新した時刻 (HH:MM)。曜日は自動で付きます      */
/* timetable  : 週の時間割（PDFから3組のみ抽出）。週次で差し替え */
/* items      : 各行のデータ。Claudeが返す塊をそのまま貼る     */

window.CLASSROOM_DATA = {
  updateISO: "2026-06-15",
  updateTime: "15:29",
  timetable: {
    label: "6/15(月)〜6/19(金)",
    days: [
      {n:'月',md:'6/15',iso:'2026-06-15'},
      {n:'火',md:'6/16',iso:'2026-06-16'},
      {n:'水',md:'6/17',iso:'2026-06-17'},
      {n:'木',md:'6/18',iso:'2026-06-18'},
      {n:'金',md:'6/19',iso:'2026-06-19'},
    ],
    rows: [
      [ {s:'数',t:'森本',r:'HR'},        {s:'読書会'},               {s:'理',t:'大越・小山',r:'理科A/B'}, {s:'国',t:'鈴木',r:'HR'},          {s:'英',t:'コリンズ・マオ',r:'LL/400'} ],
      [ {s:'社',t:'宮崎',r:'HR'},        {s:'読書会'},               {s:'英',t:'本木',r:'HR'},          {s:'体',t:'石井',r:'HR'},          {s:'国',t:'鈴木',r:'HR'} ],
      [ {s:'音',t:'阿佐美',r:'声楽'},     {s:'国',t:'鈴木',r:'HR'},     {s:'数',t:'山口',r:'HR'},          {s:'英',t:'磯崎・吉野',r:'HR/402'}, {s:'家',t:'菊池',r:'被服B'} ],
      [ {s:'国',t:'秋山・西出',r:'HR/401'}, {s:'社',t:'宮崎',r:'HR'},     {s:'音',t:'矢沢・星野',r:'声楽器楽'}, {s:'数',t:'山口',r:'HR'},          {s:'家',t:'菊池・清水',r:'被服B'} ],
      [ {s:'英',t:'平岡・本木',r:'HR/402'}, {s:'体',t:'新谷',r:'二体'},   {s:'美',t:'芝',r:'美術室'},        {s:'理',t:'松本',r:'理科A'},        {s:'社',t:'宮崎',r:'HR'} ],
      [ {s:'体',t:'佐々木',r:'二体'},     {s:'英',t:'平岡',r:'HR'},     {s:'美',t:'芝',r:'美術室'},        {s:'理',t:'松本',r:'理科A'},        {s:'数',t:'森本・山口',r:'HR/数メ'} ],
    ]
  },
  items: [
    /* --- 1. 宿題・提出物（締切順） --- */
    {id:'k2',cat:'hw',date:'2026-06-15',dateLabel:'6/15 (月)',subject:'技術・家庭科',title:'調理実習の計画表を提出',
      details:['自分の計画表は写真に撮っておく','本日終礼後、学芸部当番が被服室BのクラスBOXへ回収'],thread:'82回生',poster:'菊池菜々世',posted:'6/15'},
    {id:'h1',cat:'hw',date:'2026-06-16',dateLabel:'6/16 (火) 16:10',subject:'数学',title:'文字式(2)プリントの提出・合格期限',
      details:['まだスタンプをもらっていない人は早く出す','何度も再提出の人は、配信の解答を確認して全て直してから出す'],thread:'1年 数学',poster:'森本奈央',posted:'6/12'},
    {id:'r1',cat:'hw',date:'2026-06-17',dateLabel:'6/17 (水) まで',subject:'数学',title:'（再試対象者）再試課題をスタコモで完了',
      details:['対象は文字式 小テスト12点以下の人','6/15〜17の放課後にスタコモで「文字式もっと(2)(3)」を両面解く','丸つけ＋赤で解き直し→メンターに見せて完了サインをもらう'],thread:'1年 数学',poster:'森本奈央',posted:'6/15'},
    {id:'l3',cat:'hw',date:'2026-06-16',dateLabel:'6/16 (火) 20:00',subject:'歴史',title:'オリエント以外の文明',
      details:[],thread:'ロイロ',poster:''},
    {id:'l4',cat:'hw',date:'2026-06-17',dateLabel:'6/17 (水) 17:00',subject:'OC',title:'My Hobby Card',
      details:[],thread:'ロイロ',poster:''},
    {id:'l5',cat:'hw',date:'2026-06-19',dateLabel:'6/19 (金) 20:00',subject:'歴史',title:'日本列島に住み始めた人々',
      details:[],thread:'ロイロ',poster:''},
    {id:'l6',cat:'hw',date:'2026-06-26',dateLabel:'6/26 (金) 20:00',subject:'技術・家庭科',title:'住生活自由課題',
      details:[],thread:'ロイロ',poster:''},

    /* --- 2. 連絡事項（日付順） --- */
    {id:'m1',cat:'no',date:'2026-06-18',dateLabel:'6/18 (木) 8:10',subject:'数学',title:'（再試対象者）文字式 小テスト再試',
      details:['小テスト平均21.7点／12点以下が再試対象','400教室で再試。5分前に着席、遅刻厳禁','不合格の場合は6/19(金)放課後に補習'],thread:'1年 数学',poster:'森本奈央',posted:'6/15'},
    {id:'c1',cat:'no',date:'2026-06-16',dateLabel:'6/16 (火)',subject:'全体',title:'学校説明会（校内清掃）',
      details:['学校説明会のため教室・廊下をきれいに清掃','私物を机の中や横に置き忘れない'],thread:'82回生',poster:'新田愛未',posted:'6/15'},
    {id:'n4',cat:'no',date:'2026-06-16',dateLabel:'6/16 (火)',subject:'国語',title:'読書会',
      details:['完成済みのワークシートと課題図書『カラフル』を持参','『カラフル』巻末余白にクラス・出席番号・氏名を記入'],thread:'82回生',poster:'鈴木秀一',posted:'6/8'},
    {id:'k1',cat:'no',date:'2026-06-16',dateLabel:'6/16 (火)',subject:'技術・家庭科',title:'家庭科の補習（先週の欠席者）',
      details:['先週の授業を休んだ人は6/16昼に補習','クラス掲示を確認して必ず参加'],thread:'82回生',poster:'菊池菜々世',posted:'6/15'},
    {id:'w1',cat:'no',date:'2026-06-17',dateLabel:'6/17 (水) 13:00',subject:'委員会',title:'軽井沢委員会',
      details:['LL教室で実施','※軽井沢委員のみ'],thread:'82回生',poster:'大越佳子',posted:'6/15'},
    {id:'n5',cat:'no',date:'2026-06-19',dateLabel:'6/19 (金) まで',optional:true,subject:'図書',title:'読書週間イベント',
      details:['手作りブックカバー配布。朝8:30〜も参加可能'],thread:'82回生',poster:'久保文香',posted:'6/12'},
    {id:'n6',cat:'no',date:'2026-06-23',dateLabel:'6/23 (火) まで',optional:true,subject:'課外活動',title:'Girls Meet STEM 応募締切',
      details:['大学や企業とともに実施するツアー形式のプログラム','保護者にもメール連絡網で案内あり'],thread:'82回生',poster:'國澤恒久',posted:'6/12'},
    {id:'u2',cat:'no',dateLabel:'次回の授業',subject:'体育',title:'授業内容の変更（保健）',
      details:['今週から石井先生の体育は「保健」','教科書を必ず持参'],thread:'82回生',poster:'石井靖子',posted:'6/10'},
    {id:'u3',cat:'no',dateLabel:'当面の間',subject:'全体',title:'お昼休みのルール制限',
      details:['カラス出没のため、4階屋上での昼食は禁止'],thread:'82回生',poster:'大越佳子',posted:'6/9'},
    {id:'n7',cat:'no',dateLabel:'夏休み',optional:true,subject:'課外活動',title:'労働の未来会議2026（中高生向け社会学習）',
      details:['プレゼン・コンテストや企業訪問ができるイベント','締切など詳細は配布PDF／メール連絡網を確認','保護者と相談して参加を検討'],thread:'82回生',poster:'國澤恒久',posted:'6/8'},
  ]
};
