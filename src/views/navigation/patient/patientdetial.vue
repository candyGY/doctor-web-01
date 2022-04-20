<template>
    <el-row class="back">
        <el-col :span="2" :offset="2">
            <el-icon><back /></el-icon>返回
        </el-col>
        <el-col :span="4" :offset="1">
            <div class="back_con">我的患者</div>
        </el-col>
        <el-col :span="4" :offset="1">
            <div class="back_con">患者详情</div>
        </el-col>
    </el-row>
    <el-row class="pat">
        <el-col :span="5" :offset="1">
            <img style="width: 100%; height: 100%" src="@/assets/images/girl.jpg">
        </el-col>
        <el-col :span="18" class="text">
            <el-row><el-col offset="2">张三</el-col></el-row>
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
        <el-col :offset="2">检查报告</el-col>
    </el-row>
    <el-row class="table">
        <el-col>
            <table>
                <thead>
                <tr>
                    <th>时间</th>
                    <th>检查类型</th>
                    <th>主治医师</th>
                    <th>医生所属单位</th>
                    <th>医生科室</th>
                    <th>医生建议</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>2022-02-23</td>
                    <td>干式生化-单项</td>
                    <td>张三</td>
                    <td>白医云服务中心</td>
                    <td>白医云医疗服务科室</td>
                    <td></td>
                    <td><a href="#">查看报告</a></td>
                </tr>
                <tr>
                    <td>2022-02-23</td>
                    <td>干式生化-六项</td>
                    <td>李四</td>
                    <td>吉大一院</td>
                    <td>检验科</td>
                    <td></td>
                    <td><a href="#">查看报告</a></td>
                </tr>
                <tr>
                    <td>2022-02-23</td>
                    <td>动态心电</td>
                    <td>王五</td>
                    <td>吉大二院</td>
                    <td>心电科</td>
                    <td></td>
                    <td><a href="#">查看报告</a></td>
                </tr>
                <tr>
                    <td>2022-02-23</td>
                    <td>静态心电</td>
                    <td>赵六</td>
                    <td>白医云服务中心</td>
                    <td>白医云医疗服务科室</td>
                    <td></td>
                    <td><a href="#">查看报告</a></td>
                </tr>
                <tr>
                    <td>2022-02-23</td>
                    <td>极速问诊</td>
                    <td>张三</td>
                    <td>吉大一院</td>
                    <td>检验科</td>
                    <td></td>
                    <td><a href="#">查看报告</a></td>
                </tr>
                <tr>
                    <td>2022-02-23</td>
                    <td>动态心电</td>
                    <td>李四</td>
                    <td>吉大二院</td>
                    <td>心电科</td>
                    <td></td>
                    <td><a href="#">查看报告</a></td>
                </tr>
                <tr>
                    <td>2022-02-23</td>
                    <td>静态心电</td>
                    <td>张三</td>
                    <td>白医云服务中心</td>
                    <td>白医云医疗服务科室</td>
                    <td></td>
                    <td><a href="#">查看报告</a></td>
                </tr>
                <tr>
                    <td>2022-02-23</td>
                    <td>极速问诊</td>
                    <td>李四</td>
                    <td>吉大一院</td>
                    <td>检验科</td>
                    <td></td>
                    <td><a href="#">查看报告</a></td>
                </tr>
                <tr>
                    <td>2022-02-23</td>
                    <td>静态心电</td>
                    <td>王五</td>
                    <td>吉大二院</td>
                    <td>心电科</td>
                    <td></td>
                    <td><a href="#">查看报告</a></td>
                </tr>
                </tbody>
            </table>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "patientdetial"
    }
</script>

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
    .pat{
        border: 1px solid #C3C3C3;
        margin-top: 20px;
    }
    .pat .text{
        border: 1px solid #C3C3C3;
    }
    .pat .text .t_l{
        margin-top: 5px;
    }
    .pat .text .label{
        border-radius: 2px;
        color: rgba(56, 148, 255, 100);
        font-size: 12px;
        text-align: center;
        font-family: Roboto;
        border: 1px solid rgba(56, 148, 255, 100);
    }
    .pat .text .messAndPho{
        color: rgba(136, 137, 138, 100);
        font-size: 14px;
        text-align: left;
        margin-top: 5px;
        font-family: SourceHanSansSC-regular;
    }
    .pat .text .code{
        color: rgba(136, 137, 138, 100);
        font-size: 14px;
        text-align: left;
        margin-top: 5px;
        font-family: SourceHanSansSC-regular;
    }
    .pat .text .comment{
        color: rgba(136, 137, 138, 100);
        font-size: 14px;
        text-align: left;
        margin-top: 5px;
        font-family: SourceHanSansSC-regular;
    }
    .check{
        border: 1px solid #C3C3C3;
        color: black;
        font-size: 20px;
        text-align: left;
        margin-top: 20px;
        font-family: SourceHanSansSC-regular;
    }
    .table{
        margin-top: 30px;
        border: 1px solid #C3C3C3;
    }
    .table table {
        width: 100%;
        border: 1px solid black;
        margin: 0 auto;
        border-collapse: collapse;
    }
    .table th{
        background: rgb(30,84,144);
        text-align: center;
        vertical-align: center;
        border: 1px solid gray;
    }
    .table td {
        height: 50px;
        border: 1px solid gray;
        text-align: center;
        vertical-align: center;
    }

    .table tbody tr:nth-child(even) {
        background-color: rgb(220,221,221);
    }
</style>