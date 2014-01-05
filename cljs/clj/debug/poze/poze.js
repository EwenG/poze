// Compiled by ClojureScript 0.0-2138
goog.provide('clj.debug.poze.poze');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('domina');
goog.require('enfocus.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('enfocus.core');
goog.require('domina');
goog.require('om.dom');
goog.require('clojure.browser.repl');
goog.require('goog.net.XhrIo');
goog.require('domina.css');
clj.debug.poze.poze.reset_dom_cache_BANG_ = (function reset_dom_cache_BANG_(){return cljs.core.reset_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.PersistentArrayMap.EMPTY);
});
enfocus.core.load_remote_dom.call(null,"explorer.html?timestamp=1388623941468","remoteexplorer.html?timestamp=1388623941468","en25205_");
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,"remoteexplorer.html?timestamp=1388623941468") == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,"remoteexplorer.html?timestamp=1388623941468",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","NOT_LOADED"], null));
} else
{}
clj.debug.poze.poze.template_demo = (function template_demo(){var vec__25209 = (function (){return enfocus.core.get_cached_snippet.call(null,"remoteexplorer.html?timestamp=1388623941468",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#poze-view"], null));
}).call(null);var id_sym25206 = cljs.core.nth.call(null,vec__25209,0,null);var pnod25207 = cljs.core.nth.call(null,vec__25209,1,null);var pnod25207__$1 = enfocus.core.create_hidden_dom.call(null,pnod25207);enfocus.core.i_at.call(null,id_sym25206,pnod25207__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#poze-view"], null),enfocus.core.append.call(null,""));
enfocus.core.reset_ids.call(null,id_sym25206,pnod25207__$1);
return enfocus.core.remove_node_return_child.call(null,pnod25207__$1);
});
clj.debug.poze.poze.set_css = (function set_css(css_string){return domina.set_text_BANG_.call(null,domina.css.sel.call(null,"#css"),css_string);
});
clj.debug.poze.poze.refresh_css = (function refresh_css(){return goog.net.XhrIo.send([cljs.core.str("css/poze.css?timestamp="),cljs.core.str((new Date()).getTime())].join(''),(function (p1__25210_SHARP_){return clj.debug.poze.poze.set_css.call(null,p1__25210_SHARP_.target.getResponse());
}));
});
clj.debug.poze.poze.in_event = (function in_event(event){return console.log(event);
});
clj.debug.poze.poze.get_explorer_tml2 = "/** @jsx React.DOM */ React.DOM.div( {id:\"explorer\"},    React.DOM.div( {className:\"row\"},      React.DOM.div( {className:\"col-md-6\"}, \"ef2\"),     React.DOM.div( {className:\"col-md-6\"})   ) )";
clj.debug.poze.poze.explorer_react = (function explorer_react(data){if(typeof clj.debug.poze.poze.t25214 !== 'undefined')
{} else
{
/**
* @constructor
*/
clj.debug.poze.poze.t25214 = (function (data,explorer_react,meta25215){
this.data = data;
this.explorer_react = explorer_react;
this.meta25215 = meta25215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj.debug.poze.poze.t25214.cljs$lang$type = true;
clj.debug.poze.poze.t25214.cljs$lang$ctorStr = "clj.debug.poze.poze/t25214";
clj.debug.poze.poze.t25214.cljs$lang$ctorPrWriter = (function (this__4955__auto__,writer__4956__auto__,opt__4957__auto__){return cljs.core._write.call(null,writer__4956__auto__,"clj.debug.poze.poze/t25214");
});
clj.debug.poze.poze.t25214.prototype.om$core$IRender$ = true;
clj.debug.poze.poze.t25214.prototype.om$core$IRender$render$arity$1 = (function (this__5916__auto__){var self__ = this;
var this__5916__auto____$1 = this;return eval(clj.debug.poze.poze.get_explorer_tml2);
});
clj.debug.poze.poze.t25214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25216){var self__ = this;
var _25216__$1 = this;return self__.meta25215;
});
clj.debug.poze.poze.t25214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25216,meta25215__$1){var self__ = this;
var _25216__$1 = this;return (new clj.debug.poze.poze.t25214(self__.data,self__.explorer_react,meta25215__$1));
});
clj.debug.poze.poze.__GT_t25214 = (function __GT_t25214(data__$1,explorer_react__$1,meta25215){return (new clj.debug.poze.poze.t25214(data__$1,explorer_react__$1,meta25215));
});
}
return (new clj.debug.poze.poze.t25214(data,explorer_react,null));
});
