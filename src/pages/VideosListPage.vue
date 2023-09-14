<template>
<div>
  <div>VideoListPage</div>
  <!-- <div class="thubnail_container">
    <div v-for="thumbnail in 100" :key="thumbnail">
      <ThumbNail class="thubnail"></ThumbNail>
    </div>
  </div> -->
  <div id="container">
    <div class="row" id="profile-grid">

      <div class="col-sm-3 col-xs-12 profile"
        v-for="(thumbnail, index) in thumbnails" :key="index">
        <div class="panel panel-default">
          <div class="panel-thumbnail">
            <router-link class="thumb" :to="{path: '/VideoPage', query: { id: thumbnail.id }}">
              <img style="color: aqua; height: 100%; width: 100%;" :src="thumbnail.img" class="img-fluid">
            </router-link>
          </div>
            <div class="panel-body">
            <p class="profile-name">{{thumbnail.title}}</p>
            <p>{{thumbnail.description}}</p>
            </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
// import ThumbNail from '../components/ThumbNail.vue'

export default {
    name: 'VideosListPage',
    data() {
      return {
        thumbnails: {}
      }
    },
    methods: {
      get_thumbnails(){
        let self = this;
        self.thumbnails = [
          {id:"1", img: "/img/thubnail_test1.jpg", title: "titile_1", description: "description_1"},
          {id:"2", img: "/img/thubnail_test1.jpg", title: "titile_2", description: "description_2"},
          {id:"3", img: "/img/thubnail_test1.jpg", title: "titile_3", description: "description_3"},
          {id:"4", img: "/img/thubnail_test1.jpg", title: "titile_4", description: "description_4"},
          {id:"5", img: "/img/thubnail_test1.jpg", title: "titile_5", description: "description_5"},
          {id:"6", img: "/img/thubnail_test1.jpg", title: "titile_6", description: "description_6"},
          {id:"7", img: "/img/thubnail_test1.jpg", title: "titile_7", description: "description_7"},
          {id:"8", img: "/img/thubnail_test1.jpg", title: "titile_8", description: "description_8"},
        ]
      },
    },
    components: {
      // ThumbNail
    },
    mounted() {
      let self = this;
      self.get_thumbnails();
      console.log(self.thumbnails);
    }
}
</script>

<style>
/*
.thubnail_container{
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  display: flex;
}
.thubnail{
  width: 100px;
  height: 100px;
  border-width: 2px;
  border-style: solid;
  display: flex;
}
*/
#container {
  margin-left: 60px;
  margin-right: 60px;
}
#profile-grid { overflow: auto; white-space: normal;}
#profile-grid .profile { padding-bottom: 40px;}
#profile-grid .panel { padding: 0 }
#profile-grid .panel-body { padding: 15px }
#profile-grid .profile-name { font-weight: bold; }
#profile-grid .thumbnail {margin-bottom:6px;}
#profile-grid .img-rounded { border-radius: 4px 4px 4px 4px;}

@media screen and (min-width: 1600px) {
  #profile-grid .panel-thumbnail { overflow: hidden; height: 320px;}
}
@media screen and (max-width: 1600px) {
  #profile-grid .panel-thumbnail { overflow: hidden; height: 180px;}
}

</style>