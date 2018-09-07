<template>
	<el-row class="container">
		<el-col :span="24" class="header">
			<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
				{{collapsed?'':sysName}}
			</el-col>
			<el-col :span="10">
				<div class="tools" @click.prevent="collapse" v-show="isCollapse">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col>
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		<el-col :span="24" class="main">

			<aside :class="collapsed?'menu-collapsed':'menu-expanded'">

        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleselect" unique-opened router :collapse="collapsed"  background-color="#545c64"      text-color="#fff"      active-text-color="#ffd04b">
          <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden && item.type=='pingtai'" >
              <el-submenu :index="index+''"  v-if="!item.leaf" :key="item.index">
                      <template slot="title">
                        <i :class="item.iconCls"></i>
                        <span slot="title">{{item.name}}</span>
                      </template>
                      <el-menu-item v-for="child in item.children"   :index="child.path"  :key="child.path">{{child.name}}</el-menu-item>
              </el-submenu>
              <el-menu-item :index="item.children[0].path" :key="item.children[0].path" v-else>
                  <i :class="item.iconCls"></i>
                  <span slot="title">{{item.name}}</span>
              </el-menu-item>
          </template>
        </el-menu>
        
			</aside>
			
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
</template>

<script>
export default {
  data() {
    return {
      sysName: "老乡优选-平台",
      collapsed: false,
      isCollapse: true,
      sysUserName: "",
      sysUserAvatar: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleOpen() {
      //console.log('handleopen');
    },
    handleClose() {
      //console.log('handleclose');
    },
    handleselect: function(a, b) {},
    //退出登录
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        //type: 'warning'
      })
        .then(() => {
          sessionStorage.removeItem("user");
          _this.$router.push("/login");
        })
        .catch(() => {});
    },
    //折叠导航栏
    collapse: function() {
      this.collapsed = !this.collapsed;
    },
    showMenu(i, status) {
      this.$refs.menuCollapsed.getElementsByClassName(
        "submenu-hook-" + i
      )[0].style.display = status ? "block" : "none";
    }
  },
  mounted() {
    var user = sessionStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      this.sysUserName = user.name || "";
      this.sysUserAvatar = user.avatar || "";
    }
  }
};
</script>

<style scoped lang="scss">
@import "~scss_vars";

.wh-200 {
  width: 200px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
}

.el-submenu .el-menu .el-menu-item:hover {
  background: #1e9fff !important;
}
.el-submenu .el-menu-item {
  background: #32373b !important;
}
.el-submenu_title {
  background: #344058 !important;
}

.container {
  color: #3f434f;
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .header {
    height: 50px;
    line-height: 50px;
    background: $color-primary;
    color: #fff;
    .userinfo {
      text-align: right;
      padding-right: 35px;
      float: right;
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
        img {
          width: 36px;
          height: 36px;
          border-radius: 20px;
          margin: 6px 0px 5px 10px;
          float: right;
        }
      }
    }
    .logo {
      //width:230px;
      height: 50px;
      font-size: 22px;
      padding-left: 20px;
      padding-right: 20px;
      border-color: rgba(238, 241, 146, 0.3);
      border-right-width: 1px;
      border-right-style: solid;
      img {
        width: 40px;
        float: left;
        margin: 10px 10px 10px 18px;
      }
      .txt {
        color: #fff;
      }
    }
    .logo-width {
      width: 230px;
    }
    .logo-collapse-width {
      width: 64px;
    }
    .tools {
      padding: 0px 23px;
      width: 14px;
      height: 50px;
      line-height: 50px;
      cursor: pointer;
    }
  }
  .main {
    display: flex;
    // background: #324057;
    position: absolute;
    top: 50px;
    bottom: 0px;
    overflow: hidden;
    aside {
      flex: 0 0 230px;
      width: 230px;
      // position: absolute;
      // top: 0px;
      // bottom: 0px;
      .el-menu {
        height: 100%;
      }
      .collapsed {
        width: 60px;
        .item {
          position: relative;
        }
        .submenu {
          position: absolute;
          top: 0px;
          left: 60px;
          z-index: 99999;
          height: auto;
          display: none;
        }
      }
    }
    .menu-collapsed {
      flex: 0 0 60px;
      width: 60px;
    }
    .menu-expanded {
      flex: 0 0 230px;
      width: 230px;
    }

    .content-container {
      background: #f7f7f7;
      flex: 1;
      // position: absolute;
      // right: 0px;
      // top: 0px;
      // bottom: 0px;
      // left: 230px;
      overflow-y: scroll;

      .breadcrumb-container {
        padding: 0 20px;
        background: #fff;
        height: 50px;
        line-height: 50px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
        span {
          height: 50px;
          line-height: 50px;
        }
        .title {
          width: 200px;
          float: left;
          color: #475669;
        }
        .breadcrumb-inner {
          float: right;
        }
      }
      .content-wrapper {
        padding: 20px;
        box-sizing: border-box;
        .main-content {
          background: #fff;
          padding: 20px;
          border-radius: 2px;
          box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
        }
      }
    }
  }
}
</style>