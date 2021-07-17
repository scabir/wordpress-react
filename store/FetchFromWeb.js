const FetchFromWeb = async (url, pageSize, pageNo) => {
    let urlToGo = url;
    let result = [];
    let isPaneNoSetByUser = false;

    if(pageNo === undefined) {
        pageNo = 1;
    }
    else {
        isPaneNoSetByUser = true;
    }

    if(pageSize === undefined) {
        pageSize = 100;
    }

    urlToGo = urlToGo + '?per_page=' + pageSize + '&page=' + pageNo;

    let response = await fetch(urlToGo);
    let data = await response.json();
    result.push(...data);

     while(!isPaneNoSetByUser && data.length % pageSize === 0) {
        urlToGo = urlToGo + '?per_page=' + pageSize + '&page=' + pageNo++;
        response = await fetch(urlToGo);
        data = await response.json();
        result = [...result, ...data];

        if(data === undefined || data.length === 0) {
            break;
        }
    }

    return result;
}

export default FetchFromWeb;