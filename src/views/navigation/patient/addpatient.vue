<template>
    <article>
        <el-row class="title">
            <div class="container">申请详情</div>
        </el-row>
        <el-row class="form">
            <el-col :span="16" offset="8">
                <div class="message">
                    <el-form class="form_message">
                        <el-form-item>
                            <span>患者姓名：</span>
                            <div><el-input type="text" placeholder="请输入" v-model="username" class="form_icon"></el-input></div>
                        </el-form-item>
                        <el-form-item>
                            <span>患者性别：</span>
                            <el-radio-group v-model="radio">
                                <el-radio :label="3">男</el-radio>
                                <el-radio :label="6">女</el-radio>
                            </el-radio-group>
                            <span class="age">年龄：</span>
                            <el-cascader :options="options" />
                        </el-form-item>
                        <el-form-item>
                            <span>身份证号：</span>
                            <div><el-input type="text" placeholder="请输入" v-model="identity" class="form_icon"></el-input></div>
                        </el-form-item>
                        <el-form-item>
                            <span>&nbsp&nbsp 电话号：</span>
                            <div><el-input type="text" placeholder="请输入" v-model="identity" class="form_icon"></el-input></div>
                        </el-form-item>
                        <el-form-item>
                            <div class="form_message_btn">
                                <div class="cancel"><el-button>取消</el-button></div>
                                <div class="new"><el-button style="background-color: #409EFF;">新建</el-button></div>
                            </div>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </article>
</template>

<script>
    export default {
        name: "addpatient"
    }
</script>

<style scoped>
    .title{
        border: 1px solid #C3C3C3;
        color: rgba(0, 0, 0, 0.85);
        font-size: 16px;
        text-align: left;
        font-family: PingFangSC-regular;
    }
    .title .container{
        margin-left: 24px;
    }
    .form{
        border: 1px solid pink;
        margin-top: 30px;
        color: rgba(39, 39, 39, 100);
        font-size: 14px;
        text-align: right;
        font-family: SourceHanSansSC-regular;
    }
    .message{
        margin-left: 30px;
    }
    .age{
        margin-left: 100px;
    }
    .form .form_icon{
        margin-left: 10px;
    }
    .form .message .form_message_btn{
        color: rgba(255, 255, 255, 100);
        margin-left: 50px;
        font-size: 14px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
    .form .message .form_message_btn .cancel{
        width: 50px;
        margin-right: 100px;
        float: left;

    }
    .form .message .form_message_btn .new{
        width: 50px;
        margin-right: 20px;
        float: left;
    }
</style>