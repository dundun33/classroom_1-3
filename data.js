/* ===== ここだけ毎回貼り替える ===== */
/* updateISO  : New判定・相対日付の基準日 (YYYY-MM-DD)        */
/* updateTime : 更新した時刻 (HH:MM)。曜日は自動で付きます      */
/* timetable  : 週の時間割（PDFから3組のみ抽出）。週次で差し替え */
/* items      : 各行のデータ。Claudeが返す塊をそのまま貼る     */

window.CLASSROOM_DATA = {
  updateISO: "2026-06-16",
  updateTime: "15:28",
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
      [ {s:'数',t:'森本',r:'HR'},        {s:'読書会',mk:'持ち物',ref:'n4',rs:2}, {s:'理',t:'大越・小山',r:'理科A/B'}, {s:'国',t:'鈴木',r:'HR'},          {s:'英',t:'コリンズ・マオ',r:'LL/400'} ],
      [ {s:'社',t:'宮崎',r:'HR'},        null,                          {s:'英',t:'本木',r:'HR'},          {s:'体',t:'石井',r:'HR'},          {s:'国',t:'鈴木',r:'HR'} ],
      [ {s:'音',t:'阿佐美',r:'声楽'},     {s:'国',t:'鈴木',r:'HR'},     {s:'数',t:'山口',r:'HR'},          {s:'英',t:'磯崎・吉野',r:'HR/402'}, {s:'家',t:'菊池',r:'被服B',mk:'宿題',ref:'k3'} ],
      [ {s:'国',t:'秋山・西出',r:'HR/401'}, {s:'社',t:'宮崎',r:'HR'},     {s:'音',t:'矢沢・星野',r:'声楽器楽'}, {s:'数',t:'山口',r:'HR'},          {s:'家',t:'菊池・清水',r:'被服B',mk:'宿題',ref:'k3'} ],
      [ {s:'英',t:'平岡・本木',r:'HR/402'}, {s:'体',t:'新谷',r:'二体'},   {s:'美',t:'芝',r:'美術室',mk:'持ち物',ref:'a1'}, {s:'理',t:'松本',r:'理科A'},        {s:'社',t:'宮崎',r:'HR'} ],
      [ {s:'体',t:'佐々木',r:'二体'},     {s:'英',t:'平岡',r:'HR'},     {s:'美',t:'芝',r:'美術室',mk:'持ち物',ref:'a1'}, {s:'理',t:'松本',r:'理科A'},        {s:'数',t:'森本・山口',r:'HR/数メ'} ],
    ]
  },
  items: [
    /* --- 1. 宿題・提出物（締切順） --- */
    {id:'k2',cat:'hw',date:'2026-06-16',dateLabel:'6/16 (火) まで',subject:'技術・家庭科',title:'調理実習の計画表を提出／再提出',
      details:['未提出の人は6/15中に提出','返却された人は記入漏れ（献立・個人目標など）を訂正し6/16までに再提出','いずれも被服室BのクラスBOXへ'],thread:'82回生',poster:'菊池菜々世',posted:'6/15'},
    {id:'h1',cat:'hw',date:'2026-06-16',dateLabel:'6/16 (火) 16:10',subject:'数学',title:'文字式(2)プリントの提出・合格期限',
      details:['まだスタンプ未取得の人は終礼後すぐプリントを持参して見せに行く','再提出の人は配信の解答を確認し全て直してから出す'],thread:'1年 数学',poster:'森本奈央',posted:'6/15'},
    {id:'r1',cat:'hw',date:'2026-06-17',dateLabel:'6/17 (水) まで',subject:'数学',title:'（再試対象者）再試課題をスタコモで完了',
      details:['対象は文字式 小テスト12点以下の人','6/15〜17の放課後にスタコモで「文字式もっと(2)(3)」を両面解く','丸つけ＋赤で解き直し→メンターに見せて完了サインをもらう'],thread:'1年 数学',poster:'森本奈央',posted:'6/15'},
    {id:'l3',cat:'hw',date:'2026-06-16',dateLabel:'6/16 (火) 20:00',subject:'歴史',title:'オリエント以外の文明',
      details:[],thread:'ロイロ',poster:''},
    {id:'l4',cat:'hw',date:'2026-06-17',dateLabel:'6/17 (水) 17:00',subject:'OC',title:'My Hobby Card',
      details:[],thread:'ロイロ',poster:''},
    {id:'l5',cat:'hw',date:'2026-06-19',dateLabel:'6/19 (金) 20:00',subject:'歴史',title:'日本列島に住み始めた人々',
      details:[],thread:'ロイロ',poster:''},
    {id:'k3',cat:'hw',date:'2026-06-19',dateLabel:'6/19 (金)',subject:'技術・家庭科',title:'住居「持ち出しリスト No.4」を記入',
      details:['今週の家庭科の宿題','授業は被服室B。iPad・ファイル・筆記用具を持参'],thread:'82回生',poster:'菊池菜々世',posted:'6/15'},
    {id:'l6',cat:'hw',date:'2026-06-26',dateLabel:'6/26 (金) 20:00',subject:'技術・家庭科',title:'住生活自由課題',
      details:[],thread:'ロイロ',poster:''},

    /* --- 2. 連絡事項（日付順） --- */
    {id:'n1',cat:'no',date:'2026-06-13',dateLabel:'6/13 (土)',subject:'全体',title:'校舎見学会（校内清掃）',
      details:['机の中や横に私物を置き忘れない','臨時清掃もしっかり行う'],thread:'82回生',poster:'馬場友紀・新田愛未',posted:'6/12'},
    {id:'n2',cat:'no',date:'2026-06-15',dateLabel:'6/15 (月)',subject:'英語',title:'オンライン英会話',
      details:['iPadをしっかり充電して、忘れずに持参する'],thread:'82回生',poster:'本木綾子',posted:'6/12'},
    {id:'n3',cat:'no',date:'2026-06-15',dateLabel:'6/15 (月) 13:05',subject:'委員会',title:'委員会に出席（全校委員のみ）',
      details:['LL教室にiPadを持って集まる'],thread:'82回生',poster:'大越佳子',posted:'6/10'},
    {id:'s1',cat:'no',date:'2026-06-15',dateLabel:'6/15 (月)',subject:'全体',title:'セーラー服の出張販売',
      details:['用事がある人は17:00までに校務センター前の小会議室へ'],thread:'82回生',poster:'國澤恒久',posted:'6/15'},
    {id:'c1',cat:'no',date:'2026-06-16',dateLabel:'6/16 (火)',subject:'全体',title:'学校説明会（校内清掃）',
      details:['学校説明会のため教室・廊下をきれいに清掃','私物を机の中や横に置き忘れない'],thread:'82回生',poster:'新田愛未',posted:'6/15'},
    {id:'n4',cat:'no',date:'2026-06-16',dateLabel:'6/16 (火)',subject:'国語',title:'読書会',
      details:['完成済みのワークシートと課題図書『カラフル』を持参','『カラフル』巻末余白にクラス・出席番号・氏名を記入'],thread:'82回生',poster:'鈴木秀一',posted:'6/8'},
    {id:'k1',cat:'no',date:'2026-06-16',dateLabel:'6/16 (火)',subject:'技術・家庭科',title:'家庭科の補習（先週の欠席者）',
      details:['先週の授業を休んだ人は6/16昼に補習','クラス掲示を確認して必ず参加'],thread:'82回生',poster:'菊池菜々世',posted:'6/15'},
    {id:'a1',cat:'no',date:'2026-06-17',dateLabel:'6/17 (水)',subject:'美術',title:'美術の持ち物',
      details:['絵の具セット・割烹着・iPadを持参','※美術3・6組への連絡（投稿は「明日」だが3組の美術は水曜）'],thread:'82回生',poster:'芝咲耶子',posted:'6/15'},
    {id:'w1',cat:'no',date:'2026-06-17',dateLabel:'6/17 (水) 13:00',subject:'委員会',title:'軽井沢委員会',
      details:['LL教室で実施','事前にグループ分けを行っておく','※軽井沢委員のみ'],thread:'82回生',poster:'大越佳子',posted:'6/15'},
    {id:'m1',cat:'no',date:'2026-06-18',dateLabel:'6/18 (木) 8:10',subject:'数学',title:'（再試対象者）文字式 小テスト再試',
      details:['小テスト平均21.7点／12点以下が再試対象','400教室で再試。5分前に着席、遅刻厳禁','不合格の場合は6/19(金)放課後に補習'],thread:'1年 数学',poster:'森本奈央',posted:'6/15'},
    {id:'w2',cat:'no',date:'2026-06-19',dateLabel:'今週中',subject:'委員会',title:'グループ会メンバー表を提出（軽井沢委員）',
      details:['隣のクラスとメンバー確認をしてから大越先生へ提出','※2・3・4組の軽井沢委員'],thread:'82回生',poster:'大越佳子',posted:'6/16'},
    {id:'n8',cat:'no',date:'2026-06-19',dateLabel:'6/19 (金) 12:50',subject:'図書',title:'読書会のまとめの会（図書委員）',
      details:['書道室で実施','読書会の記録用紙（グループ会用・クラス会用）を持参','お弁当持参','※各クラス図書委員'],thread:'82回生',poster:'鈴木秀一',posted:'6/16'},
    {id:'n5',cat:'no',date:'2026-06-19',dateLabel:'6/19 (金) まで',optional:true,subject:'図書',title:'読書週間イベント',
      details:['手作りブックカバー配布。朝8:30〜も参加可能'],thread:'82回生',poster:'久保文香',posted:'6/12'},
    {id:'n6',cat:'no',date:'2026-06-23',dateLabel:'6/23 (火) まで',optional:true,subject:'課外活動',title:'Girls Meet STEM 応募締切',
      details:['大学や企業とともに実施するツアー形式のプログラム','保護者にもメール連絡網で案内あり'],thread:'82回生',poster:'國澤恒久',posted:'6/12'},
    {id:'hc1',cat:'no',dateLabel:'当面の間',subject:'保健',title:'健康診断の結果配布',
      details:['4/25実施分の個人結果を担任経由で配布中','フォロー健診の結果配布は後日','受診報告は速やかに保健室へ提出'],thread:'82回生',poster:'西田早苗',posted:'6/16'},
    {id:'u2',cat:'no',dateLabel:'次回の授業',subject:'体育',title:'授業内容の変更（保健）',
      details:['今週から石井先生の体育は「保健」','教科書を必ず持参'],thread:'82回生',poster:'石井靖子',posted:'6/10'},
    {id:'u3',cat:'no',dateLabel:'当面の間',subject:'全体',title:'お昼休みのルール制限',
      details:['カラス出没のため、4階屋上での昼食は禁止'],thread:'82回生',poster:'大越佳子',posted:'6/9'},
    {id:'n7',cat:'no',dateLabel:'夏休み',optional:true,subject:'課外活動',title:'労働の未来会議2026（中高生向け社会学習）',
      details:['プレゼン・コンテストや企業訪問ができるイベント','締切など詳細は配布PDF／メール連絡網を確認','保護者と相談して参加を検討'],thread:'82回生',poster:'國澤恒久',posted:'6/8'},

    /* --- 部活（バスケ）：部活を隠すで一括非表示 --- */
    {id:'b1',cat:'no',date:'2026-06-20',dateLabel:'6/20 (土)',subject:'部活',title:'部活オフ（お休み）',
      details:[],thread:'バスケ',poster:'山本昂宏',posted:'5/28'},
    {id:'b2',cat:'no',date:'2026-06-21',dateLabel:'6/21 (日)',subject:'部活',title:'桐光学園との練習試合',
      details:[],thread:'バスケ',poster:'山本昂宏',posted:'5/28'},
    {id:'b3',cat:'no',date:'2026-06-27',dateLabel:'6/27 (土) 〜',subject:'部活',title:'夏季大会1回戦（公式戦スタート）',
      details:['1回戦6/27(土)、2回戦6/28(日)、3回戦7/4(土)','準決勝・決勝は7/11(土)・12(日)'],thread:'バスケ',poster:'山本昂宏',posted:'5/21'},
    {id:'b4',cat:'no',dateLabel:'常時',subject:'部活',title:'欠席・遅刻連絡のルール',
      details:['休日の欠席・遅刻早退：保護者がメール連絡網（または電話）で連絡','平日練習に私用で出られない：連絡帳で提出','平日練習に学校活動（委員会・補習・再試・面談など）で出られない：口頭で顧問に連絡'],thread:'バスケ',poster:'山本昂宏',posted:'6/5'},
  ]
};
