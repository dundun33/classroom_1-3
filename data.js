/* ===== ここだけ毎回貼り替える ===== */
/* updateISO  : New判定・相対日付の基準日 (YYYY-MM-DD)        */
/* updateTime : 更新した時刻 (HH:MM)。曜日は自動で付きます      */
/* timetable  : 週の時間割（PDFから3組のみ抽出）。週次で差し替え */
/* items      : 各行のデータ。Claudeが返す塊をそのまま貼る     */

window.CLASSROOM_DATA = {
  updateISO: "2026-07-23",
  updateTime: "06:14",
  /* timetable: 夏休み中は不要なのでフィールドごと省略（index.htmlはtimetableが無いとセクションごと非表示にする）。
     2学期が始まったら、その週のtimetableをここに復活させる。直前の内容は下のコメントに保存。
  timetable: {
    label: "7/6(月)〜7/10(金)",
    days: [
      {n:'月',md:'7/6',iso:'2026-07-06'},
      {n:'火',md:'7/7',iso:'2026-07-07'},
      {n:'水',md:'7/8',iso:'2026-07-08'},
      {n:'木',md:'7/9',iso:'2026-07-09'},
      {n:'金',md:'7/10',iso:'2026-07-10'},
    ],
    rows: [
      [ {s:'期末テスト',t:'',r:'4日目',rs:6}, {s:'学活',t:'担任',r:'HR'}, {s:'家',t:'菊池',r:'被服B'}, {s:'数',t:'森本',r:'HR'},          {s:'英',t:'本木',r:'HR'} ],
      [ null,                              {s:'学活',t:'担任',r:'HR'}, {s:'学活',t:'担任',r:'HR'}, {s:'国',t:'秋山・西出・秦野',r:'HR'}, {s:'理',t:'大越',r:'HR'} ],
      [ null,                              {s:'学活',t:'担任',r:'HR'}, {s:'国',t:'鈴木',r:'HR'},   {s:'美',t:'芝',r:'美術室'},        {s:'社・理',t:'宮崎・松本',r:'HR'} ],
      [ null,                              {s:'MHC学生交流会',t:'',r:'南ホール'}, {s:'体',t:'石井',r:'HR'}, {s:'軽井沢',t:'担任',r:'HR'}, {s:'軽井沢',t:'担任',r:'HR'} ],
      [ null,                              {s:'音',t:'阿佐美',r:'声楽'}, {s:'学年学活',t:'',r:'大ホール'}, {s:'ようこそ',t:'担任',r:'HR'}, {s:'宿題',t:'菊池',r:'HR'} ],
      [ null,                              {s:'英・社',t:'コリンズ・馬場',r:'HR'}, {s:'ICT',t:'',r:'南ホール'}, {s:'自治の会',t:'',r:'HR'}, {s:'体',t:'押切・新谷',r:'プール'} ],
    ]
  },
  */
  /* exam: テスト期間だけ書く。無い週は丸ごと削除すれば非表示になる（7/6が最終日なので今週は保持） */
  exam: {
    label: "1学期 期末テスト",
    days: [
      {n:'第1日',md:'7/1(水)',iso:'2026-07-01'},
      {n:'第2日',md:'7/2(木)',iso:'2026-07-02'},
      {n:'第3日',md:'7/3(金)',iso:'2026-07-03'},
      {n:'第4日',md:'7/6(月)',iso:'2026-07-06'},
    ],
    rows: [  // 各行=時限。セル={s:教科, time:時刻, t:担当または範囲} または null
      [ {s:'国語',time:'8:50〜9:40',t:'鈴木'},        {s:'英会話',time:'8:50〜9:15',t:'Collins・Mao'},        {s:'社会',time:'8:50〜9:40',t:'宮崎・平野'}, {s:'数学',time:'8:50〜9:20',t:'一次方程式'} ],
      [ {s:'数学',time:'9:55〜10:45',t:'文字と式'},   {s:'理科',time:'9:30〜10:05',t:'大越・山本・小山・田悟'}, {s:'理科',time:'9:55〜10:35',t:'松本'},      {s:'英語',time:'9:35〜10:25',t:'本木・平岡・磯崎・吉野'} ],
      [ {s:'社会',time:'11:00〜11:30',t:'馬場'},      {s:'国語',time:'10:20〜11:10',t:'秋山・西出・秦野'},      null,                              null ],
    ]
  },
  items: [
    /* --- 1. 宿題・提出物（締切順） --- */
    {id:'rikatest1',cat:'hw',date:'2026-07-16',dateLabel:'7/16 (木) 10:00〜',subject:'理科2分野',title:'期末テスト再テスト（16点以下対象）',
      details:['理科Cで実施。必ず出席','面談と重なる場合は事前連絡'],thread:'82回生',poster:'附属中学校伝達用',posted:'7/10',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODU1NDkzOTA5NTMz'},
    {id:'geo1',cat:'hw',date:'2026-08-31',dateLabel:'8/31 (月) まで',subject:'地理',title:'世界一周すごろく（夏休みの宿題）',
      details:['世界一周すごろくは夏休みの宿題に変更','提出は8月31日の登校日','用紙はテスト返却の授業で配布予定'],
      thread:'82回生',poster:'宮崎可奈子',posted:'7/6',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/Nzk4MzkzMDgyMzYy'},
    {id:'mathhw3',cat:'hw',date:'2026-07-31',dateLabel:'7/31 (金) 20:00 まで【No.1〜6】',subject:'数学',title:'夏休みの宿題【資料】',
      details:['夏休みの宿題No.1〜6 → 7/31(金)20:00ロイロ〆切','夏休みの宿題No.7〜12 → 8/21(金)20:00ロイロ〆切','再提出締切は9/3(木)20:00','答え合わせ・直しは解き方や途中式まで丁寧に'],
      thread:'数学',poster:'山口朋子',posted:'7/13',url:'https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODcwNTg5OTk3NjU1/details'},
    {id:'roilo6',cat:'hw',date:'2026-07-31',dateLabel:'7/31 (金) 22:00 まで',subject:'国語ダブル',title:'軽井沢 歳時記ノート',
      details:[],thread:'ロイロ'},
    {id:'roilo3',cat:'hw',date:'2026-08-21',dateLabel:'8/21 (金) 10:59 まで',subject:'OC',title:'Summer HW: Picture 発表用画像',
      details:[],thread:'ロイロ'},
    {id:'roilo4',cat:'hw',date:'2026-08-21',dateLabel:'8/21 (金) 10:59 まで',subject:'OC',title:'Summer HW: Speech 原稿',
      details:[],thread:'ロイロ'},
    {id:'roilo7',cat:'hw',date:'2026-08-31',dateLabel:'8/31 (月) 8:40 まで',subject:'英語',title:'新中問６章 p.74-83',
      details:[],thread:'ロイロ'},
    {id:'roilo8',cat:'hw',date:'2026-08-31',dateLabel:'8/31 (月) 8:40 まで',subject:'英語',title:'新中問７章 p.84-89',
      details:[],thread:'ロイロ'},
    {id:'roilo9',cat:'hw',date:'2026-08-31',dateLabel:'8/31 (月) 8:40 まで',subject:'英語',title:'新中問８章 p.90-97',
      details:[],thread:'ロイロ'},

    /* --- 2. 連絡事項（日付順） --- */
    {id:'otoshimono1',cat:'no',dateLabel:'当面の間',subject:'全体',title:'落とし物の展示について',
      details:['生徒玄関前に今年度の落とし物を展示中','終業式までに取りに来ないものは夏休み中に処分','貴重品は校務センターで預かり中(同じく終業式まで)'],thread:'82回生',poster:'西出春菜',posted:'7/10',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODcwNDQzMzk2OTMy'},
    {id:'hokendayori1',cat:'no',dateLabel:'当面の間',subject:'保健',title:'保健だよりNo.3【資料】',
      details:[],thread:'82回生',poster:'西田早苗',posted:'7/10',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODcwMzgwOTIwNzk2/details'},
    {id:'orc1',cat:'no',dateLabel:'当面の間',subject:'英語',title:'Oxford Reading Club トライアル案内',
      details:['サイトでユーザーID/パスワードでログイン→「コードを入力」','トライアルコード: ORCLAURA2026'],thread:'英語',poster:'本木綾子',posted:'7/10',url:'https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/p/ODU1NDkxMTQzMzgx'},
    {id:'hoken2',cat:'no',date:'2026-07-16',dateLabel:'7/16 (木)',subject:'保健',title:'軽井沢保健関係諸注意',
      details:[],thread:'82回生',poster:'西田早苗',posted:'7/16',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODU1NTQ3NTI1Mzg4'},
    {id:'eng6',cat:'no',date:'2026-07-17',dateLabel:'7/17 (金)',subject:'英語',title:'夏休み明けテスト範囲・Oxford関連連絡',
      details:['夏休み明けテストはウイニングサマー各単元の「この夏おぼえる単語」から10〜20個出題（英語でスペルを書けるように）','Oxford Big Readコンテスト応募希望者はLL教室のポスター用画用紙を利用可','Oxford Reading Clubのマンスリーレポートはスクショしてロイロの提出箱へ'],
      thread:'82回生',poster:'本木綾子',posted:'7/17',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/Nzk4NDYyMzkyMjIy'},
    {id:'seikatsu2',cat:'no',date:'2026-07-17',dateLabel:'7/17 (金)',subject:'委員会',title:'生活部 園芸係：花鉢の片付け',
      details:['下校前までに教室の花鉢「ハーブゼラニウム」を鉢皿と一緒に校務センターの台車へ'],thread:'82回生',poster:'新田愛未',posted:'7/17',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODcwNDM1Mjk3MTUz'},
    {id:'tosho1',cat:'no',date:'2026-07-17',dateLabel:'7/17 (金)',subject:'全体',title:'図書室：夏休みは工事のため閉館',
      details:['本日は12時20分まで利用可能。借りるなら今日のうち'],thread:'82回生',poster:'久保文香',posted:'7/17',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/Nzk4NDYxNjE5NDU2'},
    {id:'os2',cat:'no',date:'2026-07-17',dateLabel:'7/17 (金)',optional:true,subject:'課外活動',title:'オープンスクール広報サポーターズの会',
      details:['本日終礼清掃後に集合','7/26は理科C、8/22は理科Dに集合'],thread:'82回生',poster:'馬場友紀',posted:'7/17',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODU1NTY0MDU2OTk0'},
    {id:'jugetsu1',cat:'no',date:'2026-07-17',dateLabel:'7/17 (金) まで',optional:true,subject:'委員会',title:'十月祭 チケット・ポスター申請フォーム',
      details:['十月祭行事委員の説明を聞いた希望者が対象','7/17(金)までに申請'],thread:'82回生',poster:'中尾有子',posted:'7/7',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODY5MDAxNDQ4NDk2'},
    {id:'soumu3',cat:'no',date:'2026-07-17',dateLabel:'7/17 (金)',subject:'委員会',title:'夏休み活動フォーム 再提出のお願い（氏名未記入者）',
      details:['氏名未記入のまま提出した人は再度フォームを提出'],thread:'総務',poster:'山本昂宏',posted:'7/17',url:'https://classroom.google.com/c/ODYxMzQ0NDY1OTgx/p/ODcwNzkxMTM1MTE0'},
    {id:'soumu4',cat:'no',date:'2026-07-17',dateLabel:'7/17 (金)',optional:true,subject:'委員会',title:'夏休み総務の活動について（希望者向け）',
      details:['夏休み中も総務は十月祭準備・2学期準備で活動','希望者は①事前にフォーム提出②参加申込書を持参して当日参加','参加申込書が自宅で印刷できなければ連絡簿でも可'],thread:'総務',poster:'山本昂宏',posted:'7/17',url:'https://classroom.google.com/c/ODYxMzQ0NDY1OTgx/p/Nzk4NDYzODMyMjkz'},
    {id:'soumu5',cat:'no',date:'2026-07-17',dateLabel:'7/17 (金)',subject:'委員会',title:'1学期 総務サポーターズへ感謝状',
      details:[],thread:'総務',poster:'山本昂宏',posted:'7/17',url:'https://classroom.google.com/c/ODYxMzQ0NDY1OTgx/p/ODU1NTczMjMzMzky'},
    {id:'engmat2',cat:'no',dateLabel:'当面の間',subject:'英語',title:'Oxford Reading Club【資料】',
      details:[],thread:'英語',poster:'本木綾子',posted:'7/7',url:'https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/m/ODcwMzE0OTc3MjM4/details'},
    {id:'kasei2',cat:'no',dateLabel:'今週中',subject:'技術・家庭科',title:'夏の宿題説明・三角巾/刺しゅうの直し',
      details:['場所: 被服室B','持ち物: iPad、ファイル、裁縫箱、三角巾（該当者のみ）','持ち帰るものが多いので手提げ袋があると良い'],thread:'82回生',poster:'菊池菜々世',posted:'7/6',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODY4NzA1NjY2ODc4'},
    {id:'hc1',cat:'no',dateLabel:'当面の間',subject:'保健',title:'健康診断の結果配布',
      details:['4/25実施分の個人結果を担任経由で配布中','フォロー健診の結果配布は後日','受診報告は速やかに保健室へ提出'],thread:'82回生',poster:'西田早苗',posted:'6/16'},
    {id:'sc1',cat:'no',dateLabel:'当面の間',subject:'全体',title:'スタディコモンズ利用者が多いときの注意',
      details:['テスト前は利用者が増加。溢れた場合は1年1・2組の普通教室も活用（メンター指示に従う）','17:40以降はスタコモ部屋に移動','退室時：机・椅子を元の位置に戻す／消しカスをゴミ箱へ／机の中に忘れ物なし'],
      thread:'82回生',poster:'國澤恒久',posted:'6/25',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODU1MzAxNjI0OTM5/details'},
    {id:'u3',cat:'no',dateLabel:'当面の間',subject:'全体',title:'お昼休みのルール制限',
      details:['カラス出没のため、4階屋上での昼食は禁止'],thread:'82回生',poster:'大越佳子',posted:'6/9'},
    {id:'jig1',cat:'no',dateLabel:'当面の間',subject:'全体',title:'実業部の営業日（7・8月）について',
      details:['実業部を利用する際は営業日・営業時間を確認'],thread:'82回生',poster:'宮地潤子',posted:'7/6',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODU1NDI1OTc4MjI5'},
    {id:'cal7',cat:'no',dateLabel:'当面の間',subject:'全体',title:'7月カレンダー【資料】',
      details:[],thread:'82回生',poster:'國澤恒久',posted:'6/30',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/Nzk4MzUwNTg4NDY5/details'},
    {id:'n7',cat:'no',dateLabel:'夏休み',optional:true,subject:'課外活動',title:'労働の未来会議2026（中高生向け社会学習）',
      details:['プレゼン・コンテストや企業訪問ができるイベント','締切など詳細は配布PDF／メール連絡網を確認','保護者と相談して参加を検討'],thread:'82回生',poster:'國澤恒久',posted:'6/8'},
    {id:'b5',cat:'no',dateLabel:'夏休み',subject:'部活',title:'2026年 私学選手権大会 日程',
      details:['8/22(土)・23(日)・29(土)・30(日)、9/6(日)・13(日)・20(日)・21(月・祝)','予備日: 9/22(火・祝)・23(水・祝)','直前にならないと日程が確定しないことが多いとのこと'],
      thread:'バスケ',poster:'山本昂宏',posted:'6/18',url:'https://classroom.google.com/c/MzI3NTczNzQyMTQy/p/ODU1MjEzMDI2OTgy'},
    {id:'bmat1',cat:'no',dateLabel:'夏休み',subject:'部活',title:'2026年夏休み予定表【資料】（少し追記）',
      details:['確定版からさらに一部追記されました（詳細はリンク先で確認）'],thread:'バスケ',poster:'山本昂宏',posted:'7/16',url:'https://classroom.google.com/c/MzI3NTczNzQyMTQy/m/ODcwNzM1MjU1MTIz/details'},
    {id:'bball2',cat:'no',date:'2026-07-22',dateLabel:'7/22 (水)',subject:'部活',title:'法政中学校との練習試合',
      details:['18日(土)不参加・22日参加の人は明日までにバッシュ等持ち帰り','集合8:10 井の頭公園駅、会場は法政大学中学校（徒歩約12分）','持ち物：リバーシブルゼッケン・バッシュ・飲み物。保護者観戦可（保護者証持参）'],
      thread:'バスケ',poster:'山本昂宏',posted:'7/16',url:'https://classroom.google.com/c/MzI3NTczNzQyMTQy/p/ODcwNzM1MjQxMzk1'},

    /* --- 部活（バスケ）：部活を隠すで一括非表示 --- */
    {id:'b4',cat:'no',dateLabel:'常時',subject:'部活',title:'欠席・遅刻連絡のルール',
      details:['休日の欠席・遅刻早退：保護者がメール連絡網（または電話）で連絡','平日練習に私用で出られない：連絡帳で提出','平日練習に学校活動（委員会・補習・再試・面談など）で出られない：口頭で顧問に連絡'],thread:'バスケ',poster:'山本昂宏',posted:'6/5'},
    {id:'mail-Q7G8PoXAvc',cat:'no',date:'2026-07-16',dateLabel:'7/16 (木)',subject:'82回生',title:'【2026年度行事写真インターネット販売のご案内】',
      details:['入学式・親睦会・運動会の行事写真をネット購入可能（恵雅堂出版「はいチーズ！」）','販売期間：2026年7月17日(金)〜8月31日(月)','認証キー（学年ごとに異なる）はメール本文に記載。SNS等での公開・共有は不可'],
      thread:'',poster:'保護者向けメール',posted:'7/16',mail:true,mailUrl:'https://object-storage.tyo2.conoha.io/v1/nc_8bd5c69d2f434c1eb45a209a9092bdeb/y-line-jwu-j-net/Q7G8PnHBs3',mailPageUrl:'https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/Q7G8PoXAvc'},
    {id:'mail-Q7IGPVMpCx',cat:'no',date:'2026-07-18',dateLabel:'7/18 (土)',subject:'全体',title:'2027年度からの新カリキュラムについて',
      details:['2027年度から週6日制に移行し授業時数が増加（週33コマ）','中学は英語・数学・国語・社会(地理)の時数を増加、実技教科は維持','総合的な学習・特別活動を計2時間、時間割上に確保','一週間の時程など詳細は9月以降に案内予定'],
      thread:'',poster:'保護者向けメール',posted:'7/18',mail:true,mailUrl:'https://object-storage.tyo2.conoha.io/v1/nc_8bd5c69d2f434c1eb45a209a9092bdeb/y-line-jwu-j-net/Q7IGPTIbq7',mailPageUrl:'https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/Q7IGPVMpCx'},
  ]
};
