const prediction = [
  {
    date: "2012/10/01",
    price: "659.39001",
    forecast: "661.8052524",
    macd: "5.041114366",
    signal: "10.4023612",
  },
  {
    date: "2012/10/02",
    price: "661.31",
    forecast: "663.2188611",
    macd: "3.40203742",
    signal: "9.00229644",
  },
  {
    date: "2012/10/03",
    price: "671.45001",
    forecast: "670.8784116",
    macd: "2.887980356",
    signal: "7.779433223",
  },
  {
    date: "2012/10/04",
    price: "666.79999",
    forecast: "668.7205431",
    macd: "2.081375871",
    signal: "6.639821753",
  },
  {
    date: "2012/10/05",
    price: "652.59003",
    forecast: "657.4010398",
    macd: "0.292143344",
    signal: "5.370286071",
  },
  {
    date: "2012/10/08",
    price: "638.16998",
    forecast: "640.5802245",
    macd: "-2.263323659",
    signal: "3.843564125",
  },
  {
    date: "2012/10/09",
    price: "635.84998",
    forecast: "636.7550532",
    macd: "-4.424748535",
    signal: "2.189901593",
  },
  {
    date: "2012/10/10",
    price: "640.90997",
    forecast: "638.6407767",
    macd: "-5.664102172",
    signal: "0.61910084",
  },
  {
    date: "2012/10/11",
    price: "628.09998",
    forecast: "632.5142656",
    macd: "-7.592437105",
    signal: "-1.023206749",
  },
  {
    date: "2012/10/12",
    price: "629.71399",
    forecast: "627.5012195",
    macd: "-8.887964393",
    signal: "-2.596158278",
  },
  {
    date: "2012/10/15",
    price: "634.76001",
    forecast: "635.8710338",
    macd: "-9.399159797",
    signal: "-3.956758582",
  },
  {
    date: "2012/10/16",
    price: "649.79248",
    forecast: "645.4354606",
    macd: "-8.493384688",
    signal: "-4.864083803",
  },
  {
    date: "2012/10/17",
    price: "644.61359",
    forecast: "643.3994449",
    macd: "-8.100071943",
    signal: "-5.511281431",
  },
  {
    date: "2012/10/18",
    price: "632.64001",
    forecast: "632.9617122",
    macd: "-8.654769798",
    signal: "-6.139979104",
  },
  {
    date: "2012/10/19",
    price: "609.84003",
    forecast: "618.3326135",
    macd: "-10.8095341",
    signal: "-7.073890104",
  },
  {
    date: "2012/10/22",
    price: "634.03003",
    forecast: "622.6506184",
    macd: "-10.44486757",
    signal: "-7.748085597",
  },
  {
    date: "2012/10/23",
    price: "613.35541",
    forecast: "620.2023144",
    macd: "-11.68938778",
    signal: "-8.536346034",
  },
  {
    date: "2012/10/24",
    price: "616.83002",
    forecast: "613.8028862",
    macd: "-12.25404996",
    signal: "-9.27988682",
  },
  {
    date: "2012/10/25",
    price: "609.53802",
    forecast: "610.1206737",
    macd: "-13.13849982",
    signal: "-10.05160942",
  },
  {
    date: "2012/10/26",
    price: "604",
    forecast: "605.7192044",
    macd: "-14.12349775",
    signal: "-10.86598709",
  },
  {
    date: "2012/10/31",
    price: "595.32001",
    forecast: "597.5851486",
    macd: "-15.42668909",
    signal: "-11.77812749",
  },
  {
    date: "2012/11/01",
    price: "596.53992",
    forecast: "599.8660633",
    macd: "-16.17459046",
    signal: "-12.65742008",
  },
  {
    date: "2012/11/02",
    price: "576.79999",
    forecast: "601.8705455",
    macd: "-18.15092252",
    signal: "-13.75612057",
  },
  {
    date: "2012/11/05",
    price: "584.62109",
    forecast: "573.5674964",
    macd: "-18.8685773",
    signal: "-14.77861191",
  },
  {
    date: "2012/11/06",
    price: "582.84949",
    forecast: "587.6610367",
    macd: "-19.35714014",
    signal: "-15.69431756",
  },
  {
    date: "2012/11/07",
    price: "558.00189",
    forecast: "578.5772623",
    macd: "-21.50146783",
    signal: "-16.85574761",
  },
  {
    date: "2012/11/08",
    price: "537.75",
    forecast: "558.3057568",
    macd: "-24.55200106",
    signal: "-18.3949983",
  },
  {
    date: "2012/11/09",
    price: "547.06",
    forecast: "540.8985384",
    macd: "-25.91954702",
    signal: "-19.89990805",
  },
  {
    date: "2012/11/12",
    price: "542.83002",
    forecast: "543.8438438",
    macd: "-27.03304102",
    signal: "-21.32653464",
  },
  {
    date: "2012/11/13",
    price: "542.89801",
    forecast: "541.6183952",
    macd: "-27.59194405",
    signal: "-22.57961652",
  },
  {
    date: "2012/11/14",
    price: "536.88",
    forecast: "538.8649914",
    macd: "-28.19546211",
    signal: "-23.70278564",
  },
  {
    date: "2012/11/15",
    price: "525.62",
    forecast: "538.6873392",
    macd: "-29.2452217",
    signal: "-24.81127285",
  },
  {
    date: "2012/11/16",
    price: "527.67798",
    forecast: "537.0592915",
    macd: "-29.5702347",
    signal: "-25.76306522",
  },
  {
    date: "2012/11/19",
    price: "565.72998",
    forecast: "539.5758449",
    macd: "-26.4524046",
    signal: "-25.9009331",
  },
  {
    date: "2012/11/20",
    price: "560.91339",
    forecast: "575.5720064",
    macd: "-24.09243771",
    signal: "-25.53923402",
  },
  {
    date: "2012/11/21",
    price: "561.70001",
    forecast: "577.126068",
    macd: "-21.9061528",
    signal: "-24.81261778",
  },
  {
    date: "2012/11/23",
    price: "571.5",
    forecast: "576.1381088",
    macd: "-19.16184317",
    signal: "-23.68246285",
  },
  {
    date: "2012/11/26",
    price: "589.53003",
    forecast: "574.7064496",
    macd: "-15.35508145",
    signal: "-22.01698657",
  },
  {
    date: "2012/11/27",
    price: "584.78003",
    forecast: "589.9805825",
    macd: "-12.57650653",
    signal: "-20.12889057",
  },
  {
    date: "2012/11/28",
    price: "582.94",
    forecast: "587.1013384",
    macd: "-10.40302138",
    signal: "-18.18371673",
  },
  {
    date: "2012/11/29",
    price: "589.35999",
    forecast: "581.9489551",
    macd: "-8.069459486",
    signal: "-16.16086528",
  },
  {
    date: "2012/11/30",
    price: "585.28003",
    forecast: "590.1340206",
    macd: "-6.474677498",
    signal: "-14.22362772",
  },
  {
    date: "2012/12/03",
    price: "586.19",
    forecast: "588.3853615",
    macd: "-5.078828733",
    signal: "-12.39466792",
  },
  {
    date: "2012/12/04",
    price: "575.8454",
    forecast: "588.0234408",
    macd: "-4.752546894",
    signal: "-10.86624372",
  },
  {
    date: "2012/12/05",
    price: "538.7923",
    forecast: "579.0894691",
    macd: "-7.398555746",
    signal: "-10.17270612",
  },
  {
    date: "2012/12/06",
    price: "547.24451",
    forecast: "540.0464403",
    macd: "-8.713075208",
    signal: "-9.880779941",
  },
  {
    date: "2012/12/07",
    price: "533.25",
    forecast: "543.1616873",
    macd: "-10.76004624",
    signal: "-10.0566332",
  },
  {
    date: "2012/12/10",
    price: "529.82092",
    forecast: "538.5380921",
    macd: "-12.5147217",
    signal: "-10.5482509",
  },
  {
    date: "2012/12/11",
    price: "541.388",
    forecast: "537.5515403",
    macd: "-12.8241195",
    signal: "-11.00342462",
  },
  {
    date: "2012/12/12",
    price: "539",
    forecast: "540.1299403",
    macd: "-13.11087709",
    signal: "-11.42491511",
  },
  {
    date: "2012/12/13",
    price: "529.69",
    forecast: "541.8391382",
    macd: "-13.92881108",
    signal: "-11.92569431",
  },
  {
    date: "2012/12/14",
    price: "509.79401",
    forecast: "538.7461391",
    macd: "-15.99805416",
    signal: "-12.74016628",
  },
  {
    date: "2012/12/17",
    price: "518.83002",
    forecast: "503.2358957",
    macd: "-16.71612069",
    signal: "-13.53535716",
  },
  {
    date: "2012/12/18",
    price: "533.90002",
    forecast: "521.1198919",
    macd: "-15.88604608",
    signal: "-14.00549495",
  },
  {
    date: "2012/12/19",
    price: "526.31",
    forecast: "537.6609418",
    macd: "-15.66013685",
    signal: "-14.33642333",
  },
  {
    date: "2012/12/20",
    price: "521.73022",
    forecast: "538.2235392",
    macd: "-15.67001791",
    signal: "-14.60314224",
  },
  {
    date: "2012/12/21",
    price: "519.33002",
    forecast: "530.8620914",
    macd: "-15.69065273",
    signal: "-14.82064434",
  },
  {
    date: "2012/12/24",
    price: "520.16803",
    forecast: "524.2041931",
    macd: "-15.46115895",
    signal: "-14.94874726",
  },
  {
    date: "2012/12/26",
    price: "512.99951",
    forecast: "527.2616932",
    macd: "-15.67700834",
    signal: "-15.09439948",
  },
  {
    date: "2012/12/27",
    price: "515.06",
    forecast: "509.7137469",
    macd: "-15.50309617",
    signal: "-15.17613881",
  },
  {
    date: "2012/12/28",
    price: "509.5892",
    forecast: "513.8147424",
    macd: "-15.62658382",
    signal: "-15.26622782",
  },
  {
    date: "2012/12/31",
    price: "532.17291",
    forecast: "505.5757464",
    macd: "-13.74370317",
    signal: "-14.96172289",
  },
  {
    date: "2013/01/02",
    forecast: "510.5292949",
    macd: "",
    signal: "",
  },
  {
    date: "2013/01/03",
    forecast: "514.6598955",
    macd: "",
    signal: "",
  },
];

export default prediction;
