/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2021-8-4 01:05:41
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4f3de74"],{"23dc":function(e,t,l){"use strict";l.r(t);var r=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"tree-container"},[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{xs:24,sm:24,md:24,lg:6,xl:6}},[l("el-divider",{attrs:{"content-position":"left"}},[e._v("常规树")]),l("el-input",{attrs:{placeholder:"输入关键字过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),l("el-tree",{ref:"demoTree",staticClass:"vab-filter-tree",attrs:{data:e.data2,"default-checked-keys":e.defaultCheckedKeys,"default-expanded-keys":e.defaultExpendedKeys,"expand-on-click-node":!1,"filter-node-method":e.filterNode,"highlight-current":!0,props:e.defaultProps,"node-key":"id","show-checkbox":""},on:{check:e.checkNode,"node-click":e.nodeClick,"node-collapse":e.nodeCollapse,"node-expand":e.nodeExpand},scopedSlots:e._u([{key:"defalut",fn:function(t){var r=t.node,s=t.data;return[l("span",{staticClass:"vab-tree-item"},[4==r.data.rank?l("i",{staticClass:"el-icon-s-custom"}):e._e(),e._v(" "+e._s(r.label)+" ")]),l("span",{staticClass:"vab-tree-options"},[4!==r.data.rank?l("a",{staticClass:"vab-tree-btn",attrs:{title:"添加"},on:{click:function(){return e.append(r,s,0)}}},[l("i",{staticClass:"el-icon-plus"})]):e._e(),l("a",{staticClass:"vab-tree-btn",attrs:{title:"编辑"},on:{click:function(){return e.edit(r,s,1)}}},[l("i",{staticClass:"el-icon-edit"})]),1!==r.data.rank?l("a",{staticClass:"vab-tree-btn",attrs:{title:"刪除"},on:{click:function(){return e.remove(r,s)}}},[l("i",{staticClass:"el-icon-delete"})]):e._e()])]}}])})],1),l("el-col",{attrs:{xs:24,sm:24,md:24,lg:6,xl:6}},[l("el-divider",{attrs:{"content-position":"left"}},[e._v("懒加载树")]),l("el-input",{staticClass:"input-with-select",attrs:{value:e.keyW,placeholder:"请输入内容"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.showTreeList.apply(null,arguments)}},model:{value:e.keyW,callback:function(t){e.keyW=t},expression:"keyW"}}),l("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"blur-tree"},[l("el-tree",{ref:"treeFilter",staticClass:"vab-filter-tree",attrs:{data:e.filterDevLlist,"expand-on-click-node":!1,props:e.defaultProps,"default-expand-all":"","highlight-current":"","node-key":"indexCode"},on:{"node-click":e.nodeClick},scopedSlots:e._u([{key:"defalut",fn:function(t){var r=t.node;return[l("span",{staticClass:"vab-tree-item"},[4==r.data.rank?l("i",{staticClass:"el-icon-s-custom"}):e._e(),e._v(" "+e._s(r.label)+" ")]),l("span",{staticClass:"vab-tree-options"},[4!==r.data.rank?l("a",{staticClass:"vab-tree-btn",attrs:{title:"添加"}},[l("i",{staticClass:"el-icon-plus"})]):e._e(),l("a",{staticClass:"vab-tree-btn",attrs:{title:"编辑"}},[l("i",{staticClass:"el-icon-edit"})]),1!==r.data.rank?l("a",{staticClass:"vab-tree-btn",attrs:{title:"刪除"}},[l("i",{staticClass:"el-icon-delete"})]):e._e()])]}}])})],1),l("div",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}],staticClass:"el-tree-wrap"},[l("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"tree",staticClass:"vab-filter-tree",attrs:{"expand-on-click-node":!1,load:e.loadNode,props:e.defaultProps,"highlight-current":"",lazy:"","node-key":"indexCode"},on:{"node-click":e.nodeClick},scopedSlots:e._u([{key:"defalut",fn:function(t){var r=t.node;return[l("span",{staticClass:"vab-tree-item"},[4==r.data.rank?l("i",{staticClass:"el-icon-s-custom"}):e._e(),e._v(" "+e._s(r.label)+" ")]),l("span",{staticClass:"vab-tree-options"},[l("a",{staticClass:"vab-tree-btn",attrs:{title:"编辑"}},[l("i",{staticClass:"el-icon-edit"})]),1!==r.data.rank?l("a",{staticClass:"vab-tree-btn",attrs:{title:"刪除"}},[l("i",{staticClass:"el-icon-delete"})]):e._e()])]}}])})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:24,lg:6,xl:6}},[l("el-divider",{attrs:{"content-position":"left"}},[e._v("单选树")]),l("el-select",{ref:"singleTree",staticClass:"vab-tree-select",attrs:{clearable:"","popper-class":"select-tree-popper","value-key":"id"},on:{clear:function(t){return e.selectTreeClearHandle("single")}},model:{value:e.singleSelectTreeVal,callback:function(t){e.singleSelectTreeVal=t},expression:"singleSelectTreeVal"}},[l("el-option",{attrs:{value:e.singleSelectTreeKey}},[l("el-tree",{ref:"singleSelectTree",attrs:{id:"singleSelectTree","current-node-key":e.singleSelectTreeKey,data:e.selectTreeData,"default-expanded-keys":e.selectTreeDefaultSelectedKeys,"highlight-current":!0,props:e.selectTreeDefaultProps,"node-key":"id"},on:{"node-click":e.selectTreeNodeClick},scopedSlots:e._u([{key:"defalut",fn:function(t){var r=t.node;return[l("span",{staticClass:"vab-tree-item"},[e._v(e._s(r.label))])]}}])})],1)],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:24,lg:6,xl:6}},[l("el-divider",{attrs:{"content-position":"left"}},[e._v("多选树")]),l("el-select",{staticClass:"vab-tree-select",attrs:{clearable:"","collapse-tags":"",multiple:"","popper-class":"select-tree-popper"},on:{change:e.changeMultipleSelectTreeHandle,clear:function(t){return e.selectTreeClearHandle("multiple")},"remove-tag":e.removeSelectTreeTag},model:{value:e.multipleSelectTreeVal,callback:function(t){e.multipleSelectTreeVal=t},expression:"multipleSelectTreeVal"}},[l("el-option",{attrs:{value:e.multipleSelectTreeKey}},[l("el-tree",{ref:"multipleSelectTree",attrs:{id:"multipleSelectTree","current-node-key":e.multipleSelectTreeKey,data:e.selectTreeData,"default-checked-keys":e.selectTreeDefaultSelectedKeys,"default-expanded-keys":e.selectTreeDefaultSelectedKeys,"highlight-current":!0,props:e.selectTreeDefaultProps,"node-key":"id","show-checkbox":""},on:{check:e.multipleSelectTreeCheckNode}})],1)],1)],1)],1),l("el-dialog",{staticClass:"tree-operate-dialog",attrs:{title:e.dialogTitle,visible:e.treeDialogVisible,width:"400px"},on:{"update:visible":function(t){e.treeDialogVisible=t},close:function(t){e.treeDialogVisible=!1}}},[l("el-form",{ref:"treeForm",attrs:{model:e.treeForm}},[l("el-form-item",{attrs:{label:"节点名称",required:""}},[l("el-input",{model:{value:e.treeForm.name,callback:function(t){e.$set(e.treeForm,"name",t)},expression:"treeForm.name"}})],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.treeDialogVisible=!1}}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:e.saveTree}},[e._v("确 定")])],1)],1)],1)},s=[],a=l("2909"),i=l("1da1"),n=(l("96cf"),l("4de4"),l("159b"),l("b0c0"),l("a434"),l("c740"),l("498a"),l("ac1f"),l("1276"),l("a15b"),l("8610")),c={name:"Tree",data:function(){return{dialogTitle:"添加节点",treeFlag:0,treeDialogVisible:!1,treeForm:{id:"",name:""},checkNodeKeys:[],filterText:"",data2:[],defaultProps:{children:"children",label:"name"},defaultExpendedKeys:[],defaultCheckedKeys:[],loading:!0,keyW:"",filterDevLlist:[],isShow:!1,updateTree:!0,selectLevel:4,singleSelectTreeVal:"",singleSelectTreeKey:"",selectTreeData:[],selectTreeDefaultSelectedKeys:[],selectTreeDefaultProps:{children:"children",label:"name"},multipleSelectTreeVal:[],multipleSelectTreeKey:""}},watch:{filterText:function(e){this.$refs.demoTree.filter(e)}},mounted:function(){var e=this;this.$nextTick((function(){e.getTreeListFuc(1),e.setCheckedKeys(),e.initSingleTree("single"),e.initSingleTree("multiple")}))},methods:{openTree:function(e,t){var l=this,r=function e(r){r.forEach((function(r){r.rank<=t&&l.defaultExpendedKeys.push(r.id),r.children.length>0&&e(r.children)}))};r(e)},getTreeListFuc:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function l(){var r,s;return regeneratorRuntime.wrap((function(l){while(1)switch(l.prev=l.next){case 0:return l.next=2,Object(n["getTreeList"])();case 2:r=l.sent,s=r.data,t.data2=s,e&&t.openTree(t.data2,2);case 6:case"end":return l.stop()}}),l)})))()},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},append:function(e,t,l){this.treeFlag=l,this.dialogTitle="添加节点",this.treeForm={id:"",name:""},this.treeDialogVisible=!0},edit:function(e,t,l){this.treeFlag=l,this.dialogTitle="编辑节点",this.treeForm={id:t.id,name:t.name},this.treeDialogVisible=!0},remove:function(e,t){var l=this;this.$baseConfirm("你确定要删除该节点?",null,Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=Object(n["getTreeList"])(),r=t.msg,l.$baseMessage(r,"success"),l.getTreeListFuc(0);case 3:case"end":return e.stop()}}),e)}))))},saveTree:function(){var e=this;this.$refs.treeForm.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(l){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!l){t.next=8;break}return t.next=3,Object(n["getTreeList"])();case 3:r=t.sent,s=r.msg,e.$baseMessage(s,"success"),e.treeDialogVisible=!1,e.getTreeListFuc(0);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},setCheckedKeys:function(){this.$refs.demoTree.setCheckedKeys([1])},nodeClick:function(e,t,l){},checkNode:function(e,t,l){this.checkNodeKeys=t.checkedKeys},nodeExpand:function(e,t,l){this.defaultExpendedKeys.push(e.id)},nodeCollapse:function(e,t,l){this.defaultExpendedKeys.splice(this.defaultExpendedKeys.findIndex((function(t){return t.id===e.id})),1)},loadNode:function(e,t){var l=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(0!==e.level){r.next=9;break}return r.next=3,Object(n["getTreeList"])();case 3:return s=r.sent,a=s.data,l.loading=!1,r.abrupt("return",t(a));case 9:return r.next=11,Object(n["getTreeList"])();case 11:return i=r.sent,i.data,r.abrupt("return",t(res.data));case 14:case"end":return r.stop()}}),r)})))()},showTreeList:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function l(){var r,s;return regeneratorRuntime.wrap((function(l){while(1)switch(l.prev=l.next){case 0:if("string"===typeof e&&(t.keyW=e.trim()),0===t.keyW.length){l.next=12;break}return{},{keyWord:t.keyW},l.next=6,Object(n["getTreeList"])();case 6:r=l.sent,s=r.data,t.filterDevLlist=s,t.isShow=!0,l.next=13;break;case 12:t.isShow=!1;case 13:case"end":return l.stop()}}),l)})))()},initSingleTree:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function l(){var r,s;return regeneratorRuntime.wrap((function(l){while(1)switch(l.prev=l.next){case 0:return l.next=2,Object(n["getTreeList"])();case 2:r=l.sent,s=r.data,t.selectTreeData=s,t.$nextTick((function(){t.selectTreeDefaultSelectedKeys=t.singleSelectTreeKey.split(","),"single"==e?t.$refs.singleSelectTree.setCurrentKey(t.singleSelectTreeKey):t.$refs.multipleSelectTree.setCheckedKeys(t.selectTreeDefaultSelectedKeys)}));case 6:case"end":return l.stop()}}),l)})))()},selectTreeClearHandle:function(e){this.selectTreeDefaultSelectedKeys=[],this.clearSelected(),"single"==e?(this.singleSelectTreeVal="",this.singleSelectTreeKey="",this.$refs.singleSelectTree.setCurrentKey("")):(this.multipleSelectTreeVal=[],this.multipleSelectTreeKey="",this.$refs.multipleSelectTree.setCheckedKeys([]))},clearSelected:function(){var e=document.querySelectorAll("#singleSelectTree .el-tree-node");e.forEach((function(e){return e.classList.remove("is-current")}))},removeSelectTreeTag:function(e){var t=JSON.parse(JSON.stringify(this.selectTreeData));while(t.length){var l=t.shift();if(l.name==e)return this.$refs.multipleSelectTree.setChecked(l.id,!1);l.children&&l.children.length&&t.unshift.apply(t,Object(a["a"])(l.children))}},changeMultipleSelectTreeHandle:function(e){},selectTreeNodeClick:function(e,t,l){e.rank>=this.selectLevel&&(this.singleSelectTreeVal=e.name,this.singleSelectTreeKey=e.id,this.$refs.singleTree.blur())},multipleSelectTreeCheckNode:function(e,t,l){var r=this,s=this.$refs.multipleSelectTree.getCheckedNodes(),a=[],i=[];s.forEach((function(e){e.rank>=r.selectLevel&&(a.push(e.id),i.push(e.name))})),this.multipleSelectTreeVal=i,this.multipleSelectTreeKey=a.join(",")}}},o=c,d=l("2877"),u=Object(d["a"])(o,r,s,!1,null,null,null);t["default"]=u.exports},8610:function(e,t,l){"use strict";l.r(t),l.d(t,"getTreeList",(function(){return s}));var r=l("b775");function s(e){return Object(r["default"])({url:"/tree/list",method:"post",data:e})}}}]);