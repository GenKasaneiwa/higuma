<template>
  <div class="w-full h-screen sheet">
    <div class="fixed top-0 z-50 w-full bg-gray-100 drop-shadow is-print flex justify-end block">
      <div class="flex justify-between py-3">
        <div class="bg-gray-900 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline m-auto mr-5 ml-5 w-60" @click="getPrint">Print</div>
        <!-- <a href="./higuma_menu.pdf" class="bg-gray-900 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline m-auto ml-1 mr-5 w-60" download>Download PDF</a> -->
      </div>
    </div>
    <div class="container md m-auto pt-10 pb-50">
      <div class="bg-white rounded px-8 pt-6 pb-8 mb-4 wrapper">
        <div class="menu" v-for="(elem, index) in elements" :key="index">
          <div class="mb-4 is-print">
            <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="name">
              Menu Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Menu Name" v-model="elem.name">
          </div>

          <div class="mb-4 is-print">
            <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="price">
              Menu Price
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="number" placeholder="0.00" v-model="elem.price">
          </div>

          <div class="mb-4 is-print">
            <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="description">
              Menu Description
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Menu Description" v-model="elem.description">
          </div>

          <div class="mb-4">
            <p class="block text-gray-700 text-sm font-bold mb-2 text-left is-print" for="price">
              Preview
            </p>

            <div class="item">
              <div class="">
                <p class=""><span class="item__name">{{elem.name}}</span>&nbsp;&nbsp;<span class="item__dollar">$</span><span class="item__price">{{elem.price}}</span></p>
                <p class="item__description">{{elem.description}}</p>
              </div>
            </div>
          </div>


          <div class="flex items-center justify-between my-10 is-print">
            <div class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline mr-1 w-6/12" v-on:click="append">Add +</div>
            <div class="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline ml-1 w-6/12" v-on:click="remove(index)">Remove</div>
          </div>

        </div>
        <input id="new-name" type="text">

      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  //vue cli特有のexport defaultはcomponent呼び出し設定 data returnはcomponentのデータ引っ張る設定
  export default{
    data(){
      return{
        // name: '',
        // description: '',
        // price: '',
        elements:[{
          name:'',
          description:'',
          price: '',
        }]
      }
    },
    methods: {
      append: function(){
        this.elements.push({
          name: $('#new-name').val(),
        });
        $('#new-name').val('');
      },
      remove: function(index) {
          this.elements.splice(index, 1);
      },
      getPrint() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth()+1;
        let date = now.getDate();
        let hour = now.getHours();
        let min = now.getMinutes();
        // let sec = now.getSeconds();
        document.title = 'menu_' + month + date + hour + min + year;
        window.print();
      }
    }
  }
</script>

<style lang="scss" scoped>

@page {
	margin: 0;

	size: A4;
	size: landscape;
}

.item {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 8.5in;
	height: 1.5in;
	border: 1px solid #eee;

	&__name {
		font-size: 60px;
		font-weight: bold;
	}

	&__description {
		font-size: 33px;
		font-weight: bold;
		line-height: .8;
	}

	&__dollar {
		font-size: 50px;
		font-weight: bold;
	}

	&__price {
		font-size: 60px;
		font-weight: bold;
	}

  &__name, &__price {
    line-height: 1;
  }
}



@media print {
	html, body {
		width: 8.27in;
		height: 11.69in;
	}

	.is-print {
		display: none;
	}

	.container {
		max-width: 100%;
		margin: auto;
		padding: 0;
	}

	.wrapper {
		width: 100%;
		margin: auto;
		padding: 0;
	}

	.menu {
		margin: 0 auto 0 auto;
	}

	#new-name {
		display: none;
	}

	.mb-4 {
		margin: 0;
	}

	.item {
		margin: auto;
	}

	.menu {
		&:nth-of-type(4n) {
			.item {
				page-break-after: always;
			}
		}

		&:nth-of-type(4n + 1) {
			.item {
				margin: .7in auto 0 auto;
			}
		}
	}
}
</style>