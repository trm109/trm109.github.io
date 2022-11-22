(function(){"use strict";var t={7539:function(t,e,i){var o=i(9242),s=i(3396);function a(t,e,i,a,l,n){const d=(0,s.up)("TaskEditor"),r=(0,s.up)("PrimaryPanel");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.wy)((0,s._)("div",null,[(0,s.Wm)(d)],512),[[o.F8,t.showTaskEditor]]),(0,s.Wm)(r)],64)}var l=i(7139);const n=t=>((0,s.dD)("data-v-58279a62"),t=t(),(0,s.Cn)(),t),d={class:"hello"},r=n((()=>(0,s._)("p",null,[(0,s.Uk)(" For a guide and recipes on how to configure / customize this project,"),(0,s._)("br"),(0,s.Uk)(" check out the "),(0,s._)("a",{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"},"vue-cli documentation"),(0,s.Uk)(". ")],-1)));function c(t,e,i,o,a,n){return(0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("h1",null,(0,l.zw)(t.msg),1),r])}var u=(0,s.aZ)({name:"HelloWorld",props:{msg:String}}),p=i(89);const h=(0,p.Z)(u,[["render",c],["__scopeId","data-v-58279a62"]]);var m=h;const k=t=>((0,s.dD)("data-v-b83a2d0a"),t=t(),(0,s.Cn)(),t),g={class:"PrimaryPanel"},f={class:"panel panel-primary"},T={class:"panel-heading"},b=k((()=>(0,s._)("h1",null,"Framework Task Table",-1))),v=k((()=>(0,s._)("h2",null,"My Modal",-1))),y=k((()=>(0,s._)("p",null,"Some content",-1))),C={class:"panel-body"},w={key:0,class:"panel panel-success"},_={class:"panel-heading"};function E(t,e,i,a,n,d){const r=(0,s.up)("Button"),c=(0,s.up)("TaskEditor"),u=(0,s.up)("TaskEditorModal"),p=(0,s.up)("TaskTable"),h=(0,s.up)("Toast");return(0,s.wg)(),(0,s.iD)("div",g,[(0,s._)("div",null,[(0,s._)("div",f,[(0,s._)("div",T,[b,(0,s.Wm)(r,{class:"button glyphicon glyphicon-plus",onBtnClick:t.openModelAdd,text:"      Add New Task"},null,8,["onBtnClick"]),t.showEditorModal?((0,s.wg)(),(0,s.j4)(u,{key:0,toggleModal:()=>t.toggleModal()},{default:(0,s.w5)((()=>[v,y,(0,s.Wm)(c,{ref:"taskEditor",editing:t.editing,id:t.editingTaskId,onInterface:t.getEditorInterface,onEmittedSubmit:t.modalSubmit,isActive:t.showEditorModal,task:t.taskToEdit,onToggleModal:t.toggleModal,tasks:t.tasks},null,8,["editing","id","onInterface","onEmittedSubmit","isActive","task","onToggleModal","tasks"])])),_:1},8,["toggleModal"])):(0,s.kq)("",!0)]),(0,s._)("div",C,[(0,s.Wm)(p,{tasks:t.tasks,onEditClick:t.openModalEdit,onDeleteClick:t.deleteTask,onUpdateIsComplete:t.updateIsComplete},null,8,["tasks","onEditClick","onDeleteClick","onUpdateIsComplete"])])])]),t.showToast?((0,s.wg)(),(0,s.iD)("div",w,[(0,s._)("div",_,[(0,s.Wm)(o.uT,{name:"toast"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(t.toastMessage),1)])),_:1})])),_:1})])])):(0,s.kq)("",!0)])}const I=t=>((0,s.dD)("data-v-7c097dea"),t=t(),(0,s.Cn)(),t),D={class:"TTable"},M={class:"table table-hover"},O=I((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Title"),(0,s._)("th",null,"Description"),(0,s._)("th",null,"Deadline"),(0,s._)("th",null,"Priority"),(0,s._)("th",null,"Is Complete"),(0,s._)("th",null,"Action")])],-1)));function j(t,e,i,o,a,l){const n=(0,s.up)("TaskObject");return(0,s.wg)(),(0,s.iD)("div",D,[(0,s._)("table",M,[O,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.tasks,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.id},[(0,s.Wm)(n,{task:e,id:e.id,onEditClickOrigin:t.editClick,onDeleteClickOrigin:t.deleteClick,onUpdateIsCompleteOrigin:t.updateIsComplete},null,8,["task","id","onEditClickOrigin","onDeleteClickOrigin","onUpdateIsCompleteOrigin"])])))),128))])])])}const x=["checked"],S={style:{display:"block"}};function V(t,e,i,a,n,d){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("td",null,(0,l.zw)(i.task.title),1),(0,s._)("td",null,(0,l.zw)(i.task.description),1),(0,s._)("td",null,(0,l.zw)(i.task.deadline),1),(0,s._)("td",null,(0,l.zw)(1==i.task.priority?"low":2==i.task.priority?"med":"high"),1),(0,s._)("td",null,[(0,s.Uk)((0,l.zw)(i.task.isComplete)+" ",1),(0,s._)("input",{type:"checkbox",id:"isCompelete",name:"isComplete",checked:i.task.isComplete,onChange:e[0]||(e[0]=(...t)=>d.updateIsComplete&&d.updateIsComplete(...t))},null,40,x)]),(0,s._)("td",S,[(0,s.wy)((0,s._)("button",{class:"btn btn-primary",onClick:e[1]||(e[1]=(...t)=>d.editClick&&d.editClick(...t))},"Update",512),[[o.F8,!this.task.isComplete]]),(0,s._)("button",{class:"btn btn-danger",onClick:e[2]||(e[2]=(...t)=>d.deleteClick&&d.deleteClick(...t))},"Delete")])],64)}var P={name:"TaskObject",props:{task:Object,id:Number},methods:{editClick(){console.log("Object editClick"),this.$emit("editClickOrigin",this.id)},deleteClick(){console.log("Tobject delclick"),this.$emit("deleteClickOrigin",this.id)},updateIsComplete(){console.log("updateIsComplete"),this.$emit("updateIsCompleteOrigin",this.task)}}};const W=(0,p.Z)(P,[["render",V],["__scopeId","data-v-83d1b37e"]]);var U=W,$=(0,s.aZ)({name:"TaskTable",props:{tasks:Array},components:{TaskObject:U},methods:{editClick(t){console.log("Tasktable editClick"),this.$emit("editClick",t)},deleteClick(t){console.log("TTable delclick"),this.$emit("deleteClick",t)},updateIsComplete(t){console.log("updateIsComplete"),this.$emit("updateIsComplete",t)}}});const A=(0,p.Z)($,[["render",j],["__scopeId","data-v-7c097dea"]]);var F=A;function z(t,e,i,o,a,n){return(0,s.wg)(),(0,s.iD)("button",{type:"button",onClick:e[0]||(e[0]=t=>n.onClick()),style:(0,l.j5)({background:i.color}),class:"btn btn-primary"},(0,l.zw)(i.text),5)}var Z={name:"Button",props:{text:{type:String,default:"Button"},color:String},methods:{onClick(){this.$emit("btn-click")}}};const N=(0,p.Z)(Z,[["render",z],["__scopeId","data-v-fa1cd198"]]);var B=N;const H=t=>((0,s.dD)("data-v-3573e588"),t=t(),(0,s.Cn)(),t),Y={class:"modal"},q={class:"modal-inner"},J=H((()=>(0,s._)("span",null,null,-1)));function G(t,e,i,o,a,l){return(0,s.wg)(),(0,s.iD)("div",Y,[(0,s._)("div",q,[(0,s.WI)(t.$slots,"default",{},void 0,!0),J,(0,s._)("button",{class:"modal-close",onClick:e[0]||(e[0]=t=>i.toggleModal())},"Close Modal")])])}var K={props:["toggleModal"]};const L=(0,p.Z)(K,[["render",G],["__scopeId","data-v-3573e588"]]);var Q=L;const R={class:"debug-label"};function X(t,e,i,a,n,d){const r=(0,s.up)("FormInput");return(0,s.wg)(),(0,s.iD)("form",{onSubmit:e[5]||(e[5]=(0,o.iM)(((...e)=>t.onSubmit&&t.onSubmit(...e)),["prevent"])),class:"add-form"},[(0,s._)("div",R,[(0,s._)("p",null,(0,l.zw)(i.id),1)]),(0,s.Wm)(r,{id:"title-input",label:"Task Title",type:"text",value:n.titleValue,description:"What is the title of your task?",placeholder:"Task Title",modelValue:n.title,"onUpdate:modelValue":e[0]||(e[0]=t=>n.title=t)},null,8,["value","modelValue"]),(0,s.Wm)(r,{id:"description-input",label:"Task Description",type:"text",value:n.descValue,description:"What is the description of your task?",placeholder:"Task Description",modelValue:n.description,"onUpdate:modelValue":e[1]||(e[1]=t=>n.description=t)},null,8,["value","modelValue"]),(0,s.Wm)(r,{id:"deadline-input",label:"Task Deadline",type:"date",value:n.deadlineValue,description:"What is the deadline of your task?",placeholder:"Task Deadline",modelValue:n.deadline,"onUpdate:modelValue":e[2]||(e[2]=t=>n.deadline=t)},null,8,["value","modelValue"]),(0,s.Wm)(r,{id:"priority-input",label:"Task Priority",type:"range",value:n.rangeValue,step:"1",min:"1",max:"3",modelValue:n.priority,"onUpdate:modelValue":e[3]||(e[3]=t=>n.priority=t)},null,8,["value","modelValue"]),(0,s._)("button",{class:"modal-submit",onClick:e[4]||(e[4]=t=>d.modalSubmit())},[(0,s._)("span",{class:(0,l.C_)([this.editing?"glyphicon glyphicon-pencil":"glyphicon glyphicon-plus"])},null,2),(0,s.Uk)(" "+(0,l.zw)(this.editing?"Edit":"Add"),1)])],32)}const tt={class:"form-group"},et={for:"input"},it=["type","aria-describedby","placeholder","min","max","step","value"],ot={id:"description",class:"form-text text-muted"};function st(t,e,i,o,a,n){return(0,s.wg)(),(0,s.iD)("div",tt,[(0,s._)("label",et,(0,l.zw)(i.label),1),(0,s._)("input",{type:i.type,class:(0,l.C_)(["range"===i.type?"form-range":"form-control",""==this.modelValue?"is-invalid":""]),id:"input","aria-describedby":i.description,placeholder:i.placeholder,min:i.min,max:i.max,step:i.step,value:i.modelValue,onInput:e[0]||(e[0]=t=>n.emitEvent(t))},null,42,it),(0,s._)("small",ot,(0,l.zw)(i.description),1)])}var at={name:"FormInput",props:{label:String,placeholder:String,type:String,modelValue:String,description:String,step:Number,min:Number,max:Number,id:String},methods:{emitEvent(t){let e=t.target.value;this.$emit("update:modelValue",e)}}};const lt=(0,p.Z)(at,[["render",st],["__scopeId","data-v-37575cf6"]]);var nt=lt,dt={created(){console.log("TaskEditor created: "),console.log(this.task),this.editing&&(this.title=this.task.title,this.description=this.task.description,this.deadline=this.task.deadline,this.priority=this.task.priority,this.isComplete=this.task.isComplete),this.emitInterface()},expose:["importFromExistingTask"],name:"TaskEditor",components:{FormInput:nt},props:{editing:Boolean,id:Number,task:Object,tasks:Array},data(){return{title:"",description:"",deadline:"",priority:"1",isComplete:!1,titleValue:"dasda",descValue:"ddd",deadlineValue:"eee",rangeValue:1,isActive:!1}},methods:{emitInterface(){this.$emit("interface",{importFromExistingTask:()=>this.importFromExistingTask()})},importFromExistingTask(){if(console.log("DEF"),1==this.editing){const t=this.fetchTask(this.id);this.title=t.title}},debugPrint(){console.log("TESTING"),console.log("ID: "+this.id),console.log("Title: "+this.title),console.log("Description: "+this.description),console.log("Deadline: "+this.deadline),console.log("Priority: "+this.priority),console.log("isComplete: "+this.isComplete),console.log("Editing: "+this.editing)},modalSubmit(){console.log("submit");for(let t=0;t<this.tasks.length;t++)if(this.tasks[t].title==this.title)return void alert("Task with same title already exists.");""!=this.title&&""!=this.description&&""!=this.deadline?(this.$emit("emittedSubmit",{id:this.id,title:this.title,description:this.description,deadline:this.deadline,priority:this.priority,isComplete:this.isComplete,editing:this.editing}),this.$emit("toggleModal")):alert("Please fill out all fields")},async fetchTask(t){const e=await fetch(`api/tasks/${t}`),i=await e.json();return i}},watch:{id(t,e){console.log("ID Changed")}}};const rt=(0,p.Z)(dt,[["render",X],["__scopeId","data-v-10992f1d"]]);var ct=rt;var ut=(0,s.aZ)({name:"PrimaryPanel",editorInterface:{importFromExistingTask:t=>{}},data(){return{tasks:[],showEditorModal:!1,editing:!1,editingTaskId:-1,taskToEdit:{},toastMessage:"defaultToastMessage",showToast:!1}},props:{},components:{TaskTable:F,Button:B,TaskEditorModal:Q,TaskEditor:ct},methods:{updateIsComplete(t){t.isComplete=!t.isComplete,this.modifyTask(t)},getEditorInterface(t){this.$options.editorInterface=t},toggleModal(){this.showEditorModal=!this.showEditorModal},openModelAdd(){this.editing=!1,this.editingTaskId=-1,this.toggleModal()},async openModalEdit(t){console.log("PrimaryPanel editClick"),this.editing=!0,this.editingTaskId=t,console.log("ABC"),this.taskToEdit=await this.fetchTask(t),this.toggleModal()},modalSubmit(t){console.log(t),!0===t.editing?(console.log("Updating task"),-1===t.id&&(console.log("Error: Editing task with id -1."),console.log(t)),this.modifyTask(t)):(console.log("Creating task"),delete t["id"],this.addTask(t))},async fetchTasks(){const t=await fetch("api/tasks"),e=await t.json();return e},async fetchTask(t){const e=await fetch(`api/tasks/${t}`),i=await e.json();return i},async addTask(t){const e=await fetch("api/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),i=await e.json();this.tasks=[...this.tasks,i],this.triggerToast("Task added.")},async deleteTask(t){if(console.log("PPanel delclick "+t),confirm("Are you sure?")){const e=await fetch(`api/tasks/${t}`,{method:"DELETE"});200===e.status?this.tasks=this.tasks.filter((e=>e.id!==t)):alert("Error Deleting This Task"),200===e.status&&this.triggerToast("Task deleted.")}},async modifyTask(t){const e=await fetch(`api/tasks/${t.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),i=await e.json();this.tasks=this.tasks.map((t=>t.id===i.id?{...t,...i}:t)),this.triggerToast("Task updated.")},triggerToast(t){this.showToast=!0,this.toastMessage=t,setTimeout((()=>{this.showToast=!1}),3e3)}},async mounted(){this.tasks=await this.fetchTasks()}});const pt=(0,p.Z)(ut,[["render",E],["__scopeId","data-v-b83a2d0a"]]);var ht=pt,mt=(0,s.aZ)({name:"App",components:{HelloWorld:m,PrimaryPanel:ht,TaskEditor:ct},data(){return{showTaskEditor:!1}},created(){console.log("App created")}});const kt=(0,p.Z)(mt,[["render",a]]);var gt=kt;(0,o.ri)(gt).mount("#app")}},e={};function i(o){var s=e[o];if(void 0!==s)return s.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,i),a.exports}i.m=t,function(){var t=[];i.O=function(e,o,s,a){if(!o){var l=1/0;for(c=0;c<t.length;c++){o=t[c][0],s=t[c][1],a=t[c][2];for(var n=!0,d=0;d<o.length;d++)(!1&a||l>=a)&&Object.keys(i.O).every((function(t){return i.O[t](o[d])}))?o.splice(d--,1):(n=!1,a<l&&(l=a));if(n){t.splice(c--,1);var r=s();void 0!==r&&(e=r)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[o,s,a]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,a,l=o[0],n=o[1],d=o[2],r=0;if(l.some((function(e){return 0!==t[e]}))){for(s in n)i.o(n,s)&&(i.m[s]=n[s]);if(d)var c=d(i)}for(e&&e(o);r<l.length;r++)a=l[r],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(c)},o=self["webpackChunkpr02_csds221"]=self["webpackChunkpr02_csds221"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(7539)}));o=i.O(o)})();
//# sourceMappingURL=app.36522ada.js.map