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
    is_moriodotimeni: true,
    amka: 71695711918,
    moria: 840,
    voucher_id: 9892625530846994
  },
  {
    is_moriodotimeni: true,
    amka: 73122380299,
    moria: 550,
    voucher_id: 1684847027001754
  },
  {
    is_moriodotimeni: true,
    amka: 38664872110,
    moria: 895,
    voucher_id: 9908477723472810
  },
  {
    is_moriodotimeni: true,
    amka: 88178027765,
    moria: 222,
    voucher_id: 9124379979206804
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 734,
    voucher_id: 1100806637849367
  },
  {
    is_moriodotimeni: true,
    amka: 48879473402,
    moria: 542,
    voucher_id: 5726198627569840
  },
  {
    is_moriodotimeni: false,
    amka: 91331667970,
    moria: 870,
    voucher_id: 6376793535650308
  },
  {
    is_moriodotimeni: true,
    amka: 55411122799,
    moria: 454,
    voucher_id: 5220695960355580
  },
  {
    is_moriodotimeni: false,
    amka: 13733841872,
    moria: 107,
    voucher_id: 8860318411616630
  },
  {
    is_moriodotimeni: true,
    amka: 73122380299,
    moria: 567,
    voucher_id: 4342078513409797
  },
  {
    is_moriodotimeni: false,
    amka: 93583233108,
    moria: 646,
    voucher_id: 8061699598174790
  },
  {
    is_moriodotimeni: true,
    amka: 32871086029,
    moria: 785,
    voucher_id: 7149010448418284
  },
  {
    is_moriodotimeni: true,
    amka: 32871086029,
    moria: 132,
    voucher_id: 4087862059482888
  },
  {
    is_moriodotimeni: false,
    amka: 12970953161,
    moria: 672,
    voucher_id: 1456468867713284
  },
  {
    is_moriodotimeni: false,
    amka: 14057211597,
    moria: 140,
    voucher_id: 5769524271238044
  },
  {
    is_moriodotimeni: true,
    amka: 13733841872,
    moria: 215,
    voucher_id: 1491601942571640
  },
  {
    is_moriodotimeni: false,
    amka: 38664872110,
    moria: 771,
    voucher_id: 9283336546803438
  },
  {
    is_moriodotimeni: false,
    amka: 17044041240,
    moria: 809,
    voucher_id: 1316599550852258
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 547,
    voucher_id: 1610208717830044
  },
  {
    is_moriodotimeni: false,
    amka: 91331667970,
    moria: 566,
    voucher_id: 2842049112211528
  },
  {
    is_moriodotimeni: false,
    amka: 14116315132,
    moria: 28,
    voucher_id: 4020083582722420
  },
  {
    is_moriodotimeni: false,
    amka: 91331667970,
    moria: 295,
    voucher_id: 3352889058137161
  },
  {
    is_moriodotimeni: false,
    amka: 14116315132,
    moria: 443,
    voucher_id: 7129370605568898
  },
  {
    is_moriodotimeni: false,
    amka: 14116315132,
    moria: 700,
    voucher_id: 7887850306093174
  },
  {
    is_moriodotimeni: false,
    amka: 71695711918,
    moria: 232,
    voucher_id: 7364358536649270
  },
  {
    is_moriodotimeni: false,
    amka: 70921576505,
    moria: 561,
    voucher_id: 5858862371752970
  },
  {
    is_moriodotimeni: true,
    amka: 71695711918,
    moria: 139,
    voucher_id: 1119647447768198
  },
  {
    is_moriodotimeni: true,
    amka: 73122380299,
    moria: 883,
    voucher_id: 3731244664420559
  },
  {
    is_moriodotimeni: true,
    amka: 13733841872,
    moria: 139,
    voucher_id: 9240818938081720
  },
  {
    is_moriodotimeni: true,
    amka: 55411122799,
    moria: 51,
    voucher_id: 9783653254124240
  },
  {
    is_moriodotimeni: false,
    amka: 48879473402,
    moria: 537,
    voucher_id: 2834505257284881
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 978,
    voucher_id: 6221375049031982
  },
  {
    is_moriodotimeni: true,
    amka: 73122380299,
    moria: 808,
    voucher_id: 1554047725165332
  },
  {
    is_moriodotimeni: true,
    amka: 12970953161,
    moria: 332,
    voucher_id: 9634459742080402
  },
  {
    is_moriodotimeni: false,
    amka: 27082994606,
    moria: 869,
    voucher_id: 8752817548364566
  },
  {
    is_moriodotimeni: true,
    amka: 12970953161,
    moria: 639,
    voucher_id: 2430587173577961
  },
  {
    is_moriodotimeni: true,
    amka: 73122380299,
    moria: 784,
    voucher_id: 3961467443323079
  },
  {
    is_moriodotimeni: true,
    amka: 88178027765,
    moria: 387,
    voucher_id: 1612445293355315
  },
  {
    is_moriodotimeni: false,
    amka: 12970953161,
    moria: 231,
    voucher_id: 9842532498389372
  },
  {
    is_moriodotimeni: false,
    amka: 73836324569,
    moria: 560,
    voucher_id: 8621540418547718
  },
  {
    is_moriodotimeni: true,
    amka: 91331667970,
    moria: 897,
    voucher_id: 8679632928893394
  },
  {
    is_moriodotimeni: false,
    amka: 88178027765,
    moria: 362,
    voucher_id: 9006016882425806
  },
  {
    is_moriodotimeni: false,
    amka: 17044041240,
    moria: 623,
    voucher_id: 2392532447313382
  },
  {
    is_moriodotimeni: true,
    amka: 14057211597,
    moria: 831,
    voucher_id: 3410963500261086
  },
  {
    is_moriodotimeni: true,
    amka: 38664872110,
    moria: 814,
    voucher_id: 1381735009533890
  },
  {
    is_moriodotimeni: true,
    amka: 73122380299,
    moria: 125,
    voucher_id: 9761927976927534
  },
  {
    is_moriodotimeni: false,
    amka: 73836324569,
    moria: 60,
    voucher_id: 2113807437739627
  },
  {
    is_moriodotimeni: false,
    amka: 70921576505,
    moria: 194,
    voucher_id: 9611778324220506
  },
  {
    is_moriodotimeni: true,
    amka: 73122380299,
    moria: 416,
    voucher_id: 7410187694403336
  },
  {
    is_moriodotimeni: true,
    amka: 27082994606,
    moria: 646,
    voucher_id: 6528411051680400
  },
  {
    is_moriodotimeni: true,
    amka: 71695711918,
    moria: 608,
    voucher_id: 4679144729786822
  },
  {
    is_moriodotimeni: true,
    amka: 93583233108,
    moria: 176,
    voucher_id: 5800851421138366
  },
  {
    is_moriodotimeni: false,
    amka: 32871086029,
    moria: 678,
    voucher_id: 6565735457541388
  },
  {
    is_moriodotimeni: false,
    amka: 12970953161,
    moria: 942,
    voucher_id: 9043987107272892
  },
  {
    is_moriodotimeni: false,
    amka: 38664872110,
    moria: 792,
    voucher_id: 6212134348711912
  },
  {
    is_moriodotimeni: true,
    amka: 13733841872,
    moria: 35,
    voucher_id: 6223531910631676
  },
  {
    is_moriodotimeni: false,
    amka: 55411122799,
    moria: 714,
    voucher_id: 9326136379524958
  },
  {
    is_moriodotimeni: true,
    amka: 13733841872,
    moria: 461,
    voucher_id: 9509965270772438
  },
  {
    is_moriodotimeni: true,
    amka: 71695711918,
    moria: 706,
    voucher_id: 7462767174232102
  },
  {
    is_moriodotimeni: false,
    amka: 91331667970,
    moria: 615,
    voucher_id: 8845097433281864
  },
  {
    is_moriodotimeni: true,
    amka: 73122380299,
    moria: 30,
    voucher_id: 7108876454645092
  },
  {
    is_moriodotimeni: true,
    amka: 48879473402,
    moria: 202,
    voucher_id: 2800671256813537
  },
  {
    is_moriodotimeni: false,
    amka: 27082994606,
    moria: 436,
    voucher_id: 9843482634879202
  },
  {
    is_moriodotimeni: true,
    amka: 32871086029,
    moria: 399,
    voucher_id: 5809259371168290
  },
  {
    is_moriodotimeni: false,
    amka: 91331667970,
    moria: 621,
    voucher_id: 5737769831686952
  },
  {
    is_moriodotimeni: true,
    amka: 70921576505,
    moria: 572,
    voucher_id: 2389505834288594
  },
  {
    is_moriodotimeni: true,
    amka: 27082994606,
    moria: 121,
    voucher_id: 8200372376153920
  },
  {
    is_moriodotimeni: true,
    amka: 55411122799,
    moria: 860,
    voucher_id: 6609669083389206
  },
  {
    is_moriodotimeni: true,
    amka: 32871086029,
    moria: 293,
    voucher_id: 2744598015642654
  },
  {
    is_moriodotimeni: true,
    amka: 93583233108,
    moria: 617,
    voucher_id: 7171027691598790
  },
  {
    is_moriodotimeni: false,
    amka: 12970953161,
    moria: 194,
    voucher_id: 7464392894242988
  },
  {
    is_moriodotimeni: true,
    amka: 88178027765,
    moria: 412,
    voucher_id: 8517517913167750
  },
  {
    is_moriodotimeni: false,
    amka: 38664872110,
    moria: 250,
    voucher_id: 5048067468852190
  },
  {
    is_moriodotimeni: false,
    amka: 91331667970,
    moria: 831,
    voucher_id: 9051491219544156
  },
  {
    is_moriodotimeni: true,
    amka: 93583233108,
    moria: 360,
    voucher_id: 9000293232207254
  },
  {
    is_moriodotimeni: true,
    amka: 14057211597,
    moria: 265,
    voucher_id: 3846700452057404
  },
  {
    is_moriodotimeni: false,
    amka: 48879473402,
    moria: 480,
    voucher_id: 4311907222173939
  },
  {
    is_moriodotimeni: false,
    amka: 12970953161,
    moria: 140,
    voucher_id: 9763582125884196
  },
  {
    is_moriodotimeni: false,
    amka: 73836324569,
    moria: 727,
    voucher_id: 5770459886585648
  },
  {
    is_moriodotimeni: false,
    amka: 73836324569,
    moria: 98,
    voucher_id: 1255719456264468
  },
  {
    is_moriodotimeni: false,
    amka: 48879473402,
    moria: 638,
    voucher_id: 3188132991298153
  },
  {
    is_moriodotimeni: true,
    amka: 91331667970,
    moria: 886,
    voucher_id: 2043560020289378
  },
  {
    is_moriodotimeni: false,
    amka: 73836324569,
    moria: 663,
    voucher_id: 5901537358529810
  },
  {
    is_moriodotimeni: true,
    amka: 91331667970,
    moria: 936,
    voucher_id: 6875525592364040
  },
  {
    is_moriodotimeni: true,
    amka: 13733841872,
    moria: 397,
    voucher_id: 3700645604315165
  },
  {
    is_moriodotimeni: true,
    amka: 27082994606,
    moria: 804,
    voucher_id: 7347195368684608
  },
  {
    is_moriodotimeni: false,
    amka: 71695711918,
    moria: 808,
    voucher_id: 7254304036354340
  },
  {
    is_moriodotimeni: true,
    amka: 91331667970,
    moria: 324,
    voucher_id: 5705202238347162
  },
  {
    is_moriodotimeni: true,
    amka: 38664872110,
    moria: 877,
    voucher_id: 7000413134213370
  },
  {
    is_moriodotimeni: false,
    amka: 17044041240,
    moria: 334,
    voucher_id: 1568622604137444
  },
  {
    is_moriodotimeni: true,
    amka: 70921576505,
    moria: 847,
    voucher_id: 2375619202246753
  },
  {
    is_moriodotimeni: false,
    amka: 70921576505,
    moria: 419,
    voucher_id: 1564580883874591
  },
  {
    is_moriodotimeni: false,
    amka: 88178027765,
    moria: 666,
    voucher_id: 6596688765425442
  },
  {
    is_moriodotimeni: true,
    amka: 91331667970,
    moria: 280,
    voucher_id: 1651903130391812
  },
  {
    is_moriodotimeni: false,
    amka: 88178027765,
    moria: 38,
    voucher_id: 6939904756208076
  },
  {
    is_moriodotimeni: true,
    amka: 88178027765,
    moria: 607,
    voucher_id: 5626939488956686
  },
  {
    is_moriodotimeni: true,
    amka: 13733841872,
    moria: 805,
    voucher_id: 2404461373998261
  },
  {
    is_moriodotimeni: true,
    amka: 17044041240,
    moria: 483,
    voucher_id: 8062255638887634
  },
  {
    is_moriodotimeni: true,
    amka: 38664872110,
    moria: 92,
    voucher_id: 9681873854667756
  },
  {
    is_moriodotimeni: false,
    amka: 27082994606,
    moria: 625,
    voucher_id: 3256575096347043
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 1000,
    voucher_id: 4807001638866409
  },
  {
    is_moriodotimeni: false,
    amka: 27082994606,
    moria: 713,
    voucher_id: 9758462678742522
  },
  {
    is_moriodotimeni: true,
    amka: 27082994606,
    moria: 122,
    voucher_id: 6199473102739744
  },
  {
    is_moriodotimeni: false,
    amka: 91331667970,
    moria: 883,
    voucher_id: 7662849451460182
  },
  {
    is_moriodotimeni: false,
    amka: 71695711918,
    moria: 527,
    voucher_id: 8983854530189788
  },
  {
    is_moriodotimeni: false,
    amka: 70921576505,
    moria: 309,
    voucher_id: 8330101095384102
  },
  {
    is_moriodotimeni: true,
    amka: 55411122799,
    moria: 773,
    voucher_id: 5806060016424346
  },
  {
    is_moriodotimeni: true,
    amka: 17044041240,
    moria: 436,
    voucher_id: 5467773771077892
  },
  {
    is_moriodotimeni: true,
    amka: 17044041240,
    moria: 485,
    voucher_id: 5690016337152846
  },
  {
    is_moriodotimeni: false,
    amka: 55411122799,
    moria: 998,
    voucher_id: 4380488188335803
  },
  {
    is_moriodotimeni: false,
    amka: 38664872110,
    moria: 639,
    voucher_id: 9034511321431222
  },
  {
    is_moriodotimeni: true,
    amka: 14116315132,
    moria: 364,
    voucher_id: 9209585222885642
  },
  {
    is_moriodotimeni: true,
    amka: 14057211597,
    moria: 678,
    voucher_id: 2723581930630752
  },
  {
    is_moriodotimeni: false,
    amka: 14116315132,
    moria: 43,
    voucher_id: 8878710423615976
  },
  {
    is_moriodotimeni: true,
    amka: 73836324569,
    moria: 697,
    voucher_id: 4147867574107260
  },
  {
    is_moriodotimeni: false,
    amka: 27082994606,
    moria: 953,
    voucher_id: 7614682421676718
  },
  {
    is_moriodotimeni: false,
    amka: 70921576505,
    moria: 599,
    voucher_id: 3290698910595678
  },
  {
    is_moriodotimeni: false,
    amka: 93583233108,
    moria: 109,
    voucher_id: 7400271991193658
  },
  {
    is_moriodotimeni: false,
    amka: 38664872110,
    moria: 659,
    voucher_id: 1615578387047886
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 422,
    voucher_id: 4704937615349380
  },
  {
    is_moriodotimeni: false,
    amka: 48879473402,
    moria: 891,
    voucher_id: 4290024238014950
  },
  {
    is_moriodotimeni: false,
    amka: 27082994606,
    moria: 220,
    voucher_id: 5422397183062770
  },
  {
    is_moriodotimeni: false,
    amka: 27082994606,
    moria: 962,
    voucher_id: 4428066052765513
  },
  {
    is_moriodotimeni: false,
    amka: 91331667970,
    moria: 677,
    voucher_id: 5149179187370246
  },
  {
    is_moriodotimeni: false,
    amka: 32871086029,
    moria: 276,
    voucher_id: 3063401073142647
  },
  {
    is_moriodotimeni: false,
    amka: 14116315132,
    moria: 947,
    voucher_id: 3212795682144990
  },
  {
    is_moriodotimeni: false,
    amka: 27082994606,
    moria: 207,
    voucher_id: 9259775212790904
  },
  {
    is_moriodotimeni: true,
    amka: 13733841872,
    moria: 266,
    voucher_id: 3989417516660794
  },
  {
    is_moriodotimeni: false,
    amka: 14057211597,
    moria: 387,
    voucher_id: 1245768745492863
  },
  {
    is_moriodotimeni: false,
    amka: 88178027765,
    moria: 249,
    voucher_id: 7604546709690510
  },
  {
    is_moriodotimeni: true,
    amka: 55411122799,
    moria: 110,
    voucher_id: 5743837745223764
  },
  {
    is_moriodotimeni: false,
    amka: 70921576505,
    moria: 479,
    voucher_id: 7857492477027936
  },
  {
    is_moriodotimeni: true,
    amka: 91331667970,
    moria: 49,
    voucher_id: 5440870076953392
  },
  {
    is_moriodotimeni: true,
    amka: 27082994606,
    moria: 405,
    voucher_id: 8585935201047904
  },
  {
    is_moriodotimeni: true,
    amka: 93583233108,
    moria: 624,
    voucher_id: 3929041211729291
  },
  {
    is_moriodotimeni: true,
    amka: 27082994606,
    moria: 383,
    voucher_id: 6846838348263288
  },
  {
    is_moriodotimeni: true,
    amka: 12970953161,
    moria: 666,
    voucher_id: 8286106029828114
  },
  {
    is_moriodotimeni: false,
    amka: 17044041240,
    moria: 816,
    voucher_id: 7037820443155774
  },
  {
    is_moriodotimeni: true,
    amka: 17044041240,
    moria: 534,
    voucher_id: 2100863821045815
  },
  {
    is_moriodotimeni: true,
    amka: 12970953161,
    moria: 312,
    voucher_id: 9108852007101354
  },
  {
    is_moriodotimeni: true,
    amka: 91331667970,
    moria: 691,
    voucher_id: 3775692010399154
  },
  {
    is_moriodotimeni: true,
    amka: 13733841872,
    moria: 971,
    voucher_id: 5841747220892044
  },
  {
    is_moriodotimeni: false,
    amka: 14057211597,
    moria: 488,
    voucher_id: 4645044075960148
  },
  {
    is_moriodotimeni: false,
    amka: 71695711918,
    moria: 898,
    voucher_id: 1633151935507973
  },
  {
    is_moriodotimeni: true,
    amka: 91331667970,
    moria: 886,
    voucher_id: 9309032491905070
  },
  {
    is_moriodotimeni: true,
    amka: 14057211597,
    moria: 83,
    voucher_id: 1776500947890739
  },
  {
    is_moriodotimeni: true,
    amka: 17044041240,
    moria: 651,
    voucher_id: 8063465058629942
  },
  {
    is_moriodotimeni: true,
    amka: 73122380299,
    moria: 398,
    voucher_id: 4379246595771213
  },
  {
    is_moriodotimeni: false,
    amka: 91331667970,
    moria: 163,
    voucher_id: 8424899992810592
  },
  {
    is_moriodotimeni: true,
    amka: 70921576505,
    moria: 666,
    voucher_id: 5008052971218028
  },
  {
    is_moriodotimeni: true,
    amka: 13733841872,
    moria: 257,
    voucher_id: 8467025159358832
  },
  {
    is_moriodotimeni: true,
    amka: 73836324569,
    moria: 571,
    voucher_id: 8390701971574616
  },
  {
    is_moriodotimeni: true,
    amka: 73836324569,
    moria: 204,
    voucher_id: 4448902951409360
  },
  {
    is_moriodotimeni: false,
    amka: 93583233108,
    moria: 198,
    voucher_id: 8396496577108734
  },
  {
    is_moriodotimeni: true,
    amka: 14057211597,
    moria: 71,
    voucher_id: 1404218899819483
  },
  {
    is_moriodotimeni: false,
    amka: 32871086029,
    moria: 305,
    voucher_id: 8204021576713892
  },
  {
    is_moriodotimeni: false,
    amka: 55411122799,
    moria: 808,
    voucher_id: 3576293228737459
  },
  {
    is_moriodotimeni: false,
    amka: 13733841872,
    moria: 943,
    voucher_id: 8117734284619344
  },
  {
    is_moriodotimeni: false,
    amka: 48879473402,
    moria: 266,
    voucher_id: 8188110758661204
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 412,
    voucher_id: 3329098368374120
  },
  {
    is_moriodotimeni: false,
    amka: 14057211597,
    moria: 621,
    voucher_id: 6439421482505702
  },
  {
    is_moriodotimeni: false,
    amka: 48879473402,
    moria: 571,
    voucher_id: 2743527963405466
  },
  {
    is_moriodotimeni: false,
    amka: 73836324569,
    moria: 936,
    voucher_id: 1808061759522450
  },
  {
    is_moriodotimeni: true,
    amka: 38664872110,
    moria: 196,
    voucher_id: 6001433333676324
  },
  {
    is_moriodotimeni: true,
    amka: 88178027765,
    moria: 400,
    voucher_id: 7782775057319538
  },
  {
    is_moriodotimeni: false,
    amka: 55411122799,
    moria: 230,
    voucher_id: 7460069629938160
  },
  {
    is_moriodotimeni: true,
    amka: 32871086029,
    moria: 291,
    voucher_id: 9478497613906476
  },
  {
    is_moriodotimeni: false,
    amka: 73836324569,
    moria: 165,
    voucher_id: 5312014178697985
  },
  {
    is_moriodotimeni: true,
    amka: 73836324569,
    moria: 737,
    voucher_id: 3890740259663989
  },
  {
    is_moriodotimeni: false,
    amka: 70921576505,
    moria: 628,
    voucher_id: 8375103557986188
  },
  {
    is_moriodotimeni: true,
    amka: 32871086029,
    moria: 267,
    voucher_id: 7521211570524146
  },
  {
    is_moriodotimeni: false,
    amka: 70921576505,
    moria: 210,
    voucher_id: 3998393843077029
  },
  {
    is_moriodotimeni: true,
    amka: 13733841872,
    moria: 654,
    voucher_id: 2611449239677594
  },
  {
    is_moriodotimeni: true,
    amka: 70921576505,
    moria: 602,
    voucher_id: 7274744607109608
  },
  {
    is_moriodotimeni: true,
    amka: 88178027765,
    moria: 203,
    voucher_id: 3129140884082559
  },
  {
    is_moriodotimeni: false,
    amka: 17044041240,
    moria: 847,
    voucher_id: 4254312826391482
  },
  {
    is_moriodotimeni: false,
    amka: 17044041240,
    moria: 850,
    voucher_id: 3883856873941970
  },
  {
    is_moriodotimeni: true,
    amka: 48879473402,
    moria: 891,
    voucher_id: 3566521913530941
  },
  {
    is_moriodotimeni: false,
    amka: 14057211597,
    moria: 354,
    voucher_id: 7860827649880624
  },
  {
    is_moriodotimeni: false,
    amka: 93583233108,
    moria: 707,
    voucher_id: 7894686876764530
  },
  {
    is_moriodotimeni: false,
    amka: 27082994606,
    moria: 63,
    voucher_id: 4435856936786536
  },
  {
    is_moriodotimeni: false,
    amka: 55411122799,
    moria: 192,
    voucher_id: 3310431958099343
  },
  {
    is_moriodotimeni: false,
    amka: 32871086029,
    moria: 578,
    voucher_id: 9855035364539510
  },
  {
    is_moriodotimeni: true,
    amka: 93583233108,
    moria: 385,
    voucher_id: 7162499071172010
  },
  {
    is_moriodotimeni: true,
    amka: 48879473402,
    moria: 976,
    voucher_id: 3643837253032387
  },
  {
    is_moriodotimeni: false,
    amka: 71695711918,
    moria: 382,
    voucher_id: 6059071396483508
  },
  {
    is_moriodotimeni: false,
    amka: 55411122799,
    moria: 712,
    voucher_id: 1701144863295353
  },
  {
    is_moriodotimeni: false,
    amka: 14116315132,
    moria: 828,
    voucher_id: 5002021487433292
  },
  {
    is_moriodotimeni: false,
    amka: 55411122799,
    moria: 499,
    voucher_id: 8601979429804226
  },
  {
    is_moriodotimeni: true,
    amka: 71695711918,
    moria: 178,
    voucher_id: 6811703274429138
  },
  {
    is_moriodotimeni: true,
    amka: 70921576505,
    moria: 770,
    voucher_id: 2911432303954891
  },
  {
    is_moriodotimeni: false,
    amka: 17044041240,
    moria: 23,
    voucher_id: 3206898887661278
  },
  {
    is_moriodotimeni: true,
    amka: 88178027765,
    moria: 877,
    voucher_id: 8254851965797662
  },
  {
    is_moriodotimeni: false,
    amka: 14057211597,
    moria: 833,
    voucher_id: 7179657371670352
  },
  {
    is_moriodotimeni: false,
    amka: 38664872110,
    moria: 577,
    voucher_id: 1991486732568587
  },
  {
    is_moriodotimeni: false,
    amka: 27082994606,
    moria: 154,
    voucher_id: 2901557066852446
  },
  {
    is_moriodotimeni: true,
    amka: 17044041240,
    moria: 116,
    voucher_id: 6506356700805686
  },
  {
    is_moriodotimeni: false,
    amka: 91331667970,
    moria: 60,
    voucher_id: 5143266157862701
  },
  {
    is_moriodotimeni: true,
    amka: 17044041240,
    moria: 640,
    voucher_id: 2535176695037276
  },
  {
    is_moriodotimeni: true,
    amka: 91331667970,
    moria: 988,
    voucher_id: 6627233560758696
  },
  {
    is_moriodotimeni: true,
    amka: 14116315132,
    moria: 860,
    voucher_id: 7935401429927750
  },
  {
    is_moriodotimeni: true,
    amka: 70921576505,
    moria: 97,
    voucher_id: 6222243204761104
  },
  {
    is_moriodotimeni: false,
    amka: 88178027765,
    moria: 799,
    voucher_id: 1066156096526847
  },
  {
    is_moriodotimeni: false,
    amka: 12970953161,
    moria: 389,
    voucher_id: 6353677976729496
  },
  {
    is_moriodotimeni: false,
    amka: 93583233108,
    moria: 970,
    voucher_id: 4812927362431324
  },
  {
    is_moriodotimeni: false,
    amka: 27082994606,
    moria: 743,
    voucher_id: 5236831753445837
  },
  {
    is_moriodotimeni: true,
    amka: 91331667970,
    moria: 827,
    voucher_id: 8853100953561628
  },
  {
    is_moriodotimeni: false,
    amka: 14057211597,
    moria: 646,
    voucher_id: 5480715473688548
  },
  {
    is_moriodotimeni: false,
    amka: 73836324569,
    moria: 977,
    voucher_id: 9363766915099106
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 157,
    voucher_id: 6319506688171124
  },
  {
    is_moriodotimeni: true,
    amka: 14057211597,
    moria: 67,
    voucher_id: 4917798842430842
  },
  {
    is_moriodotimeni: true,
    amka: 14116315132,
    moria: 126,
    voucher_id: 6279995168675582
  },
  {
    is_moriodotimeni: false,
    amka: 17044041240,
    moria: 289,
    voucher_id: 8602727341118546
  },
  {
    is_moriodotimeni: false,
    amka: 12970953161,
    moria: 24,
    voucher_id: 9000001222390728
  },
  {
    is_moriodotimeni: false,
    amka: 93583233108,
    moria: 341,
    voucher_id: 6577180198793568
  },
  {
    is_moriodotimeni: false,
    amka: 71695711918,
    moria: 329,
    voucher_id: 9648764971491372
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 68,
    voucher_id: 4727342762163908
  },
  {
    is_moriodotimeni: true,
    amka: 12970953161,
    moria: 882,
    voucher_id: 5885433464404488
  },
  {
    is_moriodotimeni: false,
    amka: 48879473402,
    moria: 168,
    voucher_id: 9426705355493698
  },
  {
    is_moriodotimeni: true,
    amka: 13733841872,
    moria: 535,
    voucher_id: 7333937016677984
  },
  {
    is_moriodotimeni: true,
    amka: 12970953161,
    moria: 604,
    voucher_id: 9588435515032102
  },
  {
    is_moriodotimeni: false,
    amka: 55411122799,
    moria: 611,
    voucher_id: 6451925403901360
  },
  {
    is_moriodotimeni: false,
    amka: 71695711918,
    moria: 777,
    voucher_id: 4767715311752548
  },
  {
    is_moriodotimeni: false,
    amka: 32871086029,
    moria: 417,
    voucher_id: 5536075341793912
  },
  {
    is_moriodotimeni: true,
    amka: 55411122799,
    moria: 179,
    voucher_id: 9467434625990208
  },
  {
    is_moriodotimeni: false,
    amka: 55411122799,
    moria: 300,
    voucher_id: 5555313615934800
  },
  {
    is_moriodotimeni: true,
    amka: 48879473402,
    moria: 478,
    voucher_id: 1908300093447890
  },
  {
    is_moriodotimeni: true,
    amka: 14057211597,
    moria: 234,
    voucher_id: 9060520368612116
  },
  {
    is_moriodotimeni: false,
    amka: 12970953161,
    moria: 786,
    voucher_id: 6858356582157168
  },
  {
    is_moriodotimeni: false,
    amka: 70921576505,
    moria: 744,
    voucher_id: 6857148304314676
  },
  {
    is_moriodotimeni: false,
    amka: 71695711918,
    moria: 89,
    voucher_id: 3056286073443060
  },
  {
    is_moriodotimeni: true,
    amka: 12970953161,
    moria: 645,
    voucher_id: 6814509271586008
  },
  {
    is_moriodotimeni: false,
    amka: 73836324569,
    moria: 497,
    voucher_id: 9217129982432156
  },
  {
    is_moriodotimeni: false,
    amka: 14116315132,
    moria: 466,
    voucher_id: 8895805722912114
  },
  {
    is_moriodotimeni: true,
    amka: 38664872110,
    moria: 57,
    voucher_id: 3126004847075826
  },
  {
    is_moriodotimeni: true,
    amka: 38664872110,
    moria: 291,
    voucher_id: 8239178696194888
  },
  {
    is_moriodotimeni: false,
    amka: 91331667970,
    moria: 902,
    voucher_id: 7033619371527748
  },
  {
    is_moriodotimeni: true,
    amka: 93583233108,
    moria: 68,
    voucher_id: 6742682284565028
  },
  {
    is_moriodotimeni: false,
    amka: 91331667970,
    moria: 183,
    voucher_id: 8398518941878376
  },
  {
    is_moriodotimeni: false,
    amka: 32871086029,
    moria: 171,
    voucher_id: 2885878696920906
  },
  {
    is_moriodotimeni: false,
    amka: 14116315132,
    moria: 658,
    voucher_id: 3171593826445690
  },
  {
    is_moriodotimeni: true,
    amka: 27082994606,
    moria: 938,
    voucher_id: 7827924200877720
  },
  {
    is_moriodotimeni: true,
    amka: 73122380299,
    moria: 824,
    voucher_id: 6112380960431572
  },
  {
    is_moriodotimeni: false,
    amka: 14057211597,
    moria: 854,
    voucher_id: 4925933107835577
  },
  {
    is_moriodotimeni: false,
    amka: 93583233108,
    moria: 642,
    voucher_id: 3219427226910653
  },
  {
    is_moriodotimeni: false,
    amka: 27082994606,
    moria: 523,
    voucher_id: 4406176137195394
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 309,
    voucher_id: 8847487744834654
  },
  {
    is_moriodotimeni: true,
    amka: 13733841872,
    moria: 195,
    voucher_id: 3733788320376042
  },
  {
    is_moriodotimeni: false,
    amka: 71695711918,
    moria: 936,
    voucher_id: 9583715284257682
  },
  {
    is_moriodotimeni: true,
    amka: 27082994606,
    moria: 809,
    voucher_id: 6468316022331526
  },
  {
    is_moriodotimeni: true,
    amka: 27082994606,
    moria: 383,
    voucher_id: 9712721497806928
  },
  {
    is_moriodotimeni: true,
    amka: 27082994606,
    moria: 324,
    voucher_id: 8162341540192372
  },
  {
    is_moriodotimeni: false,
    amka: 38664872110,
    moria: 870,
    voucher_id: 9946419326770038
  },
  {
    is_moriodotimeni: false,
    amka: 73122380299,
    moria: 378,
    voucher_id: 1532570269435367
  },
  {
    is_moriodotimeni: true,
    amka: 14116315132,
    moria: 648,
    voucher_id: 1277344061664169
  },
  {
    is_moriodotimeni: false,
    amka: 38664872110,
    moria: 965,
    voucher_id: 4320207554264918
  },
  {
    is_moriodotimeni: false,
    amka: 88178027765,
    moria: 486,
    voucher_id: 1966344466854802
  },
  {
    is_moriodotimeni: false,
    amka: 17044041240,
    moria: 384,
    voucher_id: 1064199961279484
  }
];