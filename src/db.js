// Find objects with unique amka
// aitiseis.filter((value, index, self) => 
//   self.map(x => x.amka)
//   .indexOf(value.amka) === index);

export const categories = [
  "Επώνυμο",
  "Όνομα",
  "Πατρώνυμο",
  "Ημερομηνία Γέννησης",
  "ΑΦΜ",
  "ΑMKA",
  "ΟΑΕΔ",
  "Διάρκεια ανεργίας"
];

export const citizens = [
  {
    lastName: 'Παπαδάκης',
    firstName: 'Ιωάννης',
    fathersName: 'Κωνσταντίνος',
    birth_date: '1996-12-06',
    afm: 412858468,
    amka: 13733841872,
    oaed_number: 43850284533062,
    unemployment_duration: 23,
    status: false,
    is_ofeloumenos: true
  },
  {
    lastName: 'Παππάς',
    firstName: 'Νικόλαος',
    fathersName: 'Εμμανουήλ',
    birth_date: '1986-05-07',
    afm: 863665086,
    amka: 38664872110,
    oaed_number: 35095657475401,
    unemployment_duration: 38,
    status: false,
    is_ofeloumenos: false
  },
  {
    lastName: 'Παππάς',
    firstName: 'Δημήτριος',
    fathersName: 'Κωνσταντίνος',
    birth_date: '1992-10-10',
    afm: 744824732,
    amka: 73122380299,
    oaed_number: 97985049428887,
    unemployment_duration: 15,
    status: false,
    is_ofeloumenos: false
  },
  {
    lastName: 'Παππάς',
    firstName: 'Εμμανουήλ',
    fathersName: 'Δημήτριος',
    birth_date: '1990-11-28',
    afm: 507585829,
    amka: 88178027765,
    oaed_number: 79900474280544,
    unemployment_duration: 22,
    status: true,
    is_ofeloumenos: false
  },
  {
    lastName: 'Παπαδάκης',
    firstName: 'Εμμανουήλ',
    fathersName: 'Δημήτριος',
    birth_date: '1987-03-28',
    afm: 476651486,
    amka: 32871086029,
    oaed_number: 13237738888213,
    unemployment_duration: 34,
    status: false,
    is_ofeloumenos: false
  },
  {
    lastName: 'Παπαδάκης',
    firstName: 'Νικόλαος',
    fathersName: 'Ιωάννης',
    birth_date: '1992-01-18',
    afm: 378799939,
    amka: 14057211597,
    oaed_number: 86149883862958,
    unemployment_duration: 23,
    status: false,
    is_ofeloumenos: true
  },
  {
    lastName: 'Παππάς',
    firstName: 'Ιωάννης',
    fathersName: 'Νικόλαος',
    birth_date: '1995-06-20',
    afm: 228044468,
    amka: 48879473402,
    oaed_number: 81109851032894,
    unemployment_duration: 10,
    status: true,
    is_ofeloumenos: true
  },
  {
    lastName: 'Παπαδάκης',
    firstName: 'Εμμανουήλ',
    fathersName: 'Κωνσταντίνος',
    birth_date: '1988-12-29',
    afm: 863159919,
    amka: 12970953161,
    oaed_number: 15562342201758,
    unemployment_duration: 16,
    status: false,
    is_ofeloumenos: true
  },
  {
    lastName: 'Παππάς',
    firstName: 'Εμμανουήλ',
    fathersName: 'Νικόλαος',
    birth_date: '1993-05-06',
    afm: 113353992,
    amka: 93583233108,
    oaed_number: 92371518789767,
    unemployment_duration: 13,
    status: false,
    is_ofeloumenos: true
  },
  {
    lastName: 'Παπαδάκης',
    firstName: 'Δημήτριος',
    fathersName: 'Κωνσταντίνος',
    birth_date: '1994-03-14',
    afm: 838655142,
    amka: 91331667970,
    oaed_number: 18479644767472,
    unemployment_duration: 38,
    status: false,
    is_ofeloumenos: true
  },
  {
    lastName: 'Παππάς',
    firstName: 'Δημήτριος',
    fathersName: 'Δημήτριος',
    birth_date: '1992-12-12',
    afm: 339310361,
    amka: 71695711918,
    oaed_number: 46196105454218,
    unemployment_duration: 31,
    status: false,
    is_ofeloumenos: false
  },
  {
    lastName: 'Παπαδάκης',
    firstName: 'Εμμανουήλ',
    fathersName: 'Εμμανουήλ',
    birth_date: '1999-04-19',
    afm: 436492754,
    amka: 27082994606,
    oaed_number: 91462931396880,
    unemployment_duration: 21,
    status: false,
    is_ofeloumenos: false
  },
  {
    lastName: 'Παππάς',
    firstName: 'Ιωάννης',
    fathersName: 'Νικόλαος',
    birth_date: '1986-09-21',
    afm: 248369964,
    amka: 14116315132,
    oaed_number: 56320683604585,
    unemployment_duration: 26,
    status: false,
    is_ofeloumenos: false
  },
  {
    lastName: 'Παππάς',
    firstName: 'Νικόλαος',
    fathersName: 'Νικόλαος',
    birth_date: '1989-07-28',
    afm: 739409229,
    amka: 55411122799,
    oaed_number: 65772026766504,
    unemployment_duration: 35,
    status: false,
    is_ofeloumenos: true
  },
  {
    lastName: 'Παπαδάκης',
    firstName: 'Ιωάννης',
    fathersName: 'Δημήτριος',
    birth_date: '1994-09-02',
    afm: 437100426,
    amka: 73836324569,
    oaed_number: 78254185220866,
    unemployment_duration: 40,
    status: true,
    is_ofeloumenos: false
  },
  {
    lastName: 'Παπαδάκης',
    firstName: 'Νικόλαος',
    fathersName: 'Νικόλαος',
    birth_date: '1989-11-13',
    afm: 703384293,
    amka: 17044041240,
    oaed_number: 37960429718407,
    unemployment_duration: 16,
    status: false,
    is_ofeloumenos: false
  },
  {
    lastName: 'Παππάς',
    firstName: 'Ιωάννης',
    fathersName: 'Ιωάννης',
    birth_date: '1997-03-29',
    afm: 681003764,
    amka: 70921576505,
    oaed_number: 60504520855455,
    unemployment_duration: 12,
    status: false,
    is_ofeloumenos: true
  }
];

export const aitiseis = [
  {
    is_moriodotimeni: false,
    amka: 73836324569,
    moria: 322,
    voucher_id: 35201014700142
  },
  {
    is_moriodotimeni: false,
    amka: 93583233108,
    moria: 140,
    voucher_id: 12902176154961
  },
  {
    is_moriodotimeni: true,
    amka: 14116315132,
    moria: 814,
    voucher_id: 70773112427791
  },
  {
    is_moriodotimeni: true,
    amka: 88178027765,
    moria: 658,
    voucher_id: 42164533195866
  },
  {
    is_moriodotimeni: true,
    amka: 91331667970,
    moria: 744,
    voucher_id: 95353992926400
  },
  {
    is_moriodotimeni: true,
    amka: 70921576505,
    moria: 645,
    voucher_id: 63025113438598
  },
  {
    is_moriodotimeni: true,
    amka: 73836324569,
    moria: 608,
    voucher_id: 58848581400933
  },
  {
    is_moriodotimeni: false,
    amka: 32871086029,
    moria: 601,
    voucher_id: 44372580936681
  },
  {
    is_moriodotimeni: true,
    amka: 27082994606,
    moria: 576,
    voucher_id: 55265052813943
  },
  {
    is_moriodotimeni: false,
    amka: 91331667970,
    moria: 269,
    voucher_id: 17933714268428
  },
  {
    is_moriodotimeni: true,
    amka: 71695711918,
    moria: 361,
    voucher_id: 63218035470585
  },
  {
    is_moriodotimeni: false,
    amka: 14057211597,
    moria: 314,
    voucher_id: 39995983596298
  },
  {
    is_moriodotimeni: false,
    amka: 27082994606,
    moria: 233,
    voucher_id: 17892813260593
  },
  {
    is_moriodotimeni: false,
    amka: 32871086029,
    moria: 31,
    voucher_id: 73335709115270
  },
  {
    is_moriodotimeni: false,
    amka: 13733841872,
    moria: 971,
    voucher_id: 18446661319807
  },
  {
    is_moriodotimeni: true,
    amka: 88178027765,
    moria: 220,
    voucher_id: 22218139430029
  },
  {
    is_moriodotimeni: false,
    amka: 32871086029,
    moria: 547,
    voucher_id: 55080812757307
  },
  {
    is_moriodotimeni: false,
    amka: 55411122799,
    moria: 112,
    voucher_id: 67946126785090
  },
  {
    is_moriodotimeni: false,
    amka: 93583233108,
    moria: 230,
    voucher_id: 46997488402337
  },
  {
    is_moriodotimeni: false,
    amka: 12970953161,
    moria: 157,
    voucher_id: 17900750800165
  },
  {
    is_moriodotimeni: false,
    amka: 55411122799,
    moria: 162,
    voucher_id: 73513854966893
  },
  {
    is_moriodotimeni: true,
    amka: 73836324569,
    moria: 180,
    voucher_id: 95453591670494
  },
  {
    is_moriodotimeni: false,
    amka: 55411122799,
    moria: 901,
    voucher_id: 33584078465235
  },
  {
    is_moriodotimeni: true,
    amka: 12970953161,
    moria: 383,
    voucher_id: 59204444672997
  },
  {
    is_moriodotimeni: true,
    amka: 73122380299,
    moria: 495,
    voucher_id: 77295067748096
  },
  {
    is_moriodotimeni: false,
    amka: 27082994606,
    moria: 455,
    voucher_id: 89661878353817
  },
  {
    is_moriodotimeni: true,
    amka: 48879473402,
    moria: 160,
    voucher_id: 32336197358976
  },
  {
    is_moriodotimeni: true,
    amka: 12970953161,
    moria: 683,
    voucher_id: 35854140474287
  },
  {
    is_moriodotimeni: false,
    amka: 48879473402,
    moria: 567,
    voucher_id: 66641723492984
  },
  {
    is_moriodotimeni: false,
    amka: 17044041240,
    moria: 490,
    voucher_id: 32961649686347
  },
  {
    is_moriodotimeni: false,
    amka: 70921576505,
    moria: 924,
    voucher_id: 88233243446349
  },
  {
    is_moriodotimeni: false,
    amka: 88178027765,
    moria: 825,
    voucher_id: 25806952970437
  },
  {
    is_moriodotimeni: false,
    amka: 73836324569,
    moria: 622,
    voucher_id: 42698875464734
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 266,
    voucher_id: 76147231648866
  },
  {
    is_moriodotimeni: true,
    amka: 27082994606,
    moria: 208,
    voucher_id: 87777262283593
  },
  {
    is_moriodotimeni: true,
    amka: 73836324569,
    moria: 945,
    voucher_id: 44982360138592
  },
  {
    is_moriodotimeni: true,
    amka: 73836324569,
    moria: 427,
    voucher_id: 75284626204712
  },
  {
    is_moriodotimeni: true,
    amka: 14057211597,
    moria: 355,
    voucher_id: 82820867385782
  },
  {
    is_moriodotimeni: true,
    amka: 27082994606,
    moria: 102,
    voucher_id: 17423557163823
  },
  {
    is_moriodotimeni: false,
    amka: 38664872110,
    moria: 576,
    voucher_id: 92568943976618
  },
  {
    is_moriodotimeni: true,
    amka: 55411122799,
    moria: 489,
    voucher_id: 44036040118949
  },
  {
    is_moriodotimeni: true,
    amka: 71695711918,
    moria: 332,
    voucher_id: 98256308895649
  },
  {
    is_moriodotimeni: true,
    amka: 48879473402,
    moria: 425,
    voucher_id: 40466797435795
  },
  {
    is_moriodotimeni: true,
    amka: 91331667970,
    moria: 628,
    voucher_id: 65225455548420
  },
  {
    is_moriodotimeni: true,
    amka: 55411122799,
    moria: 148,
    voucher_id: 91696213631793
  },
  {
    is_moriodotimeni: true,
    amka: 71695711918,
    moria: 67,
    voucher_id: 66183192134514
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 402,
    voucher_id: 86431526383662
  },
  {
    is_moriodotimeni: false,
    amka: 38664872110,
    moria: 674,
    voucher_id: 63438917601593
  },
  {
    is_moriodotimeni: true,
    amka: 32871086029,
    moria: 234,
    voucher_id: 86503657222670
  },
  {
    is_moriodotimeni: false,
    amka: 91331667970,
    moria: 637,
    voucher_id: 14850379841168
  },
  {
    is_moriodotimeni: false,
    amka: 12970953161,
    moria: 865,
    voucher_id: 22537337307805
  },
  {
    is_moriodotimeni: false,
    amka: 38664872110,
    moria: 764,
    voucher_id: 23666187090768
  },
  {
    is_moriodotimeni: false,
    amka: 38664872110,
    moria: 919,
    voucher_id: 29660954467765
  },
  {
    is_moriodotimeni: false,
    amka: 55411122799,
    moria: 873,
    voucher_id: 47819023635776
  },
  {
    is_moriodotimeni: false,
    amka: 17044041240,
    moria: 150,
    voucher_id: 19383481201286
  },
  {
    is_moriodotimeni: true,
    amka: 88178027765,
    moria: 904,
    voucher_id: 42549792049175
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 691,
    voucher_id: 72146302618279
  },
  {
    is_moriodotimeni: true,
    amka: 91331667970,
    moria: 835,
    voucher_id: 21212054918658
  },
  {
    is_moriodotimeni: true,
    amka: 14116315132,
    moria: 228,
    voucher_id: 16369287268545
  },
  {
    is_moriodotimeni: true,
    amka: 13733841872,
    moria: 759,
    voucher_id: 10125031807531
  },
  {
    is_moriodotimeni: true,
    amka: 14057211597,
    moria: 360,
    voucher_id: 62007115682836
  },
  {
    is_moriodotimeni: true,
    amka: 91331667970,
    moria: 124,
    voucher_id: 65278547436153
  },
  {
    is_moriodotimeni: true,
    amka: 13733841872,
    moria: 595,
    voucher_id: 32827689470744
  },
  {
    is_moriodotimeni: false,
    amka: 91331667970,
    moria: 337,
    voucher_id: 86610884697562
  },
  {
    is_moriodotimeni: true,
    amka: 71695711918,
    moria: 334,
    voucher_id: 51364155392285
  },
  {
    is_moriodotimeni: true,
    amka: 70921576505,
    moria: 989,
    voucher_id: 22290516125737
  },
  {
    is_moriodotimeni: false,
    amka: 32871086029,
    moria: 347,
    voucher_id: 24196687772306
  },
  {
    is_moriodotimeni: false,
    amka: 27082994606,
    moria: 38,
    voucher_id: 37223058715433
  },
  {
    is_moriodotimeni: true,
    amka: 88178027765,
    moria: 301,
    voucher_id: 49870812648537
  },
  {
    is_moriodotimeni: true,
    amka: 55411122799,
    moria: 483,
    voucher_id: 81410644213653
  },
  {
    is_moriodotimeni: false,
    amka: 17044041240,
    moria: 535,
    voucher_id: 47211809255720
  },
  {
    is_moriodotimeni: false,
    amka: 38664872110,
    moria: 897,
    voucher_id: 60890360946668
  },
  {
    is_moriodotimeni: false,
    amka: 88178027765,
    moria: 913,
    voucher_id: 25510323840806
  },
  {
    is_moriodotimeni: false,
    amka: 14116315132,
    moria: 274,
    voucher_id: 91651475432432
  },
  {
    is_moriodotimeni: false,
    amka: 55411122799,
    moria: 630,
    voucher_id: 13479612117368
  },
  {
    is_moriodotimeni: true,
    amka: 17044041240,
    moria: 949,
    voucher_id: 30085916712969
  },
  {
    is_moriodotimeni: false,
    amka: 27082994606,
    moria: 42,
    voucher_id: 32293432855863
  },
  {
    is_moriodotimeni: false,
    amka: 38664872110,
    moria: 916,
    voucher_id: 56717959873466
  },
  {
    is_moriodotimeni: true,
    amka: 13733841872,
    moria: 821,
    voucher_id: 73514917657581
  },
  {
    is_moriodotimeni: true,
    amka: 71695711918,
    moria: 340,
    voucher_id: 25966309568704
  },
  {
    is_moriodotimeni: true,
    amka: 27082994606,
    moria: 951,
    voucher_id: 77193626416709
  },
  {
    is_moriodotimeni: true,
    amka: 32871086029,
    moria: 563,
    voucher_id: 25451239851427
  },
  {
    is_moriodotimeni: true,
    amka: 14057211597,
    moria: 130,
    voucher_id: 61136077005381
  },
  {
    is_moriodotimeni: true,
    amka: 14057211597,
    moria: 415,
    voucher_id: 91071556967618
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 146,
    voucher_id: 82472062203721
  },
  {
    is_moriodotimeni: true,
    amka: 55411122799,
    moria: 79,
    voucher_id: 76613621090008
  },
  {
    is_moriodotimeni: true,
    amka: 91331667970,
    moria: 287,
    voucher_id: 31638441783040
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 157,
    voucher_id: 80089005289241
  },
  {
    is_moriodotimeni: true,
    amka: 73122380299,
    moria: 231,
    voucher_id: 53219392228216
  },
  {
    is_moriodotimeni: true,
    amka: 71695711918,
    moria: 86,
    voucher_id: 13022074313843
  },
  {
    is_moriodotimeni: false,
    amka: 14116315132,
    moria: 467,
    voucher_id: 74381679761243
  },
  {
    is_moriodotimeni: true,
    amka: 55411122799,
    moria: 553,
    voucher_id: 20356227318774
  },
  {
    is_moriodotimeni: true,
    amka: 27082994606,
    moria: 361,
    voucher_id: 98699579613494
  },
  {
    is_moriodotimeni: false,
    amka: 48879473402,
    moria: 714,
    voucher_id: 55224740393639
  },
  {
    is_moriodotimeni: false,
    amka: 88178027765,
    moria: 303,
    voucher_id: 40456763912133
  },
  {
    is_moriodotimeni: true,
    amka: 91331667970,
    moria: 292,
    voucher_id: 87232364212307
  },
  {
    is_moriodotimeni: true,
    amka: 55411122799,
    moria: 170,
    voucher_id: 44363791723208
  },
  {
    is_moriodotimeni: true,
    amka: 38664872110,
    moria: 179,
    voucher_id: 48329157051810
  },
  {
    is_moriodotimeni: true,
    amka: 73836324569,
    moria: 565,
    voucher_id: 56441363611306
  },
  {
    is_moriodotimeni: false,
    amka: 14057211597,
    moria: 615,
    voucher_id: 94040369458575
  },
  {
    is_moriodotimeni: false,
    amka: 13733841872,
    moria: 501,
    voucher_id: 15644037634068
  },
  {
    is_moriodotimeni: false,
    amka: 32871086029,
    moria: 27,
    voucher_id: 77297396486096
  },
  {
    is_moriodotimeni: false,
    amka: 14057211597,
    moria: 136,
    voucher_id: 54641659019628
  },
  {
    is_moriodotimeni: false,
    amka: 70921576505,
    moria: 853,
    voucher_id: 23858384425117
  },
  {
    is_moriodotimeni: false,
    amka: 32871086029,
    moria: 74,
    voucher_id: 77516060473811
  },
  {
    is_moriodotimeni: true,
    amka: 70921576505,
    moria: 625,
    voucher_id: 74566884992612
  },
  {
    is_moriodotimeni: false,
    amka: 91331667970,
    moria: 893,
    voucher_id: 92817822420636
  },
  {
    is_moriodotimeni: false,
    amka: 13733841872,
    moria: 101,
    voucher_id: 67024973299350
  },
  {
    is_moriodotimeni: true,
    amka: 17044041240,
    moria: 340,
    voucher_id: 32602020373355
  },
  {
    is_moriodotimeni: true,
    amka: 14057211597,
    moria: 988,
    voucher_id: 53141431224483
  },
  {
    is_moriodotimeni: true,
    amka: 38664872110,
    moria: 753,
    voucher_id: 56849234351226
  },
  {
    is_moriodotimeni: false,
    amka: 12970953161,
    moria: 147,
    voucher_id: 45636710816517
  },
  {
    is_moriodotimeni: true,
    amka: 93583233108,
    moria: 293,
    voucher_id: 94802906563198
  },
  {
    is_moriodotimeni: false,
    amka: 70921576505,
    moria: 370,
    voucher_id: 77157107328747
  },
  {
    is_moriodotimeni: true,
    amka: 38664872110,
    moria: 411,
    voucher_id: 16274892665234
  },
  {
    is_moriodotimeni: true,
    amka: 91331667970,
    moria: 139,
    voucher_id: 94785554902286
  },
  {
    is_moriodotimeni: false,
    amka: 91331667970,
    moria: 567,
    voucher_id: 39311977149901
  },
  {
    is_moriodotimeni: false,
    amka: 73836324569,
    moria: 662,
    voucher_id: 83168276140610
  },
  {
    is_moriodotimeni: false,
    amka: 88178027765,
    moria: 335,
    voucher_id: 83776869921657
  },
  {
    is_moriodotimeni: false,
    amka: 14057211597,
    moria: 602,
    voucher_id: 54845018679716
  },
  {
    is_moriodotimeni: false,
    amka: 13733841872,
    moria: 689,
    voucher_id: 89939530611005
  },
  {
    is_moriodotimeni: true,
    amka: 32871086029,
    moria: 586,
    voucher_id: 30826214970343
  },
  {
    is_moriodotimeni: true,
    amka: 38664872110,
    moria: 613,
    voucher_id: 78775318320181
  },
  {
    is_moriodotimeni: true,
    amka: 13733841872,
    moria: 542,
    voucher_id: 96055999092725
  },
  {
    is_moriodotimeni: false,
    amka: 14057211597,
    moria: 569,
    voucher_id: 28930633472401
  },
  {
    is_moriodotimeni: true,
    amka: 14057211597,
    moria: 863,
    voucher_id: 73395836318322
  },
  {
    is_moriodotimeni: true,
    amka: 73122380299,
    moria: 781,
    voucher_id: 95918741199953
  },
  {
    is_moriodotimeni: true,
    amka: 17044041240,
    moria: 864,
    voucher_id: 25435062770095
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 81,
    voucher_id: 80714487840445
  },
  {
    is_moriodotimeni: false,
    amka: 12970953161,
    moria: 57,
    voucher_id: 84054639268843
  },
  {
    is_moriodotimeni: false,
    amka: 73836324569,
    moria: 412,
    voucher_id: 43256204086428
  },
  {
    is_moriodotimeni: true,
    amka: 27082994606,
    moria: 312,
    voucher_id: 92349911507169
  },
  {
    is_moriodotimeni: false,
    amka: 71695711918,
    moria: 989,
    voucher_id: 64670594792202
  },
  {
    is_moriodotimeni: false,
    amka: 71695711918,
    moria: 363,
    voucher_id: 36225401065473
  },
  {
    is_moriodotimeni: true,
    amka: 14057211597,
    moria: 812,
    voucher_id: 47395282868905
  },
  {
    is_moriodotimeni: true,
    amka: 73122380299,
    moria: 543,
    voucher_id: 27214048616174
  },
  {
    is_moriodotimeni: false,
    amka: 70921576505,
    moria: 653,
    voucher_id: 50010191949066
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 817,
    voucher_id: 49325890006655
  },
  {
    is_moriodotimeni: false,
    amka: 55411122799,
    moria: 119,
    voucher_id: 69987320267118
  },
  {
    is_moriodotimeni: true,
    amka: 88178027765,
    moria: 732,
    voucher_id: 45212114261161
  },
  {
    is_moriodotimeni: true,
    amka: 14057211597,
    moria: 821,
    voucher_id: 62196249151506
  },
  {
    is_moriodotimeni: true,
    amka: 73836324569,
    moria: 701,
    voucher_id: 28171508402359
  },
  {
    is_moriodotimeni: false,
    amka: 88178027765,
    moria: 354,
    voucher_id: 25831258860699
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 169,
    voucher_id: 52428109779799
  },
  {
    is_moriodotimeni: true,
    amka: 14116315132,
    moria: 949,
    voucher_id: 31141498197459
  },
  {
    is_moriodotimeni: true,
    amka: 71695711918,
    moria: 231,
    voucher_id: 21210856192488
  },
  {
    is_moriodotimeni: true,
    amka: 27082994606,
    moria: 138,
    voucher_id: 88192995587226
  },
  {
    is_moriodotimeni: true,
    amka: 48879473402,
    moria: 936,
    voucher_id: 75027402282903
  },
  {
    is_moriodotimeni: false,
    amka: 12970953161,
    moria: 343,
    voucher_id: 64160223635988
  },
  {
    is_moriodotimeni: false,
    amka: 13733841872,
    moria: 548,
    voucher_id: 85529325044153
  },
  {
    is_moriodotimeni: false,
    amka: 88178027765,
    moria: 614,
    voucher_id: 28633408829739
  },
  {
    is_moriodotimeni: true,
    amka: 48879473402,
    moria: 261,
    voucher_id: 27576916087114
  },
  {
    is_moriodotimeni: false,
    amka: 38664872110,
    moria: 774,
    voucher_id: 37847729528161
  },
  {
    is_moriodotimeni: false,
    amka: 70921576505,
    moria: 858,
    voucher_id: 91242735483512
  },
  {
    is_moriodotimeni: false,
    amka: 12970953161,
    moria: 857,
    voucher_id: 98547147106978
  },
  {
    is_moriodotimeni: false,
    amka: 70921576505,
    moria: 228,
    voucher_id: 58497367744514
  },
  {
    is_moriodotimeni: true,
    amka: 93583233108,
    moria: 627,
    voucher_id: 93323499619068
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 920,
    voucher_id: 21743761512834
  },
  {
    is_moriodotimeni: true,
    amka: 73122380299,
    moria: 425,
    voucher_id: 19474906836874
  },
  {
    is_moriodotimeni: true,
    amka: 38664872110,
    moria: 356,
    voucher_id: 48271294439991
  },
  {
    is_moriodotimeni: true,
    amka: 14057211597,
    moria: 640,
    voucher_id: 79788838115916
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 547,
    voucher_id: 74897335583147
  },
  {
    is_moriodotimeni: false,
    amka: 13733841872,
    moria: 245,
    voucher_id: 37628903425260
  },
  {
    is_moriodotimeni: false,
    amka: 91331667970,
    moria: 863,
    voucher_id: 59782944653365
  },
  {
    is_moriodotimeni: true,
    amka: 73836324569,
    moria: 383,
    voucher_id: 49897483192347
  },
  {
    is_moriodotimeni: true,
    amka: 32871086029,
    moria: 66,
    voucher_id: 59125642641469
  },
  {
    is_moriodotimeni: true,
    amka: 73122380299,
    moria: 152,
    voucher_id: 20154275919473
  },
  {
    is_moriodotimeni: true,
    amka: 17044041240,
    moria: 69,
    voucher_id: 97282966283432
  }
];