// store.js
import { reactive } from 'vue'

export const store = reactive({
  rollCount: 0,
  characters: [],
  team1: [],
  team2: [],
  initialize() {
    this.characters = [
      { name: "Albedo", img: "albedo.png" },
      { name: "Alhaitham", img: "alhaitham.png" },
      { name: "Aloy", img: "aloy.png" },
      { name: "Amber", img: "amber.png" },
      { name: "Arataki Itto", img: "itto.png" },
      { name: "Baizhu", img: "baizhu.png" },
      { name: "Barbara", img: "barbara.png" },
      { name: "Beidou", img: "beidou.png" },
      { name: "Bennett", img: "bennett.png" },
      { name: "Candace", img: "candace.png" },
      { name: "Chongyun", img: "chongyun.png" },
      { name: "Collei", img: "collei.png" },
      { name: "Cyno", img: "cyno.png" },
      { name: "Dehya", img: "dehya.png" },
      { name: "Diluc", img: "diluc.png" },
      { name: "Diona", img: "diona.png" },
      { name: "Dori", img: "dori.png" },
      { name: "Eula", img: "eula.png" },
      { name: "Faruzan", img: "faruzan.png" },
      { name: "Fischl", img: "fischl.png" },
      { name: "Ganyu", img: "ganyu.png" },
      { name: "Gorou", img: "gorou.png" },
      { name: "Hu Tao", img: "hutao.png" },
      { name: "Jean", img: "jean.png" },
      { name: "Kaedehara Kazuha", img: "kazuha.png" },
      { name: "Kaeya", img: "kaeya.png" },
      { name: "Kamisato Ayaka", img: "ayaka.png" },
      { name: "Kamisato Ayato", img: "ayato.png" },
      { name: "Kaveh", img: "kaveh.png" },
      { name: "Keqing", img: "keqing.png" },
      { name: "Kirara", img: "kirara.png" },
      { name: "Klee", img: "klee.png" },
      { name: "Kujou Sara", img: "sara.png" },
      { name: "Kuki Shinobu", img: "kuki.png" },
      { name: "Layla", img: "layla.png" },
      { name: "Lisa", img: "lisa.png" },
      { name: "Mika", img: "mika.png" },
      { name: "Mona", img: "mona.png" },
      { name: "Nahida", img: "nahida.png" },
      { name: "Nilou", img: "nilou.png" },
      { name: "Ningguang", img: "ningguang.png" },
      { name: "Noelle", img: "noelle.png" },
      { name: "Qiqi", img: "qiqi.png" },
      { name: "Raiden Shogun", img: "raiden.png" },
      { name: "Razor", img: "razor.png" },
      { name: "Rosaria", img: "rosaria.png" },
      { name: "Sangonomiya Kokomi", img: "kokomi.png" },
      { name: "Sayu", img: "sayu.png" },
      { name: "Shenhe", img: "shenhe.png" },
      { name: "Shikanoin Heizou", img: "heizou.png" },
      { name: "Sucrose", img: "sucrose.png" },
      { name: "Tartaglia", img: "tartaglia.png" },
      { name: "Thoma", img: "thoma.png" },
      { name: "Tighnari", img: "tighnari.png" },
      { name: "Traveler", img: "traveler_male.png" },
      { name: "Venti", img: "venti.png" },
      { name: "Wanderer", img: "wanderer.png" },
      { name: "Xiangling", img: "xiangling.png" },
      { name: "Xiao", img: "xiao.png" },
      { name: "Xingqiu", img: "xingqiu.png" },
      { name: "Xinyan", img: "xinyan.png" },
      { name: "Yae Miko", img: "yae.png" },
      { name: "Yanfei", img: "yanfei.png" },
      { name: "Yaoyao", img: "yaoyao.png" },
      { name: "Yelan", img: "yelan.png" },
      { name: "Yoimiya", img: "yoimiya.png" },
      { name: "Yun Jin", img: "yunjin.png" },
      { name: "Zhongli", img: "zhongli.png" },
    ];
  },
  fullRoll() {
    const shuffle = (array) => { 
      for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      } 
      return array; 
    }; 

    const shuffled = shuffle(this.characters)
    this.team1 = shuffled.slice(0,4)
    this.team2 = shuffled.slice(5,9)

    this.rollCount++
  },
  singleRoll(team, position) {
    const shuffle = (array) => { 
      for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      } 
      return array; 
    }; 

    let chars = this.characters.filter((c) => { return !this.team1.includes(c) && !this.team2.includes(c) })
    let newRoll = shuffle(chars)[0]

    if (team == 1) {
      this.team1.splice(position, 1, newRoll)
    } else {
      this.team2.splice(position, 1, newRoll)
    }

    this.rollCount++
  }
})