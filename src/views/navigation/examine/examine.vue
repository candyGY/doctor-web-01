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
        <el-row class="tam">
            <el-col class="table" :span="8">
                <table>
                    <thead>
                        <tr>
                            <th>姓名</th>
                            <th>挂号时间</th>
                            <th>检查种类</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>张三</td>
                        <td>22/02/22 12:35:12</td>
                        <td>动态血压</td>
                        <td>待支付</td>
                        <td>查看</td>
                    </tr>
                    <tr>
                        <td>张三</td>
                        <td>22/02/22 12:35:12</td>
                        <td>心电</td>
                        <td>待检查</td>
                        <td>查看</td>
                    </tr>
                    <tr>
                        <td>张三</td>
                        <td>22/02/22 12:35:12</td>
                        <td>干式生化</td>
                        <td>进行中</td>
                        <td>查看</td>
                    </tr>
                    <tr>
                        <td>张三</td>
                        <td>22/02/22 12:35:12</td>
                        <td>干式生化</td>
                        <td>已完成</td>
                        <td>查看</td>
                    </tr>
                    </tbody>
                </table>
            </el-col>
            <el-col class="message" :span="15" :offset="1">
                <el-row class="pat">
                    <el-col :span="5" :offset="1">
                        <img style="width: 100%; height: 100%" src="@/assets/images/girl.jpg">
                    </el-col>
                    <el-col :span="18" class="text">
                        <el-row>张三</el-row>
                        <el-row class="t_l">
                            <el-col :span="5" :offset="1">
                                <div class="label">标签一</div>
                            </el-col>
                            <el-col :span="5" :offset="1">
                                <div class="label">标签一</div>
                            </el-col>
                            <el-col :span="5" :offset="1">
                                <div class="label">标签一</div>
                            </el-col>
                        </el-row>
                        <el-row class="messAndPho">
                            <el-col :span="6" :offset="2">个人信息：男  24岁</el-col>
                            <el-col :span="6" :offset="2">联系方式：166****5555</el-col>
                        </el-row>
                        <el-row class="code">
                            <el-col :span="6" :offset="2">身份证：220*** **** **** 0102</el-col>
                            <el-col :span="6" :offset="2">微信号：123****456789</el-col>
                        </el-row>
                        <el-row class="comment">
                            <el-col :offset="2">
                                备注：糖尿病患者糖尿病患者糖尿病患者糖尿病患者糖尿病患者糖尿……
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row class="check">
                    <el-col :span="4">
                        <div class="report">检查报告</div>
                    </el-col>
                    <el-col :span="4" :offset="16">
                        <div class="num">打印（2）张</div>
                    </el-col>
                </el-row>
                <el-row class="table">
                    <el-col>
                        <table>
                            <thead>
                            <tr>
                                <th>项目名称</th>
                                <th>数值</th>
                                <th>单位</th>
                                <th>参考区间</th>
                                <th>风险提示</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>高密度脂蛋白胆固醇（HDL-C）</td>
                                <td>&gt3.90</td>
                                <td>mmol/l</td>
                                <td>1.00-1.90</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>葡萄糖（GLU）</td>
                                <td>&gt20,0</td>
                                <td>mmol/l</td>
                                <td>3.9-6.1</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>总胆固醇（TC）</td>
                                <td>&gt12.00</td>
                                <td>mmol/l</td>
                                <td>3.12-5.18</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>甘油三酯（TG）</td>
                                <td>&gt6.00</td>
                                <td>mmol/l</td>
                                <td>0.44-1.70</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>极低密度蛋白胆固醇（VLDL-C）</td>
                                <td>&gt7.95</td>
                                <td>mmol/l</td>
                                <td>0.21-0.78</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>低密度脂蛋白胆固醇（LDL-C）</td>
                                <td>&gt4.44</td>
                                <td>mmol/l</td>
                                <td>0.00-3.10</td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </article>
</template>

<!--<script>
    export default {
        name: "examine",
        data: {
            return{

            }
        }
    }
</script>-->

<style scoped>
    .back{
        border: 1px solid #C3C3C3;
        margin-top: 20px;
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
    .tam{
        border: 1px solid #C3C3C3;
    }
    .tam .table{
        border: 1px solid #C3C3C3;
        font-size: 14px;
        text-align: left;
        font-family: Microsoft Yahei;
    }
    .tam .table table {
        width: 100%;
        /*border: 1px solid gray;*/
        margin: 0 auto;
        border-collapse: collapse;
    }
    .tam .table th{
        /*border: 1px solid gray;*/
        text-align: center;
        vertical-align: center;
    }
    .tam .table td {
        height: 50px;
        /*border: 1px solid gray;*/
        text-align: center;
        vertical-align: center;
    }
    .tam .table tbody tr:nth-child(even) {
        background-color: antiquewhite;
    }
    .tam .message{
        border: 1px solid #C3C3C3;
    }
    .tam .message .pat{
        border: 1px solid #C3C3C3;
    }
    .tam .message .pat .text{
        border: 1px solid #C3C3C3;
    }
    .tam .message .pat .text .t_l{
        margin-top: 5px;
    }
    .tam .message .pat .text .label{
        border-radius: 2px;
        color: rgba(56, 148, 255, 100);
        font-size: 12px;
        text-align: center;
        font-family: Roboto;
        border: 1px solid rgba(56, 148, 255, 100);
    }
    .tam .message .pat .text .messAndPho{
        color: rgba(136, 137, 138, 100);
        font-size: 14px;
        text-align: left;
        margin-top: 5px;
        font-family: SourceHanSansSC-regular;
    }
    .tam .message .pat .text .code{
        color: rgba(136, 137, 138, 100);
        font-size: 14px;
        text-align: left;
        margin-top: 5px;
        font-family: SourceHanSansSC-regular;
    }
    .tam .message .pat .text .comment{
        color: rgba(136, 137, 138, 100);
        font-size: 14px;
        text-align: left;
        margin-top: 5px;
        font-family: SourceHanSansSC-regular;
    }
    .tam .message .check{
        margin-top: 30px;
        border: 1px solid #C3C3C3;
    }
    .tam .message .check .report{
        color: black;
        font-size: 16px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
    .tam .message .check .num{
        border-radius: 3px;
        background-color: rgba(56, 148, 255, 100);
        color: rgba(255, 255, 255, 100);
        font-size: 14px;
        text-align: center;
        font-family: Roboto;
        border: 1px solid rgba(56, 148, 255, 100);
    }
    .tam .message .table{
        margin-top: 30px;
        border: 1px solid #C3C3C3;
    }
    .tam .message .table table {
        width: 100%;
        border: 1px solid black;
        margin: 0 auto;
        border-collapse: collapse;
    }
    .tam .message .table th{
        background: rgb(30,84,144);
        text-align: center;
        vertical-align: center;
        border: 1px solid gray;
    }
    .tam .message .table td {
        height: 50px;
        border: 1px solid gray;
        text-align: center;
        vertical-align: center;
    }

    .tam .message .table tbody tr:nth-child(even) {
        background-color: rgb(220,221,221);
    }
</style>