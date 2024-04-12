
<template>
  <div ref="vantaRef" style="width: 100%; height:870px"></div>
     <div class="banner">
       <h1>桥梁评估系统</h1>
      <h6>
         &ensp;&ensp;Bridge&ensp;&ensp;&ensp;&ensp;evalution&ensp;&ensp;&ensp;&ensp;system&ensp;&ensp;&ensp;&ensp;&ensp;
      </h6>
      <div>
      <el-card class="box-card">
        <h2 style=" text-align: center;">用户登录</h2>
      <div style="width:80%; margin: auto auto;">
        <el-form
       
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-position="left"
          label-width="100px"
          class="login-from"
        >
      
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
         <div style="text-align: center; margin:20px"  >
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <router-link to="/page7">
            <el-button style="margin-left:10px">注册</el-button>
          </router-link>
        </div>
      </el-card>
      </div>
    
  </div>
  <div  class="bk1" style="margin-top: 0;">
    <div>
      <!-- <el-card class="box-card">
        <h2 style=" text-align: center;">用户登录</h2>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-position="left"
          label-width="70px"
          class="login-from"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="btnGroup">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <router-link to="/page7">
            <el-button style="margin-left:10px">注册</el-button>
          </router-link>
        </div>
      </el-card> -->
    </div>
    </div>
  </template>
  
  <script> 
  import axios from "axios"
   import * as THREE from "three";
    import BIRDS from "vanta/src/vanta.birds";
  export default {
    data() {
      return {
        ruleForm: {
          username: "",
          password: "",
        },
        rules: {
          username: [
            { required: true, message: "用户名不能为空！", trigger: "blur" },
          ],
          password: [
            { required: true, message: "密码不能为空！", trigger: "blur" },
          ],
        },
      };
    },
    mounted() {
        this.vantaEffect = BIRDS({
          el: this.$refs.vantaRef,
          THREE: THREE,
        });
        // 修改颜色时 cells 需要全大写字母 可生效
        VANTA.BIRDS({
          el: this.$refs.vantaRef,
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
  
    methods: {
  
      submitForm(formName) {
        var jsonData = JSON.stringify({
                  username: this.ruleForm.username,
                  password: this.ruleForm.password
              });
        // 输出JSON字符串
        console.log(jsonData);
        axios({
            method:'post',
            url:'/login/',
            data:jsonData,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json;charset=utf-8",
        'Authorization': localStorage.eleToken
            }
          }).then(res=>{
            console.log(res)
        
            const { status, token } = res.data;
        console.log(status)
        console.log(token)
            // 根据后端返回的状态显示弹窗
            if (status === '登陆成功') {
              // 登陆成功弹窗
              this.$message.success('登陆成功');
        localStorage.setItem("eleToken", token)	
              // 这里你可以根据需要进行其他操作，比如跳转页面等
         this.$router.push("evalue");
            } else {
              // 其他状态的弹窗
              this.$message.error(status);
            }
  
          })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      // axios({
      //     method:'post',
      //     url:'/datalist/',
      //     headers: {
      //       "Access-Control-Allow-Origin": "*",
      //       "Content-Type": "application/json;charset=utf-8",
      // 		'Authorization': localStorage.eleToken
      //     }
      //   }).then(res=>{
        // console.log(res)
        
        // })
      
      },
    },
  };
  </script>
  
  <style scoped>
  .banner {
        z-index: 999;
        position: absolute;
        top: 15%;
        left: 10%;
        color: #fff;
      }
  .box-card {
    margin: 0px 50vh;
    width: 500px;
    height:300px;
    background-color:rgba(255,255,255,0.95);
  }
  .login-from {
    margin: 30px auto;
  }
    
  .btnGroup{
    margin: 30px ;
  
  }
  #building{
    /* background:url("/public/picture/4.jpg"); */
    width:100%;
    height:100%;
    position:fixed;
    background-size:100% 100%;
  }
  
  .bk1{
      
      background-color: #07192f
      
    }
   h1 {
      font-size: 66px;
    }
  </style>
  