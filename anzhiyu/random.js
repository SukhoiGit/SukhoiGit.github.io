var posts=["posts/dfa2d520.html","posts/6bb1d783.html","posts/47de4be2.html","posts/a1116f6.html","posts/c9a945f0.html","posts/aa55683f.html","posts/83897b92.html","posts/999a8fe.html","posts/fc4c1a2e.html","posts/a42a779d.html","posts/f6491cfb.html","posts/fc933cea.html","posts/5729df21.html","posts/6f2612a2.html","posts/c6e613d8.html","posts/9f572938.html","posts/99345e84.html","posts/c0c42fb6.html","posts/9f024484.html","posts/7da19302.html","posts/54d9f3d9.html","posts/23a3bd72.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };