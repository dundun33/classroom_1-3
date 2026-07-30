/* ===== ここだけ毎回貼り替える ===== */
/* updateISO  : New判定・相対日付の基準日 (YYYY-MM-DD)        */
/* updateTime : 更新した時刻 (HH:MM)。曜日は自動で付きます      */
/* timetable  : 週の時間割（PDFから3組のみ抽出）。週次で差し替え */
/* items      : 各行のデータ。Claudeが返す塊をそのまま貼る     */

window.CLASSROOM_DATA = {
  updateISO: "2026-07-30",
  updateTime: "10:18",
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
  items: [
    /* --- 1. 宿題・提出物（締切順） --- */
    {id:'geo1',cat:'hw',date:'2026-08-31',dateLabel:'8/31 (月) まで',subject:'地理',title:'世界一周すごろく（夏休みの宿題）',
      details:['世界一周すごろくは夏休みの宿題に変更','提出は8月31日の登校日','用紙はテスト返却の授業で配布予定'],
      thread:'82回生',poster:'宮崎可奈子',posted:'7/6',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/Nzk4MzkzMDgyMzYy'},
    {id:'mathhw3',cat:'hw',date:'2026-07-31',dateLabel:'7/31 (金) 20:00 まで【No.1〜6】',subject:'数学',title:'夏休みの宿題【資料】',
      details:['夏休みの宿題No.1〜6 → 7/31(金)20:00ロイロ〆切','夏休みの宿題No.7〜12 → 8/21(金)20:00ロイロ〆切','再提出締切は9/3(木)20:00','答え合わせ・直しは解き方や途中式まで丁寧に'],
      thread:'数学',poster:'山口朋子',posted:'7/13',url:'https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODcwNTg5OTk3NjU1/details'},
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
      details:['健康手帳・デジタルデトックス・校外授業・睡眠時間について'],thread:'82回生',poster:'西田早苗',posted:'7/10',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODcwMzgwOTIwNzk2/details'},
    {id:'orc1',cat:'no',dateLabel:'当面の間',subject:'英語',title:'Oxford Reading Club トライアル案内',
      details:['サイトでユーザーID/パスワードでログイン→「コードを入力」','トライアルコード: ORCLAURA2026'],thread:'英語',poster:'本木綾子',posted:'7/10',url:'https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/p/ODU1NDkxMTQzMzgx'},
    {id:'hr2',cat:'no',date:'2026-07-24',dateLabel:'7/24 (金)',subject:'全体',title:'明日からの軽井沢三泉寮生活について',
      details:['集合7:50。荷物は事前相談が無い限り教室に取りに戻れない','暑さ対策を（ネッククーラー等、ハンディファンは不可）','持ち物・ネームタグに記名を忘れずに','終業式の成績のお知らせ未提出者は必ず提出'],
      thread:'1-3 HR',poster:'宮崎可奈子',posted:'7/23',url:'https://classroom.google.com/c/ODY2NzQwMjIwMDQ3/p/ODcxMDA4NjgxOTgw'},
    {id:'engmat2',cat:'no',dateLabel:'当面の間',subject:'英語',title:'Oxford Reading Club【資料】',
      details:[],thread:'英語',poster:'本木綾子',posted:'7/7',url:'https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/m/ODcwMzE0OTc3MjM4/details'},
    {id:'eng5',cat:'no',dateLabel:'当面の間',subject:'英語',title:'夏休みの注意事項（英語科より）',
      details:['夏休み明けテスト：ウイニングサマー各単元の「この夏おぼえる単語」から10〜20個をスペル（英語）で覚える','Oxford Big Readコンテスト応募希望者：LL教室に画用紙あり（読んだ本のポスターを描いて応募）','Oxford Reading Clubマンスリーレポート：学習状況ページをスクショしてロイロの提出箱に提出'],
      thread:'82回生',poster:'本木綾子',posted:'7/17',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/Nzk4NDYyMzkyMjIy'},
    {id:'jpndblw1',cat:'no',dateLabel:'当面の間',subject:'国語ダブル',title:'1学期国語Wテスト採点基準（ロイロ資料箱）',
      details:['テストの振り返り・解説スライドをロイロの資料箱に配信中','自分の解答と比較して次のテストに活かす'],
      thread:'国語',poster:'西出春菜',posted:'7/11',url:'https://classroom.google.com/c/ODY0MDgzNTIwNTQ5/p/ODcwNDk4ODc4NzMw'},
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
    {id:'utokyooc1',cat:'no',date:'2026-08-04',dateLabel:'8/3(月)・8/4(火)',optional:true,subject:'課外活動',title:'東京大学教養学部オープンキャンパス2026',
      details:['進学相談・模擬講義（統合自然科学科・学際科学科・教養学科・ALESS）','8/3(月)：各科の進学相談・質問コーナー 11:00〜15:50','8/4(火)：気候変動・霊長類進化・コーカサス言語・ラテンアメリカの模擬講義 11:00〜15:50'],
      thread:'82回生',poster:'本木綾子',posted:'7/28',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODcxMTg2MTA4OTM5',hasLink:true},
    {id:'n7',cat:'no',dateLabel:'夏休み',optional:true,subject:'課外活動',title:'労働の未来会議2026（中高生向け社会学習）',
      details:['プレゼン・コンテストや企業訪問ができるイベント','締切など詳細は配布PDF／メール連絡網を確認','保護者と相談して参加を検討'],thread:'82回生',poster:'國澤恒久',posted:'6/8'},
    {id:'soumu2',cat:'no',dateLabel:'夏休み',optional:true,subject:'課外活動',title:'夏休み総務サポーターズ活動（希望者のみ）',
      details:['十月祭準備や2学期準備のサポート活動（希望者対象）','①事前にフォームを提出、または②参加申込書を持参して当日参加（連絡帳でも可）'],
      thread:'総務',poster:'山本昂宏',posted:'7/17',url:'https://classroom.google.com/c/ODYxMzQ0NDY1OTgx/p/Nzk4NDYzODMyMjkz'},
    {id:'act1',cat:'no',dateLabel:'夏休み',subject:'全体',title:'夏休み生徒活動日程表（クラブ・委員会等）【資料】',
      details:[],thread:'82回生',poster:'斉当かおり',posted:'7/14',url:'https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODcwNjUwOTE5NDQ3/details'},
    {id:'b5',cat:'no',dateLabel:'夏休み',subject:'部活',title:'2026年 私学選手権大会 日程',
      details:['8/22(土)・23(日)・29(土)・30(日)、9/6(日)・13(日)・20(日)・21(月・祝)','予備日: 9/22(火・祝)・23(水・祝)','直前にならないと日程が確定しないことが多いとのこと'],
      thread:'バスケ',poster:'山本昂宏',posted:'6/18',url:'https://classroom.google.com/c/MzI3NTczNzQyMTQy/p/ODU1MjEzMDI2OTgy'},
    {id:'bmat1',cat:'no',dateLabel:'夏休み',subject:'部活',title:'2026年夏休み予定表【資料】（少し追記）',
      details:['確定版からさらに一部追記されました（詳細はリンク先で確認）'],thread:'バスケ',poster:'山本昂宏',posted:'7/16',url:'https://classroom.google.com/c/MzI3NTczNzQyMTQy/m/ODcwNzM1MjU1MTIz/details'},
    {id:'bheat1',cat:'no',date:'2026-07-29',dateLabel:'7/29 (水) 12:00〜',optional:true,subject:'部活',title:'熱中症対策講座（大塚製薬）',
      details:['希望者のみ参加、当日参加も可。会場：南ホール','12:00講演開始→12:30質疑応答→12:40終了予定。講師：大塚製薬','参加しない人は通常どおり登校し体育館の準備を'],
      thread:'バスケ',poster:'山本昂宏',posted:'7/29',url:'https://classroom.google.com/c/MzI3NTczNzQyMTQy/p/ODcxMjQxOTI3OTkz'},
    /* --- 部活（バスケ）：部活を隠すで一括非表示 --- */
    {id:'b4',cat:'no',dateLabel:'常時',subject:'部活',title:'欠席・遅刻連絡のルール',
      details:['休日の欠席・遅刻早退：保護者がメール連絡網（または電話）で連絡','平日練習に私用で出られない：連絡帳で提出','平日練習に学校活動（委員会・補習・再試・面談など）で出られない：口頭で顧問に連絡'],thread:'バスケ',poster:'山本昂宏',posted:'6/5'},
    {id:'mail-Q7PFZdYcrw',cat:'no',date:'2026-07-25',dateLabel:'7/25 (土)',subject:'全体',title:'軽井沢生活3期（3・4組）解散',
      details:['3・4組の軽井沢三泉寮生活が無事終了','交通状況が順調で予定より早く学校到着、解散済み'],
      thread:'',poster:'保護者向けメール',posted:'7/25',mail:true,mailPageUrl:'https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/Q7PFZdYcrw'},
  ]
};
