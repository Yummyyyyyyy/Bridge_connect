<template>
    <header class="header">
      <a href="#" class="logo">Logo</a>
      <ul>
        <li><a href="/#/page0#" >主页</a></li>
        <li><a href="/#/page8" class="active">认识桥梁</a></li>
        <li><a href="/#/page6#">登陆｜注册</a></li>
      </ul>
    </header>
    
    <div class="main">
    
        <img src="/images/arrow-up-bold.svg" width="43" height="20" loading="lazy" class="iconfont icon-arrow-down-bold" id="up-btn" @click="slideToPrev">
        <img src="/images/arrow-down-bold.svg" width="43" height="20" loading="lazy" class="iconfont icon-arrow-up-bold" id="down-btn" @click="slideToNext">
    
        <div id="content">
        <div class="card" v-for="(item, index) in cardData" :key="index">
            <div class="card-time">{{ item.year }}</div>
            <div class="card-title">{{ item.title }}</div>
            <div class="card-passage">{{ item.content }}</div>
        </div>
        </div>
        <div id="clock">
            
            
            <div class="clock_container" >
                <img src="/images/bridge_type-5.jpg">
                <img src="/images/bridge_type-6.jpg">
                <img src="/images/bridge_type-7.jpg">
                <img src="/images/bridge_type-8.jpg">
            </div>
            
        </div>
        
            

        

    </div>
    


    


</template>
<script>

export default {
    name: 'page9',
    data() {
        return {
            offset: 0,
            maxOffset: 0,
            minOffset: -3,
            cardData: [
                { year: "1", title: "中国桥梁史｜发展", content: "秦汉时期，是古代桥梁的快速发展时期。这一时期，古人不仅发明了人造建筑材料的砖，而且还创建了砌砖搭建而成的桥梁，这种桥梁为后来出现的拱桥提供了一定的基础。随着人们对铁的熟练提炼以及使用，建筑中的材料变得多样化，也促进了石料更多的使用。因此桥梁在原始只有木质结构的基础上增加了石桥。" },
                { year: "2", title: "中国桥梁史｜鼎盛", content: "隋唐时期是古代桥梁发展的全盛时期。隋唐时期的桥梁建筑比秦汉时期的更为强大。唐宋时期实现了长期的稳定与统一，这使得工商业、交通运输业和科学技术发展水平都非常发达。也使得我国成为了当时是世界上最先进的国家。经济中心的转移使得各地技术相融合，促进了经济和技术的发展，又进一步地促进了桥梁的发展。" },
                { year: "3", title: "中国桥梁史｜延续", content: "元明清时期是桥梁发展的饱和期，几百多年几乎都没有重大的技术和创造突破。当时的最大成果可能就是对古桥进行维修和翻新，并留下了许多桥梁施工的相关技术书籍，为后代提供了大量书面材料，使得很多技术没有失传。到了1881年，清末时期，我国第一条铁路的通车，引发了中国桥梁建筑史的又一次技术革命。" },
                { year: "4", title: "中国桥梁史｜现代", content: "古代中国有许多桥梁建筑，不仅在我国人民心中，而且在国际文化中，都占着极其重要的地位。在我国古代的桥梁历史中，古桥建筑遍布整个祖国的河流，这些都是我们的祖先为了克服大自然障碍的劳动成果。桥梁建筑不仅代表了我国的历史文明，也方便了人们的出行。" }
            ],
        
        }
    },
    mounted() {
        const slides = document.querySelectorAll(".card");
        this.maxOffset = slides.length - 1;
        

    },
    methods: {

        slideToPrev() {
            this.offset = Math.min(this.maxOffset, this.offset + 1);
            const slides = document.querySelectorAll(".card");
            slides.forEach(slide => {
                slide.style.transform = `translateY(${this.offset * 100}%)`;
            });
            
        },
        slideToNext() {
            this.offset = Math.max(this.minOffset, this.offset - 1);
            const slides = document.querySelectorAll(".card");
            slides.forEach(slide => {
                slide.style.transform = `translateY(${this.offset * 100}%)`;
            });
            
        },
       
    }
 
}
</script>
<style scoped>


    .main {
        width: 100vw;
        height: 90vh;
        display: flex;
        position: relative;
        background-color: #2d1b5a;
        overflow: hidden;
        margin-top: 100px
    }

    .iconfont {
        width: 80px;
        height: 80px;
        position: absolute;
        left: 27%;
        z-index: 999;
        font: 900 80px '';
        color: #fff;
    }

    #up-btn {
        top: 5%;
    }

    #down-btn {
        bottom: 5%;
    }

    #content {
        width: 45%;
        height: 100%;
        position: absolute;
        left: 10%;
        overflow: hidden;
    }

    .card {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: white;
        transition: transform .8s ease-in-out;
    }

    .card-time {
        font-size: 40px;
        font-weight: 700;
    }

    .card-title {
        font-size: 50px;
        font-weight: 500;
        padding-bottom: 10px;
        border-bottom: 1px solid white;
        margin-bottom: 10px;
    }

    .card-passage {
        font-size: 24px;
        font-weight: 300;
    }

    #clock {
        height: 1500px;
        /* 纵横比为1:1 */
        aspect-ratio: 1 / 1;
        position: absolute;
        left: 20%;
        top: -70%;
        border-radius: 50%;
        
    }


    .clock_container {
        --bs: 600px;
        display: grid;
        width: var(--bs);
        padding:calc(var(--bs)/20);
        border-radius: 50%;
        
        clip-path: circle(20%);
        overflow: hidden;
/* height: 130%; */
        height: 130%; 
        /* 纵横比为1:1 */
        aspect-ratio: 1 / 1;
        position: relative;
        left: 35%;
        top: -5%;
    } 

    .clock_container::after {
        content: "";
        inset: 0;
        position: absolute;
        padding: inherit;
        border-radius: inherit;
        /*background: pink;/*
        /*xor 遮罩叠加处为透明，透明处与再与新的目标遮罩叠加为不透明*/
        mask: linear-gradient(90deg transparent #fff);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
    } 

    .clock_container img {
        grid-area: 1/1;
        width: 120%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
        transform-origin: 50% 120.7%;
    } 

    .clock_container img {
        animation: rotateMove 16s infinite cubic-bezier(.5,-0.2,.5,1.2);
    }
    .clock_container img:nth-child(2) {
        animation-delay: 4s;
    }
    .clock_container img:nth-child(3) {
        animation-delay: 8s;
    }
    .clock_container img:nth-child(4) {
        animation-delay: 12s;
    }
    @keyframes rotateMove {
        0%,3%    {transform: rotate(0)}
        22%,27%  {transform: rotate(90deg)}
        47%,52%  {transform: rotate(180deg)}
        72%,77%  {transform: rotate(270deg)}
        98%,100% {transform: rotate(360deg)}
    } 

    

</style>