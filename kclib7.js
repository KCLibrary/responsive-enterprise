Object.extend(document, {
    isDocReady: false,
    isDocLoaded: false,
    ready: function(fn) { Event.observe(document, "doc:ready", fn); },
    load: function(fn) { Event.observe(document, "doc:loaded", fn); }
});
Event.observe(document, "dom:loaded", function() {
    Event.fire(document, "doc:ready");
    document.isDocReady = true;
    if (document.isDocLoaded)
        Event.fire(document, "doc:loaded");
});
Event.observe(window, "load", function() {
    document.isDocLoaded = true;
    if (!document.isDocReady) return;
    Event.fire(document, "doc:loaded");
});

document.observe("doc:ready", function(){
	document.head.insert('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1">');
});
document.observe("doc:loaded", function(){
    //alert("Loaded");
});
//document.ready(function(){ alert("Ready Too!"); });
//document.load(function(){ alert("Loaded Too!"); });

