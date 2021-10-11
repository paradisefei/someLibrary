<template>
  <div class='dropdown'>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        {{custom}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item in dropdownList" :key="item.id" :command="item">
          {{ item.desc }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- 布局 -->
    <!-- <div class="task-list" :loading="loading" ref="taskList">
      <div class="list-content-container">
        <div v-for="item in data" :key="item" :style="{height: itemHeight}">{{ item }}</div>
      </div>
      <div class="cube-content-container" ref="cubeContainer">
        <div class="cube-content" ref="cube"></div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      data: [],
      loading: false,
      dataLength: 0,
      itemHeight: 32,
      custom: '',
      dropdownList: [
        {
          id: 1,
          desc: '黄金糕'
        },
        {
          id: 2,
          desc: '狮子头'
        },
        {
          id: 3,
          desc: '螺蛳粉'
        }
      ]
    }
  },
  watch: {
    dataLength: {
      // immediate: true,
      handler: function(newVal) {
        // 计算滑块的高度
        this.handleCubHeight(newVal)
      }
    }
  },
  methods: {
    handleCubHeight(val) {
      // 计算
      var cubeContainer = document.querySelector('.cube-content-container');
      var cube = document.querySelector('.cube-content');
      var taskList = document.querySelector('.task-list');
      console.log('滑块，滑槽', cubeContainer, cube, val, taskList)
      if (!val) {
        cube.style.height = 10 + 'px'
        console.log('高度', this.$refs.cube.style.height)
        return
      }
      var scale = taskList.clientHeight / val * this.itemHeight
      let height = scale * cubeContainer.clientHeight + "px";
      this.$refs.cube.style.height = height + 'px'
      console.log('高度', this.$refs.cube.style.height)
    },
    init() {
      // 请求列表数据
      this.loading = true
      setTimeout(() => {
        for (var i = 0; i < 600; i++) {
            this.data.push(i)
        }
        this.dataLength = this.data.length
        this.loading = false
      }, 1000)
    },
    handleCommand(command) {
      this.custom = command.desc
      console.log(command.desc, command)
    }
  },
  mounted() {
    // this.custom = this.dropdownList[0].desc
    // 初始化数据
    this.init()
    this.handleCubHeight(0)
    
  }
}
</script>

<style lang="scss">
.task-list {
  background-color: turquoise;
  display: flex;
  width: 223px;
  height: 200px;
  overflow-x: hidden;
  overflow-y: hidden;

  position: relative;
  // 列表
  .list-content-container {
    width: 223px;
    // 数据项
    .list-content {
      height: 32px;
    }
  }
  // 滑槽
  .cube-content-container {
    width: 3px;
    background-color: tomato;
    // 滑块
    .cube-content {
      background-color: black;
      width: 3px;
      position: fixed;
    }
  }
}
</style>