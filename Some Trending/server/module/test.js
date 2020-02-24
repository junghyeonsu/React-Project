const axios = require('axios');
const cheerio = require('cheerio');


/* 비동기 방식으로 axios.get 으로 주소의 데이터를 받는다. */
const getMelon = async () => {
    try {
      return await axios.get("https://music.bugs.co.kr/chart");
    } catch (error) {
        console.error(error);
    }
};

//frm > div > table
// 만든 비동기적 요청함수를 불러서 데이터를 나눈다.
exports.MelonCrawling =  (req,res) => {
    getMelon().then(response => {
        let ulList = [];
        const $ = cheerio.load(response.data);
        const $bodyList = $("#CHARTrealtime > table > tbody").children('tr');

        $bodyList.each(function(i) {
            ulList[i] = {
                ranking : $(this).find('td div.ranking strong').text(),
                thumbnail : $(this).find('td a.thumbnail img').attr('src'),
                thumbnailAlt : $(this).find('td a.thumbnail img').attr('alt'),
                title : $(this).find('th p a').text(),
                artist : $(this).find('td p.artist a').text(),
                album : $(this).find('td a.album').text()
            }
        })

        res.send(ulList);
    })
}

