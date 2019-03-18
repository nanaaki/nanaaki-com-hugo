buki = [
  {type:'none',
   code:'none',
   name:'未選択',
   bomb:'carling',
   spec:{damage:38, frame:5, range:1.5, charge_time:0, move:0, ink:0.8},
   special:{point:180, id:'none'},
   main_spec_up:{type:'damage', calc:function(gp){ return 1+0.25*(0.033*gp-0.00027*gp**2) }}
  },
  {type:'light',
   code:'bold',
   name:'ボールドマーカー',
   bomb:'carling',
   spec:{damage:38, frame:5, range:1.5, charge_time:0, move:0, ink:0.8},
   special:{point:160, id:'landing'},
   main_spec_up:{type:'damage', calc:function(gp){ return 1+0.25*(0.033*gp-0.00027*gp**2) }}
  },
  {type:'light',
   code:'bott',
   name:'ボトルガイザー',
   bomb:'carling',
   spec:{
     single:{damage:38, frame:8, range:3.1, charge_time:0, move:0, ink:2.5},
     auto:  {damage:30, frame:7, range:2.2, charge_time:0, move:0, ink:0.9}
   },
   special:{point:180, id:'hyper'},
   main_spec_up:{type:'damage', calc:{
     single:function(gp){ return 1+0.3*(0.033*gp-0.00027*gp**2)},
     auto:function(gp){ return 1+0.2*(0.033*gp-0.00027*gp**2)} }}
   },
   {type:'light',
    name:'プライムシューター',
    code:'prim',
    bomb:'point',
    spec:{damage:42, frame:8, range:3.1, charge_time:0, move:0, ink:2},
    special:{point:170, id:'rain'},
    main_spec_up:{type:'damage', calc:function(gp){ return 1+0.25*(0.033*gp-0.00027*gp**2) }}
   },
   {type:'light',
    code:'lree',
    name:'Lリールガン',
    bomb:'point',
    spec:{damage:29, frame:4, range:3.1, charge_time:0, move:0, ink:1},
    special:{point:170, id:'sphere'},
    main_spec_up:{type:'damage', calc:function(gp){ return 1+0.3*(0.033*gp-0.00027*gp**2) }}
   },
   {type:'light',
    code:'hree',
    name:'Hリールガン',
    bomb:'point',
    spec:{damage:41, frame:4, range:3.1, charge_time:0, move:0, ink:1},
    special:{point:170, id:'sphere'},
    main_spec_up:{type:'damage', calc:function(gp){ return 1+0.24*(0.033*gp-0.00027*gp**2) }}
   },
   {type:'light',
    code:'96ga',
    name:'96ガロン',
    bomb:'sprinkler',
    spec:{damage:62, frame:12, range:3.5, charge_time:0, move:0, ink:2.5},
    special:{point:190, id:'armor'},
    main_spec_up:{type:'damage', calc:function(gp){ return 1+0.25*(0.033*gp-0.00027*gp**2) }}
   },
   {type:'light',
    code:'shar',
    name:'シャープマーカー',
    bomb:'poison',
    spec:{damage:28, frame:5, range:2.4, charge_time:0, move:0, ink:0.8},
    special:{point:170, id:'jetpack'},
    main_spec_up:{type:'damage', calc:function(gp){ return 1+0.25*(0.033*gp-0.00027*gp**2) }}
   },
   {type:'light',
    code:'spat',
    name:'スパッタリー',
    bomb:'beacon',
    spec:{damage:36, frame:5, range:1.9, charge_time:0, move:0, ink:0.75},
    special:{point:180, id:'cuban_pitcher'},
    main_spec_up:{type:'damage', calc:function(gp){ return 1+0.2*(0.033*gp-0.00027*gp**2) }}
   },
   {type:'light',
    code:'quad',
    name:'クアドラホッパー',
    bomb:'robot',
    spec:{damage:28, frame:6, range:2.5, charge_time:0, move:0, ink:0.8},
    special:{point:190, id:'landing'},
    main_spec_up:{type:'damage', calc:function(gp){ return 1+0.2*(0.033*gp-0.00027*gp**2) }}
   },
   {type:'light',
    code:'kelv',
    name:'ケルビン525',
    bomb:'robot',
    spec:{
         normal:{damage:36,   frame:9, range:2.6, charge_time:0, move:0, ink:1.6},
         slide: {damage:52.5, frame:9, range:3.0, charge_time:0, move:0, ink:1.6}
    },
    special:{point:180, id:'jetpack'},
    main_spec_up:{type:'damage', calc:function(gp){ return 1+0.2*(0.033*gp-0.00027*gp**2) }}
   },
   {type:'light',
    code:'spma',
    name:'スプラマニューバー',
    bomb:'quick',
    spec:{damage:30,   frame:9, range:2.6, charge_time:0, move:0, ink:1.6},
    special:{point:180, id:'jetpack'},
    main_spec_up:{type:'damage', calc:function(gp){ return 1+0.2*(0.033*gp-0.00027*gp**2) }}
   },
   {type:'light',
    code:'dual',
    name:'デュアルスイーパー',
    bomb:'point',
    spec:{damage:28,   frame:6, range:3.1, charge_time:0, move:0, ink:1.2},
    special:{point:190, id:'multi'},
    main_spec_up:{type:'damage', calc:function(gp){ return 1+0.2*(0.033*gp-0.00027*gp**2) }}
   },
   {type:'light',
    code:'kuge',
    name:'クーゲルシュライバー',
    bomb:'poison',
    spec:{
      ch: {damage:28,   frame:3, range:2.2, charge_time:50, move:0.5, ink:0.3125},
      fc: {damage:30,   frame:6, range:4.8, charge_time:100, move:0.5, ink:0.625}
    },
    special:{point:200, id:'jetpack'},
    main_spec_up:{type:'damage', calc:function(gp){ return 1+0.1*(0.033*gp-0.00027*gp**2) }}
   },
   {type:'heavy',
    code:'hydr',
    name:'ハイドラント',
    bomb:'robot',
    spec:{
      ch: {damage:32,   frame:4, range:4.8, charge_time:120, move:0.6, ink:0.57},
      fc: {damage:40,   frame:4, range:4.8, charge_time:150, move:0.6, ink:0.57},
      curve: {damage:16,frame:4, range:4.8, charge_time:120, move:0.6, ink:0.57}
    },
    special:{point:170, id:'landing'},
    main_spec_up:{type:'damage', calc:{
      ch: function(gp) {return 1+0.1*(0.033*gp-0.00027*gp**2)},
      fc: function(gp) {return 1+0.2*(0.033*gp-0.00027*gp**2)},
      curve: function(gp) {return 1+0.099*(0.033*gp-0.00027*gp**2)}
    }}
   },
   {type:'light',
    code:'soyc',
    name:'ソイチューバー',
    bomb:'cuban',
    spec:{
      min: {damage:40,  frame:4, range:4.2, charge_time:0,  move:0.3, ink:15},
      max: {damage:140, frame:4, range:4.2, charge_time:75, move:0.3, ink:15},
    },
    special:{point:160, id:'landing'},
    main_spec_up:{type:'damage', calc:function(gp){return 1+0.15*(0.033*gp-0.00027*gp**2)}}
   },
   {type:'light',
    code:'14sk',
    name:'14式竹筒銃',
    bomb:'carling',
    spec:{
      min: {damage:30, frame:4, range:4.3, charge_time:0,  move:0.6, ink:7},
      max: {damage:85, frame:4, range:4.3, charge_time:20, move:0.6, ink:7},
    },
    special:{point:180, id:'multi'},
    main_spec_up:{type:'damage', calc:function(gp){return 1+0.2*(0.033*gp-0.00027*gp**2)}}
   },
   {type:'light',
    code:'spch',
    name:'スプラチャージャー',
    bomb:'splash',
    spec:{
      min: {damage:40, frame:4, range:4.3, charge_time:0,   move:0.2, ink:18},
      max: {damage:160, frame:4, range:4.3, charge_time:60, move:0.2, ink:18},
    },
    special:{point:210, id:'hyper'},
    main_spec_up:{type:'damage', calc:function(gp){return 1+0.2*(0.033*gp-0.00027*gp**2)}}
   },
   {type:'light',
    code:'carb',
    name:'カーボンローラー',
    bomb:'robot',
    spec:{
      vert: {damage:120, frame:4, range:1.3, charge_time:0, move:0, ink:4.5},
      hori: {damage:100, frame:4, range:0.9, charge_time:0, move:0, ink:4.5},
      crus: {damage:70,  frame:4, range:0, charge_time:0, move:0, ink:4.5},
    },
    special:{point:160, id:'rain'},
    main_spec_up:{type:'damage', calc:function(gp){return 1+0.15*(0.033*gp-0.00027*gp**2)}}
   },
   {type:'light',
    code:'dyna',
    name:'ダイナモローラー',
    bomb:'trap',
    spec:{
      vert: {damage:180, frame:4, range:2.5, charge_time:0, move:0, ink:18},
      hori: {damage:180, frame:4, range:2, charge_time:0, move:0, ink:18},
      crus: {damage:70,  frame:4, range:0,   charge_time:0, move:0, ink:18},
    },
    special:{point:180, id:'hyper'},
    main_spec_up:{type:'damage', calc:function(gp){return 1+0.15*(0.033*gp-0.00027*gp**2)}}
   },
   {type:'light',
    code:'spro',
    name:'スプラローラー',
    bomb:'carling',
    spec:{
      vert: {damage:150,  frame:4, range:1.6, charge_time:0, move:0, ink:9},
      hori: {damage:150,  frame:4, range:1.4, charge_time:0, move:0, ink:9},
      crus: {damage:125,  frame:4, range:0,   charge_time:0, move:0, ink:9},
    },
    special:{point:180, id:'landing'},
    main_spec_up:{type:'damage', calc:function(gp){return 1+0.15*(0.033*gp-0.00027*gp**2)**0.5849625007}}
   },
   {type:'light',
    code:'vari',
    name:'ヴァリアブルローラー',
    bomb:'shield',
    spec:{
      vert: {damage:150, frame:4, range:2, charge_time:0, move:0, ink:18},
      hori: {damage:150, frame:4, range:1.4, charge_time:0, move:0, ink:18},
      crus: {damage:125, frame:4, range:0,   charge_time:0, move:0, ink:18},
    },
    special:{point:180, id:'splash_pitcher'},
    main_spec_up:{type:'damage', calc:function(gp){return 1+0.15*(0.033*gp-0.00027*gp**2)**0.5849625007}}
   },
];

var app = new Vue({
  el: '#app',
  data: {
    version: 'v0.0.5.9',
    base_url: "https://nanaaki.com/ika/?",
    message: location.search,
    buki_list: buki,
    buki: buki[0],
    boost: {on:false, boost_gps: {}, name:""},
    equi:{
      head:{main:{code:'F', name:'-'},sub:[{code:'F', name:'-'},{code:'F', name:'-'},{code:'F', name:'-'}]},
      body:{main:{code:'F', name:'-'},sub:[{code:'F', name:'-'},{code:'F', name:'-'},{code:'F', name:'-'}]},
      leg:{main:{code:'F', name:'-'},sub:[{code:'F', name:'-'},{code:'F', name:'-'},{code:'F', name:'-'}]},
    },
    gps:{},
    back: function(gp){ return (150+(90-60*(0.033*(gp)-0.00027*(gp)**2))+(270-180*(0.033*(gp)-0.00027*(gp)**2)))/60},
    sjump:{
      wait:function(gp){ return 80-(60*(0.033*gp-0.00027*gp**2)**(0.4150374993))},
      jump:function(gp){ return 138-41.4*(0.033*gp-0.00027*gp**2)**(2.860596943)}
    },
    enemy_ink: {
      slip:function(gp){ return 0.3-0.15*(0.033*gp-0.00027*gp**2) },
      cap: function(gp){ return 40-20*(0.033*gp-0.00027*gp**2)},
      move:function(gp){ return 0.24+0.48*(0.033*gp-0.00027*gp**2)}
    },
    bomb_guard:{
      special:function(gp){ return 35*(0.033*gp-0.00027*gp**2)},
      40:function(gp){ return 40*(0.033*gp-0.00027*gp**2)},
      50:function(gp){ return 50*(0.033*gp-0.00027*gp**2)}
    },
    gear: [
            {code:'F', name:'-', image:'./img/F.png',
             calc:function(gp){return gp}},
            {code:'1', name:'メインインク性能', image:'./img/1.png',
             calc:function(gp){return {'mid' :1-0.45*(0.033*gp-0.00027*gp**2), 'high':1-0.5*(0.033*gp-0.00027*gp**2)**0.7369655942}} },
            {code:'2', name:'サブインク性能', image:'./img/2.png',
             calc:function(gp){
               return {
                 'jb' : {'ink':75.0, 'ratio' : (1-0.4*(0.033*gp-0.00027*gp**2)), 'name':"ジャンプビーコン"},
                 'sp' : {'ink':60.0, 'ratio' : (1-0.4*(0.033*gp-0.00027*gp**2)), 'name':"スプリンクラー・トラップ"},
                 'se' : {'ink':55.0, 'ratio' : (1-0.4*(0.033*gp-0.00027*gp**2)), 'name':"センサー"},
                 'bo' : {'ink':70.0, 'ratio' : (1-0.35*(0.033*gp-0.00027*gp**2)),'name':"各種ボム"},
                 'sh' : {'ink':60.0, 'ratio' : (1-0.35*(0.033*gp-0.00027*gp**2)),'name':"シールド"},
                 'ro' : {'ink':55.0, 'ratio' : (1-0.3*(0.033*gp-0.00027*gp**2)), 'name':"ロボット"},
                 'mi' : {'ink':60.0, 'ratio' : (1-0.3*(0.033*gp-0.00027*gp**2)), 'name':"ミスト・タンサン"},
                 'qu' : {'ink':40.0, 'ratio' : (1-0.2*(0.033*gp-0.00027*gp**2)), 'name':"クイック"}
               }
             }
            },
            {code:'3', name:'インク回復力', image:'./img/3.png',
             calc: function(gp){ return {'hito':600-380*(0.033*gp-0.00027*gp**2), 'ika':180-63*(0.033*gp-0.00027*gp**2)}} },
            {code:'4', name:'メイン性能', image:'./img/4.png',
             calc: undefined },
            {code:'5', name:'ヒト速', image:'./img/5.png',
             calc:function(gp){ return {'light' : 1.04+0.4 *(0.033*gp-0.00027*gp**2),
                                       'middle' : 0.96+0.48*(0.033*gp-0.00027*gp**2),
                                       'heavy'  : 0.88+0.56*(0.033*gp-0.00027*gp**2)} }
            },
            {code:'6', name:'イカ速', image:'./img/6.png',
             calc:function(gp){ return {'light' : 2.016+0.384*(0.033*gp-0.00027*gp**2),
                                       'middle' : 1.92 +0.48 *(0.033*gp-0.00027*gp**2),
                                       'heavy'  : 1.728+0.672*(0.033*gp-0.00027*gp**2)} }
            },
            {code:'7', name:'スペシャル増加', image:'./img/7.png',
             calc:function(gp){ return (1+((0.99 * gp)-(0.09*gp)**2)/100) }},
            {code:'8', name:'スペシャル減少軽減', image:'./img/8.png',
             calc:function(gp){ return (50-50*((0.033*gp)-0.00027*gp**2)**(0.7369655942))/100 }},
            {code:'9', name:'スペシャル性能', image:'./img/9.png',
             calc: undefined },
            {code:'A', name:'復活時間短縮', image:'./img/A.png',
             calc: function(gp){ return 150+(90-60*(0.033*(gp)-0.00027*(gp)**2))+(270-180*(0.033*(gp)-0.00027*(gp)**2)) }},
            {code:'B', name:'スーパージャンプ時間短縮', image:'./img/B.png',
             calc: function(gp){ return　{
               'wait': 80-(60*(0.033*gp-0.00027*gp)**(0.4150374993)),
               'jump' : 138-41.4*(0.033*gp-0.00027*gp**2)**(2.860596943)} }
            },
            {code:'C', name:'サブ性能', image:'./img/C.png',
             calc: undefined },
            {code:'D', name:'敵インク軽減', image:'./img/D.png',
             calc: function(gp){ return {
               'slip': Math.floor((0.3-0.15*(0.033*gp-0.00027*gp**2))*10)/10,
               'cap' : 40-20*(0.033*gp-0.00027*gp**2),
               'no_damage' : (39*((0.033*gp-0.00027*gp**2)**0.5849625007)),
               'hito': 0.24+0.48*(0.033*gp-0.00027*gp**2)}}},
            {code:'E', name:'爆風ダメージ軽減', image:'./img/E.png',
             calc: function(gp){ return {
               'special' : ((0.033*gp-0.00027*gp**2)*35)/100,
               'quick' : ((0.033*gp-0.00027*gp**2)*40)/100,
               'bomb' : ((0.033*gp-0.00027*gp**2)*50)/100}
            }},
            {code:'Q', name:'スタートダッシュ', image:'./img/Q.png',
             calc: function(){return {'5':30, '6':30, 'D':30}} },
            {code:'R', name:'ラストスパート', image:'./img/R.png',
             calc: function(){return {'1':24, '2':24, '3':24}} },
            {code:'S', name:'逆境強化', image:'./img/S.png',
             calc: function(gp){ return 0.036 }},
            {code:'T', name:'カムバック', image:'./img/T.png',
             calc: function(){return {'1':10, '2':10, '5': 10, '6':10, '7':10}} },
            {code:'U', name:'イカ忍者', image:'./img/U.png',
             calc: undefined },
            {code:'V', name:'リベンジ', image:'./img/V.png',
             calc: undefined },
            {code:'W', name:'復活ペナルティ', image:'./img/W.png',
             calc: undefined },
            {code:'X', name:'ステルスジャンプ', image:'./img/X.png',
             calc: undefined },
            {code:'Y', name:'対物攻撃力アップ', image:'./img/Y.png',
             calc: function(gp){ return {'hoko':1.1, 'rail': 1.15, 'shield': 1.25, 'bubble': 1.3, 'armor': 3, 'beacon': 10} }},
            {code:'Z', name:'受け身術', image:'./img/Z.png',
             calc: undefined }
          ]
  },
  computed: {
    exportEqui: function(){
      var tmp = this.equi.head.main.code + this.equi.head.sub[0].code + this.equi.head.sub[1].code + this.equi.head.sub[2].code;
      tmp    += ("-" + this.equi.body.main.code + this.equi.body.sub[0].code + this.equi.body.sub[1].code + this.equi.body.sub[2].code);
      tmp    += ("-" + this.equi.leg.main.code + this.equi.leg.sub[0].code + this.equi.leg.sub[1].code + this.equi.leg.sub[2].code);
      return this.base_url+tmp+"-"+this.buki.code;
    },
    exportTweetCard: function(){
      var tmp = this.equi.head.main.code + this.equi.head.sub[0].code + this.equi.head.sub[1].code + this.equi.head.sub[2].code;
      tmp    += ("-" + this.equi.body.main.code + this.equi.body.sub[0].code + this.equi.body.sub[1].code + this.equi.body.sub[2].code);
      tmp    += ("-" + this.equi.leg.main.code + this.equi.leg.sub[0].code + this.equi.leg.sub[1].code + this.equi.leg.sub[2].code);
      return "https://us-central1-nanadon-213503.cloudfunctions.net/generate_gps_image?g="+tmp+"&v=0.02";
    },
    exportTweet: function(){
      var tmp = "http://twitter.com/share?"+ encodeURI("text=&hashtags=splatoon_gear&url=") + encodeURIComponent(this.exportEqui);
      return tmp;
    },
    exportGps: function(){
      var res = "ギアパワー(57表記):";
      var tt = this;
      Object.keys(this.gps).forEach(function(key){
        res += tt.getGear(key).name+"="+tt.gps[key]+"/";
      });
      return res;
    },
    styles: function (){
      var ink_ika = this.getStatus("3").ika/60*1000+"ms";
      var ink_hito = this.getStatus("3").hito/60*1000+"ms";
      var buki_ink = this.getStatus("1");
      var move_hito = (4*(50/this.getStatus("5").middle)/60)*1000+"ms";
      var move_ika = (4*(50/this.getStatus("6").middle)/60)*1000+"ms";
      var special_ink = this.getStatus("7");

      return {
        '--main-ink-ika' : ink_ika,
        '--main-ink-hito': ink_hito,
        '--move-hito' : move_hito,
        '--move-ika' : move_ika,
        '--move-aite' : ((50/this.getStatus("D").hito)/60*3)*1000+"ms",
        '--slip-damege-cap' : 100*(this.getStatus("D").cap/100)+"%",
        '--slip-damege-sec' : ((this.getStatus("D").cap/this.getStatus("D").slip)/60)*1000+"ms",
        '--respone-count' : this.getStatus("A")/60+"s",
        '--jump-wait-count': (this.getStatus("B").wait/60)*4+"s",
        '--jump-jump-count': (this.getStatus("B").jump/60)*4+"s",
        '--jump-sum': (this.getStatus("B").wait/60+this.getStatus("B").jump/60)*1000+"ms",
        '--jump-wait-par': this.getFloor( this.getStatus("B").wait/(this.getStatus("B").wait+this.getStatus("B").jump) * 100)+"%",
        '--ink-buki-mid-par' : (buki_ink.mid*100)+"%",
        '--ink-buki-mid-content' : "\""+this.getFloor(buki_ink.mid*100)+"%\"",
        '--ink-buki-high-par' : (buki_ink.high*100)+"%",
        '--ink-buki-high-content' : "\""+this.getFloor(buki_ink.high*100)+"%\"",
        '--special-ink-par': 100*((this.buki.special.point/special_ink)/this.buki.special.point)+"%",
        '--special-ink-down-par': 100*(1-this.getStatus("8"))+"%"
      };
    }
  },
  watch: {
    equi: {
      handler: function(val,old){
        this.gps = {};
        var tmp = {};
        if(val.head.main.code == 'Q' || val.head.main.code == 'R' || val.head.main.code == 'T' ){
          this.boost.boost_gps = val.head.main.calc();
          this.boost.name = val.head.main.name;
          this.boost.on = false;
        }else{
          this.boost.boost_gps = {};
          this.boost.name = "";
          this.boost.on = false;
        }
        tmp[val.head.main.code] ? tmp[val.head.main.code] += 10 : tmp[val.head.main.code] = 10;
        tmp[val.body.main.code] ? tmp[val.body.main.code] += 10 : tmp[val.body.main.code] = 10;
        tmp[val.leg.main.code]  ? tmp[val.leg.main.code]  += 10 : tmp[val.leg.main.code]  = 10;
        val.head.sub.map(function(sub_val){
          tmp[sub_val.code] ? tmp[sub_val.code] += 3 : tmp[sub_val.code] = 3;
        });
        val.body.sub.map(function(sub_val){
          tmp[sub_val.code] ? tmp[sub_val.code] += 3 : tmp[sub_val.code] = 3;
        });
        val.leg.sub.map(function(sub_val){
          tmp[sub_val.code] ? tmp[sub_val.code] += 3 : tmp[sub_val.code] = 3;
        });
        var tt = this;
        Object.keys(tmp).forEach(function(key){
          tt.$set(tt.gps, (key ? key : 'F'), tmp[key]);
        });
      },
      deep: true
    },
    boost: {
      handler: function(val,old){
        if(val.name != "" && val.on){
          var tt = this;
          Object.keys(val.boost_gps).forEach(function(key){
            tt.$set(tt.gps, key, tt.boost.boost_gps[key]+(tt.gps[key] ? tt.gps[key] : 0));
          });
        }
        if(val.name == "" || val.on == false){
          this.gps = {};
          var tmp = {};
          if(this.equi.head.main.code == 'Q' || this.equi.head.main.code == 'R' || this.equi.head.main.code == 'T' ){
            //this.boost.boost_gps = this.equi.head.main.calc();
            //this.boost.name = this.equi.head.main.name;
            //this.boost.on = false;
          }else{
            //this.boost.boost_gps = {};
            //this.boost.name = "";
            //this.boost.on = false;
          }
          tmp[this.equi.head.main.code] ? tmp[this.equi.head.main.code] += 10 : tmp[this.equi.head.main.code] = 10;
          tmp[this.equi.body.main.code] ? tmp[this.equi.body.main.code] += 10 : tmp[this.equi.body.main.code] = 10;
          tmp[this.equi.leg.main.code]  ? tmp[this.equi.leg.main.code]  += 10 : tmp[this.equi.leg.main.code]  = 10;
          this.equi.head.sub.map(function(sub_val){
            tmp[sub_val.code] ? tmp[sub_val.code] += 3 : tmp[sub_val.code] = 3;
          });
          this.equi.body.sub.map(function(sub_val){
            tmp[sub_val.code] ? tmp[sub_val.code] += 3 : tmp[sub_val.code] = 3;
          });
          this.equi.leg.sub.map(function(sub_val){
            tmp[sub_val.code] ? tmp[sub_val.code] += 3 : tmp[sub_val.code] = 3;
          });
          var tt = this;
          Object.keys(tmp).forEach(function(key){
            tt.$set(tt.gps, (key ? key : 'F'), tmp[key]);
          });
        }
      },
      deep: true
    }
  },
  methods: {
    convert_damage_cap: function(damage,calc,gp){
      if(Math.floor(100/(calc(gp)*damage+0.1)) != Math.floor(100/damage) && damage < 100){
        return this.getFloor(100/(Math.floor(100/damage))-0.0001)+"(疑似"+(Math.floor(100/damage))+"確)";
      }else{
        return this.getFloor(calc(gp)*damage);
      }
    },
    view_spec: function(buki,gp){
      res = [];
      if('min' in buki.spec){
        res.push("最小チャージ" + this.convert_damage_cap(buki.spec.min.damage, buki.main_spec_up.calc, gp) + "ダメージ");
        res.push("最大チャージ" + this.convert_damage_cap(buki.spec.max.damage, buki.main_spec_up.calc, gp) + "ダメージ");
        return res;
      }
      if('vert' in buki.spec){
        res.push("縦振り" + this.convert_damage_cap(buki.spec.vert.damage, buki.main_spec_up.calc,gp) + "ダメージ");
        res.push("横振り" + this.convert_damage_cap(buki.spec.hori.damage, buki.main_spec_up.calc,gp) + "ダメージ");
        res.push("轢き" + this.convert_damage_cap(buki.spec.crus.damage,   buki.main_spec_up.calc,gp) + "ダメージ");
        return res;
      }
      if('single' in buki.spec){
        res.push("単発" + this.convert_damage_cap(buki.spec.single.damage, buki.main_spec_up.calc.single, gp) + "ダメージ");
        res.push("連射" + this.convert_damage_cap(buki.spec.auto.damage, buki.main_spec_up.calc.auto, gp) + "ダメージ");
        return res;
      }
      if('normal' in buki.spec){
        res.push("通常" + this.convert_damage_cap(buki.spec.normal.damage, buki.main_spec_up.calc, gp) + "ダメージ");
        res.push("スライド後" + this.convert_damage_cap(buki.spec.slide.damage, buki.main_spec_up.calc, gp) + "ダメージ");
        return res;
      }
      if('curve' in buki.spec){
        res.push("フルチャージ" + this.convert_damage_cap(buki.spec.fc.damage,buki.main_spec_up.calc.fc,gp) + "ダメージ");
        res.push("半チャージ"   + this.convert_damage_cap(buki.spec.ch.damage,buki.main_spec_up.calc.ch,gp) + "ダメージ");
        res.push("曲射"        + this.convert_damage_cap(buki.spec.curve.damage,buki.main_spec_up.calc.curve,gp) + "ダメージ");
        return res;
      }
      if('fc' in buki.spec){
        res.push("フルチャージ" + this.convert_damage_cap(buki.spec.fc.damage,buki.main_spec_up.calc.fc,gp) + "ダメージ");
        res.push("半チャージ"   + this.convert_damage_cap(buki.spec.ch.damage,buki.main_spec_up.calc.ch,gp) + "ダメージ");
        return res;
      }
      return [this.convert_damage_cap(buki.spec.damage,buki.main_spec_up.calc,gp) + "ダメージ"]
    },
    copy_url: function(){
      var tmp = document.querySelector('#copy_data');
      tmp.select();
      document.execCommand('copy');
    },
    bombStyle: function(val,color, type){
      return {
        display: 'block',
        'background-color': color,
        height: '25px',
        width: type == 'base' ? 100*(val.ink/100)+'%' : 100*val.ratio+'%',
      }
    },
    getFloor: function(n){return Math.floor(n*100)/100;},
    getGear: function(code){
      return this.gear.filter(function(val){return val.code == code})[0];
    },
    getStatus: function(code){
      return this.getGear(code).calc ? this.getGear(code).calc(this.gps[code] ? this.gps[code] : 0) : undefined;
    },
    convertName: function(s_name){
      var l_name = s_name;
      this.gear.forEach(function(val){
        l_name = l_name.replace(new RegExp(val.code,"g"),val.name);
      });
      return l_name;
    },
    importEqui: function(s_name){
      var codes = s_name.split('-');
      var head = codes[0].split("");
      var body = codes[1].split("");
      var leg  = codes[2].split("");
      var buki = codes[3];
      var tt = this;

      this.equi.head.main = this.gear.filter(function(val){return val.code == head[0]})[0];
      this.equi.head.sub  = head.slice(1).map(function(val){
        return tt.gear.filter(function(fval){return fval.code == val})[0];
      });

      this.equi.body.main = this.gear.filter(function(val){return val.code == body[0]})[0];
      this.equi.body.sub  = body.slice(1).map(function(val){
        return tt.gear.filter(function(fval){return fval.code == val})[0];
      });

      this.equi.leg.main  = this.gear.filter(function(val){return val.code == leg[0]})[0];
      this.equi.leg.sub   = leg.slice(1).map(function(val){
        return tt.gear.filter(function(fval){return fval.code == val})[0]
      });
      this.buki = this.buki_list.filter(function(val){return val.code == buki})[0];
    }
  }
})

window.onload = function(){
  app.message = app.convertName(location.search.substr(1));
  app.importEqui(location.search.substr(1));
}
