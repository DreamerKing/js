requestAnimationFrame 是为了实现更流畅和性能更好的动画；requestIdleCallback 是为了在渲染空闲时间执行优先级不高的操作，以避免阻塞渲染。它们都是由浏览器控制执行时机，而不是由开发者通过定时器控制。

cancelAnimationFrame()
cancelIdleCallback()
