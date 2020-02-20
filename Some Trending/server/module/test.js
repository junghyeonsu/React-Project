const axios = require('axios');
const API_KEY = "ff32a090cbc342f38a1ffdd2b6576e5e";

exports.getMovie = async () => {
    try {
        return await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=ff32a090cbc342f38a1ffdd2b6576e5e&targetDt=20200101`);
    } catch (error) {
        console.log(error);
    }
}

exports.getName = function(req,res){
    res.send([
        {
            'name' : '정현수'
        },
        {
            'name' : '하이'
        },
        {
            'name' : '성공했니?'
        }
    ])
}
