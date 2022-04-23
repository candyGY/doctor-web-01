<template>
    <div class="main">
        <el-row>
            <el-col :span="12">
                <div class="index">
                    <div class="index-profile">
                        <div class="title">
                            <img :src="avatarFilePath" class="profile-img">
                        </div>
                        <ul  class="list-group list-group-striped">
                            <li class="list-group-item" style="text-align: center;">
                                <span>{{user.userName}}</span>
                                <span v-if="user.auditStatus == 0">（待认证）</span>
                                <span v-if="user.auditStatus == 1">（驳回）</span>
                                <span v-if="user.auditStatus == 2">（审核通过）</span>
                                <span v-if="user.auditStatus == 3">（待审核）</span>
                            </li>
                            <li class="list-group-item" style="text-align: center;" v-if="user.address">
                                <span>诊所地址：</span>
                                <span>{{user.address}}</span>
                            </li>
                            <li class="list-group-item">
                                <svg-icon icon-class="iconPark-add-user2" />
                                <span class="pull-right">本周问诊数量：{{user.countExamChat}}人</span>
                            </li>
                            <li class="list-group-item">
                                <svg-icon icon-class="if-prescription" />
                                <span class="pull-right">本周检查人数：{{user.countExamProject}}人</span>
                            </li>
                            <li class="list-group-item">
                                <svg-icon icon-class="farfa-money-bill-alt" />
                                <span class="pull-right">销售收入：587548.24元</span>
                            </li>
                            <li class="list-group-item">
                                <svg-icon icon-class="riLine-vip-line" />
                                <span class="pull-right">合作等级：一级合作伙伴</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </el-col>
            <el-col :span="11" :offset="offsetVale">
                <div id="topNavigation" ref="topNavigation">
                    <el-row>
                        <el-col :span="5">
                            <div class="navigationDiv" @click="goNavigation('patient/list')">
                                <svg-icon icon-class="iconPark-classroom" class="navigationSvn"/>
                                <div class="navigationTitle">我的患者</div>
                            </div>
                        </el-col>
                        <el-col :span="5" :offset="offsetVale">
                            <div class="navigationDiv" @click="goNavigation('dynamicEcg')">
                                <svg-icon icon-class="stLine-cloud-upload-l" class="navigationSvn"/>
                                <div class="navigationTitle">动态心电上传</div>
                            </div>
                        </el-col>
                        <el-col :span="5" :offset="offsetVale">
                            <div class="navigationDiv" @click="goNavigation('examineList')">
                                <svg-icon icon-class="if-history" class="navigationSvn"/>
                                <div class="navigationTitle">检查记录</div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5">
                            <div class="navigationDiv" @click="goNavigation('extreme')">
                                <svg-icon icon-class="iconPark-flash-payment" class="navigationSvn"/>
                                <div class="navigationTitle">极速问诊</div>
                            </div>
                        </el-col>
                        <el-col :span="5" :offset="offsetVale">
                            <div class="navigationDiv" @click="handleNotOpenNavigationButton">
                                <svg-icon icon-class="iconPark-pesticide" class="navigationSvn"/>
                                <div class="navigationTitle">药械商城</div>
                            </div>
                        </el-col>
                        <el-col :span="5" :offset="offsetVale">
                            <div class="navigationDiv" @click="goNavigation('HealthScience')">
                                <svg-icon icon-class="iconPark-preschool" class="navigationSvn"/>
                                <div class="navigationTitle">健康科普</div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5">
                            <div class="navigationDiv" @click="goNavigation('lentivirus')">
                                <svg-icon icon-class="antOutline-control" class="navigationSvn"/>
                                <div class="navigationTitle">慢病管理</div>
                            </div>
                        </el-col>
                        <el-col :span="5" :offset="offsetVale">
                            <div class="navigationDiv" @click="handleNotOpenNavigationButton">
                                <svg-icon icon-class="antOutline-insurance" class="navigationSvn"/>
                                <div class="navigationTitle">学习交流</div>
                            </div>
                        </el-col>
                        <el-col :span="5" :offset="offsetVale">
                            <div class="navigationDiv" @click="nextNavigation">
                                <svg-icon icon-class="md-chevron_right" class="navigationSvn"/>
                                <div class="navigationTitle">下一页</div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div id="bottomNavigation" ref="bottomNavigation">
                    <el-row>
                        <el-col :span="5">
                            <div class="navigationDiv" @click="previousNavigation">
                                <svg-icon icon-class="md-navigate_before" class="navigationSvn"/>
                                <div class="navigationTitle">上一页</div>
                            </div>
                        </el-col>
                        <el-col :span="5" :offset="offsetVale">
                            <div class="navigationDiv" @click="handleNotOpenNavigationButton">
                                <svg-icon icon-class="fa5-stethoscope" class="navigationSvn"/>
                                <div class="navigationTitle">云诊室</div>
                            </div>
                        </el-col>
                        <el-col :span="5" :offset="offsetVale">
                            <div class="navigationDiv" @click="handleNotOpenNavigationButton">
                                <svg-icon icon-class="md-location_on" class="navigationSvn"/>
                                <div class="navigationTitle">我的地址</div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5">
                            <div class="navigationDiv" @click="handleNotOpenNavigationButton">
                                <svg-icon icon-class="md-account_balance_wallet" class="navigationSvn"/>
                                <div class="navigationTitle">我的钱包</div>
                            </div>
                        </el-col>
                        <el-col :span="5" :offset="offsetVale">
                            <div class="navigationDiv" @click="handleNotOpenNavigationButton">
                                <svg-icon icon-class="if-database" class="navigationSvn"/>
                                <div class="navigationTitle">我的积分</div>
                            </div>
                        </el-col>
                        <el-col :span="5" :offset="offsetVale">
                            <div class="navigationDiv" @click="handleNotOpenNavigationButton">
                                <svg-icon icon-class="md-shopping_cart" class="navigationSvn"/>
                                <div class="navigationTitle">购买记录</div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5">
                            <div class="navigationDiv" @click="handleNotOpenNavigationButton">
                                <svg-icon icon-class="md-grade" class="navigationSvn"/>
                                <div class="navigationTitle">我的收藏</div>
                            </div>
                        </el-col>
                        <el-col :span="5" :offset="offsetVale">
                            <div class="navigationDiv" @click="handleNotOpenNavigationButton">
                                <svg-icon icon-class="iconPark-find-one" class="navigationSvn"/>
                                <div class="navigationTitle">基因筛查</div>
                            </div>
                        </el-col>
                        <el-col :span="5" :offset="offsetVale">
                            <div class="navigationDiv" @click="handleNotOpenNavigationButton">
                                <svg-icon icon-class="antOutline-insurance" class="navigationSvn"/>
                                <div class="navigationTitle">保险套餐</div>
                            </div>
                        </el-col>
                    </el-row>
                </div>

            </el-col>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                avatarFilePath: require("@/assets/images/profile.png"),
                offsetVale: 1,
                user: {},
                agree: '',
                codeUrl: "",
                cookiePassword: "",
                loading: false,
                redirect: undefined
            };
        },
        watch: {

        },
        created() {

        },
        methods: {
            // 提示未开通的功能
            handleNotOpenNavigationButton(){

            },
            clickItem(e) {
                e === this.agree ? this.agree = '' : this.agree = e
            },
            nextNavigation(){
                // 当前页隐藏 topNavigation
                document.getElementById("topNavigation").style.display="none"
                // 显示下一个
                document.getElementById("bottomNavigation").style.display="block"
            },
            previousNavigation(){
                // 当前页隐藏 topNavigation
                document.getElementById("topNavigation").style.display="block"
                // 显示下一个
                document.getElementById("bottomNavigation").style.display="none"
            },
            goNavigation(e){

            }
        }
    };
</script>

<style>
    .main{
        margin-top: 150px;
    }
    .index {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 540px;
        background-size: cover;
        width: 100%;
    }

    .title {
        margin: 0px auto 30px auto;
        text-align: center;
        color: #707070;
    }

    .title .profile-img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        box-shadow: 0 0 4px #ccc;
        overflow: hidden;
    }

    .index-profile {
        border-radius: 6px;
        background: #ffffff;
        width: 400px;
        padding: 25px 25px 5px 25px;
        height: 95%;
    }
    .list-group {
        padding: 20px 0px;
        list-style: none;
    }

    .list-group-striped > .list-group-item {
        border-left: 0;
        border-right: 0;
        border-radius: 0;
        padding-left: 20px;
        padding-right: 0;
        margin-bottom: 30px;
        text-align: left;
    }
    .index-tip {
        font-size: 13px;
        text-align: center;
        color: #bfbfbf;
    }

    .index-code {
        width: 33%;
        height: 38px;
        float: right;
    }

    .index-code img {
        cursor: pointer;
        vertical-align: middle;
    }

    .index-code-img {
        height: 38px;
    }

    .rememberPass {
        font-size: 14px;
        float: right;
        color: #409EFF;
        text-decoration: none;
    }

    .navigationDiv {
        text-align: center;
        background-color: white;
        height: 150px;
        padding-top: 10px;
        margin-bottom: 30px;
    }

    .navigationDiv .navigationSvn {
        font-size: 100px;
        line-height: 150px
    }

    .navigationDiv .navigationTitle {
        font-size: 20px;
        font-weight: bold;
        color: #5B5B5B;
        padding-top: 10px;
    }
    .pull-right {
        /*float: right !important;*/
        margin-left: 20px;
    }
    #bottomNavigation{
        display: none;
    }
</style>