/* ===== ここだけ毎回貼り替える ===== */
/* updateISO  : New判定・相対日付の基準日 (YYYY-MM-DD)        */
/* updateTime : 更新した時刻 (HH:MM)。曜日は自動で付きます      */
/* timetable  : 週の時間割（PDFから3組のみ抽出）。週次で差し替え */
/* items      : 各行のデータ。Claudeが返す塊をそのまま貼る     */

window.CLASSROOM_DATA = {
  fetchCheckedISO: "2026-10-16",
  fetchCheckedTime: "22:42",
  updateISO: "2026-10-16",
  updateTime: "22:42",
  timetable: {
  "label": "10/19(月)〜10/23(金)",
  "days": [
    {
      "n": "月",
      "md": "10/19",
      "iso": "2026-10-19"
    },
    {
      "n": "火",
      "md": "10/20",
      "iso": "2026-10-20"
    },
    {
      "n": "水",
      "md": "10/21",
      "iso": "2026-10-21"
    },
    {
      "n": "木",
      "md": "10/22",
      "iso": "2026-10-22"
    },
    {
      "n": "金",
      "md": "10/23",
      "iso": "2026-10-23"
    }
  ],
  "rows": [
    [
      {
        "s": "数",
        "t": "森本",
        "r": "HR",
        "mk": "ワークシート(2)",
        "ref": "math-worksheet2-oct19"
      },
      {
        "s": "道徳",
        "t": "担任",
        "r": "HR"
      },
      {
        "s": "英",
        "t": "本木",
        "r": "HR"
      },
      {
        "s": "国",
        "t": "鈴木",
        "r": "HR"
      },
      {
        "s": "英",
        "t": "コリンズ・マオ",
        "r": "LL/400"
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
        "s": "理",
        "t": "大越・小山",
        "r": "理科A/B"
      },
      {
        "s": "体",
        "t": "石井",
        "r": "HR"
      },
      {
        "s": "音",
        "t": "矢沢",
        "r": "声楽器楽"
      }
    ],
    [
      {
        "s": "音",
        "t": "阿佐美",
        "r": "声楽"
      },
      {
        "s": "国・漢字テスト",
        "t": "鈴木",
        "r": "HR",
        "mk": "漢字テスト",
        "ref": "kanji-test-oct20"
      },
      {
        "s": "数",
        "t": "山口",
        "r": "HR"
      },
      {
        "s": "英",
        "t": "磯崎・吉野",
        "r": "HR/401"
      },
      {
        "s": "数",
        "t": "森本・山口",
        "r": "HR/数メ"
      }
    ],
    [
      {
        "s": "国",
        "t": "秋山・西出",
        "r": "HR/405"
      },
      {
        "s": "英",
        "t": "平岡",
        "r": "HR"
      },
      {
        "s": "音",
        "t": "矢沢",
        "r": "声楽器楽"
      },
      {
        "s": "数",
        "t": "森本",
        "r": "HR"
      },
      {
        "s": "社",
        "t": "平野",
        "r": "HR"
      }
    ],
    [
      {
        "s": "英",
        "t": "平岡・本木",
        "r": "HR/405"
      },
      {
        "s": "社",
        "t": "馬場",
        "r": "HR"
      },
      {
        "s": "美",
        "t": "芝",
        "r": "美術室",
        "rs": 2
      },
      {
        "s": "理",
        "t": "松本",
        "r": "理科A",
        "rs": 2
      },
      {
        "s": "家",
        "t": "菊池",
        "r": "HR",
        "rs": 2
      }
    ],
    [
      {
        "s": "体",
        "t": "佐々木・齋藤",
        "r": "プール"
      },
      {
        "s": "体",
        "t": "新谷",
        "r": "二体"
      },
      null,
      null,
      null
    ]
  ]
},
  basketball: {
  "start": "2026-09-01",
  "end": "2026-11-30",
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
      "title": "練習",
      "time": "",
      "place": "第2体育館",
      "detail": "",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
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
      "title": "新人戦1回戦",
      "time": "時間未定",
      "place": "場所未定",
      "detail": "1・2年生の大会。日程・参加条件は後続の連絡も確認。",
      "source": "月間予定表「2026年9-10月.pdf」"
    },
    "2026-10-25": {
      "kind": "match",
      "title": "新人戦2回戦",
      "time": "時間未定",
      "place": "場所未定",
      "detail": "1・2年生の大会。日程・参加条件は後続の連絡も確認。",
      "source": "月間予定表「2026年9-10月.pdf」"
    },
    "2026-10-27": {
      "kind": "school",
      "title": "中間テスト",
      "time": "",
      "place": "",
      "detail": "練習については記載なし。",
      "source": "月間予定表「2026年9-10月.pdf」"
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
      "kind": "practice",
      "title": "テスト後に練習",
      "time": "15:30 最終下校",
      "place": "第3体育館",
      "detail": "昼食持参。中間テスト後に練習あり。",
      "source": "月間予定表「2026年9-10月.pdf」"
    },
    "2026-11-02": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "",
      "detail": "",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-11-04": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "",
      "detail": "",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-11-06": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "",
      "detail": "",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-11-09": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "",
      "detail": "",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-11-11": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "",
      "detail": "",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-11-13": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "",
      "detail": "",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-11-16": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "",
      "detail": "",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-11-20": {
      "kind": "practice",
      "title": "練習",
      "time": "",
      "place": "",
      "detail": "",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-11-03": {
      "kind": "morning",
      "title": "午前練習・午後自主練可",
      "time": "8:30〜12:00",
      "place": "第3体育館",
      "detail": "文化の日。午後は自主練可。",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-11-08": {
      "kind": "morning",
      "title": "午前練習",
      "time": "8:30〜12:00",
      "place": "第2・3体育館",
      "detail": "",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-11-14": {
      "kind": "practice",
      "title": "午後練習",
      "time": "13:00〜16:00",
      "place": "第3体育館",
      "detail": "午前は入試体験会。",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-11-18": {
      "kind": "school",
      "title": "1・2年 家庭学習日",
      "time": "",
      "place": "",
      "detail": "3年生は高校面接。",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-11-21": {
      "kind": "uncertain",
      "title": "午前練習？（午後の可能性）",
      "time": "",
      "place": "",
      "detail": "午前なら8:30〜12:00。午後へ変更の可能性があり、時間帯は未確定。",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-11-23": {
      "kind": "school",
      "title": "勤労感謝の日",
      "time": "",
      "place": "",
      "detail": "",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-11-24": {
      "kind": "school",
      "title": "テスト1週間前",
      "time": "",
      "place": "",
      "detail": "",
      "source": "月間予定表「2026年10-11月.pdf」（10/1配信）"
    },
    "2026-10-15": {
      "kind": "off",
      "title": "学校閉鎖・部活動なし",
      "time": "",
      "place": "",
      "detail": "学校閉鎖のため登校・通常練習なし。健康な生徒も外出を避け家庭学習。学校からの10/15連絡を月間予定より優先。",
      "source": "10/15 保護者メール「学校閉鎖のお知らせ」"
    }
  }
},
  items: [
  {
    "id": "lost-bottles-oct7",
    "cat": "no",
    "date": "2026-10-09",
    "dateLabel": "十月祭前に引き取り",
    "subject": "生活",
    "title": "水筒・弁当箱の落とし物",
    "details": [
      "2階自治会室前の水筒・弁当箱を十月祭前に引き取る。持ち物への記名も忘れずに。"
    ],
    "thread": "82回生",
    "poster": "久保文香",
    "posted": "10/7",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODg5NTUxNTg0NzAz",
    "hasLink": true
  },
  {
    "id": "charity-exchange-oct7",
    "cat": "no",
    "date": "2026-10-09",
    "dateLabel": "10/8・9 自治会室前",
    "subject": "行事",
    "title": "マカロンふせん：在校生の購入・引き換え",
    "details": [
      "在校生の購入期間は準備期間のみ。必ず10/8・9のうちに引き換える。",
      "10/8 13:30〜14:30、10/9 11:30〜12:30。場所はいずれも自治会室前。"
    ],
    "thread": "82回生",
    "poster": "松本珠希",
    "posted": "10/7",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODI2NTUxMTA3NjQ4"
  },
  {
    "id": "mail-Q9ADG4EHcf",
    "cat": "no",
    "dateLabel": "10/10 (土) 12:30〜14:00",
    "subject": "全体",
    "title": "標準服譲り渡しのお知らせ",
    "details": [
      "4階400教室。事前申込みなし・保護者1名のみ入場可",
      "保護者証（忘れると入場不可）、手提げ袋、現金（千円札・小銭）を持参。事前にサイズを確認",
      "整理券40枚を11:00〜11:30に400教室入口で配布（予定数で終了）。入場順は抽選",
      "12:45からフリー入場（12:40から整列可）。売り切れ次第終了",
      "子ども1人につき制服（上着・スカート）1点、その他の物は1点まで。返品・交換不可"
    ],
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "9/10",
    "mail": true,
    "mailUrl": "https://object-storage.tyo2.conoha.io/v1/nc_8bd5c69d2f434c1eb45a209a9092bdeb/y-line-jwu-j-net/Q9ADG3Ay18",
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/Q9ADG4EHcf",
    "date": "2026-10-10",
    "optional": true
  },
  {
    "id": "tt7",
    "cat": "no",
    "date": "2026-10-10",
    "dateLabel": "10/5 (月)〜10/10 (土)",
    "subject": "全体",
    "title": "10/5〜 時間割表【資料】",
    "details": [
      "3組の時間割を掲載。10/7(水)5・6限は美術",
      "10/8(木)・9(金)は十月祭準備、10/10(土)は十月祭1日目",
      "10/8は8:50全体朝礼、10/9・10は団体ごとに朝礼"
    ],
    "thread": "82回生",
    "poster": "松本珠希",
    "posted": "10/2",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODg4NjUwMjM2MzU2/details"
  },
  {
    "id": "mail-QA3IUuaRm3",
    "cat": "no",
    "date": "2026-10-10",
    "dateLabel": "10/10 (土) 20:30〜21:00",
    "subject": "お知らせ",
    "title": "NHK Eテレ「どえらい大学。」 本学特集に関するご連絡",
    "details": [
      "NHK Eテレ「どえらい大学。」で日本女子大学を30分間特集。",
      "自主ゼミ、メダカの色覚実験、建材開発、食の官能評価、物理サークル等を紹介。"
    ],
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "10/5",
    "mail": true,
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/QA3IUuaRm3",
    "mailUrl": "https://object-storage.tyo2.conoha.io/v1/nc_8bd5c69d2f434c1eb45a209a9092bdeb/y-line-jwu-j-net/QA3IUuOUJN"
  },
  {
    "id": "forum-oct8",
    "cat": "no",
    "date": "2026-10-11",
    "dateLabel": "10/10・11 発表",
    "subject": "行事",
    "title": "十月祭：もみじフォーラム発表順",
    "details": [
      "学年発表者は添付の発表順を確認。1日目は国語→英語→社会→国語、2日目は英語→社会→英語→国語。"
    ],
    "thread": "82回生",
    "poster": "大越佳子",
    "posted": "10/8",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODI2NTg3MzE2OTE2",
    "hasLink": true
  },
  {
    "id": "bball-times-oct8",
    "cat": "no",
    "date": "2026-10-11",
    "dateLabel": "10/10・11",
    "subject": "部活",
    "title": "十月祭バスケ：修正版タイムスケジュール",
    "details": [
      "10/8配信の修正版。10/10は9:45〜12:15、1年生はAコート10:00・10:15の7分試合。3年生試合のTO担当も確認。",
      "10/11は13:00〜15:30。1年生はBコート13:00の6分試合、Aコート13:35の8分試合（サレジアン戦）。"
    ],
    "thread": "バスケ",
    "poster": "山本昂宏",
    "posted": "10/8",
    "url": "https://classroom.google.com/c/MzI3NTczNzQyMTQy/p/ODg5ODY0MDk2OTUy",
    "hasLink": true
  },
  {
    "id": "festival-belongings-oct9",
    "cat": "no",
    "date": "2026-10-11",
    "dateLabel": "十月祭期間中",
    "subject": "学校",
    "title": "十月祭中の持ち物管理・落とし物の届け方",
    "details": [
      "普段以上に自分の持ち物をしっかり管理する。",
      "拾った物は校務センターへ届ける。拾った日時・場所を落とし物カードに記入し、写真のトレイに入れる。"
    ],
    "thread": "82回生",
    "poster": "西出春菜",
    "posted": "10/9",
    "hasLink": true,
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkwMTQxNTYyODIx"
  },
  {
    "id": "mail-QA9FKbX815",
    "cat": "no",
    "date": "2026-10-11",
    "dateLabel": "10/10・11 十月祭",
    "subject": "学校",
    "title": "十月祭にご来場の皆様へ",
    "details": [
      "保護者証を忘れずに持参。",
      "受付でパンフレットは配布されないため、事前に配布されたものを持参。",
      "開場前のあまりに早い時間帯には来校しない。"
    ],
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "10/9",
    "mail": true,
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/QA9FKbX815"
  },
  {
    "id": "soumu-festival-duty-oct9",
    "cat": "no",
    "date": "2026-10-11",
    "dateLabel": "十月祭期間中",
    "subject": "学校",
    "title": "総務：十月祭立ち番の仕事内容",
    "details": [
      "立ち番の仕事内容を資料で事前配信。資料は部屋にも設置される。"
    ],
    "thread": "総務",
    "poster": "山本昂宏",
    "posted": "10/9",
    "hasLink": true,
    "url": "https://classroom.google.com/c/ODYxMzQ0NDY1OTgx/p/ODkwMTM5NTQyMjE0"
  },
  {
    "id": "mail-Q988Sdo1hM",
    "cat": "no",
    "date": "2026-10-12",
    "dateLabel": "10/8〜10/12（一般公開10/10・11）",
    "subject": "全体",
    "title": "十月祭についてのお知らせ",
    "details": [
      "10/8・9は準備。最終下校は8日17:00、9日16:30",
      "一般公開は10/10(土)・11(日) 9:30〜15:30。生徒は8:50出欠確認・16:30最終下校",
      "10/12(月)は片付け・後夜祭。10:00までに片付けを終え、10:15朝礼。1・2年生の最終下校は13:30",
      "5日間とも昼食が必要。10/10・11は生徒の食堂利用不可のため弁当持参",
      "保護者証・配布プログラム・スリッパ・靴袋を持参。保護者と家族は保護者証で入校、一般客は予約またはチケット制",
      "撮影時は保護者証を着用。作品・掲示物の撮影不可。車での来校不可"
    ],
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "9/8",
    "mail": true,
    "mailUrl": "https://object-storage.tyo2.conoha.io/v1/nc_8bd5c69d2f434c1eb45a209a9092bdeb/y-line-jwu-j-net/Q988Schtyl",
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/Q988Sdo1hM"
  },
  {
    "id": "bball-festival-flow-sep29",
    "cat": "no",
    "date": "2026-10-12",
    "dateLabel": "10/8〜10/12【暫定・要確認】",
    "subject": "部活",
    "title": "十月祭の流れ（参考資料）",
    "details": [
      "昨年度版を基にした参考資料。正式版は後日配布、控室は未定",
      "仮予定：10/8〜11は8:40集合。10/8は9:05練習開始、10/9は8:50練習開始",
      "仮予定：10/10午前は部内戦、10/11午後は招待試合（1年生も参加）",
      "仮予定：10/12は9:50まで自主練可、13:30最終下校。朝礼と後夜祭がともに10:15表記のため要確認",
      "10/8〜11はiPadを持参しない。係・委員会活動を優先"
    ],
    "thread": "バスケ",
    "poster": "山本昂宏",
    "posted": "9/29",
    "url": "https://classroom.google.com/c/MzI3NTczNzQyMTQy/p/ODI2NDkyNjUyODI0",
    "hasLink": true
  },
  {
    "id": "library-festival-oct7",
    "cat": "no",
    "date": "2026-10-12",
    "dateLabel": "片付けの日まで",
    "subject": "図書",
    "title": "十月祭中の図書室利用制限",
    "details": [
      "委員会展示のため本棚を封鎖。片付けの日まで自習等はできない。",
      "貸出利用は10/8朝8:45まで。"
    ],
    "thread": "82回生",
    "poster": "久保文香",
    "posted": "10/7",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODg5NTk1NjgwNDQ4"
  },
  {
    "id": "bball-flow-oct7",
    "cat": "no",
    "date": "2026-10-12",
    "dateLabel": "10/8〜12",
    "subject": "部活",
    "title": "十月祭バスケ：5日間の集合・活動予定",
    "details": [
      "控室は理科A。朝に貴重品・携帯を回収し押切先生へ。iPadは持参しない。係・委員会活動を優先。",
      "10/8・9は8:30控室集合（練習着へ着替え済み）。10/9は14:00練習終了、14:30前夜祭、16:30最終下校。",
      "10/10は7:55控室集合、8:10集合写真。3年生欠席時以外は撮り直しなし。12:30昼食、16:00控室集合、16:30最終下校。",
      "10/11は8:40控室集合、11:45昼食、12:15第一体育館アップ、12:30第三体育館準備。15:30片付け、16:00控室、16:20伝達・時間差下校。",
      "10/12は9:50まで自主練可。荷物は朝は体育館へ。11:25昼食（HR）、12:10学活・終礼、1年生は13:30最終下校。",
      "10/12の全体朝礼と後夜祭は原資料でともに10:15と記載。開始時刻の詳細は要確認。試合時刻は10/8修正版を優先。"
    ],
    "thread": "バスケ",
    "poster": "山本昂宏",
    "posted": "10/7",
    "url": "https://classroom.google.com/c/MzI3NTczNzQyMTQy/p/ODczODc3Mjg1Nzk0",
    "hasLink": true
  },
  {
    "id": "corner-cleanup-oct12",
    "cat": "no",
    "date": "2026-10-12",
    "dateLabel": "10/12 (月) 9:30",
    "subject": "学校",
    "title": "1年生コーナー担当者：片付けの集合",
    "details": [
      "残りの片付けのため、9:30に405教室へ集合。"
    ],
    "thread": "82回生",
    "poster": "大越佳子",
    "posted": "10/11",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODczOTI2NDU0NzA2"
  },
  {
    "id": "cleaning-oct12",
    "title": "生活部：清掃・ゴミ箱の確認",
    "date": "2026-10-12",
    "dateLabel": "10/12",
    "cat": "no",
    "details": [
      "通常の清掃はなし。汚れが目立つ場合は担任の判断で清掃。",
      "本日はゴミ箱使用禁止。捨ててしまった人は袋を交換し、指定の場所へゴミを捨てに行く。",
      "生活部部長は帰る前にゴミ箱を確認し、ゴミがあれば処分。"
    ],
    "subject": "学校",
    "thread": "82回生",
    "poster": "西出春菜",
    "posted": "10/12",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODczOTMxMTg3MjQ1"
  },
  {
    "id": "charity-final-oct12",
    "title": "マカロン付箋の最終引き換え",
    "date": "2026-10-12",
    "dateLabel": "10/12 最終下校まで",
    "cat": "no",
    "details": [
      "引き換え忘れは終礼後が最後の機会。昼休みまたは校務センターで松本先生へ。",
      "最終下校時刻までに申し出がない場合は販売なし。"
    ],
    "subject": "学校",
    "thread": "82回生",
    "poster": "松本珠希",
    "posted": "10/12",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkwNDcxMjgyMDYz"
  },
  {
    "id": "festival-survey-oct12",
    "title": "十月祭アンケート",
    "date": "2026-10-12",
    "dateLabel": "10/12 学活",
    "cat": "hw",
    "details": [
      "本日の学活で回答。十月祭委員は回答するよう呼びかける。"
    ],
    "subject": "学校",
    "thread": "82回生",
    "poster": "山口朋子",
    "posted": "10/12",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkwNDEzMzQ5NDMy",
    "hasLink": true
  },
  {
    "id": "lost-display-oct12",
    "title": "落とし物・傘の展示と引き取り",
    "date": "2026-10-12",
    "dateLabel": "10/12 なるべく当日中",
    "cat": "no",
    "details": [
      "昨日までの落とし物と傘を生徒玄関に展示。なるべく当日中に引き取る。"
    ],
    "subject": "学校",
    "thread": "82回生",
    "poster": "西出春菜",
    "posted": "10/12",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkwNDY0NjIxNDA0"
  },
  {
    "id": "math-proportion-test-oct15",
    "cat": "no",
    "dateLabel": "10/15 実施済みの案内",
    "subject": "数学",
    "title": "比例・反比例 小テスト【実施済みの案内あり】",
    "details": [
      "定規を持参。範囲：教科書p.122〜142、授業プリント(1)、もっとプリント(1)〜(5)、完成ノート1〜30番。",
      "10/15の数学連絡では「本日実施した」と案内。欠席で未受験の人は10/19終礼清掃後に404で受験。"
    ],
    "thread": "数学",
    "poster": "山口朋子",
    "posted": "10/7",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/p/ODczODQ2NDk2Njkx",
    "date": "2026-10-15"
  },
  {
    "cat": "no",
    "subject": "学校",
    "thread": "82回生",
    "posted": "10/15",
    "id": "cafeteria-refund-oct15",
    "date": "2026-10-15",
    "dateLabel": "10/15 (木)・返金は後日",
    "title": "本日の食堂：食券は後日返金",
    "details": [
      "購入済みの食券は後日返金が可能。",
      "本日は返金対応なし。速やかに下校する。"
    ],
    "poster": "阿佐美優子",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkyMjc3MjI2ODcz"
  },
  {
    "id": "kokugo-take-home-oct15",
    "cat": "no",
    "date": "2026-10-15",
    "dateLabel": "10/15 (木)",
    "subject": "国語",
    "title": "『銀河鉄道の夜』の教材を持ち帰る",
    "details": [
      "文庫本と授業プリントを持ち帰っておく。"
    ],
    "thread": "82回生",
    "poster": "鈴木秀一",
    "posted": "10/15",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODczOTk0MjIwNzIx"
  },
  {
    "id": "oc-my-club-oct15",
    "title": "My Club Writing：未完了者は提出",
    "date": "2026-10-15",
    "dateLabel": "10/15 (木) 中",
    "details": [
      "未完成の人は今日中に完成させ、ロイロノートで提出。",
      "欠席・紛失した人は「授業内共有」フォルダーの「Zoom 授業 My Club Writing」を使用。"
    ],
    "cat": "hw",
    "posted": "10/15",
    "subject": "英語",
    "thread": "英語",
    "poster": "Matthew Collins",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/p/ODcwMjA3Njk4Njcx"
  },
  {
    "id": "committees-survey-oct16",
    "title": "新聞・保健・放送・図書委員：十月祭振り返り",
    "date": "2026-10-16",
    "dateLabel": "10/16 (金) まで",
    "cat": "hw",
    "details": [
      "準備・立ち番・片付けの仕事についてフォームに回答。"
    ],
    "subject": "学校",
    "thread": "82回生",
    "poster": "久保文香",
    "posted": "10/12",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODI2NjQ2MzQzOTQ0",
    "hasLink": true
  },
  {
    "id": "online-oct16",
    "title": "10/16 オンライン授業・英語劇公演中止",
    "date": "2026-10-16",
    "dateLabel": "10/16 (金) 8:35 Zoom朝礼",
    "details": [
      "朝礼8:35〜8:45。3組は1限 英語（本木）、2限 国語（秦野）、3限 国語（鈴木）、4限 英会話（コリンズ・マオ）、5限 社会（宮崎）、6限 家庭科（菊池）。",
      "1限8:50〜9:40、2限9:50〜10:40、3限10:50〜11:40、4限11:50〜12:40。昼休み12:40〜13:30。5限13:30〜14:20、6限14:30〜15:20。",
      "英語劇公演は中止。来校予定の保護者にも伝える。",
      "Zoomの接続情報は添付PDFに記載。"
    ],
    "cat": "no",
    "subject": "学校",
    "thread": "82回生",
    "poster": "松本珠希",
    "posted": "10/15",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODc0MDAxMDczMzE3",
    "hasLink": true
  },
  {
    "id": "accompanist-apply-oct16",
    "title": "音楽会：合唱伴奏希望の申出",
    "date": "2026-10-16",
    "dateLabel": "10/16 (金) まで【希望者】",
    "details": [
      "伴奏希望者はロイロで申し出る。",
      "オーディションは11/4(水)予定。時間は後日連絡。"
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
    "id": "math-excerpt-oct16",
    "title": "比例反比例 抜粋No.1–2：合格締切延長",
    "date": "2026-10-16",
    "dateLabel": "10/16 (金) 20:00まで",
    "details": [
      "合格締切を2日延長。今回のみの特別措置。",
      "元の締切に間に合わなかった人も提出する。"
    ],
    "cat": "hw",
    "subject": "数学",
    "thread": "数学",
    "poster": "森本奈央",
    "posted": "10/15",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/p/ODkyMzA3Mzc5NzM3"
  },
  {
    "id": "oc-heart-game-oct16",
    "title": "英会話：The Heart Game を準備",
    "date": "2026-10-16",
    "dateLabel": "10/16 (金) 4限オンライン",
    "details": [
      "The Heart Game のプリントを授業に用意。持っていない人はロイロの「授業内共有」フォルダーのコピーを使用。"
    ],
    "cat": "no",
    "posted": "10/15",
    "subject": "英語",
    "thread": "英語",
    "poster": "Matthew Collins",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/p/ODcwMjA3Njk4Njcx"
  },
  {
    "id": "tt8",
    "cat": "no",
    "date": "2026-10-17",
    "dateLabel": "10/12〜17（15〜17学校閉鎖）",
    "subject": "時間割",
    "title": "10/12〜 時間割表【資料】",
    "details": [
      "10/12十月祭片付け、10/13・14振替休日。10/15〜17学校閉鎖。",
      "10/16は10/15配信のオンライン時間割に変更。8:35からZoom朝礼。英語劇公演は中止。"
    ],
    "thread": "82回生",
    "poster": "松本珠希",
    "posted": "10/7",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODg5MDQwNzYwMDcx/details"
  },
  {
    "id": "mail-QAF95oyOZz",
    "cat": "no",
    "subject": "学校",
    "date": "2026-10-17",
    "dateLabel": "10/15 (木)〜17 (土)",
    "title": "学校閉鎖のお知らせ",
    "details": [
      "全学年で発熱・風邪症状の生徒が複数いるため、10/15は朝礼後に下校。10/15〜17は学校閉鎖。",
      "17日までは健康な生徒も外出を避け、家庭学習を行う。",
      "10/16の家庭学習（オンライン授業を含む）は10/15午後以降にClassroomまたはロイロで連絡予定。",
      "インフルエンザ等に感染した生徒は登校時に出校許可書を持参。保護者による記入で可。"
    ],
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "10/15",
    "mail": true,
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/QAF95oyOZz",
    "note": "追記：10/16オンライン時間割配信済み。8:35 Zoom朝礼、英語劇公演は中止。"
  },
  {
    "id": "bball-cancel-oct17",
    "title": "10/17 クラブ活動中止",
    "date": "2026-10-17",
    "dateLabel": "10/17 (土) 中止",
    "details": [
      "学校閉鎖に伴い予定していたクラブ活動は中止。"
    ],
    "cat": "no",
    "subject": "部活",
    "thread": "バスケ",
    "poster": "山本昂宏",
    "posted": "10/15",
    "url": "https://classroom.google.com/c/MzI3NTczNzQyMTQy/p/ODkyMzA0NzQxMjEy"
  },
  {
    "id": "health-survey-oct18",
    "title": "10/19登校判断のための健康調査",
    "date": "2026-10-18",
    "dateLabel": "10/18 (日) 夕方",
    "details": [
      "10/19(月)の登校判断のために実施。詳細は10/16の朝礼で説明。"
    ],
    "cat": "hw",
    "subject": "学校",
    "thread": "82回生",
    "poster": "松本珠希",
    "posted": "10/15",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODc0MDAxMDczMzE3"
  },
  {
    "subject": "英語",
    "thread": "英語",
    "poster": "本木綾子",
    "posted": "9/9",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/p/ODc4MzgzNzg0NDQ0",
    "hasLink": true,
    "id": "eng-ch13",
    "cat": "hw",
    "date": "2026-10-19",
    "dateLabel": "10/19 (月) 8:40 まで",
    "title": "新中問 第13章 提出",
    "details": [
      "提出範囲: p.134〜143",
      "ロイロで案内された提出形式はp.134〜143の画像5枚（10/19 8:40締切）。"
    ]
  },
  {
    "id": "gika-embroidery-resubmit-oct16",
    "cat": "hw",
    "date": "2026-10-19",
    "dateLabel": "10/19 (月) まで【やり直し対象者】",
    "subject": "技術家庭",
    "title": "刺しゅうキット 再提出",
    "details": [
      "10/16の家庭科連絡で、刺しゅうキットのやり直し提出期限を休み明けの10/19までに変更。"
    ],
    "thread": "82回生",
    "poster": "菊池菜々世",
    "posted": "10/16",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkyMjkxNzIwNjIz"
  },
  {
    "id": "mail-QA3IbhXvWl",
    "cat": "no",
    "date": "2026-10-19",
    "dateLabel": "10/12 生徒へ案内・10/19の週 動画配信予定",
    "subject": "全体",
    "title": "2027年度からの新たな体制についてのご報告（続報2）",
    "details": [
      "2027年度の新体制について、10/19からの週に保護者向け説明動画を配信し、意見を募る予定（配信日は未定）",
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
    "date": "2026-10-19",
    "dateLabel": "10/19 (月) 16:10〜17:00",
    "cat": "hw",
    "details": [
      "1・2・3組の前回授業プリントを返却。青いハンコの人は再提出。",
      "「貼り直し」と書かれた人は10/19 16:10〜17:00に理科Bで貼り直し。再提出全般の締切は本文記載なし。"
    ],
    "subject": "理科",
    "thread": "82回生",
    "poster": "大越佳子",
    "posted": "10/12",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkwNDY2MDkzMDI4"
  },
  {
    "id": "math-absent-oct19",
    "title": "比例・反比例小テスト：欠席者の受験",
    "date": "2026-10-19",
    "dateLabel": "10/19 (月) 終礼清掃後",
    "details": [
      "10/15の小テストを欠席して未受験の人が対象。404で実施。",
      "10/19も欠席する場合は10/20 8:10に校務センターで受験。"
    ],
    "cat": "no",
    "posted": "10/15",
    "subject": "数学",
    "thread": "数学",
    "poster": "森本奈央",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/p/ODkyMzA5OTQ0OTI0"
  },
  {
    "id": "math-worksheet2-oct19",
    "title": "比例・反比例ワークシート（2）を持参",
    "date": "2026-10-19",
    "dateLabel": "10/19 (月) 数学【3組】",
    "details": [
      "2・3・6組は10/19の授業で使用。10/15配布のプリントを持参する。"
    ],
    "cat": "no",
    "posted": "10/15",
    "subject": "数学",
    "thread": "数学",
    "poster": "山口朋子",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/m/ODkyMzEyNDYzOTI3/details"
  },
  {
    "cat": "no",
    "thread": "82回生",
    "posted": "10/16",
    "id": "sports-key-oct19",
    "date": "2026-10-19",
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
    "id": "eng-key-oct19",
    "cat": "hw",
    "date": "2026-10-19",
    "dateLabel": "10/19(月) 8:40まで",
    "subject": "英語",
    "title": "key p.136–137 提出",
    "details": [
      "ロイロで案内された締切は10/19 8:40。"
    ],
    "thread": "ロイロ",
    "poster": ""
  },
  {
    "id": "kanji-test-oct20",
    "cat": "no",
    "date": "2026-10-20",
    "dateLabel": "10/20 (火)【3組】",
    "subject": "国語",
    "title": "漢字豆テスト",
    "details": [
      "3組は10/20(火)に実施。",
      "範囲：ステップ16〜力だめし3（p.76〜90）。",
      "漢字のテキストを忘れずに持ち帰り、準備をしておく。"
    ],
    "thread": "82回生",
    "poster": "鈴木秀一",
    "posted": "10/15",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkyMjc4NDM4MDYy"
  },
  {
    "id": "math-absent-oct20",
    "title": "数学小テスト：10/19も欠席した場合",
    "date": "2026-10-20",
    "dateLabel": "10/20 (火) 8:10【該当者】",
    "details": [
      "小テスト未受験で10/19も欠席した人は、校務センターに受けに来る。"
    ],
    "cat": "no",
    "posted": "10/15",
    "subject": "数学",
    "thread": "数学",
    "poster": "森本奈央",
    "url": "https://classroom.google.com/c/ODQ5MzY4MjU2Mzg0/p/ODkyMzA5OTQ0OTI0"
  },
  {
    "cat": "no",
    "thread": "82回生",
    "posted": "10/16",
    "id": "geo-quiz-oct20",
    "date": "2026-10-20",
    "dateLabel": "10/20 16:20〜17:20",
    "subject": "地理",
    "optional": true,
    "title": "【日程変更】中1 地理のテスト対策・早押しクイズ",
    "details": [
      "学校閉鎖のため10/20(火)・21(水)に日程変更。4Fオープンスペースで開催。",
      "前半は暗記、後半は早押しクイズ。地理の試験範囲を扱います。",
      "充電したタブレット必須。教科書・プリント・筆記用具を持参。"
    ],
    "poster": "國澤恒久",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODkyNTYwODYwMjIy/details"
  },
  {
    "cat": "no",
    "thread": "82回生",
    "posted": "10/16",
    "id": "geo-quiz-oct21",
    "date": "2026-10-21",
    "dateLabel": "10/21 16:20〜17:20",
    "subject": "地理",
    "optional": true,
    "title": "【日程変更】中1 地理のテスト対策・早押しクイズ",
    "details": [
      "学校閉鎖のため10/20(火)・21(水)に日程変更。4Fオープンスペースで開催。",
      "前半は暗記、後半は早押しクイズ。地理の試験範囲を扱います。",
      "充電したタブレット必須。教科書・プリント・筆記用具を持参。"
    ],
    "poster": "國澤恒久",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODkyNTYwODYwMjIy/details"
  },
  {
    "id": "mail-Q94ALwMhmu",
    "cat": "no",
    "date": "2026-10-22",
    "dateLabel": "10/22 (木) 開催",
    "subject": "全体",
    "title": "目白キャンパスめぐり・PTA親睦会のお知らせ",
    "details": [
      "10月22日（木）開催「目白キャンパスめぐり・PTA親睦会」の案内",
      "参加希望の方はQRコードより申込み（プリントも配布済み）",
      "Classroom(峯岸憲一)でも同内容が共有されています"
    ],
    "thread": "",
    "poster": "保護者向けメール",
    "posted": "9/4",
    "mail": true,
    "mailUrl": "https://object-storage.tyo2.conoha.io/v1/nc_8bd5c69d2f434c1eb45a209a9092bdeb/y-line-jwu-j-net/Q94ALvKCb3",
    "mailPageUrl": "https://www.y.line-nt.com/linenet/member/jwu-j-net/Q2INSF1UQi/mail/Q94ALwMhmu"
  },
  {
    "subject": "英語",
    "thread": "英語",
    "poster": "本木綾子",
    "posted": "9/9",
    "url": "https://classroom.google.com/c/ODU5Mzk5NTI1NzA5/p/ODc4MzgzNzg0NDQ0",
    "hasLink": true,
    "id": "eng-unit8",
    "cat": "no",
    "date": "2026-10-22",
    "dateLabel": "10/22 (木)",
    "title": "英語 Unit 8 テスト",
    "details": [
      "毎回の小テストは行わず、ユニットテストを実施",
      "単語も出題。資料記載の単語範囲はKeyワークp.108・124・138"
    ]
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
      "10/19の登校判断に向けた10/18夕方の健康調査は既存案内を確認。"
    ],
    "poster": "松本珠希",
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/m/ODkyNTU5NDM3OTQ2/details"
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
      "9:45〜10:20 社会（馬場・35分）",
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
      "午前練習は8:30〜12:00、午後練習は13:00〜16:00",
      "11/3は午前練習・午後自主練可、11/8は午前練習、11/14は午後練習",
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
    "dateLabel": "次回の授業まで【1・2・3・6組】",
    "subject": "技術家庭",
    "title": "技術・家庭科 サクラボ授業の準備・記事を読む宿題",
    "details": [
      "次回もサクラボで授業を実施",
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
    "dateLabel": "当面の間",
    "subject": "技術家庭",
    "title": "技術・家庭科より（刺繍キット・今週の授業）",
    "details": [
      "宿題の刺繍キット：ロイロで返却があった人は授業初日の作品提出までに直す",
      "今週の授業はサクラボで技術分野",
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
      "文化祭に関する質問・意見の窓口は準備中のため、案内まで個別の先生への直接の質問・提出は控える"
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
    "dateLabel": "見学前に予約【希望者】",
    "details": [
      "フォームで予約し、自動返信メールを印刷して当日受付へ。開催日・申込期限はこの資料に記載なし。",
      "中学生は高校玄関前で受付後、中学玄関で上履きに履き替える。家族は高校玄関から入場し、中学校の入校証を持参。",
      "中学生はスマートフォンで撮影不可。撮影は保護者証着用者のみ。",
      "ほとんどの売り場はキャッシュレス。交通系ICカード等を事前にチャージ（校内チャージ不可）。卒業生バザーは現金のみ。",
      "飲食は3G教室・3H前モール・食堂の指定場所で。食べ歩き不可。"
    ],
    "cat": "no",
    "subject": "学校",
    "thread": "82回生",
    "posted": "10/15",
    "optional": true,
    "poster": "石井靖子",
    "hasLink": true,
    "url": "https://classroom.google.com/c/ODU4NTUxNTUzOTEy/p/ODkxNzM3MjgyNTQy"
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
  }
]
};
