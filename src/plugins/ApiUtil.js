export default {
    install(Vue) {
        Vue.prototype.$apiUtil = {
            //使用postApi這個function， doneFunction, failFunction 這兩個params可加可不加
            postApi(url, data, doneFunction, failFunction){
                fetch(url, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json; charset=utf-8",
                      "Access-Control-Allow-Origin": "*"
        
                    },
                    //別忘了把主體参數轉成字串，否則資料會變成[object Object]，它無法被成功儲存在後台
                    //body: JSON.stringify(body)
                    body: JSON.stringify(data)
                })
                .then(doneFunction)
                .catch(failFunction);
                //.then(response => response.json())
                //.then(json => console.log(json))
                // .catch(error => {
                //   this.errorMessage = error;
                //   console.log(error);
                // });
            },
            getApi(){
        
            }
        }

    }
}