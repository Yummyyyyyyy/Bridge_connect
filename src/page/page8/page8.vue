<template>
  <div>
    <!--preloading-->
    <div class="loading" :class="{ 'loaded': loaded }">
      <img src="/images/loading.svg" width="55" height="55" alt="loading" class="img">
      <img src="/images/loading-circle.svg" width="70" height="70" alt="" class="circle">
    </div>

    <!--header-->
    <header class="header">
      <a href="#" class="logo">Logo</a>
      <ul>
        <li><a href="/#/page0#" >主页</a></li>
        <li><a href="/#/page9" class="active">认识桥梁</a></li>
        <li><a href="/#/page6#">登陆｜注册</a></li>
      </ul>
    </header>


    <div class="sec typepage" id="sec">
      <div style="display: flex">
        <!--左侧抽屉点击-->
        <div id="click-section" style="position:fixed">
          <div id="drawerboxes" ref="drawerboxes" >
            <div class="drawerbox active">
              <button class="drawer-btn active" @click="() => { slideTo(1); goAnchor('#card1'); }">斜拉桥<span
                  class="drawer-head">1</span></button>
            </div>
            <div class="drawerbox">
              
              <button class="drawer-btn" @click="() => { slideTo(2); goAnchor('#card2'); }">拱桥<span class="drawer-head">2</span></button>
              
            </div>
            <div class="drawerbox">
              <button class="drawer-btn" @click="() => { slideTo(3); goAnchor('#card3'); }">梁式桥<span class="drawer-head">3</span></button>
            </div>
            <div class="drawerbox">
              <button class="drawer-btn" @click="() => { slideTo(4); goAnchor('#card4'); }">刚架桥<span class="drawer-head">4</span></button>
            </div>
          </div>
        </div>

        <!--右侧内容显示-->
        <div id="slide-section">
        <div id="slide-bar">
          <div id="bar"></div>
        </div>
        <div id="card-section">
          <div id="card1" class="card">
            <div class="card-small-title">桥梁类型</div>
            <div class="card-title-typepage">斜拉桥</div>
            <div class="card-content-typepage" data-reveal>斜拉桥（cable-stayed bridge）又称斜张桥，是将主梁用许多拉索直接拉在桥塔上的一种桥梁，是由承压的塔、受拉的索和承弯的梁体组合起来的一种结构体系。其可看作是拉索代替支墩的多跨弹性支承连续梁。其可使梁体内弯矩减小，降低建筑高度，减轻了结构重量，节省了材料。斜拉桥主要由索塔、主梁、斜拉索组成。</div>
            <div>
              <div class="controls-buttons">
                  <label for="toggle1" class="toggle2">
                    <input type="checkbox" id="toggle1" class="toggle2-input">
                    <span class="toggle2-button" @click="enablePan = !enablePan">{{ enablePan ? '关闭' : '打开' }} 平移</span>
                  </label>

                  <label for="toggle2" class="toggle2">
                    <input type="checkbox" id="toggle2" class="toggle2-input">
                    <span class="toggle2-button" @click="enableZoom = !enableZoom">{{ enableZoom ? '关闭' : '打开' }} 缩放</span>
                  </label>

                  <label for="toggle3" class="toggle2">
                    <input type="checkbox" id="toggle3" class="toggle2-input">
                    <span class="toggle2-button" @click="enableRotate = !enableRotate">{{ enableRotate ? '关闭' : '打开' }} 旋转</span>
                  </label>
              </div>
              <model-obj 
                    class="model-box model-box-1"
                    :backgroundColor="white"
                    :rotation="{
                        x: Math.PI / 18,
                        y: -Math.PI / 4,
                        z: 0,
                      }"
                    :scale="{
                        x: 2, 
                        y: 2, 
                        z: 2,
                    }"
                    :controlsOptions="{
                      enablePan,
                      enableZoom,
                      enableRotate,
                    }"
                    
                    src="/static/models/obj/cable_stayed_bridge.obj"
                    >
              </model-obj>
            </div>
            <div class="card-img" data-reveal>
              <img src="/images/bridge_type-1.jpg" alt="">
            </div>
          </div>
          <div id="card2" class="card">
            <div class="card-small-title">桥梁类型</div>
            <div class="card-title-typepage">拱桥</div>
            <div class="card-content-typepage" data-reveal>拱桥（arch bridge）指的是在竖直平面内以拱作为结构主要承重构件的桥梁。垂直荷载通过弯拱传递给拱台，其最早并非用于园林造景，而是在工程中满足泄洪及桥下通航的目的。在形成和发展过程中，其桥身都是曲的，所以古时常称之为曲桥。 </div>
              <div>
                <div class="controls-buttons">
                  <label for="toggle4" class="toggle2">
                    <input type="checkbox" id="toggle4" class="toggle2-input">
                    <span class="toggle2-button" @click="enablePan = !enablePan">{{ enablePan ? '关闭' : '打开' }} 平移</span>
                  </label>

                  <label for="toggle5" class="toggle2">
                    <input type="checkbox" id="toggle5" class="toggle2-input">
                    <span class="toggle2-button" @click="enableZoom = !enableZoom">{{ enableZoom ? '关闭' : '打开' }} 缩放</span>
                  </label>

                  <label for="toggle6" class="toggle2">
                    <input type="checkbox" id="toggle6" class="toggle2-input">
                    <span class="toggle2-button" @click="enableRotate = !enableRotate">{{ enableRotate ? '关闭' : '打开' }} 旋转</span>
                  </label>
                </div>
                <model-obj 
                    class="model-box model-box-2"
                    :backgroundColor="white"
                    :rotation="{
                        x: Math.PI / 12,
                        y: Math.PI / 8,
                        z: 0,
                      }"
                    :scale="{
                        x: 1.5, 
                        y: 1.5, 
                        z: 1.5,
                    }"
                    :controlsOptions="{
                      enablePan,
                      enableZoom,
                      enableRotate,
                    }"
                    src="/static/models/obj/arch_bridge.obj"
                    >
                </model-obj>
              </div>
              <div class="card-img" data-reveal>
              <img src="/images/bridge_type-2.jpg" alt="">
            </div>
          </div>
          <div id="card3" class="card">
            <div class="card-small-title">桥梁类型</div>
            <div class="card-title-typepage">梁式桥</div>
            <div class="card-content-typepage" data-reveal>梁式桥是指用梁或桁架梁作主要承重结构的桥梁。其上部结构在铅垂向荷载作用下，支点只产生竖向反力。梁式桥为桥梁的基本体系之一。制造和架设均甚方便，使用广泛，在桥梁建筑中占有很大比例。 </div>
            <div>
              <div class="controls-buttons">
                  <label for="toggle7" class="toggle2">
                    <input type="checkbox" id="toggle7" class="toggle2-input">
                    <span class="toggle2-button" @click="enablePan = !enablePan">{{ enablePan ? '关闭' : '打开' }} 平移</span>
                  </label>

                  <label for="toggle8" class="toggle2">
                    <input type="checkbox" id="toggle8" class="toggle2-input">
                    <span class="toggle2-button" @click="enableZoom = !enableZoom">{{ enableZoom ? '关闭' : '打开' }} 缩放</span>
                  </label>

                  <label for="toggle9" class="toggle2">
                    <input type="checkbox" id="toggle9" class="toggle2-input">
                    <span class="toggle2-button" @click="enableRotate = !enableRotate">{{ enableRotate ? '关闭' : '打开' }} 旋转</span>
                  </label>
                </div>
              <model-obj 
                    class="model-box model-box-3"
                    :backgroundColor="white"
                    :rotation="{
                        x: -Math.PI / 2.45,
                        y: -Math.PI / 18,
                        z: Math.PI / 4,
                      }"
                    :scale="{
                        x: 9, 
                        y: 10, 
                        z: 9,
                    }"
                    :controlsOptions="{
                      enablePan,
                      enableZoom,
                      enableRotate,
                    }"
                    src="/static/models/obj/beam_bridge.obj"
                    >
              </model-obj>
            </div>
            <div class="card-img" data-reveal>
              <img src="/images/bridge_type-3.jpg" alt="">
            </div>
          </div>
          <div id="card4" class="card">
            <div class="card-small-title">桥梁类型</div>
            <div class="card-title-typepage">刚架桥</div>
            <div class="card-content-typepage" data-reveal>刚架桥是一种介于梁与拱之间的一种结构体系，它是由受弯的上部梁（或板）结构与承压的下部柱（或墩）整体结合在一起的结构。由于梁和柱的刚性连接，梁因柱的抗弯刚度而得到卸荷作用，整个体系是压弯结构，也是有推力的结构。是一种桥身主要承重结构为刚架的桥梁。能增加桥下净空高度，常用作跨线桥。</div>
              <div>
                <div class="controls-buttons">
                  <label for="toggle10" class="toggle2">
                    <input type="checkbox" id="toggle10" class="toggle2-input">
                    <span class="toggle2-button" @click="enablePan = !enablePan">{{ enablePan ? '关闭' : '打开' }} 平移</span>
                  </label>

                  <label for="toggle11" class="toggle2">
                    <input type="checkbox" id="toggle11" class="toggle2-input">
                    <span class="toggle2-button" @click="enableZoom = !enableZoom">{{ enableZoom ? '关闭' : '打开' }} 缩放</span>
                  </label>

                  <label for="toggle12" class="toggle2">
                    <input type="checkbox" id="toggle12" class="toggle2-input">
                    <span class="toggle2-button" @click="enableRotate = !enableRotate">{{ enableRotate ? '关闭' : '打开' }} 旋转</span>
                  </label>
                </div>
                <model-obj 
                    class="model-box model-box-4"
                    :backgroundColor="white"
                    :rotation="{
                        x: -Math.PI / 18,
                        y: -Math.PI / 4,
                        z: 0,
                      }"
                    :scale="{
                      x: 3, 
                      y: 3, 
                      z: 3,
                    }"
                    :controlsOptions="{
                      enablePan,
                      enableZoom,
                      enableRotate,
                    }"
                    
                    src="/static/models/obj/steel_bridge.obj"
                    >
                </model-obj>
              </div>
            <div class="card-img" data-reveal>
              <img src="/images/bridge_type-4.jpg" alt="">
            </div>
          </div>
        </div>
        </div>
    </div>

    </div>
    
    
  </div>

</template>


<script>
import VueScrollTo from 'vue-scrollto';
import { ModelObj } from 'vue-3d-model';
import { ref } from 'vue';

  export default {
    name: 'page0',
    components: {
       ModelObj,
    },
    data() {
        return {
          chosenSlideNumber: 1, // 当前选择的幻灯片编号
          offset: 0, // 幻灯片偏移量
          barOffset: 0, // 导航条偏移量
          intervalID: null, // 定时器 ID
          loaded: false,
          enablePan : ref(true),
          enableZoom : ref(true),
          enableRotate : ref(true),
          
        }
    },
    mounted() {
      // 加载函数
      window.addEventListener("load", this.onPageLoad);
      // 右侧滚动对应左侧滑动
      window.addEventListener('scroll', () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
          const cardPosition = card.getBoundingClientRect().top;
          if (cardPosition < window.innerHeight && cardPosition > 0) {
            this.slideTo(index + 1); // 假设 slideTo 函数在组件中定义，并且被挂载到了 Vue 实例中
          }
        });
      });
      // 滚动显示
      window.addEventListener("scroll", this.scrollReveal);
      this.scrollReveal();


    },

    beforeDestroy() {
      window.removeEventListener("load", this.onPageLoad);
    },

    methods:{
      onPageLoad() {
          this.loaded = true; // 页面加载完成后，设置为已加载状态
      },

      slideTo(slideNumber) {
        // 切换到指定编号的幻灯片
        this.drawerboxToggle(slideNumber); // 切换抽屉面板状态
        this.drawerbtnToggle(slideNumber); // 切换抽屉按钮状态
        // 更新偏移量
        let previousSlideNumber = this.chosenSlideNumber;
        this.chosenSlideNumber = slideNumber;
        this.offset += (this.chosenSlideNumber - previousSlideNumber) * (-100); // 计算幻灯片偏移量
        this.barOffset += (this.chosenSlideNumber - previousSlideNumber) * (100); // 计算导航条偏移量
        this.barSlide(this.barOffset); // 移动导航条
      },

      drawerboxToggle(drawerboxNumber) {
        // 切换抽屉面板状态
        let prevDrawerboxNumber = this.chosenSlideNumber;
        const drawerboxes = document.querySelectorAll(".drawerbox");
        drawerboxes[prevDrawerboxNumber - 1].classList.toggle("active"); // 切换前一个抽屉面板的状态
        drawerboxes[drawerboxNumber - 1].classList.toggle("active"); // 切换当前抽屉面板的状态
      },

      drawerbtnToggle(drawerBtnNumber) {
        // 切换抽屉按钮状态
        let prevDrawerBtnNumber = this.chosenSlideNumber;
        const drawerBtns = document.querySelectorAll(".drawer-btn");
        drawerBtns[prevDrawerBtnNumber - 1].classList.toggle("active"); // 切换前一个抽屉按钮的状态
        drawerBtns[drawerBtnNumber - 1].classList.toggle("active"); // 切换当前抽屉按钮的状态
      },

      barSlide(barOffset) {
        // 移动导航条
        const bar = document.querySelector("#bar");
        bar.style.transform = `translateY(${barOffset}%)`;
      },

      goAnchor(selector) {//参数selector是id选择器（#anchor14）
                document.querySelector(selector).scrollIntoView({
                    behavior: "smooth"
                });
      },

      scrollReveal() {
          // 获取所有含有data-reveal属性的元素
          const revealElements = document.querySelectorAll("[data-reveal]");

          for (let i = 0; i < revealElements.length; i++) {
            // 判断元素是否在视窗内
            const elementIsInScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15;

            if (elementIsInScreen) {
              // 在视窗内，添加revealed类名
              revealElements[i].classList.add("revealed");
            } else {
              // 不在视窗内，移除revealed类名
              revealElements[i].classList.remove("revealed");
            }
          }
        },
    }
  }

</script>

<style scoped>
    @import '@/css/style2.css';
</style>

