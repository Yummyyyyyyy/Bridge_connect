<template>
  <div class="box">
   
<!--   #07192f -->
	<div >
	<el-menu
	  active-text-color="#00aaff"
	  
	  background-color="#ffffff"
	  class="el-menu-demo"
	  mode="horizontal"
	  default-active="2"
	  text-color="#000000"
	  style="width:100%; ">
	  <el-menu-item index="4" style="margin-left: 12%; ">
			<router-link to="/user/page3">
        <div style="display:flex; align-items:center">
	        <el-icon ><Menu /></el-icon>
				  <span >桥梁等级评估</span>
        </div>
			 </router-link>
	  </el-menu-item>	
		<el-menu-item index="5">
		<router-link to="/user/page2">
      <div style="display:flex; align-items:center">
        <el-icon><user /></el-icon>
        <span>用户首页</span>
      </div>
		 </router-link>
	  </el-menu-item >
	<el-menu-item index="6" style="margin-left: 40%;">
			<router-link to="/page6">
        <div style="display:flex; align-items:center">
          <el-icon><tools /></el-icon>	 
          <span>登录</span>
        </div>
			</router-link>
	</el-menu-item>
		<el-menu-item index="7">
			<router-link to="/page7">
        <div style="display:flex; align-items:center">
          <el-icon><setting /></el-icon> 
          <span>注册</span>
        </div>
			</router-link>
	</el-menu-item>
	</el-menu>
	</div>
	<div ref="vantaRef" style="width: 100%; height:350px"></div>
	 <div class="banner">
	   <h1>桥梁评估系统</h1>
	  <h6>
	     &ensp;&ensp;Bridge&ensp;&ensp;&ensp;&ensp;evalution&ensp;&ensp;&ensp;&ensp;system&ensp;&ensp;&ensp;&ensp;&ensp;
	  </h6>
	
	</div>
  </div>

  
  <router-view></router-view>
  </template>
  <script>
  import * as THREE from "three";
  import BIRDS from "vanta/src/vanta.birds";
  
  export default {
    name: 'page1',
    data() {
      return {};
    },
    mounted() {
      this.vantaEffect = BIRDS({
        el: this.$refs.vantaRef,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        color1: 14381274,
        color2: 16443110,
      });
      
    },
    beforeDestroy() {
      if (this.vantaEffect) {
        this.vantaEffect.destroy();
      }
    },
  };
  </script>
  
  <style lang="less" scoped>
	  
   a {
     text-decoration: none;
     color:#fff;
	 // #07192f
     
   }
    
   .router-link-active {
     text-decoration: none;
     color:#ffd04b ;
   }
  .box {
    position: relative;
    .banner {
      z-index: 999;
      position: absolute;
      top: 30%;
      left: 10%;
      color: #fff;
    }
  }
  h1 {
    font-size: 66px;
  }
  p {
    margin-top: 60px;
    font-size: 18px;
  }
  </style>
 