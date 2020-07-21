#react简书项目实战

*redux执行流程：react首先要改变store里面的数据，
              要声明一个action(包含type处理的类型和value处理的数据)，
              action通过dispatch转发给store，
              store获取到action之后转发给reducer，
              reducer拿到之前的state和当前action做相应的处理，
              处理完之后返回新的state给store，
              最终store取得最新的数据之后，通知各个组件，
              组件通过subscribe订阅从store里面获取到最新的state数据,
              组件数据改变，页面重新渲染，redux执行流程完成。
