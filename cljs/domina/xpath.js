// Compiled by ClojureScript 0.0-2138
goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('domina');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){var doc = goog.dom.getOwnerDocument(node);if(cljs.core.truth_((function (){var and__4381__auto__ = node.selectSingleNode;if(cljs.core.truth_(and__4381__auto__))
{return doc.setProperty;
} else
{return and__4381__auto__;
}
})()))
{doc.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc.evaluate))
{return technique_2.call(null,null,doc,node,path);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("Could not find XPath support in this browser."));
} else
{return null;
}
}
}
});
/**
* Selects a single node using an XPath expression and a root node
*/
domina.xpath.select_node = (function select_node(expr,node){return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node__$1,expr__$1){return node__$1.selectSingleNode(expr__$1);
}),(function (resolver,doc,node__$1,expr__$1){var result = doc.evaluate(expr__$1,node__$1,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);return result.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node__$1,expr__$1){return node__$1.selectNodes(expr__$1);
}),(function (resolver,doc,node__$1,expr__$1){var result = doc.evaluate(expr__$1,node__$1,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);var num_results = result.snapshotLength;var i = 0;var acc = null;while(true){
if((i < num_results))
{{
var G__26827 = (i + 1);
var G__26828 = cljs.core.cons.call(null,result.snapshotItem(i),acc);
i = G__26827;
acc = G__26828;
continue;
}
} else
{return acc;
}
break;
}
}));
});
domina.xpath.root_element = (function root_element(){return (goog.dom.getElementsByTagNameAndClass("html")[0]);
});
/**
* Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.xpath.xpath = (function() {
var xpath = null;
var xpath__1 = (function (expr){return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__2 = (function (base,expr){if(typeof domina.xpath.t26832 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.xpath.t26832 = (function (expr,base,xpath,meta26833){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.meta26833 = meta26833;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.xpath.t26832.cljs$lang$type = true;
domina.xpath.t26832.cljs$lang$ctorStr = "domina.xpath/t26832";
domina.xpath.t26832.cljs$lang$ctorPrWriter = (function (this__4955__auto__,writer__4956__auto__,opt__4957__auto__){return cljs.core._write.call(null,writer__4956__auto__,"domina.xpath/t26832");
});
domina.xpath.t26832.prototype.domina$DomContent$ = true;
domina.xpath.t26832.prototype.domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,self__.expr),domina.nodes.call(null,self__.base));
});
domina.xpath.t26832.prototype.domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,self__.expr),domina.nodes.call(null,self__.base))));
});
domina.xpath.t26832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26834){var self__ = this;
var _26834__$1 = this;return self__.meta26833;
});
domina.xpath.t26832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26834,meta26833__$1){var self__ = this;
var _26834__$1 = this;return (new domina.xpath.t26832(self__.expr,self__.base,self__.xpath,meta26833__$1));
});
domina.xpath.__GT_t26832 = (function __GT_t26832(expr__$1,base__$1,xpath__$1,meta26833){return (new domina.xpath.t26832(expr__$1,base__$1,xpath__$1,meta26833));
});
}
return (new domina.xpath.t26832(expr,base,xpath,null));
});
xpath = function(base,expr){
switch(arguments.length){
case 1:
return xpath__1.call(this,base);
case 2:
return xpath__2.call(this,base,expr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
xpath.cljs$core$IFn$_invoke$arity$1 = xpath__1;
xpath.cljs$core$IFn$_invoke$arity$2 = xpath__2;
return xpath;
})()
;
