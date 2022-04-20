<template>
    <article>
        <el-row class="loginIndex">
            <el-col :span="12">
                <div class="login">
                    <el-form class="login-form">
                        <div class="title">
                            <img src="../../assets/logo/byyl-logo1.png" class="logo-img">
                        </div>
                        <el-form-item>
                            <el-input type="text" placeholder="请输入手机号" v-model="username">
                                <template #prefix>
                                    <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon"/>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input type="password" placeholder="请输入密码" v-model="password">
                                <template #prefix>
                                    <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
                                </template>
                            </el-input>
                        </el-form-item>
                        <div style="width:100%;text-align: left;">
                            <el-checkbox v-model="rememberMe" style="margin:0px 0px 25px 0px;" checked>记住我</el-checkbox>
                            <span class="rememberPass">
                               <a href="#">忘记密码</a>
                               <a href="#">注册</a>
                           </span>

                        </div>
                        <el-form-item style="width:100%;">
                            <el-button
                                    @click="handleLogin"
                                    :loading="loading"
                                    type="primary"
                                    style="width:100%;">
                                <span v-if="!loading">登 录</span>
                                <span v-else>登 录 中...</span>
                            </el-button>
                        </el-form-item>
                        <el-form-item style="width:100%;">
                            <el-button
                                    @click="getInfo"
                                    :loading="loading"
                                    type="primary"
                                    style="width:100%;">
                                <span v-if="!loading">获得商品信息</span>
                                <span v-else>获 得 中...</span>
                            </el-button>
                        </el-form-item>
                        <el-radio-group v-model="agree" style="margin:0px 0px 25px 0px;">
                            <el-radio>同意隐私协议和服务条款</el-radio>
                        </el-radio-group>
                        <!--  底部  -->
                        <div class="el-login-footer">
                            <div>
                                <span>帮助</span>
                                <span>隐私</span>
                                <span>条款</span>
                            </div>
                            <div>Copyright©2022 白医医疗技术部出品</div>
                        </div>
                    </el-form>
                </div>
            </el-col>
            <el-col :span="11" :offset="1">
                <el-row class="navigationRow">
                    <el-col :span="5">
                        <div class="navigationDiv">
                            <svg-icon icon-class="iconPark-classroom" class="navigationSvn"/>
                            <div class="navigationTitle">我的患者</div>
                        </div>
                    </el-col>
                    <el-col :span="5" :offset="1">
                        <div class="navigationDiv">
                            <svg-icon icon-class="stLine-cloud-upload-l" class="navigationSvn"/>
                            <div class="navigationTitle">动态心电上传</div>
                        </div>
                    </el-col>
                    <el-col :span="5" :offset="1">
                        <div class="navigationDiv">
                            <svg-icon icon-class="if-history" class="navigationSvn"/>
                            <div class="navigationTitle">接诊记录</div>
                        </div>
                    </el-col>
                </el-row>
                <el-row  class="navigationRow">
                    <el-col :span="5">
                        <div class="navigationDiv">
                            <svg-icon icon-class="iconPark-flash-payment" class="navigationSvn"/>
                            <div class="navigationTitle">极速问诊</div>
                        </div>
                    </el-col>
                    <el-col :span="5" :offset="1">
                        <div class="navigationDiv">
                            <svg-icon icon-class="iconPark-pesticide" class="navigationSvn"/>
                            <div class="navigationTitle">药械商城</div>
                        </div>
                    </el-col>
                    <el-col :span="5" :offset="1">
                        <div class="navigationDiv">
                            <svg-icon icon-class="iconPark-bookshelf" class="navigationSvn"/>
                            <div class="navigationTitle">学习交流</div>
                        </div>
                    </el-col>
                </el-row>
                <el-row  class="navigationRow">
                    <el-col :span="5">
                        <div class="navigationDiv">
                            <svg-icon icon-class="antOutline-control" class="navigationSvn"/>
                            <div class="navigationTitle">慢病管理</div>
                        </div>
                    </el-col>
                    <el-col :span="5" :offset="1">
                        <div class="navigationDiv">
                            <svg-icon icon-class="antOutline-insurance" class="navigationSvn"/>
                            <div class="navigationTitle">保险套餐</div>
                        </div>
                    </el-col>
                    <el-col :span="5" :offset="1">
                        <div class="navigationDiv">
                            <svg-icon icon-class="md-chevron_right" class="navigationSvn"/>
                            <div class="navigationTitle">下一页</div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </article>
</template>

<script>
    import {login,list} from '@/api/login'
    import {setToken} from '@/utils/auth'
    export default {
        name: "loginIndex",
        data(){
            return{
                username: "",
                password: "",
                rememberMe: false,
                loading: false,
                agree: false
            }
        },
        methods: {
            handleLogin(){
                console.log("username="+this.username);
                console.log("password="+this.password);
                login(this.username,this.password).then(response=>{
                    console.log("登录验证成功后，返回的结果")
                    console.log(response)
                    if(response.code==200){
                        //登录成功
                        //存token
                        setToken(response.token)
                    }
                }).catch(err=>{
                    console.log(err)
                })
            },
            getInfo(){
                list().then(response=>{
                    console.log("获得商品测试数据")
                    console.log(response)
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>
    .loginIndex{
        border: 1px solid #C3C3C3;
    }
    article{
        padding: 10px;
    }
    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background-size: cover;
        border: 1px solid #D4D4D4;
        width: 100%;
    }
    .login-form {
        border-radius: 6px;
        background: #ffffff;
        width: 400px;
        padding: 25px 25px 5px 25px;
    }

    .login-form .input-icon {
        height: 10px;
        width: 10px;
        margin-left: 2px;
        font-size: 14px;
        margin-top: 10px;
    }

    .login-form .el-input {
        height: 38px;

    }

    .login-form .el-input input {
        height: 38px;
    }
    .login-form .title {
        margin: 0px auto 30px auto;
        text-align: center;
        color: #707070;
    }

    .login-form .title .logo-img {
        width: 200px;
    }
    .login-form .rememberPass {
        font-size: 14px;
        float: right;
    }
    .login-form .rememberPass a{
        color: #409EFF;
        text-decoration: none;
        margin-left: 10px;
    }
    .login-form .el-login-footer {
        margin: 50px 0px;
        height: 40px;
        width: 100%;
        text-align: center;
        font-family: Arial;
        font-size: 12px;
        letter-spacing: 1px;
    }
    .login-form .el-login-footer div {
        padding-bottom: 10px;
    }

    .login-form .el-login-footer div span {
        margin-right: 20px;
    }

    .navigationRow{
        margin-bottom: 20px;
    }
    .navigationDiv {
        text-align: center;
        background-color: white;
        height: 150px;
        padding-top: 10px;
    }

    .navigationDiv .navigationSvn {
        font-size: 100px;
        line-height: 150px;
    }

    .navigationDiv .navigationTitle {
        font-size: 20px;
        font-weight: bold;
        color: #5B5B5B;
        padding-top: 10px;
    }
</style>
