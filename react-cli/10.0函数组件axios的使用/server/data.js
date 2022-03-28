const peoples = [
    {
    "name":"金庸",
    "img":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsmimg5.mingxing.com.disnn.com%2Fupload%2Fsmpic%2F2017%2F14902%2F20181031152356_56946.jpg&refer=http%3A%2F%2Fsmimg5.mingxing.com.disnn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641271676&t=63690ebba866f0781fd53ebe3ef62698",
    "introduction":"武侠小说界的泰山北斗,飞雪连天射白鹿,笑书神侠倚碧鸳,他的著作被网友们写成了一副对联."
    },
    {
    "name":"周星驰",
    "img":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbbsimg.feidee.com%2Fdata%2Fattachment%2Fforum%2F201310%2F18%2F083315hfix2uzru2d30vi3.jpg&refer=http%3A%2F%2Fbbsimg.feidee.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641271872&t=35dbfbff4d0c0a063af8660fc813c926",
    "introduction":"喜剧电影演员兼导演,开创了周氏喜剧流派,其90年代主演的电影大话西游,成为一代人的爱情经典!"
    },
    {
    "name":"刘德华",
    "img":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs16.sinaimg.cn%2Fmw690%2F0025gtrJzy7q0zAHmFhdf%26690&refer=http%3A%2F%2Fs16.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641272161&t=dc563e3b20577bd37259eeacad9b62b0",
    "introduction":"四大天王之一,德艺双馨的演员,随着岁月流逝,天王也老了!"
    },
    {
    "name":"许嵩",
    "img":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11617042734%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641272280&t=d34c2dab8bc9b13412a788db708571c8",
    "introduction":"原创型歌手,以青春校园类歌曲走红,经典歌曲有庐州月,玫瑰花的葬礼等."
    },
    {
    "name":"周杰伦",
    "img":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbaike.huishangbao.com%2Fuploads%2F201706%2F1498787422D8GHJwkD.jpg&refer=http%3A%2F%2Fbaike.huishangbao.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641272411&t=6de24f62d06921373c980010e54eabce",
    "introduction":"华语流行天王Jay,曾几何时大街小巷播放的都是杰伦的歌曲,一首夜曲治疗了多少少男少女不眠的心!"
    },
    {
    "name":"特朗普",
    "img":"https://img2.baidu.com/it/u=895542914,1442792353&fm=26&fmt=auto",
    "introduction":"前美国总统,因为其诙谐的语录,在facebook上收获了大批粉丝."
    },
    {
    "name":"任正非",
    "img":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload.taihainet.com%2F2019%2F0818%2F1566114912150.jpg&refer=http%3A%2F%2Fupload.taihainet.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641272753&t=1008833b7d5ee9bd6a4b76254e5db324",
    "introduction":"华为CEO,提倡狼道文化,在他建设下的华为技术引领全球,被国人称为民族的脊梁!"
    },
    {
    "name":"刘备",
    "img":"https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/baike/pic/item/359b033b5bb5c9ea7255d404db39b6003bf3b3b7.jpg",
    "introduction":"三国时期,蜀国君主,中山靖王刘胜之后,汉景帝阁下玄孙,人称大汉皇叔!"
    },
    {
    "name":"姚明",
    "img":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5.26923.com%2Fdownload%2Fpic%2F000%2F338%2F85d9a92ef0083def961974b9f0e6a500.jpg&refer=http%3A%2F%2F5.26923.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641273121&t=1599a49c1f3c779df78eacb6b435087d",
    "introduction":"篮球巨星,曾就职于休斯顿火箭队,担任中锋,人称小巨人"
    },
    {
    "name":"扫地小孩",
    "img":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.banbaowang.com%2Fuploads%2Fallimg%2F191115%2F55-191115104922.jpg&refer=http%3A%2F%2Fpic.banbaowang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641272999&t=894b3298d0912735a3beb23b61c6a79d",
    "introduction":"极客营前端讲师,非名人,压轴出现,凑数而已!"
    }
    ];

    const poetrys = [
        '不俗即仙骨，多情乃佛心',
        '慢品人间烟火色，闲关万事岁月长',
        '我亦好歌亦好酒，唱与佳人饮与友',
        '云在青天水在瓶',
        '一朵菊花,一个小鬼,也敢伤我儿子？',
        '日出东方 唯吾不败',
        '最美的不是下雨天 而是与你一起躲雨的屋檐',
        '日出东方 唯吾不败',
        '一人灭一国 千古王玄策',
        '飞雪连天射白鹿 笑书神侠倚碧鸳'
    ];

    const searchlist = [
        {name:'刘备',age:18,"lookslike":'器宇轩昂'},
        {name:'少强',age:19,"lookslike":'人模狗样'},
        {name:'刘表',age:20,"lookslike":'一表人才'},
        {name:'关羽',age:21,"lookslike":'武神在世'},
        {name:'关平',age:22,"lookslike":'气度不凡'},
        {name:'张飞',age:23,"lookslike":'虎背熊腰'},
        {name:'张星彩',age:18,"lookslike":'沉鱼落雁'},
    ]

    exports.list = peoples;
    exports.poetrys = poetrys;
    exports.searchlist = searchlist;