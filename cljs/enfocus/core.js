// Compiled by ClojureScript 0.0-2138
goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('goog.Timer');
goog.require('goog.dom.query');
goog.require('goog.async.Delay');
goog.require('goog.dom.classes');
goog.require('enfocus.enlive.syntax');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.events');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.async.Delay');
goog.require('goog.dom');
goog.require('enfocus.enlive.syntax');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('goog.Timer');
goog.require('domina.xpath');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('domina');
goog.require('goog.net.XhrIo');
goog.require('goog.style');
goog.require('goog.dom.query');
goog.require('domina.css');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('domina.xpath');
goog.require('domina.css');
enfocus.core.ISelector = (function (){var obj26300 = {};return obj26300;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__4381__auto__ = this$;if(and__4381__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__4381__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__5014__auto__ = (((this$ == null))?null:this$);return (function (){var or__4393__auto__ = (enfocus.core.select[goog.typeOf(x__5014__auto__)]);if(or__4393__auto__)
{return or__4393__auto__;
} else
{var or__4393__auto____$1 = (enfocus.core.select["_"]);if(or__4393__auto____$1)
{return or__4393__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__4381__auto__ = this$;if(and__4381__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__4381__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__5014__auto__ = (((this$ == null))?null:this$);return (function (){var or__4393__auto__ = (enfocus.core.select[goog.typeOf(x__5014__auto__)]);if(or__4393__auto__)
{return or__4393__auto__;
} else
{var or__4393__auto____$1 = (enfocus.core.select["_"]);if(or__4393__auto____$1)
{return or__4393__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__4381__auto__ = this$;if(and__4381__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__4381__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__5014__auto__ = (((this$ == null))?null:this$);return (function (){var or__4393__auto__ = (enfocus.core.select[goog.typeOf(x__5014__auto__)]);if(or__4393__auto__)
{return or__4393__auto__;
} else
{var or__4393__auto____$1 = (enfocus.core.select["_"]);if(or__4393__auto____$1)
{return or__4393__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root,id_mask);
}
});
select = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return select__1.call(this,this$);
case 2:
return select__2.call(this,this$,root);
case 3:
return select__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select.cljs$core$IFn$_invoke$arity$1 = select__1;
select.cljs$core$IFn$_invoke$arity$2 = select__2;
select.cljs$core$IFn$_invoke$arity$3 = select__3;
return select;
})()
;
enfocus.core.ITransform = (function (){var obj26302 = {};return obj26302;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__4381__auto__ = this$;if(and__4381__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__4381__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__5014__auto__ = (((this$ == null))?null:this$);return (function (){var or__4393__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__5014__auto__)]);if(or__4393__auto__)
{return or__4393__auto__;
} else
{var or__4393__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__4393__auto____$1)
{return or__4393__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__4381__auto__ = this$;if(and__4381__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__4381__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__5014__auto__ = (((this$ == null))?null:this$);return (function (){var or__4393__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__5014__auto__)]);if(or__4393__auto__)
{return or__4393__auto__;
} else
{var or__4393__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__4393__auto____$1)
{return or__4393__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes,callback);
}
});
apply_transform = function(this$,nodes,callback){
switch(arguments.length){
case 2:
return apply_transform__2.call(this,this$,nodes);
case 3:
return apply_transform__3.call(this,this$,nodes,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply_transform.cljs$core$IFn$_invoke$arity$2 = apply_transform__2;
apply_transform.cljs$core$IFn$_invoke$arity$3 = apply_transform__3;
return apply_transform;
})()
;
enfocus.core.debug = true;
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__4381__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__4381__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__4381__auto__;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
enfocus.core.setTimeout = (function setTimeout(func,ttime){return goog.Timer.callOnce(func,ttime);
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){return goog.dom.isNodeLike(tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){return (tst instanceof NodeList);
});
/**
* coverts a nodelist, node into a collection
*/
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){if(cljs.core._EQ_.call(null,nl,window))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl], null);
} else
{return domina.nodes.call(null,nl);
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__26303_SHARP_){if(typeof p1__26303_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__26303_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__26303_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__26310_26316 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__26311_26317 = null;var count__26312_26318 = 0;var i__26313_26319 = 0;while(true){
if((i__26313_26319 < count__26312_26318))
{var vec__26314_26320 = cljs.core._nth.call(null,chunk__26311_26317,i__26313_26319);var attr_26321 = cljs.core.nth.call(null,vec__26314_26320,0,null);var value_26322 = cljs.core.nth.call(null,vec__26314_26320,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_26321),value_26322);
{
var G__26323 = seq__26310_26316;
var G__26324 = chunk__26311_26317;
var G__26325 = count__26312_26318;
var G__26326 = (i__26313_26319 + 1);
seq__26310_26316 = G__26323;
chunk__26311_26317 = G__26324;
count__26312_26318 = G__26325;
i__26313_26319 = G__26326;
continue;
}
} else
{var temp__4092__auto___26327 = cljs.core.seq.call(null,seq__26310_26316);if(temp__4092__auto___26327)
{var seq__26310_26328__$1 = temp__4092__auto___26327;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26310_26328__$1))
{var c__5135__auto___26329 = cljs.core.chunk_first.call(null,seq__26310_26328__$1);{
var G__26330 = cljs.core.chunk_rest.call(null,seq__26310_26328__$1);
var G__26331 = c__5135__auto___26329;
var G__26332 = cljs.core.count.call(null,c__5135__auto___26329);
var G__26333 = 0;
seq__26310_26316 = G__26330;
chunk__26311_26317 = G__26331;
count__26312_26318 = G__26332;
i__26313_26319 = G__26333;
continue;
}
} else
{var vec__26315_26334 = cljs.core.first.call(null,seq__26310_26328__$1);var attr_26335 = cljs.core.nth.call(null,vec__26315_26334,0,null);var value_26336 = cljs.core.nth.call(null,vec__26315_26334,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_26335),value_26336);
{
var G__26337 = cljs.core.next.call(null,seq__26310_26328__$1);
var G__26338 = null;
var G__26339 = 0;
var G__26340 = 0;
seq__26310_26316 = G__26337;
chunk__26311_26317 = G__26338;
count__26312_26318 = G__26339;
i__26313_26319 = G__26340;
continue;
}
}
} else
{}
}
break;
}
return obj;
});
/**
* removes the property value from an elements style obj.
*/
enfocus.core.style_remove = (function style_remove(obj,values){var seq__26345 = cljs.core.seq.call(null,values);var chunk__26346 = null;var count__26347 = 0;var i__26348 = 0;while(true){
if((i__26348 < count__26347))
{var attr = cljs.core._nth.call(null,chunk__26346,i__26348);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__26349 = seq__26345;
var G__26350 = chunk__26346;
var G__26351 = count__26347;
var G__26352 = (i__26348 + 1);
seq__26345 = G__26349;
chunk__26346 = G__26350;
count__26347 = G__26351;
i__26348 = G__26352;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26345);if(temp__4092__auto__)
{var seq__26345__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26345__$1))
{var c__5135__auto__ = cljs.core.chunk_first.call(null,seq__26345__$1);{
var G__26353 = cljs.core.chunk_rest.call(null,seq__26345__$1);
var G__26354 = c__5135__auto__;
var G__26355 = cljs.core.count.call(null,c__5135__auto__);
var G__26356 = 0;
seq__26345 = G__26353;
chunk__26346 = G__26354;
count__26347 = G__26355;
i__26348 = G__26356;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__26345__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__26357 = cljs.core.next.call(null,seq__26345__$1);
var G__26358 = null;
var G__26359 = 0;
var G__26360 = 0;
seq__26345 = G__26357;
chunk__26346 = G__26358;
count__26347 = G__26359;
i__26348 = G__26360;
continue;
}
}
} else
{return null;
}
}
break;
}
});
enfocus.core.get_eff_prop_name = (function get_eff_prop_name(etype){return [cljs.core.str("__ef_effect_"),cljs.core.str(etype)].join('');
});
enfocus.core.get_mills = (function get_mills(){return (new Date()).getMilliseconds();
});
enfocus.core.pix_round = (function pix_round(step){if((step < 0))
{return Math.floor.call(null,step);
} else
{return Math.ceil.call(null,step);
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__2 = (function (elem,ats){if(cljs.core.truth_(elem))
{if(cljs.core.map_QMARK_.call(null,ats))
{var seq__26367_26373 = cljs.core.seq.call(null,ats);var chunk__26368_26374 = null;var count__26369_26375 = 0;var i__26370_26376 = 0;while(true){
if((i__26370_26376 < count__26369_26375))
{var vec__26371_26377 = cljs.core._nth.call(null,chunk__26368_26374,i__26370_26376);var k_26378 = cljs.core.nth.call(null,vec__26371_26377,0,null);var v_26379 = cljs.core.nth.call(null,vec__26371_26377,1,null);add_map_attrs.call(null,elem,k_26378,v_26379);
{
var G__26380 = seq__26367_26373;
var G__26381 = chunk__26368_26374;
var G__26382 = count__26369_26375;
var G__26383 = (i__26370_26376 + 1);
seq__26367_26373 = G__26380;
chunk__26368_26374 = G__26381;
count__26369_26375 = G__26382;
i__26370_26376 = G__26383;
continue;
}
} else
{var temp__4092__auto___26384 = cljs.core.seq.call(null,seq__26367_26373);if(temp__4092__auto___26384)
{var seq__26367_26385__$1 = temp__4092__auto___26384;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26367_26385__$1))
{var c__5135__auto___26386 = cljs.core.chunk_first.call(null,seq__26367_26385__$1);{
var G__26387 = cljs.core.chunk_rest.call(null,seq__26367_26385__$1);
var G__26388 = c__5135__auto___26386;
var G__26389 = cljs.core.count.call(null,c__5135__auto___26386);
var G__26390 = 0;
seq__26367_26373 = G__26387;
chunk__26368_26374 = G__26388;
count__26369_26375 = G__26389;
i__26370_26376 = G__26390;
continue;
}
} else
{var vec__26372_26391 = cljs.core.first.call(null,seq__26367_26385__$1);var k_26392 = cljs.core.nth.call(null,vec__26372_26391,0,null);var v_26393 = cljs.core.nth.call(null,vec__26372_26391,1,null);add_map_attrs.call(null,elem,k_26392,v_26393);
{
var G__26394 = cljs.core.next.call(null,seq__26367_26385__$1);
var G__26395 = null;
var G__26396 = 0;
var G__26397 = 0;
seq__26367_26373 = G__26394;
chunk__26368_26374 = G__26395;
count__26369_26375 = G__26396;
i__26370_26376 = G__26397;
continue;
}
}
} else
{}
}
break;
}
return elem;
} else
{return null;
}
} else
{return null;
}
});
var add_map_attrs__3 = (function (elem,k,v){elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case 2:
return add_map_attrs__2.call(this,elem,k);
case 3:
return add_map_attrs__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_map_attrs.cljs$core$IFn$_invoke$arity$2 = add_map_attrs__2;
add_map_attrs.cljs$core$IFn$_invoke$arity$3 = add_map_attrs__3;
return add_map_attrs;
})()
;
/**
* this is incremented everytime a remote template is loaded and decremented when
* it is added to the dom cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,0);
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
enfocus.core.hide_style = new cljs.core.PersistentArrayMap(null, 1, ["style","display: none; width: 0px; height: 0px"], null).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){var div = goog.dom.createDom("div",enfocus.core.hide_style);if(cljs.core._EQ_.call(null,child.nodeType,11))
{goog.dom.appendChild(div,child);
} else
{enfocus.core.log_debug.call(null,cljs.core.count.call(null,domina.nodes.call(null,child)));
var seq__26402_26406 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__26403_26407 = null;var count__26404_26408 = 0;var i__26405_26409 = 0;while(true){
if((i__26405_26409 < count__26404_26408))
{var node_26410 = cljs.core._nth.call(null,chunk__26403_26407,i__26405_26409);goog.dom.appendChild(div,node_26410);
{
var G__26411 = seq__26402_26406;
var G__26412 = chunk__26403_26407;
var G__26413 = count__26404_26408;
var G__26414 = (i__26405_26409 + 1);
seq__26402_26406 = G__26411;
chunk__26403_26407 = G__26412;
count__26404_26408 = G__26413;
i__26405_26409 = G__26414;
continue;
}
} else
{var temp__4092__auto___26415 = cljs.core.seq.call(null,seq__26402_26406);if(temp__4092__auto___26415)
{var seq__26402_26416__$1 = temp__4092__auto___26415;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26402_26416__$1))
{var c__5135__auto___26417 = cljs.core.chunk_first.call(null,seq__26402_26416__$1);{
var G__26418 = cljs.core.chunk_rest.call(null,seq__26402_26416__$1);
var G__26419 = c__5135__auto___26417;
var G__26420 = cljs.core.count.call(null,c__5135__auto___26417);
var G__26421 = 0;
seq__26402_26406 = G__26418;
chunk__26403_26407 = G__26419;
count__26404_26408 = G__26420;
i__26405_26409 = G__26421;
continue;
}
} else
{var node_26422 = cljs.core.first.call(null,seq__26402_26416__$1);goog.dom.appendChild(div,node_26422);
{
var G__26423 = cljs.core.next.call(null,seq__26402_26416__$1);
var G__26424 = null;
var G__26425 = 0;
var G__26426 = 0;
seq__26402_26406 = G__26423;
chunk__26403_26407 = G__26424;
count__26404_26408 = G__26425;
i__26405_26409 = G__26426;
continue;
}
}
} else
{}
}
break;
}
}
goog.dom.appendChild(goog.dom.getDocument().documentElement,div);
return div;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){var child = div.childNodes;var frag = document.createDocumentFragment();goog.dom.append(frag,child);
goog.dom.removeNode(div);
return frag;
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function() {
var replace_ids = null;
var replace_ids__1 = (function (text){return replace_ids.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.gensym.call(null,"id"))),cljs.core.str("_")].join(''),text);
});
var replace_ids__2 = (function (id_mask,text){var re = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_mask,text.replace(re,(function (a,b,c,d){return [cljs.core.str(b),cljs.core.str(id_mask),cljs.core.str(c),cljs.core.str(d)].join('');
}))], null);
});
replace_ids = function(id_mask,text){
switch(arguments.length){
case 1:
return replace_ids__1.call(this,id_mask);
case 2:
return replace_ids__2.call(this,id_mask,text);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace_ids.cljs$core$IFn$_invoke$arity$1 = replace_ids__1;
replace_ids.cljs$core$IFn$_invoke$arity$2 = replace_ids__2;
return replace_ids;
})()
;
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__26427_SHARP_){var id = p1__26427_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__26427_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__26429 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__26429,0,null);var txt = cljs.core.nth.call(null,vec__26429,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
});})(req))
;goog.events.listen(req,goog.net.EventType.COMPLETE,(function (){callback.call(null,req);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req.send(uri,"GET");
} else
{return null;
}
});
enfocus.core.html_to_dom = (function html_to_dom(html){var dfa = enfocus.core.nodes__GT_coll.call(null,domina.html_to_dom.call(null,html));var frag = document.createDocumentFragment();enfocus.core.log_debug.call(null,cljs.core.count.call(null,dfa));
var seq__26434_26438 = cljs.core.seq.call(null,dfa);var chunk__26435_26439 = null;var count__26436_26440 = 0;var i__26437_26441 = 0;while(true){
if((i__26437_26441 < count__26436_26440))
{var df_26442 = cljs.core._nth.call(null,chunk__26435_26439,i__26437_26441);goog.dom.append(frag,df_26442);
{
var G__26443 = seq__26434_26438;
var G__26444 = chunk__26435_26439;
var G__26445 = count__26436_26440;
var G__26446 = (i__26437_26441 + 1);
seq__26434_26438 = G__26443;
chunk__26435_26439 = G__26444;
count__26436_26440 = G__26445;
i__26437_26441 = G__26446;
continue;
}
} else
{var temp__4092__auto___26447 = cljs.core.seq.call(null,seq__26434_26438);if(temp__4092__auto___26447)
{var seq__26434_26448__$1 = temp__4092__auto___26447;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26434_26448__$1))
{var c__5135__auto___26449 = cljs.core.chunk_first.call(null,seq__26434_26448__$1);{
var G__26450 = cljs.core.chunk_rest.call(null,seq__26434_26448__$1);
var G__26451 = c__5135__auto___26449;
var G__26452 = cljs.core.count.call(null,c__5135__auto___26449);
var G__26453 = 0;
seq__26434_26438 = G__26450;
chunk__26435_26439 = G__26451;
count__26436_26440 = G__26452;
i__26437_26441 = G__26453;
continue;
}
} else
{var df_26454 = cljs.core.first.call(null,seq__26434_26448__$1);goog.dom.append(frag,df_26454);
{
var G__26455 = cljs.core.next.call(null,seq__26434_26448__$1);
var G__26456 = null;
var G__26457 = 0;
var G__26458 = 0;
seq__26434_26438 = G__26455;
chunk__26435_26439 = G__26456;
count__26436_26440 = G__26457;
i__26437_26441 = G__26458;
continue;
}
}
} else
{}
}
break;
}
return frag;
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){var nod = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);if(cljs.core.truth_(nod))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nod),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,nod))], null);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){var sel_str = enfocus.core.create_sel_str.call(null,sel);var cache = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''));if(cljs.core.truth_(cache))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cache),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,cache))], null);
} else
{var vec__26461 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__26461,0,null);var tdom = cljs.core.nth.call(null,vec__26461,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26461,sym,tdom,dom,tsnip){
return (function (p1__26459_SHARP_){return p1__26459_SHARP_.outerHTML;
});})(vec__26461,sym,tdom,dom,tsnip))
,tsnip));enfocus.core.remove_node_return_child.call(null,dom);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,html_snip], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,enfocus.core.html_to_dom.call(null,html_snip)], null);
}
});
/**
* wrapper function for extractors that maps the extraction to all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){var trans = (function trans(pnodes){var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);var result = cljs.core.map.call(null,func,pnod_col);if((cljs.core.count.call(null,result) <= 1))
{return cljs.core.first.call(null,result);
} else
{return result;
}
});if(typeof enfocus.core.t26465 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t26465 = (function (trans,func,extr_multi_node,meta26466){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta26466 = meta26466;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t26465.cljs$lang$type = true;
enfocus.core.t26465.cljs$lang$ctorStr = "enfocus.core/t26465";
enfocus.core.t26465.cljs$lang$ctorPrWriter = (function (this__4955__auto__,writer__4956__auto__,opt__4957__auto__){return cljs.core._write.call(null,writer__4956__auto__,"enfocus.core/t26465");
});
enfocus.core.t26465.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t26465.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t26465.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t26465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26467){var self__ = this;
var _26467__$1 = this;return self__.meta26466;
});
enfocus.core.t26465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26467,meta26466__$1){var self__ = this;
var _26467__$1 = this;return (new enfocus.core.t26465(self__.trans,self__.func,self__.extr_multi_node,meta26466__$1));
});
enfocus.core.__GT_t26465 = (function __GT_t26465(trans__$1,func__$1,extr_multi_node__$1,meta26466){return (new enfocus.core.t26465(trans__$1,func__$1,extr_multi_node__$1,meta26466));
});
}
return (new enfocus.core.t26465(trans,func,extr_multi_node,null));
});
/**
* Allows standard domina functions to be chainable
*/
enfocus.core.multi_node_chain = (function() {
var multi_node_chain = null;
var multi_node_chain__1 = (function (func){var trans = (function (nodes,chain){var val = func.call(null,nodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t26475 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t26475 = (function (trans,func,multi_node_chain,meta26476){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta26476 = meta26476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t26475.cljs$lang$type = true;
enfocus.core.t26475.cljs$lang$ctorStr = "enfocus.core/t26475";
enfocus.core.t26475.cljs$lang$ctorPrWriter = (function (this__4955__auto__,writer__4956__auto__,opt__4957__auto__){return cljs.core._write.call(null,writer__4956__auto__,"enfocus.core/t26475");
});
enfocus.core.t26475.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t26475.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t26475.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t26475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26477){var self__ = this;
var _26477__$1 = this;return self__.meta26476;
});
enfocus.core.t26475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26477,meta26476__$1){var self__ = this;
var _26477__$1 = this;return (new enfocus.core.t26475(self__.trans,self__.func,self__.multi_node_chain,meta26476__$1));
});
enfocus.core.__GT_t26475 = (function __GT_t26475(trans__$1,func__$1,multi_node_chain__$1,meta26476){return (new enfocus.core.t26475(trans__$1,func__$1,multi_node_chain__$1,meta26476));
});
}
return (new enfocus.core.t26475(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__26468_SHARP_){return domina.nodes.call(null,p1__26468_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t26478 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t26478 = (function (trans,func,values,multi_node_chain,meta26479){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta26479 = meta26479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t26478.cljs$lang$type = true;
enfocus.core.t26478.cljs$lang$ctorStr = "enfocus.core/t26478";
enfocus.core.t26478.cljs$lang$ctorPrWriter = (function (this__4955__auto__,writer__4956__auto__,opt__4957__auto__){return cljs.core._write.call(null,writer__4956__auto__,"enfocus.core/t26478");
});
enfocus.core.t26478.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t26478.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t26478.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t26478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26480){var self__ = this;
var _26480__$1 = this;return self__.meta26479;
});
enfocus.core.t26478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26480,meta26479__$1){var self__ = this;
var _26480__$1 = this;return (new enfocus.core.t26478(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta26479__$1));
});
enfocus.core.__GT_t26478 = (function __GT_t26478(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta26479){return (new enfocus.core.t26478(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta26479));
});
}
return (new enfocus.core.t26478(trans,func,values,multi_node_chain,null));
});
multi_node_chain = function(values,func){
switch(arguments.length){
case 1:
return multi_node_chain__1.call(this,values);
case 2:
return multi_node_chain__2.call(this,values,func);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_node_chain.cljs$core$IFn$_invoke$arity$1 = multi_node_chain__1;
multi_node_chain.cljs$core$IFn$_invoke$arity$2 = multi_node_chain__2;
return multi_node_chain;
})()
;
/**
* Replaces the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.content = (function() { 
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__26481_SHARP_,p2__26482_SHARP_){domina.destroy_children_BANG_.call(null,p1__26481_SHARP_);
return domina.append_BANG_.call(null,p1__26481_SHARP_,p2__26482_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__26483){
var values = cljs.core.seq(arglist__26483);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__26484_SHARP_){return domina.set_html_BANG_.call(null,p1__26484_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__26485_SHARP_){var seq__26492 = cljs.core.seq.call(null,pairs);var chunk__26493 = null;var count__26494 = 0;var i__26495 = 0;while(true){
if((i__26495 < count__26494))
{var vec__26496 = cljs.core._nth.call(null,chunk__26493,i__26495);var name = cljs.core.nth.call(null,vec__26496,0,null);var value = cljs.core.nth.call(null,vec__26496,1,null);domina.set_attr_BANG_.call(null,p1__26485_SHARP_,name,value);
{
var G__26498 = seq__26492;
var G__26499 = chunk__26493;
var G__26500 = count__26494;
var G__26501 = (i__26495 + 1);
seq__26492 = G__26498;
chunk__26493 = G__26499;
count__26494 = G__26500;
i__26495 = G__26501;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26492);if(temp__4092__auto__)
{var seq__26492__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26492__$1))
{var c__5135__auto__ = cljs.core.chunk_first.call(null,seq__26492__$1);{
var G__26502 = cljs.core.chunk_rest.call(null,seq__26492__$1);
var G__26503 = c__5135__auto__;
var G__26504 = cljs.core.count.call(null,c__5135__auto__);
var G__26505 = 0;
seq__26492 = G__26502;
chunk__26493 = G__26503;
count__26494 = G__26504;
i__26495 = G__26505;
continue;
}
} else
{var vec__26497 = cljs.core.first.call(null,seq__26492__$1);var name = cljs.core.nth.call(null,vec__26497,0,null);var value = cljs.core.nth.call(null,vec__26497,1,null);domina.set_attr_BANG_.call(null,p1__26485_SHARP_,name,value);
{
var G__26506 = cljs.core.next.call(null,seq__26492__$1);
var G__26507 = null;
var G__26508 = 0;
var G__26509 = 0;
seq__26492 = G__26506;
chunk__26493 = G__26507;
count__26494 = G__26508;
i__26495 = G__26509;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var set_attr = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_attr__delegate.call(this,values);};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__26510){
var values = cljs.core.seq(arglist__26510);
return set_attr__delegate(values);
});
set_attr.cljs$core$IFn$_invoke$arity$variadic = set_attr__delegate;
return set_attr;
})()
;
/**
* Dissocs attributes on the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_attr = (function() { 
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__26511_SHARP_){var seq__26516 = cljs.core.seq.call(null,values);var chunk__26517 = null;var count__26518 = 0;var i__26519 = 0;while(true){
if((i__26519 < count__26518))
{var name = cljs.core._nth.call(null,chunk__26517,i__26519);domina.remove_attr_BANG_.call(null,p1__26511_SHARP_,name);
{
var G__26520 = seq__26516;
var G__26521 = chunk__26517;
var G__26522 = count__26518;
var G__26523 = (i__26519 + 1);
seq__26516 = G__26520;
chunk__26517 = G__26521;
count__26518 = G__26522;
i__26519 = G__26523;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26516);if(temp__4092__auto__)
{var seq__26516__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26516__$1))
{var c__5135__auto__ = cljs.core.chunk_first.call(null,seq__26516__$1);{
var G__26524 = cljs.core.chunk_rest.call(null,seq__26516__$1);
var G__26525 = c__5135__auto__;
var G__26526 = cljs.core.count.call(null,c__5135__auto__);
var G__26527 = 0;
seq__26516 = G__26524;
chunk__26517 = G__26525;
count__26518 = G__26526;
i__26519 = G__26527;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__26516__$1);domina.remove_attr_BANG_.call(null,p1__26511_SHARP_,name);
{
var G__26528 = cljs.core.next.call(null,seq__26516__$1);
var G__26529 = null;
var G__26530 = 0;
var G__26531 = 0;
seq__26516 = G__26528;
chunk__26517 = G__26529;
count__26518 = G__26530;
i__26519 = G__26531;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var remove_attr = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_attr__delegate.call(this,values);};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__26532){
var values = cljs.core.seq(arglist__26532);
return remove_attr__delegate(values);
});
remove_attr.cljs$core$IFn$_invoke$arity$variadic = remove_attr__delegate;
return remove_attr;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.set_prop = (function() { 
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__26535){var vec__26536 = p__26535;var n = cljs.core.nth.call(null,vec__26536,0,null);var v = cljs.core.nth.call(null,vec__26536,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__26537){
var forms = cljs.core.seq(arglist__26537);
return set_prop__delegate(forms);
});
set_prop.cljs$core$IFn$_invoke$arity$variadic = set_prop__delegate;
return set_prop;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){return goog.dom.classes.hasClass(el,cls);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.add_class = (function() { 
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__26538_SHARP_){var seq__26543 = cljs.core.seq.call(null,values);var chunk__26544 = null;var count__26545 = 0;var i__26546 = 0;while(true){
if((i__26546 < count__26545))
{var val = cljs.core._nth.call(null,chunk__26544,i__26546);domina.add_class_BANG_.call(null,p1__26538_SHARP_,val);
{
var G__26547 = seq__26543;
var G__26548 = chunk__26544;
var G__26549 = count__26545;
var G__26550 = (i__26546 + 1);
seq__26543 = G__26547;
chunk__26544 = G__26548;
count__26545 = G__26549;
i__26546 = G__26550;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26543);if(temp__4092__auto__)
{var seq__26543__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26543__$1))
{var c__5135__auto__ = cljs.core.chunk_first.call(null,seq__26543__$1);{
var G__26551 = cljs.core.chunk_rest.call(null,seq__26543__$1);
var G__26552 = c__5135__auto__;
var G__26553 = cljs.core.count.call(null,c__5135__auto__);
var G__26554 = 0;
seq__26543 = G__26551;
chunk__26544 = G__26552;
count__26545 = G__26553;
i__26546 = G__26554;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__26543__$1);domina.add_class_BANG_.call(null,p1__26538_SHARP_,val);
{
var G__26555 = cljs.core.next.call(null,seq__26543__$1);
var G__26556 = null;
var G__26557 = 0;
var G__26558 = 0;
seq__26543 = G__26555;
chunk__26544 = G__26556;
count__26545 = G__26557;
i__26546 = G__26558;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var add_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return add_class__delegate.call(this,values);};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__26559){
var values = cljs.core.seq(arglist__26559);
return add_class__delegate(values);
});
add_class.cljs$core$IFn$_invoke$arity$variadic = add_class__delegate;
return add_class;
})()
;
/**
* Removes the specified classes from the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_class = (function() { 
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__26560_SHARP_){var seq__26565 = cljs.core.seq.call(null,values);var chunk__26566 = null;var count__26567 = 0;var i__26568 = 0;while(true){
if((i__26568 < count__26567))
{var val = cljs.core._nth.call(null,chunk__26566,i__26568);domina.remove_class_BANG_.call(null,p1__26560_SHARP_,val);
{
var G__26569 = seq__26565;
var G__26570 = chunk__26566;
var G__26571 = count__26567;
var G__26572 = (i__26568 + 1);
seq__26565 = G__26569;
chunk__26566 = G__26570;
count__26567 = G__26571;
i__26568 = G__26572;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26565);if(temp__4092__auto__)
{var seq__26565__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26565__$1))
{var c__5135__auto__ = cljs.core.chunk_first.call(null,seq__26565__$1);{
var G__26573 = cljs.core.chunk_rest.call(null,seq__26565__$1);
var G__26574 = c__5135__auto__;
var G__26575 = cljs.core.count.call(null,c__5135__auto__);
var G__26576 = 0;
seq__26565 = G__26573;
chunk__26566 = G__26574;
count__26567 = G__26575;
i__26568 = G__26576;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__26565__$1);domina.remove_class_BANG_.call(null,p1__26560_SHARP_,val);
{
var G__26577 = cljs.core.next.call(null,seq__26565__$1);
var G__26578 = null;
var G__26579 = 0;
var G__26580 = 0;
seq__26565 = G__26577;
chunk__26566 = G__26578;
count__26567 = G__26579;
i__26568 = G__26580;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var remove_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_class__delegate.call(this,values);};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__26581){
var values = cljs.core.seq(arglist__26581);
return remove_class__delegate(values);
});
remove_class.cljs$core$IFn$_invoke$arity$variadic = remove_class__delegate;
return remove_class;
})()
;
/**
* Sets the specified classes on the selected element
* @param {...*} var_args
*/
enfocus.core.set_class = (function() { 
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__26582_SHARP_){return domina.set_classes_BANG_.call(null,p1__26582_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__26583){
var values = cljs.core.seq(arglist__26583);
return set_class__delegate(values);
});
set_class.cljs$core$IFn$_invoke$arity$variadic = set_class__delegate;
return set_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.do__GT_ = (function() { 
var do__GT___delegate = function (forms){return (function (pnod){var seq__26588 = cljs.core.seq.call(null,forms);var chunk__26589 = null;var count__26590 = 0;var i__26591 = 0;while(true){
if((i__26591 < count__26590))
{var fun = cljs.core._nth.call(null,chunk__26589,i__26591);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__26592 = seq__26588;
var G__26593 = chunk__26589;
var G__26594 = count__26590;
var G__26595 = (i__26591 + 1);
seq__26588 = G__26592;
chunk__26589 = G__26593;
count__26590 = G__26594;
i__26591 = G__26595;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26588);if(temp__4092__auto__)
{var seq__26588__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26588__$1))
{var c__5135__auto__ = cljs.core.chunk_first.call(null,seq__26588__$1);{
var G__26596 = cljs.core.chunk_rest.call(null,seq__26588__$1);
var G__26597 = c__5135__auto__;
var G__26598 = cljs.core.count.call(null,c__5135__auto__);
var G__26599 = 0;
seq__26588 = G__26596;
chunk__26589 = G__26597;
count__26590 = G__26598;
i__26591 = G__26599;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__26588__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__26600 = cljs.core.next.call(null,seq__26588__$1);
var G__26601 = null;
var G__26602 = 0;
var G__26603 = 0;
seq__26588 = G__26600;
chunk__26589 = G__26601;
count__26590 = G__26602;
i__26591 = G__26603;
continue;
}
}
} else
{return null;
}
}
break;
}
});
};
var do__GT_ = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do__GT___delegate.call(this,forms);};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__26604){
var forms = cljs.core.seq(arglist__26604);
return do__GT___delegate(forms);
});
do__GT_.cljs$core$IFn$_invoke$arity$variadic = do__GT___delegate;
return do__GT_;
})()
;
/**
* Appends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.append = (function() { 
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__26605_SHARP_,p2__26606_SHARP_){return domina.append_BANG_.call(null,p1__26605_SHARP_,p2__26606_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__26607){
var values = cljs.core.seq(arglist__26607);
return append__delegate(values);
});
append.cljs$core$IFn$_invoke$arity$variadic = append__delegate;
return append;
})()
;
/**
* Prepends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.prepend = (function() { 
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__26608_SHARP_,p2__26609_SHARP_){return domina.prepend_BANG_.call(null,p1__26608_SHARP_,p2__26609_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__26610){
var values = cljs.core.seq(arglist__26610);
return prepend__delegate(values);
});
prepend.cljs$core$IFn$_invoke$arity$variadic = prepend__delegate;
return prepend;
})()
;
/**
* inserts the content before the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.before = (function() { 
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__26611_SHARP_,p2__26612_SHARP_){return domina.insert_before_BANG_.call(null,p1__26611_SHARP_,p2__26612_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__26613){
var values = cljs.core.seq(arglist__26613);
return before__delegate(values);
});
before.cljs$core$IFn$_invoke$arity$variadic = before__delegate;
return before;
})()
;
/**
* inserts the content after the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.after = (function() { 
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__26614_SHARP_,p2__26615_SHARP_){return domina.insert_after_BANG_.call(null,p1__26614_SHARP_,p2__26615_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__26616){
var values = cljs.core.seq(arglist__26616);
return after__delegate(values);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
/**
* substitutes the content for the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.substitute = (function() { 
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__26617_SHARP_,p2__26618_SHARP_){return domina.swap_content_BANG_.call(null,p1__26617_SHARP_,p2__26618_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__26619){
var values = cljs.core.seq(arglist__26619);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__26620_SHARP_){return domina.detach_BANG_.call(null,p1__26620_SHARP_);
}));
});
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.wrap = (function wrap(elm,mattr){return (function (pnod){var elem = goog.dom.createElement(cljs.core.name.call(null,elm));enfocus.core.add_map_attrs.call(null,elem,mattr);
enfocus.core.at.call(null,elem,enfocus.core.content.call(null,pnod.cloneNode(true)));
return enfocus.core.at.call(null,pnod,enfocus.core.do__GT_.call(null,enfocus.core.after.call(null,elem),enfocus.core.remove_node.call(null)));
});
});
/**
* replaces a node with all its children
*/
enfocus.core.unwrap = (function unwrap(){return (function (pnod){var frag = document.createDocumentFragment();goog.dom.append(frag,pnod.childNodes);
return goog.dom.replaceNode(frag,pnod);
});
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.set_style = (function() { 
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__26621_SHARP_){var seq__26628 = cljs.core.seq.call(null,pairs);var chunk__26629 = null;var count__26630 = 0;var i__26631 = 0;while(true){
if((i__26631 < count__26630))
{var vec__26632 = cljs.core._nth.call(null,chunk__26629,i__26631);var name = cljs.core.nth.call(null,vec__26632,0,null);var value = cljs.core.nth.call(null,vec__26632,1,null);domina.set_style_BANG_.call(null,p1__26621_SHARP_,name,value);
{
var G__26634 = seq__26628;
var G__26635 = chunk__26629;
var G__26636 = count__26630;
var G__26637 = (i__26631 + 1);
seq__26628 = G__26634;
chunk__26629 = G__26635;
count__26630 = G__26636;
i__26631 = G__26637;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26628);if(temp__4092__auto__)
{var seq__26628__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26628__$1))
{var c__5135__auto__ = cljs.core.chunk_first.call(null,seq__26628__$1);{
var G__26638 = cljs.core.chunk_rest.call(null,seq__26628__$1);
var G__26639 = c__5135__auto__;
var G__26640 = cljs.core.count.call(null,c__5135__auto__);
var G__26641 = 0;
seq__26628 = G__26638;
chunk__26629 = G__26639;
count__26630 = G__26640;
i__26631 = G__26641;
continue;
}
} else
{var vec__26633 = cljs.core.first.call(null,seq__26628__$1);var name = cljs.core.nth.call(null,vec__26633,0,null);var value = cljs.core.nth.call(null,vec__26633,1,null);domina.set_style_BANG_.call(null,p1__26621_SHARP_,name,value);
{
var G__26642 = cljs.core.next.call(null,seq__26628__$1);
var G__26643 = null;
var G__26644 = 0;
var G__26645 = 0;
seq__26628 = G__26642;
chunk__26629 = G__26643;
count__26630 = G__26644;
i__26631 = G__26645;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var set_style = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_style__delegate.call(this,values);};
set_style.cljs$lang$maxFixedArity = 0;
set_style.cljs$lang$applyTo = (function (arglist__26646){
var values = cljs.core.seq(arglist__26646);
return set_style__delegate(values);
});
set_style.cljs$core$IFn$_invoke$arity$variadic = set_style__delegate;
return set_style;
})()
;
/**
* remove a list style elements from the selected nodes. note: you can only remove styles that are inline
* @param {...*} var_args
*/
enfocus.core.remove_style = (function() { 
var remove_style__delegate = function (values){return (function (pnod){return enfocus.core.style_remove.call(null,pnod,values);
});
};
var remove_style = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_style__delegate.call(this,values);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__26647){
var values = cljs.core.seq(arglist__26647);
return remove_style__delegate(values);
});
remove_style.cljs$core$IFn$_invoke$arity$variadic = remove_style__delegate;
return remove_style;
})()
;
/**
* calls the focus function on the selected node
*/
enfocus.core.focus = (function focus(){return (function (node){return node.focus();
});
});
/**
* calls the blur function on the selected node
*/
enfocus.core.blur = (function blur(){return (function (node){return node.blur();
});
});
/**
* addes key value pair of data to the selected nodes. Only use clojure data structures when setting
*/
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__26648_SHARP_){return domina.set_data_BANG_.call(null,p1__26648_SHARP_,ky,val);
}));
});
/**
* delays and action by a set timeout, note this is an async operations
* @param {...*} var_args
*/
enfocus.core.delay = (function() { 
var delay__delegate = function (ttime,funcs){return (function (pnod){return enfocus.core.setTimeout.call(null,(function (){return cljs.core.apply.call(null,enfocus.core.at,pnod,funcs);
}),ttime);
});
};
var delay = function (ttime,var_args){
var funcs = null;if (arguments.length > 1) {
  funcs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delay__delegate.call(this,ttime,funcs);};
delay.cljs$lang$maxFixedArity = 1;
delay.cljs$lang$applyTo = (function (arglist__26649){
var ttime = cljs.core.first(arglist__26649);
var funcs = cljs.core.rest(arglist__26649);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__26651_SHARP_,p2__26650_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__26650_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__26676_26684 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__26677_26685 = null;var count__26678_26686 = 0;var i__26679_26687 = 0;while(true){
if((i__26679_26687 < count__26678_26686))
{var idx_26688 = cljs.core._nth.call(null,chunk__26677_26685,i__26679_26687);var attr_26689 = pnod.attributes.item(idx_26688);if(cljs.core.truth_(attr_26689.specified))
{attr_26689.value = rep_str.call(null,attr_26689.value);
} else
{}
{
var G__26690 = seq__26676_26684;
var G__26691 = chunk__26677_26685;
var G__26692 = count__26678_26686;
var G__26693 = (i__26679_26687 + 1);
seq__26676_26684 = G__26690;
chunk__26677_26685 = G__26691;
count__26678_26686 = G__26692;
i__26679_26687 = G__26693;
continue;
}
} else
{var temp__4092__auto___26694 = cljs.core.seq.call(null,seq__26676_26684);if(temp__4092__auto___26694)
{var seq__26676_26695__$1 = temp__4092__auto___26694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26676_26695__$1))
{var c__5135__auto___26696 = cljs.core.chunk_first.call(null,seq__26676_26695__$1);{
var G__26697 = cljs.core.chunk_rest.call(null,seq__26676_26695__$1);
var G__26698 = c__5135__auto___26696;
var G__26699 = cljs.core.count.call(null,c__5135__auto___26696);
var G__26700 = 0;
seq__26676_26684 = G__26697;
chunk__26677_26685 = G__26698;
count__26678_26686 = G__26699;
i__26679_26687 = G__26700;
continue;
}
} else
{var idx_26701 = cljs.core.first.call(null,seq__26676_26695__$1);var attr_26702 = pnod.attributes.item(idx_26701);if(cljs.core.truth_(attr_26702.specified))
{attr_26702.value = rep_str.call(null,attr_26702.value);
} else
{}
{
var G__26703 = cljs.core.next.call(null,seq__26676_26695__$1);
var G__26704 = null;
var G__26705 = 0;
var G__26706 = 0;
seq__26676_26684 = G__26703;
chunk__26677_26685 = G__26704;
count__26678_26686 = G__26705;
i__26679_26687 = G__26706;
continue;
}
}
} else
{}
}
break;
}
} else
{}
if(cljs.core._EQ_.call(null,pnod.nodeType,3))
{return pnod.nodeValue = rep_str.call(null,pnod.nodeValue);
} else
{var seq__26680 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__26681 = null;var count__26682 = 0;var i__26683 = 0;while(true){
if((i__26683 < count__26682))
{var cnode = cljs.core._nth.call(null,chunk__26681,i__26683);rep_node.call(null,cnode);
{
var G__26707 = seq__26680;
var G__26708 = chunk__26681;
var G__26709 = count__26682;
var G__26710 = (i__26683 + 1);
seq__26680 = G__26707;
chunk__26681 = G__26708;
count__26682 = G__26709;
i__26683 = G__26710;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26680);if(temp__4092__auto__)
{var seq__26680__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26680__$1))
{var c__5135__auto__ = cljs.core.chunk_first.call(null,seq__26680__$1);{
var G__26711 = cljs.core.chunk_rest.call(null,seq__26680__$1);
var G__26712 = c__5135__auto__;
var G__26713 = cljs.core.count.call(null,c__5135__auto__);
var G__26714 = 0;
seq__26680 = G__26711;
chunk__26681 = G__26712;
count__26682 = G__26713;
i__26683 = G__26714;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__26680__$1);rep_node.call(null,cnode);
{
var G__26715 = cljs.core.next.call(null,seq__26680__$1);
var G__26716 = null;
var G__26717 = 0;
var G__26718 = 0;
seq__26680 = G__26715;
chunk__26681 = G__26716;
count__26682 = G__26717;
i__26683 = G__26718;
continue;
}
}
} else
{return null;
}
}
break;
}
}
});
});
/**
* takes clojure data structure and emits a document element
*/
enfocus.core.html = (function html(node_spec){if(typeof node_spec === 'string')
{return document.createTextNode(node_spec);
} else
{if(cljs.core.vector_QMARK_.call(null,node_spec))
{var vec__26728 = node_spec;var tag = cljs.core.nth.call(null,vec__26728,0,null);var vec__26729 = cljs.core.nthnext.call(null,vec__26728,1);var m = cljs.core.nth.call(null,vec__26729,0,null);var ms = cljs.core.nthnext.call(null,vec__26729,1);var more = vec__26729;var _ = enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,tag,m,ms));var vec__26730 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__26730,0,null);var segments = cljs.core.nthnext.call(null,vec__26730,1);var id = cljs.core.some.call(null,((function (vec__26728,tag,vec__26729,m,ms,more,_,vec__26730,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__26728,tag,vec__26729,m,ms,more,_,vec__26730,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__26728,tag,vec__26729,m,ms,more,_,vec__26730,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__26728,tag,vec__26729,m,ms,more,_,vec__26730,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__26731_26737 = cljs.core.seq.call(null,attrs__$2);var chunk__26732_26738 = null;var count__26733_26739 = 0;var i__26734_26740 = 0;while(true){
if((i__26734_26740 < count__26733_26739))
{var vec__26735_26741 = cljs.core._nth.call(null,chunk__26732_26738,i__26734_26740);var key_26742 = cljs.core.nth.call(null,vec__26735_26741,0,null);var val_26743 = cljs.core.nth.call(null,vec__26735_26741,1,null);node.setAttribute(cljs.core.name.call(null,key_26742),val_26743);
{
var G__26744 = seq__26731_26737;
var G__26745 = chunk__26732_26738;
var G__26746 = count__26733_26739;
var G__26747 = (i__26734_26740 + 1);
seq__26731_26737 = G__26744;
chunk__26732_26738 = G__26745;
count__26733_26739 = G__26746;
i__26734_26740 = G__26747;
continue;
}
} else
{var temp__4092__auto___26748 = cljs.core.seq.call(null,seq__26731_26737);if(temp__4092__auto___26748)
{var seq__26731_26749__$1 = temp__4092__auto___26748;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26731_26749__$1))
{var c__5135__auto___26750 = cljs.core.chunk_first.call(null,seq__26731_26749__$1);{
var G__26751 = cljs.core.chunk_rest.call(null,seq__26731_26749__$1);
var G__26752 = c__5135__auto___26750;
var G__26753 = cljs.core.count.call(null,c__5135__auto___26750);
var G__26754 = 0;
seq__26731_26737 = G__26751;
chunk__26732_26738 = G__26752;
count__26733_26739 = G__26753;
i__26734_26740 = G__26754;
continue;
}
} else
{var vec__26736_26755 = cljs.core.first.call(null,seq__26731_26749__$1);var key_26756 = cljs.core.nth.call(null,vec__26736_26755,0,null);var val_26757 = cljs.core.nth.call(null,vec__26736_26755,1,null);node.setAttribute(cljs.core.name.call(null,key_26756),val_26757);
{
var G__26758 = cljs.core.next.call(null,seq__26731_26749__$1);
var G__26759 = null;
var G__26760 = 0;
var G__26761 = 0;
seq__26731_26737 = G__26758;
chunk__26732_26738 = G__26759;
count__26733_26739 = G__26760;
i__26734_26740 = G__26761;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(content))
{return domina.append_BANG_.call(null,node,content);
} else
{return null;
}
} else
{if(cljs.core.sequential_QMARK_.call(null,node_spec))
{return cljs.core.flatten.call(null,cljs.core.map.call(null,html,node_spec));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return document.createTextNode([cljs.core.str(node_spec)].join(''));
} else
{return null;
}
}
}
}
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_attr = (function get_attr(attr){return enfocus.core.extr_multi_node.call(null,(function (pnod){return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the text value of the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_text = (function get_text(){return enfocus.core.extr_multi_node.call(null,(function (pnod){return goog.dom.getTextContent(pnod);
}));
});
/**
* returns the data on a selected node for a given key. If bubble is set will look at parent
*/
enfocus.core.get_data = (function() {
var get_data = null;
var get_data__1 = (function (ky){return get_data.call(null,ky,false);
});
var get_data__2 = (function (ky,bubble){return enfocus.core.extr_multi_node.call(null,(function (node){return domina.get_data.call(null,node,ky,bubble);
}));
});
get_data = function(ky,bubble){
switch(arguments.length){
case 1:
return get_data__1.call(this,ky);
case 2:
return get_data__2.call(this,ky,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$1 = get_data__1;
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
return get_data;
})()
;
/**
* returns the property on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_prop = (function get_prop(prop){return enfocus.core.extr_multi_node.call(null,(function (pnod){return (pnod[cljs.core.name.call(null,prop)]);
}));
});
/**
* this function takes a map, key and value.  It will check if
* the value exists and create a seq of values if one exits.
*/
enfocus.core.merge_form_val = (function merge_form_val(form_map,ky,val){var mval = form_map.call(null,ky);if(cljs.core.coll_QMARK_.call(null,mval))
{return cljs.core.assoc.call(null,form_map,ky,cljs.core.conj.call(null,mval,val));
} else
{if(cljs.core.truth_(mval))
{return cljs.core.assoc.call(null,form_map,ky,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,mval),val));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.assoc.call(null,form_map,ky,val);
} else
{return null;
}
}
}
});
enfocus.core.read_simple_input = (function read_simple_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__4381__auto__ = el.checked;if(cljs.core.truth_(and__4381__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__4381__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__26762_SHARP_){return p1__26762_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__26763_SHARP_){return p1__26763_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__26765_SHARP_,p2__26764_SHARP_){var G__26768 = p2__26764_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__26768))
{return enfocus.core.read_simple_input.call(null,p2__26764_SHARP_,p1__26765_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__26768))
{return enfocus.core.read_select_input.call(null,p2__26764_SHARP_,p1__26765_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__26768))
{return enfocus.core.read_simple_input.call(null,p2__26764_SHARP_,p1__26765_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__26768))
{var G__26769 = p2__26764_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__26769))
{return enfocus.core.read_checked_input.call(null,p2__26764_SHARP_,p1__26765_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__26769))
{return enfocus.core.read_checked_input.call(null,p2__26764_SHARP_,p1__26765_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__26769))
{return enfocus.core.read_simple_input.call(null,p2__26764_SHARP_,p1__26765_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__26769))
{return enfocus.core.read_simple_input.call(null,p2__26764_SHARP_,p1__26765_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__26769))
{return enfocus.core.read_simple_input.call(null,p2__26764_SHARP_,p1__26765_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__26769))
{return enfocus.core.read_simple_input.call(null,p2__26764_SHARP_,p1__26765_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__26769))
{return enfocus.core.read_simple_input.call(null,p2__26764_SHARP_,p1__26765_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__26769))
{return enfocus.core.read_simple_input.call(null,p2__26764_SHARP_,p1__26765_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__26765_SHARP_;
} else
{return null;
}
}
}
}
}
}
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__26765_SHARP_;
} else
{return null;
}
}
}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,inputs);
}));
});
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* filter allows you to apply function to futhur scope down what is returned by a selector
*/
enfocus.core.filter = (function filter(tst,trans){return enfocus.core.multi_node_chain.call(null,(function() {
var filt = null;
var filt__1 = (function (pnodes){return filt.call(null,pnodes,null);
});
var filt__2 = (function (pnodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);var ttest = (((tst instanceof cljs.core.Keyword))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);var res = cljs.core.filter.call(null,ttest,pnod_col);if((chain == null))
{return enfocus.core.apply_transform.call(null,trans,res);
} else
{return enfocus.core.apply_transform.call(null,trans,res,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case 1:
return filt__1.call(this,pnodes);
case 2:
return filt__2.call(this,pnodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filt.cljs$core$IFn$_invoke$arity$1 = filt__1;
filt.cljs$core$IFn$_invoke$arity$2 = filt__2;
return filt;
})()
);
});
/**
* registers a filter for a given keyword
*/
enfocus.core.register_filter = (function register_filter(ky,func){return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
* takes a list of options and returns the selected ones.
*/
enfocus.core.selected_options = (function selected_options(pnod){return pnod.selected;
});
/**
* takes a list of radio or checkboxes and returns the checked ones
*/
enfocus.core.checked_radio_checkbox = (function checked_radio_checkbox(pnod){return pnod.checked;
});
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365),enfocus.core.selected_options);
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"checked","checked",1756218137),enfocus.core.checked_radio_checkbox);
enfocus.core.match_QMARK_ = (function match_QMARK_(selector){return (function (node){if(cljs.core.truth_((node["matches"])))
{return node.matches(selector);
} else
{if(cljs.core.truth_((node["matchesSelector"])))
{return node.matchesSelector(selector);
} else
{if(cljs.core.truth_((node["msMatchesSelector"])))
{return node.msMatchesSelector(selector);
} else
{if(cljs.core.truth_((node["mozMatchesSelector"])))
{return node.mozMatchesSelector(selector);
} else
{if(cljs.core.truth_((node["webkitMatchesSelector"])))
{return node.webkitMatchesSelector(selector);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),enfocus.core.nodes__GT_coll.call(null,enfocus.core.select.call(null,node)));
} else
{return null;
}
}
}
}
}
}
});
});
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* applys id masking if mask provided
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__1 = (function (css_sel){return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__26770_SHARP_){if((p1__26770_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__26770_SHARP_);
} else
{if((p1__26770_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__26770_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__26770_SHARP_))
{return create_sel_str.call(null,p1__26770_SHARP_);
} else
{if(typeof p1__26770_SHARP_ === 'string')
{return p1__26770_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
} else
{return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_mask_sym,css_sel){
switch(arguments.length){
case 1:
return create_sel_str__1.call(this,id_mask_sym);
case 2:
return create_sel_str__2.call(this,id_mask_sym,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_sel_str.cljs$core$IFn$_invoke$arity$1 = create_sel_str__1;
create_sel_str.cljs$core$IFn$_invoke$arity$2 = create_sel_str__2;
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__1 = (function (css_sel){return css_select.call(null,"",document,css_sel);
});
var css_select__2 = (function (dom_node,css_sel){return css_select.call(null,"",dom_node,css_sel);
});
var css_select__3 = (function (id_mask_sym,dom_node,css_sel){var sel = clojure.string.trim.call(null,enfocus.enlive.syntax.convert.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)));var ret = domina.css.sel.call(null,dom_node,sel);return ret;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case 1:
return css_select__1.call(this,id_mask_sym);
case 2:
return css_select__2.call(this,id_mask_sym,dom_node);
case 3:
return css_select__3.call(this,id_mask_sym,dom_node,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
css_select.cljs$core$IFn$_invoke$arity$1 = css_select__1;
css_select.cljs$core$IFn$_invoke$arity$2 = css_select__2;
css_select.cljs$core$IFn$_invoke$arity$3 = css_select__3;
return css_select;
})()
;
enfocus.core.nil_t = (function nil_t(func){var or__4393__auto__ = func;if(cljs.core.truth_(or__4393__auto__))
{return or__4393__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__26779 = node;if(G__26779)
{var bit__5037__auto__ = null;if(cljs.core.truth_((function (){var or__4393__auto__ = bit__5037__auto__;if(cljs.core.truth_(or__4393__auto__))
{return or__4393__auto__;
} else
{return G__26779.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__26779.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__26779);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__26779);
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__26780 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__26780,0,null);var trans__$1 = cljs.core.nth.call(null,vec__26780,1,null);var seq__26781 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__26782 = null;var count__26783 = 0;var i__26784 = 0;while(true){
if((i__26784 < count__26783))
{var vec__26785 = cljs.core._nth.call(null,chunk__26782,i__26784);var sel = cljs.core.nth.call(null,vec__26785,0,null);var t = cljs.core.nth.call(null,vec__26785,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__26787 = seq__26781;
var G__26788 = chunk__26782;
var G__26789 = count__26783;
var G__26790 = (i__26784 + 1);
seq__26781 = G__26787;
chunk__26782 = G__26788;
count__26783 = G__26789;
i__26784 = G__26790;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26781);if(temp__4092__auto__)
{var seq__26781__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26781__$1))
{var c__5135__auto__ = cljs.core.chunk_first.call(null,seq__26781__$1);{
var G__26791 = cljs.core.chunk_rest.call(null,seq__26781__$1);
var G__26792 = c__5135__auto__;
var G__26793 = cljs.core.count.call(null,c__5135__auto__);
var G__26794 = 0;
seq__26781 = G__26791;
chunk__26782 = G__26792;
count__26783 = G__26793;
i__26784 = G__26794;
continue;
}
} else
{var vec__26786 = cljs.core.first.call(null,seq__26781__$1);var sel = cljs.core.nth.call(null,vec__26786,0,null);var t = cljs.core.nth.call(null,vec__26786,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__26795 = cljs.core.next.call(null,seq__26781__$1);
var G__26796 = null;
var G__26797 = 0;
var G__26798 = 0;
seq__26781 = G__26795;
chunk__26782 = G__26796;
count__26783 = G__26797;
i__26784 = G__26798;
continue;
}
}
} else
{return null;
}
}
break;
}
}
};
var i_at = function (id_mask,node,var_args){
var trans = null;if (arguments.length > 2) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return i_at__delegate.call(this,id_mask,node,trans);};
i_at.cljs$lang$maxFixedArity = 2;
i_at.cljs$lang$applyTo = (function (arglist__26799){
var id_mask = cljs.core.first(arglist__26799);
arglist__26799 = cljs.core.next(arglist__26799);
var node = cljs.core.first(arglist__26799);
var trans = cljs.core.rest(arglist__26799);
return i_at__delegate(id_mask,node,trans);
});
i_at.cljs$core$IFn$_invoke$arity$variadic = i_at__delegate;
return i_at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.at = (function() { 
var at__delegate = function (node,trans){return cljs.core.apply.call(null,enfocus.core.i_at,"",node,trans);
};
var at = function (node,var_args){
var trans = null;if (arguments.length > 1) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return at__delegate.call(this,node,trans);};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__26800){
var node = cljs.core.first(arglist__26800);
var trans = cljs.core.rest(arglist__26800);
return at__delegate(node,trans);
});
at.cljs$core$IFn$_invoke$arity$variadic = at__delegate;
return at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.from = (function() { 
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__26805 = node;if(G__26805)
{var bit__5037__auto__ = null;if(cljs.core.truth_((function (){var or__4393__auto__ = bit__5037__auto__;if(cljs.core.truth_(or__4393__auto__))
{return or__4393__auto__;
} else
{return G__26805.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__26805.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__26805);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__26805);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__26806 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__26806,0,null);var trans__$1 = cljs.core.nth.call(null,vec__26806,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__26807){var vec__26808 = p__26807;var ky = cljs.core.nth.call(null,vec__26808,0,null);var sel = cljs.core.nth.call(null,vec__26808,1,null);var ext = cljs.core.nth.call(null,vec__26808,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
}),cljs.core.partition.call(null,3,trans__$1)));
} else
{return null;
}
}
}
};
var from = function (node,var_args){
var trans = null;if (arguments.length > 1) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return from__delegate.call(this,node,trans);};
from.cljs$lang$maxFixedArity = 1;
from.cljs$lang$applyTo = (function (arglist__26809){
var node = cljs.core.first(arglist__26809);
var trans = cljs.core.rest(arglist__26809);
return from__delegate(node,trans);
});
from.cljs$core$IFn$_invoke$arity$variadic = from__delegate;
return from;
})()
;
enfocus.core.xpath = (function xpath(path){return (function (root,id_mask){if(cljs.core.empty_QMARK_.call(null,id_mask))
{return domina.xpath.xpath.call(null,root,path);
} else
{var tmp = path.replace("@ID='",[cljs.core.str("@ID='"),cljs.core.str(id_mask)].join(''));var mpath = path.replace("@id='",[cljs.core.str("@id='"),cljs.core.str(id_mask)].join(''));return domina.xpath.xpath.call(null,root,mpath);
}
});
});
enfocus.core.this_node = (function this_node(root,id_mask){return root;
});
if(cljs.core.truth_((typeof Text != 'undefined')))
{Text.prototype.domina$DomContent$ = true;
Text.prototype.domina$DomContent$nodes$arity$1 = (function (content){var content__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1], null);
});
Text.prototype.domina$DomContent$single_node$arity$1 = (function (content){var content__$1 = this;return content__$1;
});
} else
{}
(enfocus.core.ISelector["string"] = true);
(enfocus.core.select["string"] = (function() {
var G__26810 = null;
var G__26810__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__26810__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__26810__3 = (function (this$,root,id_mask){return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__26810 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__26810__1.call(this,this$);
case 2:
return G__26810__2.call(this,this$,root);
case 3:
return G__26810__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__26810;
})()
);
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$ = true;
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$1 = (function (this$){var this$__$1 = this;return enfocus.core.select.call(null,this$__$1,document,"");
});
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$2 = (function (this$,root){var this$__$1 = this;return enfocus.core.select.call(null,this$__$1,root,"");
});
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$3 = (function (this$,root,id_mask){var this$__$1 = this;return enfocus.core.css_select.call(null,id_mask,root,this$__$1);
});
(enfocus.core.ISelector["function"] = true);
(enfocus.core.select["function"] = (function() {
var G__26811 = null;
var G__26811__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__26811__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__26811__3 = (function (this$,root,id_mask){return this$.call(null,root,id_mask);
});
G__26811 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__26811__1.call(this,this$);
case 2:
return G__26811__2.call(this,this$,root);
case 3:
return G__26811__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__26811;
})()
);
(enfocus.core.ITransform["function"] = true);
(enfocus.core.apply_transform["function"] = (function() {
var G__26812 = null;
var G__26812__2 = (function (trans,nodes){return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__26812__3 = (function (trans,nodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});
G__26812 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__26812__2.call(this,trans,nodes);
case 3:
return G__26812__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__26812;
})()
);
