var app = new Vue({
  el: '#app',
  data: {
    base_url: "https://nanaaki.com/ika/?",
    message: location.search,
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
      var tmp = this.equi.head.main.code + this.equi.body.sub[0].code + this.equi.body.sub[1].code + this.equi.body.sub[2].code;
      tmp    += ("-" + this.equi.body.main.code + this.equi.body.sub[0].code + this.equi.body.sub[1].code + this.equi.body.sub[2].code);
      tmp    += ("-" + this.equi.leg.main.code + this.equi.leg.sub[0].code + this.equi.leg.sub[1].code + this.equi.leg.sub[2].code);
      return this.base_url+tmp;
    },
    exportTweet: function(){
      var tmp = "http://twitter.com/share?"+ encodeURI("text=好きな文章を入れてね &hashtags=splatoon_gear&url=") + encodeURIComponent(this.exportEqui);
      return tmp;
    },
    exportGps: function(){
      var res = "";
      var tt = this;
      Object.keys(app.gps).forEach(function(key){
        res += "<img src=\""+tt.base_url.slice(0,-2)+tt.getGear(key).image.slice(1)+"\" /> - " + tt.gps[key] +"<br/>";
      });
      return res;
    },
    styles: function (){
      var ink_ika = this.getStatus("3").ika/60*1000+"ms";
      var ink_hito = this.getStatus("3").hito/60*1000+"ms";
      var buki_ink = this.getStatus("1");
      var move_hito = (3*(50/this.getStatus("5").middle)/60)*1000+"ms";
      var move_ika = (3*(50/this.getStatus("6").middle)/60)*1000+"ms";
      var special_ink = this.getStatus("7");

      return {
        '--main-ink-ika' : ink_ika,
        '--main-ink-hito': ink_hito,
        '--move-hito' : move_hito,
        '--move-ika' : move_ika,
        '--move-aite' : ((50/this.getStatus("D").hito)/60*3)*1000+"ms",
        '--slip-damege-cap' : 150*(this.getStatus("D").cap/100)+"px",
        '--slip-damege-sec' : ((this.getStatus("D").cap/this.getStatus("D").slip)/60)*1000+"ms",
        '--respone-count' : this.getStatus("A")/60+"s",
        '--jump-wait-count': (this.getStatus("B").wait/60)*3+"s",
        '--jump-jump-count': (this.getStatus("B").jump/60)*3+"s",
        '--jump-sum': (this.getStatus("B").wait/60+this.getStatus("B").jump/60)*1000+"ms",
        '--jump-wait-px': this.getFloor(150*(this.getStatus("B").wait/(this.getStatus("B").wait+this.getStatus("B").jump))*2)+"px",
        '--ink-buki-mid-width' : (buki_ink.mid*150)+"px",
        '--ink-buki-mid-content' : "\""+this.getFloor(buki_ink.mid*100)+"%\"",
        '--ink-buki-high-width' : (buki_ink.high*150)+"px",
        '--ink-buki-high-content' : "\""+this.getFloor(buki_ink.high*100)+"%\"",
        '--special-ink-width': 150*((180/special_ink)/180)+"px",
        '--special-ink-down-width': 150*(1-this.getStatus("8"))+"px"
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
        width: type == 'base' ? 150*(val.ink/100)+'px' : 150*((val.ink*val.ratio)/100)+'px',
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
    }
  }
})

window.onload = function(){
  app.message = app.convertName(location.search.substr(1));
  app.importEqui(location.search.substr(1));
}
