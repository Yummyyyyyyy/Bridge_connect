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
        <li><a href="#" class="active">主页</a></li>
        <li><a href="/#/page8#" >认识桥梁</a></li>
        <li><a href="/#/page6#">登陆｜注册</a></li>
      </ul>
    </header>

    <!--视差效果-->
    <section>
      <img src="/images/stars.png" id="stars">
      <img src="/images/moon.png" id="moon">
      <img src="/images/mountains_behind.png" id="mountains_behind">
      <h2 id="text">桥·连万里</h2>
      <a href="#" id="button">下滑探索</a>
      <img src="/images/bridge-front3.png" id="mountains_front">
    
    </section>

    <!--基本介绍-->
    <div class="sec" id="sec">
      <h2>桥·缘起</h2>
      <p style="font-size:middle">桥，水梁也，大而为陂陀者曰桥。</p>
      <p>回顾历史，中国是桥的故乡，自古就有“桥的国度”之称,发展于隋,兴盛于宋。遍布在神州大地的桥、编织成四通八达的交通网络，连接着祖国的四面八方。中国古代桥梁的建筑艺术，有不少是世界桥梁史上的创举。</p>
      <p>立足当下，桥梁建设事业正蓬勃发展，世界大桥总量和总长度正快速增加。21世纪以来，在国家经济快速发展的推动下，中国桥梁以每年3万多座的速度递增，建成了一大批世界级的重大桥梁，目前桥梁总数超过100万座，已成为世界第一桥梁大国。</p>
      <p>中国古今桥梁的科学技术，不少都走在世界桥梁建筑的前列，许多桥梁样式仍继续对世界近代桥梁建筑产生影响。它们是活的文物瑰宝，也是时代的精神寄托。</p>
      
    </div>

    <!--以数量桥-->
    <div class="sec" id="sec" data-reveal>
      <h2>桥·以数量桥</h2>
      <div class="flex-container" data-reveal>
        <div id="chart1" class="chart-container" style="flex-grow: 2;">
          <h3>各年份全国城市桥梁数量</h3>
          <hr style="height:1px;border:none;border-top:1px solid rgba(55,164,208,0.5);"/>
          <div class="echart"  ref="chart1" id="mychart" data-reveal 
            :style="{  width: '100%', height: '400px' }"></div>
            <h3>上海市历史桥梁数量</h3>
          <hr style="height:1px;border:none;border-top:1px solid rgba(55,164,208,0.5);"/>
          <div class="echart"  ref="chart4" id="mychart" data-reveal
            :style="{  width: '100%', height: '400px' }"></div>
          <h3>桥梁最多的省份</h3>
          <hr style="height:1px;border:none;border-top:1px solid rgba(55,164,208,0.5);"/>
          <p class="num_callout" data-reveal>71356座&nbsp;·&nbsp;江苏省</p>
          



        </div>

        <div class="map chart-container" style="flex-grow: 3;">
                  <h3>全国各省份城市桥梁数量</h3>
                  <hr style="height:1px;border:none;border-top:1px solid rgba(55,164,208,0.5);"/>
                  <div class="echart" ref="chart3" id="china" data-reveal
            :style="{  width: '100%', height: '800px' }"></div>
          
            <h3>世界第一长桥（2021年）</h3>
            <hr style="height:2px;border:none;border-top:1px solid rgba(55,164,208,0.5);"/>
            <p class="num_callout" data-reveal>164.85km&nbsp;·&nbsp;丹昆特大桥</p>
            
          
          
        </div>
      </div>
      <p>丹昆特大桥（Danyang-Kunshan Grand Bridge）是一座位于中国江苏省的重要大桥，也是世界上最长的桥梁。它位于京沪高铁江苏段，起自丹阳，途经常州、无锡、苏州，最终到达昆山。丹昆特大桥的全长为164.851千米。</p>
      <p>  </p>
      <p>江苏历来就是桥梁大省,从过去婉约的石拱桥到现在的世界级大型桥梁,江苏大桥建设走出了一条自主创新之路,创造了多项"世界之最"。</p>
      <p>  </p>
      <p>  </p>
      <p>  </p>
      <p>  </p>


      

    </div>

    <!--探索桥梁-->
    <div class="sec" id="sec" data-reveal>
    <section class="section gallery" id="gallery" data-reveal>
      
   
        <div class="container">
        

          <ul class="gallery-list">

            <li class="gallery-item" data-reveal>

              <div class="gallery-card">

                <figure class="card-banner img-holder has-before" style="--width: 450; --height: 625;">
                  <img src="/images/bridge_type-1.jpg" width="450" height="625" loading="lazy" alt="The Drunken"
                    class="img-cover">
                </figure>

                <div class="card-content">
                  <h3 class="h6">
                    <a href="/#/page8#/#card1" class="card-title">斜拉桥</a>
                  </h3>

                  <span class="card-tag">美国·旧金山</span>
                </div>

                <a href="https://baike.baidu.com/item/金门大桥/643" class="btn-icon"  target="\_blank">
                  <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy"
                    alt="arrow-forward icon">
                </a>

              </div>

              <div class="gallery-card">

                <figure class="card-banner img-holder has-before" style="--width: 450; --height: 625;">
                  <img src="/images/bridge_type-5.jpg" width="450" height="625" loading="lazy"
                    alt="Lettuce Entertain" class="img-cover">
                </figure>

                <div class="card-content">
                  <h3 class="h6">
                    <a href="#" class="card-title">中国桥梁史｜发展</a>
                  </h3>

                  <span class="card-tag">战国·秦汉</span>
                </div>

                <a href="https://m.thepaper.cn/baijiahao_4142032" class="btn-icon" target="\_blank">
                  <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy"
                    alt="arrow-forward icon">
                </a>

              </div>

            </li>

            <li class="gallery-item" data-reveal>

              <div class="gallery-card">

                <figure class="card-banner img-holder has-before" style="--width: 450; --height: 625;">
                  <img src="/images/bridge_type-2.jpg" width="450" height="625" loading="lazy" alt="Leaping Lizard"
                    class="img-cover">
                </figure>

                <div class="card-content">
                  <h3 class="h6">
                    <a href="/#/page8#/#card2" class="card-title">拱桥</a>
                  </h3>

                  <span class="card-tag">英国·剑桥</span>
                </div>

                <a href="https://baike.baidu.com/item/数学桥" class="btn-icon" target="\_blank">
                  <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy"
                    alt="arrow-forward icon">
                </a>

              </div>

              <div class="gallery-card">

                <figure class="card-banner img-holder has-before" style="--width: 450; --height: 625;">
                  <img src="/images/bridge_type-6.jpg" width="450" height="625" loading="lazy" alt="Juan More Taco"
                    class="img-cover">
                </figure>

                <div class="card-content">
                  <h3 class="h6">
                    <a href="#" class="card-title">中国桥梁史｜鼎盛</a>
                  </h3>

                  <span class="card-tag">南北朝·隋唐</span>
                </div>

                <a href="https://baike.baidu.com/item/赵州桥/32450" class="btn-icon" target="\_blank">
                  <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy"
                    alt="arrow-forward icon">
                </a>

              </div>

            </li>

            <li class="gallery-item" data-reveal>

              <div class="gallery-card">

                <figure class="card-banner img-holder has-before" style="--width: 450; --height: 625;">
                  <img src="/images/bridge_type-3.jpg" width="450" height="625" loading="lazy" alt="Goldilox Bagels"
                    class="img-cover">
                </figure>

                <div class="card-content">
                  <h3 class="h6">
                    <a href="/#/page8#/#card3" class="card-title">梁式桥</a>
                  </h3>

                  <span class="card-tag">中国·贵州</span>
                </div>

                <a href="https://baike.baidu.com/item/梁桥/12847" class="btn-icon" target="\_blank">
                  <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy"
                    alt="arrow-forward icon">
                </a>

              </div>

              <div class="gallery-card">

                <figure class="card-banner img-holder has-before" style="--width: 450; --height: 625;">
                  <img src="/images/bridge_type-7.jpg" width="450" height="625" loading="lazy" alt="Cookie Monstah"
                    class="img-cover">
                </figure>

                <div class="card-content">
                  <h3 class="h6">
                    <a href="#" class="card-title">中国桥梁史｜延续</a>
                  </h3>

                  <span class="card-tag">元·明·清</span>
                </div>

                <a href="https://baike.baidu.com/item/玉带桥/79395" class="btn-icon" target="\_blank">
                  <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy"
                    alt="arrow-forward icon">
                </a>

              </div>

            </li>

            <li class="gallery-item" data-reveal>

              <div class="gallery-card">

                <figure class="card-banner img-holder has-before" style="--width: 450; --height: 625;">
                  <img src="/images/bridge_type-4.jpg" width="450" height="625" loading="lazy"
                    alt="Divine Pastabilities" class="img-cover">
                </figure>

                <div class="card-content">
                  <h3 class="h6">
                    <a href="/#/page8#/#card4" class="card-title">钢架桥</a>
                  </h3>

                  <span class="card-tag">澳大利亚·悉尼</span>
                </div>

                <a href="https://baike.baidu.com/item/the%20Harbour%20bridge" class="btn-icon" target="\_blank">
                  <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy"
                    alt="arrow-forward icon">
                </a>

              </div>

              <div class="gallery-card">

                <figure class="card-banner img-holder has-before" style="--width: 450; --height: 625;">
                  <img src="/images/bridge_type-8.jpg" width="450" height="625" loading="lazy"
                    alt="The Lockhart Bar" class="img-cover">
                </figure>

                <div class="card-content">
                  <h3 class="h6">
                    <a href="#" class="card-title">中国桥梁史｜现代</a>
                  </h3>

                  <span class="card-tag">21世纪</span>
                </div>

                <a href="https://baike.baidu.com/item/千厮门嘉陵江大桥/15582010" class="btn-icon" target="\_blank">
                  <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy"
                    alt="arrow-forward icon">
                </a>

              </div>

            </li>

          </ul>


          <a href="/#/page8#" class="scroll-down">
            <img src="/images/scroll-down.svg" width="30" height="66" loading="lazy" alt="mouse scroll">
          </a>
          
        </div>
    </section>
    </div>
    
    <!--提问模型-->
    <div class="sec" id="sec" data-reveal>
      <h2>ask me anything!</h2>
        <div class="question-box">
          
          <img src="/images/robot.png" class="robot" id="robot" @mouseover="hovering = true"
          @mouseleave="hovering = false"
          :style="{ transform: hovering ? 'translateY(-5px)' : 'translateY(0)' }"
          style="transition: transform 0.3s ease;">
          <p>你可以问我：<br></p>
            <div class="wrapper">
              <div class="typing-demo">
                桥梁通常由哪些部分构成？
              </div>
            </div>
            <p>
                或者:<br>
                ·&nbsp;&nbsp;中国有哪些特殊的桥结构？<br>
                ·&nbsp;&nbsp;桥梁的维护应该怎么做？
            </p>
            <div>
              <div id="results">
                <textarea id="result" ref="result"></textarea>
              </div>
              <div id="sendVal">
                <input id="question" type="text" />
                <button id="btn">发送信息</button>
              </div>
            </div>
            
  
          <div style="height:100px">    
            <p>(问答API来自科大讯飞星火问答大模型，仅适合提问有关于桥梁的信息哦！)</p>
          </div>
      </div>
    
    </div>

    <!--病害的文字介绍element-plus-->
    <div class="sec" id="sec" data-reveal>
      <h2>了解桥梁评估</h2>
      <div class="accordion accordion_total_container">
            <div class="accordion__container">
                <div class="accordion__item">
                    <header class="accordion__header">
                        
                        <h3 class="accordion__title" style="font-size:large;">人工目测方法</h3>
                    </header>
    
                    <div class="accordion__content">
                        <p class="accordion__description" style="color:black">
                          人工目测方法中包括了对桥梁结构的视觉检查，包括破损、裂缝和腐蚀方面的评估。通常，要求富有经验的专家前往实地进行考察，对桥梁的状况有定性的评估结果。
                        </p>
                    </div>
                </div>

                <div class="accordion__item">
                    <header class="accordion__header">
                        <h3 class="accordion__title" style="font-size:large;">仪器记分板方法</h3>
                    </header>
    
                    <div class="accordion__content">
                        <p class="accordion__description" style="color:black">
                          仪器记分板方法包含两个方面：首先，使用数据采集系统和传感器网络，实时监测桥梁的振动、形变、温度等参数，作为评估依据。接着，人为划分不同等级的理想参数，通过记分卡（Scoreboard）方法，计算出桥梁各项数据之于人为划分等级的区间，作为桥梁的评估依据。
                        </p>
                    </div>
                </div>

                <div class="accordion__item">
                    <header class="accordion__header">
                        <h3 class="accordion__title" style="font-size:large;">机器学习分类预测</h3>
                    </header>
    
                    <div class="accordion__content">
                        <p class="accordion__description" style="color:black">
                          使用机器学习的方法，必须需要带有原始标签的预处理信息。首先，收集已经完成评估的桥梁数据，然后，选择合适的机器学习模型，如决策树、随机森林、支持向量机等，作为分类器。使用桥梁数据中的已标记类别的样本对选定的模型进行训练，让模型学习特征与类别之间的关系。当模型通过评估后，可以使用新数据进行预测。将新桥梁数据输入模型，模型将预测桥梁的状况。
                        </p>
                    </div>
                </div>

                <div class="accordion__item">
                    <header class="accordion__header">
                        <h3 class="accordion__title" style="font-size:large;">深度学习方法</h3>
                    </header>
    
                    <div class="accordion__content">
                        <p class="accordion__description" style="color:black" >
                          深度学习的原理与机器学习类似，但是，它是通过多层神经网络来学习和处理数据。这些神经网络由许多节点和层组成，每个节点都会接收一些输入，并计算出相应的输出。深度学习的主要任务是选择适当的网络结构和参数来最小化预测误差，以实现对复杂数据和任务的准确建模。在桥梁评估任务中，合适层数神经网络更可以体现出桥梁的不同种状态以及其特征。
                        </p>
                    </div>
                </div>
            </div>
          </div>
    
    </div>

    <!--病害图谱-->
    <div class="sec" id="sec" data-reveal>
      <div class="flex-container">
        <div class="graph-container" style=" width:40%">
          <h2>桥梁病害知识图谱</h2>
          <div class="animated-border"  data-reveal>
            <h3>{{ selectedNode.name }}</h3>
            <p>{{ selectedNode.description }}</p>
          </div>
        </div>

        <div class="graph-container" style="width:60%">
          <div
            class="echart graph-container" data-reveal
            ref="chart2"
            id="mychart"
            :style="{ float:'left',width: '800px', height: '600px', }"
            ></div> 
        </div>

      </div>
  </div>
    
    <!--专业评估-->
    <footer class="footer">

      <div class="footer-top section" id="contact">
        <div class="container">

          <p class="section-subtitle" data-reveal>桥联科技</p>

          <h3 class="h2 section-title" data-reveal>
            <br>
            尝试找寻更为专业的桥梁评估？<br>
            使用服务
          </h3>

          <a href="#" class="btn-icon" data-reveal>
            <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon">
          </a>

          <div width="159" height="176" loading="lazy" alt="photography"
            class="abs-img abs-img-1" data-reveal></div>

          <div  width="265" height="275" loading="lazy" alt="photography"
            class="abs-img abs-img-2" data-reveal></div>

          <div  width="303" height="272" loading="lazy" alt="photography"
            class="abs-img abs-img-3" data-reveal></div>

          <div  width="175" height="175" loading="lazy" alt="photography"
            class="abs-img abs-img-4" data-reveal></div>
          
          <img src="/images/footer-shape.svg" width="185" height="134" loading="lazy" alt="" class="shape">
            
        </div>
      </div>
      

      <div class="footer-bottom">
        <div class="container">
          
          <a href="#" class="logo">
            <img src="/images/logo.svg" width="40" height="40" loading="lazy" alt="Richard home">
          </a>
          

          <ul class="social-list">

            <li>
              <a href="#" class="social-link">Weibo.</a>
            </li>

            <li>
              <a href="#" class="social-link">WeChat.</a>
            </li>

            <li>
              <a href="#" class="social-link">Tiktok.</a>
            </li>

          </ul>

          <p class="copyright">Made with Tech & Aesthetics</p>

        </div>
      </div>
      

      <div class="footer-bg has-before">
        <img src="/images/stars.png" width="1920" height="1135" loading="lazy" alt="photography"
          class="img-cover">
      </div>

    </footer>
  </div>
    
    



    
  

  


    



  
  
    
</template>
   
  <script>
  import * as echarts from "echarts";
  import chinaMap from "@/map/china.json";

  import * as base64 from 'base-64'
  import CryptoJs from 'crypto-js'
 

    export default {
      name: 'page0',
      data() {
        return {
          hovering: false,
          loaded: false,
          children : [
            {   
                          "name": "桥梁病害信息",
                          "color": "#2C1959",
                          "children": [
                              {
                                  "name": "上部结构",
                                  "color": "#A479F4",
                                  "children": [
                                      {"name": "梁体翼板",
                                  "color":"indigo",
                                      "children":[
                                      {"name":"梁体翼板横向裂缝",
                                  "color":"#B193E0"},
                                  ]},
                                      {"name": "梁体钢筋",
                                      "color":"indigo",
                                      "children":[
                                      {"name":"梁体钢筋腐蚀",
                                  "color":"#B193E0"}
                                
                                  ]
                                  },
                                      {"name":"梁体底板",
                                      "color":"indigo",
                                      "children":[
                                      {"name":"梁体底板横向裂缝",
                                  "color":"#B193E0"},
                                  {"name":"梁体底板混凝土破损",
                                  "color":"#B193E0"},
                                  {"name":"梁体底板纵向裂缝",
                                  "color":"#B193E0"},]},
                                      {"name":"梁体腹板",
                                      "color":"indigo",
                                      "children":[
                                      
                                  {"name":"梁体腹板混凝土破损",
                                  "color":"#B193E0"},
                                  {"name":"梁体腹板竖向裂缝",
                                  "color":"#B193E0"},]}
                                  ]
                              },
                              {
                                  "name": "支座部分",
                                  "color": "#A479F4",
                                  "children": [
                                      {"name": "支座",
                                      "color":"indigo",
                                      "children":[
                                      {"name":"支座变形",
                                  "color":"#B193E0"},
                                  {"name":"支座开裂",
                                  "color":"#B193E0"},
                                  {"name":"支座脱空",
                                  "color":"#B193E0"}
                                  ]}
                                  ]
                              },
                              {
                                  "name": "桥面系",
                                  "color": "#A479F4",
                                  "children": 
                                      [{"name": "伸缩缝",
                                      "color":"indigo",
                                      "children":[
                                      {"name":"伸缩缝混凝土开裂",
                                  "color":"#B193E0"}
                                
                                  ]
                                  }  ]
                                  
                              },
                              {
                                
                                      "name": "墩台", "color":"indigo",
                                      "children":[
                                      {"name":"墩台裂缝",
                                  "color":"#B193E0"},
                                  {"name":"墩台钢筋腐蚀",
                                  "color":"#B193E0"}
                                
                                  ]

                                  
                              },
                          ]
              },
          ],
          Dnodes: {
            '桥梁病害信息': { description: '桥梁也会生病？\n  近年来，桥梁垮塌事故屡有发生，给国家和人民生命财产造成了极大的损失。究其原因，绝大多数是由于桥梁病害没有得到及时发现，更没有及时诊治。这固然与我们的桥梁维养水平有关，但主要还是我们对桥梁病害认知不够、对病害的危害性认识不足。在此，我们针对较常见的桥梁病害进行了整理和说明。' },
          
            '上部结构': { description: '梁体钢筋在桥梁结构中起着至关重要的作用，但可能会受到锈蚀、疲劳、变形和开裂等病害的影响。这些病害会削弱钢筋的结构性能，导致桥梁的承载能力下降和安全隐患增加。' },
              '梁体翼板':{ description:'所谓"翼板"，就是闭合结构以外的悬臂部分，如工字钢，中间竖着的肋板，两边悬着的就是翼板。桥梁一般都设有翼板；如T梁横着的部分就是一般；空心板最外缘的也是翼板；小箱梁除了闭合的部分，其他都是翼板。'},
                '梁体翼板横向裂缝':{ description:'梁板横向裂缝是指在梁板正截面上出现的水平方向的裂缝。产生这种裂缝的主要原因是梁板受到了水平方向上的拉力。而这种拉力往往是由荷载超载、钢筋锈蚀、基础沉降因素导致的。'},
              '梁体腹板':{ description:'梁腹板是工程构件名词，指梁除去与板重叠所剩下的部分。工字型梁或板梁联系上下翼缘或T型梁翼缘以下的竖向板或箱梁的侧壁，主要功能是抵抗剪力，也承担部分弯矩。'},
                '梁体腹板混凝土破损':{ description:'梁体腹板在使用过程中受到的荷载、温度变化、湿度、化学腐蚀等环境条件也会影响混凝土的性能，长期作用下可能导致破损。同时，如果梁体腹板长期缺乏维护保养，比如没有及时修补裂缝、防水保温措施不到位等，会加速混凝土破损的发展。'},
                '梁体腹板竖向裂缝':{ description:'一方面，过大的荷载或不均匀的荷载分布可能导致梁体腹板出现裂缝；另一方面，振捣不到位、拌和不均匀、浇筑过程中出现空洞或渗水等施工质量问题也可能导致裂缝的形成。裂缝会加速混凝土结构的老化，降低使用寿命，影响结构的可靠性和耐久性。'},
              '梁体底板': { description: '桥梁底板是桥梁结构中至关重要的组成部分，然而它也可能受到各种病害的影响。常见的病害包括裂缝、腐蚀、拱起和沉降。' },
                '梁体底板混凝土破损':{description:'顾名思义，桥梁底版的混凝土破损，将会直接导致底版的预应力显著增大，危害该底版部分的安全性。'},
                '梁体底板横向裂缝':{ description:'产生裂缝的机理主要是由于混凝土抗拉能力不足,导致处于正弯矩区的梁底部和负弯矩区的梁体出现裂缝。'},
                '梁体底板纵向裂缝':{ description:'荷载问题、地基沉降、结构设计问题都是梁体底板纵向裂缝的原因。对于新建工程，应在设计和施工阶段注意减少裂缝的发生可能性；对于现有工程，及时发现并修复裂缝，加强结构监测和维护，有助于延长结构的使用寿命，确保结构的安全稳定。'},
              '梁体钢筋':{ description:'钢筋规格是梁桥建设中很重要的一环，需要根据实际情况进行挑选。建议在梁桥建设过程中，仔细考虑桥梁类型、跨度和设计荷载等重要因素，选择合适的钢筋规格，保证桥梁的安全性能和承载能力。'},
                '梁体钢筋腐蚀':{ description:'钢筋混凝土结构在环境的作用下，如冷热循环、干湿交替以及冲击载荷等，就会产生一定的裂纹，增加孔洞之间与裂纹之间的连接；而后环境中的腐蚀介质，包括水，就会渗透进钢筋混凝土结构的内部，钢筋产生锈蚀、水的结冰以及混凝土内部的内应力等，就会使混凝土膨胀，强度和刚度下降，而产生严重的开裂、剥落等。'},
            
            '支座部分':{ description:'桥梁支座是连接桥梁上部结构和下部结构的重要结构部件，位于桥梁和垫石之间，它能将桥梁上部结构承受的荷载和变形（位移和转角）可靠地传递给桥梁下部结构，是桥梁的重要传力装置。'},
              '支座':{ description:'桥梁支座的作用来与：首先，传递上部结构的支承反力，包括恒载和活载引起的竖向力和水平力；其次，保证结构在活载，温度变化，混凝土收缩和徐变等因素作用下能自由变形，以使上、下部结构的实际受力情况符合结构的静力图式。'},
                '支座变形':{ description:'桥梁支座的主要作用是将桥面荷载传递到桥墩上，同时还能满足桥梁的伸缩变形、摆动变形、旋转变形等要求。桥梁支座变形的原因很多，主要包括材料、制造、安装、使用过程中的自然老化、劣化、变形等因素。比如，材料疲劳、焊接质量、连接螺栓松动等都可能导致支座变形。'},
                '支座开裂':{ description:'支座开裂的主要原因，是桥梁下部受到的压力、扭力、震动、温度变化等外力因素都会对垫石造成影响，从而导致垫石开裂。我们可以通过更换和修补等方法，进行处理。'},
                '支座脱空':{ description:'支座脱空有几种原因，包括地基沉降、支座材料老化、支座构造缺陷、水困扰以及坍塌风险。桥梁支座脱空会对交通产生严重影响，必须及时修复。'},
            
            '桥面系':{ description:'桥面系指的是桥梁附属设施中，直接承受车辆、人群等荷载并将其传递至主要承重构件的桥面构造系统，包括桥面铺装、桥面板、纵梁、横梁、遮板、人行道等。桥面板，加筋肋，纵梁，横梁等构件组成的直接承受车辆荷载作用的桥面构造系统。桥面系包括纵梁、横梁和纵梁间的连接系。'},
              '伸缩缝':{ description:'为满足桥面变形的要求，通常在两梁端之间、梁端与桥台之间或桥梁的铰接位置上设置伸缩缝。桥梁伸缩缝的作用在于调节由车辆荷载和桥梁建筑材料所引起的上部结构之间的位移和联结。斜交桥的伸缩装置一旦被破坏，将严重影响行车的速度、舒适性与安全，甚至造成行车安全事故。'},
                '伸缩缝混凝土开裂':{ description:'伸缩缝处混凝土开裂的原因有以下三点：1. 内部应力过大：当温度存在显著变化时，伸缩缝处混凝土可能会因内部应力过大而开裂。2. 施工问题：混凝土施工过程中若未能严格控制水泥、水和骨料的比例，可能会导致混凝土的强度不足。3. 材料问题：如果柔性材料放置不当或选择的材料不合适，则有可能导致混凝土伸缩缝处的开裂。'},
            
            '墩台':{ description:'桥梁墩台是支承桥梁上部结构的构筑物，桥梁墩台是桥墩和桥台的合称。桥墩位于相邻桥跨之间，桥台位于桥梁两端。桥台后端伸入路基，兼有挡住桥头路基填土以及连接路基和桥跨的作用。桥墩、桥台和桥梁基础又统称为桥梁下部结构。'},
              '墩台裂缝':{ description:'常见的墩台裂缝有两种：墩台的水平裂缝，多为混凝土浇筑接缝不良所引起的；从根底向上开展至墩台上部的裂缝，其原因是根底松软或沉陷不均匀而引起。'},
              '墩台钢筋腐蚀':{ description:'在桥梁墩台钢筋的锈蚀中，外部环境对其有着直接影响，湿度是对桥梁钢筋锈蚀影响最大的一个外部因素。同时，内部因素有钢筋保护层碳化锈蚀和氯离子或氯化物锈蚀。值得一提的是，墩台钢筋锈蚀是最普遍存在的桥梁病害之一。'},

          },
          selectedNode: {
            name: '',
            description: ''
          },
          requestObj: {
            APPID: '143a2247',
            APISecret: 'ZGI3YjZkOWJlNGFiOGYyM2QyNTAzYjEw',
            APIKey: 'f5d834927760df0baf3140a12539395c',
            Uid: 'mynameiswatermelon',
            sparkResult: ''
          },
          result: null,
          questionInput: null,
        
      };
      },
      mounted() {
        this.initParallaxScrolling();
        this.initEcharts_1();
        this.initEcharts_2();
        this.initEcharts_3();
        this.initEcharts_4();
        this.setupAccordion();
        // 滚动浮出效果
        window.addEventListener("scroll", this.scrollReveal);
        this.scrollReveal();
        // 初始加载页面效果
        window.addEventListener("load", this.onPageLoad);


        // 接入大模型
        let questionInput = document.querySelector('#question')
        this.questionInput = questionInput
        let sendMsgBtn = document.querySelector('#btn')
        let result = document.querySelector('#result')
        this.result = result
        // 点击发送信息按钮
        sendMsgBtn.addEventListener('click', () => {
          this.sendMsg()
        })
        // 输入完信息点击enter发送信息
        questionInput.addEventListener('keydown', function (event) {
          if (event.key === 'Enter') {
            this.sendMsg()
          }
        })



        
      },
      beforeDestroy() {
        window.removeEventListener("load", this.onPageLoad);
      },

      
      

      methods: {
        initParallaxScrolling() {
          let stars = document.getElementById('stars');
          let moon = document.getElementById('moon');
          let mountains_behind = document.getElementById('mountains_behind');
          let text = document.getElementById('text');
          let btn = document.getElementById('button');
          let mountains_front = document.getElementById('mountains_front');
          let header = document.querySelector('.header');

          window.addEventListener('scroll', function(){
            let value = window.scrollY;
            stars.style.left = value * 0.25 + 'px';
            moon.style.top = value * 1.05 + 'px';
            mountains_behind.style.top = value * 0.5 + 'px';
            mountains_front.style.top = value * 0 + 'px';
            text.style.marginRight = value * 4 + 'px';
            text.style.marginTop = value * 1.5 + 'px';
            btn.style.marginTop = value * 1.5 + 'px';
          header.style.top = value * 0.5 + 'px';
          });
        },
        initEcharts_1() {
          var option = {
          tooltip: {
              trigger: 'axis'
          },
          xAxis: {
              type: 'category',
              data: ['2009','2010','2011','2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
          },
          yAxis: {
              type: 'value',
              min: 600000,
              max: 1000000,
              interval: 50000,
          },
          series: [{
              name: '桥梁数',
              type: 'line',
              data: [621907,658126,689417,713393,735291,757130,779159,805291,832478,851521,878279,912786,961139]
          }]
          };


          var myChart = echarts.init(this.$refs.chart1);// 图标初始化
          myChart.setOption(option);// 渲染页面
          //随着屏幕大小调节图表
          window.addEventListener("resize", () => {
            myChart.resize();
          });
        },
        initEcharts_2() {
          var option = {
            series: {
                    type: 'graph',
                    layout: 'force',
                    roam: true,
                    force: {
                        repulsion: 300
                    },
                    data: [{
                        name: "拖拽或点击",
                        x: 500,
                        y: 300,
                        symbolSize: 40,
                        itemStyle: {
                            color: "#573F84",
                            borderWidth: 0
                        },
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: '{b}'
                        }
                    }],
                    links: [],
                    categories: [],
                    focusNodeAdjacency: true,
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    lineStyle: {
                        normal: {
                            opacity: 0.9,
                            width: 2,
                            curveness: 0
                        }
                    }
            }
          };

          var color = 'blue'
          function setChildrenNodes(parentNode, categoryIndex) {
              if (parentNode.children) {
                  for (var i = 0; i < parentNode.children.length; i++) {
                      var childNode = parentNode.children[i];
                      if (childNode.color) {
                          color = childNode.color;
                      } else {
                          color = 'blue'; //默认颜色
                      }
                      option.series.data.push({
                          name: childNode.name,
                          category: categoryIndex,
                          itemStyle: {
                              color: color,
                              borderWidth: 0
                          },
                          symbolSize: 50
                      });
                      option.series.links.push({
                          source: parentNode.name,
                          target: childNode.name
                      });
                      setChildrenNodes(childNode, categoryIndex + 1);
                  }
              }
          }
          setChildrenNodes(this.$data, 0); 
          var myChart = echarts.init(this.$refs.chart2);
          myChart.setOption(option);
          

          window.addEventListener("resize", () => {
            myChart.resize();
          });



        
          myChart.on('click', params => {
            if (params.data && params.data.name) {
              // 根据点击事件中的数据名获取对应的描述
              const description = this.Dnodes[params.data.name]?.description || '';
              // 更新 selectedNode 对象以显示选定节点的信息
              this.selectedNode = { name: params.data.name, description: description };
            }
          });
        },

        initEcharts_3() {
          echarts.registerMap("china", { geoJSON: chinaMap });
          var option = {
            tooltip: {
              trigger: 'item',
              formatter: function (params) {
                if (params.name) {
                  return params.name + ' : ' + (isNaN(params.value) ? 0 : parseInt(params.value));
                }
              }
            },
            visualMap: {
              top: 'middle',
              left: 'right',
              min: 5000,
              max: 75000,
              realtime: false,
              calculable: true,
              inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
              }
            },
            series: [
              {
                name: '模拟数据',
                type: 'map',
                mapType: 'china',
                roam: false,
                itemStyle: {
                  normal: {
                    label: {
                      show: true,
                      textStyle: {
                        color: "black"
                      }
                    }
                  },
                  zoom:"20",
                  emphasis: {
                    label: { show: true }
                  }
                },
                top: "3%",
                data: [
                    {name: '北京市', value: 6898},
                    {name: '天津市', value: 4120},
                    {name: '上海市', value: 11692},
                    {name: '重庆市', value: 13525},
                    {name: '河北省', value: 45623},
                    {name: '河南省', value: 54954},
                    {name: '云南省', value: 37872},
                    {name: '辽宁省', value: 49860},
                    {name: '黑龙江省', value: 23718},
                    {name: '湖南省', value: 51302},
                    {name: '安徽省', value: 49151},
                    {name: '山东省', value: 64718},
                    {name: '新疆维吾尔自治区', value: 16781},
                    {name: '江苏省', value: 71356},
                    {name: '浙江省', value: 52815},
                    {name: '江西省', value: 27860},
                    {name: '湖北省', value: 41326},
                    {name: '广西壮族自治区', value: 24775},
                    {name: '甘肃省', value: 17510},
                    {name: '山西省', value: 15756},
                    {name: '内蒙古自治区', value: 26979},
                    {name: '陕西省', value: 38065},
                    {name: '吉林省', value: 17714},
                    {name: '福建省', value: 32966},
                    {name: '贵州省', value: 27239},
                    {name: '广东省', value: 51302},
                    {name: '青海省', value: 8628},
                    {name: '西藏自治区', value: 14025},
                    {name: '四川省', value: 47042},
                    {name: '宁夏回族自治区', value: 5231},
                    {name: '海南省', value: 8530},
                    {name: '台湾省', value: 0},
                    {name: '香港特别行政区', value: 0},
                    {name: '澳门特别行政区', value: 0}
                  
                ]
              }
            ]
          };
          
          // 使用刚指定的配置项和数据显示图表
          var myChart3 = echarts.init(this.$refs.chart3);
          myChart3.setOption(option);
          window.addEventListener("resize", () => {
            myChart3.resize();
          });
          
        },

        initEcharts_4() {
          var option = {
          tooltip: {
              trigger: 'axis'
          },
          xAxis: {
              type: 'category',
              boundaryGap:false,
              data: ['1996','1997','1998','1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008']
          },
          yAxis: {
              type: 'value',
              min: 1500,
              max: 12000,
              interval: 1000,
          },
          
          series: [{
              name: '桥梁数',
              type: 'line',
              data: [1690,1762,2598,3326,4432,6948,7035,7225,7297,8070,10199,1816,1879],
              areaStyle:{}
          }]
          };


          var myChart = echarts.init(this.$refs.chart4);// 图标初始化
          myChart.setOption(option);// 渲染页面
          //随着屏幕大小调节图表
          window.addEventListener("resize", () => {
            myChart.resize();
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

        onPageLoad() {
          this.loaded = true; // 页面加载完成后，设置为已加载状态
          
        },

        // 发送消息
        async sendMsg() {
          // 获取请求地址
          let myUrl = await this.getWebsocketUrl()
          console.log('myUrl', myUrl)
          // 获取输入框中的内容
          let inputVal = this.questionInput.value
          // 每次发送问题 都是一个新的websocketqingqiu
          let socket = new WebSocket(myUrl)

          // 监听websocket的各阶段事件 并做相应处理
          socket.addEventListener('open', (event) => {
            console.log('开启连接！！', event)
            // 发送消息
            let params = {
              header: {
                app_id: this.requestObj.APPID,
                uid: this.requestObj.Uid
              },
              parameter: {
                chat: {
                  domain: 'general',
                  temperature: 0.5,
                  max_tokens: 1024
                }
              },
              payload: {
                message: {
                  // 如果想获取结合上下文的回答，需要开发者每次将历史问答信息一起传给服务端，如下示例
                  // 注意：text里面的所有content内容加一起的tokens需要控制在8192以内，开发者如有较长对话需求，需要适当裁剪历史信息
                  text: [
                    { role: 'user', content: '你是谁' }, //# 用户的历史问题
                    { role: 'assistant', content: '我是AI助手' }, //# AI的历史回答结果
                    // ....... 省略的历史对话
                    { role: 'user', content: inputVal } //# 最新的一条问题，如无需上下文，可只传最新一条问题
                  ]
                }
              }
            }
            console.log('发送消息')
            socket.send(JSON.stringify(params))
          })
          socket.addEventListener('message', (event) => {
            let data = JSON.parse(event.data)
            console.log('收到消息！！', data)
            this.requestObj.sparkResult += data.payload.choices.text[0].content
            if (data.header.code !== 0) {
              console.log('出错了', data.header.code, ':', data.header.message)
              // 出错了"手动关闭连接"
              socket.close()
            }
            if (data.header.code === 0) {
              // 对话已经完成
              if (data.payload.choices.text && data.header.status === 2) {
                this.requestObj.sparkResult += data.payload.choices.text[0].content
                setTimeout(() => {
                  // "对话完成，手动关闭连接"
                  socket.close()
                }, 1000)
              }
            }
            this.addMsgToTextarea(this.requestObj.sparkResult)
          })
          socket.addEventListener('close', (event) => {
            console.log('连接关闭！！', event)
            // 对话完成后socket会关闭，将聊天记录换行处理
            this.requestObj.sparkResult = this.requestObj.sparkResult + '&#10;'
            this.addMsgToTextarea(this.requestObj.sparkResult)
            // 清空输入框
            this.questionInput.value = ''
          })
          socket.addEventListener('error', (event) => {
            console.log('连接发送错误！！', event)
          })
        },
        addMsgToTextarea(text) {
          this.result.innerHTML = text
        },
        // 鉴权url地址
        getWebsocketUrl() {
          return new Promise((resovle) => {
            let url = 'wss://spark-api.xf-yun.com/v1.1/chat'
            var host = location.host
            let apiKeyName = 'api_key'
            let date = new Date().toGMTString()
            let algorithm = 'hmac-sha256'
            var headers = 'host date request-line'

            let signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v1.1/chat HTTP/1.1`
            let signatureSha = CryptoJs.HmacSHA256(signatureOrigin, this.requestObj.APISecret)
            let signature = CryptoJs.enc.Base64.stringify(signatureSha)

            let authorizationOrigin = `${apiKeyName}="${this.requestObj.APIKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`

            let authorization = base64.encode(authorizationOrigin)

            // 将空格编码
            url = `${url}?authorization=${authorization}&date=${encodeURI(date)}&host=${host}`

            resovle(url)
          })
        },

        setupAccordion() {
          // 获取所有accordion项目
          const accordionItems = document.querySelectorAll('.accordion__item');

          // 遍历每个项目
          accordionItems.forEach((item) => {
            const accordionHeader = item.querySelector('.accordion__header');
            
            // 为每个header添加点击事件监听
            accordionHeader.addEventListener('click', () => {
              // 获取当前打开的项目
              const openItem = document.querySelector('.accordion-open');
              
              // 切换当前项目
              this.toggleItem(item);

              // 如果有打开的项目，并且不是当前点击的项目，则关闭它
              if (openItem && openItem !== item) {
                this.toggleItem(openItem);
              }
            });
          });
        },
        toggleItem(item) {
          // 获取accordion内容
          const accordionContent = item.querySelector('.accordion__content');
          
          // 如果项目已打开，则关闭它
          if (item.classList.contains('accordion-open')) {
            accordionContent.removeAttribute('style');
            item.classList.remove('accordion-open');
          } else {
            // 否则，打开项目并设置内容高度
            accordionContent.style.height = `${accordionContent.scrollHeight}px`;
            item.classList.add('accordion-open');
          }
        }
  },
  

      

      computed: {
        
      }

       
        

      

    
        
    }

  
  
    

  </Script>
  
<style scoped>
  @import '@/css/style.css';
</style>
  