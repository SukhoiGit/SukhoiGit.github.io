var posts=["posts/47de4be2.html","posts/999a8fe.html","posts/fc4c1a2e.html","posts/f6491cfb.html","posts/5729df21.html","posts/aa55683f.html","posts/99345e84.html","posts/23a3bd72.html","posts/7da19302.html","posts/c9a945f0.html","posts/6bb1d783.html","posts/a42a779d.html","posts/da56859f.html","posts/98480eac.html","posts/9f572938.html","posts/c943696a.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };