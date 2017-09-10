//存取localStorage中的数据（通过封装一个方法）
var store = {
	save(key,value){
		localStorage.setItem(key,JSON.stringify(value));
	},
	fetch(key){
		return JSON.parse(localStorage.getItem(key)) || [];
	}
}
//数据
//去除所有的值
var list = store.fetch("todolist-class");//从缓存中调用数据
/*var list = [{
		title:"吃饭打豆豆",
		isChecked:false //状态为false，为不选中  任务未完成
	},
	{
		title:"妙味课堂",
		isChecked:true   //状态为true，为选中    任务完成
	}];*/

//vm
var vm = new Vue({
	el:".main",
	data:{
		list:list,
		todo:'',
		edtorTodos:'',//记录正在编辑的数据
		beforeTitle:'',//记录正在编辑的数据的title
		visibility:"all"//通过这个属性值的变化，结合hash对数据进行筛选，默认值是all
	},
	watch:{
		/*list:function(){//监控list这个属性，当这个属性对应的值发生变化就会执行函数
			store.save("todolist-class",this.list);//浅监控，监控不到list里面各个对象中属性的变化
		}*/

		list:{//这里list是个对象
			handler:function(){
				store.save("todolist-class",this.list);
			},
			deep:true //深度监控
		}
	},
	computed:{
		noCheckedItem:function(){
			return this.list.filter(function(item){
						return item.isChecked === false;
				}).length;
		},
		filteredList:function(){//根据vm的visibility属性来过滤数据
			//按三种情况过滤：all,finished,unfinished
			var filter = {
				all:function(){
					return list;
				},
				finished:function(){
					return list.filter(function(item){
						return item.isChecked;
					})
				},
				unfinished:function(){
					return list.filter(function(item){
						return !item.isChecked;
					})
				}
			}//end filter
			//考虑到手工改动url栏里hash值的情况，这里加入了判断：找到了过滤函数，就返回过滤后的数据，否则返回所有的数据
			return filter[this.visibility] ? filter[this.visibility](list) : list;//这里写上(list)才能返回根据数据筛选的值
		}
	},
	methods:{
		addTodo(){//添加任务
			/*{
				title:
			}*/
				this.list.push({//往数组里添加任务，格式是个对象
					title:this.todo,//事件处理函数中的this指向的是，当前这个根实例，即new Vue
					isChecked:false
				}); 
				this.todo = '';
		},

		deleteTodo(todo){//删除任务
			var index = this.list.indexOf(todo);
			this.list.splice(index,1);
		},

		edtorTodo(todo){//编辑任务
			//编辑任务的时候，记录一下编辑这条任务的title，方便在取消编辑的时候还能用到原来的title，写在数据中：beforeTitle
			
			this.beforeTitle = todo.title;
			this.edtorTodos = todo;
		},

		edtorTodoed(todo){//编辑完成后失去焦点
			this.edtorTodos = '';
		},

		cancelTodo(todo){//取消编辑
			todo.title = this.beforeTitle;
			this.edtorTodoed(todo);
			this.beforeTitle = '';//之前记录的值已经没用了，重新设为空
		}
	},//end methods
		directives:{//自定义指令
			"foucs":{
				update(el,binding){//钩子函数
					//console.log(el);
					//console.log(binding);
					if(binding.value){
						el.focus();
					}
				}
			}//end focus
		}//end directives	
});

function watchHashChange(){
	var hash = window.location.hash.slice(1);//去掉#号
	vm.visibility = hash;//拿到去了#的hash值后改变实例的visibility属性值
}

watchHashChange();//一开始调用一下

window.addEventListener("hashchange",watchHashChange);//hash改变时调用一下