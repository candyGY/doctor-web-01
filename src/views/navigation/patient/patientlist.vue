<template>
    <article>
        <el-row class="back">
            <el-col :span="2" :offset="2">
                <el-icon><back /></el-icon>返回
            </el-col>
            <el-col :span="19" :offset="1">
                <div class="back_con">我的患者</div>
            </el-col>
        </el-row>
        <el-row class="search">
            <el-col :span="10" :offset="4">
                <el-input placeholder="请输入"></el-input>
            </el-col>
            <el-col :span="4">
                <el-button style="background: rgb(128,227,255)">搜索</el-button>
            </el-col>
        </el-row>
        <el-row class="list">
            <el-col :span="6" offset="2" class="add">
                <el-button style="border: none;
                border-radius: 0;
                color: rgba(136, 137, 138, 100);
                font-size: 30px;
                text-align: center;
                box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.14);
                font-family: Roboto;
                border: 1px solid rgba(233, 233, 233, 100);">+ 新增患者</el-button>
            </el-col>
            <el-col :span="6" offset="2" class="mess">
                <el-col :span="6">
                    <div class="logo"><img src="@/assets/images/fasfa-paper-plane.svg"></div>
                </el-col>
                <el-col :span="18">
                    <el-row><el-col :offset="1">张三</el-col></el-row>
                    <el-row class="t_l">
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                    </el-row>
                    <el-row class="phone">
                        <el-col :offset="1">联系方式：177 4444 6666</el-col>
                    </el-row>
                    <el-row class="comment">
                        <el-col :offset="1">
                            备注：糖尿病患者糖尿病患者糖尿病患者糖尿病患者糖尿病患者糖尿……
                        </el-col>
                    </el-row>
                </el-col>
            </el-col>
            <el-col :span="6" offset="2" class="mess">
                <el-col :span="6">
                    <div class="logo"><img src="@/assets/images/fasfa-paper-plane.svg"></div>
                </el-col>
                <el-col :span="18">
                    <el-row><el-col :offset="1">张三</el-col></el-row>
                    <el-row class="t_l">
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                    </el-row>
                    <el-row class="phone">
                        <el-col :offset="1">联系方式：177 4444 6666</el-col>
                    </el-row>
                    <el-row class="comment">
                        <el-col :offset="1">
                            备注：糖尿病患者糖尿病患者糖尿病患者糖尿病患者糖尿病患者糖尿……
                        </el-col>
                    </el-row>
                </el-col>
            </el-col>
        </el-row>
        <el-row class="list">
            <el-col :span="6" offset="2" class="mess">
                <el-col :span="6">
                    <div class="logo"><img src="@/assets/images/fasfa-paper-plane.svg"></div>
                </el-col>
                <el-col :span="18">
                    <el-row><el-col :offset="1">张三</el-col></el-row>
                    <el-row class="t_l">
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                    </el-row>
                    <el-row class="phone">
                        <el-col :offset="1">联系方式：177 4444 6666</el-col>
                    </el-row>
                    <el-row class="comment">
                        <el-col :offset="1">
                            备注：糖尿病患者糖尿病患者糖尿病患者糖尿病患者糖尿病患者糖尿……
                        </el-col>
                    </el-row>
                </el-col>
            </el-col>
            <el-col :span="6" offset="2" class="mess">
                <el-col :span="6">
                    <div class="logo"><img src="@/assets/images/fasfa-paper-plane.svg"></div>
                </el-col>
                <el-col :span="18">
                    <el-row><el-col :offset="1">张三</el-col></el-row>
                    <el-row class="t_l">
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                    </el-row>
                    <el-row class="phone">
                        <el-col :offset="1">联系方式：177 4444 6666</el-col>
                    </el-row>
                    <el-row class="comment">
                        <el-col :offset="1">
                            备注：糖尿病患者糖尿病患者糖尿病患者糖尿病患者糖尿病患者糖尿……
                        </el-col>
                    </el-row>
                </el-col>
            </el-col>
            <el-col :span="6" offset="2" class="mess">
                <el-col :span="6">
                    <div class="logo"><img src="@/assets/images/fasfa-paper-plane.svg"></div>
                </el-col>
                <el-col :span="18">
                    <el-row><el-col :offset="1">张三</el-col></el-row>
                    <el-row class="t_l">
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                    </el-row>
                    <el-row class="phone">
                        <el-col :offset="1">联系方式：177 4444 6666</el-col>
                    </el-row>
                    <el-row class="comment">
                        <el-col :offset="1">
                            备注：糖尿病患者糖尿病患者糖尿病患者糖尿病患者糖尿病患者糖尿……
                        </el-col>
                    </el-row>
                </el-col>
            </el-col>
        </el-row>
        <el-row class="list">
            <el-col :span="6" offset="2" class="mess">
                <el-col :span="6">
                    <div class="logo"><img src="@/assets/images/fasfa-paper-plane.svg"></div>
                </el-col>
                <el-col :span="18">
                    <el-row><el-col :offset="1">张三</el-col></el-row>
                    <el-row class="t_l">
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                    </el-row>
                    <el-row class="phone">
                        <el-col :offset="1">联系方式：177 4444 6666</el-col>
                    </el-row>
                    <el-row class="comment">
                        <el-col :offset="1">
                            备注：糖尿病患者糖尿病患者糖尿病患者糖尿病患者糖尿病患者糖尿……
                        </el-col>
                    </el-row>
                </el-col>
            </el-col>
            <el-col :span="6" offset="2" class="mess">
                <el-col :span="6">
                    <div class="logo"><img src="@/assets/images/fasfa-paper-plane.svg"></div>
                </el-col>
                <el-col :span="18">
                    <el-row><el-col :offset="1">张三</el-col></el-row>
                    <el-row class="t_l">
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                    </el-row>
                    <el-row class="phone">
                        <el-col :offset="1">联系方式：177 4444 6666</el-col>
                    </el-row>
                    <el-row class="comment">
                        <el-col :offset="1">
                            备注：糖尿病患者糖尿病患者糖尿病患者糖尿病患者糖尿病患者糖尿……
                        </el-col>
                    </el-row>
                </el-col>
            </el-col>
            <el-col :span="6" offset="2" class="mess">
                <el-col :span="6">
                    <div class="logo"><img src="@/assets/images/fasfa-paper-plane.svg"></div>
                </el-col>
                <el-col :span="18">
                    <el-row><el-col :offset="1">张三</el-col></el-row>
                    <el-row class="t_l">
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <div class="label">标签一</div>
                        </el-col>
                    </el-row>
                    <el-row class="phone">
                        <el-col :offset="1">联系方式：177 4444 6666</el-col>
                    </el-row>
                    <el-row class="comment">
                        <el-col :offset="1">
                            备注：糖尿病患者糖尿病患者糖尿病患者糖尿病患者糖尿病患者糖尿……
                        </el-col>
                    </el-row>
                </el-col>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10" :offset="14">
                共 400 条<el-icon><arrow-left /></el-icon> 1 2 3 4
                <el-icon><arrow-right /></el-icon>
                前往 4 页
            </el-col>
        </el-row>
    </article>
</template>

<script>
    export default {
        name: "patientlist"
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
    .search{
        border: 1px solid #C3C3C3;
    }
    .list{
        border: 1px solid #C3C3C3;
        margin-top: 10px;
        height: 300px;
    }
    .add{
        border: 1px solid #C3C3C3;
    }
    .mess{
        border: 1px solid #C3C3C3;
    }
    .mess .logo{
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background-color: rgba(46, 46, 46, 100);
        color: rgba(16, 16, 16, 100);
        font-size: 14px;
        text-align: center;
        font-family: Roboto;
    }
    .mess .t_l{
        margin-top: 5px;
    }
    .mess .t_l .label{
        border-radius: 2px;
        color: rgba(56, 148, 255, 100);
        font-size: 12px;
        text-align: center;
        font-family: Roboto;
        margin-top: 10px;
        border: 1px solid rgba(56, 148, 255, 100);
    }
    .mess .phone{
        margin-top: 10px;
    }
    .mess .comment{
        margin-top: 10px;
    }
</style>