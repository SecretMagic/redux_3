export const saveState = (state) => {
    try {
        let data = JSON.stringify(state);
        if (data != undefined) {
            localStorage.setItem("defaultValue", data);
        }
    } catch (e) {
        console.log("存取错误")
    }
}

export const getState = () => {
    try {
        let data = localStorage.getItem("defaultValue");
        data = JSON.parse(data);
        if (data == null) {
            return undefined;
        }
        return data;
    } catch (e) {
        console.log("获取错误")
    }
}

// Provider

// context 上下文
// class  XXX  
// componentDidMount () {
//     const store = this.context.store;
//     this.unsubscribe = store.subscribe(() => {
//         this.forceUpdata();
//     });
// }
// componentWillUnmount () {
//     this.unsubscribe();
// }
// render
//action  所需内容
// const store = this.context.store;
// let state = store.getState();
// let {toDoList, filterText} = state;
// toDoList = filterToDoList(toDoList, filterText);
// const touchToDo = (id) => {
//     store.dispatch({
//         type: "TOUCH_TODO",
//         id: id
//     })
// }

// ToDoList.contextTypes = {
//     store: React.PropTypes.object
// };

// connect     将上部操作进行封装 返回包裹其组件的父组件  简化代码

// import {connect} from "react-redux";

//         let {toDoList, touchToDo} = this.props

// const mapStateToProps = (state) => {
//     return {
//         toDoList: filterToDoList(state.toDoList, state.filterText)
//     }
// }

// const mapDispatchToProps = (Dispatch) => {
//     return {
//         touchToDo: (id) => {
//             Dispatch(createTouchAction(id))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (ToDoList);
// lodash

// 利用其方法实现数据截流  配合localStorage

// 单页面应用 路由
// react - router
// Link