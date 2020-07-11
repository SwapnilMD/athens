goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55984 = arguments.length;
var i__4790__auto___55985 = (0);
while(true){
if((i__4790__auto___55985 < len__4789__auto___55984)){
args__4795__auto__.push((arguments[i__4790__auto___55985]));

var G__55986 = (i__4790__auto___55985 + (1));
i__4790__auto___55985 = G__55986;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq55973){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55973));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55987 = arguments.length;
var i__4790__auto___55988 = (0);
while(true){
if((i__4790__auto___55988 < len__4789__auto___55987)){
args__4795__auto__.push((arguments[i__4790__auto___55988]));

var G__55989 = (i__4790__auto___55988 + (1));
i__4790__auto___55988 = G__55989;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq55982){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55982));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__55983 = "";
var G__55983__$1 = (cljs.core.truth_(re.ignoreCase)?[G__55983,"i"].join(''):G__55983);
var G__55983__$2 = (cljs.core.truth_(re.multiline)?[G__55983__$1,"m"].join(''):G__55983__$1);
if(cljs.core.truth_(re.unicode)){
return [G__55983__$2,"u"].join('');
} else {
return G__55983__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
