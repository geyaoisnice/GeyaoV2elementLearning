<template>
  <div class="login-page">
    <div class="login-box">
      <h1>歌谣</h1>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="input" v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item :label="'密\xa0\xa0\xa0\xa0码'" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="captchacode">
          <div class="captch-box">
            <el-input v-model.number="ruleForm.captchacode"></el-input>
            <img height="40" src="" />
          </div>
        </el-form-item>
        <el-form-item id="login-btn-box">
          <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {validatorUsername} from "../utils/validata"
import axios from "axios"
export default {
  name: "Login",

  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        captchacode: "",
      },
      rules: {
        username: [
          { require: true, message: "用户名不能为空", trigger: "blur" },
          { validator: validatorUsername, trigger: "blur" },
        ],
        password: [{ require: true, message: "密码不能为空", trigger: "blur" }],
        captchacode: [
          { require: true, message: "验证码不能为空", trigger: "blur" },
        ],
      },
    };
  },

  created() {
    axios.get("http://tech.wolfcode.cn/prod-api/captchaImage").then(res=>{
         console.log(res,"res")
    })
  },

  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid)=>{
            if(valid){

            }else{
                this.$message("请输入正确的信息后提交")
                return false
            }
        })
    },
    
  },
};
</script>

<style lang="less" scoped>
.login-page {
  width: 100%;
  height: 100%;
  background: paleturquoise;
  //   position: relative;
  .login-box {
    width: 400px;
    background: #ccc;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding-top: 20px;
    padding-right: 40px;
    border-radius: 20px;
    h1 {
      text-align: center;
      padding-left: 40px;
      margin-bottom: 20px;
      font-size: 28px;
    }
    .captch-box {
      display: flex;
      margin-left: 20px;
    }
    .login-btn {
      width: 100%;
    }
    ::v-deep #login-btn-box .el-form-item__content {
      margin-left: 40px !important;
    }
  }
}
</style>