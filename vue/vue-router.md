#### vue中 hash模式和history模式的区别
1. hash模式中,url会夹杂着#号，而history模式没有
2. vue底层对它们的实现方式不同，hash是依靠onhashchange时间（监听location.hash的改变），而history模式是主要依靠html5 history新增的两个方法。pushState()可以改变url而不会发送请求，replaceState()可以读取历史记录栈，还可以对浏览器记录进行修改。
3. 当真正需要通过URL向后端发送http请求的时候，比如常见的用户手动输入URL后回车，或者是刷新（重启）浏览器，这时候history模式需要后端的支持。因为history模式下，前端URL必须和实际像后端发送请求的URL一致，例如有一个URL是带有路径path的（例如：www.lindaidai.wang/blog/id），如果后端没有对这个路径做处理的话，就会返回404.所以需要后端增加一个覆盖所有情况的候选资源，一般会配合前端给出一个404页面。


问题：用户在浏览器中输入url并回车后，经历了哪些