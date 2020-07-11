goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__46781 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46782 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46782);

try{try{var seq__46783 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46784 = null;
var count__46785 = (0);
var i__46786 = (0);
while(true){
if((i__46786 < count__46785)){
var vec__46795 = chunk__46784.cljs$core$IIndexed$_nth$arity$2(null,i__46786);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46795,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46795,(1),null);
var temp__5733__auto___46838 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46838)){
var effect_fn_46839 = temp__5733__auto___46838;
(effect_fn_46839.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46839.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46839.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46840 = seq__46783;
var G__46841 = chunk__46784;
var G__46842 = count__46785;
var G__46843 = (i__46786 + (1));
seq__46783 = G__46840;
chunk__46784 = G__46841;
count__46785 = G__46842;
i__46786 = G__46843;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46783);
if(temp__5735__auto__){
var seq__46783__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46783__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46783__$1);
var G__46844 = cljs.core.chunk_rest(seq__46783__$1);
var G__46845 = c__4609__auto__;
var G__46846 = cljs.core.count(c__4609__auto__);
var G__46847 = (0);
seq__46783 = G__46844;
chunk__46784 = G__46845;
count__46785 = G__46846;
i__46786 = G__46847;
continue;
} else {
var vec__46798 = cljs.core.first(seq__46783__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46798,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46798,(1),null);
var temp__5733__auto___46848 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46848)){
var effect_fn_46849 = temp__5733__auto___46848;
(effect_fn_46849.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46849.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46849.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46850 = cljs.core.next(seq__46783__$1);
var G__46851 = null;
var G__46852 = (0);
var G__46853 = (0);
seq__46783 = G__46850;
chunk__46784 = G__46851;
count__46785 = G__46852;
i__46786 = G__46853;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__45947__auto___46857 = re_frame.interop.now();
var duration__45948__auto___46858 = (end__45947__auto___46857 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45948__auto___46858,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__45947__auto___46857);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46781);
}} else {
var seq__46801 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46802 = null;
var count__46803 = (0);
var i__46804 = (0);
while(true){
if((i__46804 < count__46803)){
var vec__46812 = chunk__46802.cljs$core$IIndexed$_nth$arity$2(null,i__46804);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46812,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46812,(1),null);
var temp__5733__auto___46859 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46859)){
var effect_fn_46860 = temp__5733__auto___46859;
(effect_fn_46860.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46860.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46860.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46861 = seq__46801;
var G__46862 = chunk__46802;
var G__46863 = count__46803;
var G__46864 = (i__46804 + (1));
seq__46801 = G__46861;
chunk__46802 = G__46862;
count__46803 = G__46863;
i__46804 = G__46864;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46801);
if(temp__5735__auto__){
var seq__46801__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46801__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46801__$1);
var G__46865 = cljs.core.chunk_rest(seq__46801__$1);
var G__46866 = c__4609__auto__;
var G__46867 = cljs.core.count(c__4609__auto__);
var G__46868 = (0);
seq__46801 = G__46865;
chunk__46802 = G__46866;
count__46803 = G__46867;
i__46804 = G__46868;
continue;
} else {
var vec__46815 = cljs.core.first(seq__46801__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46815,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46815,(1),null);
var temp__5733__auto___46869 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46869)){
var effect_fn_46872 = temp__5733__auto___46869;
(effect_fn_46872.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46872.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46872.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46873 = cljs.core.next(seq__46801__$1);
var G__46874 = null;
var G__46875 = (0);
var G__46876 = (0);
seq__46801 = G__46873;
chunk__46802 = G__46874;
count__46803 = G__46875;
i__46804 = G__46876;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__46818 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46819 = null;
var count__46820 = (0);
var i__46821 = (0);
while(true){
if((i__46821 < count__46820)){
var map__46826 = chunk__46819.cljs$core$IIndexed$_nth$arity$2(null,i__46821);
var map__46826__$1 = (((((!((map__46826 == null))))?(((((map__46826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46826):map__46826);
var effect = map__46826__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46826__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46826__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46818,chunk__46819,count__46820,i__46821,map__46826,map__46826__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46818,chunk__46819,count__46820,i__46821,map__46826,map__46826__$1,effect,ms,dispatch))
,ms);
}


var G__46881 = seq__46818;
var G__46882 = chunk__46819;
var G__46883 = count__46820;
var G__46884 = (i__46821 + (1));
seq__46818 = G__46881;
chunk__46819 = G__46882;
count__46820 = G__46883;
i__46821 = G__46884;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46818);
if(temp__5735__auto__){
var seq__46818__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46818__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46818__$1);
var G__46885 = cljs.core.chunk_rest(seq__46818__$1);
var G__46886 = c__4609__auto__;
var G__46887 = cljs.core.count(c__4609__auto__);
var G__46888 = (0);
seq__46818 = G__46885;
chunk__46819 = G__46886;
count__46820 = G__46887;
i__46821 = G__46888;
continue;
} else {
var map__46828 = cljs.core.first(seq__46818__$1);
var map__46828__$1 = (((((!((map__46828 == null))))?(((((map__46828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46828):map__46828);
var effect = map__46828__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46828__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46828__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46818,chunk__46819,count__46820,i__46821,map__46828,map__46828__$1,effect,ms,dispatch,seq__46818__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46818,chunk__46819,count__46820,i__46821,map__46828,map__46828__$1,effect,ms,dispatch,seq__46818__$1,temp__5735__auto__))
,ms);
}


var G__46891 = cljs.core.next(seq__46818__$1);
var G__46892 = null;
var G__46893 = (0);
var G__46894 = (0);
seq__46818 = G__46891;
chunk__46819 = G__46892;
count__46820 = G__46893;
i__46821 = G__46894;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__46830 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46831 = null;
var count__46832 = (0);
var i__46833 = (0);
while(true){
if((i__46833 < count__46832)){
var event = chunk__46831.cljs$core$IIndexed$_nth$arity$2(null,i__46833);
re_frame.router.dispatch(event);


var G__46899 = seq__46830;
var G__46900 = chunk__46831;
var G__46901 = count__46832;
var G__46902 = (i__46833 + (1));
seq__46830 = G__46899;
chunk__46831 = G__46900;
count__46832 = G__46901;
i__46833 = G__46902;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46830);
if(temp__5735__auto__){
var seq__46830__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46830__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46830__$1);
var G__46903 = cljs.core.chunk_rest(seq__46830__$1);
var G__46904 = c__4609__auto__;
var G__46905 = cljs.core.count(c__4609__auto__);
var G__46906 = (0);
seq__46830 = G__46903;
chunk__46831 = G__46904;
count__46832 = G__46905;
i__46833 = G__46906;
continue;
} else {
var event = cljs.core.first(seq__46830__$1);
re_frame.router.dispatch(event);


var G__46907 = cljs.core.next(seq__46830__$1);
var G__46908 = null;
var G__46909 = (0);
var G__46910 = (0);
seq__46830 = G__46907;
chunk__46831 = G__46908;
count__46832 = G__46909;
i__46833 = G__46910;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__46834 = cljs.core.seq(value);
var chunk__46835 = null;
var count__46836 = (0);
var i__46837 = (0);
while(true){
if((i__46837 < count__46836)){
var event = chunk__46835.cljs$core$IIndexed$_nth$arity$2(null,i__46837);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46913 = seq__46834;
var G__46914 = chunk__46835;
var G__46915 = count__46836;
var G__46916 = (i__46837 + (1));
seq__46834 = G__46913;
chunk__46835 = G__46914;
count__46836 = G__46915;
i__46837 = G__46916;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46834);
if(temp__5735__auto__){
var seq__46834__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46834__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46834__$1);
var G__46917 = cljs.core.chunk_rest(seq__46834__$1);
var G__46918 = c__4609__auto__;
var G__46919 = cljs.core.count(c__4609__auto__);
var G__46920 = (0);
seq__46834 = G__46917;
chunk__46835 = G__46918;
count__46836 = G__46919;
i__46837 = G__46920;
continue;
} else {
var event = cljs.core.first(seq__46834__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46921 = cljs.core.next(seq__46834__$1);
var G__46922 = null;
var G__46923 = (0);
var G__46924 = (0);
seq__46834 = G__46921;
chunk__46835 = G__46922;
count__46836 = G__46923;
i__46837 = G__46924;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
