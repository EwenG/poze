// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_26861 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26862 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26863 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26862,table_section_wrapper_26862,opt_wrapper_26861,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26863,table_section_wrapper_26862,cell_wrapper_26863,opt_wrapper_26861,table_section_wrapper_26862,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26862]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__4381__auto__ = div.firstChild;if(cljs.core.truth_(and__4381__auto__))
{return div.firstChild.childNodes;
} else
{return and__4381__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26868 = cljs.core.seq.call(null,tbody);var chunk__26869 = null;var count__26870 = 0;var i__26871 = 0;while(true){
if((i__26871 < count__26870))
{var child = cljs.core._nth.call(null,chunk__26869,i__26871);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26872 = seq__26868;
var G__26873 = chunk__26869;
var G__26874 = count__26870;
var G__26875 = (i__26871 + 1);
seq__26868 = G__26872;
chunk__26869 = G__26873;
count__26870 = G__26874;
i__26871 = G__26875;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26868);if(temp__4092__auto__)
{var seq__26868__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26868__$1))
{var c__5135__auto__ = cljs.core.chunk_first.call(null,seq__26868__$1);{
var G__26876 = cljs.core.chunk_rest.call(null,seq__26868__$1);
var G__26877 = c__5135__auto__;
var G__26878 = cljs.core.count.call(null,c__5135__auto__);
var G__26879 = 0;
seq__26868 = G__26876;
chunk__26869 = G__26877;
count__26870 = G__26878;
i__26871 = G__26879;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__26868__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26880 = cljs.core.next.call(null,seq__26868__$1);
var G__26881 = null;
var G__26882 = 0;
var G__26883 = 0;
seq__26868 = G__26880;
chunk__26869 = G__26881;
count__26870 = G__26882;
i__26871 = G__26883;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26885 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__26885,0,null);var start_wrap = cljs.core.nth.call(null,vec__26885,1,null);var end_wrap = cljs.core.nth.call(null,vec__26885,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26886 = wrapper.lastChild;
var G__26887 = (level - 1);
wrapper = G__26886;
level = G__26887;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__4381__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__4381__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__4381__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj26889 = {};return obj26889;
})();
domina.nodes = (function nodes(content){if((function (){var and__4381__auto__ = content;if(and__4381__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__4381__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__5014__auto__ = (((content == null))?null:content);return (function (){var or__4393__auto__ = (domina.nodes[goog.typeOf(x__5014__auto__)]);if(or__4393__auto__)
{return or__4393__auto__;
} else
{var or__4393__auto____$1 = (domina.nodes["_"]);if(or__4393__auto____$1)
{return or__4393__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__4381__auto__ = nodeseq;if(and__4381__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__4381__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__5014__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__4393__auto__ = (domina.single_node[goog.typeOf(x__5014__auto__)]);if(or__4393__auto__)
{return or__4393__auto__;
} else
{var or__4393__auto____$1 = (domina.single_node["_"]);if(or__4393__auto____$1)
{return or__4393__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__4381__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__4381__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__4381__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__26890){
var mesg = cljs.core.seq(arglist__26890);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__26891){
var mesg = cljs.core.seq(arglist__26891);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__26892){
var contents = cljs.core.seq(arglist__26892);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__26893_SHARP_){return p1__26893_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__26894_SHARP_,p2__26895_SHARP_){return goog.dom.insertChildAt(p1__26894_SHARP_,p2__26895_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__26897_SHARP_,p2__26896_SHARP_){return goog.dom.insertSiblingBefore(p2__26896_SHARP_,p1__26897_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__26899_SHARP_,p2__26898_SHARP_){return goog.dom.insertSiblingAfter(p2__26898_SHARP_,p1__26899_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__26901_SHARP_,p2__26900_SHARP_){return goog.dom.replaceNode(p2__26900_SHARP_,p1__26901_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__26906_26910 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__26907_26911 = null;var count__26908_26912 = 0;var i__26909_26913 = 0;while(true){
if((i__26909_26913 < count__26908_26912))
{var n_26914 = cljs.core._nth.call(null,chunk__26907_26911,i__26909_26913);goog.style.setStyle(n_26914,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__26915 = seq__26906_26910;
var G__26916 = chunk__26907_26911;
var G__26917 = count__26908_26912;
var G__26918 = (i__26909_26913 + 1);
seq__26906_26910 = G__26915;
chunk__26907_26911 = G__26916;
count__26908_26912 = G__26917;
i__26909_26913 = G__26918;
continue;
}
} else
{var temp__4092__auto___26919 = cljs.core.seq.call(null,seq__26906_26910);if(temp__4092__auto___26919)
{var seq__26906_26920__$1 = temp__4092__auto___26919;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26906_26920__$1))
{var c__5135__auto___26921 = cljs.core.chunk_first.call(null,seq__26906_26920__$1);{
var G__26922 = cljs.core.chunk_rest.call(null,seq__26906_26920__$1);
var G__26923 = c__5135__auto___26921;
var G__26924 = cljs.core.count.call(null,c__5135__auto___26921);
var G__26925 = 0;
seq__26906_26910 = G__26922;
chunk__26907_26911 = G__26923;
count__26908_26912 = G__26924;
i__26909_26913 = G__26925;
continue;
}
} else
{var n_26926 = cljs.core.first.call(null,seq__26906_26920__$1);goog.style.setStyle(n_26926,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__26927 = cljs.core.next.call(null,seq__26906_26920__$1);
var G__26928 = null;
var G__26929 = 0;
var G__26930 = 0;
seq__26906_26910 = G__26927;
chunk__26907_26911 = G__26928;
count__26908_26912 = G__26929;
i__26909_26913 = G__26930;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26931){
var content = cljs.core.first(arglist__26931);
arglist__26931 = cljs.core.next(arglist__26931);
var name = cljs.core.first(arglist__26931);
var value = cljs.core.rest(arglist__26931);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__26936_26940 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__26937_26941 = null;var count__26938_26942 = 0;var i__26939_26943 = 0;while(true){
if((i__26939_26943 < count__26938_26942))
{var n_26944 = cljs.core._nth.call(null,chunk__26937_26941,i__26939_26943);n_26944.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__26945 = seq__26936_26940;
var G__26946 = chunk__26937_26941;
var G__26947 = count__26938_26942;
var G__26948 = (i__26939_26943 + 1);
seq__26936_26940 = G__26945;
chunk__26937_26941 = G__26946;
count__26938_26942 = G__26947;
i__26939_26943 = G__26948;
continue;
}
} else
{var temp__4092__auto___26949 = cljs.core.seq.call(null,seq__26936_26940);if(temp__4092__auto___26949)
{var seq__26936_26950__$1 = temp__4092__auto___26949;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26936_26950__$1))
{var c__5135__auto___26951 = cljs.core.chunk_first.call(null,seq__26936_26950__$1);{
var G__26952 = cljs.core.chunk_rest.call(null,seq__26936_26950__$1);
var G__26953 = c__5135__auto___26951;
var G__26954 = cljs.core.count.call(null,c__5135__auto___26951);
var G__26955 = 0;
seq__26936_26940 = G__26952;
chunk__26937_26941 = G__26953;
count__26938_26942 = G__26954;
i__26939_26943 = G__26955;
continue;
}
} else
{var n_26956 = cljs.core.first.call(null,seq__26936_26950__$1);n_26956.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__26957 = cljs.core.next.call(null,seq__26936_26950__$1);
var G__26958 = null;
var G__26959 = 0;
var G__26960 = 0;
seq__26936_26940 = G__26957;
chunk__26937_26941 = G__26958;
count__26938_26942 = G__26959;
i__26939_26943 = G__26960;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26961){
var content = cljs.core.first(arglist__26961);
arglist__26961 = cljs.core.next(arglist__26961);
var name = cljs.core.first(arglist__26961);
var value = cljs.core.rest(arglist__26961);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26966_26970 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__26967_26971 = null;var count__26968_26972 = 0;var i__26969_26973 = 0;while(true){
if((i__26969_26973 < count__26968_26972))
{var n_26974 = cljs.core._nth.call(null,chunk__26967_26971,i__26969_26973);n_26974.removeAttribute(cljs.core.name.call(null,name));
{
var G__26975 = seq__26966_26970;
var G__26976 = chunk__26967_26971;
var G__26977 = count__26968_26972;
var G__26978 = (i__26969_26973 + 1);
seq__26966_26970 = G__26975;
chunk__26967_26971 = G__26976;
count__26968_26972 = G__26977;
i__26969_26973 = G__26978;
continue;
}
} else
{var temp__4092__auto___26979 = cljs.core.seq.call(null,seq__26966_26970);if(temp__4092__auto___26979)
{var seq__26966_26980__$1 = temp__4092__auto___26979;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26966_26980__$1))
{var c__5135__auto___26981 = cljs.core.chunk_first.call(null,seq__26966_26980__$1);{
var G__26982 = cljs.core.chunk_rest.call(null,seq__26966_26980__$1);
var G__26983 = c__5135__auto___26981;
var G__26984 = cljs.core.count.call(null,c__5135__auto___26981);
var G__26985 = 0;
seq__26966_26970 = G__26982;
chunk__26967_26971 = G__26983;
count__26968_26972 = G__26984;
i__26969_26973 = G__26985;
continue;
}
} else
{var n_26986 = cljs.core.first.call(null,seq__26966_26980__$1);n_26986.removeAttribute(cljs.core.name.call(null,name));
{
var G__26987 = cljs.core.next.call(null,seq__26966_26980__$1);
var G__26988 = null;
var G__26989 = 0;
var G__26990 = 0;
seq__26966_26970 = G__26987;
chunk__26967_26971 = G__26988;
count__26968_26972 = G__26989;
i__26969_26973 = G__26990;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__26992 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__26992,0,null);var v = cljs.core.nth.call(null,vec__26992,1,null);if(cljs.core.truth_((function (){var and__4381__auto__ = k;if(cljs.core.truth_(and__4381__auto__))
{return v;
} else
{return and__4381__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__26993_SHARP_){var attr = attrs__$1.item(p1__26993_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__27000_27006 = cljs.core.seq.call(null,styles);var chunk__27001_27007 = null;var count__27002_27008 = 0;var i__27003_27009 = 0;while(true){
if((i__27003_27009 < count__27002_27008))
{var vec__27004_27010 = cljs.core._nth.call(null,chunk__27001_27007,i__27003_27009);var name_27011 = cljs.core.nth.call(null,vec__27004_27010,0,null);var value_27012 = cljs.core.nth.call(null,vec__27004_27010,1,null);domina.set_style_BANG_.call(null,content,name_27011,value_27012);
{
var G__27013 = seq__27000_27006;
var G__27014 = chunk__27001_27007;
var G__27015 = count__27002_27008;
var G__27016 = (i__27003_27009 + 1);
seq__27000_27006 = G__27013;
chunk__27001_27007 = G__27014;
count__27002_27008 = G__27015;
i__27003_27009 = G__27016;
continue;
}
} else
{var temp__4092__auto___27017 = cljs.core.seq.call(null,seq__27000_27006);if(temp__4092__auto___27017)
{var seq__27000_27018__$1 = temp__4092__auto___27017;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27000_27018__$1))
{var c__5135__auto___27019 = cljs.core.chunk_first.call(null,seq__27000_27018__$1);{
var G__27020 = cljs.core.chunk_rest.call(null,seq__27000_27018__$1);
var G__27021 = c__5135__auto___27019;
var G__27022 = cljs.core.count.call(null,c__5135__auto___27019);
var G__27023 = 0;
seq__27000_27006 = G__27020;
chunk__27001_27007 = G__27021;
count__27002_27008 = G__27022;
i__27003_27009 = G__27023;
continue;
}
} else
{var vec__27005_27024 = cljs.core.first.call(null,seq__27000_27018__$1);var name_27025 = cljs.core.nth.call(null,vec__27005_27024,0,null);var value_27026 = cljs.core.nth.call(null,vec__27005_27024,1,null);domina.set_style_BANG_.call(null,content,name_27025,value_27026);
{
var G__27027 = cljs.core.next.call(null,seq__27000_27018__$1);
var G__27028 = null;
var G__27029 = 0;
var G__27030 = 0;
seq__27000_27006 = G__27027;
chunk__27001_27007 = G__27028;
count__27002_27008 = G__27029;
i__27003_27009 = G__27030;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__27037_27043 = cljs.core.seq.call(null,attrs);var chunk__27038_27044 = null;var count__27039_27045 = 0;var i__27040_27046 = 0;while(true){
if((i__27040_27046 < count__27039_27045))
{var vec__27041_27047 = cljs.core._nth.call(null,chunk__27038_27044,i__27040_27046);var name_27048 = cljs.core.nth.call(null,vec__27041_27047,0,null);var value_27049 = cljs.core.nth.call(null,vec__27041_27047,1,null);domina.set_attr_BANG_.call(null,content,name_27048,value_27049);
{
var G__27050 = seq__27037_27043;
var G__27051 = chunk__27038_27044;
var G__27052 = count__27039_27045;
var G__27053 = (i__27040_27046 + 1);
seq__27037_27043 = G__27050;
chunk__27038_27044 = G__27051;
count__27039_27045 = G__27052;
i__27040_27046 = G__27053;
continue;
}
} else
{var temp__4092__auto___27054 = cljs.core.seq.call(null,seq__27037_27043);if(temp__4092__auto___27054)
{var seq__27037_27055__$1 = temp__4092__auto___27054;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27037_27055__$1))
{var c__5135__auto___27056 = cljs.core.chunk_first.call(null,seq__27037_27055__$1);{
var G__27057 = cljs.core.chunk_rest.call(null,seq__27037_27055__$1);
var G__27058 = c__5135__auto___27056;
var G__27059 = cljs.core.count.call(null,c__5135__auto___27056);
var G__27060 = 0;
seq__27037_27043 = G__27057;
chunk__27038_27044 = G__27058;
count__27039_27045 = G__27059;
i__27040_27046 = G__27060;
continue;
}
} else
{var vec__27042_27061 = cljs.core.first.call(null,seq__27037_27055__$1);var name_27062 = cljs.core.nth.call(null,vec__27042_27061,0,null);var value_27063 = cljs.core.nth.call(null,vec__27042_27061,1,null);domina.set_attr_BANG_.call(null,content,name_27062,value_27063);
{
var G__27064 = cljs.core.next.call(null,seq__27037_27055__$1);
var G__27065 = null;
var G__27066 = 0;
var G__27067 = 0;
seq__27037_27043 = G__27064;
chunk__27038_27044 = G__27065;
count__27039_27045 = G__27066;
i__27040_27046 = G__27067;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__27072_27076 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27073_27077 = null;var count__27074_27078 = 0;var i__27075_27079 = 0;while(true){
if((i__27075_27079 < count__27074_27078))
{var node_27080 = cljs.core._nth.call(null,chunk__27073_27077,i__27075_27079);goog.dom.classes.add(node_27080,class$);
{
var G__27081 = seq__27072_27076;
var G__27082 = chunk__27073_27077;
var G__27083 = count__27074_27078;
var G__27084 = (i__27075_27079 + 1);
seq__27072_27076 = G__27081;
chunk__27073_27077 = G__27082;
count__27074_27078 = G__27083;
i__27075_27079 = G__27084;
continue;
}
} else
{var temp__4092__auto___27085 = cljs.core.seq.call(null,seq__27072_27076);if(temp__4092__auto___27085)
{var seq__27072_27086__$1 = temp__4092__auto___27085;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27072_27086__$1))
{var c__5135__auto___27087 = cljs.core.chunk_first.call(null,seq__27072_27086__$1);{
var G__27088 = cljs.core.chunk_rest.call(null,seq__27072_27086__$1);
var G__27089 = c__5135__auto___27087;
var G__27090 = cljs.core.count.call(null,c__5135__auto___27087);
var G__27091 = 0;
seq__27072_27076 = G__27088;
chunk__27073_27077 = G__27089;
count__27074_27078 = G__27090;
i__27075_27079 = G__27091;
continue;
}
} else
{var node_27092 = cljs.core.first.call(null,seq__27072_27086__$1);goog.dom.classes.add(node_27092,class$);
{
var G__27093 = cljs.core.next.call(null,seq__27072_27086__$1);
var G__27094 = null;
var G__27095 = 0;
var G__27096 = 0;
seq__27072_27076 = G__27093;
chunk__27073_27077 = G__27094;
count__27074_27078 = G__27095;
i__27075_27079 = G__27096;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27101_27105 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27102_27106 = null;var count__27103_27107 = 0;var i__27104_27108 = 0;while(true){
if((i__27104_27108 < count__27103_27107))
{var node_27109 = cljs.core._nth.call(null,chunk__27102_27106,i__27104_27108);goog.dom.classes.remove(node_27109,class$);
{
var G__27110 = seq__27101_27105;
var G__27111 = chunk__27102_27106;
var G__27112 = count__27103_27107;
var G__27113 = (i__27104_27108 + 1);
seq__27101_27105 = G__27110;
chunk__27102_27106 = G__27111;
count__27103_27107 = G__27112;
i__27104_27108 = G__27113;
continue;
}
} else
{var temp__4092__auto___27114 = cljs.core.seq.call(null,seq__27101_27105);if(temp__4092__auto___27114)
{var seq__27101_27115__$1 = temp__4092__auto___27114;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27101_27115__$1))
{var c__5135__auto___27116 = cljs.core.chunk_first.call(null,seq__27101_27115__$1);{
var G__27117 = cljs.core.chunk_rest.call(null,seq__27101_27115__$1);
var G__27118 = c__5135__auto___27116;
var G__27119 = cljs.core.count.call(null,c__5135__auto___27116);
var G__27120 = 0;
seq__27101_27105 = G__27117;
chunk__27102_27106 = G__27118;
count__27103_27107 = G__27119;
i__27104_27108 = G__27120;
continue;
}
} else
{var node_27121 = cljs.core.first.call(null,seq__27101_27115__$1);goog.dom.classes.remove(node_27121,class$);
{
var G__27122 = cljs.core.next.call(null,seq__27101_27115__$1);
var G__27123 = null;
var G__27124 = 0;
var G__27125 = 0;
seq__27101_27105 = G__27122;
chunk__27102_27106 = G__27123;
count__27103_27107 = G__27124;
i__27104_27108 = G__27125;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__27130_27134 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27131_27135 = null;var count__27132_27136 = 0;var i__27133_27137 = 0;while(true){
if((i__27133_27137 < count__27132_27136))
{var node_27138 = cljs.core._nth.call(null,chunk__27131_27135,i__27133_27137);goog.dom.classes.toggle(node_27138,class$);
{
var G__27139 = seq__27130_27134;
var G__27140 = chunk__27131_27135;
var G__27141 = count__27132_27136;
var G__27142 = (i__27133_27137 + 1);
seq__27130_27134 = G__27139;
chunk__27131_27135 = G__27140;
count__27132_27136 = G__27141;
i__27133_27137 = G__27142;
continue;
}
} else
{var temp__4092__auto___27143 = cljs.core.seq.call(null,seq__27130_27134);if(temp__4092__auto___27143)
{var seq__27130_27144__$1 = temp__4092__auto___27143;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27130_27144__$1))
{var c__5135__auto___27145 = cljs.core.chunk_first.call(null,seq__27130_27144__$1);{
var G__27146 = cljs.core.chunk_rest.call(null,seq__27130_27144__$1);
var G__27147 = c__5135__auto___27145;
var G__27148 = cljs.core.count.call(null,c__5135__auto___27145);
var G__27149 = 0;
seq__27130_27134 = G__27146;
chunk__27131_27135 = G__27147;
count__27132_27136 = G__27148;
i__27133_27137 = G__27149;
continue;
}
} else
{var node_27150 = cljs.core.first.call(null,seq__27130_27144__$1);goog.dom.classes.toggle(node_27150,class$);
{
var G__27151 = cljs.core.next.call(null,seq__27130_27144__$1);
var G__27152 = null;
var G__27153 = 0;
var G__27154 = 0;
seq__27130_27134 = G__27151;
chunk__27131_27135 = G__27152;
count__27132_27136 = G__27153;
i__27133_27137 = G__27154;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_27163__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__27159_27164 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27160_27165 = null;var count__27161_27166 = 0;var i__27162_27167 = 0;while(true){
if((i__27162_27167 < count__27161_27166))
{var node_27168 = cljs.core._nth.call(null,chunk__27160_27165,i__27162_27167);goog.dom.classes.set(node_27168,classes_27163__$1);
{
var G__27169 = seq__27159_27164;
var G__27170 = chunk__27160_27165;
var G__27171 = count__27161_27166;
var G__27172 = (i__27162_27167 + 1);
seq__27159_27164 = G__27169;
chunk__27160_27165 = G__27170;
count__27161_27166 = G__27171;
i__27162_27167 = G__27172;
continue;
}
} else
{var temp__4092__auto___27173 = cljs.core.seq.call(null,seq__27159_27164);if(temp__4092__auto___27173)
{var seq__27159_27174__$1 = temp__4092__auto___27173;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27159_27174__$1))
{var c__5135__auto___27175 = cljs.core.chunk_first.call(null,seq__27159_27174__$1);{
var G__27176 = cljs.core.chunk_rest.call(null,seq__27159_27174__$1);
var G__27177 = c__5135__auto___27175;
var G__27178 = cljs.core.count.call(null,c__5135__auto___27175);
var G__27179 = 0;
seq__27159_27164 = G__27176;
chunk__27160_27165 = G__27177;
count__27161_27166 = G__27178;
i__27162_27167 = G__27179;
continue;
}
} else
{var node_27180 = cljs.core.first.call(null,seq__27159_27174__$1);goog.dom.classes.set(node_27180,classes_27163__$1);
{
var G__27181 = cljs.core.next.call(null,seq__27159_27174__$1);
var G__27182 = null;
var G__27183 = 0;
var G__27184 = 0;
seq__27159_27164 = G__27181;
chunk__27160_27165 = G__27182;
count__27161_27166 = G__27183;
i__27162_27167 = G__27184;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__27189_27193 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27190_27194 = null;var count__27191_27195 = 0;var i__27192_27196 = 0;while(true){
if((i__27192_27196 < count__27191_27195))
{var node_27197 = cljs.core._nth.call(null,chunk__27190_27194,i__27192_27196);goog.dom.setTextContent(node_27197,value);
{
var G__27198 = seq__27189_27193;
var G__27199 = chunk__27190_27194;
var G__27200 = count__27191_27195;
var G__27201 = (i__27192_27196 + 1);
seq__27189_27193 = G__27198;
chunk__27190_27194 = G__27199;
count__27191_27195 = G__27200;
i__27192_27196 = G__27201;
continue;
}
} else
{var temp__4092__auto___27202 = cljs.core.seq.call(null,seq__27189_27193);if(temp__4092__auto___27202)
{var seq__27189_27203__$1 = temp__4092__auto___27202;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27189_27203__$1))
{var c__5135__auto___27204 = cljs.core.chunk_first.call(null,seq__27189_27203__$1);{
var G__27205 = cljs.core.chunk_rest.call(null,seq__27189_27203__$1);
var G__27206 = c__5135__auto___27204;
var G__27207 = cljs.core.count.call(null,c__5135__auto___27204);
var G__27208 = 0;
seq__27189_27193 = G__27205;
chunk__27190_27194 = G__27206;
count__27191_27195 = G__27207;
i__27192_27196 = G__27208;
continue;
}
} else
{var node_27209 = cljs.core.first.call(null,seq__27189_27203__$1);goog.dom.setTextContent(node_27209,value);
{
var G__27210 = cljs.core.next.call(null,seq__27189_27203__$1);
var G__27211 = null;
var G__27212 = 0;
var G__27213 = 0;
seq__27189_27193 = G__27210;
chunk__27190_27194 = G__27211;
count__27191_27195 = G__27212;
i__27192_27196 = G__27213;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__27218_27222 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27219_27223 = null;var count__27220_27224 = 0;var i__27221_27225 = 0;while(true){
if((i__27221_27225 < count__27220_27224))
{var node_27226 = cljs.core._nth.call(null,chunk__27219_27223,i__27221_27225);goog.dom.forms.setValue(node_27226,value);
{
var G__27227 = seq__27218_27222;
var G__27228 = chunk__27219_27223;
var G__27229 = count__27220_27224;
var G__27230 = (i__27221_27225 + 1);
seq__27218_27222 = G__27227;
chunk__27219_27223 = G__27228;
count__27220_27224 = G__27229;
i__27221_27225 = G__27230;
continue;
}
} else
{var temp__4092__auto___27231 = cljs.core.seq.call(null,seq__27218_27222);if(temp__4092__auto___27231)
{var seq__27218_27232__$1 = temp__4092__auto___27231;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27218_27232__$1))
{var c__5135__auto___27233 = cljs.core.chunk_first.call(null,seq__27218_27232__$1);{
var G__27234 = cljs.core.chunk_rest.call(null,seq__27218_27232__$1);
var G__27235 = c__5135__auto___27233;
var G__27236 = cljs.core.count.call(null,c__5135__auto___27233);
var G__27237 = 0;
seq__27218_27222 = G__27234;
chunk__27219_27223 = G__27235;
count__27220_27224 = G__27236;
i__27221_27225 = G__27237;
continue;
}
} else
{var node_27238 = cljs.core.first.call(null,seq__27218_27232__$1);goog.dom.forms.setValue(node_27238,value);
{
var G__27239 = cljs.core.next.call(null,seq__27218_27232__$1);
var G__27240 = null;
var G__27241 = 0;
var G__27242 = 0;
seq__27218_27222 = G__27239;
chunk__27219_27223 = G__27240;
count__27220_27224 = G__27241;
i__27221_27225 = G__27242;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__4381__auto__ = allows_inner_html_QMARK_;if(and__4381__auto__)
{var and__4381__auto____$1 = (function (){var or__4393__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__4393__auto__))
{return or__4393__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__4381__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__4381__auto____$1;
}
} else
{return and__4381__auto__;
}
})()))
{var value_27253 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__27249_27254 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27250_27255 = null;var count__27251_27256 = 0;var i__27252_27257 = 0;while(true){
if((i__27252_27257 < count__27251_27256))
{var node_27258 = cljs.core._nth.call(null,chunk__27250_27255,i__27252_27257);node_27258.innerHTML = value_27253;
{
var G__27259 = seq__27249_27254;
var G__27260 = chunk__27250_27255;
var G__27261 = count__27251_27256;
var G__27262 = (i__27252_27257 + 1);
seq__27249_27254 = G__27259;
chunk__27250_27255 = G__27260;
count__27251_27256 = G__27261;
i__27252_27257 = G__27262;
continue;
}
} else
{var temp__4092__auto___27263 = cljs.core.seq.call(null,seq__27249_27254);if(temp__4092__auto___27263)
{var seq__27249_27264__$1 = temp__4092__auto___27263;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27249_27264__$1))
{var c__5135__auto___27265 = cljs.core.chunk_first.call(null,seq__27249_27264__$1);{
var G__27266 = cljs.core.chunk_rest.call(null,seq__27249_27264__$1);
var G__27267 = c__5135__auto___27265;
var G__27268 = cljs.core.count.call(null,c__5135__auto___27265);
var G__27269 = 0;
seq__27249_27254 = G__27266;
chunk__27250_27255 = G__27267;
count__27251_27256 = G__27268;
i__27252_27257 = G__27269;
continue;
}
} else
{var node_27270 = cljs.core.first.call(null,seq__27249_27264__$1);node_27270.innerHTML = value_27253;
{
var G__27271 = cljs.core.next.call(null,seq__27249_27264__$1);
var G__27272 = null;
var G__27273 = 0;
var G__27274 = 0;
seq__27249_27254 = G__27271;
chunk__27250_27255 = G__27272;
count__27251_27256 = G__27273;
i__27252_27257 = G__27274;
continue;
}
}
} else
{}
}
break;
}
}catch (e27248){if((e27248 instanceof Error))
{var e_27275 = e27248;domina.replace_children_BANG_.call(null,content,value_27253);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27248;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__4381__auto__ = bubble;if(cljs.core.truth_(and__4381__auto__))
{return (value == null);
} else
{return and__4381__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__4393__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__4393__auto__))
{return or__4393__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__27282_27286 = cljs.core.seq.call(null,children);var chunk__27283_27287 = null;var count__27284_27288 = 0;var i__27285_27289 = 0;while(true){
if((i__27285_27289 < count__27284_27288))
{var child_27290 = cljs.core._nth.call(null,chunk__27283_27287,i__27285_27289);frag.appendChild(child_27290);
{
var G__27291 = seq__27282_27286;
var G__27292 = chunk__27283_27287;
var G__27293 = count__27284_27288;
var G__27294 = (i__27285_27289 + 1);
seq__27282_27286 = G__27291;
chunk__27283_27287 = G__27292;
count__27284_27288 = G__27293;
i__27285_27289 = G__27294;
continue;
}
} else
{var temp__4092__auto___27295 = cljs.core.seq.call(null,seq__27282_27286);if(temp__4092__auto___27295)
{var seq__27282_27296__$1 = temp__4092__auto___27295;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27282_27296__$1))
{var c__5135__auto___27297 = cljs.core.chunk_first.call(null,seq__27282_27296__$1);{
var G__27298 = cljs.core.chunk_rest.call(null,seq__27282_27296__$1);
var G__27299 = c__5135__auto___27297;
var G__27300 = cljs.core.count.call(null,c__5135__auto___27297);
var G__27301 = 0;
seq__27282_27286 = G__27298;
chunk__27283_27287 = G__27299;
count__27284_27288 = G__27300;
i__27285_27289 = G__27301;
continue;
}
} else
{var child_27302 = cljs.core.first.call(null,seq__27282_27296__$1);frag.appendChild(child_27302);
{
var G__27303 = cljs.core.next.call(null,seq__27282_27296__$1);
var G__27304 = null;
var G__27305 = 0;
var G__27306 = 0;
seq__27282_27286 = G__27303;
chunk__27283_27287 = G__27304;
count__27284_27288 = G__27305;
i__27285_27289 = G__27306;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__27276_SHARP_,p2__27277_SHARP_){return f.call(null,p1__27276_SHARP_,p2__27277_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__4381__auto__ = obj;if(cljs.core.truth_(and__4381__auto__))
{var and__4381__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__4381__auto____$1)
{return obj.length;
} else
{return and__4381__auto____$1;
}
} else
{return and__4381__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__27308 = list_thing;if(G__27308)
{var bit__5037__auto__ = (G__27308.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__5037__auto__) || (G__27308.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27308.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__27308);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__27308);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__27309 = content;if(G__27309)
{var bit__5037__auto__ = (G__27309.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__5037__auto__) || (G__27309.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27309.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__27309);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__27309);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__27310 = content;if(G__27310)
{var bit__5037__auto__ = (G__27310.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__5037__auto__) || (G__27310.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27310.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__27310);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__27310);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
