<template>
    <article>
        <el-row class="back">
            <el-col :span="2" :offset="2">
                <el-icon><back /></el-icon>返回
            </el-col>
            <el-col :span="19" :offset="1">
                <div class="back_con">动态血压记录上传</div>
            </el-col>
        </el-row>
        <el-row class="container">
            <el-col :offset="5">
                <div>
                    将用户检测时长达24小时的动态心电图上传至白医医疗云服务中心，由相应专家进行分析并反馈分析报告及建议。
                </div>
            </el-col>
        </el-row>
        <el-row class="choose">
            <el-col :span="4" :offset="4">
                <div class="choose_icon">1</div>
                <div class="choose_con">选择患者信息</div>
            </el-col>
            <el-col :span="4" :offset="4">
                <div class="choose_icon">2</div>
                <div class="choose_con">支付费用</div>
            </el-col>
            <el-col :span="4" :offset="4">
                <div class="choose_icon">3</div>
                <div class="choose_con">上传动态心电图</div>
            </el-col>
        </el-row>
        <el-row class="form">
            <el-col :span="20" offset="4">
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
                                <el-button style="background-color: #409EFF">下一步</el-button>
                            </div>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
        <el-row class="attention">*注意事项</el-row>
        <el-row class="att_text">远离电子产品</el-row>
        <el-row class="att_con">
            <div>
                <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
                    1、检查当天穿棉质宽松内衣，若对胶布过敏的患者提前口服抗过敏药物预防，检查期间不能洗澡，尽量不要出汗。
                    2、要保持与动态记录仪仪器接触的部位的皮肤要没有感染，清洁干燥，如果有起搏器要避开起搏器的位置，电极要紧贴皮肤，尽量避开肌肉，贴在胸骨旁、锁骨上、肋骨上，减少患者活动时产生肌电，影响动态心电图的结果。
                    3、监测动态心电图期间要避免其他特殊检查，如x线、CT ，核磁共振等，并远离强大的电流及磁场，如放射科，理疗室，配电房等场合，并避免使用高频电器：微波炉，电磁炉，电热毯，理疗仪等，尽量少用手机电脑等，直到动态心电图检测结束。
                    4、佩戴动态记录仪以后，要避免剧烈运动，特别是双上肢的剧烈运动，嘱患者不做耸肩、伸展、扩胸运动，以免造成数据的干扰，影响分析结果。可在医生指导下根据检查需要和耐受情况选择一定强度的运动：通常选取三个不同时间段上下楼梯，出现不适症状或三分钟后终止，上下楼梯时尽量减少对导联线的牵拉。
                    5、佩戴二十四小时动态记录仪以后，要避免碰撞，避免牵拉到导联的电极线，以免影响数据的输出，会造成数据的严重干扰。
                    6、睡觉时仰卧或者右侧卧位，不要俯卧或者左侧卧位，不要挤压记录盒。
                    7、在戴动态心电图期间，如出现症状，一定要记录下出现症状的时间，或者什么时候运动了做个记录，这有助于观察动态心电图在此时间段的变化，从而有助于疾病的诊断和分析。
                </ul>
            </div>
        </el-row>
    </article>
</template>

<script>

    export default {
        name: "dynamicEcg",
        /*data:{
            options:[
                {
                    value: "20-30",
                    label: "20-30",
                },{
                    value: "30-40",
                    label: "30-40",
                },{
                    value: "40-50",
                    label: "40-50",
                },{
                    value: "50-60",
                    label: "50-60",
                },{
                    value: "60-70",
                    label: "60-70",
                }
            ]
        }*/
    }
</script>

<style scoped>
.back{
    color: rgba(16, 16, 16, 100);
    font-size: 14px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
}
.back .back_con{
    color: rgba(16, 16, 16, 100);
    font-size: 18px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
}
.container{
    margin-top: 20px;
    color: rgba(98, 98, 98, 100);
    font-size: 14px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
}
.choose{
    border: 1px solid #C3C3C3;
    margin-top: 15px;
}
.choose .choose_icon{
    width: 24px;
    height: 24px;
    display: inline-block;
    color: rgba(255, 255, 255, 100);
    font-size: 14px;
    text-align: center;
    font-family: SourceHanSansSC-regular;
    background: rgba(98, 98, 98, 100);
    border-radius: 12px;
}
.choose .choose_con{
    margin-left: 6px;
    display: inline-block;
    color: rgba(38, 38, 38, 100);
    font-size: 16px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
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
.attention{
    border: 1px solid #C3C3C3;
    margin-top: 20px;
    color: rgba(140, 140, 140, 100);
    font-size: 16px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
}
.att_text{
    border: 1px solid #C3C3C3;
    margin-top: 10px;
    color: rgba(140, 140, 140, 100);
    font-size: 14px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
}
.att_con{
    border: 1px solid #C3C3C3;
    margin-top: 10px;
    width: 971px;
    height: 172px;
    color: rgba(140, 140, 140, 100);
    font-size: 14px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
}
</style>