<template>
  <div class="w-[100vw] h-[45vh] bg-blue-500">
    <div class="w-[95vw] h-[2vw]"></div>
    <div class="bg-white w-[95vw] h-[55vw] ml-[0.8vw] mt-[3vw] border">
      <div class="bg-gray-100 w-[93vw] h-[53vw] m-auto border-one mt-[1vw] overflow-hidden">
        <div class="w-full flex overflow-hidden">
          <div class="bg-white w-[29vw] h-[23vw] mt-[1vw] ml-[1vw]">
            <VueUiXy :config="config2" :dataset="dataset2" />
            <p class="font-600 ml-[1vw]">财务台账</p>
            <p class="bg-yellow-100 text-yellow-600 w-[3vw] text-center ml-[7vw] mt-[-2.3vw]"
              >财务</p
            >

            <p class="text-[1vw] text-gray-300 ml-[1vw] mt-[1vw]" @click="Moeny"
              >财务收款相关报表信息</p
            >
          </div>
          <div class="bg-white w-[29vw] h-[23vw] mt-[1vw] ml-[2vw] overflow-hidden">
            <VueUiDonut :dataset="dataset" :config="config" style="width: 20vw" class="m-auto" />
            <p class="font-600 ml-[1vw]">租赁台账</p>
            <p class="bg-green-100 text-green-600 w-[3vw] text-center ml-[9vw] mt-[-2vw]">租赁</p>
            <p class="text-[1vw] text-gray-300 ml-[1vw]" @click="Lend"
              >展示资产项目的周期租赁详情</p
            >
          </div>
          <div class="bg-white w-[29vw] h-[23vw] mt-[1vw] ml-[2vw] overflow-hidden">
            <VueUiDonut :config="config4" :dataset="dataset4" style="width: 20vw" class="m-auto" />
            <p class="font-600 ml-[1vw] mt-[0vw]">欠租欠款</p>
            <p class="bg-yellow-100 text-yellow-600 w-[3vw] text-center ml-[9vw] mt-[-2vw]">财务</p>
            <p class="text-[1vw] text-gray-300 ml-[1vw]" @click="Trent"
              >展示资产租赁财务的欠租欠款明细</p
            >
          </div>
        </div>
        <br />
        <div class="w-full flex overflow-hidden">
          <div class="bg-white w-[29vw] h-[23vw] mt-[1vw] ml-[1vw] overflow-hidden">
            <VueUiXy
              :config="config3"
              :dataset="dataset3"
              style="width: 20vw"
              class="m-auto mt-[4vw]"
            />
            <p class="font-600 ml-[1vw] mt-[1vw]">招商数据报表</p>
            <p class="bg-blue-100 text-blue-600 w-[3vw] text-center ml-[9vw] mt-[-2.6vw]">客户</p>
            <p class="text-[1vw] text-gray-300 ml-[1vw]" @click="Merchants">查看招商明细数据</p>
          </div>
          <div class="bg-white w-[29vw] h-[23vw] mt-[1vw] ml-[2vw] overflow-hidden">
            <VueUiDonut :dataset="dataset1" :config="config1" style="width: 20vw" class="m-auto" />
            <p class="font-600 ml-[1vw]">招商客户画像</p>
            <p class="bg-blue-100 text-blue-600 w-[3vw] text-center ml-[9vw] mt-[-2.6vw]">客户</p>
            <p class="text-[1vw] text-gray-300 ml-[1vw]" @click="Client">招商客户用户画像分析</p>
          </div>
        </div>
      </div>
      <div
        v-if="aboutmoney"
        class="absolute w-[90vw] h-[50vw] m-auto mt-[-51vw] ml-[2.5vw] bg-white border-two"
      >
        <div class="w-full bg-gray-100 h-[3vw] flex">
          <p class="text-blue-500 ml-[1vw] mt-[0.5vw]">财务台账</p>
          <p class="text-blue-500 ml-[82vw] mt-[0.2vw] text-[1.8vw]" @click="moneyoff">x</p>
        </div>
        <div class="w-full h-[4vw] border-three flex">
          <div
            class="h-[3vw] w-[3vw] border-four text-center mt-[1vw] ml-[1vw]"
            @click="clickMoneytable"
            >图表</div
          >
          <div
            class="h-[3vw] w-[3vw] border-four text-center mt-[1vw] ml-[1vw]"
            @click="clickMoneymsg"
            >数据</div
          >
          <div class="w-[50vw] h-full ml-[34vw] mt-[1.5vw] flex"
            ><p class="font-500"
              >指定统计周期：<a class="text-blue-500">本月</a> / 本季度 / 本年
            </p>
            <p>2023.03.01</p>
            <p>-></p>
            <p>2023.03.31</p>
            <div class="w-[15vw] flex">
              <p class="ml-[3vw]">项目:</p>
              <select class="h-[2vw] ml-[1vw] mt-[-0.3vw] border-six w-[6vw]">
                <option value="chose">请选择</option>
                <option value="obj-fone">项目1</option>
                <option value="obj-two">项目2</option>
                <option value="obj-three">项目3</option>
                <option value="obj-four">项目4</option>
              </select></div
            >
          </div> </div
        ><div class="w-full m-auto text-center mt-[18vw]" v-if="table">
          <h1>暂无图表</h1>
        </div>

        <div v-if="Moneymsg">
          <div class="w-80vw m-auto container smooth-scroll mt-[2vw]">
            <vxe-table :data="tableData" class="w-[200vw]" height="400" alight-center>
              <vxe-column type="seq" width="70" />
              <vxe-column field="objname" title="项目名称" />
              <vxe-column field="num" title="分期" />
              <vxe-column field="num" title="楼栋号" />
              <vxe-column field="num" title="房间号" />
              <vxe-column field="name" title="合同甲方名称" />
              <vxe-column field="number" title="合同编号" />
              <vxe-column field="name" title="客户名称" />
              <vxe-column field="past" title="签约日期" />
              <vxe-column field="place" title="合同面积（㎡）" />
              <vxe-column field="place" title="租金单价（元/㎡/月）" />
              <vxe-column field="num" title="租期（年）" />
              <vxe-column field="past" title="合同起始日" />
              <vxe-column field="futer" title="合同到期日" />
              <vxe-column field="futer" title="应收履约保证金时间" />
              <vxe-column field="place" title="应收履约保证金金额（元）" />
              <vxe-column field="money" title="已收履约保证金时间" />
              <vxe-column field="money" title="已收履约保证金金额（元）" />
              <vxe-column field="place" title="装修免租期（天）" />
              <vxe-column field="place" title="合同应收租金总额（元）" />
              <vxe-column field="persent" title="租金税率" />
              <vxe-column field="money" title="截止当前应收租金金额（元" />
              <vxe-column field="money" title="截止当前已收租金金额（元" />
              <vxe-column field="money" title="截止当前欠缴租金金额（元）" />
            </vxe-table>
            <vxe-pager
              v-model:currentPage="pageVO.currentPage"
              v-model:pageSize="pageVO.pageSize"
              :total="pageVO.total"
              @page-change="pageChange"
            />
          </div>
        </div>
      </div>
      <div
        v-if="aboutrent"
        class="absolute w-[90vw] h-[50vw] m-auto mt-[-51vw] ml-[2.5vw] bg-white border-two"
      >
        <div class="w-full bg-gray-100 h-[3vw] flex">
          <p class="text-blue-500 ml-[1vw] mt-[0.5vw]">欠租欠款</p>
          <p class="text-blue-500 ml-[82vw] mt-[0.2vw] text-[1.8vw]" @click="moneyoff">x</p>
        </div>
        <div class="w-full h-[4vw] border-three flex">
          <div
            class="h-[3vw] w-[3vw] border-four text-center mt-[1vw] ml-[1vw]"
            @click="clickMoneytable"
            >图表</div
          >
          <div
            class="h-[3vw] w-[3vw] border-four text-center mt-[1vw] ml-[1vw]"
            @click="clickMoneymsg"
            >数据</div
          >
          <div class="w-[50vw] h-full ml-[34vw] mt-[1.5vw] flex"
            ><p class="font-500"
              >指定统计周期：<a class="text-blue-500">本月</a> / 本季度 / 本年
            </p>
            <p>2023.03.01</p>
            <p>-></p>
            <p>2023.03.31</p>
            <div class="w-[15vw] flex">
              <p class="ml-[3vw]">项目:</p>
              <select class="h-[2vw] ml-[1vw] mt-[-0.3vw] border-six w-[6vw]">
                <option value="chose">请选择</option>
                <option value="obj-fone">项目1</option>
                <option value="obj-two">项目2</option>
                <option value="obj-three">项目3</option>
                <option value="obj-four">项目4</option>
              </select></div
            >
          </div> </div
        ><div class="w-full h-[25vw] mt-[2vw]" v-if="table">
          <div class="w-[60vw] flex justify-around">
            <div class="w-[25vw] h-[18vw] border-five">
              <p class="m-[1vw]">项目欠款情况占比</p>
              <VueUiDonut
                :config="config5"
                :dataset="dataset5"
                style="width: 18vw; padding: 0"
                class="m-auto mt-[-1vw]"
              />
              <div class="w-[25vw] h-[3vw] flex justify-around m-auto">
                <div class="w-[5vw] h-full flex">
                  <div class="w-[2vw] h-[1vw] bg-blue-600 border"></div>
                  <p class="text-[1vw]">项目1</p>
                </div>
                <div class="w-[5vw] h-full flex">
                  <div class="w-[2vw] h-[1vw] bg-red-600 border"></div>
                  <p class="text-[1vw]">项目2</p>
                </div>
                <div class="w-[5vw] h-full flex">
                  <div class="w-[2vw] h-[1vw] bg-[#f9745d] border"></div>
                  <p class="text-[1vw]">项目3</p>
                </div>
                <div class="w-[5vw] h-full flex">
                  <div class="w-[2vw] h-[1vw] bg-[#f2eb1c] border"></div>
                  <p class="text-[1vw]">项目4</p>
                </div>
                <div class="w-[5vw] h-full flex">
                  <div class="w-[2vw] h-[1vw] bg-[#99f3ff] border"></div>
                  <p class="text-[1vw]">项目5</p>
                </div>
              </div>
            </div>

            <div class="w-[25vw] h-[18vw] border-five">
              <p class="m-[1vw]">项目欠款客户占比</p>
              <VueUiDonut
                :config="config5"
                :dataset="dataset6"
                style="width: 18vw; padding: 0"
                class="m-auto mt-[-1vw]"
              />
              <div class="w-[25vw] h-[3vw] flex justify-around m-auto">
                <div class="w-[5vw] h-full flex">
                  <div class="w-[2vw] h-[1vw] bg-[#204dd5] border"></div>
                  <p class="text-[1vw]">项目1</p>
                </div>
                <div class="w-[5vw] h-full flex">
                  <div class="w-[2vw] h-[1vw] bg-[#21c3e4] border"></div>
                  <p class="text-[1vw]">项目2</p>
                </div>
                <div class="w-[5vw] h-full flex">
                  <div class="w-[2vw] h-[1vw] bg-[#1ee6b4] border"></div>
                  <p class="text-[1vw]">项目3</p>
                </div>
                <div class="w-[5vw] h-full flex">
                  <div class="w-[2vw] h-[1vw] bg-[#0ed851] border"></div>
                  <p class="text-[1vw]">项目4</p>
                </div>
                <div class="w-[5vw] h-full flex">
                  <div class="w-[2vw] h-[1vw] bg-[#11c52f] border"></div>
                  <p class="text-[1vw]">项目5</p>
                </div>
              </div>
            </div>
          </div>

          <div class="w-[80vw] mt-[3vw] ml-[2vw]">
            <p class="font-600 text-[1vw]">项目逾期欠款金额</p>
            <VueUiXy :config="config7" :dataset="dataset7" />
            <div class="w-[10vw] flex justify-around m-auto mt-[1vw]">
              <div class="w-[2vw] h-[1vw] bg-red-500"></div>
              <p class="text-[1vw]">项目逾期欠款金额</p>
            </div>
          </div>
        </div>

        <div v-if="Moneymsg">
          <div class="w-[80vw] m-auto container smooth-scroll mt-[2vw]">
            <vxe-table
              :data="tableData1"
              class="w-[200vw]"
              height="400"
              :edit-config="{ mode: 'row', trigger: 'click' }"
            >
              <vxe-column type="seq" width="70" />
              <vxe-column field="name" title="项目名称" />
              <vxe-column field="num" title="房间号" />
              <vxe-column field="name" title="客户名称" />
              <vxe-column field="num" title="合同面积（㎡）" />
              <vxe-column field="time" title="合同起始时间" />
              <vxe-column field="time" title="合同到期日" />
              <vxe-column field="num" title="押金（元）" />
              <vxe-column field="num" title="应收租金（元）" />
              <vxe-column field="num" title="实收租金（元）" />
              <vxe-column field="num" title="拖欠租金（元）" />
              <vxe-column field="name" title="应回款节点" />
              <vxe-column field="num" title="逾期天数" />
              <vxe-column
                field="div"
                title="催款进度"
                min-width="180"
                :edit-render="nameEditRender"
              />
              <vxe-column field="div1" title="措施" min-width="180" :edit-render="nameEditRender" />
              <vxe-column field="div2" title="备注" min-width="180" :edit-render="nameEditRender" />
            </vxe-table>
            <vxe-pager
              v-model:currentPage="pageVO.currentPage"
              v-model:pageSize="pageVO.pageSize"
              :total="pageVO.total"
              @page-change="pageChange"
            />
          </div>
        </div>
      </div>
      <div
        v-if="aboutlend"
        class="absolute w-[90vw] h-[50vw] m-auto mt-[-51vw] ml-[2.5vw] bg-white border-two"
      >
        <div class="w-full bg-gray-100 h-[3vw] flex">
          <p class="text-blue-500 ml-[1vw] mt-[0.5vw]">租赁台账</p>
          <p class="text-blue-500 ml-[82vw] mt-[0.2vw] text-[1.8vw]" @click="moneyoff">x</p>
        </div>
        <div class="w-full h-[4vw] border-three flex">
          <div
            class="h-[3vw] w-[3vw] border-four text-center mt-[1vw] ml-[1vw]"
            @click="clickMoneytable"
            >图表</div
          >
          <div
            class="h-[3vw] w-[3vw] border-four text-center mt-[1vw] ml-[1vw]"
            @click="clickMoneymsg"
            >数据</div
          >
          <div class="w-[50vw] h-full ml-[34vw] mt-[1.5vw] flex"
            ><p class="font-500"
              >指定统计周期：<a class="text-blue-500">本月</a> / 本季度 / 本年
            </p>
            <p>2023.03.01</p>
            <p>-></p>
            <p>2023.03.31</p>
            <div class="w-[15vw] flex">
              <p class="ml-[3vw]">项目:</p>
              <select class="h-[2vw] ml-[1vw] mt-[-0.3vw] border-six w-[6vw]">
                <option value="chose">请选择</option>
                <option value="obj-fone">项目1</option>
                <option value="obj-two">项目2</option>
                <option value="obj-three">项目3</option>
                <option value="obj-four">项目4</option>
              </select></div
            >
          </div> </div
        ><div class="w-full" v-if="table">
          <div class="w-[25vw] h-[18vw] border-five m-[2vw]">
            <p class="m-[1vw]">项目各自出租率对比</p>
            <VueUiDonut
              :config="config5"
              :dataset="dataset8"
              style="width: 18vw; padding: 0"
              class="m-auto mt-[-1vw]"
            />
            <div class="w-[25vw] h-[3vw] flex justify-around m-auto">
              <div class="w-[5vw] h-full flex">
                <div class="w-[2vw] h-[1vw] bg-[#1447e1] border"></div>
                <p class="text-[1vw]">项目1</p>
              </div>
              <div class="w-[5vw] h-full flex">
                <div class="w-[2vw] h-[1vw] bg-[#21c3e4] border"></div>
                <p class="text-[1vw]">项目2</p>
              </div>
              <div class="w-[5vw] h-full flex">
                <div class="w-[2vw] h-[1vw] bg-[#ffdf0f] border"></div>
                <p class="text-[1vw]">项目3</p>
              </div>
              <div class="w-[5vw] h-full flex">
                <div class="w-[2vw] h-[1vw] bg-[#f31212] border"></div>
                <p class="text-[1vw]">项目4</p>
              </div>
              <div class="w-[5vw] h-full flex">
                <div class="w-[2vw] h-[1vw] bg-[#ff8080] border"></div>
                <p class="text-[1vw]">项目5</p>
              </div>
            </div>
          </div>
          <div class="w-[85vw] ml-[2vw]">
            <p class="text-[1vw] font-600">选择周期的租赁情况</p>
            <VueUiXy :config="config9" :dataset="dataset9" />
          </div>
        </div>

        <div v-if="Moneymsg">
          <div class="w-80vw m-auto container smooth-scroll mt-[2vw]">
            <div class="w-[14vw] flex justify-around">
              <button class="border-seven w-[5vw] h-[2vw] text-blue-500" @click="insubject" id="btn"
                >按项目</button
              >
              <button class="border-seven w-[5vw] h-[2vw] text-blue-500" @click="inroom" id="btn1"
                >按房间</button
              >
            </div>
            <vxe-table :data="tableData2" class="w-[100vw] mt-[2vw]" height="500" v-if="subject">
              <vxe-column type="seq" width="70" />
              <vxe-column field="name" title="项目名称" width="80" />
              <vxe-column field="location" title="项目地址" />
              <vxe-column field="lendpresent" title="出租率（截止时间项目整体出租率）" />
              <vxe-column field="outpresent" title="退租率" />
              <vxe-column field="new" title="新增签约面积" />
              <vxe-column field="still" title="新增续租面积" />
              <vxe-column field="out" title="新增退租面积" />
            </vxe-table>
            <vxe-table :data="tableData" class="w-[200vw] mt-[2vw]" height="500" v-if="room">
              <vxe-column type="seq" width="70" />
              <vxe-column field="objname" title="项目名称" width="80" />
              <vxe-column field="num" title="分期" />
              <vxe-column field="num" title="楼栋" />
              <vxe-column field="num" title="层号" />
              <vxe-column field="num" title="房号" />
              <vxe-column field="place" title="实测面积（㎡）" />
              <vxe-column field="place" title="可租面积（㎡）" />
              <vxe-column field="place" title="已租面积（㎡）" />
              <vxe-column field="status" title="房源情况" />
              <vxe-column field="name" title="客户名称" />
              <vxe-column field="symbol" title="经营品牌（商业客户经营品牌" />
              <vxe-column field="place" title="合同面积（㎡）" />
              <vxe-column field="past" title="签约日期" />
              <vxe-column field="past" title="合同起始日" />
              <vxe-column field="futer" title="合同到期日" />
              <vxe-column field="num" title="租期（年）" />
            </vxe-table>
            <vxe-pager
              v-model:currentPage="pageVO.currentPage"
              v-model:pageSize="pageVO.pageSize"
              :total="pageVO.total"
              @page-change="pageChange"
            />
          </div>
        </div>
      </div>
      <div
        v-if="aboutmerchants"
        class="absolute w-[90vw] h-[50vw] m-auto mt-[-51vw] ml-[2.5vw] bg-white border-two"
      >
        <div class="w-full bg-gray-100 h-[3vw] flex">
          <p class="text-blue-500 ml-[1vw] mt-[0.5vw]">招商数据报表</p>
          <p class="text-blue-500 ml-[82vw] mt-[0.2vw] text-[1.8vw]" @click="moneyoff">x</p>
        </div>
        <div class="w-full h-[4vw] border-three flex">
          <div
            class="h-[3vw] w-[3vw] border-four text-center mt-[1vw] ml-[1vw]"
            @click="clickMoneytable"
            >图表</div
          >
          <div
            class="h-[3vw] w-[3vw] border-four text-center mt-[1vw] ml-[1vw]"
            @click="clickMoneymsg"
            >数据</div
          >
          <div class="w-[50vw] h-full ml-[34vw] mt-[1.5vw] flex"
            ><p class="font-500"
              >指定统计周期：<a class="text-blue-500">本月</a> / 本季度 / 本年
            </p>
            <p>2023.03.01</p>
            <p>-></p>
            <p>2023.03.31</p>
            <div class="w-[15vw] flex">
              <p class="ml-[3vw]">项目:</p>
              <select class="h-[2vw] ml-[1vw] mt-[-0.3vw] border-six w-[6vw]">
                <option value="chose">请选择</option>
                <option value="obj-fone">项目1</option>
                <option value="obj-two">项目2</option>
                <option value="obj-three">项目3</option>
                <option value="obj-four">项目4</option>
              </select></div
            >
          </div> </div
        ><div class="w-full" v-if="table">
          <div class="w-[25vw] h-[18vw] border-five m-[2vw]">
            <p class="m-[1vw]">项目招商租赁面积完成情况</p>
            <VueUiDonut
              :config="config5"
              :dataset="dataset5"
              style="width: 18vw; padding: 0"
              class="m-auto mt-[-1vw]"
            />
            <div class="w-[25vw] h-[3vw] flex justify-around m-auto">
              <div class="w-[5vw] h-full flex">
                <div class="w-[2vw] h-[1vw] bg-[#1447e1] border"></div>
                <p class="text-[1vw]">项目1</p>
              </div>
              <div class="w-[5vw] h-full flex">
                <div class="w-[2vw] h-[1vw] bg-[#21c3e4] border"></div>
                <p class="text-[1vw]">项目2</p>
              </div>
              <div class="w-[5vw] h-full flex">
                <div class="w-[2vw] h-[1vw] bg-[#ffdf0f] border"></div>
                <p class="text-[1vw]">项目3</p>
              </div>
              <div class="w-[5vw] h-full flex">
                <div class="w-[2vw] h-[1vw] bg-[#f31212] border"></div>
                <p class="text-[1vw]">项目4</p>
              </div>
              <div class="w-[5vw] h-full flex">
                <div class="w-[2vw] h-[1vw] bg-[#ff8080] border"></div>
                <p class="text-[1vw]">项目5</p>
              </div>
            </div>
          </div>
          <div class="w-[80vw] mt-[3vw] ml-[2vw]">
            <p class="font-600 text-[1vw]">项目招商租赁面积完成情况</p>
            <VueUiXy :config="config7" :dataset="dataset10" />
            <div class="w-[10vw] flex justify-around m-auto mt-[1vw]">
              <div class="w-[2vw] h-[1vw] bg-[#00FFb3]"></div>
              <p class="text-[1vw]">项目租赁面积</p>
            </div>
          </div>
        </div>

        <div v-if="Moneymsg">
          <div class="w-80vw m-auto container smooth-scroll mt-[2vw]">
            <div class="w-[full] flex">
              <button
                class="border-seven w-[8vw] h-[2vw] text-[1vw] text-blue-500"
                @click="insubject"
                id="btn"
                >招商数据统计</button
              >
              <button
                class="border-seven w-[7vw] h-[2vw] text-[1vw] ml-[2vw] text-blue-500"
                @click="inroom"
                id="btn1"
                >自持出租率
              </button>
              <vxe-button
                class="bg-blue-500 w-[8vw] h-2[vw] ml-50vw text-white text-[1vw]"
                status="primary"
                icon="vxe-icon-add"
                @click="addEvent"
                v-if="subject"
                >配置目标/计划</vxe-button
              >
              <vxe-button
                class="bg-blue-500 w-[8vw] h-2[vw] ml-50vw text-white text-[1vw]"
                status="primary"
                icon="vxe-icon-add"
                @click="addEvent"
                v-if="room"
                >配置出租率目标</vxe-button
              >
            </div>
            <vxe-table
              :data="tableData"
              class="w-[200vw] mt-[2vw] mytable-style"
              height="400"
              v-if="subject"
              show-overflow
              :header-cell-class-name="headerCellClassName"
            >
              <vxe-column type="seq" width="70" />
              <vxe-column field="name" title="项目名称" />
              <vxe-colgroup title="年度任务">
                <vxe-column field="place" title="租赁面积（㎡）" />
                <vxe-column field="money" title="租赁回款（万元）" />
              </vxe-colgroup>
              <vxe-colgroup title="年度完成情况/占比">
                <vxe-column field="persent" title="占比（%）" />
                <vxe-column field="money" title="租赁回款（万元）" />
                <vxe-column field="persent" title="占比（%）" />
              </vxe-colgroup>
              <vxe-colgroup title="一季度目标">
                <vxe-column field="place" title="租赁面积（㎡）" />
                <vxe-column field="money" title="租赁回款（万元）" />
              </vxe-colgroup>
              <vxe-colgroup title="一季度完成情况/占比">
                <vxe-column field="persent" title="占比（%）" />
                <vxe-column field="money" title="租赁回款（万元）" />
                <vxe-column field="persent" title="占比（%）" />
              </vxe-colgroup>
              <vxe-colgroup title="二季度目标">
                <vxe-column field="place" title="租赁面积（㎡）" />
                <vxe-column field="persent" title="出租率（租赁回款（万元）" />
              </vxe-colgroup>
              <vxe-colgroup title="二季度完成情况/占比">
                <vxe-column field="persent" title="占比（%）" />
                <vxe-column field="money" title="租赁回款（万元）" />
                <vxe-column field="persent" title="占比（%）" />
              </vxe-colgroup>
              <vxe-colgroup title="三季度目标">
                <vxe-column field="place" title="租赁面积（㎡）" />
                <vxe-column field="money" title="租赁回款（万元）" />
              </vxe-colgroup>
              <vxe-colgroup title="三季度完成情况/占比">
                <vxe-column field="persent" title="占比（%）" />
                <vxe-column field="money" title="租赁回款（万元）" />
                <vxe-column field="persent" title="占比（%）" />
              </vxe-colgroup>
              <vxe-colgroup title="四季度目标">
                <vxe-column field="place" title="租赁面积（㎡）" />
                <vxe-column field="money" title="租赁回款（万元）" />
              </vxe-colgroup>
              <vxe-colgroup title="四季度完成情况/占比">
                <vxe-column field="persent" title="占比（%）" />
                <vxe-column field="money" title="租赁回款（万元）" />
                <vxe-column field="persent" title="占比（%）" />
              </vxe-colgroup>
            </vxe-table>
            <vxe-table
              :data="tableData2"
              class="w-[200vw] mt-[2vw]"
              height="400"
              v-if="room"
              show-overflow
            >
              <vxe-column type="seq" width="70" />
              <vxe-column field="name" title="项目名称" />
              <vxe-column field="new" title="可租面积（㎡）" />
              <vxe-column field="lendpresent" title="出租率目标（%）" />
              <vxe-column field="outpresent" title="出租面积目标（㎡）" />
              <vxe-colgroup title="2023-03-01 至 2023-03-31 完成情况">
                <vxe-column field="new" title="累计已出租面积（㎡）" />
                <vxe-column field="lendpresent" title="出租率（%）" />
                <vxe-column field="new" title="比较上月净增面积（㎡）" />
              </vxe-colgroup>
              <vxe-column field="new" title="出租面积缺口（㎡）" />
            </vxe-table>
            <vxe-modal
              resize
              destroy-on-close
              show-footer
              show-confirm-button
              show-cancel-button
              v-model="showEditPopup"
              :title="selectRow ? '编辑' : '配置目标/计划'"
              width="60vw"
              height="60vh"
              :loading="loading"
              :confirm-closable="false"
              @confirm="confirmEvent"
              v-if="subject"
            >
              <vxe-form ref="formRef" v-bind="formOptions" />
            </vxe-modal>
            <vxe-modal
              resize
              destroy-on-close
              show-footer
              show-confirm-button
              show-cancel-button
              v-model="showEditPopup"
              :title="selectRow ? '编辑' : '配置出租率目标'"
              width="60vw"
              height="30vh"
              :loading="loading"
              :confirm-closable="false"
              @confirm="confirmEvent"
              v-if="room"
            >
              <vxe-form ref="formRef" v-bind="formOptions1" />
            </vxe-modal>
            <vxe-pager
              v-model:currentPage="pageVO.currentPage"
              v-model:pageSize="pageVO.pageSize"
              :total="pageVO.total"
              @page-change="pageChange"
            />
          </div>
        </div>
      </div>
      <div
        v-if="aboutclient"
        class="absolute w-[90vw] h-[50vw] m-auto mt-[-51vw] ml-[2.5vw] bg-white border-two"
      >
        <div class="w-full bg-gray-100 h-[3vw] flex">
          <p class="text-blue-500 ml-[1vw] mt-[0.5vw]">招商数据报表</p>
          <p class="text-blue-500 ml-[82vw] mt-[0.2vw] text-[1.8vw]" @click="moneyoff">x</p>
        </div>
        <div class="w-full h-[4vw] border-three flex">
          <div
            class="h-[3vw] w-[3vw] border-four text-center mt-[1vw] ml-[1vw]"
            @click="clickMoneytable"
            >图表</div
          >
          <div
            class="h-[3vw] w-[3vw] border-four text-center mt-[1vw] ml-[1vw]"
            @click="clickMoneymsg"
            >数据</div
          >
          <div class="w-[50vw] h-full ml-[34vw] mt-[1.5vw] flex"
            ><p class="font-500"
              >指定统计周期：<a class="text-blue-500">本月</a> / 本季度 / 本年
            </p>
            <p>2023.03.01</p>
            <p>-></p>
            <p>2023.03.31</p>
            <div class="w-[15vw] flex">
              <p class="ml-[3vw]">项目:</p>
              <select class="h-[2vw] ml-[1vw] mt-[-0.3vw] border-six w-[6vw]">
                <option value="chose">请选择</option>
                <option value="obj-fone">项目1</option>
                <option value="obj-two">项目2</option>
                <option value="obj-three">项目3</option>
                <option value="obj-four">项目4</option>
              </select></div
            >
          </div> </div
        ><div class="w-full" v-if="table">
          <div class="w-full flex justify-around mt-[2vw]">
            <div class="w-[40vw] h-[20vw] border-five">
              <div class="w-full flex mt-[1vw]">
                <p class="text-[1vw] font-600 ml-[2vw]">科技园月度客户组数对比</p>
                <select class="h-[2vw] ml-[17vw] mt-[-0.5vw] border-six w-[8vw]">
                  <option value="new"> 新增客户 </option>
                  <option value="last">来访客户</option>
                </select>
              </div>

              <div style="width: full" class="mt-[2vw]">
                <VueUiXy :config="config11" :dataset="dataset11" />
              </div>
            </div>
            <div class="w-[40vw] h-[20vw] border-five">
              <div class="w-full flex mt-[1vw]">
                <p class="text-[1vw] font-600 ml-[2vw]">各项目客户占比</p>
                <select class="h-[2vw] ml-[21vw] mt-[-0.5vw] border-six w-[8vw]">
                  <option value="new"> 新增客户 </option>
                  <option value="last">来访客户</option>
                </select>
              </div>

              <div style="width: full" class="mt-[0vw]">
                <VueUiXy :config="config12" :dataset="dataset12" />
              </div>
            </div>
          </div>
          <div class="w-full flex justify-around mt-[2vw]">
            <div class="w-[40vw] h-[20vw] border-five">
              <div class="w-full flex mt-[1vw]">
                <p class="text-[1vw] font-600 ml-[2vw]">客户来源渠道大类占比</p>
                <select class="h-[2vw] ml-[8vw] mt-[-0.5vw] border-six w-[8vw]">
                  <option value="new"> 新增客户 </option>
                  <option value="last">来访客户</option>
                </select>
                <select class="h-[2vw] ml-[2vw] mt-[-0.5vw] border-six w-[8vw]">
                  <option value="new"> 选择渠道 </option>
                  <option value="last">渠道1</option>
                  <option value="last">渠道2</option>
                  <option value="last">渠道3</option>
                  <option value="last">渠道4</option>
                  <option value="last">渠道5</option>
                </select>
              </div>

              <div style="width: 18vw" class="ml-[10vw] mt-[-3vw]">
                <VueUiDonut :config="config13" :dataset="dataset13" />

                <div class="w-[25vw] h-[3vw] flex justify-around m-auto ml-[-3vw]">
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#1447e1] border"></div>
                    <p class="text-[1vw]">渠道1</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#21c3e4] border"></div>
                    <p class="text-[1vw]">渠道2</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#ffdf0f] border"></div>
                    <p class="text-[1vw]">渠道3</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#f31212] border"></div>
                    <p class="text-[1vw]">渠道4</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#ff8080] border"></div>
                    <p class="text-[1vw]">渠道5</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-[40vw] h-[20vw] border-five">
              <div class="w-full flex mt-[1vw]">
                <p class="text-[1vw] font-600 ml-[2vw]">客户来源渠道小类占比</p>
                <select class="h-[2vw] ml-[8vw] mt-[-0.5vw] border-six w-[8vw]">
                  <option value="new"> 新增客户 </option>
                  <option value="last">来访客户</option>
                </select>
                <select class="h-[2vw] ml-[2vw] mt-[-0.5vw] border-six w-[8vw]">
                  <option value="new"> 选择渠道 </option>
                  <option value="last">渠道1</option>
                  <option value="last">渠道2</option>
                  <option value="last">渠道3</option>
                  <option value="last">渠道4</option>
                  <option value="last">渠道5</option>
                </select>
              </div>

              <div style="width: full" class="mt-[0vw]">
                <VueUiXy :config="config12" :dataset="dataset12" />
              </div>
            </div>
          </div>
          <div class="w-full flex justify-around mt-[2vw]">
            <div class="w-[40vw] h-[20vw] border-five">
              <div class="w-full flex mt-[1vw]">
                <p class="text-[1vw] font-600 ml-[2vw]"> 客户意向级别占比</p>
              </div>

              <div style="width: full" class="mt-[2vw]">
                <VueUiXy :config="config14" :dataset="dataset14" />
              </div>
            </div>
            <div class="w-[40vw] h-[20vw] border-five">
              <div class="w-full flex mt-[1vw]">
                <p class="text-[1vw] font-600 ml-[2vw]">科技园月度成交客户组数</p>
              </div>

              <div style="width: full" class="mt-[0vw]">
                <VueUiXy :config="config12" :dataset="dataset12" />
              </div>
            </div>
          </div>
          <div class="w-full flex justify-around mt-[2vw]">
            <div class="w-[40vw] h-[20vw] border-five">
              <div class="w-full flex mt-[1vw]">
                <p class="text-[1vw] font-600 ml-[2vw]">行业成交客户占比</p>
                <select class="h-[2vw] ml-[18vw] mt-[-0.5vw] border-six w-[8vw]">
                  <option value="new"> 选择行业 </option>
                  <option value="last">行业1</option>
                  <option value="last">行业2</option>
                  <option value="last">行业3</option>
                  <option value="last">行业4</option>
                  <option value="last">行业5</option>
                </select>
              </div>

              <div style="width: 18vw" class="ml-[10vw] mt-[-3vw]">
                <VueUiDonut :config="config13" :dataset="dataset13" />

                <div class="w-[25vw] h-[3vw] flex justify-around m-auto ml-[-3vw]">
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#1447e1] border"></div>
                    <p class="text-[1vw]">行业1</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#21c3e4] border"></div>
                    <p class="text-[1vw]">行业2</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#ffdf0f] border"></div>
                    <p class="text-[1vw]">行业3</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#f31212] border"></div>
                    <p class="text-[1vw]">行业4</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#ff8080] border"></div>
                    <p class="text-[1vw]">行业5</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-[40vw] h-[20vw] border-five">
              <div class="w-full flex mt-[1vw]">
                <p class="text-[1vw] font-600 ml-[2vw]">渠道大类成交客户占比</p>
                <select class="h-[2vw] ml-[18vw] mt-[-0.5vw] border-six w-[8vw]">
                  <option value="new"> 选择渠道 </option>
                  <option value="last">渠道1</option>
                  <option value="last">渠道2</option>
                  <option value="last">渠道3</option>
                  <option value="last">渠道4</option>
                  <option value="last">渠道5</option>
                </select>
              </div>

              <div style="width: 18vw" class="ml-[10vw] mt-[-3vw]">
                <VueUiDonut :config="config13" :dataset="dataset13" />

                <div class="w-[25vw] h-[3vw] flex justify-around m-auto ml-[-3vw]">
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#1447e1] border"></div>
                    <p class="text-[1vw]">渠道1</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#21c3e4] border"></div>
                    <p class="text-[1vw]">渠道2</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#ffdf0f] border"></div>
                    <p class="text-[1vw]">渠道3</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#f31212] border"></div>
                    <p class="text-[1vw]">渠道4</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#ff8080] border"></div>
                    <p class="text-[1vw]">渠道5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex justify-around mt-[2vw]">
            <div class="w-[40vw] h-[20vw] border-five">
              <div class="w-full flex mt-[1vw]">
                <p class="text-[1vw] font-600 ml-[2vw]"> 渠道小类成交客户占比</p>
                <select class="h-[2vw] ml-[15vw] mt-[-0.5vw] border-six w-[8vw]">
                  <option value="new"> 新增客户 </option>
                  <option value="last">来访客户</option>
                </select>
              </div>
              <div style="width: full" class="mt-[0vw]">
                <VueUiXy :config="config12" :dataset="dataset12" />
              </div>
            </div>
            <div class="w-[40vw] h-[20vw] border-five">
              <div class="w-full flex mt-[1vw]">
                <p class="text-[1vw] font-600 ml-[2vw]">客户成交周期占比</p>
              </div>

              <div style="width: 18vw" class="ml-[10vw] mt-[-3vw]">
                <VueUiDonut :config="config15" :dataset="dataset15" />

                <div class="w-[15vw] h-[3vw] flex justify-around m-auto ml-[3vw]">
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#1447e1] border"></div>
                    <p class="text-[1vw]">1月内</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#21c3e4] border"></div>
                    <p class="text-[1vw]">1-2月</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#ffdf0f] border"></div>
                    <p class="text-[1vw]">2-3月</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex justify-around mt-[2vw]">
            <div class="w-[40vw] h-[20vw] border-five">
              <div class="w-full flex mt-[1vw]">
                <p class="text-[1vw] font-600 ml-[2vw]">客户成交面积占比</p>
              </div>

              <div style="width: 18vw" class="ml-[10vw] mt-[-3vw]">
                <VueUiDonut :config="config16" :dataset="dataset16" />

                <div class="w-[30vw] h-[3vw] flex justify-around m-auto ml-[-6vw]">
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#0d70f2] border"></div>
                    <p class="text-[1vw]">500㎡以下</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#05c1ff] border"></div>
                    <p class="text-[1vw]">500-1000㎡</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#d4ff00] border"></div>
                    <p class="text-[1vw]">1000-1500㎡</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#06a711] border"></div>
                    <p class="text-[1vw]">1500-2000㎡</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#00ff7b] border"></div>
                    <p class="text-[1vw]">2000-3000㎡</p>
                  </div>
                  <div class="w-[5vw] h-full flex">
                    <div class="w-[2vw] h-[1vw] bg-[#ffea00] border"></div>
                    <p class="text-[1vw]">3000㎡以上</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-[40vw] h-[20vw] border-five">
              <div class="w-full flex mt-[1vw]">
                <p class="text-[1vw] font-600 ml-[2vw]">各项目渠道新增客户对比</p>
                <select class="h-[2vw] ml-[15vw] mt-[-0.5vw] border-six w-[8vw]">
                  <option value="new"> 新增客户 </option>
                  <option value="last">来访客户</option>
                </select>
              </div>

              <div style="width: full" class="mt-[0vw]">
                <VueUiXy :config="config17" :dataset="dataset17" />
              </div>
            </div>
          </div>
          <div class="w-full flex justify-around mt-[2vw]">
            <div class="w-[40vw] h-[20vw] border-five">
              <div class="w-full flex mt-[1vw]">
                <p class="text-[1vw] font-600 ml-[2vw]"> 新增客户转化比（项目）</p>
              </div>

              <div style="width: full" class="mt-[2vw]">
                <VueUiXy :config="config18" :dataset="dataset18" />
              </div>
            </div>
            <div class="w-[40vw] h-[20vw] border-five">
              <div class="w-full flex mt-[1vw]">
                <p class="text-[1vw] font-600 ml-[2vw]">新增客户转化比（渠道）</p>
              </div>

              <div style="width: full" class="mt-[0vw]">
                <VueUiXy :config="config18" :dataset="dataset18" />
              </div>
            </div>
          </div>
        </div>

        <div v-if="Moneymsg">
          <div>
            <div class="w-80vw m-auto container smooth-scroll mt-[2vw]">
              <div class="w-[60vw] flex justify-around">
                <button class="border-seven w-[8vw] h-[2vw] text-blue-500" @click="insubject"
                  >项目新增客户</button
                >
                <button class="border-seven w-[8vw] h-[2vw] ml-[1vw] text-blue-500" @click="inroom"
                  >客户来源渠道</button
                >
                <button class="border-seven w-[8vw] h-[2vw] ml-[1vw] text-blue-500" @click="inwant"
                  >客户意向级别</button
                >
                <button class="border-seven w-[8vw] h-[2vw] ml-[1vw] text-blue-500" @click="inwork"
                  >行业成交客户数</button
                >
                <button class="border-seven w-[8vw] h-[2vw] ml-[1vw] text-blue-500" @click="inway"
                  >渠道成交客户数</button
                >
                <button
                  class="border-seven w-[8vw] h-[2vw] ml-[1vw] text-blue-500"
                  @click="inaround"
                  >客户成交周期</button
                >
                <button class="border-seven w-[8vw] h-[2vw] ml-[1vw] text-blue-500" @click="innew"
                  >项目新增客户渠道</button
                >
              </div>
              <vxe-table
                :data="tableData3"
                class="w-[200vw] mt-[2vw] text-center"
                height="400"
                v-if="subject"
                :show-footer="showFooter"
                align="center"
                :merge-cells="mergeCells"
              >
                <vxe-column field="mounth" title="" width="70" />
                <vxe-colgroup title="项目1">
                  <vxe-column field="num1" title="新增客户" />
                  <vxe-column field="num1" title="来访客户" />
                </vxe-colgroup>
                <vxe-colgroup title="项目2">
                  <vxe-column field="num1" title="新增客户" />
                  <vxe-column field="num1" title="来访客户" />
                </vxe-colgroup>
                <vxe-colgroup title="项目3">
                  <vxe-column field="num1" title="新增客户" />
                  <vxe-column field="num1" title="来访客户" />
                </vxe-colgroup>
                <vxe-colgroup title="项目4">
                  <vxe-column field="num1" title="新增客户" />
                  <vxe-column field="num1" title="来访客户" />
                </vxe-colgroup>
                <vxe-colgroup title="项目5">
                  <vxe-column field="num1" title="新增客户" />
                  <vxe-column field="num1" title="来访客户" />
                </vxe-colgroup>
                <vxe-colgroup title="项目6">
                  <vxe-column field="num1" title="新增客户" />
                  <vxe-column field="num1" title="来访客户" />
                </vxe-colgroup>
                <vxe-colgroup title="项目7">
                  <vxe-column field="num1" title="新增客户" />
                  <vxe-column field="num1" title="来访客户" />
                </vxe-colgroup>
                <vxe-colgroup title="项目8">
                  <vxe-column field="num1" title="新增客户" />
                  <vxe-column field="num1" title="来访客户" />
                </vxe-colgroup>
                <vxe-colgroup title="项目9">
                  <vxe-column field="num1" title="新增客户" />
                  <vxe-column field="num1" title="来访客户" />
                </vxe-colgroup>
                <vxe-colgroup title="项目10">
                  <vxe-column field="num1" title="新增客户" />
                  <vxe-column field="num1" title="来访客户" />
                </vxe-colgroup>
              </vxe-table>
              <vxe-table
                :data="tableData3"
                class="w-[200vw] mt-[2vw]"
                height="300"
                v-if="room"
                :show-footer="showFooter"
                header-align="center"
                align="center"
                :merge-cells="mergeCells1"
              >
                <vxe-column field="seq" width="50" />
                <vxe-column field="mounth" title="" width="70" />
                <vxe-colgroup title="机构推荐">
                  <vxe-column field="num2" title="行业协会" />
                  <vxe-column field="num2" title="中介机构" />
                </vxe-colgroup>
                <vxe-colgroup title="广告宣传">
                  <vxe-column field="num2" title="电梯广告" />
                  <vxe-column field="num2" title="其他广告" />
                </vxe-colgroup>
                <vxe-colgroup title="网络来电">
                  <vxe-column field="num2" title="58同城平台推送" />
                  <vxe-column field="num2" title="58同城个人发帖" />
                </vxe-colgroup>
                <vxe-colgroup title="他人推荐">
                  <vxe-column field="num2" title="老业主推荐" />
                  <vxe-column field="num2" title="朋友推荐" />
                </vxe-colgroup>
                <vxe-colgroup title="自主拓客">
                  <vxe-column field="num2" title="call客" />
                  <vxe-column field="num2" title="陌拜" />
                </vxe-colgroup>
                <vxe-colgroup title="自然来访">
                  <vxe-column field="num2" title="路过" />
                  <vxe-column field="num2" title="其他" />
                </vxe-colgroup>
                <vxe-colgroup title="新媒体推广">
                  <vxe-column field="num2" title="园链" />
                  <vxe-column field="num2" title="抖音" />
                </vxe-colgroup>
              </vxe-table>
              <vxe-table
                :data="tableData3"
                class="w-[200vw] mt-[2vw]"
                height="300"
                v-if="room"
                :show-footer="showFooter"
                header-align="center"
                align="center"
                id="table"
                :merge-cells="mergeCells1"
              >
                <vxe-column field="seq" width="50" />
                <vxe-column field="mounth" title="" width="70" />
                <vxe-colgroup title="机构推荐">
                  <vxe-column field="num3" title="行业协会" />
                  <vxe-column field="num3" title="中介机构" />
                </vxe-colgroup>
                <vxe-colgroup title="广告宣传">
                  <vxe-column field="num3" title="电梯广告" />
                  <vxe-column field="num3" title="其他广告" />
                </vxe-colgroup>
                <vxe-colgroup title="网络来电">
                  <vxe-column field="num3" title="58同城平台推送" />
                  <vxe-column field="num3" title="58同城个人发帖" />
                </vxe-colgroup>
                <vxe-colgroup title="他人推荐">
                  <vxe-column field="num3" title="老业主推荐" />
                  <vxe-column field="num3" title="朋友推荐" />
                </vxe-colgroup>
                <vxe-colgroup title="自主拓客">
                  <vxe-column field="num3" title="call客" />
                  <vxe-column field="num3" title="陌拜" />
                </vxe-colgroup>
                <vxe-colgroup title="自然来访">
                  <vxe-column field="num3" title="路过" />
                  <vxe-column field="num3" title="其他" />
                </vxe-colgroup>
                <vxe-colgroup title="新媒体推广">
                  <vxe-column field="num3" title="园链" />
                  <vxe-column field="num3" title="抖音" />
                </vxe-colgroup>
              </vxe-table>

              <vxe-table
                :data="tableData3"
                class="w-[200vw] mt-[2vw]"
                height="300"
                v-if="want"
                :show-footer="showFooter"
                header-align="center"
                align="center"
                id="table"
              >
                <vxe-column field="seq" width="50" />
                <vxe-column field="mounth" title="" width="70" />
                <vxe-column field="num" title="A类" />
                <vxe-column field="num" title="B类" />
                <vxe-column field="num" title="C类" />
                <vxe-column field="num" title="D类" />
                <vxe-column field="num" title="E类" />
              </vxe-table>
              <vxe-table
                :data="tableData3"
                class="w-[200vw] mt-[2vw]"
                height="300"
                v-if="work"
                :show-footer="showFooter"
                header-align="center"
                align="center"
                id="table"
              >
                <vxe-column field="seq" width="50" />
                <vxe-column field="mounth" title="" width="70" />
                <vxe-column field="num" title="行业1" />
                <vxe-column field="num" title="行业2" />
                <vxe-column field="num" title="行业3" />
                <vxe-column field="num" title="行业4" />
                <vxe-column field="num" title="行业5" />
                <vxe-column field="num" title="行业6" />
                <vxe-column field="num" title="行业7" />
                <vxe-column field="num" title="行业8" />
                <vxe-column field="num" title="行业9" />
                <vxe-column field="num" title="行业10" />
              </vxe-table>
              <vxe-table
                :data="tableData3"
                class="w-[200vw] mt-[2vw]"
                height="300"
                v-if="way"
                show-footer
                header-align="center"
                align="center"
                id="table"
                :merge-cells="mergeCells2"
              >
                <vxe-column field="mounth" title="" width="70" />
                <vxe-colgroup title="机构推荐">
                  <vxe-column field="num4" title="行业协会" />
                  <vxe-column field="num4" title="中介机构" />
                </vxe-colgroup>
                <vxe-colgroup title="广告宣传">
                  <vxe-column field="num4" title="电梯广告" />
                  <vxe-column field="num4" title="其他广告" />
                </vxe-colgroup>
                <vxe-colgroup title="网络来电">
                  <vxe-column field="num4" title="58同城平台推送" />
                  <vxe-column field="num4" title="58同城个人发帖" />
                </vxe-colgroup>
                <vxe-colgroup title="他人推荐">
                  <vxe-column field="num4" title="老业主推荐" />
                  <vxe-column field="num4" title="朋友推荐" />
                </vxe-colgroup>
                <vxe-colgroup title="自主拓客">
                  <vxe-column field="num4" title="call客" />
                  <vxe-column field="num4" title="陌拜" />
                </vxe-colgroup>
                <vxe-colgroup title="自然来访">
                  <vxe-column field="num4" title="路过" />
                  <vxe-column field="num4" title="其他" />
                </vxe-colgroup>
                <vxe-colgroup title="新媒体推广">
                  <vxe-column field="num4" title="园链" />
                  <vxe-column field="num4" title="抖音" />
                </vxe-colgroup>
              </vxe-table>
              <vxe-table
                :data="tableData3"
                class="w-[120vw] mt-[2vw]"
                height="300"
                v-if="around"
                header-align="center"
                align="center"
                id="table"
              >
                <vxe-column field="name" title="项目" />
                <vxe-column field="num" title="1月成交量（组）" />
                <vxe-column field="num" title="1月成交面积（㎡）" />
                <vxe-colgroup title="1月成交面积（组）">
                  <vxe-column field="num" title="500㎡以下" />
                  <vxe-column field="num" title="500-1000（含500）" />
                  <vxe-column field="num" title="1000-1500（含1000）" />
                  <vxe-column field="num" title="1500-2000（含1500）" />
                  <vxe-column field="num" title="2000-3000（含2000）" />
                  <vxe-column field="num" title="3000及以上" />
                </vxe-colgroup>
                <vxe-column field="num" title="2月成交量（组）" />
                <vxe-column field="num" title="2月成交面积（㎡）" />
                <vxe-colgroup title="2月成交面积（组）">
                  <vxe-column field="num" title="500㎡以下" />
                  <vxe-column field="num" title="500-1000（含500）" />
                  <vxe-column field="num" title="1000-1500（含1000）" />
                  <vxe-column field="num" title="1500-2000（含1500）" />
                  <vxe-column field="num" title="2000-3000（含2000）" />
                  <vxe-column field="num" title="3000及以上" />
                </vxe-colgroup>
              </vxe-table>
              <vxe-table
                :data="tableData3"
                class="w-[120vw] mt-[2vw]"
                height="300"
                v-if="news"
                header-align="center"
                align="center"
                id="table"
                :merge-cells="mergeCells2"
              >
                <vxe-column field="rename" title="项目" width="70" />
                <vxe-colgroup title="机构推荐">
                  <vxe-column field="num4" title="行业协会" />
                  <vxe-column field="num4" title="中介机构" />
                </vxe-colgroup>
                <vxe-colgroup title="广告宣传">
                  <vxe-column field="num4" title="电梯广告" />
                  <vxe-column field="num4" title="其他广告" />
                </vxe-colgroup>
                <vxe-colgroup title="网络来电">
                  <vxe-column field="num4" title="58同城平台推送" />
                  <vxe-column field="num4" title="58同城个人发帖" />
                </vxe-colgroup>
                <vxe-colgroup title="他人推荐">
                  <vxe-column field="num4" title="老业主推荐" />
                  <vxe-column field="num4" title="朋友推荐" />
                </vxe-colgroup>
                <vxe-colgroup title="自主拓客">
                  <vxe-column field="num4" title="call客" />
                  <vxe-column field="num4" title="陌拜" />
                </vxe-colgroup>
                <vxe-colgroup title="自然来访">
                  <vxe-column field="num4" title="路过" />
                  <vxe-column field="num4" title="其他" />
                </vxe-colgroup>
                <vxe-colgroup title="新媒体推广">
                  <vxe-column field="num4" title="园链" />
                  <vxe-column field="num4" title="抖音" />
                </vxe-colgroup>
              </vxe-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue';
  import { VueUiDonut, VueUiXy } from 'vue-data-ui';
  import 'vue-data-ui/style.css';
  import { VxeUI } from 'vxe-pc-ui';
  import XEUtils from 'xe-utils';
  import type { SexType } from '@faker-js/faker';
  import { faker } from '@faker-js/faker';
  import { fakerZH_TW } from '@faker-js/faker';
  import axios from 'axios';
  fakerZH_TW.seed(5);
  const tableData = ref(['']);
  const searchlocation = ref('');
  const searchnumber = ref('');
  const searchfuter = ref('');
  const searchpast = ref('');
  const searchobjname = ref('');
  const searchpersent = ref('');
  const searchplace = ref('');
  const searchclassify = ref('');
  const searchnum = ref('');
  const searchname = ref('');
  const searchmoney = ref('');
  const searchstatus = ref('');
  const searchsymbol = ref('');
  const mergeCells = ref([{ row: 3, col: 1, rowspan: 1, colspan: 20 }]);
  const mergeCells1 = ref([{ row: 3, col: 2, rowspan: 1, colspan: 14 }]);
  const mergeCells2 = ref([
    { row: 3, col: 1, rowspan: 1, colspan: 2 },
    { row: 3, col: 3, rowspan: 1, colspan: 2 },
    { row: 3, col: 5, rowspan: 1, colspan: 2 },
    { row: 3, col: 7, rowspan: 1, colspan: 2 },
    { row: 3, col: 9, rowspan: 1, colspan: 2 },
    { row: 3, col: 11, rowspan: 1, colspan: 2 },
    { row: 3, col: 13, rowspan: 1, colspan: 2 },
  ]);

  const fetchTableData = async () => {
    try {
      const parmas = {
        location: searchlocation.value,
        number: searchnumber.value,
        futer: searchfuter.value,
        past: searchpast.value,
        objname: searchobjname.value,
        persent: searchpersent.value,
        place: searchplace.value,
        classify: searchclassify.value,
        num: searchnum.value,
        name: searchname.value,
        money: searchmoney.value,
        status: searchstatus.value,
        symbol: searchsymbol.value,
      };
      const response = await axios.get(
        'https://apifoxmock.com/m1/5416381-5090472-default/data-analysis',
        parmas,
      );
      const responseData = response.data;
      console.log(responseData);

      if (Array.isArray(responseData)) {
        // 数据已经是对象数组，直接赋值
        tableData.value = responseData;
      } else if (typeof responseData === 'object' && responseData !== null) {
        // 将单个对象转换为对象数组
        tableData.value = [responseData];
      } else {
        console.error('Unexpected data format:', responseData);
      }
    } catch (error) {
      console.error('Failed to fetch table data:', error);
    }
  };

  fetchTableData();

  const firstName = fakerZH_TW.person.firstName();
  const firstName1 = fakerZH_TW.person.firstName();
  const firstName2 = fakerZH_TW.person.firstName();
  const firstName3 = fakerZH_TW.person.firstName();
  const firstName4 = fakerZH_TW.person.firstName();
  const firstName5 = fakerZH_TW.person.firstName();

  const headerCellClassName = ({ column }) => {
    if (column.field === '年度任务') {
      return 'col-yellow';
    }
  };

  type SubscriptionTier = 'free' | 'basic' | 'business';

  interface User {
    _id: string;
    avatar: string;
    birthday: Date;
    email: string;
    lastName: string;
    sex: SexType;
    subscriptionTier: SubscriptionTier;
  }
  function createRandomUser(): User {
    return {
      _id: faker.string.uuid(),
      avatar: faker.image.avatar(),
      birthday: faker.date.birthdate(),
      email: faker.internet.email(),
      lastName: faker.person.lastName(),
      sex: faker.person.sexType(),
      subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
    };
  }

  const user = createRandomUser();
  console.log(user);

  const aboutmoney = ref(false);
  const aboutlend = ref(false);
  const aboutmerchants = ref(false);
  const aboutrent = ref(false);
  const aboutclient = ref(false);
  const subject = ref(true);
  const room = ref(false);
  const showFooter = ref(true);
  const table = ref(true);
  const Moneymsg = ref(false);
  const formRef = ref();
  const showEditPopup = ref(false);
  const loading = ref(false);
  const selectRow = ref();
  const want = ref(false);
  const way = ref(false);
  const work = ref(false);
  const news = ref(false);
  const around = ref(false);

  const pageVO = reactive({
    total: 0,
    currentPage: 1,
    pageSize: 10,
  });

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomInt = getRandomInt(1, 100);

  function insubject() {
    subject.value = true;
    room.value = false;
    work.value = false;
    news.value = false;
    want.value = false;
    around.value = false;
    way.value = false;
  }

  function inroom() {
    subject.value = false;
    room.value = true;
    work.value = false;
    news.value = false;
    want.value = false;
    around.value = false;
    way.value = false;
  }
  function inway() {
    subject.value = false;
    room.value = false;
    work.value = false;
    news.value = false;
    want.value = false;
    around.value = false;
    way.value = true;
  }
  function inwork() {
    subject.value = false;
    room.value = false;
    work.value = true;
    news.value = false;
    want.value = false;
    around.value = false;
    way.value = false;
  }
  function innew() {
    subject.value = false;
    room.value = false;
    want.value = false;
    around.value = false;
    way.value = false;
    news.value = true;
  }
  function inwant() {
    subject.value = false;
    room.value = false;
    work.value = false;
    news.value = false;
    want.value = true;
    around.value = false;
    way.value = false;
  }
  function inaround() {
    subject.value = false;
    room.value = false;
    work.value = false;
    news.value = false;
    want.value = false;
    around.value = true;
    way.value = false;
  }

  const AllList = [
    {
      id: 10001,
      name: 'Test1',
      nickname: 'T1',
      role: 'Develop',
      sex: 'Man',
      age: 28,
      address: 'Shenzhen',
    },
    {
      id: 10002,
      name: 'Test2',
      nickname: 'T2',
      role: 'Test',
      sex: 'Women',
      age: 22,
      address: 'Guangzhou',
    },
    {
      id: 10003,
      name: 'Test3',
      nickname: 'T3',
      role: 'PM',
      sex: 'Man',
      age: 32,
      address: 'Shanghai',
    },
    {
      id: 10004,
      name: 'Test4',
      nickname: 'T4',
      role: 'Designer',
      sex: 'Women',
      age: 23,
      address: 'test abc',
    },
    {
      id: 10005,
      name: 'Test5',
      nickname: 'T5',
      role: 'Develop',
      sex: 'Women',
      age: 30,
      address: 'Shanghai',
    },
    {
      id: 10006,
      name: 'Test6',
      nickname: 'T6',
      role: 'Designer',
      sex: 'Women',
      age: 21,
      address: 'Shenzhen',
    },
    {
      id: 10007,
      name: 'Test7',
      nickname: 'T7',
      role: 'Test',
      sex: 'Man',
      age: 29,
      address: 'Shenzhen',
    },
    {
      id: 10008,
      name: 'Test8',
      nickname: 'T8',
      role: 'Develop',
      sex: 'Man',
      age: 35,
      address: 'test abc',
    },
    {
      id: 10009,
      name: 'Test9',
      nickname: 'T9',
      role: 'Develop',
      sex: 'Man',
      age: 35,
      address: 'Shenzhen',
    },
    {
      id: 100010,
      name: 'Test10',
      nickname: 'T10',
      role: 'Develop',
      sex: 'Man',
      age: 35,
      address: 'Guangzhou',
    },
    {
      id: 100011,
      name: 'Test11',
      nickname: 'T11',
      role: 'Develop',
      sex: 'Man',
      age: 49,
      address: 'Guangzhou',
    },
    {
      id: 100012,
      name: 'Test12',
      nickname: 'T12',
      role: 'Develop',
      sex: 'Women',
      age: 45,
      address: 'Shanghai',
    },
    {
      id: 100013,
      name: 'Test13',
      nickname: 'T13',
      role: 'Test',
      sex: 'Women',
      age: 35,
      address: 'Guangzhou',
    },
    {
      id: 100014,
      name: 'Test14',
      nickname: 'T14',
      role: 'Test',
      sex: 'Man',
      age: 29,
      address: 'Shanghai',
    },
    {
      id: 100015,
      name: 'Test15',
      nickname: 'T15',
      role: 'Develop',
      sex: 'Man',
      age: 39,
      address: 'Guangzhou',
    },
    {
      id: 100016,
      name: 'Test16',
      nickname: 'T16',
      role: 'Test',
      sex: 'Women',
      age: 35,
      address: 'Guangzhou',
    },
    {
      id: 100017,
      name: 'Test17',
      nickname: 'T17',
      role: 'Test',
      sex: 'Man',
      age: 39,
      address: 'Shanghai',
    },
    {
      id: 100018,
      name: 'Test18',
      nickname: 'T18',
      role: 'Develop',
      sex: 'Man',
      age: 44,
      address: 'Guangzhou',
    },
    {
      id: 100019,
      name: 'Test19',
      nickname: 'T19',
      role: 'Develop',
      sex: 'Man',
      age: 39,
      address: 'Guangzhou',
    },
    {
      id: 100020,
      name: 'Test20',
      nickname: 'T20',
      role: 'Test',
      sex: 'Women',
      age: 35,
      address: 'Guangzhou',
    },
    {
      id: 100021,
      name: 'Test21',
      nickname: 'T21',
      role: 'Test',
      sex: 'Man',
      age: 39,
      address: 'Shanghai',
    },
    {
      id: 100022,
      name: 'Test22',
      nickname: 'T22',
      role: 'Develop',
      sex: 'Man',
      age: 44,
      address: 'Guangzhou',
    },
  ];
  const tableData1 = ref([
    {
      id: 10001,
      objname: '项目1',
      name: firstName,
      role: 'Develop',
      num: randomInt,
      sex: 'Man',
      time: user.birthday,
      age: 28,
      address: 'test abc',
      div: '此处三个字段为手动填写',
      div1: '此处三个字段为手动填写',
      div2: '此处三个字段为手动填写',
    },
    {
      id: 10002,
      objname: '项目2',
      name: firstName1,
      role: 'Test',
      num: randomInt,
      sex: 'Women',
      time: user.birthday,
      age: 22,
      address: 'Guangzhou',
      div: '此处三个字段为手动填写',
      div1: '此处三个字段为手动填写',
      div2: '此处三个字段为手动填写',
    },
    {
      id: 10003,
      objname: '项目3',
      name: firstName2,
      num: randomInt,
      role: 'PM',
      sex: 'Man',
      time: user.birthday,
      age: 32,
      address: 'Shanghai',
      div: '此处三个字段为手动填写',
      div1: '此处三个字段为手动填写',
      div2: '此处三个字段为手动填写',
    },
    {
      id: 10004,
      objname: '项目4',
      name: firstName3,
      num: randomInt,
      role: 'Designer',
      time: user.birthday,
      sex: 'Women',
      age: 24,
      address: 'Shanghai',
      div: '此处三个字段为手动填写',
      div1: '此处三个字段为手动填写',
      div2: '此处三个字段为手动填写',
    },
    {
      id: 10005,
      objname: '项目5',
      name: firstName4,
      role: 'Designer',
      time: user.birthday,
      num: randomInt,
      sex: 'Women',
      age: 24,
      address: 'Shanghai',
      div: '此处三个字段为手动填写',
      div1: '此处三个字段为手动填写',
      div2: '此处三个字段为手动填写',
    },
    {
      id: 10006,
      objname: '项目6',
      name: firstName5,
      role: 'Designer',
      num: randomInt,
      time: user.birthday,
      sex: 'Women',
      age: 24,
      address: 'Shanghai',
      div: '此处三个字段为手动填写',
      div1: '此处三个字段为手动填写',
      div2: '此处三个字段为手动填写',
    },
  ]);
  const tableData2 = ref([
    {
      id: 10001,
      name: firstName,
      mounth: '一月',
      location: '湖北省武汉市xxx区xxxxxx',
      lendpresent: randomInt + '%（已出租面积÷项目所有房间累计的可租面积）',
      outpresent: randomInt + '%（退租完成面积÷项目所有房间累计的可租面积）',
      new: randomInt + '㎡（筛选时间段内的审核通过新签房间面积）',
      still: randomInt + '㎡（筛选时间段内的审核通过续签房间面积）',
      out: randomInt + '㎡（筛选时间段内的审核通过退租房间面积）',
    },
    {
      id: 10002,
      name: firstName1,
      mounth: '二月',
      location: '湖北省武汉市xxx区xxxxxx',
      lendpresent: randomInt + '%（已出租面积÷项目所有房间累计的可租面积）',
      outpresent: randomInt + '%（退租完成面积÷项目所有房间累计的可租面积）',
      new: randomInt + '㎡（筛选时间段内的审核通过新签房间面积）',
      still: randomInt + '㎡（筛选时间段内的审核通过续签房间面积）',
      out: randomInt + '㎡（筛选时间段内的审核通过退租房间面积）',
    },
    {
      id: 10003,
      name: firstName2,
      mounth: '三月',
      location: '湖北省武汉市xxx区xxxxxx',
      lendpresent: randomInt + '%（已出租面积÷项目所有房间累计的可租面积）',
      outpresent: randomInt + '%（退租完成面积÷项目所有房间累计的可租面积）',
      new: randomInt + '㎡（筛选时间段内的审核通过新签房间面积）',
      still: randomInt + '㎡（筛选时间段内的审核通过续签房间面积）',
      out: randomInt + '㎡（筛选时间段内的审核通过退租房间面积）',
    },
    {
      id: 10004,
      name: firstName3,
      location: '湖北省武汉市xxx区xxxxxx',
      lendpresent: randomInt + '%（已出租面积÷项目所有房间累计的可租面积）',
      outpresent: randomInt + '%（退租完成面积÷项目所有房间累计的可租面积）',
      new: randomInt + '㎡（筛选时间段内的审核通过新签房间面积）',
      still: randomInt + '㎡（筛选时间段内的审核通过续签房间面积）',
      out: randomInt + '㎡（筛选时间段内的审核通过退租房间面积）',
    },
    {
      id: 10005,
      name: firstName4,
      location: '湖北省武汉市xxx区xxxxxx',
      lendpresent: randomInt + '%（已出租面积÷项目所有房间累计的可租面积）',
      outpresent: randomInt + '%（退租完成面积÷项目所有房间累计的可租面积）',
      new: randomInt + '㎡（筛选时间段内的审核通过新签房间面积）',
      still: randomInt + '㎡（筛选时间段内的审核通过续签房间面积）',
      out: randomInt + '㎡（筛选时间段内的审核通过退租房间面积）',
    },
    {
      id: 10006,
      name: firstName5,
      location: '湖北省武汉市xxx区xxxxxx',
      lendpresent: randomInt + '%（已出租面积÷项目所有房间累计的可租面积）',
      outpresent: randomInt + '%（退租完成面积÷项目所有房间累计的可租面积）',
      new: randomInt + '㎡（筛选时间段内的审核通过新签房间面积）',
      still: randomInt + '㎡（筛选时间段内的审核通过续签房间面积）',
      out: randomInt + '㎡（筛选时间段内的审核通过退租房间面积）',
    },
  ]);
  const tableData3 = ref([
    {
      id: 10001,
      name: '项目1',
      num: randomInt,
      num1: randomInt,
      num2: randomInt,
      num3: randomInt,
      num4: randomInt,
      mounth: '一月',
      rename: '项目1',
    },
    {
      id: 10002,
      name: '项目2',
      mounth: '二月',
      num: randomInt,
      num1: randomInt,
      num2: randomInt,
      num3: randomInt,
      num4: randomInt,
      rename: '项目2',
    },
    {
      id: 10003,
      name: '项目3',
      mounth: '三月',
      num: randomInt,
      num1: randomInt,
      num2: randomInt,
      num3: randomInt,
      num4: randomInt,
      rename: '项目3',
    },
    {
      id: 10004,
      name: '项目4',
      mounth: '总计',
      num: randomInt * 3,
      num1: '新增客户:' + randomInt * 3 * 10 + '人' + ',' + '来访客户:' + randomInt * 3 * 10 + '人',
      num2: '新增客户:' + randomInt * 3 * 14 + '人',
      num3: '来访客户:' + randomInt * 3 * 14 + '人',
      num4: randomInt * 3 * 2,
      rename: '总计',
    },
  ]);

  const defaultData = {
    id: null,
    name: '',
    reture: '',
    firstspace: '',
    object: '',
    firstreture: '',
    secondspace: '',
    thirespace: '',
    fourthspace: '',
    secondreture: '',
    thirereture: '',
    fourthreture: '',
  };
  const objItemRender = reactive({
    name: 'VxeSelect',
    options: [
      { label: '项目1', value: 'obj1' },
      { label: '项目2', value: 'obj2' },
      { label: '项目3', value: 'obj3' },
      { label: '项目4', value: 'obj4' },
      { label: '项目5', value: 'obj5' },
      { label: '项目6', value: 'obj6' },
    ],
  });
  const formOptions = reactive({
    titleWidth: 80,
    titleAlign: 'right',
    titleColon: true,
    data: XEUtils.clone(defaultData, true),
    rules: {
      name: [{ required: true, message: '请输入面积' }],
      object: [{ required: true, message: '请选择项目配置规则' }],
      firstspace: [{ required: true, message: '请输入面积  ' }],
      secondspace: [{ required: true, message: '请输入面积  ' }],
      thirespace: [{ required: true, message: '请输入面积' }],
      fourthspace: [{ required: true, message: '请输入面积' }],
      firstreture: [{ required: true, message: '请输入金额  ' }],
      secondreture: [{ required: true, message: '请输入金额  ' }],
      thirereture: [{ required: true, message: '请输入金额 ' }],
      fourthreture: [{ required: true, message: '请输入金额 ' }],
      reture: [{ required: true, message: '请输入金额 ' }],
    },
    items: [
      { field: 'object', title: ' 项目', span: 20, itemRender: objItemRender },
      { field: 'name', title: ' 年度租赁面积', span: 12, itemRender: { name: 'VxeInput' } },
      { field: 'reture', title: '年度租赁回款', span: 12, itemRender: { name: 'VxeInput' } },
      {
        field: 'firstspace',
        title: '一季度租赁面积',
        span: 12,
        itemRender: { name: 'VxeNumberInput' },
      },
      {
        field: 'firstreture',
        title: '一季度租赁回款',
        span: 12,
        itemRender: { name: 'VxeNumberInput' },
      },
      {
        field: 'secondspace',
        title: ' 二季度租赁面积',
        span: 12,
        itemRender: { name: 'VxeNumberInput' },
      },
      {
        field: 'secondreture',
        title: '二季度租赁回款',
        span: 12,
        itemRender: { name: 'VxeNumberInput' },
      },
      {
        field: 'thirespace',
        title: '三季度租赁面积',
        span: 12,
        itemRender: { name: 'VxeNumberInput' },
      },
      {
        field: 'thirereture',
        title: '三季度租赁回款',
        span: 12,
        itemRender: { name: 'VxeNumberInput' },
      },
      {
        field: 'fourthspace',
        title: '四季度租赁面积',
        span: 12,
        itemRender: { name: 'VxeNumberInput' },
      },
      {
        field: 'fourthreture',
        title: '四季度租赁回款',
        span: 12,
        itemRender: { name: 'VxeNumberInput' },
      },
    ],
  });
  const formOptions1 = reactive({
    titleWidth: 80,
    titleAlign: 'right',
    titleColon: true,
    data: XEUtils.clone(defaultData, true),
    rules: {
      name: [{ required: true, message: '请输入面积' }],
      reture: [{ required: true, message: '请输入金额 ' }],
    },
    items: [
      { field: 'name', title: ' 项目', span: 12, itemRender: { name: 'VxeInput' } },
      { field: 'reture', title: '年度出租率目标', span: 12, itemRender: { name: 'VxeInput' } },
    ],
  });
  const addEvent = () => {
    selectRow.value = undefined;
    formOptions.data = XEUtils.clone(defaultData, true);
    formOptions1.data = XEUtils.clone(defaultData, true);
    showEditPopup.value = true;
  };
  const confirmEvent = async () => {
    const $form = formRef.value;
    if ($form) {
      const errMap = await $form.validate();
      if (!errMap) {
        showEditPopup.value = false;
        VxeUI.modal.message({ content: '保存成功', status: 'success' });
      }
    }
  };
  const handlePageData = () => {
    setTimeout(() => {
      const { pageSize, currentPage } = pageVO;
      pageVO.total = AllList.length;
      tableData.value = AllList.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    }, 100);
  };
  const pageChange = ({ pageSize, currentPage }) => {
    pageVO.currentPage = currentPage;
    pageVO.pageSize = pageSize;
    handlePageData();
  };
  handlePageData();
  function Lend() {
    aboutlend.value = true;
  }
  function Merchants() {
    aboutmerchants.value = true;
  }
  function Trent() {
    aboutrent.value = true;
  }
  function Client() {
    aboutclient.value = true;
  }
  function Moeny() {
    aboutmoney.value = true;
  }
  function moneyoff() {
    aboutmoney.value = false;
    aboutclient.value = false;
    aboutlend.value = false;
    aboutmerchants.value = false;
    aboutrent.value = false;
  }
  function clickMoneytable() {
    table.value = true;
    Moneymsg.value = false;
  }
  function clickMoneymsg() {
    Moneymsg.value = true;
    table.value = false;
  }

  const config = ref({
    responsive: false,
    theme: '',
    customPalette: [],
    useCssAnimation: true,
    useBlurOnHover: true,
    userOptions: {
      show: false,
      buttons: {
        tooltip: true,
        pdf: true,
        csv: true,
        img: true,
        table: true,
        labels: true,
        fullscreen: true,
        sort: false,
        stack: false,
        animation: false,
      },
      buttonTitles: {
        open: 'Open options',
        close: 'Close options',
        tooltip: 'Toggle tooltip',
        pdf: 'Download PDF',
        csv: 'Download CSV',
        img: 'Download PNG',
        table: 'Toggle table',
        labels: 'Toggle labels',
        fullscreen: 'Toggle fullscreen',
      },
    },
    translations: {
      total: 'Total',
      average: 'Average',
    },
    table: {
      show: false,
      responsiveBreakpoint: 400,
      th: {
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        outline: 'none',
      },
      td: {
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        outline: 'none',
        roundingValue: 0,
        roundingPercentage: 0,
      },
      columnNames: {
        series: 'Series',
        value: 'Value',
        percentage: 'Percentage',
      },
    },
    style: {
      fontFamily: 'inherit',
      chart: {
        useGradient: false,
        gradientIntensity: 40,
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        layout: {
          labels: {
            dataLabels: {
              show: false,
              useLabelSlots: false,
              hideUnderValue: 3,
              prefix: '',
              suffix: '',
            },
            value: {
              rounding: 0,
              show: true,
              formatter: null,
            },
            percentage: {
              color: '#1A1A1A',
              bold: true,
              fontSize: 18,
              rounding: 0,
              formatter: null,
            },
            name: {
              color: '#1A1A1A',
              bold: false,
              fontSize: 14,
            },
            hollow: {
              show: true,
              total: {
                show: false,
                bold: false,
                fontSize: 18,
                color: '#AAAAAA',
                text: 'Total',
                offsetY: 0,
                value: {
                  color: '#1A1A1A',
                  fontSize: 18,
                  bold: true,
                  suffix: '',
                  prefix: '',
                  offsetY: 0,
                  rounding: 0,
                  formatter: null,
                },
              },
              average: {
                show: false,
                bold: false,
                fontSize: 18,
                color: '#AAAAAA',
                text: 'Average',
                offsetY: 0,
                value: {
                  color: '#1A1A1A',
                  fontSize: 18,
                  bold: true,
                  suffix: '',
                  prefix: '',
                  offsetY: 0,
                  rounding: 0,
                  formatter: null,
                },
              },
            },
          },
          donut: {
            strokeWidth: 64,
            borderWidth: 1,
            useShadow: false,
            shadowColor: '#1A1A1A',
          },
        },
        comments: {
          show: true,
          showInTooltip: true,
          width: 100,
          offsetY: 0,
          offsetX: 0,
        },
        legend: {
          show: false,
          bold: false,
          backgroundColor: '#FFFFFF',
          color: '#1A1A1A',
          fontSize: 16,
          roundingValue: 0,
          roundingPercentage: 0,
        },
        tooltip: {
          show: true,
          color: '#1A1A1A',
          backgroundColor: '#FFFFFF',
          fontSize: 14,
          customFormat: null,
          borderRadius: 4,
          borderColor: '#e1e5e8',
          borderWidth: 1,
          backgroundOpacity: 100,
          position: 'center',
          offsetY: 24,
          showValue: true,
          showPercentage: true,
          roundingValue: 0,
          roundingPercentage: 0,
        },
        title: {
          text: '',
          color: '#1A1A1A',
          fontSize: 6,
          bold: false,
          textAlign: 'center',
          paddingLeft: 0,
          paddingRight: 0,
          subtitle: {
            color: '#A1A1A1',
            text: '',
            fontSize: 16,
            bold: false,
          },
        },
      },
    },
  });

  const dataset = ref([
    {
      name: '项目一',
      values: [30],
      color: '#efa525',
    },
    {
      name: '项目二',
      values: [15],
      color: '#6376DD',
    },
    {
      name: '项目三',
      values: [40],
      color: '#d2415e',
    },
    {
      name: '项目四',
      values: [30],
      color: '#4bd241',
    },
  ]);
  const config1 = ref({
    responsive: false,
    theme: undefined,
    customPalette: [],
    useCssAnimation: true,
    useBlurOnHover: true,
    userOptions: {
      show: false,
      buttons: {
        tooltip: true,
        pdf: true,
        csv: true,
        img: true,
        table: true,
        labels: true,
        fullscreen: true,
        sort: false,
        stack: false,
        animation: false,
      },
      buttonTitles: {
        open: 'Open options',
        close: 'Close options',
        tooltip: 'Toggle tooltip',
        pdf: 'Download PDF',
        csv: 'Download CSV',
        img: 'Download PNG',
        table: 'Toggle table',
        labels: 'Toggle labels',
        fullscreen: 'Toggle fullscreen',
      },
    },
    translations: {
      total: 'Total',
      average: 'Average',
    },
    table: {
      show: false,
      responsiveBreakpoint: 400,
      th: {
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        outline: 'none',
      },
      td: {
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        outline: 'none',
        roundingValue: 0,
        roundingPercentage: 0,
      },
      columnNames: {
        series: 'Series',
        value: 'Value',
        percentage: 'Percentage',
      },
    },
    style: {
      fontFamily: 'inherit',
      chart: {
        useGradient: false,
        gradientIntensity: 40,
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        layout: {
          labels: {
            dataLabels: {
              show: false,
              useLabelSlots: false,
              hideUnderValue: 3,
              prefix: '',
              suffix: '',
            },
            value: {
              rounding: 0,
              show: true,
              formatter: null,
            },
            percentage: {
              color: '#1A1A1A',
              bold: true,
              fontSize: 18,
              rounding: 0,
              formatter: null,
            },
            name: {
              color: '#1A1A1A',
              bold: false,
              fontSize: 14,
            },
            hollow: {
              show: true,
              total: {
                show: false,
                bold: false,
                fontSize: 18,
                color: '#AAAAAA',
                text: 'Total',
                offsetY: 0,
                value: {
                  color: '#1A1A1A',
                  fontSize: 18,
                  bold: true,
                  suffix: '',
                  prefix: '',
                  offsetY: 0,
                  rounding: 0,
                  formatter: null,
                },
              },
              average: {
                show: false,
                bold: false,
                fontSize: 18,
                color: '#AAAAAA',
                text: 'Average',
                offsetY: 0,
                value: {
                  color: '#1A1A1A',
                  fontSize: 18,
                  bold: true,
                  suffix: '',
                  prefix: '',
                  offsetY: 0,
                  rounding: 0,
                  formatter: null,
                },
              },
            },
          },
          donut: {
            strokeWidth: 64,
            borderWidth: 1,
            useShadow: false,
            shadowColor: '#1A1A1A',
          },
        },
        comments: {
          show: true,
          showInTooltip: true,
          width: 100,
          offsetY: 0,
          offsetX: 0,
        },
        legend: {
          show: false,
          bold: false,
          backgroundColor: '#FFFFFF',
          color: '#1A1A1A',
          fontSize: 16,
          roundingValue: 0,
          roundingPercentage: 0,
        },
        tooltip: {
          show: true,
          color: '#1A1A1A',
          backgroundColor: '#FFFFFF',
          fontSize: 14,
          customFormat: null,
          borderRadius: 4,
          borderColor: '#e1e5e8',
          borderWidth: 1,
          backgroundOpacity: 100,
          position: 'center',
          offsetY: 24,
          showValue: true,
          showPercentage: true,
          roundingValue: 0,
          roundingPercentage: 0,
        },
        title: {
          text: '',
          color: '#1A1A1A',
          fontSize: 6,
          bold: false,
          textAlign: 'center',
          paddingLeft: 0,
          paddingRight: 0,
          subtitle: {
            color: '#A1A1A1',
            text: '',
            fontSize: 16,
            bold: false,
          },
        },
      },
    },
  });

  const dataset1 = ref([
    {
      name: '客户一',
      values: [20],
      color: '#00468b',
    },
    {
      name: '客户二',
      values: [30],
      color: '#127ce5',
    },
    {
      name: '客户三',
      values: [30],
      color: '#3997f4',
    },
    {
      name: '客户四',
      values: [15],
      color: '#76afe7',
    },
  ]);
  const config2 = ref({
    theme: undefined,
    responsive: false,
    customPalette: [],
    useCssAnimation: true,
    chart: {
      fontFamily: 'inherit',
      backgroundColor: '#FFFFFF',
      color: '#1A1A1A',
      height: 600,
      width: 1000,
      zoom: {
        show: false,
        color: '#CCCCCC',
        highlightColor: '#4A4A4A',
        fontSize: 14,
        useResetSlot: false,
        minimap: {
          show: false,
          smooth: false,
          selectedColor: '#1F77B4',
          selectedColorOpacity: 0.2,
          lineColor: '#1A1A1A',
          selectionRadius: 2,
          indicatorColor: '#1A1A1A',
        },
      },
      padding: {
        top: 36,
        right: 24,
        bottom: 48,
        left: 48,
      },
      highlighter: {
        color: '#1A1A1A',
        opacity: 5,
        useLine: false,
        lineDasharray: 2,
        lineWidth: 1,
      },
      highlightArea: {
        show: false,
        from: 0,
        to: 0,
        color: '#1A1A1A',
        opacity: 20,
        caption: {
          text: 'Caption',
          fontSize: 20,
          color: '#1A1A1A',
          bold: false,
          offsetY: 0,
          width: 'auto',
          padding: 3,
          textAlign: 'center',
        },
      },
      timeTag: {
        show: false,
        backgroundColor: '#e1e5e8',
        color: '#1A1A1A',
        fontSize: 12,
        circleMarker: {
          radius: 3,
          color: '#1A1A1A',
        },
      },
      grid: {
        stroke: '#e1e5e8',
        showVerticalLines: true,
        showHorizontalLines: false,
        position: 'middle',
        frame: {
          show: false,
          stroke: '#E1E5E8',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 0,
        },
        labels: {
          show: false,
          color: '#1A1A1A',
          fontSize: 12,
          axis: {
            yLabel: '',
            yLabelOffsetX: 0,
            xLabel: '',
            xLabelOffsetY: 14,
            fontSize: 12,
          },
          zeroLine: {
            show: true,
          },
          xAxis: {
            showBaseline: true,
          },
          yAxis: {
            showBaseline: true,
            commonScaleSteps: 10,
            useIndividualScale: false,
            stacked: false,
            gap: 12,
            labelWidth: 40,
            formatter: null,
            scaleMin: null,
            scaleMax: null,
          },
          xAxisLabels: {
            color: '#1A1A1A',
            show: true,
            values: [],
            fontSize: 18,
            showOnlyFirstAndLast: false,
            showOnlyAtModulo: false,
            modulo: 12,
            yOffset: 8,
            rotation: '4',
          },
        },
      },
      comments: {
        show: true,
        showInTooltip: true,
        width: 200,
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        fontSize: 10,
        prefix: '',
        suffix: '',
      },
      legend: {
        color: '#1A1A1A',
        show: false,
        fontSize: 16,
      },
      title: {
        text: 'Title',
        color: '#1A1A1A',
        fontSize: 20,
        bold: true,
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        subtitle: {
          color: '#CCCCCC',
          text: '',
          fontSize: 16,
          bold: false,
        },
        show: false,
      },
      tooltip: {
        show: false,
        color: '#1A1A1A',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        customFormat: null,
        borderRadius: 4,
        borderColor: '#e1e5e8',
        borderWidth: 1,
        backgroundOpacity: 100,
        position: 'center',
        offsetY: 24,
        showValue: false,
        showPercentage: false,
        roundingValue: 0,
        roundingPercentage: 0,
      },
      userOptions: {
        show: false,
        buttons: {
          tooltip: true,
          pdf: true,
          csv: true,
          img: true,
          table: true,
          labels: true,
          fullscreen: true,
          sort: false,
          stack: true,
          animation: false,
        },
        buttonTitles: {
          open: 'Open options',
          close: 'Close options',
          tooltip: 'Toggle tooltip',
          pdf: 'Download PDF',
          csv: 'Download CSV',
          img: 'Download PNG',
          table: 'Toggle table',
          labels: 'Toggle labels',
          fullscreen: 'Toggle fullscreen',
          stack: 'Toggle stack mode',
        },
      },
    },
    bar: {
      borderRadius: 2,
      useGradient: false,
      periodGap: 0.1,
      border: {
        useSerieColor: false,
        strokeWidth: 1,
        stroke: '#FFFFFF',
      },
      labels: {
        show: false,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
      serieName: {
        show: false,
        offsetY: -6,
        useAbbreviation: false,
        abbreviationSize: 3,
        useSerieColor: false,
        color: '#1A1A1A',
        bold: false,
      },
    },
    line: {
      radius: 6,
      useGradient: false,
      strokeWidth: 2,
      labels: {
        show: false,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
      area: {
        useGradient: false,
        opacity: 20,
      },
    },
    plot: {
      radius: 6,
      useGradient: false,
      labels: {
        show: false,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
    },
    table: {
      responsiveBreakpoint: 400,
      rounding: 0,
      sparkline: true,
      columnNames: {
        period: 'Period',
        total: 'Total',
      },
      th: {
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        outline: '',
      },
      td: {
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        outline: '',
      },
    },
    showTable: false,
  });

  const dataset2 = ref([
    {
      name: 'name',
      series: [1, 3, 4, 16, 25, 20, 16, 16, 16, 4],
      color: '#6376DD',
      type: 'line',
      shape: 'circle',
      useArea: true,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
    {
      name: 'name',
      series: [0, 1, 1, 2, 10, 5, 4, 1, 4, 1],
      color: '#42d392',
      type: 'line',
      shape: 'circle',
      useArea: true,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
    {
      name: 'name',
      series: [0, 0, 0, 1, 2, 1, 2, 1, 2, 1],
      color: '#afa7a7',
      type: 'line',
      shape: 'circle',
      useArea: true,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
    {
      name: 'name',
      series: [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
      color: '#ffb61a',
      type: 'line',
      shape: 'circle',
      useArea: true,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
  ]);
  const config3 = ref({
    theme: undefined,
    responsive: false,
    customPalette: [],
    useCssAnimation: true,
    chart: {
      fontFamily: 'inherit',
      backgroundColor: '#FFFFFF',
      color: '#1A1A1A',
      height: 600,
      width: 1000,
      zoom: {
        show: false,
        color: '#CCCCCC',
        highlightColor: '#4A4A4A',
        fontSize: 14,
        useResetSlot: false,
        minimap: {
          show: false,
          smooth: false,
          selectedColor: '#1F77B4',
          selectedColorOpacity: 0.2,
          lineColor: '#1A1A1A',
          selectionRadius: 2,
          indicatorColor: '#1A1A1A',
        },
      },
      padding: {
        top: 36,
        right: 24,
        bottom: 48,
        left: 48,
      },
      highlighter: {
        color: '#1A1A1A',
        opacity: 5,
        useLine: false,
        lineDasharray: 2,
        lineWidth: 1,
      },
      highlightArea: {
        show: false,
        from: 0,
        to: 0,
        color: '#1A1A1A',
        opacity: 20,
        caption: {
          text: 'Caption',
          fontSize: 20,
          color: '#1A1A1A',
          bold: false,
          offsetY: 0,
          width: 'auto',
          padding: 3,
          textAlign: 'center',
        },
      },
      timeTag: {
        show: false,
        backgroundColor: '#e1e5e8',
        color: '#1A1A1A',
        fontSize: 12,
        circleMarker: {
          radius: 3,
          color: '#1A1A1A',
        },
      },
      grid: {
        stroke: '#e1e5e8',
        showVerticalLines: true,
        showHorizontalLines: false,
        position: 'middle',
        frame: {
          show: false,
          stroke: '#E1E5E8',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 1,
        },
        labels: {
          show: false,
          color: '#1A1A1A',
          fontSize: 12,
          axis: {
            yLabel: '',
            yLabelOffsetX: 0,
            xLabel: '',
            xLabelOffsetY: 14,
            fontSize: 12,
          },
          zeroLine: {
            show: true,
          },
          xAxis: {
            showBaseline: true,
          },
          yAxis: {
            showBaseline: true,
            commonScaleSteps: 10,
            useIndividualScale: false,
            stacked: false,
            gap: 12,
            labelWidth: 40,
            formatter: null,
            scaleMin: null,
            scaleMax: null,
          },
          xAxisLabels: {
            color: '#1A1A1A',
            show: false,
            values: [null, null, null, ''],
            fontSize: 18,
            showOnlyFirstAndLast: false,
            showOnlyAtModulo: false,
            modulo: 12,
            yOffset: 8,
            rotation: '4',
          },
        },
      },
      comments: {
        show: true,
        showInTooltip: true,
        width: 200,
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        fontSize: 10,
        prefix: '',
        suffix: '',
      },
      legend: {
        color: '#1A1A1A',
        show: false,
        fontSize: 16,
      },
      title: {
        text: 'Title',
        color: '#1A1A1A',
        fontSize: 20,
        bold: true,
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        subtitle: {
          color: '#CCCCCC',
          text: '',
          fontSize: 16,
          bold: false,
        },
        show: false,
      },
      tooltip: {
        show: false,
        color: '#1A1A1A',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        customFormat: null,
        borderRadius: 4,
        borderColor: '#e1e5e8',
        borderWidth: 1,
        backgroundOpacity: 100,
        position: 'center',
        offsetY: 24,
        showValue: false,
        showPercentage: false,
        roundingValue: 0,
        roundingPercentage: 0,
      },
      userOptions: {
        show: false,
        buttons: {
          tooltip: true,
          pdf: true,
          csv: true,
          img: true,
          table: true,
          labels: true,
          fullscreen: true,
          sort: false,
          stack: true,
          animation: false,
        },
        buttonTitles: {
          open: 'Open options',
          close: 'Close options',
          tooltip: 'Toggle tooltip',
          pdf: 'Download PDF',
          csv: 'Download CSV',
          img: 'Download PNG',
          table: 'Toggle table',
          labels: 'Toggle labels',
          fullscreen: 'Toggle fullscreen',
          stack: 'Toggle stack mode',
        },
      },
    },
    bar: {
      borderRadius: 2,
      useGradient: false,
      periodGap: 0.1,
      border: {
        useSerieColor: false,
        strokeWidth: 1,
        stroke: '#FFFFFF',
      },
      labels: {
        show: false,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
      serieName: {
        show: false,
        offsetY: -6,
        useAbbreviation: false,
        abbreviationSize: 3,
        useSerieColor: false,
        color: '#1A1A1A',
        bold: false,
      },
    },
    line: {
      radius: 6,
      useGradient: false,
      strokeWidth: 2,
      labels: {
        show: false,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
      area: {
        useGradient: false,
        opacity: 20,
      },
    },
    plot: {
      radius: 6,
      useGradient: false,
      labels: {
        show: false,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
    },
    table: {
      responsiveBreakpoint: 400,
      rounding: 0,
      sparkline: true,
      columnNames: {
        period: 'Period',
        total: 'Total',
      },
      th: {
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        outline: '',
      },
      td: {
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        outline: '',
      },
    },
    showTable: false,
  });

  const dataset3 = ref([
    {
      name: 'name',
      series: [9, 13, 15, 35, 12, 9],
      color: '#6376DD',
      type: 'bar',
      shape: 'circle',
      useArea: true,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
  ]);
  const config4 = ref({
    responsive: false,
    theme: '',
    customPalette: [],
    useCssAnimation: true,
    useBlurOnHover: true,
    userOptions: {
      show: false,
      buttons: {
        tooltip: true,
        pdf: true,
        csv: true,
        img: true,
        table: true,
        labels: true,
        fullscreen: true,
        sort: false,
        stack: false,
        animation: false,
      },
      buttonTitles: {
        open: 'Open options',
        close: 'Close options',
        tooltip: 'Toggle tooltip',
        pdf: 'Download PDF',
        csv: 'Download CSV',
        img: 'Download PNG',
        table: 'Toggle table',
        labels: 'Toggle labels',
        fullscreen: 'Toggle fullscreen',
      },
    },
    translations: {
      total: 'Total',
      average: 'Average',
    },
    table: {
      show: false,
      responsiveBreakpoint: 400,
      th: {
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        outline: 'none',
      },
      td: {
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        outline: 'none',
        roundingValue: 0,
        roundingPercentage: 0,
      },
      columnNames: {
        series: 'Series',
        value: 'Value',
        percentage: 'Percentage',
      },
    },
    style: {
      fontFamily: 'inherit',
      chart: {
        useGradient: false,
        gradientIntensity: '41',
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        layout: {
          labels: {
            dataLabels: {
              show: false,
              useLabelSlots: false,
              hideUnderValue: 3,
              prefix: '',
              suffix: '',
            },
            value: {
              rounding: 0,
              show: true,
              formatter: null,
            },
            percentage: {
              color: '#1A1A1A',
              bold: true,
              fontSize: 18,
              rounding: 0,
              formatter: null,
            },
            name: {
              color: '#1A1A1A',
              bold: false,
              fontSize: 14,
            },
            hollow: {
              show: true,
              total: {
                show: false,
                bold: false,
                fontSize: 18,
                color: '#AAAAAA',
                text: 'Total',
                offsetY: 0,
                value: {
                  color: '#1A1A1A',
                  fontSize: 18,
                  bold: true,
                  suffix: '',
                  prefix: '',
                  offsetY: 0,
                  rounding: 0,
                  formatter: null,
                },
              },
              average: {
                show: false,
                bold: false,
                fontSize: 18,
                color: '#AAAAAA',
                text: 'Average',
                offsetY: 0,
                value: {
                  color: '#1A1A1A',
                  fontSize: 18,
                  bold: true,
                  suffix: '',
                  prefix: '',
                  offsetY: 0,
                  rounding: 0,
                  formatter: null,
                },
              },
            },
          },
          donut: {
            strokeWidth: '120',
            borderWidth: '13',
            useShadow: false,
            shadowColor: '#1A1A1A',
          },
        },
        comments: {
          show: true,
          showInTooltip: true,
          width: 100,
          offsetY: 0,
          offsetX: 0,
        },
        legend: {
          show: false,
          bold: false,
          backgroundColor: '#FFFFFF',
          color: '#1A1A1A',
          fontSize: 16,
          roundingValue: 0,
          roundingPercentage: 0,
        },
        tooltip: {
          show: true,
          color: '#1A1A1A',
          backgroundColor: '#FFFFFF',
          fontSize: 14,
          customFormat: null,
          borderRadius: 4,
          borderColor: '#e1e5e8',
          borderWidth: 1,
          backgroundOpacity: '100',
          position: 'center',
          offsetY: 24,
          showValue: true,
          showPercentage: true,
          roundingValue: 0,
          roundingPercentage: 0,
        },
        title: {
          text: '',
          color: '#1A1A1A',
          fontSize: 6,
          bold: false,
          textAlign: 'center',
          paddingLeft: 0,
          paddingRight: 0,
          subtitle: {
            color: '#A1A1A1',
            text: '',
            fontSize: 16,
            bold: false,
          },
        },
      },
    },
  });

  const dataset4 = ref([
    {
      name: '项目1',
      values: [30],
      color: '#204dd5',
    },
    {
      name: '项目2',
      values: [30],
      color: '#42d392',
    },
    {
      name: '项目3',
      values: [20],
      color: '#4f635a',
    },
    {
      name: '项目4',
      values: [15],
      color: '#f2eb1c',
    },
    {
      name: '项目5',
      values: [10],
      color: '#040e95',
    },
  ]);
  const config5 = ref({
    responsive: false,
    theme: '',
    customPalette: [],
    useCssAnimation: true,
    useBlurOnHover: true,
    userOptions: {
      show: false,
      buttons: {
        tooltip: true,
        pdf: true,
        csv: true,
        img: true,
        table: true,
        labels: true,
        fullscreen: true,
        sort: false,
        stack: false,
        animation: false,
      },
      buttonTitles: {
        open: 'Open options',
        close: 'Close options',
        tooltip: 'Toggle tooltip',
        pdf: 'Download PDF',
        csv: 'Download CSV',
        img: 'Download PNG',
        table: 'Toggle table',
        labels: 'Toggle labels',
        fullscreen: 'Toggle fullscreen',
      },
    },
    translations: {
      total: 'Total',
      average: 'Average',
    },
    table: {
      show: false,
      responsiveBreakpoint: 400,
      th: {
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        outline: 'none',
      },
      td: {
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        outline: 'none',
        roundingValue: 0,
        roundingPercentage: 0,
      },
      columnNames: {
        series: '',
        value: '',
        percentage: 'Percentage',
      },
    },
    style: {
      fontFamily: 'inherit',
      chart: {
        useGradient: false,
        gradientIntensity: '41',
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        layout: {
          labels: {
            dataLabels: {
              show: true,
              useLabelSlots: false,
              hideUnderValue: 0,
              prefix: '',
              suffix: '',
            },
            value: {
              rounding: 0,
              show: true,
              formatter: null,
            },
            percentage: {
              color: '#000000',
              bold: true,
              fontSize: 16,
              rounding: 0,
              formatter: null,
            },
            name: {
              color: '#1A1A1A',
              bold: true,
              fontSize: 0,
            },
            hollow: {
              show: false,
              total: {
                show: false,
                bold: false,
                fontSize: 18,
                color: '#AAAAAA',
                text: 'Total',
                offsetY: 0,
                value: {
                  color: '#1A1A1A',
                  fontSize: 18,
                  bold: false,
                  suffix: '',
                  prefix: '',
                  offsetY: 0,
                  rounding: 0,
                  formatter: null,
                },
              },
              average: {
                show: false,
                bold: false,
                fontSize: 18,
                color: '#AAAAAA',
                text: 'Average',
                offsetY: 0,
                value: {
                  color: '#1A1A1A',
                  fontSize: 18,
                  bold: false,
                  suffix: '',
                  prefix: '',
                  offsetY: 0,
                  rounding: 0,
                  formatter: null,
                },
              },
            },
          },
          donut: {
            strokeWidth: '119',
            borderWidth: '0',
            useShadow: false,
            shadowColor: '#1A1A1A',
          },
        },
        comments: {
          show: true,
          showInTooltip: true,
          width: 100,
          offsetY: 0,
          offsetX: 0,
        },
        legend: {
          show: false,
          bold: false,
          backgroundColor: '#FFFFFF',
          color: '#1A1A1A',
          fontSize: 8,
          roundingValue: 0,
          roundingPercentage: 0,
        },
        tooltip: {
          show: true,
          color: '#1A1A1A',
          backgroundColor: '#FFFFFF',
          fontSize: 14,
          customFormat: null,
          borderRadius: 4,
          borderColor: '#e1e5e8',
          borderWidth: 1,
          backgroundOpacity: '100',
          position: 'center',
          offsetY: 24,
          showValue: true,
          showPercentage: true,
          roundingValue: 0,
          roundingPercentage: 0,
        },
        title: {
          text: '',
          color: '#1A1A1A',
          fontSize: 16,
          bold: false,
          textAlign: 'left',
          paddingLeft: 10,
          paddingRight: 0,
          subtitle: {
            color: '#A1A1A1',
            text: '',
            fontSize: 16,
            bold: false,
          },
        },
      },
    },
  });

  const dataset5 = ref([
    {
      name: '项目1',
      values: [100000],
      color: '#204dd5',
    },
    {
      name: '项目2',
      values: [150000],
      color: '#e00b0b',
    },
    {
      name: '项目3',
      values: [200000],
      color: '#f9745d',
    },
    {
      name: '项目4',
      values: [25000],
      color: '#f2eb1c',
    },
    {
      name: '项目5',
      values: [30000],
      color: '#99f3ff',
    },
  ]);
  const dataset6 = ref([
    {
      name: '项目1',
      values: [10],
      color: '#204dd5',
    },
    {
      name: '项目2',
      values: [15],
      color: '#21c3e4',
    },
    {
      name: '项目3',
      values: [20],
      color: '#1ee6b4',
    },
    {
      name: '项目4',
      values: [25],
      color: '#0ed851',
    },
    {
      name: '项目5',
      values: [30],
      color: '#11c52f',
    },
  ]);
  const config7 = ref({
    theme: '',
    responsive: false,
    customPalette: [],
    useCssAnimation: true,
    chart: {
      fontFamily: 'inherit',
      backgroundColor: '#FFFFFF',
      color: '#1A1A1A',
      height: '450',
      width: '2400',
      zoom: {
        show: false,
        color: '#CCCCCC',
        highlightColor: '#4A4A4A',
        fontSize: 14,
        useResetSlot: false,
        minimap: {
          show: true,
          smooth: false,
          selectedColor: '#1F77B4',
          selectedColorOpacity: 0.2,
          lineColor: '#1A1A1A',
          selectionRadius: 2,
          indicatorColor: '#1A1A1A',
        },
      },
      padding: {
        top: 36,
        right: 24,
        bottom: 48,
        left: 48,
      },
      highlighter: {
        color: '#1A1A1A',
        opacity: 5,
        useLine: false,
        lineDasharray: 2,
        lineWidth: 1,
      },
      highlightArea: {
        show: false,
        from: 0,
        to: 0,
        color: '#1A1A1A',
        opacity: 20,
        caption: {
          text: 'Caption',
          fontSize: 20,
          color: '#1A1A1A',
          bold: false,
          offsetY: 0,
          width: 'auto',
          padding: 3,
          textAlign: 'center',
        },
      },
      timeTag: {
        show: false,
        backgroundColor: '#e1e5e8',
        color: '#1A1A1A',
        fontSize: 12,
        circleMarker: {
          radius: 3,
          color: '#1A1A1A',
        },
      },
      grid: {
        stroke: '#e1e5e8',
        showVerticalLines: true,
        showHorizontalLines: false,
        position: 'middle',
        frame: {
          show: false,
          stroke: '#E1E5E8',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 0,
        },
        labels: {
          show: true,
          color: '#1A1A1A',
          fontSize: 10,
          axis: {
            yLabel: '',
            yLabelOffsetX: 0,
            xLabel: '',
            xLabelOffsetY: 14,
            fontSize: 12,
          },
          zeroLine: {
            show: true,
          },
          xAxis: {
            showBaseline: true,
          },
          yAxis: {
            showBaseline: true,
            commonScaleSteps: 10,
            useIndividualScale: false,
            stacked: false,
            gap: 12,
            labelWidth: 40,
            formatter: null,
            scaleMin: null,
            scaleMax: null,
          },
          xAxisLabels: {
            color: '#1A1A1A',
            show: true,
            values: [
              '项目1',
              '项目2',
              '项目3',
              '项目4',
              '项目5',
              '项目6',
              '项目7',
              '项目8',
              '项目9',
              '项目10',
              '项目11',
              '项目12',
              '项目13',
              '项目14',
              '项目15',
              '项目16',
              '项目17',
              '项目18',
              '项目19',
            ],
            fontSize: 18,
            showOnlyFirstAndLast: false,
            showOnlyAtModulo: false,
            modulo: 12,
            yOffset: 8,
            rotation: 0,
          },
        },
      },
      comments: {
        show: true,
        showInTooltip: true,
        width: 200,
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        fontSize: 10,
        prefix: '',
        suffix: '',
      },
      legend: {
        color: '#1A1A1A',
        show: false,
        fontSize: 16,
      },
      title: {
        text: 'Title',
        color: '#1A1A1A',
        fontSize: 20,
        bold: true,
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        subtitle: {
          color: '#CCCCCC',
          text: '',
          fontSize: 16,
          bold: false,
        },
        show: false,
      },
      tooltip: {
        show: true,
        color: '#1A1A1A',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        customFormat: null,
        borderRadius: 4,
        borderColor: '#e1e5e8',
        borderWidth: 1,
        backgroundOpacity: 100,
        position: 'center',
        offsetY: 24,
        showValue: true,
        showPercentage: false,
        roundingValue: 0,
        roundingPercentage: 0,
      },
      userOptions: {
        show: false,
        buttons: {
          tooltip: true,
          pdf: true,
          csv: true,
          img: true,
          table: true,
          labels: true,
          fullscreen: true,
          sort: false,
          stack: true,
          animation: false,
        },
        buttonTitles: {
          open: 'Open options',
          close: 'Close options',
          tooltip: 'Toggle tooltip',
          pdf: 'Download PDF',
          csv: 'Download CSV',
          img: 'Download PNG',
          table: 'Toggle table',
          labels: 'Toggle labels',
          fullscreen: 'Toggle fullscreen',
          stack: 'Toggle stack mode',
        },
      },
    },
    bar: {
      borderRadius: 2,
      useGradient: true,
      periodGap: 0.1,
      border: {
        useSerieColor: false,
        strokeWidth: 1,
        stroke: '#FFFFFF',
      },
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
        fontSize: 18,
      },
      serieName: {
        show: false,
        offsetY: -6,
        useAbbreviation: true,
        abbreviationSize: 3,
        useSerieColor: true,
        color: '#1A1A1A',
        bold: false,
      },
    },
    line: {
      radius: 6,
      useGradient: true,
      strokeWidth: 2,
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
      area: {
        useGradient: true,
        opacity: 20,
      },
    },
    plot: {
      radius: 6,
      useGradient: true,
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
    },
    table: {
      responsiveBreakpoint: 400,
      rounding: 0,
      sparkline: true,
      columnNames: {
        period: 'Period',
        total: 'Total',
      },
      th: {
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        outline: '',
      },
      td: {
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        outline: '',
      },
    },
    showTable: false,
  });

  const dataset7 = ref([
    {
      name: 'name',
      series: [
        200000, 150000, 50000, 175000, 100000, 210000, 220000, 210000, 180000, 145000, 270000,
        270000, 270000, 270000, 270000, 270000, 270000, 270000, 270000,
      ],
      color: '#f40101',
      type: 'bar',
      shape: 'circle',
      useArea: true,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
  ]);
  const dataset8 = ref([
    {
      name: '项目1',
      values: [3.5],
      color: '#1447e1',
    },
    {
      name: '项目2',
      values: [5],
      color: '#21c3e4',
    },
    {
      name: '项目3',
      values: [3],
      color: '#ffdf0f',
    },
    {
      name: '项目4',
      values: [4.5],
      color: '#f31212',
    },
    {
      name: '项目5',
      values: [6],
      color: '#ff8080',
    },
  ]);
  const config9 = ref({
    theme: '',
    responsive: false,
    customPalette: [],
    useCssAnimation: true,
    chart: {
      fontFamily: 'inherit',
      backgroundColor: '#FFFFFF',
      color: '#1A1A1A',
      height: 400,
      width: '2000',
      zoom: {
        show: false,
        color: '#CCCCCC',
        highlightColor: '#4A4A4A',
        fontSize: 12,
        useResetSlot: false,
        minimap: {
          show: true,
          smooth: false,
          selectedColor: '#1F77B4',
          selectedColorOpacity: 0.2,
          lineColor: '#1A1A1A',
          selectionRadius: 2,
          indicatorColor: '#1A1A1A',
        },
      },
      padding: {
        top: 36,
        right: 24,
        bottom: 48,
        left: 48,
      },
      highlighter: {
        color: '#1A1A1A',
        opacity: 5,
        useLine: false,
        lineDasharray: 2,
        lineWidth: 1,
      },
      highlightArea: {
        show: false,
        from: 0,
        to: 0,
        color: '#1A1A1A',
        opacity: 20,
        caption: {
          text: 'Caption',
          fontSize: 16,
          color: '#1A1A1A',
          bold: false,
          offsetY: 0,
          width: 'auto',
          padding: 3,
          textAlign: 'center',
        },
      },
      timeTag: {
        show: false,
        backgroundColor: '#e1e5e8',
        color: '#1A1A1A',
        fontSize: 12,
        circleMarker: {
          radius: 3,
          color: '#1A1A1A',
        },
      },
      grid: {
        stroke: '#e1e5e8',
        showVerticalLines: true,
        showHorizontalLines: false,
        position: 'middle',
        frame: {
          show: false,
          stroke: '#E1E5E8',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 0,
        },
        labels: {
          show: true,
          color: '#1A1A1A',
          fontSize: 20,
          axis: {
            yLabel: '',
            yLabelOffsetX: 0,
            xLabel: '',
            xLabelOffsetY: 14,
            fontSize: 16,
          },
          zeroLine: {
            show: true,
          },
          xAxis: {
            showBaseline: true,
          },
          yAxis: {
            showBaseline: true,
            commonScaleSteps: 10,
            useIndividualScale: false,
            stacked: false,
            gap: 12,
            labelWidth: 40,
            formatter: null,
            scaleMin: null,
            scaleMax: null,
          },
          xAxisLabels: {
            color: '#1A1A1A',
            show: true,
            values: [
              '2023.03.01',
              '2023.03.02',
              '2023.03.03',
              '2023.03.04',
              '2023.03.05',
              '2023.03.06',
              '2023.03.07',
              '2023.03.08',
              '2023.03.09',
              '2023.03.10',
            ],
            fontSize: 18,
            showOnlyFirstAndLast: false,
            showOnlyAtModulo: false,
            modulo: 12,
            yOffset: 8,
            rotation: 0,
          },
        },
      },
      comments: {
        show: true,
        showInTooltip: true,
        width: 200,
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        fontSize: 11,
        prefix: '',
        suffix: '',
      },
      legend: {
        color: '#1A1A1A',
        show: true,
        fontSize: 10,
      },
      title: {
        text: 'Title',
        color: '#1A1A1A',
        fontSize: 16,
        bold: true,
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        subtitle: {
          color: '#CCCCCC',
          text: '',
          fontSize: 14,
          bold: false,
        },
        show: false,
      },
      tooltip: {
        show: true,
        color: '#1A1A1A',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        customFormat: null,
        borderRadius: 4,
        borderColor: '#e1e5e8',
        borderWidth: 1,
        backgroundOpacity: 100,
        position: 'center',
        offsetY: 24,
        showValue: true,
        showPercentage: false,
        roundingValue: 0,
        roundingPercentage: 0,
      },
      userOptions: {
        show: false,
        buttons: {
          tooltip: true,
          pdf: true,
          csv: true,
          img: true,
          table: true,
          labels: true,
          fullscreen: true,
          sort: false,
          stack: true,
          animation: false,
        },
        buttonTitles: {
          open: 'Open options',
          close: 'Close options',
          tooltip: 'Toggle tooltip',
          pdf: 'Download PDF',
          csv: 'Download CSV',
          img: 'Download PNG',
          table: 'Toggle table',
          labels: 'Toggle labels',
          fullscreen: 'Toggle fullscreen',
          stack: 'Toggle stack mode',
        },
      },
    },
    bar: {
      borderRadius: 2,
      useGradient: true,
      periodGap: 0.1,
      border: {
        useSerieColor: false,
        strokeWidth: 1,
        stroke: '#FFFFFF',
      },
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
      serieName: {
        show: false,
        offsetY: -6,
        useAbbreviation: true,
        abbreviationSize: 3,
        useSerieColor: true,
        color: '#1A1A1A',
        bold: false,
      },
    },
    line: {
      radius: 6,
      useGradient: true,
      strokeWidth: 2,
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
      area: {
        useGradient: true,
        opacity: 20,
      },
    },
    plot: {
      radius: 6,
      useGradient: true,
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
    },
    table: {
      responsiveBreakpoint: 400,
      rounding: 0,
      sparkline: true,
      columnNames: {
        period: 'Period',
        total: 'Total',
      },
      th: {
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        outline: '',
      },
      td: {
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        outline: '',
      },
    },
    showTable: false,
  });

  const dataset9 = ref([
    {
      name: '续签',
      series: [5, 5, 5, 10, 20, 30, 30, 30, 30, 40],
      color: '#ff881a',
      type: 'line',
      shape: 'circle',
      useArea: false,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
    {
      name: '新签',
      series: [10, 20, 30, 40, 50, 60, 60, 60, 60, 60],
      color: '#057eff',
      type: 'line',
      shape: 'circle',
      useArea: false,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
    {
      name: '退租',
      series: [20, 25, 50, 45, 30, 100, 100, 100, 100, 100],
      color: '#42d392',
      type: 'line',
      shape: 'circle',
      useArea: false,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
  ]);
  const dataset10 = ref([
    {
      name: 'name',
      series: [
        200000, 150000, 50000, 175000, 100000, 210000, 220000, 210000, 180000, 145000, 270000,
        270000, 270000, 270000, 270000, 270000, 270000, 270000, 270000,
      ],
      color: '#00FFB3',
      type: 'bar',
      shape: 'circle',
      useArea: true,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
  ]);
  const config11 = ref({
    theme: '',
    responsive: false,
    customPalette: [],
    useCssAnimation: true,
    chart: {
      fontFamily: 'inherit',
      backgroundColor: '#FFFFFF',
      color: '#1A1A1A',
      height: '400',
      width: '1200',
      zoom: {
        show: false,
        color: '#CCCCCC',
        highlightColor: '#4A4A4A',
        fontSize: 12,
        useResetSlot: false,
        minimap: {
          show: true,
          smooth: false,
          selectedColor: '#1F77B4',
          selectedColorOpacity: 0.2,
          lineColor: '#1A1A1A',
          selectionRadius: 2,
          indicatorColor: '#1A1A1A',
        },
      },
      padding: {
        top: 36,
        right: 24,
        bottom: 48,
        left: 48,
      },
      highlighter: {
        color: '#1A1A1A',
        opacity: 5,
        useLine: false,
        lineDasharray: 2,
        lineWidth: 1,
      },
      highlightArea: {
        show: false,
        from: 0,
        to: 0,
        color: '#1A1A1A',
        opacity: 20,
        caption: {
          text: 'Caption',
          fontSize: 16,
          color: '#1A1A1A',
          bold: false,
          offsetY: 0,
          width: 'auto',
          padding: 3,
          textAlign: 'center',
        },
      },
      timeTag: {
        show: false,
        backgroundColor: '#e1e5e8',
        color: '#1A1A1A',
        fontSize: 12,
        circleMarker: {
          radius: 3,
          color: '#1A1A1A',
        },
      },
      grid: {
        stroke: '#e1e5e8',
        showVerticalLines: true,
        showHorizontalLines: false,
        position: 'middle',
        frame: {
          show: false,
          stroke: '#E1E5E8',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 0,
        },
        labels: {
          show: true,
          color: '#1A1A1A',
          fontSize: 20,
          axis: {
            yLabel: '',
            yLabelOffsetX: 0,
            xLabel: '',
            xLabelOffsetY: 14,
            fontSize: 16,
          },
          zeroLine: {
            show: true,
          },
          xAxis: {
            showBaseline: true,
          },
          yAxis: {
            showBaseline: true,
            commonScaleSteps: 10,
            useIndividualScale: false,
            stacked: false,
            gap: 12,
            labelWidth: 40,
            formatter: null,
            scaleMin: null,
            scaleMax: null,
          },
          xAxisLabels: {
            color: '#1A1A1A',
            show: true,
            values: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月',
            ],
            fontSize: 18,
            showOnlyFirstAndLast: false,
            showOnlyAtModulo: false,
            modulo: 12,
            yOffset: 8,
            rotation: 0,
          },
        },
      },
      comments: {
        show: true,
        showInTooltip: true,
        width: 200,
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        fontSize: 11,
        prefix: '',
        suffix: '',
      },
      legend: {
        color: '#1A1A1A',
        show: true,
        fontSize: 10,
      },
      title: {
        text: 'Title',
        color: '#1A1A1A',
        fontSize: 16,
        bold: true,
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        subtitle: {
          color: '#CCCCCC',
          text: '',
          fontSize: 14,
          bold: false,
        },
        show: false,
      },
      tooltip: {
        show: true,
        color: '#1A1A1A',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        customFormat: null,
        borderRadius: 4,
        borderColor: '#e1e5e8',
        borderWidth: 1,
        backgroundOpacity: 100,
        position: 'center',
        offsetY: 24,
        showValue: true,
        showPercentage: false,
        roundingValue: 0,
        roundingPercentage: 0,
      },
      userOptions: {
        show: false,
        buttons: {
          tooltip: true,
          pdf: true,
          csv: true,
          img: true,
          table: true,
          labels: true,
          fullscreen: true,
          sort: false,
          stack: true,
          animation: false,
        },
        buttonTitles: {
          open: 'Open options',
          close: 'Close options',
          tooltip: 'Toggle tooltip',
          pdf: 'Download PDF',
          csv: 'Download CSV',
          img: 'Download PNG',
          table: 'Toggle table',
          labels: 'Toggle labels',
          fullscreen: 'Toggle fullscreen',
          stack: 'Toggle stack mode',
        },
      },
    },
    bar: {
      borderRadius: 2,
      useGradient: true,
      periodGap: 0.1,
      border: {
        useSerieColor: false,
        strokeWidth: 1,
        stroke: '#FFFFFF',
      },
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
      serieName: {
        show: false,
        offsetY: -6,
        useAbbreviation: true,
        abbreviationSize: 3,
        useSerieColor: true,
        color: '#1A1A1A',
        bold: false,
      },
    },
    line: {
      radius: 6,
      useGradient: true,
      strokeWidth: 2,
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
      area: {
        useGradient: true,
        opacity: 20,
      },
    },
    plot: {
      radius: 6,
      useGradient: true,
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
    },
    table: {
      responsiveBreakpoint: 400,
      rounding: 0,
      sparkline: true,
      columnNames: {
        period: 'Period',
        total: 'Total',
      },
      th: {
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        outline: '',
      },
      td: {
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        outline: '',
      },
    },
    showTable: false,
  });

  const dataset11 = ref([
    {
      name: '客户人数',
      series: [10, 15, 5, 20, 40, 25, 31, 11, 18, 40, 38, 40],
      color: '#0091ff',
      type: 'line',
      shape: 'circle',
      useArea: false,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
  ]);
  const config12 = ref({
    theme: '',
    responsive: false,
    customPalette: [],
    useCssAnimation: true,
    chart: {
      fontFamily: 'inherit',
      backgroundColor: '#FFFFFF',
      color: '#1A1A1A',
      height: '400',
      width: '1103',
      zoom: {
        show: false,
        color: '#CCCCCC',
        highlightColor: '#4A4A4A',
        fontSize: 12,
        useResetSlot: false,
        minimap: {
          show: true,
          smooth: false,
          selectedColor: '#1F77B4',
          selectedColorOpacity: 0.2,
          lineColor: '#1A1A1A',
          selectionRadius: 2,
          indicatorColor: '#1A1A1A',
        },
      },
      padding: {
        top: 36,
        right: 24,
        bottom: 48,
        left: 48,
      },
      highlighter: {
        color: '#1A1A1A',
        opacity: 5,
        useLine: false,
        lineDasharray: 2,
        lineWidth: 1,
      },
      highlightArea: {
        show: false,
        from: 0,
        to: 0,
        color: '#1A1A1A',
        opacity: 20,
        caption: {
          text: 'Caption',
          fontSize: 16,
          color: '#1A1A1A',
          bold: false,
          offsetY: 0,
          width: 'auto',
          padding: 3,
          textAlign: 'center',
        },
      },
      timeTag: {
        show: false,
        backgroundColor: '#e1e5e8',
        color: '#1A1A1A',
        fontSize: 12,
        circleMarker: {
          radius: 3,
          color: '#1A1A1A',
        },
      },
      grid: {
        stroke: '#e1e5e8',
        showVerticalLines: false,
        showHorizontalLines: false,
        position: 'middle',
        frame: {
          show: false,
          stroke: '#E1E5E8',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 0,
        },
        labels: {
          show: true,
          color: '#1A1A1A',
          fontSize: 20,
          axis: {
            yLabel: '',
            yLabelOffsetX: 0,
            xLabel: '',
            xLabelOffsetY: 14,
            fontSize: 16,
          },
          zeroLine: {
            show: true,
          },
          xAxis: {
            showBaseline: true,
          },
          yAxis: {
            showBaseline: true,
            commonScaleSteps: 10,
            useIndividualScale: false,
            stacked: false,
            gap: 12,
            labelWidth: 40,
            formatter: null,
            scaleMin: null,
            scaleMax: null,
          },
          xAxisLabels: {
            color: '#1A1A1A',
            show: true,
            values: [
              '项目1',
              '项目2',
              '项目3',
              '项目4',
              '项目5',
              '项目6',
              '项目7',
              '项目8',
              '项目9',
              '10月',
              '11月',
              '12月',
            ],
            fontSize: 18,
            showOnlyFirstAndLast: false,
            showOnlyAtModulo: false,
            modulo: 12,
            yOffset: 8,
            rotation: 0,
          },
        },
      },
      comments: {
        show: true,
        showInTooltip: true,
        width: 200,
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        fontSize: 10,
        prefix: '',
        suffix: '',
      },
      legend: {
        color: '#1A1A1A',
        show: true,
        fontSize: 10,
      },
      title: {
        text: 'Title',
        color: '#1A1A1A',
        fontSize: 16,
        bold: true,
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        subtitle: {
          color: '#CCCCCC',
          text: '',
          fontSize: 14,
          bold: false,
        },
        show: false,
      },
      tooltip: {
        show: true,
        color: '#1A1A1A',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        customFormat: null,
        borderRadius: 4,
        borderColor: '#e1e5e8',
        borderWidth: 1,
        backgroundOpacity: 100,
        position: 'center',
        offsetY: 24,
        showValue: true,
        showPercentage: false,
        roundingValue: 0,
        roundingPercentage: 0,
      },
      userOptions: {
        show: false,
        buttons: {
          tooltip: true,
          pdf: true,
          csv: true,
          img: true,
          table: true,
          labels: true,
          fullscreen: true,
          sort: false,
          stack: true,
          animation: false,
        },
        buttonTitles: {
          open: 'Open options',
          close: 'Close options',
          tooltip: 'Toggle tooltip',
          pdf: 'Download PDF',
          csv: 'Download CSV',
          img: 'Download PNG',
          table: 'Toggle table',
          labels: 'Toggle labels',
          fullscreen: 'Toggle fullscreen',
          stack: 'Toggle stack mode',
        },
      },
    },
    bar: {
      borderRadius: 2,
      useGradient: true,
      periodGap: 0.1,
      border: {
        useSerieColor: false,
        strokeWidth: 1,
        stroke: '#FFFFFF',
      },
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
      serieName: {
        show: false,
        offsetY: -6,
        useAbbreviation: true,
        abbreviationSize: 3,
        useSerieColor: true,
        color: '#1A1A1A',
        bold: false,
      },
    },
    line: {
      radius: 6,
      useGradient: true,
      strokeWidth: 2,
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
      area: {
        useGradient: true,
        opacity: 20,
      },
    },
    plot: {
      radius: 6,
      useGradient: true,
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
    },
    table: {
      responsiveBreakpoint: 400,
      rounding: 0,
      sparkline: true,
      columnNames: {
        period: 'Period',
        total: 'Total',
      },
      th: {
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        outline: '',
      },
      td: {
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        outline: '',
      },
    },
    showTable: false,
  });

  const dataset12 = ref([
    {
      name: '1月新增客户',
      series: [10, 20, 30, 40, 50, 60, 60, 60, 60],
      color: '#0091ff',
      type: 'bar',
      shape: 'circle',
      useArea: false,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
    {
      name: '2月新增客户',
      series: [20, 25, 50, 45, 30, 40, 40, 40, 40],
      color: '#21d1fd',
      type: 'bar',
      shape: 'circle',
      useArea: false,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
    {
      name: '3月新增客户',
      series: [20, 25, 50, 45, 30, 75, 75, 75, 75],
      color: '#7affa7',
      type: 'bar',
      shape: 'circle',
      useArea: false,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
  ]);
  const config13 = ref({
    responsive: false,
    theme: '',
    customPalette: [],
    useCssAnimation: true,
    useBlurOnHover: false,
    userOptions: {
      show: false,
      buttons: {
        tooltip: true,
        pdf: true,
        csv: true,
        img: true,
        table: true,
        labels: true,
        fullscreen: true,
        sort: false,
        stack: false,
        animation: false,
      },
      buttonTitles: {
        open: 'Open options',
        close: 'Close options',
        tooltip: 'Toggle tooltip',
        pdf: 'Download PDF',
        csv: 'Download CSV',
        img: 'Download PNG',
        table: 'Toggle table',
        labels: 'Toggle labels',
        fullscreen: 'Toggle fullscreen',
      },
    },
    translations: {
      total: 'Total',
      average: 'Average',
    },
    table: {
      show: false,
      responsiveBreakpoint: 400,
      th: {
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        outline: 'none',
      },
      td: {
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        outline: 'none',
        roundingValue: 0,
        roundingPercentage: 0,
      },
      columnNames: {
        series: '',
        value: '',
        percentage: 'Percentage',
      },
    },
    style: {
      fontFamily: 'inherit',
      chart: {
        useGradient: false,
        gradientIntensity: '41',
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        layout: {
          labels: {
            dataLabels: {
              show: true,
              useLabelSlots: false,
              hideUnderValue: 0,
              prefix: '',
              suffix: '',
            },
            value: {
              rounding: 0,
              show: false,
              formatter: null,
            },
            percentage: {
              color: '#000000',
              bold: true,
              fontSize: 16,
              rounding: 0,
              formatter: null,
            },
            name: {
              color: '#1A1A1A',
              bold: true,
              fontSize: 0,
            },
            hollow: {
              show: false,
              total: {
                show: false,
                bold: false,
                fontSize: 18,
                color: '#AAAAAA',
                text: 'Total',
                offsetY: 0,
                value: {
                  color: '#1A1A1A',
                  fontSize: 18,
                  bold: false,
                  suffix: '',
                  prefix: '',
                  offsetY: 0,
                  rounding: 0,
                  formatter: null,
                },
              },
              average: {
                show: false,
                bold: false,
                fontSize: 18,
                color: '#AAAAAA',
                text: 'Average',
                offsetY: 0,
                value: {
                  color: '#1A1A1A',
                  fontSize: 18,
                  bold: false,
                  suffix: '',
                  prefix: '',
                  offsetY: 0,
                  rounding: 0,
                  formatter: null,
                },
              },
            },
          },
          donut: {
            strokeWidth: '119',
            borderWidth: '0',
            useShadow: false,
            shadowColor: '#1A1A1A',
          },
        },
        comments: {
          show: true,
          showInTooltip: true,
          width: 100,
          offsetY: 0,
          offsetX: 0,
        },
        legend: {
          show: false,
          bold: true,
          backgroundColor: '#FFFFFF',
          color: '#1A1A1A',
          fontSize: 12,
          roundingValue: 0,
          roundingPercentage: 0,
        },
        tooltip: {
          show: true,
          color: '#1A1A1A',
          backgroundColor: '#FFFFFF',
          fontSize: 16,
          customFormat: null,
          borderRadius: 4,
          borderColor: '#e1e5e8',
          borderWidth: 1,
          backgroundOpacity: '100',
          position: 'center',
          offsetY: 24,
          showValue: true,
          showPercentage: false,
          roundingValue: 0,
          roundingPercentage: 0,
        },
        title: {
          text: '',
          color: '#1A1A1A',
          fontSize: 16,
          bold: false,
          textAlign: 'left',
          paddingLeft: 10,
          paddingRight: 0,
          subtitle: {
            color: '#A1A1A1',
            text: '',
            fontSize: 16,
            bold: false,
          },
        },
      },
    },
  });

  const dataset13 = ref([
    {
      name: '渠道1',
      values: [35],
      color: '#1447e1',
    },
    {
      name: '渠道2',
      values: [57],
      color: '#21c3e4',
    },
    {
      name: '渠道3',
      values: [44],
      color: '#ffdf0f',
    },
    {
      name: '渠道4',
      values: [36],
      color: '#f31212',
    },
    {
      name: '渠道5',
      values: [29],
      color: '#ff8080',
    },
  ]);

  const config14 = ref({
    theme: '',
    responsive: false,
    customPalette: [],
    useCssAnimation: true,
    chart: {
      fontFamily: 'inherit',
      backgroundColor: '#FFFFFF',
      color: '#1A1A1A',
      height: '400',
      width: '1103',
      zoom: {
        show: false,
        color: '#CCCCCC',
        highlightColor: '#4A4A4A',
        fontSize: 12,
        useResetSlot: false,
        minimap: {
          show: true,
          smooth: false,
          selectedColor: '#1F77B4',
          selectedColorOpacity: 0.2,
          lineColor: '#1A1A1A',
          selectionRadius: 2,
          indicatorColor: '#1A1A1A',
        },
      },
      padding: {
        top: 36,
        right: 24,
        bottom: 48,
        left: 48,
      },
      highlighter: {
        color: '#1A1A1A',
        opacity: 5,
        useLine: false,
        lineDasharray: 2,
        lineWidth: 1,
      },
      highlightArea: {
        show: false,
        from: 0,
        to: 0,
        color: '#1A1A1A',
        opacity: 20,
        caption: {
          text: 'Caption',
          fontSize: 16,
          color: '#1A1A1A',
          bold: false,
          offsetY: 0,
          width: 'auto',
          padding: 3,
          textAlign: 'center',
        },
      },
      timeTag: {
        show: false,
        backgroundColor: '#e1e5e8',
        color: '#1A1A1A',
        fontSize: 12,
        circleMarker: {
          radius: 3,
          color: '#1A1A1A',
        },
      },
      grid: {
        stroke: '#e1e5e8',
        showVerticalLines: false,
        showHorizontalLines: false,
        position: 'middle',
        frame: {
          show: false,
          stroke: '#E1E5E8',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 0,
        },
        labels: {
          show: true,
          color: '#1A1A1A',
          fontSize: 20,
          axis: {
            yLabel: '',
            yLabelOffsetX: 0,
            xLabel: '',
            xLabelOffsetY: 14,
            fontSize: 16,
          },
          zeroLine: {
            show: true,
          },
          xAxis: {
            showBaseline: true,
          },
          yAxis: {
            showBaseline: true,
            commonScaleSteps: 10,
            useIndividualScale: false,
            stacked: false,
            gap: 12,
            labelWidth: 40,
            formatter: null,
            scaleMin: null,
            scaleMax: null,
          },
          xAxisLabels: {
            color: '#1A1A1A',
            show: true,
            values: [
              'A类',
              'B类',
              'C类',
              'D类',
              'E类',
              '项目6',
              '项目7',
              '项目8',
              '项目9',
              '10月',
              '11月',
              '12月',
            ],
            fontSize: 18,
            showOnlyFirstAndLast: false,
            showOnlyAtModulo: false,
            modulo: 12,
            yOffset: 8,
            rotation: 0,
          },
        },
      },
      comments: {
        show: true,
        showInTooltip: true,
        width: 200,
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        fontSize: 10,
        prefix: '',
        suffix: '',
      },
      legend: {
        color: '#1A1A1A',
        show: true,
        fontSize: 12,
      },
      title: {
        text: 'Title',
        color: '#1A1A1A',
        fontSize: 16,
        bold: true,
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        subtitle: {
          color: '#CCCCCC',
          text: '',
          fontSize: 14,
          bold: false,
        },
        show: false,
      },
      tooltip: {
        show: true,
        color: '#1A1A1A',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        customFormat: null,
        borderRadius: 4,
        borderColor: '#e1e5e8',
        borderWidth: 1,
        backgroundOpacity: 100,
        position: 'center',
        offsetY: 24,
        showValue: true,
        showPercentage: false,
        roundingValue: 0,
        roundingPercentage: 0,
      },
      userOptions: {
        show: false,
        buttons: {
          tooltip: true,
          pdf: true,
          csv: true,
          img: true,
          table: true,
          labels: true,
          fullscreen: true,
          sort: false,
          stack: true,
          animation: false,
        },
        buttonTitles: {
          open: 'Open options',
          close: 'Close options',
          tooltip: 'Toggle tooltip',
          pdf: 'Download PDF',
          csv: 'Download CSV',
          img: 'Download PNG',
          table: 'Toggle table',
          labels: 'Toggle labels',
          fullscreen: 'Toggle fullscreen',
          stack: 'Toggle stack mode',
        },
      },
    },
    bar: {
      borderRadius: 2,
      useGradient: true,
      periodGap: 0.1,
      border: {
        useSerieColor: false,
        strokeWidth: 1,
        stroke: '#FFFFFF',
      },
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
      serieName: {
        show: false,
        offsetY: -6,
        useAbbreviation: true,
        abbreviationSize: 3,
        useSerieColor: true,
        color: '#1A1A1A',
        bold: false,
      },
    },
    line: {
      radius: 6,
      useGradient: true,
      strokeWidth: 2,
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
      area: {
        useGradient: true,
        opacity: 20,
      },
    },
    plot: {
      radius: 6,
      useGradient: true,
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
    },
    table: {
      responsiveBreakpoint: 400,
      rounding: 0,
      sparkline: true,
      columnNames: {
        period: 'Period',
        total: 'Total',
      },
      th: {
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        outline: '',
      },
      td: {
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        outline: '',
      },
    },
    showTable: false,
  });

  const dataset14 = ref([
    {
      name: '1月',
      series: [50, 40, 30, 20, 10],
      color: '#0091ff',
      type: 'bar',
      shape: 'circle',
      useArea: false,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
    {
      name: '2月',
      series: [30, 45, 50, 25, 20],
      color: '#21d1fd',
      type: 'bar',
      shape: 'circle',
      useArea: false,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
    {
      name: '3月',
      series: [30, 45, 50, 25, 20],
      color: '#7affa7',
      type: 'bar',
      shape: 'circle',
      useArea: false,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
  ]);
  const config15 = ref({
    responsive: false,
    theme: '',
    customPalette: [],
    useCssAnimation: true,
    useBlurOnHover: false,
    userOptions: {
      show: false,
      buttons: {
        tooltip: true,
        pdf: true,
        csv: true,
        img: true,
        table: true,
        labels: true,
        fullscreen: true,
        sort: false,
        stack: false,
        animation: false,
      },
      buttonTitles: {
        open: 'Open options',
        close: 'Close options',
        tooltip: 'Toggle tooltip',
        pdf: 'Download PDF',
        csv: 'Download CSV',
        img: 'Download PNG',
        table: 'Toggle table',
        labels: 'Toggle labels',
        fullscreen: 'Toggle fullscreen',
      },
    },
    translations: {
      total: 'Total',
      average: 'Average',
    },
    table: {
      show: false,
      responsiveBreakpoint: 400,
      th: {
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        outline: 'none',
      },
      td: {
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        outline: 'none',
        roundingValue: 0,
        roundingPercentage: 0,
      },
      columnNames: {
        series: '',
        value: '',
        percentage: 'Percentage',
      },
    },
    style: {
      fontFamily: 'inherit',
      chart: {
        useGradient: false,
        gradientIntensity: '41',
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        layout: {
          labels: {
            dataLabels: {
              show: true,
              useLabelSlots: false,
              hideUnderValue: 0,
              prefix: '',
              suffix: '',
            },
            value: {
              rounding: 0,
              show: false,
              formatter: null,
            },
            percentage: {
              color: '#000000',
              bold: true,
              fontSize: 16,
              rounding: 0,
              formatter: null,
            },
            name: {
              color: '#1A1A1A',
              bold: true,
              fontSize: 0,
            },
            hollow: {
              show: false,
              total: {
                show: false,
                bold: false,
                fontSize: 18,
                color: '#AAAAAA',
                text: 'Total',
                offsetY: 0,
                value: {
                  color: '#1A1A1A',
                  fontSize: 18,
                  bold: false,
                  suffix: '',
                  prefix: '',
                  offsetY: 0,
                  rounding: 0,
                  formatter: null,
                },
              },
              average: {
                show: false,
                bold: false,
                fontSize: 18,
                color: '#AAAAAA',
                text: 'Average',
                offsetY: 0,
                value: {
                  color: '#1A1A1A',
                  fontSize: 18,
                  bold: false,
                  suffix: '',
                  prefix: '',
                  offsetY: 0,
                  rounding: 0,
                  formatter: null,
                },
              },
            },
          },
          donut: {
            strokeWidth: '119',
            borderWidth: '0',
            useShadow: false,
            shadowColor: '#1A1A1A',
          },
        },
        comments: {
          show: true,
          showInTooltip: true,
          width: 100,
          offsetY: 0,
          offsetX: 0,
        },
        legend: {
          show: false,
          bold: true,
          backgroundColor: '#FFFFFF',
          color: '#1A1A1A',
          fontSize: 12,
          roundingValue: 0,
          roundingPercentage: 0,
        },
        tooltip: {
          show: true,
          color: '#1A1A1A',
          backgroundColor: '#FFFFFF',
          fontSize: 16,
          customFormat: null,
          borderRadius: 4,
          borderColor: '#e1e5e8',
          borderWidth: 1,
          backgroundOpacity: '100',
          position: 'center',
          offsetY: 24,
          showValue: true,
          showPercentage: false,
          roundingValue: 0,
          roundingPercentage: 0,
        },
        title: {
          text: '',
          color: '#1A1A1A',
          fontSize: 16,
          bold: false,
          textAlign: 'left',
          paddingLeft: 10,
          paddingRight: 0,
          subtitle: {
            color: '#A1A1A1',
            text: '',
            fontSize: 16,
            bold: false,
          },
        },
      },
    },
  });

  const dataset15 = ref([
    {
      name: '1月内',
      values: [35],
      color: '#0d70f2',
    },
    {
      name: '1-2月',
      values: [57],
      color: '#1be0ee',
    },
    {
      name: '2-3月',
      values: [44],
      color: '#ffd500',
    },
  ]);
  const config16 = ref({
    responsive: false,
    theme: '',
    customPalette: [],
    useCssAnimation: true,
    useBlurOnHover: false,
    userOptions: {
      show: false,
      buttons: {
        tooltip: true,
        pdf: true,
        csv: true,
        img: true,
        table: true,
        labels: true,
        fullscreen: true,
        sort: false,
        stack: false,
        animation: false,
      },
      buttonTitles: {
        open: 'Open options',
        close: 'Close options',
        tooltip: 'Toggle tooltip',
        pdf: 'Download PDF',
        csv: 'Download CSV',
        img: 'Download PNG',
        table: 'Toggle table',
        labels: 'Toggle labels',
        fullscreen: 'Toggle fullscreen',
      },
    },
    translations: {
      total: 'Total',
      average: 'Average',
    },
    table: {
      show: false,
      responsiveBreakpoint: 400,
      th: {
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        outline: 'none',
      },
      td: {
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        outline: 'none',
        roundingValue: 0,
        roundingPercentage: 0,
      },
      columnNames: {
        series: '',
        value: '',
        percentage: 'Percentage',
      },
    },
    style: {
      fontFamily: 'inherit',
      chart: {
        useGradient: false,
        gradientIntensity: '41',
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        layout: {
          labels: {
            dataLabels: {
              show: true,
              useLabelSlots: false,
              hideUnderValue: 0,
              prefix: '',
              suffix: '',
            },
            value: {
              rounding: 0,
              show: false,
              formatter: null,
            },
            percentage: {
              color: '#000000',
              bold: true,
              fontSize: 16,
              rounding: 0,
              formatter: null,
            },
            name: {
              color: '#1A1A1A',
              bold: true,
              fontSize: 0,
            },
            hollow: {
              show: false,
              total: {
                show: false,
                bold: false,
                fontSize: 18,
                color: '#AAAAAA',
                text: 'Total',
                offsetY: 0,
                value: {
                  color: '#1A1A1A',
                  fontSize: 18,
                  bold: false,
                  suffix: '',
                  prefix: '',
                  offsetY: 0,
                  rounding: 0,
                  formatter: null,
                },
              },
              average: {
                show: false,
                bold: false,
                fontSize: 18,
                color: '#AAAAAA',
                text: 'Average',
                offsetY: 0,
                value: {
                  color: '#1A1A1A',
                  fontSize: 18,
                  bold: false,
                  suffix: '',
                  prefix: '',
                  offsetY: 0,
                  rounding: 0,
                  formatter: null,
                },
              },
            },
          },
          donut: {
            strokeWidth: '119',
            borderWidth: '0',
            useShadow: false,
            shadowColor: '#1A1A1A',
          },
        },
        comments: {
          show: true,
          showInTooltip: true,
          width: 100,
          offsetY: 0,
          offsetX: 0,
        },
        legend: {
          show: false,
          bold: true,
          backgroundColor: '#FFFFFF',
          color: '#1A1A1A',
          fontSize: 12,
          roundingValue: 0,
          roundingPercentage: 0,
        },
        tooltip: {
          show: true,
          color: '#1A1A1A',
          backgroundColor: '#FFFFFF',
          fontSize: 16,
          customFormat: null,
          borderRadius: 4,
          borderColor: '#e1e5e8',
          borderWidth: 1,
          backgroundOpacity: '100',
          position: 'center',
          offsetY: 24,
          showValue: true,
          showPercentage: false,
          roundingValue: 0,
          roundingPercentage: 0,
        },
        title: {
          text: '',
          color: '#1A1A1A',
          fontSize: 16,
          bold: false,
          textAlign: 'left',
          paddingLeft: 10,
          paddingRight: 0,
          subtitle: {
            color: '#A1A1A1',
            text: '',
            fontSize: 16,
            bold: false,
          },
        },
      },
    },
  });

  const dataset16 = ref([
    {
      name: '500㎡以下',
      values: [30],
      color: '#0d70f2',
    },
    {
      name: '500-1000㎡',
      values: [0],
      color: '#05c1ff',
    },
    {
      name: '1000-1500㎡',
      values: [44],
      color: '#d4ff00',
    },
    {
      name: '1500-2000㎡',
      values: [44],
      color: '#06a711',
    },
    {
      name: '2000-3000㎡',
      values: [44],
      color: '#00ff7b',
    },
    {
      name: '3000㎡以上',
      values: [44],
      color: '#ffea00',
    },
  ]);

  const config17 = ref({
    theme: '',
    responsive: false,
    customPalette: [],
    useCssAnimation: true,
    chart: {
      fontFamily: 'inherit',
      backgroundColor: '#FFFFFF',
      color: '#1A1A1A',
      height: '400',
      width: '1200',
      zoom: {
        show: false,
        color: '#CCCCCC',
        highlightColor: '#4A4A4A',
        fontSize: 12,
        useResetSlot: false,
        minimap: {
          show: true,
          smooth: false,
          selectedColor: '#1F77B4',
          selectedColorOpacity: 0.2,
          lineColor: '#1A1A1A',
          selectionRadius: 2,
          indicatorColor: '#1A1A1A',
        },
      },
      padding: {
        top: 36,
        right: 24,
        bottom: 48,
        left: 48,
      },
      highlighter: {
        color: '#1A1A1A',
        opacity: 5,
        useLine: false,
        lineDasharray: 2,
        lineWidth: 1,
      },
      highlightArea: {
        show: false,
        from: 0,
        to: 0,
        color: '#1A1A1A',
        opacity: 20,
        caption: {
          text: 'Caption',
          fontSize: 16,
          color: '#1A1A1A',
          bold: false,
          offsetY: 0,
          width: 'auto',
          padding: 3,
          textAlign: 'center',
        },
      },
      timeTag: {
        show: false,
        backgroundColor: '#e1e5e8',
        color: '#1A1A1A',
        fontSize: 12,
        circleMarker: {
          radius: 3,
          color: '#1A1A1A',
        },
      },
      grid: {
        stroke: '#e1e5e8',
        showVerticalLines: false,
        showHorizontalLines: false,
        position: 'middle',
        frame: {
          show: false,
          stroke: '#E1E5E8',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 0,
        },
        labels: {
          show: true,
          color: '#1A1A1A',
          fontSize: 20,
          axis: {
            yLabel: '',
            yLabelOffsetX: 0,
            xLabel: '',
            xLabelOffsetY: 14,
            fontSize: 16,
          },
          zeroLine: {
            show: true,
          },
          xAxis: {
            showBaseline: true,
          },
          yAxis: {
            showBaseline: true,
            commonScaleSteps: 10,
            useIndividualScale: false,
            stacked: false,
            gap: 12,
            labelWidth: 40,
            formatter: null,
            scaleMin: null,
            scaleMax: null,
          },
          xAxisLabels: {
            color: '#1A1A1A',
            show: true,
            values: [
              '项目1',
              '项目2',
              '项目3',
              '项目4',
              '项目5',
              '项目6',
              '项目7',
              '项目8',
              '项目9',
              '10月',
              '11月',
              '12月',
            ],
            fontSize: 18,
            showOnlyFirstAndLast: false,
            showOnlyAtModulo: false,
            modulo: 12,
            yOffset: 8,
            rotation: 0,
          },
        },
      },
      comments: {
        show: true,
        showInTooltip: true,
        width: 200,
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        fontSize: 10,
        prefix: '',
        suffix: '',
      },
      legend: {
        color: '#1A1A1A',
        show: true,
        fontSize: 12,
      },
      title: {
        text: 'Title',
        color: '#1A1A1A',
        fontSize: 16,
        bold: true,
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        subtitle: {
          color: '#CCCCCC',
          text: '',
          fontSize: 14,
          bold: false,
        },
        show: false,
      },
      tooltip: {
        show: true,
        color: '#1A1A1A',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        customFormat: null,
        borderRadius: 4,
        borderColor: '#e1e5e8',
        borderWidth: 1,
        backgroundOpacity: 100,
        position: 'center',
        offsetY: 24,
        showValue: true,
        showPercentage: false,
        roundingValue: 0,
        roundingPercentage: 0,
      },
      userOptions: {
        show: false,
        buttons: {
          tooltip: true,
          pdf: true,
          csv: true,
          img: true,
          table: true,
          labels: true,
          fullscreen: true,
          sort: false,
          stack: true,
          animation: false,
        },
        buttonTitles: {
          open: 'Open options',
          close: 'Close options',
          tooltip: 'Toggle tooltip',
          pdf: 'Download PDF',
          csv: 'Download CSV',
          img: 'Download PNG',
          table: 'Toggle table',
          labels: 'Toggle labels',
          fullscreen: 'Toggle fullscreen',
          stack: 'Toggle stack mode',
        },
      },
    },
    bar: {
      borderRadius: 2,
      useGradient: true,
      periodGap: 0.1,
      border: {
        useSerieColor: false,
        strokeWidth: 1,
        stroke: '#FFFFFF',
      },
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
      serieName: {
        show: false,
        offsetY: -6,
        useAbbreviation: true,
        abbreviationSize: 3,
        useSerieColor: true,
        color: '#1A1A1A',
        bold: false,
      },
    },
    line: {
      radius: 6,
      useGradient: true,
      strokeWidth: 2,
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
      area: {
        useGradient: true,
        opacity: 20,
      },
    },
    plot: {
      radius: 6,
      useGradient: true,
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
    },
    table: {
      responsiveBreakpoint: 400,
      rounding: 0,
      sparkline: true,
      columnNames: {
        period: 'Period',
        total: 'Total',
      },
      th: {
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        outline: '',
      },
      td: {
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        outline: '',
      },
    },
    showTable: false,
  });

  const dataset17 = ref([
    {
      name: '自主招商',
      series: [10, 20, 30, 40, 25, 25, 25, 25, 25],
      color: '#0091ff',
      type: 'bar',
      shape: 'circle',
      useArea: false,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
  ]);
  const config18 = ref({
    theme: '',
    responsive: false,
    customPalette: [],
    useCssAnimation: true,
    chart: {
      fontFamily: 'inherit',
      backgroundColor: '#FFFFFF',
      color: '#1A1A1A',
      height: '400',
      width: '1200',
      zoom: {
        show: false,
        color: '#CCCCCC',
        highlightColor: '#4A4A4A',
        fontSize: 12,
        useResetSlot: false,
        minimap: {
          show: true,
          smooth: false,
          selectedColor: '#1F77B4',
          selectedColorOpacity: 0.2,
          lineColor: '#1A1A1A',
          selectionRadius: 2,
          indicatorColor: '#1A1A1A',
        },
      },
      padding: {
        top: 36,
        right: 24,
        bottom: 48,
        left: 48,
      },
      highlighter: {
        color: '#1A1A1A',
        opacity: 5,
        useLine: false,
        lineDasharray: 2,
        lineWidth: 1,
      },
      highlightArea: {
        show: false,
        from: 0,
        to: 0,
        color: '#1A1A1A',
        opacity: 20,
        caption: {
          text: 'Caption',
          fontSize: 16,
          color: '#1A1A1A',
          bold: false,
          offsetY: 0,
          width: 'auto',
          padding: 3,
          textAlign: 'center',
        },
      },
      timeTag: {
        show: false,
        backgroundColor: '#e1e5e8',
        color: '#1A1A1A',
        fontSize: 12,
        circleMarker: {
          radius: 3,
          color: '#1A1A1A',
        },
      },
      grid: {
        stroke: '#e1e5e8',
        showVerticalLines: false,
        showHorizontalLines: false,
        position: 'middle',
        frame: {
          show: false,
          stroke: '#E1E5E8',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 0,
        },
        labels: {
          show: true,
          color: '#1A1A1A',
          fontSize: 20,
          axis: {
            yLabel: '',
            yLabelOffsetX: 0,
            xLabel: '',
            xLabelOffsetY: 14,
            fontSize: 16,
          },
          zeroLine: {
            show: true,
          },
          xAxis: {
            showBaseline: true,
          },
          yAxis: {
            showBaseline: true,
            commonScaleSteps: 10,
            useIndividualScale: false,
            stacked: false,
            gap: 12,
            labelWidth: 40,
            formatter: null,
            scaleMin: null,
            scaleMax: null,
          },
          xAxisLabels: {
            color: '#1A1A1A',
            show: true,
            values: [
              '项目1',
              '项目2',
              '项目3',
              '项目4',
              '项目5',
              '项目6',
              '项目7',
              '项目8',
              '项目9',
              '10月',
              '11月',
              '12月',
            ],
            fontSize: 18,
            showOnlyFirstAndLast: false,
            showOnlyAtModulo: false,
            modulo: 12,
            yOffset: 8,
            rotation: 0,
          },
        },
      },
      comments: {
        show: true,
        showInTooltip: true,
        width: 200,
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        fontSize: 10,
        prefix: '',
        suffix: '',
      },
      legend: {
        color: '#1A1A1A',
        show: true,
        fontSize: 12,
      },
      title: {
        text: 'Title',
        color: '#1A1A1A',
        fontSize: 16,
        bold: true,
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        subtitle: {
          color: '#CCCCCC',
          text: '',
          fontSize: 14,
          bold: false,
        },
        show: false,
      },
      tooltip: {
        show: true,
        color: '#1A1A1A',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        customFormat: null,
        borderRadius: 4,
        borderColor: '#e1e5e8',
        borderWidth: 1,
        backgroundOpacity: 100,
        position: 'center',
        offsetY: 24,
        showValue: true,
        showPercentage: false,
        roundingValue: 0,
        roundingPercentage: 0,
      },
      userOptions: {
        show: false,
        buttons: {
          tooltip: true,
          pdf: true,
          csv: true,
          img: true,
          table: true,
          labels: true,
          fullscreen: true,
          sort: false,
          stack: true,
          animation: false,
        },
        buttonTitles: {
          open: 'Open options',
          close: 'Close options',
          tooltip: 'Toggle tooltip',
          pdf: 'Download PDF',
          csv: 'Download CSV',
          img: 'Download PNG',
          table: 'Toggle table',
          labels: 'Toggle labels',
          fullscreen: 'Toggle fullscreen',
          stack: 'Toggle stack mode',
        },
      },
    },
    bar: {
      borderRadius: 2,
      useGradient: true,
      periodGap: 0.1,
      border: {
        useSerieColor: false,
        strokeWidth: 1,
        stroke: '#FFFFFF',
      },
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
      serieName: {
        show: false,
        offsetY: -6,
        useAbbreviation: true,
        abbreviationSize: 3,
        useSerieColor: true,
        color: '#1A1A1A',
        bold: false,
      },
    },
    line: {
      radius: 6,
      useGradient: true,
      strokeWidth: 2,
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
      area: {
        useGradient: true,
        opacity: 20,
      },
    },
    plot: {
      radius: 6,
      useGradient: true,
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A',
        formatter: null,
      },
    },
    table: {
      responsiveBreakpoint: 400,
      rounding: 0,
      sparkline: true,
      columnNames: {
        period: 'Period',
        total: 'Total',
      },
      th: {
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        outline: '',
      },
      td: {
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        outline: '',
      },
    },
    showTable: false,
  });

  const dataset18 = ref([
    {
      name: '成交量',
      series: [10, 20, 30, 40, 25, 25, 25, 25, 25],
      color: '#0091ff',
      type: 'bar',
      shape: 'circle',
      useArea: false,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
    {
      name: '接治量',
      series: [20, 25, 50, 45, 30, 40, 40, 40, 40],
      color: '#0aefff',
      type: 'bar',
      shape: 'circle',
      useArea: false,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
    {
      name: '',
      series: [20, 40, 25, 45, 43, 28, 28, 28, 28],
      color: '#f00000',
      type: 'line',
      shape: 'circle',
      useArea: false,
      useProgression: false,
      dataLabels: false,
      smooth: false,
      dashed: false,
      useTag: 'none',
    },
  ]);
</script>

<style scoped>
  .border {
    border-radius: 0.5vw;
  }
  .border-one {
    border-radius: 1vw;
  }
  .border-two {
    border: 1px solid black;
    box-shadow: -2vw 6vw 24vw rgb(227, 225, 225);
  }
  .border-three {
    border-bottom: 0.3vw solid #ccc;
  }
  .border-four:hover {
    color: blue;
    border-bottom: 0.3vw solid blue;
  }
  .border-five {
    border: 0.1vw solid gray;
    box-shadow: 0.1vw 0.1vw 1vw #ccc;
    border-radius: 0.1vw;
  }
  .border-six {
    border: 0.1vw solid grey;
  }
  .border-seven {
    border: 0.1vw solid blue;
  }
  .border-seven:hover {
    border: 0.1vw solid blue;
    background-color: blue;
    color: white;
  }
  .container {
    overflow-x: scroll;
    overflow-y: scroll;
  }
  .smooth-scroll {
    scroll-behavior: smooth;
  }
</style>
