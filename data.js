/* ===== ここだけ毎回貼り替える ===== */
/* updateISO  : New判定・相対日付の基準日 (YYYY-MM-DD)        */
/* updateTime : 更新した時刻 (HH:MM)。曜日は自動で付きます      */
/* timetable  : 週の時間割（PDFから3組のみ抽出）。週次で差し替え */
/* items      : 各行のデータ。Claudeが返す塊をそのまま貼る     */

window.CLASSROOM_DATA = {
  fetchCheckedISO: "2026-10-30",
  fetchCheckedTime: "09:03",
  updateISO: "2026-10-30",
  updateTime: "09:07",
  timetable: {
  "label": "10/26(月)〜10/30(金)｜28〜30日は中間テスト（時刻は各欄）",
  "days": [
    {
      "n": "月",
      "md": "10/26",
      "iso": "2026-10-26"
    },
    {
      "n": "火",
      "md": "10/27",
      "iso": "2026-10-27"
    },
    {
      "n": "水",
      "md": "10/28",
      "iso": "2026-10-28"
    },
    {
      "n": "木",
      "md": "10/29",
      "iso": "2026-10-29"
    },
    {
      "n": "金",
      "md": "10/30",
      "iso": "2026-10-30"
    }
  ],
  "rows": [
    [
      {
        "s": "数",
        "t": "森本",
        "r": "HR"
      },
      {
        "s": "国",
        "t": "鈴木",
        "r": "HR",
        "mk": "時間割変更",
        "ref": "tt-change-oct27"
      },
      {
        "s": "数学",
        "t": "1次方程式の利用",
        "r": "",
        "time": "8:50〜9:30（40分）",
        "test": true,
        "ref": "math-equation-scope-oct28"
      },
      {
        "s": "理科",
        "t": "大越・山本・小山・田悟",
        "r": "",
        "time": "8:50〜9:25（35分）",
        "test": true,
        "ref": "science2-midterm-oct29"
      },
      {
        "s": "社会",
        "t": "宮崎・平野",
        "r": "",
        "time": "8:50〜9:40（50分）",
        "test": true,
        "ref": "midterm-oct30"
      }
    ],
    [
      {
        "s": "社",
        "t": "宮崎",
        "r": "HR"
      },
      {
        "s": "総合",
        "t": "担任",
        "r": "HR"
      },
      {
        "s": "社会・歴史",
        "t": "馬場",
        "r": "",
        "time": "9:45開始（25分）",
        "test": true,
        "ref": "history-midterm-oct28",
        "mk": "35分→25分"
      },
      {
        "s": "英語",
        "t": "本木・平岡・磯崎・吉野",
        "r": "",
        "time": "9:40〜10:30（50分）",
        "test": true,
        "ref": "english-midterm-oct29"
      },
      {
        "s": "理科",
        "t": "松本",
        "r": "",
        "time": "9:55〜10:30（35分）",
        "test": true,
        "ref": "science1-midterm-oct30"
      }
    ],
    [
      {
        "s": "音",
        "t": "阿佐美",
        "r": "声楽"
      },
      {
        "s": "理",
        "t": "松本",
        "r": "理科A",
        "rs": 2,
        "mk": "時間割変更",
        "ref": "tt-change-oct27"
      },
      {
        "s": "国語",
        "t": "鈴木",
        "r": "",
        "time": "10:35〜11:25（50分）",
        "test": true,
        "ref": "kokugo-midterm-oct28"
      },
      {
        "s": "保体",
        "t": "石井",
        "r": "",
        "time": "10:45〜11:15（30分）",
        "test": true,
        "ref": "midterm-oct29"
      },
      {
        "s": "数学",
        "t": "比例反比例",
        "r": "",
        "time": "10:45〜11:35（50分）",
        "test": true,
        "ref": "math-proportion-scope-oct30"
      }
    ],
    [
      {
        "s": "国",
        "t": "秋山・西出",
        "r": "HR/401"
      },
      null,
      {
        "s": "英語（単語）",
        "t": "本木・平岡・磯崎・吉野",
        "r": "",
        "time": "11:40〜11:50（10分）",
        "test": true,
        "ref": "english-midterm-words-oct28"
      },
      {
        "s": "スタディコモンズ",
        "t": "",
        "r": "403・404・405",
        "time": "13:00〜16:00",
        "rs": 3,
        "ref": "study-commons-oct29",
        "mk": "1年待機406／昼食13時まで"
      },
      {
        "s": "数学・英語の未完了者は残留／もみじ祭内覧",
        "t": "",
        "r": "",
        "time": "内覧は終礼後〜16:00",
        "mk": "バスケ練習中止・会議確認待ち",
        "rs": 3,
        "ref": "english-work-oct30"
      }
    ],
    [
      {
        "s": "英",
        "t": "平岡・本木",
        "r": "HR/402"
      },
      {
        "s": "社",
        "t": "馬場",
        "r": "HR",
        "mk": "時間割変更",
        "ref": "tt-change-oct27"
      },
      {
        "s": "スタディコモンズ",
        "t": "",
        "r": "LL・401・402",
        "time": "13:00〜16:00",
        "rs": 2,
        "ref": "study-commons-oct28-29"
      },
      null,
      null
    ],
    [
      {
        "s": "体",
        "t": "佐々木・齋藤",
        "r": "プール"
      },
      {
        "s": "保健",
        "t": "石井",
        "r": "HR",
        "mk": "プリント・教科書",
        "ref": "health-class-oct27"
      },
      null,
      null,
      null
    ]
  ]
},
  basketball: {
  "start": "2026-09-01",
  "end": "2027-01-07",
  "events": {
    "2026-09-07": {
      "kind": "off",
      "title": "休校・登校禁止",
      "time": "",
      "place": "",
      "detail": "大雨のため家庭学習。月間表の練習予定より9/7の学校連絡を優先。",
      "source": "保護者メール 9/7"
    },
    "2026-09-09": {
      "kind": "practice",
      "title": "練習",
      "time": "時間記載なし",
      "place": "第3体育館",
      "detail": "",
      "source": "月間予定表「2026年9-10月.pdf」"
    },
    "2026-09-11": {
      "kind": "practice",
      "title": "練習",
      "time": "時間記載なし",
      "place": "第3体育館",
      "detail": "",
      "source": "月間予定表「2026年9-10月.pdf」"
    },
    "2026-09-14": {
      "kind": "practice",
      "title": "練習",
      "time": "時間記載なし",
      "place": "第2体育館",
      "detail": "",
      "source": "月間予定表「2026年9-10月.pdf」"
    },
    "2026-09-18": {
      "kind": "practice",
      "title": "練習",
      "time": "時間記載なし",
      "place": "第3体育館",
      "detail": "",
      "source": "月間予定表「2026年9-10月.pdf」"
    },
    "2026-09-25": {
      "kind": "practice",
      "title": "練習",
      "time": "時間記載なし",
      "place": "第3体育館",
      "detail": "",
      "source": "月間予定表「2026年9-10月.pdf」"
    },
    "2026-09-28": {
      "kind": "practice",
      "title": "練習",
      "time": "時間記載なし",
      "place": "第2体育館",
      "detail": "",
      "source": "月間予定表「2026年9-10月.pdf」"
    },
    "2026-09-30": {
      "kind": "practice",
      "title": "練習",
      "time": "時間記載なし",
      "place": "第3体育館",
      "detail": "",
      "source": "月間予定表「2026年9-10月.pdf」"
    },
    "2026-10-02": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "第3体育館",
      "detail": "",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-10-05": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "第2体育館",
      "detail": "",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-10-07": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "第3体育館",
      "detail": "",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-10-16": {
      "kind": "off",
      "title": "学校閉鎖・部活動なし",
      "time": "",
      "place": "",
      "detail": "学校閉鎖のため登校・通常練習なし。健康な生徒も外出を避け家庭学習。学校からの10/15連絡を月間予定より優先。",
      "source": "10/15 保護者メール「学校閉鎖のお知らせ」"
    },
    "2026-10-19": {
      "kind": "practice",
      "title": "練習予定",
      "time": "",
      "place": "第2体育館",
      "detail": "月間予定表では第2体育館で練習予定。10/18 18:20の学校連絡で10/19の通常登校が確定。部活動の追加変更連絡はなし。",
      "source": "月間予定表＋10/18保護者メール"
    },
    "2026-09-12": {
      "kind": "match",
      "title": "練習試合",
      "time": "12:00 準備",
      "place": "本校・第3体育館",
      "detail": "麻生中・田島中との練習試合。原則1・3年生。昼食は11:30〜12:00に3年1組で。早く来すぎないこと。",
      "source": "月間予定表 ＋ バスケ投稿 9/10"
    },
    "2026-09-13": {
      "kind": "uncertain",
      "title": "私学大会？",
      "time": "",
      "place": "場所未定",
      "detail": "月間表は「私学大会？」と記載。開催・参加・時間は未確定。",
      "source": "月間予定表「2026年9-10月.pdf」"
    },
    "2026-09-16": {
      "kind": "uncertain",
      "title": "練習なし？",
      "time": "",
      "place": "第3体育館",
      "detail": "月間表は「3年目白で学ぶ1日／練習なし？」と記載。1年生の練習有無も確定できません。",
      "source": "月間予定表「2026年9-10月.pdf」"
    },
    "2026-09-19": {
      "kind": "off",
      "title": "総体・1年生は不参加",
      "time": "",
      "place": "",
      "detail": "川崎市総体1回戦。1年生は「ようこそ先輩」があるため参加できないとの9/10投稿。",
      "source": "バスケ投稿 9/10"
    },
    "2026-09-20": {
      "kind": "match",
      "title": "総体2回戦（勝ち進んだ場合）",
      "time": "7:30 集合",
      "place": "本校正門 → 南菅中",
      "detail": "1回戦に勝った場合。徒歩で移動、8:45試合開始、12:00頃解散予定。月間表の「私学大会？」は未確定。",
      "source": "月間予定表 ＋ バスケ投稿 9/10"
    },
    "2026-09-21": {
      "kind": "uncertain",
      "title": "私学大会（条件付き）",
      "time": "",
      "place": "場所未定",
      "detail": "8/30に勝った場合、この日に試合の可能性大と記載。出場確定情報は未確認。",
      "source": "月間予定表「2026年9-10月.pdf」"
    },
    "2026-09-23": {
      "kind": "morning",
      "title": "午前練習",
      "time": "8:30〜12:00",
      "place": "第2・3体育館",
      "detail": "インフルエンザ流行中のため、風邪症状がある場合は無理をしない。欠席時は連絡する。",
      "source": "月間予定表・Classroom 9/20"
    },
    "2026-09-26": {
      "kind": "practice",
      "title": "TO講習会・午後練習",
      "time": "10:45講習／12:15練習開始",
      "place": "講習：3年1組（201）／練習：体育館",
      "detail": "TO講習会は希望者対象。11:30〜12:00昼食、12:00〜12:15体育館準備。講習不参加者も12:15から練習開始。",
      "source": "バスケClassroom 9/25"
    },
    "2026-09-27": {
      "kind": "uncertain",
      "title": "総体準決勝・決勝",
      "time": "",
      "place": "",
      "detail": "負けた場合はオフ。大会の会場・集合時刻は記載なし。",
      "source": "月間予定表「2026年9-10月.pdf」"
    },
    "2026-10-04": {
      "kind": "match",
      "title": "北地区シード決め大会",
      "time": "7:35集合／12:30頃解散",
      "place": "はるひ野駅 → はるひ野中",
      "detail": "1・2年生対象。8:50菅戦、2〜3試合。10:50 TO（試合運営担当）。リバーシブル持参、保護者観戦なし。 10/2追記：体調不良の場合は無理をして参加しない。",
      "source": "バスケ投稿 10/2"
    },
    "2026-10-08": {
      "kind": "practice",
      "title": "十月祭準備",
      "time": "8:30集合",
      "place": "控室：理科A",
      "detail": "9:05練習（第3体育館右）、12:40係の会、13:00午後練習。15:00解散、希望者16:30まで自主練。17:00最終下校。",
      "source": "10/7 バスケ部の動き・10/8 修正版タイムスケジュール"
    },
    "2026-10-09": {
      "kind": "practice",
      "title": "十月祭準備・前夜祭",
      "time": "8:30集合",
      "place": "控室：理科A",
      "detail": "8:40練習開始（第3体育館左）、11:30昼食、12:15自主練、14:00練習終了、14:30前夜祭、16:30最終下校。",
      "source": "10/7 バスケ部の動き・10/8 修正版タイムスケジュール"
    },
    "2026-10-10": {
      "kind": "match",
      "title": "十月祭1日目",
      "time": "7:55集合／9:45〜12:15",
      "place": "控室：理科A",
      "detail": "8:10集合写真。1年Aコート10:00・10:15（各7分）、TO担当あり。12:30昼食、16:00再集合、16:30最終下校。",
      "source": "10/7 バスケ部の動き・10/8 修正版タイムスケジュール"
    },
    "2026-10-11": {
      "kind": "match",
      "title": "十月祭2日目",
      "time": "8:40集合／13:00〜15:30",
      "place": "控室：理科A",
      "detail": "11:45昼食、12:15第一体育館アップ。1年B13:00（6分）・A13:35サレジアン戦（8分）。15:30片付け、16:20伝達・時間差下校。",
      "source": "10/7 バスケ部の動き・10/8 修正版タイムスケジュール"
    },
    "2026-10-12": {
      "kind": "school",
      "title": "十月祭片付け",
      "time": "9:50まで自主練可",
      "place": "体育館・HR",
      "detail": "朝の荷物は体育館へ。11:25昼食（HR）、12:10学活・終礼、13:30最終下校。全体朝礼・後夜祭の10:15表記は要確認。",
      "source": "10/7 バスケ部の動き・10/8 修正版タイムスケジュール"
    },
    "2026-10-13": {
      "kind": "uncertain",
      "title": "振替休日・午後練習？",
      "time": "予定 13:00〜16:00",
      "place": "",
      "detail": "参加人数を確認して相談後に実施を決定。",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-10-14": {
      "kind": "school",
      "title": "振替休日",
      "time": "",
      "place": "",
      "detail": "",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-10-17": {
      "kind": "off",
      "title": "学校閉鎖・部活動なし",
      "time": "",
      "place": "",
      "detail": "学校閉鎖のため登校・通常練習なし。健康な生徒も外出を避け家庭学習。学校からの10/15連絡を月間予定より優先。",
      "source": "10/15 バスケ投稿：17日の活動中止を明示"
    },
    "2026-10-20": {
      "kind": "school",
      "title": "テスト1週間前",
      "time": "",
      "place": "",
      "detail": "練習については記載なし。",
      "source": "月間予定表「2026年9-10月.pdf」"
    },
    "2026-10-21": {
      "kind": "practice",
      "title": "承諾書提出者は練習",
      "time": "",
      "place": "",
      "detail": "承諾書を提出した人が対象。",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-10-23": {
      "kind": "practice",
      "title": "承諾書提出者は練習",
      "time": "",
      "place": "",
      "detail": "承諾書を提出した人が対象。",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-10-24": {
      "kind": "match",
      "title": "新人大会1回戦：川中島中に敗戦",
      "time": "9:40集合／14:40頃解散",
      "place": "武蔵中原駅改札 → 宮内中",
      "detail": "10/24の結果連絡：川中島中に敗戦（原文のスコア表記は53-25）。 9:40 JR南武線・武蔵中原駅改札前集合。宮内中まで徒歩12分、9:55到着・アップ開始。 11:25 川中島中戦（日本女子は白）。12:45 TOは勝敗に関係なく担当。14:40頃解散予定。 保護者観戦可。8分×4Q制。 テスト前のため承諾書提出者のみ参加。テスト勉強道具を持参。 昼食時間はないため、試合前後に各自の判断で軽食をとる。",
      "source": "バスケ投稿 10/24（結果）"
    },
    "2026-10-25": {
      "kind": "off",
      "title": "新人大会2回戦：出場なし",
      "time": "",
      "place": "",
      "detail": "10/24の結果連絡で1回戦敗退が判明したため、2回戦の出場予定を取り下げ。 当初の集合・対戦予定は無効。別の活動予定は発表されていない。",
      "source": "バスケ投稿 10/24（1回戦敗戦）"
    },
    "2026-10-27": {
      "kind": "school",
      "title": "通常授業（中間テストは10/28〜30）",
      "time": "",
      "place": "",
      "detail": "10/26週の時間割に従い、中間テストの旧表示を更新。部活動の実施について新しい記載なし。",
      "source": "10/23配信「10月26日～」時間割"
    },
    "2026-10-28": {
      "kind": "school",
      "title": "中間テスト",
      "time": "",
      "place": "",
      "detail": "練習については記載なし。",
      "source": "月間予定表「2026年9-10月.pdf」"
    },
    "2026-10-29": {
      "kind": "school",
      "title": "中間テスト",
      "time": "",
      "place": "",
      "detail": "練習については記載なし。",
      "source": "月間予定表「2026年9-10月.pdf」"
    },
    "2026-10-30": {
      "kind": "off",
      "title": "練習中止（会議は確認待ち）",
      "time": "",
      "place": "",
      "detail": "もみじ祭内覧等で体育館が使えないため練習なし。10/24告知のミーティングの扱いは未発表。",
      "source": "バスケ投稿 10/28（練習中止）・10/24（会議予定）"
    },
    "2026-10-15": {
      "kind": "off",
      "title": "学校閉鎖・部活動なし",
      "time": "",
      "place": "",
      "detail": "学校閉鎖のため登校・通常練習なし。健康な生徒も外出を避け家庭学習。学校からの10/15連絡を月間予定より優先。",
      "source": "10/15 保護者メール「学校閉鎖のお知らせ」"
    },
    "2026-11-02": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "第2体育館",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-11-04": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "第3体育館",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-11-06": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "第3体育館",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-11-09": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "第2体育館",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-11-11": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "第3体育館",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-11-13": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "第3体育館",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-11-16": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "第2体育館",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-11-20": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "第3体育館",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-11-03": {
      "kind": "morning",
      "title": "午前練習・午後自主練可",
      "time": "8:30〜12:00",
      "place": "第3体育館",
      "detail": "文化の日",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-11-08": {
      "kind": "uncertain",
      "title": "午前練習試合（未定）",
      "time": "8:30〜12:00",
      "place": "第2・3体育館",
      "detail": "午後自主練は未確定。対戦相手未発表。",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-11-14": {
      "kind": "morning",
      "title": "午前練習",
      "time": "8:30〜12:00",
      "place": "第2体育館",
      "detail": "入試体験会AM。旧予定の午後練習から変更。",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-11-18": {
      "kind": "school",
      "title": "1・2年家庭学習日",
      "time": "",
      "place": "",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-11-21": {
      "kind": "uncertain",
      "title": "午前練習？午後の可能性",
      "time": "",
      "place": "",
      "detail": "時間帯未確定",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-11-23": {
      "kind": "school",
      "title": "勤労感謝の日",
      "time": "",
      "place": "",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-11-24": {
      "kind": "school",
      "title": "テスト1週間前",
      "time": "",
      "place": "",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-01": {
      "kind": "school",
      "title": "期末テスト",
      "time": "",
      "place": "",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-02": {
      "kind": "school",
      "title": "期末テスト",
      "time": "",
      "place": "",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-03": {
      "kind": "school",
      "title": "期末テスト",
      "time": "",
      "place": "",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-04": {
      "kind": "practice",
      "title": "期末テスト／午後練習",
      "time": "13:00〜16:00",
      "place": "第3体育館",
      "detail": "昼食持参",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-05": {
      "kind": "practice",
      "title": "終日練習",
      "time": "午前8:30〜12:00／午後13:00〜16:00",
      "place": "第3体育館",
      "detail": "入試体験会PM",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-07": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "第2体育館",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-09": {
      "kind": "practice",
      "title": "自治の会／練習",
      "time": "",
      "place": "第3体育館",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-11": {
      "kind": "uncertain",
      "title": "練習なし？",
      "time": "",
      "place": "",
      "detail": "未確定",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-12": {
      "kind": "school",
      "title": "音楽会",
      "time": "",
      "place": "",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-14": {
      "kind": "school",
      "title": "家庭学習日",
      "time": "",
      "place": "",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-15": {
      "kind": "school",
      "title": "家庭学習日",
      "time": "",
      "place": "",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-16": {
      "kind": "morning",
      "title": "面接／午前練習・午後自主練",
      "time": "8:30〜12:00",
      "place": "第3体育館",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-17": {
      "kind": "school",
      "title": "面接",
      "time": "",
      "place": "",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-18": {
      "kind": "school",
      "title": "終業式",
      "time": "",
      "place": "",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-19": {
      "kind": "morning",
      "title": "午前練習（参考予定）",
      "time": "8:30〜12:00",
      "place": "第3体育館",
      "detail": "冬休み活動は参考予定",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-21": {
      "kind": "school",
      "title": "スキー教室・練習なし",
      "time": "",
      "place": "",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-22": {
      "kind": "school",
      "title": "スキー教室・練習なし",
      "time": "",
      "place": "",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-23": {
      "kind": "school",
      "title": "スキー教室・練習なし",
      "time": "",
      "place": "",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-24": {
      "kind": "school",
      "title": "スキー教室・練習なし",
      "time": "",
      "place": "",
      "detail": "",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-25": {
      "kind": "practice",
      "title": "終日練習（参考予定）",
      "time": "午前8:30〜12:00／午後13:00〜16:00",
      "place": "第3体育館",
      "detail": "冬休み活動は参考予定。",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-28": {
      "kind": "practice",
      "title": "終日練習（参考予定）",
      "time": "午前8:30〜12:00／午後13:00〜16:00",
      "place": "第3体育館全面",
      "detail": "冬休み活動は参考予定。午前はバレー部合同練習。",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2026-12-29": {
      "kind": "practice",
      "title": "終日練習（参考予定）",
      "time": "午前8:30〜12:00／午後13:00〜16:00",
      "place": "第3体育館全面",
      "detail": "冬休み活動は参考予定。",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2027-01-04": {
      "kind": "practice",
      "title": "終日練習（参考予定）",
      "time": "午前8:30〜12:00／午後13:00〜16:00",
      "place": "",
      "detail": "冬休み活動は参考予定",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2027-01-05": {
      "kind": "practice",
      "title": "終日練習（参考予定）",
      "time": "午前8:30〜12:00／午後13:00〜16:00",
      "place": "",
      "detail": "冬休み活動は参考予定",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2027-01-06": {
      "kind": "practice",
      "title": "終日練習（参考予定）",
      "time": "午前8:30〜12:00／午後13:00〜16:00",
      "place": "",
      "detail": "冬休み活動は参考予定",
      "source": "11〜12月予定表（10/30配信）"
    },
    "2027-01-07": {
      "kind": "practice",
      "title": "終日練習（参考予定）",
      "time": "午前8:30〜12:00／午後13:00〜16:00",
      "place": "",
      "detail": "冬休み活動は参考予定",
      "source": "11〜12月予定表（10/30配信）"
    }
  }
},
  items: [
  {
    "cat": "no",
    "subject": "学校",
    "thread": "82回生",
    "posted": "10/19",
    "id": "cafeteria-refund-oct15",
    "dateLabel": "10/19の週または翌週に利用",
    "title": "10/15の食券：返金せず今週・来週に利用【訂正】",
    "details": [
      "返金できる旨の以前の案内を訂正。10/15の食券は今週中、もしくは来週中に利用する。",
      "利用時に10/15の食券であることを伝える。メニューは10/15と異なる場合あり。"
    ],
    "poster": "宮地潤子",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODc0MDcwNjUwNTUx"
  },
  {
    "id": "mail-QA3IbhXvWl",
    "cat": "no",
    "dateLabel": "10/19 説明動画配信済み",
    "subject": "全体",
    "title": "2027年度からの新たな体制についてのご報告（続報2）",
    "details": [
      "2027年度の新体制に関する保護者向け説明動画は10/19に配信済み。FAQとご意見・ご質問フォームも同日に案内。",
      "中学生には十月祭片付け日の10/12(月)に、文化祭についての今後の質問受付・説明会の予定を案内",
      "文化祭は専門のワーキングチームで検討中",
      "10/12の案内までは生徒が十月祭に専念できるよう、保護者にも協力を依頼"
    ],
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "10/3",
    "mail": true,
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/QA3IbhXvWl"
  },
  {
    "id": "science2-resubmit-oct19",
    "title": "理科2分野：プリント再提出・貼り直し",
    "dateLabel": "再提出期限の指定なし",
    "cat": "hw",
    "details": [
      "1・2・3組の前回授業プリントを返却。青いハンコの人は再提出。再提出全般の締切は本文記載なし。"
    ],
    "subject": "理科",
    "thread": "82回生",
    "poster": "大越佳子",
    "posted": "10/12",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkwNDY2MDkzMDI4"
  },
  {
    "cat": "no",
    "thread": "82回生",
    "posted": "10/16",
    "id": "sports-key-oct19",
    "dateLabel": "10/19(月)から",
    "subject": "体育部",
    "title": "縦割りクラス対抗 空カギチェック開始",
    "details": [
      "体育部は終礼後の集計を忘れずに行ってください。"
    ],
    "poster": "押切衣舞",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkyNTMxNTczOTQx"
  },
  {
    "id": "violin-accompanist-oct23",
    "title": "音楽会行事委員：バイオリン伴奏候補者を報告",
    "date": "2026-10-23",
    "dateLabel": "10/23 (金) まで",
    "details": [
      "終礼ボックス配布の用紙に伴奏オーディション希望者名を記入し、矢沢先生へ提出。",
      "候補者がいない場合もその旨を伝える。"
    ],
    "cat": "hw",
    "subject": "音楽",
    "thread": "82回生",
    "posted": "10/15",
    "poster": "矢沢まどか",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkwNTEzNjY2NTQx"
  },
  {
    "cat": "no",
    "optional": true,
    "subject": "校外活動",
    "thread": "82回生",
    "poster": "國澤恒久",
    "posted": "10/16",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODkyNTI0NzA3NDQw/details",
    "id": "thinkflat-entry-oct23",
    "date": "2026-10-23",
    "dateLabel": "10/23(金) 一次プレエントリー",
    "title": "THINK FLAT CAMP U-18：一次応募",
    "details": [
      "中1〜高3の希望者向け。主催者フォームでプレエントリー後、送付されるエントリーシート（小論文2題）を10/26(月)までに提出。合格発表は11/2(月)。",
      "学校投稿の締切は10/24と記載されていますが、添付チラシ・主催者サイトは10/23。申込時に確認し、10/23までの対応を。"
    ],
    "note": "一次締切の記載相違：主催者は10/23、学校投稿は10/24"
  },
  {
    "cat": "no",
    "thread": "82回生",
    "posted": "10/16",
    "id": "tt9",
    "date": "2026-10-23",
    "dateLabel": "10/19(月)〜23(金)",
    "subject": "時間割",
    "title": "10/19〜 時間割表【資料】",
    "details": [
      "3組の列を反映。水曜5・6限は美術、木曜5・6限は理科、金曜5・6限は家庭科。",
      "10/24(土)は原資料で空欄。10/21・22の英語ダブル教室変更連絡は他組対象。",
      "10/18 18:20の学校連絡で、10/19は通常登校と確定。"
    ],
    "poster": "松本珠希",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODkyNTU5NDM3OTQ2/details"
  },
  {
    "cat": "no",
    "thread": "82回生",
    "poster": "大越佳子",
    "posted": "10/17",
    "id": "stargazing-apply-oct23",
    "date": "2026-10-23",
    "dateLabel": "10/23(金)まで",
    "title": "【締切延長】11/6天体観望会の申し込み",
    "details": [
      "申込締切を10/19(月)から10/23(金)へ延長。参加希望者は申込書を提出する。"
    ],
    "subject": "理科",
    "optional": true,
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkyNzg5NTYzNTA0"
  },
  {
    "id": "noh-apply-oct25",
    "title": "能楽鑑賞会の申込み",
    "date": "2026-10-25",
    "dateLabel": "10/25 (日) 申込締切【希望者】",
    "details": [
      "2027/1/16開催分。メール内の申込フォームから申し込む。",
      "1人2,000円。定員超過時は抽選。"
    ],
    "cat": "no",
    "subject": "学校",
    "thread": "",
    "posted": "10/15",
    "optional": true,
    "poster": "保護者向けメール",
    "mail": true,
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/QAFGSt99fG",
    "mailUrl": "https://object-storage.tyo2.conoha.io/v1/nc_8bd5c69d2f434c1eb45a209a9092bdeb/y-line-jwu-j-net/QAFGStaN26"
  },
  {
    "id": "midterm-oct28",
    "cat": "no",
    "date": "2026-10-28",
    "dateLabel": "10/28 (水)",
    "title": "2学期中間テスト：10/28",
    "subject": "テスト",
    "thread": "82回生",
    "poster": "松本珠希",
    "posted": "10/16",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODc0MDAxNzUzNTA1/details",
    "details": [
      "8:50〜9:30 数学（1次方程式の利用・40分）",
      "9:45開始 社会（馬場）：10/23の連絡で35分から25分へ変更。開始時刻の変更連絡はなし。",
      "10:35〜11:25 国語（鈴木・50分）",
      "11:40〜11:50 英語（単語・10分）"
    ]
  },
  {
    "id": "midterm-oct29",
    "cat": "no",
    "date": "2026-10-29",
    "dateLabel": "10/29 (木)",
    "title": "2学期中間テスト：10/29",
    "subject": "テスト",
    "thread": "82回生",
    "poster": "松本珠希",
    "posted": "10/16",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODc0MDAxNzUzNTA1/details",
    "details": [
      "8:50〜9:25 理科（大越・山本・小山・田悟・35分）",
      "9:40〜10:30 英語（50分）",
      "10:45〜11:15 保体（石井・30分）"
    ]
  },
  {
    "cat": "no",
    "thread": "82回生",
    "poster": "大越佳子",
    "posted": "10/17",
    "id": "science2-midterm-oct29",
    "date": "2026-10-29",
    "dateLabel": "10/29(木) 理科2分野",
    "subject": "理科",
    "title": "理科2分野：中間テスト範囲",
    "details": [
      "プリントNo.11〜14。",
      "No.11・12の地学分野は、マイクリアと理科便覧も確認する。"
    ],
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODc0MDQyNDUzMzU2"
  },
  {
    "id": "sogaku-apply-oct30",
    "title": "式典の奏楽オーディション：応募受付",
    "date": "2026-10-30",
    "dateLabel": "10/30 (金) まで【希望者】",
    "details": [
      "始業式・終業式などの式典奏者を募集。クラシック音楽で5分以内ほどの曲が望ましい。",
      "ロイロノート（ヴァイオリン）の資料箱の案内を参考に音楽科へ応募。",
      "全員分の学年・組・番号・氏名、作曲者と作品名（作品番号・調性・楽章）、編成、演奏時間を伝える。",
      "オーディションは11/11昼休み、声楽器楽室。詳細は後日Classroom配信。"
    ],
    "cat": "no",
    "subject": "音楽",
    "thread": "82回生",
    "posted": "10/15",
    "optional": true,
    "poster": "矢沢まどか",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODYxNjYwODAzNTYw"
  },
  {
    "id": "midterm-oct30",
    "cat": "no",
    "date": "2026-10-30",
    "dateLabel": "10/30 (金)",
    "title": "2学期中間テスト：10/30",
    "subject": "テスト",
    "thread": "82回生",
    "poster": "松本珠希",
    "posted": "10/16",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODc0MDAxNzUzNTA1/details",
    "details": [
      "8:50〜9:40 社会（宮崎・平野・50分）",
      "9:55〜10:30 理科（松本・35分）",
      "10:45〜11:35 数学（比例反比例・50分）"
    ]
  },
  {
    "id": "mail-Q99IMEuDYr",
    "cat": "no",
    "date": "2026-10-31",
    "dateLabel": "9/11〜10/31 販売期間",
    "subject": "82回生",
    "title": "行事写真インターネット販売のご案内",
    "details": [
      "7月の軽井沢三泉寮生活のスナップ写真をサイトで販売",
      "ご希望の方はサイトに登録して購入（お嬢様の写真のみ・SNS等への2次利用不可）",
      "販売期間: 9/11〜10/31"
    ],
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "9/9",
    "mail": true,
    "mailUrl": "https://object-storage.tyo2.conoha.io/v1/nc_8bd5c69d2f434c1eb45a209a9092bdeb/y-line-jwu-j-net/Q99IMD05b3",
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/Q99IMEuDYr"
  },
  {
    "id": "cal10",
    "cat": "no",
    "dateLabel": "10月の開室予定",
    "subject": "全体",
    "title": "10月 Study Commonsカレンダー【資料】",
    "details": [
      "10/5〜7・22〜23は13:00〜19:00、10/8・28〜29は13:00〜16:00開室",
      "10/27の開室時間は13:00〜19:00に訂正",
      "十月祭準備日の10/8・10/9は高校生向け。中学生で利用を希望する場合は國澤先生に相談",
      "10/9は本文・PDF見出しでは開室とある一方、カレンダー欄には担当者・時間の記載がなく要確認",
      "10/2訂正連絡：学芸部はクラス掲示の日程表の10/27開室時間を13:00〜19:00へペンで修正"
    ],
    "thread": "82回生",
    "poster": "國澤恒久",
    "posted": "10/2",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODY5OTQwMzY4MTEw/details",
    "date": "2026-10-31"
  },
  {
    "id": "shop-oct2026",
    "cat": "no",
    "date": "2026-10-31",
    "dateLabel": "10月の開室日程",
    "subject": "全体",
    "title": "実業部開室日程（10月）",
    "details": [
      "開室日は10/2・5・7・9・16・19・21・23・26・28・30、いずれも8:30〜13:30",
      "十月祭準備の10/8(木)は休業、10/9(金)は13:30まで。両日とも午後の準備に間に合うよう、部長を中心に顧問と相談して必要な物を計画的に用意",
      "10/10・11は十月祭に出店（店舗は休業）。10/13〜15は休業",
      "10/1・12の営業時間は資料に記載なし",
      "通学靴（牛革ローファー）の取り扱い・見本あり",
      "商品交換は事前連絡のうえ、購入時の状態・レシート付きで7営業日以内に持参"
    ],
    "thread": "82回生",
    "poster": "宮地潤子",
    "posted": "10/4",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODg4OTQ1ODA3OTM5/details"
  },
  {
    "id": "entrance-supporters-nov14",
    "cat": "no",
    "optional": true,
    "date": "2026-11-04",
    "dateLabel": "11/4 (水) 申込締切【11/14実施】",
    "subject": "学校",
    "title": "11/14 入試体験会サポーターズ募集",
    "details": [
      "受付・教室/控室担当・相談コーナーのサポーターを募集。",
      "添付フォームで11/4(水)までに申込み。",
      "11/14(土)、早い係は8:00頃集合、遅い係は12:30頃解散予定。",
      "申込者には後日説明の会を実施。"
    ],
    "thread": "82回生",
    "poster": "馬場友紀",
    "posted": "10/15",
    "hasLink": true,
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkyMjgxMjEwMzM3"
  },
  {
    "id": "accompanist-audition-nov4",
    "title": "音楽会：合唱伴奏オーディション",
    "date": "2026-11-04",
    "dateLabel": "11/4 (水) 予定【希望者】",
    "details": [
      "時間は後日連絡。伴奏希望の申出は10/16までにロイロで。"
    ],
    "cat": "no",
    "subject": "音楽",
    "thread": "82回生",
    "poster": "阿佐美優子",
    "posted": "10/15",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODcwMjA0NTUzMDky",
    "optional": true
  },
  {
    "cat": "no",
    "thread": "82回生",
    "poster": "大越佳子",
    "posted": "10/17",
    "id": "stargazing-nov6",
    "date": "2026-11-06",
    "dateLabel": "11/6(金)",
    "title": "天体観望会",
    "details": [
      "参加希望者向け。申込書の提出期限は10/23(金)に延長。",
      "今回の連絡には開催時刻・場所の記載なし。"
    ],
    "subject": "理科",
    "optional": true,
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkyNzg5NTYzNTA0"
  },
  {
    "id": "sogaku-audition-nov11",
    "title": "式典の奏楽オーディション",
    "date": "2026-11-11",
    "dateLabel": "11/11 (水) 昼休み",
    "details": [
      "声楽器楽室で実施。応募締切は10/30。詳細は後日Classroom配信。"
    ],
    "cat": "no",
    "subject": "音楽",
    "thread": "82回生",
    "posted": "10/15",
    "optional": true,
    "poster": "矢沢まどか",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODYxNjYwODAzNTYw"
  },
  {
    "cat": "no",
    "optional": true,
    "subject": "校外活動",
    "thread": "82回生",
    "poster": "國澤恒久",
    "posted": "10/16",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODkyNTI0NzA3NDQw/details",
    "id": "thinkflat-entry-nov13",
    "date": "2026-11-13",
    "dateLabel": "11/13(金) 二次プレエントリー",
    "title": "THINK FLAT CAMP U-18：二次応募",
    "details": [
      "二次プレエントリーは11/13(金)、エントリーシート提出は11/16(月)まで。合格発表は11/24(火)。",
      "一次応募多数の場合、二次募集を打ち切る場合があります。"
    ]
  },
  {
    "id": "bsched-oct-nov",
    "cat": "no",
    "date": "2026-11-30",
    "dateLabel": "10〜11月",
    "subject": "部活",
    "title": "2026年10〜11月 練習日程表【資料】",
    "details": [
      "11月以降は10/30配信の11〜12月予定表を優先。11/14は午前練習へ変更。",
      "10/30の練習は中止（10/28連絡）。体育館が使用できないため、月間表の練習予定を取り消し。",
      "午前練習は8:30〜12:00、午後練習は13:00〜16:00",
      "10/13の振替休日の練習は人数確認後に相談して決定。10/12午前練習も未確定",
      "11/21は午前練習の予定に疑問符があり、午後になる可能性もある"
    ],
    "thread": "バスケ",
    "posted": "10/1",
    "poster": "山本昂宏",
    "url": "https://classroom.google.com/c/MzI3NTczNzQyMTQy/m/ODY5OTY5NDE3NDgy/details"
  },
  {
    "cat": "no",
    "optional": true,
    "subject": "校外活動",
    "thread": "82回生",
    "poster": "國澤恒久",
    "posted": "10/16",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODkyNTI0NzA3NDQw/details",
    "id": "thinkflat-camp-dec29",
    "date": "2026-12-29",
    "dateLabel": "12/25(金)〜29(火)",
    "title": "THINK FLAT CAMP U-18：5日間のウインターキャンプ",
    "details": [
      "中1〜高3対象、東京都内の会場を予定。毎日10:00〜18:00、5日間を通して参加。最終日の懇親会は任意参加で21:00頃終了予定。",
      "チームで実現したい社会に向けた仕組みを考え、グループワークと発表に取り組みます。",
      "参加費15,000円。交通費・宿泊費・食事費は別。事前応募・選考があります。"
    ]
  },
  {
    "id": "mail-QAFGSt99fG",
    "title": "第49回 能楽鑑賞会",
    "date": "2027-01-16",
    "dateLabel": "2027/1/16 (土) 14:00開演",
    "details": [
      "国立能楽堂。13:00開場、14:00開演、16:10終演予定。能「葵上」、狂言「棒縛」。",
      "1・2年生は希望者参加。家族・友人も参加可。本校中学生は標準服着用。",
      "1人2,000円、納入後は返金不可。申込みは10/15〜25、定員超過時は抽選。",
      "支払い・チケットは案内可能な方に11月下旬頃メール連絡。",
      "学校閉鎖で配れなかった印刷物は10/19終礼に配布予定。"
    ],
    "cat": "no",
    "subject": "学校",
    "thread": "",
    "posted": "10/15",
    "optional": true,
    "poster": "保護者向けメール",
    "mail": true,
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/QAFGSt99fG",
    "mailUrl": "https://object-storage.tyo2.conoha.io/v1/nc_8bd5c69d2f434c1eb45a209a9092bdeb/y-line-jwu-j-net/QAFGStaN26"
  },
  {
    "id": "gika-sakurabo-sep18",
    "cat": "hw",
    "dateLabel": "9月の授業連絡（今週の準備は10/20連絡を優先）",
    "subject": "技術家庭",
    "title": "技術・家庭科 サクラボ授業の準備・記事を読む宿題",
    "details": [
      "9/18時点の授業案内はサクラボ",
      "iPad、教科書、ファイル、筆記用具をマイバッグ等にまとめて持参",
      "添付記事を読んでくる"
    ],
    "thread": "82回生",
    "poster": "菊池菜々世",
    "posted": "9/18",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODg0Njc1NDIzODEw"
  },
  {
    "id": "otoshimono1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "全体",
    "title": "落とし物の展示について",
    "details": [
      "生徒玄関前に今年度の落とし物を展示中",
      "終業式までに取りに来ないものは夏休み中に処分",
      "貴重品は校務センターで預かり中(同じく終業式まで)"
    ],
    "thread": "82回生",
    "poster": "西出春菜",
    "posted": "7/10",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODcwNDQzMzk2OTMy"
  },
  {
    "id": "hokendayori1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "保健",
    "title": "保健だよりNo.3【資料】",
    "details": [
      "健康手帳・デジタルデトックス・校外授業・睡眠時間について"
    ],
    "thread": "82回生",
    "poster": "西田早苗",
    "posted": "7/10",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODcwMzgwOTIwNzk2/details"
  },
  {
    "id": "orc1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "英語",
    "title": "Oxford Reading Club トライアル案内",
    "details": [
      "サイトでユーザーID/パスワードでログイン→「コードを入力」",
      "トライアルコード: ORCLAURA2026"
    ],
    "thread": "英語",
    "poster": "本木綾子",
    "posted": "7/10",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/p/ODU1NDkxMTQzMzgx"
  },
  {
    "id": "engmat2",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "英語",
    "title": "Oxford Reading Club【資料】",
    "details": [],
    "thread": "英語",
    "poster": "本木綾子",
    "posted": "7/7",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/m/ODcwMzE0OTc3MjM4/details"
  },
  {
    "id": "engtest1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "英語",
    "title": "英語 夏休み明けテスト範囲",
    "details": [
      "新中学問題集6〜8章すべて",
      "ウイニングサマー 文章問題すべて（ただし8章は除く）・単語も出題"
    ],
    "thread": "82回生",
    "poster": "本木綾子",
    "posted": "8/31",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODc2NTE0Njk1NTY4"
  },
  {
    "id": "engtest2",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "英語",
    "title": "夏休み明けテスト 模範解答【資料】",
    "details": [
      "休み明けテストの模範解答PDFを配信"
    ],
    "thread": "英語",
    "poster": "平岡裕子",
    "posted": "9/15",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/m/ODg0ODU5NTg0MzE1/details"
  },
  {
    "id": "eng5",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "英語",
    "title": "夏休みの注意事項（英語科より）",
    "details": [
      "夏休み明けテスト：ウイニングサマー各単元の「この夏おぼえる単語」から10〜20個をスペル（英語）で覚える",
      "Oxford Big Readコンテスト応募希望者：LL教室に画用紙あり（読んだ本のポスターを描いて応募）",
      "Oxford Reading Clubマンスリーレポート：学習状況ページをスクショしてロイロの提出箱に提出"
    ],
    "thread": "82回生",
    "poster": "本木綾子",
    "posted": "7/17",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/Nzk4NDYyMzkyMjIy"
  },
  {
    "id": "jpndblw1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "国語ダブル",
    "title": "1学期国語Wテスト採点基準（ロイロ資料箱）",
    "details": [
      "テストの振り返り・解説スライドをロイロの資料箱に配信中",
      "自分の解答と比較して次のテストに活かす"
    ],
    "thread": "国語",
    "poster": "西出春菜",
    "posted": "7/11",
    "url": "https://classroom.google.com/c/ODY0MDgzNTIwNTQ5/p/ODcwNDk4ODc4NzMw"
  },
  {
    "id": "jpndblw2",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "国語ダブル",
    "title": "国語ダブル宿題は集めません",
    "details": [
      "自分の作品ファイルに綴じておく",
      "初回授業でチェック"
    ],
    "thread": "82回生",
    "poster": "西出春菜",
    "posted": "9/4",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODc3NTgzMjc4MTc0"
  },
  {
    "id": "hc1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "保健",
    "title": "健康診断の結果配布",
    "details": [
      "4/25実施分の個人結果を担任経由で配布中",
      "フォロー健診の結果配布は後日",
      "受診報告は速やかに保健室へ提出"
    ],
    "thread": "82回生",
    "poster": "西田早苗",
    "posted": "6/16"
  },
  {
    "id": "hc3",
    "cat": "no",
    "dateLabel": "当面の間",
    "optional": true,
    "subject": "保健",
    "title": "アナフィラキシー親子のための懇談会（神奈川県後援）",
    "details": [
      "アナフィラキシーのある親子向け懇談会（神奈川県後援）",
      "参加希望の場合はClassroom添付資料を確認のうえ主催者に直接申込み"
    ],
    "thread": "82回生",
    "poster": "西田早苗",
    "posted": "8/31",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODc2NTE0ODY1MzI4"
  },
  {
    "id": "hc2",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "保健",
    "title": "健康手帳回収（始業式）",
    "details": [
      "始業式に健康手帳を回収",
      "保健だよりを参照して必要事項の確認・記入・捺印の上、担任に提出",
      "始業式に出せなかった人は保健室に直接提出"
    ],
    "thread": "82回生",
    "poster": "西田早苗",
    "posted": "8/31",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODU2MDU2MDI1Mjgx"
  },
  {
    "id": "jwu1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "保健",
    "title": "中学生と作る！クロスサイエンス 健康づくりプロジェクト",
    "details": [
      "日本女子大学食科学部と連携し骨量・体組成を測定するプログラム（任意参加・無料）",
      "9/9・10・11・24・25の昼休みと放課後、本館1階ロビー（事務室前）で実施",
      "参加には同意書と食生活アンケートが必要（登校日に書面配布予定）"
    ],
    "thread": "82回生",
    "poster": "西田早苗",
    "posted": "8/31",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODc0OTA1NzU2ODEz"
  },
  {
    "id": "taisoku1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "保健",
    "title": "2学期 身体測定（個別実施）",
    "details": [
      "集団ではなく個別に実施",
      "昼休みや放課後など都合の良い時に保健室前で測定し、記録用紙を保健室に提出",
      "結果は健康手帳に転記"
    ],
    "thread": "82回生",
    "poster": "西田早苗",
    "posted": "9/4",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODc1NDY3MDE3MTUz"
  },
  {
    "id": "sc1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "全体",
    "title": "スタディコモンズ利用者が多いときの注意",
    "details": [
      "10/29は最新連絡を優先：13:00〜16:00、403（サイレント）・404/405（コラボ）。最終下校時刻以降の1年生の待機は406。",
      "テスト前は利用者が増加。溢れた場合は1年1・2組の普通教室も活用（メンター指示に従う）",
      "17:40以降はスタコモ部屋に移動",
      "退室時：机・椅子を元の位置に戻す／消しカスをゴミ箱へ／机の中に忘れ物なし"
    ],
    "thread": "82回生",
    "poster": "國澤恒久",
    "posted": "6/25",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODU1MzAxNjI0OTM5/details"
  },
  {
    "id": "u3",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "全体",
    "title": "お昼休みのルール制限",
    "details": [
      "カラス出没のため、4階屋上での昼食は禁止"
    ],
    "thread": "82回生",
    "poster": "大越佳子",
    "posted": "6/9"
  },
  {
    "id": "jig1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "全体",
    "title": "実業部の営業日（7・8月）について",
    "details": [
      "実業部を利用する際は営業日・営業時間を確認"
    ],
    "thread": "82回生",
    "poster": "宮地潤子",
    "posted": "7/6",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODU1NDI1OTc4MjI5"
  },
  {
    "id": "jig2",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "全体",
    "title": "実業部開室日程（9月）・コート予約販売",
    "details": [
      "9月の実業部開室日程・コートの予約販売案内。Classroom添付PDFで確認を（保護者と一緒に）"
    ],
    "thread": "82回生",
    "poster": "宮地潤子",
    "posted": "8/31",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODY5MzEyOTk5ODEz/details"
  },
  {
    "id": "cal9",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "全体",
    "title": "9月カレンダー【資料】",
    "details": [
      "9月のスタディコモンズカレンダーを配信。教室にも掲示"
    ],
    "thread": "82回生",
    "poster": "國澤恒久",
    "posted": "9/4",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODc3NTUxNTUyNjYz/details"
  },
  {
    "id": "bijutsu1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "美術",
    "title": "美術 2学期初回授業（持ち物案内）",
    "details": [
      "「私の木」版画の続きを実施。1学期と同じ持ち物を持参",
      "持ち物: 絵の具セット(アキーラ・筆必須)、iPad、割烹着、クロッキー帳、筆記用具",
      "アキーラの色が少ない人は早めに買い足しを"
    ],
    "thread": "82回生",
    "poster": "芝咲耶子",
    "posted": "9/8",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODY5NDk5MDg1NjY0"
  },
  {
    "id": "jikugai1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "全体",
    "title": "十月祭5日間の流れ【資料】",
    "details": [
      "保護者あて配付の十月祭お知らせと合わせて確認を",
      "印刷したものは今月末の「十月祭諸注意の会」で配付予定"
    ],
    "thread": "82回生",
    "poster": "中尾有子",
    "posted": "9/8",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODc1NzExNzczMDE3"
  },
  {
    "id": "gika1",
    "cat": "no",
    "dateLabel": "9月の授業連絡（今週の準備は10/20連絡を優先）",
    "subject": "技術家庭",
    "title": "技術・家庭科より（刺繍キット・今週の授業）",
    "details": [
      "宿題の刺繍キット：ロイロで返却があった人は授業初日の作品提出までに直す",
      "9/7時点の授業案内はサクラボで技術分野",
      "持ち物: iPad(充電必須)、三角巾、刺繍キット、ファイル、技術の教科書、筆記用具（エコバッグ推奨）"
    ],
    "thread": "82回生",
    "poster": "菊池菜々世",
    "posted": "9/7",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODY5NDU0NTQxMTc0"
  },
  {
    "id": "sugaku_kyoshitsu1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "数学",
    "title": "数学ダブル 教室入れ替え（2学期）",
    "details": [
      "2学期のダブル授業の教室は1学期と逆に変更",
      "前半クラス: 数学メディア／後半クラス: ホームルーム（座席順は変更なし）"
    ],
    "thread": "82回生",
    "poster": "山口朋子",
    "posted": "9/9",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODc4NDEwNzczMDgw"
  },
  {
    "id": "toshoiin1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "全体",
    "title": "図書委員へ：曜日決定・仕事開始",
    "details": [
      "明日から仕事開始",
      "ロイロノートに送付されたカードを確認"
    ],
    "thread": "82回生",
    "poster": "久保文香",
    "posted": "9/9",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODY5NTI1ODgxMTg1"
  },
  {
    "id": "seikatsu1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "全体",
    "title": "各クラス生活部部長へ：清掃方法の伝達",
    "details": [
      "本日の終礼・自治の会で伝えた清掃方法を教室で伝達",
      "特にごみの捨て方に注意"
    ],
    "thread": "82回生",
    "poster": "西出春菜",
    "posted": "9/9",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODc4MTUyMjM5ODA5"
  },
  {
    "id": "taiiku2",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "体育",
    "title": "2学期の体育（石井先生クラス）は中間テストまで保健",
    "details": [
      "これまでのプリント・教科書を持参"
    ],
    "thread": "82回生",
    "poster": "石井靖子",
    "posted": "9/9",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODc4NDE2MDQzMzg5"
  },
  {
    "id": "mathres1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "数学",
    "title": "完成ノート3章1次方程式の利用【資料】",
    "details": [
      "抜粋問題・解答のPDFを配信"
    ],
    "thread": "数学",
    "poster": "森本奈央",
    "posted": "9/8",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODc3ODQ2ODI0NDA4/details"
  },
  {
    "id": "mathres2",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "数学",
    "title": "1次方程式の利用もっと（１）【資料】",
    "details": [
      "演習プリント・解答のPDFを配信"
    ],
    "thread": "数学",
    "poster": "森本奈央",
    "posted": "9/10",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODc3ODQ2OTY2MzA2/details"
  },
  {
    "id": "moshi1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "全体",
    "title": "日曜日は本校で模試実施（生徒玄関整理のお願い）",
    "details": [
      "4階は試験会場ではないが、下校時は生徒玄関の整理整頓を",
      "靴は下足箱にきちんと入れ、靴以外の私物は置かない"
    ],
    "thread": "82回生",
    "poster": "國澤恒久",
    "posted": "9/11",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODg0MjU5ODc4OTA3"
  },
  {
    "id": "cal7",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "全体",
    "title": "7月カレンダー【資料】",
    "details": [],
    "thread": "82回生",
    "poster": "國澤恒久",
    "posted": "6/30",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/Nzk4MzUwNTg4NDY5/details"
  },
  {
    "id": "n7",
    "cat": "no",
    "dateLabel": "夏休み",
    "optional": true,
    "subject": "課外活動",
    "title": "労働の未来会議2026（中高生向け社会学習）",
    "details": [
      "プレゼン・コンテストや企業訪問ができるイベント",
      "締切など詳細は配布PDF／メール連絡網を確認",
      "保護者と相談して参加を検討"
    ],
    "thread": "82回生",
    "poster": "國澤恒久",
    "posted": "6/8"
  },
  {
    "id": "soumu3",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "全体",
    "title": "総務サポーターズ 1学期振り返りアンケート",
    "details": [
      "1学期間のサポーターズ活動への感謝とアンケート依頼。2学期も再募集予定",
      "フォームリンクはClassroomの投稿から確認"
    ],
    "thread": "総務",
    "poster": "山本昂宏",
    "posted": "8/31",
    "url": "https://classroom.google.com/c/ODYxMzQ0NDY1OTgx/p/ODcyNDg1NTU3MDA4"
  },
  {
    "id": "soumu2",
    "cat": "no",
    "dateLabel": "夏休み",
    "optional": true,
    "subject": "課外活動",
    "title": "夏休み総務サポーターズ活動（希望者のみ）",
    "details": [
      "十月祭準備や2学期準備のサポート活動（希望者対象）",
      "①事前にフォームを提出、または②参加申込書を持参して当日参加（連絡帳でも可）"
    ],
    "thread": "総務",
    "poster": "山本昂宏",
    "posted": "7/17",
    "url": "https://classroom.google.com/c/ODYxMzQ0NDY1OTgx/p/Nzk4NDYzODMyMjkz"
  },
  {
    "id": "act1",
    "cat": "no",
    "dateLabel": "夏休み",
    "subject": "全体",
    "title": "夏休み生徒活動日程表（クラブ・委員会等）【資料】",
    "details": [],
    "thread": "82回生",
    "poster": "斉当かおり",
    "posted": "7/14",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODcwNjUwOTE5NDQ3/details"
  },
  {
    "id": "bsched1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "部活",
    "title": "2026年 9〜10月 練習日程表【資料】",
    "details": [
      "9/12(土)午後は麻生中・田島中との練習試合（麻生中フルメンバー）。詳細はリンク先PDFで確認を"
    ],
    "thread": "バスケ",
    "poster": "山本昂宏",
    "posted": "8/25",
    "url": "https://classroom.google.com/c/MzI3NTczNzQyMTQy/m/ODc1NzE2NTQ1MDI1/details"
  },
  {
    "id": "b5",
    "cat": "no",
    "dateLabel": "夏休み",
    "subject": "部活",
    "title": "2026年 私学選手権大会 日程",
    "details": [
      "8/22(土)・23(日)・29(土)・30(日)、9/6(日)・13(日)・20(日)・21(月・祝)",
      "予備日: 9/22(火・祝)・23(水・祝)",
      "直前にならないと日程が確定しないことが多いとのこと"
    ],
    "thread": "バスケ",
    "poster": "山本昂宏",
    "posted": "6/18",
    "url": "https://classroom.google.com/c/MzI3NTczNzQyMTQy/p/ODU1MjEzMDI2OTgy"
  },
  {
    "id": "bmat1",
    "cat": "no",
    "dateLabel": "夏休み",
    "subject": "部活",
    "title": "2026年夏休み予定表【資料】（少し追記）",
    "details": [
      "確定版からさらに一部追記されました（詳細はリンク先で確認）"
    ],
    "thread": "バスケ",
    "poster": "山本昂宏",
    "posted": "7/16",
    "url": "https://classroom.google.com/c/MzI3NTczNzQyMTQy/m/ODcwNzM1MjU1MTIz/details"
  },
  {
    "id": "b4",
    "cat": "no",
    "dateLabel": "常時",
    "subject": "部活",
    "title": "欠席・遅刻連絡のルール",
    "details": [
      "休日の欠席・遅刻早退：保護者がメール連絡網（または電話）で連絡",
      "平日練習に私用で出られない：連絡帳で提出",
      "平日練習に学校活動（委員会・補習・再試・面談など）で出られない：口頭で顧問に連絡"
    ],
    "thread": "バスケ",
    "poster": "山本昂宏",
    "posted": "6/5"
  },
  {
    "id": "mail-Q9IGO09EcP",
    "cat": "no",
    "dateLabel": "2027年度から",
    "subject": "全体",
    "title": "2027年度からの新たな体制についてのご報告（続報）",
    "details": [
      "2027年度から中高の一体化・一貫化を進め、週6日制へ移行。授業は週33時間（土曜4時間・水曜5時間、ほかの曜日は6時間）",
      "同じ内容の中高クラブを強制的に統合せず、合同活動も含めて引き続き検討",
      "運動会・音楽会は中高別開催を継続。十月祭ともみじ祭は同日開催へ移行（行事委員会は中高別、文化祭時期はもみじ祭頃を想定）",
      "10/19に説明動画のご意見・ご質問フォームを案内。文化祭や土曜日の運用など検討中事項への意見も受け付け、質問への回答はFAQで順次公開する。"
    ],
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "9/18",
    "mail": true,
    "mailUrl": "https://object-storage.tyo2.conoha.io/v1/nc_8bd5c69d2f434c1eb45a209a9092bdeb/y-line-jwu-j-net/Q9IGO0WP3b",
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/Q9IGO09EcP"
  },
  {
    "id": "mail-Q9JGoXZjuD",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "全体",
    "title": "通学路の不審者情報について",
    "details": [
      "通学路で、始業後に単独歩行中の高校生を対象とする類似事案が発生",
      "登下校やクラブ活動で登校する際は、できるだけ複数人で歩き、不審者を見かけた・遭遇した場合は警察官または警備員へ知らせる",
      "学校は警察へ通報済みで、警備員とともに警戒を強化中"
    ],
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "9/19",
    "mail": true,
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/Q9JGoXZjuD"
  },
  {
    "id": "mail-Q9PHeaYXzc",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "全体",
    "title": "通学路の不審者について",
    "details": [
      "9/23の休日活動下校時、読売ランド前駅から正門までの通学路で高校生が不審者に遭遇（8月下旬の事案とは別件の可能性）",
      "警察官による巡回などの対応を強化中",
      "1人で登下校する際は周囲に注意し、不審者を見かけた・遭遇した場合は警察または警備員へ伝え、担任へ申し出る"
    ],
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "9/25",
    "mail": true,
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/Q9PHeaYXzc"
  },
  {
    "id": "mail-Q99FEBibC9",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "全体",
    "title": "学園ニュースVol.294発行のお知らせ",
    "details": [
      "9/10発行。附属校園の特集記事や連載など、閲覧URLを配信",
      "読者アンケートへの協力依頼あり"
    ],
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "9/10",
    "mail": true,
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/Q99FEBibC9"
  },
  {
    "id": "eng-oc-term2",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "英語",
    "title": "OC 2学期予定・Show and Tell評価表",
    "details": [
      "第2回はShow and Tell発表。その後はクラブ紹介、English Firsthand Access Unit 3、ハロウィーン活動、期末試験準備",
      "2学期の評価はShow and Tellと期末試験",
      "スピーチは20点満点: 内容7点・明瞭さ4点・速さとリズム4点・アイコンタクト3点・写真等の視覚資料2点"
    ],
    "thread": "英語",
    "poster": "Matthew Collins",
    "posted": "9/11",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/p/ODc4MTM3ODkyNjM1",
    "hasLink": true
  },
  {
    "subject": "英語",
    "thread": "英語",
    "poster": "本木綾子",
    "posted": "9/9",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/m/ODcyNjkwMzk5MDcz/details",
    "id": "eng-song-sep",
    "cat": "no",
    "dateLabel": "当面の間",
    "title": "I Don't Think That I Like Her【資料】",
    "details": [
      "英語歌詞と日本語訳を掲載した教材PDF"
    ]
  },
  {
    "id": "tokyo-u-winter",
    "cat": "no",
    "dateLabel": "冬学期",
    "optional": true,
    "subject": "英語",
    "title": "東京大学金曜特別講座 冬学期受講案内",
    "details": [
      "10/2(金)から冬学期を開始",
      "17:30から自宅でオンライン受講できる人が対象",
      "興味のある人は本木先生へ連絡"
    ],
    "thread": "82回生",
    "poster": "本木綾子",
    "posted": "9/15",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODg1MTAxMDM1MzQ3",
    "hasLink": true
  },
  {
    "id": "eng-gakuryoku-sep",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "英語",
    "title": "英語 学力推移調査",
    "details": [
      "問題を配布。力試しとして取り組む"
    ],
    "thread": "82回生",
    "poster": "本木綾子",
    "posted": "9/15",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODg0ODY4OTc5NzY0"
  },
  {
    "id": "soumu-welcome-speech-sep16",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "全体",
    "title": "ようこそ先輩 グループ会のはじめ・終わりの言葉担当者へ",
    "details": [
      "下書きをグループ会担当の先生または担任に確認してもらう",
      "確認後、原稿用紙に清書。原稿用紙は総合委員から受け取る"
    ],
    "thread": "82回生",
    "poster": "宮崎可奈子",
    "posted": "9/16",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODczMDQyMTEwODQ5"
  },
  {
    "id": "kokugo-gakuryoku-sep16",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "国語",
    "title": "国語 学力推移調査",
    "details": [
      "問題を配布。力試しとして取り組む"
    ],
    "thread": "82回生",
    "poster": "鈴木秀一",
    "posted": "9/16",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODg1MzA5NTA5OTE2"
  },
  {
    "id": "math-equation-more2-sep16",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "数学",
    "title": "1次方程式の利用もっと（2）【資料】",
    "details": [
      "演習プリントと解答のPDFを配信"
    ],
    "thread": "数学",
    "poster": "森本奈央",
    "posted": "9/16",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODc3ODQyNTE0NDMx/details"
  },
  {
    "id": "math-equation-test-sep18",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "数学",
    "title": "方程式の利用 小テストについて【資料】",
    "details": [
      "連休明けの小テストについて、試験範囲のPDFを配信",
      "各自、添付の試験範囲PDFを確認"
    ],
    "thread": "数学",
    "poster": "森本奈央",
    "posted": "9/18",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODg1Mzc5NzMzMDY4/details"
  },
  {
    "id": "festival-ticket-names-sep24",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "全体",
    "title": "十月祭チケット：来校者氏名の記入",
    "details": [
      "チケット裏面の生徒氏名・来校者氏名欄を記入してから招待者へ渡す",
      "既に渡した場合は、招待者に来校者氏名の記入を依頼"
    ],
    "thread": "82回生",
    "poster": "中尾有子",
    "posted": "9/24",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODczMjIxMDk1Mzc1"
  },
  {
    "id": "math-gakuryoku-equation-sep25",
    "cat": "no",
    "dateLabel": "中間テストに向けて",
    "subject": "数学",
    "title": "学力推移調査「方程式の利用」の復習",
    "details": [
      "学力推移調査の選択問題5番「方程式の利用」は中間テストの範囲",
      "必ず取り組んでおく"
    ],
    "thread": "数学",
    "poster": "森本奈央",
    "posted": "9/25",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/p/ODY5ODQ4Mzg2MDg3"
  },
  {
    "id": "kokugo-saijiki-term-end-sep28",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "国語",
    "title": "歳時記ノート：学期末のみ提出",
    "details": [
      "2学期から提出は学期末のみ",
      "提出がなくても、週に1ページは書く",
      "教員からコメントが欲しい場合は、授業時に担当教員へ提出"
    ],
    "thread": "82回生",
    "poster": "西出春菜",
    "posted": "9/28",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODg3NjI5MzI2MjQx"
  },
  {
    "id": "math-proportional-notes-sep28",
    "cat": "no",
    "dateLabel": "学習資料",
    "subject": "数学",
    "title": "比例・反比例 完成ノート解答【資料】",
    "details": [
      "比例・反比例の抜粋プリントと完成ノート解答を配信。",
      "小テストの日程は、別途掲載の実施・欠席者受験の最新連絡を参照。"
    ],
    "thread": "数学",
    "poster": "山口朋子",
    "posted": "10/15",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODg3NjQyMjc1MzY1/details"
  },
  {
    "id": "eng-grammar-check-sep28",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "英語",
    "title": "Grammar Check",
    "details": [
      "英文のスペル・文法を確認できるReversoのサイトを案内"
    ],
    "thread": "英語",
    "poster": "本木綾子",
    "posted": "9/28",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/p/ODg0NTA5NDcwODky",
    "hasLink": true
  },
  {
    "id": "math-proportional-more1-sep29",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "数学",
    "title": "比例・反比例 もっと（1）【資料】",
    "details": [
      "演習プリントと解答のPDFを配信"
    ],
    "thread": "数学",
    "poster": "山口朋子",
    "posted": "9/29",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODg3Njk3MjUzOTk5/details"
  },
  {
    "id": "broadcast-festival-survey-sep29",
    "cat": "hw",
    "dateLabel": "今週中【2学期放送委員】",
    "subject": "全体",
    "title": "十月祭シフト希望アンケートの回答",
    "details": [
      "ロイロに配信された十月祭のシフト希望調査アンケートに、今週中に回答"
    ],
    "thread": "82回生",
    "poster": "遠山弥生",
    "posted": "9/29",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODg3Njc1NjAzNzY5"
  },
  {
    "id": "science2-outdoor-sep29",
    "cat": "no",
    "dateLabel": "今週から",
    "subject": "理科",
    "title": "理科2分野 屋外授業・持ち物確認",
    "details": [
      "今週から屋外で授業。必要な持ち物を確認しておく",
      "雨天は理科室で実施。判断が難しい場合は当日朝にClassroomで連絡"
    ],
    "thread": "82回生",
    "poster": "大越佳子",
    "posted": "9/29",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODg3NjU5NDg2NTg0"
  },
  {
    "id": "eng-unit6-answers-sep29",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "英語",
    "title": "Unit 6 解答【資料】",
    "details": [
      "Unit 6の解答PDFを配布"
    ],
    "thread": "英語",
    "poster": "平岡裕子",
    "posted": "9/29",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/m/ODg3NjYzNzYyNTk2/details"
  },
  {
    "id": "festival-labels-sep29",
    "cat": "no",
    "dateLabel": "至急【十月祭行事委員】",
    "subject": "全体",
    "title": "十月祭：机・椅子ラベルの貼付・調査用紙提出",
    "details": [
      "ラベルが必要なクラスは封筒のラベルを受け取り、すぐに貼付",
      "モールと工芸室の机・椅子には貼らない",
      "調査用紙が未提出のクラスは至急提出"
    ],
    "thread": "82回生",
    "poster": "中尾有子",
    "posted": "9/29",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODg3OTA4MzQyNzIx"
  },
  {
    "id": "math-proportional-more2-sep29",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "数学",
    "title": "比例・反比例 もっと（2）【資料】",
    "details": [
      "演習プリントと解答のPDFを配布"
    ],
    "thread": "数学",
    "poster": "山口朋子",
    "posted": "9/29",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODczNTYyNDc3MTc3/details"
  },
  {
    "id": "math-equation-return-sep30",
    "cat": "no",
    "dateLabel": "当面の間",
    "title": "方程式の利用 小テスト返却・解答配布",
    "details": [
      "40点満点の小テストを返却。解答PDFを配布",
      "16点以上25点未満の人は課題なし。きちんと復習するよう案内あり"
    ],
    "subject": "数学",
    "thread": "数学",
    "poster": "森本奈央",
    "posted": "9/30",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODg3NjIxNjk4ODk2/details"
  },
  {
    "id": "festival-grade-duty-adjust-sep30",
    "cat": "no",
    "dateLabel": "至急【十月祭学年コーナー係】",
    "subject": "全体",
    "title": "十月祭 学年コーナー立ち番表の調整",
    "details": [
      "カラー印刷した立ち番表を各クラスで1部用意",
      "三浦さん・平野さんは、交代してもらえる人を探す"
    ],
    "thread": "82回生",
    "poster": "大越佳子",
    "posted": "9/30",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODg4MTc4MzQ1MTY0"
  },
  {
    "id": "math-proportional-more3-oct1",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "数学",
    "title": "比例・反比例 もっと（3）【資料】",
    "details": [
      "演習プリントと解答PDFを配布"
    ],
    "thread": "数学",
    "poster": "山口朋子",
    "posted": "10/1",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODg4NDM1MzM3MjIw/details"
  },
  {
    "id": "math-proportional-more4-oct2",
    "cat": "no",
    "dateLabel": "当面の間",
    "subject": "数学",
    "title": "比例・反比例 もっと（4）【資料】",
    "details": [
      "演習プリントと解答PDFを配布"
    ],
    "thread": "数学",
    "poster": "山口朋子",
    "posted": "10/2",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODczNjk4MjIyMDA5/details"
  },
  {
    "id": "lost-wallet-oct4",
    "cat": "no",
    "dateLabel": "持ち主の方へ",
    "subject": "全体",
    "title": "財布の忘れ物",
    "details": [
      "持ち主は大越先生まで申し出る"
    ],
    "thread": "82回生",
    "poster": "大越佳子",
    "posted": "10/4",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODg4OTQ5NTMwMTgz",
    "hasLink": true
  },
  {
    "id": "lost-items-oct8",
    "cat": "no",
    "dateLabel": "早めに引き取り",
    "subject": "生活",
    "title": "落とし物の引き取り・十月祭中の届け先",
    "details": [
      "今までの落とし物は落とし物棚に収納。なるべく早く引き取る。",
      "十月祭中に拾った物は自治会室前の棚ではなく校務センターへ。拾った場所・日時を落とし物カードに記入。"
    ],
    "thread": "82回生",
    "poster": "西出春菜",
    "posted": "10/8",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODg5ODgxNTYzNDMy",
    "hasLink": true
  },
  {
    "id": "umbrella-oct8",
    "cat": "no",
    "dateLabel": "10/8から",
    "subject": "生活",
    "title": "玄関の傘を回収・置き傘禁止",
    "details": [
      "10/8に玄関の傘立ての傘をすべて回収。当日持ち帰りたい人は西出先生へ。",
      "10/8以降、傘立てに置き傘をしない。"
    ],
    "thread": "82回生",
    "poster": "西出春菜",
    "posted": "10/8",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODczODk0NjYyNTcw"
  },
  {
    "id": "math-more5-oct6",
    "cat": "no",
    "dateLabel": "学習資料",
    "subject": "数学",
    "title": "比例・反比例 もっと（5）【資料】",
    "details": [
      "問題と解答PDFを配布。"
    ],
    "thread": "数学",
    "poster": "山口朋子",
    "posted": "10/6",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODczODQ2MzkwOTY4/details"
  },
  {
    "id": "math-print1-oct6",
    "cat": "no",
    "dateLabel": "学習資料",
    "subject": "数学",
    "title": "比例・反比例 授業プリント（1）【資料】",
    "details": [
      "授業プリントと解答PDFを配布。"
    ],
    "thread": "数学",
    "poster": "山口朋子",
    "posted": "10/6",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODg5MzQxMTE4MDI1/details"
  },
  {
    "id": "eng-snowman-oct6",
    "cat": "no",
    "dateLabel": "学習資料",
    "subject": "英語",
    "title": "Do You Want to Build a Snowman【資料】",
    "details": [],
    "thread": "英語",
    "poster": "平岡裕子",
    "posted": "10/6",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/m/ODg3OTM0NzU5MzAy/details"
  },
  {
    "id": "bball-result-oct8",
    "cat": "no",
    "dateLabel": "結果配布",
    "subject": "部活",
    "title": "2026年度市総体 最終結果【資料】",
    "details": [
      "市総体の最終結果PDFを配布。"
    ],
    "thread": "バスケ",
    "poster": "押切衣舞",
    "posted": "10/8",
    "url": "https://classroom.google.com/c/MzI3NTczNzQyMTQy/m/ODg5ODYwNzM4MTc4/details"
  },
  {
    "id": "lost-items-oct10",
    "cat": "no",
    "subject": "学校",
    "title": "10/10の落とし物",
    "details": [
      "心当たりのある人は校務センターへ取りに行く。"
    ],
    "thread": "82回生",
    "poster": "西出春菜",
    "posted": "10/10",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODczOTIzNDQ4NjEw",
    "hasLink": true
  },
  {
    "id": "lost-items-oct11",
    "cat": "no",
    "subject": "学校",
    "title": "10/11の落とし物",
    "details": [
      "心当たりのある人は校務センターへ取りに行く。"
    ],
    "thread": "82回生",
    "poster": "西出春菜",
    "posted": "10/11",
    "hasLink": true,
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODczOTI2NjE1NDQw"
  },
  {
    "id": "lost-okoshi-oct12",
    "title": "落とし物の確認",
    "cat": "no",
    "details": [
      "心当たりのある人は大越先生へ。"
    ],
    "subject": "学校",
    "thread": "82回生",
    "poster": "大越佳子",
    "posted": "10/12",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkwNDg1MDA1Nzk3",
    "hasLink": true
  },
  {
    "id": "representatives-oct16",
    "title": "代表委員会【学校閉鎖・振替未定】",
    "dateLabel": "学校閉鎖のため当初予定なし・振替未定",
    "cat": "no",
    "details": [
      "10/15〜17の学校閉鎖により、以下の当初の登校・対面実施予定は適用しない。振替日程は未発表。",
      "放課後に代表委員会を実施。"
    ],
    "subject": "学校",
    "thread": "82回生",
    "poster": "山本昂宏",
    "posted": "10/12",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkwNDgxOTUyMDYx"
  },
  {
    "id": "eng-unit7-retest-oct15",
    "title": "英語Unit7 再試・欠席者対応【学校閉鎖・振替未定】",
    "dateLabel": "学校閉鎖のため当初予定なし・振替未定",
    "cat": "no",
    "details": [
      "10/15〜17の学校閉鎖により、以下の当初の登校・対面実施予定は適用しない。振替日程は未発表。",
      "1・2・3組はClassroomで返却されたUnit Testを確認。",
      "全クラス9点以下の人は10/15 13:00にLL教室で再試。",
      "欠席で未受験の人は10/12終礼後に校務センターへ。"
    ],
    "subject": "英語",
    "thread": "82回生",
    "poster": "本木綾子",
    "posted": "10/12",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkwNDY2NjEwODYw"
  },
  {
    "id": "health-news-oct12",
    "cat": "no",
    "subject": "学校",
    "title": "保健だよりNo.4",
    "details": [
      "気象病・ドライアイ・サプリメント・秋を元気に過ごすために・保健室より。"
    ],
    "thread": "82回生",
    "poster": "西田早苗",
    "posted": "10/12",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODkwNDgwNzUxODQz/details"
  },
  {
    "id": "eng-unit7-answers-oct12",
    "cat": "no",
    "subject": "英語",
    "title": "Unit7 テスト模範解答",
    "details": [],
    "thread": "英語",
    "poster": "平岡裕子",
    "posted": "10/12",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/m/ODkwNDkwODk0MzE5/details"
  },
  {
    "cat": "no",
    "subject": "学校",
    "thread": "82回生",
    "posted": "10/15",
    "id": "festival-committee-oct15",
    "dateLabel": "学校閉鎖のため当初予定なし・振替未定",
    "title": "十月祭行事委員会【学校閉鎖・振替未定】",
    "details": [
      "10/15〜17の学校閉鎖により、以下の当初の登校・対面実施予定は適用しない。振替日程は未発表。",
      "当初の案内：放課後、202教室。iPadを持参。"
    ],
    "poster": "中尾有子",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkwNDg5ODE0NDgy"
  },
  {
    "id": "ginga-loilo-oct15",
    "title": "『銀河鉄道の夜』プリントをロイロ配信",
    "dateLabel": "家庭学習用",
    "details": [
      "プリント⑴・⑵をロイロノートに配信。学校に置いてきた人は配信されたプリントを見る。"
    ],
    "cat": "no",
    "subject": "国語",
    "thread": "82回生",
    "poster": "鈴木秀一",
    "posted": "10/15",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkyMjk2NDE0MDIy"
  },
  {
    "id": "momiji-visit-oct15",
    "title": "もみじ祭見学：事前予約が必要",
    "dateLabel": "10/30〜11/1【希望者・事前予約】",
    "details": [
      "見学可能日時：10/30(金)終礼後〜16:00、10/31(土)9:00〜16:00、11/1(日)9:00〜15:30（10/28配布資料で確認）。",
      "標準服（セーラー服）で参加。10/15配信フォームで事前予約し、自動返信メール（入場証）を印刷して持参。申込期限の記載なし。",
      "中学生は高校の生徒玄関で入場証を提出し、校舎外を回って中学校玄関で校内履きに履き替える。保護者は保護者証を持参し高校の生徒玄関から入場。",
      "写真・動画の撮影は高校生とその保護者のみ。中学生は撮影不可（10/28配布資料）。",
      "購入・大ホールの観覧は一般客を優先。荷物による席取り禁止。交通系IC等を事前チャージ（校内チャージ不可）。卒業生バザーは現金のみ。",
      "飲食は3G教室・3H前モール・食堂。持参弁当は201教室で。食べ歩き不可。"
    ],
    "cat": "no",
    "subject": "学校",
    "thread": "82回生",
    "posted": "10/15",
    "optional": true,
    "poster": "石井靖子",
    "hasLink": true,
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkxNzM3MjgyNTQy",
    "date": "2026-11-01"
  },
  {
    "id": "violin-audition-nov",
    "title": "バイオリン曲のピアノ伴奏オーディション",
    "dateLabel": "11/6・9予定（学年別日程は後日）",
    "details": [
      "配布済みの伴奏譜を使って練習し受験。",
      "11/6昼休み、11/9昼休み・放課後を学年で分けて実施予定。1年生の確定枠は未発表。"
    ],
    "cat": "no",
    "subject": "音楽",
    "thread": "82回生",
    "posted": "10/15",
    "poster": "矢沢まどか",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkwNTEzNjY2NTQx",
    "optional": true
  },
  {
    "id": "writing-course-cancel",
    "title": "英語ライティング講座は不成立",
    "dateLabel": "開講なし",
    "details": [
      "最低開講人数に達せず不成立。申込者は配付された手紙を確認。"
    ],
    "cat": "no",
    "subject": "英語",
    "thread": "82回生",
    "posted": "10/15",
    "poster": "中尾有子",
    "optional": true,
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkwNDg4OTE1NDQ4"
  },
  {
    "id": "home-absence-oct16",
    "cat": "no",
    "subject": "技術家庭",
    "title": "家庭科欠席者：プリントとスライドの確認",
    "dateLabel": "次回授業・テスト準備",
    "details": [
      "今週・先週の欠席者で、生成AI・食物No.1〜5のプリントがない人は次回授業で申し出る。",
      "ロイロの「欠席者用」へスライドを配信。テスト範囲のため、不明点は質問する。"
    ],
    "thread": "82回生",
    "poster": "菊池菜々世",
    "posted": "10/16",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkyMjkxNzIwNjIz"
  },
  {
    "id": "science1-midterm-oct30",
    "cat": "no",
    "title": "理科1分野：中間テスト範囲",
    "subject": "理科",
    "thread": "82回生",
    "poster": "松本珠希",
    "posted": "10/19",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODc0MDc1MjY1OTgx",
    "details": [
      "ガスバーナーの使い方（No.01）を再度範囲とする。",
      "プリントNo.11〜17と、それに準じた教科書・マイクリアのページ。気体・状態変化（蒸留を含む）。",
      "No.11は酸素・二酸化炭素・水素・窒素のみ。模範解答は資料箱に掲載。"
    ],
    "date": "2026-10-30",
    "dateLabel": "10/30(金) 理科1分野"
  },
  {
    "id": "math-more6-oct19",
    "cat": "no",
    "title": "比例反比例 もっと（６）",
    "subject": "数学",
    "thread": "数学",
    "poster": "山口朋子",
    "posted": "10/19",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODkyNTg5NzY5MDU0/details",
    "details": []
  },
  {
    "id": "english-pbe4-oct19",
    "cat": "no",
    "title": "October 19, PBE4 新中解答",
    "subject": "英語",
    "thread": "英語",
    "poster": "本木綾子",
    "posted": "10/19",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/m/ODkyNTc2NzM2ODg0/details",
    "details": []
  },
  {
    "id": "bball-rookie-oct24",
    "cat": "no",
    "title": "新人大会1回戦：川中島中に敗戦",
    "subject": "部活",
    "thread": "バスケ",
    "poster": "押切衣舞",
    "posted": "10/24",
    "url": "https://classroom.google.com/c/MzI3NTczNzQyMTQy/p/ODc0MzE1MDUyNTMz",
    "details": [
      "10/24の結果連絡：川中島中に敗戦（原文のスコア表記は53-25）。",
      "9:40 JR南武線・武蔵中原駅改札前集合。宮内中まで徒歩12分、9:55到着・アップ開始。",
      "11:25 川中島中戦（日本女子は白）。12:45 TOは勝敗に関係なく担当。14:40頃解散予定。",
      "保護者観戦可。8分×4Q制。",
      "テスト前のため承諾書提出者のみ参加。テスト勉強道具を持参。",
      "昼食時間はないため、試合前後に各自の判断で軽食をとる。"
    ],
    "date": "2026-10-24",
    "dateLabel": "10/24(土) 9:40集合／14:40頃解散"
  },
  {
    "id": "bball-rookie-oct25",
    "cat": "no",
    "title": "新人大会2回戦：1回戦敗退により出場なし",
    "subject": "部活",
    "thread": "バスケ",
    "poster": "押切衣舞",
    "posted": "10/24",
    "url": "https://classroom.google.com/c/MzI3NTczNzQyMTQy/p/ODc0MzE1MDUyNTMz",
    "details": [
      "10/24の結果連絡で1回戦敗退が判明したため、2回戦の出場予定を取り下げ。",
      "当初の集合・対戦予定は無効。別の活動予定は発表されていない。"
    ],
    "date": "2026-10-25",
    "dateLabel": "10/25(日) 出場なし"
  },
  {
    "id": "mail-QAJENwHOVQ",
    "cat": "no",
    "subject": "学校から",
    "title": "説明動画アンケート（ご意見・ご質問フォーム）",
    "details": [
      "新体制の説明動画への意見・質問を、メール内のアンケートフォームから送信する。",
      "土曜日の運用や文化祭など、検討中事項についても寄せられた意見を参考にする。",
      "質問への個別回答は行わず、FAQとして順次公開する。締切の記載なし。"
    ],
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "10/19",
    "mail": true,
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/QAJENwHOVQ"
  },
  {
    "id": "mail-QAJEQD0QIZ",
    "cat": "no",
    "subject": "学校から",
    "title": "FAQについて",
    "details": [
      "新体制に関するFAQの閲覧用パスワードを通知。パスワードは保護者向けメール本文で確認する。"
    ],
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "10/19",
    "mail": true,
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/QAJEQD0QIZ"
  },
  {
    "id": "mail-QAJDp3TXON",
    "cat": "no",
    "subject": "学校から",
    "title": "「中高一体化・一貫化の新たな体制作りについて」説明動画",
    "details": [
      "10/3の「続報2」で案内した保護者向け説明動画を配信。",
      "FAQも案内。閲覧用パスワードとご意見・ご質問フォームは別メールで通知。"
    ],
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "10/19",
    "mail": true,
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/QAJDp3TXON",
    "mailUrl": "https://youtu.be/8jLflWptaZo"
  },
  {
    "id": "home-preparation-oct23",
    "cat": "no",
    "title": "家庭科：今週の授業準備・調理実習班の座席",
    "subject": "技術家庭",
    "thread": "82回生",
    "poster": "菊池菜々世",
    "posted": "10/20",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODczNzY4NjI4MTQ5",
    "details": [
      "ジャパンナレッジスクールを使うため、Googleのgseアカウントのメールアドレスとパスワードを控えてくる。",
      "授業はHRで調理実習の班ごとに着席。ロイロ資料箱「座席表→1年教室(調理実習班)」を確認。",
      "持ち物はファイル・iPad・教科書。"
    ],
    "date": "2026-10-23",
    "dateLabel": "10/23(金) 5・6限（3組）"
  },
  {
    "id": "ramen-contest-nov30",
    "cat": "no",
    "title": "インスタントラーメン オリジナル料理コンテスト",
    "subject": "技術家庭",
    "thread": "82回生",
    "poster": "遠山弥生",
    "posted": "10/20",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODc0MDc5ODEyMjc1",
    "details": [
      "野菜モリモリ編。袋めん部門・カップめん部門があり、両部門や複数作品の応募も可。",
      "調理写真・レシピ・簡単なコメントをオンライン投稿する。JASマークの付いた即席めんを使用。",
      "応募締切は11/30(月)。"
    ],
    "optional": true,
    "date": "2026-11-30",
    "dateLabel": "11/30(月) 応募締切",
    "hasLink": true
  },
  {
    "id": "lost-property-oct23",
    "cat": "no",
    "title": "落とし物・置き傘の引き取り",
    "subject": "学校",
    "thread": "82回生",
    "poster": "西出春菜",
    "posted": "10/20",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkzMTkwMzg2NDky",
    "details": [
      "十月祭までの落とし物は校務センター、置きっぱなしの傘は生徒玄関にある。",
      "10/23(金)放課後に処分予定のため、それまでに自分のものを引き取る。"
    ],
    "date": "2026-10-23",
    "dateLabel": "10/23(金) 放課後の処分前まで"
  },
  {
    "id": "science-makeup-oct22",
    "cat": "no",
    "title": "理科1追実験：ろうの状態変化【再延期】",
    "subject": "理科",
    "thread": "82回生",
    "poster": "松本珠希",
    "posted": "10/23",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODgzMDc1NzI1MDY0",
    "details": [
      "10/22→10/23から、さらに10/26へ延期。理科1の授業を欠席し、追実験を希望する人が対象。",
      "当初案内の会場は理科A。最新連絡では会場変更の記載なし。"
    ],
    "date": "2026-10-26",
    "dateLabel": "10/26(月) 昼",
    "optional": true
  },
  {
    "id": "future-challenge-oct20",
    "cat": "hw",
    "title": "「ミライへの種まき」へチャレンジを報告",
    "subject": "学活・総合",
    "thread": "82回生",
    "poster": "國澤恒久",
    "posted": "10/20",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkzMjE3OTA3Nzkz",
    "details": [
      "自分のチャレンジを報告する。報告フォームは82回生Classroomの「授業」にある。"
    ],
    "dateLabel": "期限の記載なし"
  },
  {
    "id": "math-test-answers-oct20",
    "cat": "no",
    "title": "比例反比例小テスト解答",
    "subject": "数学",
    "thread": "数学",
    "poster": "山口朋子",
    "posted": "10/20",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODc0MTI1Njk0OTI1/details",
    "details": []
  },
  {
    "id": "geography-europe2-oct20",
    "cat": "no",
    "title": "No.18～19「ヨーロッパ州」（後編）",
    "subject": "地理",
    "thread": "地理",
    "poster": "宮崎可奈子",
    "posted": "10/20",
    "url": "https://classroom.google.com/c/ODY1MzU4MzYwMzcx/m/ODc0MTMyNjUzMTQ4/details",
    "details": []
  },
  {
    "id": "geography-europe1-oct20",
    "cat": "no",
    "title": "No.13～17「ヨーロッパ州」（前編）",
    "subject": "地理",
    "thread": "地理",
    "poster": "宮崎可奈子",
    "posted": "10/20",
    "url": "https://classroom.google.com/c/ODY1MzU4MzYwMzcx/m/ODkzMjM5NDI1OTU1/details",
    "details": []
  },
  {
    "cat": "no",
    "posted": "10/21",
    "id": "english-midterm-words-oct28",
    "title": "英語：中間単語テスト範囲",
    "date": "2026-10-28",
    "dateLabel": "10/28(水) 11:40〜11:50",
    "details": [
      "30点・10分。Keyワーク p.108・124・138。"
    ],
    "subject": "英語",
    "thread": "英語",
    "poster": "本木綾子",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/m/ODkzNDczNDI1MTg1/details"
  },
  {
    "cat": "no",
    "posted": "10/21",
    "id": "english-midterm-oct29",
    "title": "英語：2学期中間テスト範囲",
    "date": "2026-10-29",
    "dateLabel": "10/29(木) 9:40〜10:30",
    "details": [
      "教科書の試験は100点・50分。教科書 p.71〜101（Unit 6〜8）。",
      "Keyワーク p.102〜145（宿題ではない箇所も範囲）。",
      "新中問 第9・10・13章。授業で配られた文法プリント①〜⑨とユニットテスト。"
    ],
    "subject": "英語",
    "thread": "英語",
    "poster": "本木綾子",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/m/ODkzNDczNDI1MTg1/details"
  },
  {
    "id": "science-wine-oct26",
    "cat": "no",
    "title": "理科1追実験：赤ワイン【再延期】",
    "subject": "理科",
    "thread": "82回生",
    "poster": "松本珠希",
    "posted": "10/23",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODgzMDc1NzI1MDY0",
    "details": [
      "10/22→10/23から、さらに10/26放課後へ延期。授業欠席者のうち追実験を希望する人が対象。",
      "当初案内の会場は理科A。最新連絡では会場変更の記載なし。"
    ],
    "date": "2026-10-26",
    "dateLabel": "10/26(月) 放課後",
    "optional": true
  },
  {
    "id": "history-midterm-oct28",
    "cat": "no",
    "title": "歴史：中間テスト範囲・試験時間変更",
    "subject": "社会",
    "thread": "82回生",
    "poster": "馬場友紀",
    "posted": "10/23",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODk1MzkwOTY1MDQ2",
    "details": [
      "プリントNo.8〜11。スライド・おさらいプリントも確認する。",
      "テスト時間は35分から25分に変更。"
    ],
    "date": "2026-10-28",
    "dateLabel": "10/28(水) 中間テスト"
  },
  {
    "id": "kokugo-midterm-oct28",
    "cat": "no",
    "title": "国語（鈴木）：中間テスト範囲",
    "subject": "国語",
    "thread": "82回生",
    "poster": "鈴木秀一",
    "posted": "10/23",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODk1NDI3OTM3MjU1",
    "details": [
      "「夏の庭」10章〜終わり（学習の手引き④の第10〜15章、プリント⑤）。",
      "「銀河鉄道の夜」1〜4章（プリント⑴・⑵）。",
      "漢字ステップ13〜18・力だめし3、百人一首13〜18。"
    ],
    "date": "2026-10-28",
    "dateLabel": "10/28(水) 中間テスト"
  },
  {
    "id": "english-unit8-makeup-oct23",
    "cat": "no",
    "title": "英語Unit 8：欠席者の追試",
    "subject": "英語",
    "thread": "82回生",
    "poster": "本木綾子",
    "posted": "10/23",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODk1NDE4MzY5ODU2",
    "details": [
      "10/22欠席でUnit 8テストを受けていない人は、放課後に5組の教室へ。"
    ],
    "date": "2026-10-23",
    "dateLabel": "10/23(金) 放課後"
  },
  {
    "id": "lost-property-oct26",
    "cat": "no",
    "title": "4階廊下の落とし物：理科メディアで保管",
    "subject": "連絡",
    "thread": "82回生",
    "poster": "大越佳子",
    "posted": "10/23",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODk1NDM1NDUwMDM1",
    "hasLink": true,
    "details": [
      "持ち主は月曜日に理科メディアへ取りに行く。"
    ],
    "date": "2026-10-26",
    "dateLabel": "10/26(月)"
  },
  {
    "id": "violin-accompanists-oct23",
    "cat": "hw",
    "title": "音楽会行事委員：バイオリン伴奏者リスト提出",
    "subject": "音楽",
    "thread": "82回生",
    "poster": "矢沢まどか",
    "posted": "10/23",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODk1NDE2MDI2ODIw",
    "details": [
      "音楽会行事委員は矢沢先生へ必ず提出する。"
    ],
    "date": "2026-10-23",
    "dateLabel": "10/23(金)まで"
  },
  {
    "id": "math-print2-first-oct26",
    "cat": "hw",
    "title": "授業プリント(2)：未提出者は初回提出",
    "subject": "数学",
    "thread": "数学",
    "poster": "山口朋子",
    "posted": "10/23",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/p/ODk1NDQzMTQ5OTI1",
    "details": [
      "比例反比例の授業プリント(2)。まだ一度も提出していない人は必ず月曜日に提出する。",
      "合格期限は10/28最終下校時刻。再提出を見込み、早めに出す。"
    ],
    "date": "2026-10-26",
    "dateLabel": "10/26(月) 初回提出"
  },
  {
    "id": "math-print2-pass-oct28",
    "cat": "hw",
    "title": "授業プリント(2)：合格期限",
    "subject": "数学",
    "thread": "数学",
    "poster": "山口朋子",
    "posted": "10/23",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/p/ODk1NDQzMTQ5OTI1",
    "details": [
      "比例反比例の授業プリント(2)は最終下校時刻までに合格すること。",
      "一度の再提出で合格できていない人が多いため、直前ではなく早めに提出。未提出者の初回提出は10/26。"
    ],
    "date": "2026-10-28",
    "dateLabel": "10/28(水) 最終下校まで"
  },
  {
    "id": "math-equation-scope-oct28",
    "cat": "no",
    "title": "数学：1次方程式の利用・中間テスト範囲",
    "subject": "数学",
    "thread": "数学",
    "poster": "山口朋子",
    "posted": "10/23",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/p/ODk1NDQwMDkwMDgy",
    "details": [
      "教科書p.108〜120、p.262、p.277〜279。",
      "完成ノートp.13〜33・35〜37。授業プリント(1)、もっと(1)〜(4)、学力推移調査の大問5。"
    ],
    "date": "2026-10-28",
    "dateLabel": "10/28(水)"
  },
  {
    "id": "math-proportion-scope-oct30",
    "cat": "no",
    "title": "数学：比例反比例・中間テスト範囲",
    "subject": "数学",
    "thread": "数学",
    "poster": "山口朋子",
    "posted": "10/23",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/p/ODk1NDQwMDkwMDgy",
    "details": [
      "教科書p.122〜147・154〜155、完成ノートp.48〜72。",
      "授業プリント(1)(2)、もっと(1)〜(7)、ワークシート(1)(2)。"
    ],
    "date": "2026-10-30",
    "dateLabel": "10/30(金)"
  },
  {
    "id": "math-graph-oct23",
    "cat": "no",
    "title": "グラフ用紙練習用【資料】",
    "subject": "数学",
    "thread": "数学",
    "poster": "山口朋子",
    "posted": "10/23",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODk1NDQzMjY1MjYw/details",
    "details": []
  },
  {
    "id": "math-more7-oct23",
    "cat": "no",
    "title": "比例反比例 もっと（7）【資料】",
    "subject": "数学",
    "thread": "数学",
    "poster": "山口朋子",
    "posted": "10/23",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODk1NDM3Mzg5OTI5/details",
    "details": [
      "プリントと解答PDFを配布。"
    ]
  },
  {
    "id": "math-print2-oct21",
    "cat": "no",
    "title": "比例反比例 授業プリント（2）【資料】",
    "subject": "数学",
    "thread": "数学",
    "poster": "山口朋子",
    "posted": "10/21",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODc0MTcxMDM4MjAw/details",
    "details": []
  },
  {
    "id": "english-pre-midterm-oct22",
    "cat": "no",
    "title": "プレ2学期中間テスト解答【資料】",
    "subject": "英語",
    "thread": "英語",
    "poster": "磯崎亜紀子",
    "posted": "10/22",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/m/ODkzNTExOTgxMTYw/details",
    "details": []
  },
  {
    "id": "prices-nov2026",
    "cat": "no",
    "title": "学校指定品：11/1・12/1・1/1の価格改定",
    "subject": "学校指定品",
    "thread": "82回生",
    "poster": "國澤恒久",
    "posted": "10/23",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODc0MjU4Nzc2MTE0/details",
    "details": [
      "税込価格。11/1から：水着フレンチセパレーツ上 S〜2L 5,000→5,100円、3L・4L 5,100→5,200円。",
      "11/1から：半袖シャツ3,920→4,500円、ジャージ上6,830→7,700円・下5,980→6,600円（各SS〜3L）。",
      "11/1から：クォーターパンツ140・150は3,580→3,800円、S〜3Lは3,740→4,100円。",
      "ユニチカ製ハーフパンツは在庫限りで3,740円据置（M・L・2L・3L、S在庫なし）。クォーターパンツと併用可。",
      "12/1から：体育館シューズ5,600→5,800円、グランドシューズ4,300→4,600円。",
      "2027/1/1から：スクールバッグ11,000→12,000円、通学用リュックサック12,600→13,700円。"
    ],
    "date": "2027-01-01",
    "dateLabel": "11/1・12/1・2027/1/1 段階改定"
  },
  {
    "id": "mail-QANBUdM3Il",
    "cat": "no",
    "date": "2026-10-31",
    "dateLabel": "10月中の注文は旧価格",
    "subject": "学校指定品",
    "title": "指定品価格改定：旧価格での注文・実業部営業日",
    "details": [
      "10/23終礼で桜楓会のお知らせを配布。PDFはClassroomで配信。",
      "10月中の注文は旧価格で対応。実業部営業日は10/26(月)・28(水)・30(金)、いずれも8:30〜13:30。",
      "改定は品目により11/1、12/1、2027/1/1から段階的に実施。"
    ],
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "10/23",
    "mail": true,
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/QANBUdM3Il"
  },
  {
    "id": "tt-oct26",
    "cat": "no",
    "title": "10/26〜10/30の時間割【3組】",
    "subject": "時間割",
    "thread": "82回生",
    "poster": "松本珠希",
    "posted": "10/23",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODk1NDA2NTI5Nzky/details",
    "details": [
      "月曜：数学・社会・音楽・国語・英語・体育。火曜：道徳・総合・国語・社会・数学・体育。",
      "10/28(水)〜30(金)は中間テスト。各日の科目・時刻は試験日程に掲載。"
    ],
    "date": "2026-10-30",
    "dateLabel": "10/26(月)〜10/30(金)"
  },
  {
    "id": "bball-meeting-oct30",
    "cat": "no",
    "date": "2026-10-30",
    "dateLabel": "10/30(金) 実施・時刻確認待ち",
    "subject": "部活",
    "title": "バスケ：ミーティングの実施は確認待ち",
    "details": [
      "10/24にはテスト最終日のミーティングを予定し、各学年の試験終了後に時刻を相談すると案内。",
      "10/28に10/30の練習中止が発表されたが、ミーティングの扱いは明記なし。実施・時刻・場所は確認待ち。"
    ],
    "thread": "バスケ",
    "poster": "押切衣舞",
    "posted": "10/24",
    "url": "https://classroom.google.com/c/MzI3NTczNzQyMTQy/p/ODc0MzE1MDUyNTMz"
  },
  {
    "id": "english-unit8-answers-oct26",
    "cat": "no",
    "title": "Unit 8 test 解答【資料】",
    "subject": "英語",
    "thread": "英語",
    "poster": "本木綾子",
    "posted": "10/26",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/m/ODc0MjY2NjgzNTEz/details",
    "details": []
  },
  {
    "thread": "82回生",
    "posted": "10/26",
    "id": "tt-change-oct27",
    "cat": "no",
    "title": "10/27(火) 3組の時間割変更",
    "subject": "時間割",
    "poster": "松本珠希",
    "date": "2026-10-27",
    "dateLabel": "10/27(火)",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODk1NzI3NDkzMTM0/details",
    "details": [
      "1限 国語（鈴木・HR）、2限 総合（担任・HR）、3〜4限 理科（松本・理科A）、5限 社会（馬場・HR）、6限 保健（石井・HR）。",
      "体育は別の連絡により保健へ変更。今までのプリントと教科書を持参。"
    ]
  },
  {
    "thread": "82回生",
    "posted": "10/26",
    "id": "health-class-oct27",
    "cat": "no",
    "title": "10/27の体育は保健に変更",
    "subject": "保健体育",
    "poster": "石井靖子",
    "date": "2026-10-27",
    "dateLabel": "10/27(火) 6限",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODk1NzE1MDM0MTA3",
    "details": [
      "1・2・3組対象。今までのプリントと教科書を持参。"
    ]
  },
  {
    "thread": "82回生",
    "posted": "10/26",
    "id": "science-rulers-oct26",
    "cat": "no",
    "title": "理科1：三角定規2枚・分度器を準備",
    "subject": "理科",
    "poster": "松本珠希",
    "dateLabel": "中間テスト後〜期末テスト",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODk1NzMyODE5NjQy",
    "details": [
      "中間テスト後から期末テストまで、毎授業で三角定規2枚と分度器が必要。手元にない人は購入しておく。"
    ]
  },
  {
    "thread": "82回生",
    "posted": "10/26",
    "id": "embroidery-kit-oct26",
    "cat": "hw",
    "title": "刺しゅうキット未提出者は至急提出",
    "subject": "家庭科",
    "poster": "菊池菜々世",
    "dateLabel": "至急",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODc0MjY3MTU2Nzc4",
    "details": [
      "未完成の場合も含めて提出する。11月末の授業で使用。"
    ]
  },
  {
    "thread": "82回生",
    "posted": "10/26",
    "id": "chorus-accompanist-oct26",
    "cat": "no",
    "title": "音楽会「春の声」合唱伴奏者を追加募集",
    "subject": "音楽",
    "poster": "阿佐美優子",
    "optional": true,
    "dateLabel": "今週中（10/26の連絡）",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODk1NzI3ODI3MDAy",
    "details": [
      "希望者は今週中にロイロで申し出る。"
    ]
  },
  {
    "thread": "英語",
    "posted": "10/26",
    "id": "english-class-answers-oct26",
    "cat": "no",
    "title": "10/26 英語授業の解答",
    "subject": "英語",
    "poster": "平岡裕子",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/p/ODk1NzQ4MTY1NzA5",
    "hasLink": true,
    "details": []
  },
  {
    "thread": "82回生",
    "posted": "10/27",
    "id": "kanji6-answers-oct27",
    "cat": "no",
    "title": "漢字テスト⑹の解答をロイロ資料箱に掲載",
    "subject": "国語",
    "poster": "鈴木秀一",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODk1OTg5MDUxODQ0",
    "details": [
      "先週実施したテストの解答を、ロイロノートの各クラス専用資料箱で確認する。"
    ]
  },
  {
    "thread": "82回生",
    "posted": "10/27",
    "id": "violin-audition-nov9",
    "cat": "no",
    "title": "音楽会バイオリン曲・ピアノ伴奏オーディション【奇数クラス】",
    "subject": "音楽",
    "poster": "矢沢まどか",
    "date": "2026-11-09",
    "dateLabel": "11/9 12:40〜（曜日要確認）",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODk1OTY4NTM2Mjgz",
    "details": [
      "1年生奇数クラスの受験者は11/9 12:40〜、声楽器楽室前に集合。",
      "近隣のピアノが空いていれば音出しをして待ってよい。",
      "原文は「11月9日(金)」だが、2026年11月9日は月曜日。日付と曜日の不一致は先生に確認。"
    ],
    "note": "原文の日付・曜日が不一致（11/9は月曜日）。"
  },
  {
    "thread": "82回生",
    "posted": "10/27",
    "id": "music-score-resubmit-oct27",
    "cat": "hw",
    "title": "楽譜：Check印がない人は次の授業で再提出",
    "subject": "音楽",
    "poster": "阿佐美優子",
    "dateLabel": "次の音楽の授業",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODk2MDE3ODQ0MTYx",
    "details": [
      "1・2・3組対象。表紙右下のCheck印を確認する。",
      "印がない人はマスキングテープや記名を含めて整え、次の授業で再提出。"
    ]
  },
  {
    "thread": "地理",
    "posted": "10/27",
    "id": "geography20-oct27",
    "cat": "no",
    "title": "地理No.20「ヨーロッパ州」・おさらい問題",
    "subject": "社会",
    "poster": "宮崎可奈子",
    "url": "https://classroom.google.com/c/ODY1MzU4MzYwMzcx/m/ODk2MDAxNjU5Mjk4/details",
    "details": [
      "最後の授業部分のおさらい問題も配信。授業の復習をしてテストに備える。"
    ]
  },
  {
    "thread": "",
    "posted": "10/27",
    "id": "mail-QARCwDjIrS",
    "cat": "no",
    "title": "9月の学力推移調査：結果表・数学答案を配布",
    "subject": "学校",
    "poster": "保護者向けメール",
    "mail": true,
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/QARCwDjIrS",
    "details": [
      "10/27の終礼で結果表と数学の答案を配布。家庭でも振り返りの時間を取る。",
      "学校で実施しなかった教科の問題冊子（9月配布）も家庭で活用する。次回は1月実施予定。"
    ]
  },
  {
    "thread": "82回生",
    "posted": "10/28",
    "id": "study-commons-oct28-29",
    "cat": "no",
    "title": "10/28 スタディコモンズの場所・時間変更",
    "date": "2026-10-28",
    "dateLabel": "10/28(水) 13:00〜16:00",
    "subject": "学習",
    "poster": "國澤恒久",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODk2MjQxNjY1NzM3",
    "details": [
      "10/28はオープンスペースが使用できないためLL・401・402で実施。",
      "10/29は新しい連絡により403・404・405へ変更。"
    ]
  },
  {
    "thread": "82回生",
    "posted": "10/28",
    "id": "momiji-preview-oct30",
    "cat": "no",
    "title": "10/30 もみじ祭内覧：最終下校16時",
    "date": "2026-10-30",
    "dateLabel": "10/30(金) 最終下校16:00",
    "subject": "学校",
    "optional": true,
    "poster": "山口朋子",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODk1NzMyMDg0MzA4",
    "details": [
      "10/30(金)は終礼後〜16:00に見学可能。保護者に必ず伝え、貴重品・荷物をすべて持参して16時までに下校。",
      "内覧日の大ホール：Voice Actors 9:15〜9:52、BRASS BAND 9:53〜10:21、chorus♪ 10:22〜10:51、String Orchestra 10:52〜11:24、Ms.Freesia 11:25〜11:52。",
      "Baton twirling 11:53〜12:39、MUSICAL 12:40〜13:45、OH*TAKARAZUKA 13:46〜14:46、Magical Dream 14:47〜15:30。中学生の見学は終礼後から。"
    ],
    "hasLink": true
  },
  {
    "id": "bball-cancel-oct30",
    "cat": "no",
    "date": "2026-10-30",
    "dateLabel": "10/30(金) 練習中止",
    "subject": "部活",
    "title": "バスケ：10/30の練習中止",
    "details": [
      "もみじ祭の内覧等で体育館が使用できないため、10/30の練習はなし。",
      "月間表の昼食持参・15:30までの練習予定は取り消し。ミーティングについては別途確認待ち。"
    ],
    "thread": "バスケ",
    "poster": "山本昂宏",
    "posted": "10/28",
    "url": "https://classroom.google.com/c/MzI3NTczNzQyMTQy/p/ODk2MjYyOTU5OTIz"
  },
  {
    "cat": "no",
    "subject": "学校",
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "10/29",
    "mail": true,
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/QASJua4MW7",
    "mailUrl": "https://object-storage.c3j1.conoha.io/v1/AUTH_adf35b4d7a594dd89ae73ed67cfc1169/jwu-j-net/QASJuZBf0n",
    "id": "mail-QASJua4MW7",
    "title": "中学PTAだより第2号：実行委員会報告",
    "details": [
      "10/24開催の第2回PTA実行委員会の報告。各部の活動、学校・各学年からの報告を掲載。",
      "中高一貫教育の制度変更について、PTAから保護者の意見を伝え、情報発信の促進と生徒・保護者との対話機会を要請。",
      "Study Commonsは平常時30〜50人、テスト前は100人超が利用。配置等を改善中。個人欠席時の授業補完は各教科担当へ相談。",
      "2027/1/16の能楽鑑賞会（国立能楽堂）を準備中。生徒向け事前講義を予定。",
      "PTA役員の今後の予定：11/24私立中高振興大会、12/1 PTA連合会。2027/2/27 PTA委員総会、3/1各部会計報告、3/13決算・予算打合せ。"
    ]
  },
  {
    "cat": "no",
    "subject": "学校",
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "10/29",
    "mail": true,
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/QASJua4MW7",
    "mailUrl": "https://object-storage.c3j1.conoha.io/v1/AUTH_adf35b4d7a594dd89ae73ed67cfc1169/jwu-j-net/QASJuZBf0n",
    "id": "class-observation-nov5-11",
    "title": "授業参観週間",
    "date": "2026-11-11",
    "dateLabel": "11/5(木)〜11/11(水)",
    "details": [
      "授業中の様子・勉強の進め方・授業の聞き方を参観し、家庭でも話し合う。",
      "参観後はGoogleフォームのアンケートで感想を寄せる。具体的な受付時間は本資料に記載なし。"
    ]
  },
  {
    "cat": "no",
    "subject": "学校",
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "10/29",
    "mail": true,
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/QASJua4MW7",
    "mailUrl": "https://object-storage.c3j1.conoha.io/v1/AUTH_adf35b4d7a594dd89ae73ed67cfc1169/jwu-j-net/QASJuZBf0n",
    "id": "winter-school-hours-nov2026",
    "title": "テスト明けの11月から冬時間授業",
    "dateLabel": "テスト明け・11月から",
    "details": [
      "11月から冬時間の授業時間割になる。日暮れが早くなるため、下校時に注意。",
      "具体的な授業・下校時刻は本資料に記載なし。時刻の確定案内を待って時間割へ反映する。"
    ]
  },
  {
    "id": "study-commons-oct29",
    "cat": "no",
    "date": "2026-10-29",
    "dateLabel": "10/29(木) 13:00〜16:00",
    "title": "本日のスタディコモンズ：403・404・405へ変更",
    "subject": "学習",
    "thread": "82回生",
    "poster": "國澤恒久",
    "posted": "10/29",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODk2NDc0NTUyMzIw",
    "details": [
      "403はサイレント、404・405はコラボ。人数によって変更あり。",
      "昼食は13:00までに済ませる。食堂利用は最終下校時刻まで。",
      "最終下校時刻以降、1年生は406で待機。最終下校時刻自体は本投稿に記載なし。"
    ]
  },
  {
    "id": "math-no5-oct29",
    "cat": "hw",
    "date": "2026-10-29",
    "dateLabel": "10/29(木) 20:00 合格期限",
    "title": "比例反比例抜粋No.5：20時までに合格",
    "subject": "数学",
    "thread": "82回生",
    "poster": "山口朋子",
    "posted": "10/29",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODk2NDgxNjI0NDM0",
    "details": [
      "再提出が一度で合格にならない場合もあるため、早めに提出する。",
      "期限までに終わらなかった人は10/30のテスト後に残って取り組む。終了時刻・教室は未発表。"
    ]
  },
  {
    "id": "english-work-oct30",
    "cat": "hw",
    "date": "2026-10-30",
    "dateLabel": "10/30(金) 放課後",
    "title": "英語新中問：未提出・再提出者は学校で完了して下校",
    "subject": "英語",
    "thread": "82回生",
    "poster": "本木綾子",
    "posted": "10/29",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODk2NTIwOTgzMzA1",
    "details": [
      "未提出・再提出のものがある人は10/30放課後に学校で終わらせてから帰る。",
      "新中問題集を持参する。教室・終了時刻は未発表。"
    ]
  },
  {
    "cat": "no",
    "posted": "10/30",
    "id": "math-tools-nov2026",
    "title": "数学：コンパス・分度器機能のない定規を準備",
    "dateLabel": "11月第2週頃から",
    "subject": "数学",
    "thread": "数学",
    "poster": "森本奈央",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/p/ODg3NTAwMDg0NDg1",
    "details": [
      "作図の授業・自宅の宿題でコンパスを毎回使用。学校用・自宅用を用意するか、常に鞄へ。",
      "鉛筆をこまめに削り、コンパスのネジを締めて半径が動かないようにする。シャープペン型も可。",
      "テスト用定規は直線だけを引けるもの。分度器機能付きは禁止。期末テストでコンパスの貸出はない。"
    ]
  },
  {
    "cat": "no",
    "posted": "10/30",
    "id": "kokugo-debate-nov2026",
    "title": "来週の国語W：マイクロディベート",
    "dateLabel": "来週の国語W・開始5分前着席",
    "subject": "国語",
    "thread": "82回生",
    "poster": "西出春菜",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODk2MDEwMTY1ODIy",
    "details": [
      "教室移動をせず待機する。机の移動等の準備があるため、開始5分前に着席。",
      "具体的な曜日・時限は次週時間割の確認後に反映。"
    ]
  },
  {
    "cat": "no",
    "posted": "10/30",
    "id": "bsched-nov-dec",
    "title": "バスケ11〜12月予定表・冬休み参考予定",
    "date": "2027-01-07",
    "dateLabel": "11月〜1/7（冬休みは参考予定）",
    "subject": "部活",
    "thread": "バスケ",
    "poster": "山本昂宏",
    "url": "https://classroom.google.com/c/MzI3NTczNzQyMTQy/m/ODk2NzI0NzQ1OTI4/details",
    "details": [
      "11/14は午前8:30〜12:00・第2体育館へ変更。11/8は午前練習試合（未定）、午後自主練も未確定。11/21は午前か午後か未確定。",
      "12/4はテスト後の午後練習・昼食持参。12/5は終日練習。12/11は「練習なし？」で未確定。",
      "冬休み活動は参考予定。スキー教室期間12/21〜24は練習できないため、それ以外に集中。",
      "12/19午前、12/25・28・29と1/4〜7は終日練習の参考予定。12/28午前はバレー部合同練習。"
    ]
  }
]
};
