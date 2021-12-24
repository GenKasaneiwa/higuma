<template>
  <div class="bg-gray-100 container md m-auto font-sans text-xl">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BitcoinAPI",

  //API格納用のプロパティ
  data: function () {
    return {
      data: {
        bpi: null,
      },
    };
  },

  //axiosによるデータ取得処理
  mounted: function () {
    axios.get("./test.json")
      .then(
        function (response) {
          //デバッグ用にconsoleに出力
          console.log(response);
        }.bind(this)
      )
      .catch(function (error) {
        console.log(error);
        console.log('sibal');
      });
  },

  
};
</script>