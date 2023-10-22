export default {
    install(Vue) {
        Vue.prototype.$apiUtil = {
            //使用postApi這個function， doneFunction, failFunction 這兩個params可加可不加
            postApi(url, data, doneFunction, failFunction){
                fetch(url, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                      "Content-Type": "application/json; charset=utf-8",
        
                    },
                    //別忘了把主體参數轉成字串，否則資料會變成[object Object]，它無法被成功儲存在後台
                    //body: JSON.stringify(body)
                    body: JSON.stringify(data)

                })
                .then(response => response.json())
                .then(doneFunction)
                .catch(failFunction);
            },
            postNoRespApi(url, data, doneFunction, failFunction){
                fetch(url, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                      "Content-Type": "application/json; charset=utf-8",
        
                    },
                    body: (data == null || data == {})? data : JSON.stringify(data)
                })
                .then(doneFunction)
                .catch(failFunction);
            },
            getApi(url, data, doneFunction, failFunction){
                let queryStr;
                if (data == null || data == {}) {
                    queryStr = "";
                } else {
                    queryStr = Object.keys(data)
                                     .map(key => `${key}=${data[key]}`)
                                     .join("&");
                }

                fetch(url + (queryStr !== "" ? `?${queryStr}` : ""), {
                    method: "GET",
                    credentials: 'include',
                    headers: {
                      
                    }
                })
                .then(response => {
                    return response.json();
                })
                .then(doneFunction)
                .catch(failFunction);
            },
        }

    }
}