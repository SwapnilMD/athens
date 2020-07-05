goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('datascript.db');
goog.require('me.tonsky.persistent_sorted_set.arrays');
goog.require('datascript.lru');
goog.require('datascript.impl.entity');
goog.require('datascript.parser');
goog.require('datascript.pull_api');
goog.require('datascript.pull_parser');
datascript.query.lru_cache_size = (100);



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k28377,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__28382 = k28377;
var G__28382__$1 = (((G__28382 instanceof cljs.core.Keyword))?G__28382.fqn:null);
switch (G__28382__$1) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28377,else__4442__auto__);

}
}));

(datascript.query.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__28383){
var vec__28384 = p__28383;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28384,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28384,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#datascript.query.Context{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28376){
var self__ = this;
var G__28376__$1 = this;
return (new cljs.core.RecordIter((0),G__28376__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__28387 = (function (coll__4436__auto__){
return (1014232958 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__28387(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28378,other28379){
var self__ = this;
var this28378__$1 = this;
return (((!((other28379 == null)))) && ((this28378__$1.constructor === other28379.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28378__$1.rels,other28379.rels)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28378__$1.sources,other28379.sources)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28378__$1.rules,other28379.rules)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28378__$1.__extmap,other28379.__extmap)));
}));

(datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__28376){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__28389 = cljs.core.keyword_identical_QMARK_;
var expr__28390 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__28392 = new cljs.core.Keyword(null,"rels","rels",1770187185);
var G__28393 = expr__28390;
return (pred__28389.cljs$core$IFn$_invoke$arity$2 ? pred__28389.cljs$core$IFn$_invoke$arity$2(G__28392,G__28393) : pred__28389.call(null,G__28392,G__28393));
})())){
return (new datascript.query.Context(G__28376,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28394 = new cljs.core.Keyword(null,"sources","sources",-321166424);
var G__28395 = expr__28390;
return (pred__28389.cljs$core$IFn$_invoke$arity$2 ? pred__28389.cljs$core$IFn$_invoke$arity$2(G__28394,G__28395) : pred__28389.call(null,G__28394,G__28395));
})())){
return (new datascript.query.Context(self__.rels,G__28376,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28396 = new cljs.core.Keyword(null,"rules","rules",1198912366);
var G__28397 = expr__28390;
return (pred__28389.cljs$core$IFn$_invoke$arity$2 ? pred__28389.cljs$core$IFn$_invoke$arity$2(G__28396,G__28397) : pred__28389.call(null,G__28396,G__28397));
})())){
return (new datascript.query.Context(self__.rels,self__.sources,G__28376,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__28376),null));
}
}
}
}));

(datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules,null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__28376){
var self__ = this;
var this__4438__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__28376,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rels","rels",-884248584,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"rules","rules",-1455523403,null)], null);
}));

(datascript.query.Context.cljs$lang$type = true);

(datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"datascript.query/Context",null,(1),null));
}));

(datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"datascript.query/Context");
}));

/**
 * Positional factory function for datascript.query/Context.
 */
datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

/**
 * Factory function for datascript.query/Context, taking a map of keywords to field values.
 */
datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__28380){
var extmap__4478__auto__ = (function (){var G__28398 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28380,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], 0));
if(cljs.core.record_QMARK_(G__28380)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28398);
} else {
return G__28398;
}
})();
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__28380),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__28380),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__28380),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k28400,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__28404 = k28400;
var G__28404__$1 = (((G__28404 instanceof cljs.core.Keyword))?G__28404.fqn:null);
switch (G__28404__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28400,else__4442__auto__);

}
}));

(datascript.query.Relation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__28406){
var vec__28407 = p__28406;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28407,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28407,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#datascript.query.Relation{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28399){
var self__ = this;
var G__28399__$1 = this;
return (new cljs.core.RecordIter((0),G__28399__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__28410 = (function (coll__4436__auto__){
return (1107093117 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__28410(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28401,other28402){
var self__ = this;
var this28401__$1 = this;
return (((!((other28402 == null)))) && ((this28401__$1.constructor === other28402.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28401__$1.attrs,other28402.attrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28401__$1.tuples,other28402.tuples)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28401__$1.__extmap,other28402.__extmap)));
}));

(datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__28399){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__28411 = cljs.core.keyword_identical_QMARK_;
var expr__28412 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__28414 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713);
var G__28415 = expr__28412;
return (pred__28411.cljs$core$IFn$_invoke$arity$2 ? pred__28411.cljs$core$IFn$_invoke$arity$2(G__28414,G__28415) : pred__28411.call(null,G__28414,G__28415));
})())){
return (new datascript.query.Relation(G__28399,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28416 = new cljs.core.Keyword(null,"tuples","tuples",-676032639);
var G__28417 = expr__28412;
return (pred__28411.cljs$core$IFn$_invoke$arity$2 ? pred__28411.cljs$core$IFn$_invoke$arity$2(G__28416,G__28417) : pred__28411.call(null,G__28416,G__28417));
})())){
return (new datascript.query.Relation(self__.attrs,G__28399,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__28399),null));
}
}
}));

(datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples,null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__28399){
var self__ = this;
var this__4438__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__28399,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"tuples","tuples",964498888,null)], null);
}));

(datascript.query.Relation.cljs$lang$type = true);

(datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"datascript.query/Relation",null,(1),null));
}));

(datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"datascript.query/Relation");
}));

/**
 * Positional factory function for datascript.query/Relation.
 */
datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

/**
 * Factory function for datascript.query/Relation, taking a map of keywords to field values.
 */
datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__28403){
var extmap__4478__auto__ = (function (){var G__28419 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28403,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tuples","tuples",-676032639)], 0));
if(cljs.core.record_QMARK_(G__28403)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28419);
} else {
return G__28419;
}
})();
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__28403),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__28403),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

datascript.query.single = (function datascript$query$single(coll){
if((cljs.core.next(coll) == null)){
} else {
throw (new Error(["Assert failed: ","Expected single element","\n","(nil? (next coll))"].join('')));
}

return cljs.core.first(coll);
});
datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__4795__auto__ = [];
var len__4789__auto___28770 = arguments.length;
var i__4790__auto___28771 = (0);
while(true){
if((i__4790__auto___28771 < len__4789__auto___28770)){
args__4795__auto__.push((arguments[i__4790__auto___28771]));

var G__28772 = (i__4790__auto___28771 + (1));
i__4790__auto___28771 = G__28772;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
}));

(datascript.query.concatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.concatv.cljs$lang$applyTo = (function (seq28420){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28420));
}));

datascript.query.zip = (function datascript$query$zip(var_args){
var G__28425 = arguments.length;
switch (G__28425) {
case 2:
return datascript.query.zip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___28774 = arguments.length;
var i__4790__auto___28775 = (0);
while(true){
if((i__4790__auto___28775 < len__4789__auto___28774)){
args_arr__4810__auto__.push((arguments[i__4790__auto___28775]));

var G__28776 = (i__4790__auto___28775 + (1));
i__4790__auto___28775 = G__28776;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(datascript.query.zip.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,a,b);
}));

(datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.mapv,cljs.core.vector,a,b,rest);
}));

/** @this {Function} */
(datascript.query.zip.cljs$lang$applyTo = (function (seq28422){
var G__28423 = cljs.core.first(seq28422);
var seq28422__$1 = cljs.core.next(seq28422);
var G__28424 = cljs.core.first(seq28422__$1);
var seq28422__$2 = cljs.core.next(seq28422__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28423,G__28424,seq28422__$2);
}));

(datascript.query.zip.cljs$lang$maxFixedArity = (2));

datascript.query.same_keys_QMARK_ = (function datascript$query$same_keys_QMARK_(a,b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(a),cljs.core.count(b))) && (cljs.core.every_QMARK_((function (p1__28426_SHARP_){
return cljs.core.contains_QMARK_(b,p1__28426_SHARP_);
}),cljs.core.keys(a))) && (cljs.core.every_QMARK_((function (p1__28427_SHARP_){
return cljs.core.contains_QMARK_(b,p1__28427_SHARP_);
}),cljs.core.keys(a))));
});
datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern)){
return cljs.core.sequential_QMARK_(form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else {
if(cljs.core.sequential_QMARK_(pattern)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(pattern),new cljs.core.Symbol(null,"*","*",345799209,null))){
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__28433){
var vec__28434 = p__28433;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28434,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28434,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form))));
} else {
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__28441){
var vec__28442 = p__28441;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28442,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28442,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form))));
}
} else {
return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(form) : pattern.call(null,form));

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return (((form instanceof cljs.core.Keyword)) || (typeof form === 'string'));
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = me.tonsky.persistent_sorted_set.arrays.make_array((l1 + l2));
var n__4666__auto___28778 = l1;
var i_28779 = (0);
while(true){
if((i_28779 < n__4666__auto___28778)){
(res[i_28779] = (t1[(idxs1[i_28779])]));

var G__28780 = (i_28779 + (1));
i_28779 = G__28780;
continue;
} else {
}
break;
}

var n__4666__auto___28781 = l2;
var i_28782 = (0);
while(true){
if((i_28782 < n__4666__auto___28781)){
(res[(l1 + i_28782)] = (t2[(idxs2[i_28782])]));

var G__28783 = (i_28782 + (1));
i_28782 = G__28783;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
var map__28445 = a;
var map__28445__$1 = (((((!((map__28445 == null))))?(((((map__28445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28445):map__28445);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28445__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28445__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__28446 = b;
var map__28446__$1 = (((((!((map__28446 == null))))?(((((map__28446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28446):map__28446);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28446__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28446__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attrs_a,attrs_b)){
return (new datascript.query.Relation(attrs_a,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(tuples_a),tuples_b),null,null,null));
} else {
if((!(datascript.query.same_keys_QMARK_(attrs_a,attrs_b)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can\u2019t sum relations with different attrs: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a], 0))," and ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_b], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
if(cljs.core.every_QMARK_(cljs.core.number_QMARK_,cljs.core.vals(attrs_a))){
var idxb__GT_idxa = cljs.core.vec((function (){var iter__4582__auto__ = (function datascript$query$sum_rel_$_iter__28450(s__28451){
return (new cljs.core.LazySeq(null,(function (){
var s__28451__$1 = s__28451;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28451__$1);
if(temp__5735__auto__){
var s__28451__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28451__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__28451__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__28453 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__28452 = (0);
while(true){
if((i__28452 < size__4581__auto__)){
var vec__28454 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__28452);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28454,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28454,(1),null);
cljs.core.chunk_append(b__28453,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null));

var G__28784 = (i__28452 + (1));
i__28452 = G__28784;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28453),datascript$query$sum_rel_$_iter__28450(cljs.core.chunk_rest(s__28451__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28453),null);
}
} else {
var vec__28457 = cljs.core.first(s__28451__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28457,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28457,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null),datascript$query$sum_rel_$_iter__28450(cljs.core.rest(s__28451__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(attrs_b);
})());
var tlen = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(attrs_a)) + (1));
var tuples_SINGLEQUOTE_ = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tuple_b){
var tuple_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.arrays.make_array(tlen);
var seq__28460_28785 = cljs.core.seq(idxb__GT_idxa);
var chunk__28461_28786 = null;
var count__28462_28787 = (0);
var i__28463_28788 = (0);
while(true){
if((i__28463_28788 < count__28462_28787)){
var vec__28470_28789 = chunk__28461_28786.cljs$core$IIndexed$_nth$arity$2(null,i__28463_28788);
var idx_b_28790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28470_28789,(0),null);
var idx_a_28791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28470_28789,(1),null);
(tuple_SINGLEQUOTE_[idx_a_28791] = (tuple_b[idx_b_28790]));


var G__28792 = seq__28460_28785;
var G__28793 = chunk__28461_28786;
var G__28794 = count__28462_28787;
var G__28795 = (i__28463_28788 + (1));
seq__28460_28785 = G__28792;
chunk__28461_28786 = G__28793;
count__28462_28787 = G__28794;
i__28463_28788 = G__28795;
continue;
} else {
var temp__5735__auto___28796 = cljs.core.seq(seq__28460_28785);
if(temp__5735__auto___28796){
var seq__28460_28797__$1 = temp__5735__auto___28796;
if(cljs.core.chunked_seq_QMARK_(seq__28460_28797__$1)){
var c__4609__auto___28798 = cljs.core.chunk_first(seq__28460_28797__$1);
var G__28799 = cljs.core.chunk_rest(seq__28460_28797__$1);
var G__28800 = c__4609__auto___28798;
var G__28801 = cljs.core.count(c__4609__auto___28798);
var G__28802 = (0);
seq__28460_28785 = G__28799;
chunk__28461_28786 = G__28800;
count__28462_28787 = G__28801;
i__28463_28788 = G__28802;
continue;
} else {
var vec__28473_28803 = cljs.core.first(seq__28460_28797__$1);
var idx_b_28804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28473_28803,(0),null);
var idx_a_28805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28473_28803,(1),null);
(tuple_SINGLEQUOTE_[idx_a_28805] = (tuple_b[idx_b_28804]));


var G__28806 = cljs.core.next(seq__28460_28797__$1);
var G__28807 = null;
var G__28808 = (0);
var G__28809 = (0);
seq__28460_28785 = G__28806;
chunk__28461_28786 = G__28807;
count__28462_28787 = G__28808;
i__28463_28788 = G__28809;
continue;
}
} else {
}
}
break;
}

return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,tuple_SINGLEQUOTE_);
}),cljs.core.transient$(cljs.core.vec(tuples_a)),tuples_b));
return (new datascript.query.Relation(attrs_a,tuples_SINGLEQUOTE_,null,null,null));
} else {
var all_attrs = cljs.core.zipmap(cljs.core.keys(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a,attrs_b], 0))),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__28476 = (function (){var G__28478 = (new datascript.query.Relation(all_attrs,cljs.core.PersistentVector.EMPTY,null,null,null));
var G__28479 = a;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__28478,G__28479) : datascript.query.sum_rel.call(null,G__28478,G__28479));
})();
var G__28477 = b;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__28476,G__28477) : datascript.query.sum_rel.call(null,G__28476,G__28477));

}
}
}
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var G__28481 = arguments.length;
switch (G__28481) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array((0))], null),null,null,null));
}));

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,t1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,t2){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
}),acc,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
}));

(datascript.query.prod_rel.cljs$lang$maxFixedArity = 2);

datascript.query._differ_QMARK_ = (function datascript$query$_differ_QMARK_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___28812 = arguments.length;
var i__4790__auto___28813 = (0);
while(true){
if((i__4790__auto___28813 < len__4789__auto___28812)){
args__4795__auto__.push((arguments[i__4790__auto___28813]));

var G__28814 = (i__4790__auto___28813 + (1));
i__4790__auto___28813 = G__28814;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count(xs);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((l / (2)),xs),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((l / (2)),xs));
}));

(datascript.query._differ_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq28483){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28483));
}));

datascript.query._get_else = (function datascript$query$_get_else(db,e,a,else_val){
if((else_val == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("get-else: nil default value is not supported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
}

var temp__5737__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5737__auto__ == null)){
return else_val;
} else {
var datom = temp__5737__auto__;
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
}
});
datascript.query._get_some = (function datascript$query$_get_some(var_args){
var args__4795__auto__ = [];
var len__4789__auto___28815 = arguments.length;
var i__4790__auto___28816 = (0);
while(true){
if((i__4790__auto___28816 < len__4789__auto___28815)){
args__4795__auto__.push((arguments[i__4790__auto___28816]));

var G__28817 = (i__4790__auto___28816 + (1));
i__4790__auto___28816 = G__28817;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db,e,as){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,a){
var temp__5739__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5739__auto__ == null)){
return null;
} else {
var datom = temp__5739__auto__;
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)], null));
}
}),null,as);
}));

(datascript.query._get_some.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(datascript.query._get_some.cljs$lang$applyTo = (function (seq28484){
var G__28485 = cljs.core.first(seq28484);
var seq28484__$1 = cljs.core.next(seq28484);
var G__28486 = cljs.core.first(seq28484__$1);
var seq28484__$2 = cljs.core.next(seq28484__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28485,G__28486,seq28484__$2);
}));

datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity(db,e),a) == null);
});
datascript.query.and_fn = (function datascript$query$and_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___28818 = arguments.length;
var i__4790__auto___28819 = (0);
while(true){
if((i__4790__auto___28819 < len__4789__auto___28818)){
args__4795__auto__.push((arguments[i__4790__auto___28819]));

var G__28820 = (i__4790__auto___28819 + (1));
i__4790__auto___28819 = G__28820;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return b;
} else {
return cljs.core.reduced(b);
}
}),true,args);
}));

(datascript.query.and_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.and_fn.cljs$lang$applyTo = (function (seq28487){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28487));
}));

datascript.query.or_fn = (function datascript$query$or_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___28821 = arguments.length;
var i__4790__auto___28822 = (0);
while(true){
if((i__4790__auto___28822 < len__4789__auto___28821)){
args__4795__auto__.push((arguments[i__4790__auto___28822]));

var G__28823 = (i__4790__auto___28822 + (1));
i__4790__auto___28822 = G__28823;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return cljs.core.reduced(b);
} else {
return b;
}
}),null,args);
}));

(datascript.query.or_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.or_fn.cljs$lang$applyTo = (function (seq28488){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28488));
}));

datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"print-str","print-str",-699700354,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"get-some","get-some",409442058,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null),new cljs.core.Symbol(null,"re-seq","re-seq",-2105554076,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Symbol(null,"println-str","println-str",-2049216703,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"!=","!=",-201205829,null),new cljs.core.Symbol(null,"prn-str","prn-str",-145225943,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"re-pattern","re-pattern",1047705161,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"re-matches","re-matches",-1865705768,null),new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol("clojure.string","includes?","clojure.string/includes?",-1842146260,null),new cljs.core.Symbol(null,"array-map","array-map",1555038968,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol("clojure.string","blank?","clojure.string/blank?",1772874244,null),new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"identical?","identical?",-745864205,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null)],[cljs.core.true_QMARK_,datascript.query.and_fn,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core.print_str,cljs.core._GT_,cljs.core.count,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.not,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core.re_seq,cljs.core._LT__EQ_,clojure.string.starts_with_QMARK_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core.name,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core.rand_int,cljs.core.complement,cljs.core._EQ__EQ_,cljs.core.hash_map,cljs.core.compare,cljs.core.range,cljs.core.max,cljs.core.empty,cljs.core._STAR_,cljs.core.pr_str,cljs.core.println_str,cljs.core.meta,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.prn_str,cljs.core.dec,cljs.core.re_pattern,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core.namespace,cljs.core._,cljs.core.some_QMARK_,cljs.core.pos_QMARK_,cljs.core.rand,cljs.core.re_matches,cljs.core.list,cljs.core.contains_QMARK_,clojure.string.ends_with_QMARK_,cljs.core.subs,cljs.core.mod,clojure.string.includes_QMARK_,cljs.core.array_map,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.type,cljs.core.neg_QMARK_,clojure.string.blank_QMARK_,cljs.core.not_empty,datascript.query.or_fn,cljs.core.identical_QMARK_,cljs.core.set,cljs.core.re_find]);
datascript.query.built_in_aggregates = (function (){var sum = (function datascript$query$sum(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),coll);
});
var avg = (function datascript$query$avg(coll){
return (sum(coll) / cljs.core.count(coll));
});
var median = (function datascript$query$median(coll){
var terms = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(coll);
var size = cljs.core.count(coll);
var med = (size >> (1));
var G__28495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,med);
if(cljs.core.even_QMARK_(size)){
return ((G__28495 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(med - (1)))) / (2));
} else {
return G__28495;
}
});
var variance = (function datascript$query$variance(coll){
var mean = avg(coll);
var sum__$1 = sum((function (){var iter__4582__auto__ = (function datascript$query$variance_$_iter__28496(s__28497){
return (new cljs.core.LazySeq(null,(function (){
var s__28497__$1 = s__28497;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28497__$1);
if(temp__5735__auto__){
var s__28497__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28497__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__28497__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__28499 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__28498 = (0);
while(true){
if((i__28498 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__28498);
var delta = (x - mean);
cljs.core.chunk_append(b__28499,(delta * delta));

var G__28825 = (i__28498 + (1));
i__28498 = G__28825;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28499),datascript$query$variance_$_iter__28496(cljs.core.chunk_rest(s__28497__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28499),null);
}
} else {
var x = cljs.core.first(s__28497__$2);
var delta = (x - mean);
return cljs.core.cons((delta * delta),datascript$query$variance_$_iter__28496(cljs.core.rest(s__28497__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})());
return (sum__$1 / cljs.core.count(coll));
});
var stddev = (function datascript$query$stddev(coll){
return Math.sqrt(variance(coll));
});
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"variance","variance",-1522424942,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"median","median",-2084869638,null),new cljs.core.Symbol(null,"sum","sum",1777518341,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"count-distinct","count-distinct",-1566572514,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"avg","avg",1837937727,null),new cljs.core.Symbol(null,"stddev","stddev",775056588,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"sample","sample",1719555128,null)],[variance,cljs.core.count,median,sum,(function() {
var G__28826 = null;
var G__28826__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__28826__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.last(acc)) < (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__28826 = function(n,coll){
switch(arguments.length){
case 1:
return G__28826__1.call(this,n);
case 2:
return G__28826__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28826.cljs$core$IFn$_invoke$arity$1 = G__28826__1;
G__28826.cljs$core$IFn$_invoke$arity$2 = G__28826__2;
return G__28826;
})()
,(function() {
var G__28827 = null;
var G__28827__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__28827__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.first(acc)) > (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.next(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__28827 = function(n,coll){
switch(arguments.length){
case 1:
return G__28827__1.call(this,n);
case 2:
return G__28827__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28827.cljs$core$IFn$_invoke$arity$1 = G__28827__1;
G__28827.cljs$core$IFn$_invoke$arity$2 = G__28827__2;
return G__28827;
})()
,(function (coll){
return cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(coll));
}),cljs.core.set,avg,stddev,(function() {
var G__28828 = null;
var G__28828__1 = (function (coll){
return cljs.core.rand_nth(coll);
});
var G__28828__2 = (function (n,coll){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.rand_nth(coll);
})));
});
G__28828 = function(n,coll){
switch(arguments.length){
case 1:
return G__28828__1.call(this,n);
case 2:
return G__28828__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28828.cljs$core$IFn$_invoke$arity$1 = G__28828__1;
G__28828.cljs$core$IFn$_invoke$arity$2 = G__28828__2;
return G__28828;
})()
,(function (n,coll){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(coll)));
})]);
})();
datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(rules):rules);
return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),datascript.parser.collect_vars_distinct(binding));
return (new datascript.query.Relation(cljs.core.zipmap(vars,cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((((!((binding == null)))) && ((!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null)))))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
var x__4487__auto__ = (((binding == null))?null:binding);
var m__4488__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__4488__auto__.call(null,binding,value));
} else {
var m__4485__auto__ = (datascript.query.in__GT_rel["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__4485__auto__.call(null,binding,value));
} else {
throw cljs.core.missing_protocol("IBinding.in->rel",binding);
}
}
}
});

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();
}));

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),(0)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
}));

(datascript.parser.BindColl.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to collection ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_(coll)){
return datascript.query.empty_rel(binding__$1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28501_SHARP_){
return datascript.query.in__GT_rel(binding__$1.binding,p1__28501_SHARP_);
}),coll));

}
}
}));

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
if((cljs.core.count(coll) < cljs.core.count(binding__$1.bindings))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not enough elements in a collection ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to bind tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__28502_SHARP_,p2__28503_SHARP_){
return datascript.query.in__GT_rel(p1__28502_SHARP_,p2__28503_SHARP_);
}),binding__$1.bindings,coll));

}
}
}));
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__28504){
var vec__28505 = p__28504;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28505,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28505,(1),null);
if((((binding instanceof datascript.parser.BindScalar)) && ((binding.variable instanceof datascript.parser.SrcVar)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(context,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.assoc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),value);
} else {
if((((binding instanceof datascript.parser.BindScalar)) && ((binding.variable instanceof datascript.parser.RulesVar)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules(value));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,datascript.query.in__GT_rel(binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_in,context,cljs.core.zipmap(bindings,values));
});
/**
 * List of symbols in current pattern that might potentiall be resolved to refs
 */
datascript.query._STAR_lookup_attrs_STAR_ = null;
/**
 * Default pattern source. Lookup refs, patterns, rules will be resolved with it
 */
datascript.query._STAR_implicit_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = (attrs.cljs$core$IFn$_invoke$arity$1 ? attrs.cljs$core$IFn$_invoke$arity$1(attr) : attrs.call(null,attr));
if(cljs.core.contains_QMARK_(datascript.query._STAR_lookup_attrs_STAR_,attr)){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
if(me.tonsky.persistent_sorted_set.arrays.array_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
return eid;

}
}
}
});
} else {
return (function (tuple){
return (tuple[idx]);
});
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count(getters) === (1))){
return cljs.core.first(getters);
} else {
var getters__$1 = cljs.core.to_array(getters);
return (function (tuple){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(getters__$1.map((function (p1__28508_SHARP_){
return (p1__28508_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28508_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__28508_SHARP_.call(null,tuple));
})));
});
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__5737__auto__ = cljs.core.first(tuples__$1);
if((temp__5737__auto__ == null)){
return cljs.core.persistent_BANG_(hash_table);
} else {
var tuple = temp__5737__auto__;
var key = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(tuple) : key_fn.call(null,tuple));
var G__28830 = cljs.core.next(tuples__$1);
var G__28831 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__28830;
hash_table = G__28831;
continue;
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28511_SHARP_){
return datascript.query.getter_fn(attrs1,p1__28511_SHARP_);
}),common_attrs);
var common_gtrs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28512_SHARP_){
return datascript.query.getter_fn(attrs2,p1__28512_SHARP_);
}),common_attrs);
var keep_attrs1 = cljs.core.keys(attrs1);
var keep_attrs2 = cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs2)),cljs.core.set(cljs.core.keys(attrs1))));
var keep_idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn(common_gtrs1);
var hash = datascript.query.hash_attrs(key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn(common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tuple2){
var key = (key_fn2.cljs$core$IFn$_invoke$arity$1 ? key_fn2.cljs$core$IFn$_invoke$arity$1(tuple2) : key_fn2.call(null,tuple2));
var temp__5737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hash,key);
if((temp__5737__auto__ == null)){
return acc;
} else {
var tuples1__$1 = temp__5737__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,tuple1){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(tuple1,keep_idxs1,tuple2,keep_idxs2));
}),acc,tuples1__$1);
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keep_attrs1,keep_attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),new_tuples,null,null,null));
});
datascript.query.subtract_rel = (function datascript$query$subtract_rel(a,b){
var map__28516 = a;
var map__28516__$1 = (((((!((map__28516 == null))))?(((((map__28516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28516):map__28516);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28516__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28516__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__28517 = b;
var map__28517__$1 = (((((!((map__28517 == null))))?(((((map__28517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28517):map__28517);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28517__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28517__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var attrs = datascript.query.intersect_keys(attrs_a,attrs_b);
var getters_b = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28513_SHARP_){
return datascript.query.getter_fn(attrs_b,p1__28513_SHARP_);
}),attrs);
var key_fn_b = datascript.query.tuple_key_fn(getters_b);
var hash = datascript.query.hash_attrs(key_fn_b,tuples_b);
var getters_a = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28514_SHARP_){
return datascript.query.getter_fn(attrs_a,p1__28514_SHARP_);
}),attrs);
var key_fn_a = datascript.query.tuple_key_fn(getters_a);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.filterv((function (p1__28515_SHARP_){
return ((function (){var G__28520 = (key_fn_a.cljs$core$IFn$_invoke$arity$1 ? key_fn_a.cljs$core$IFn$_invoke$arity$1(p1__28515_SHARP_) : key_fn_a.call(null,p1__28515_SHARP_));
return (hash.cljs$core$IFn$_invoke$arity$1 ? hash.cljs$core$IFn$_invoke$arity$1(G__28520) : hash.call(null,G__28520));
})() == null);
}),tuples_a));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28521_SHARP_){
if((p1__28521_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__28521_SHARP_;
}
}),pattern);
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__28522){
var vec__28523 = p__28522;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28523,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28523,(1),null);
return datascript.query.free_var_QMARK_(s);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__4174__auto__ = tuple__$1;
if(cljs.core.truth_(and__4174__auto__)){
return pattern__$1;
} else {
return and__4174__auto__;
}
})())){
var t = cljs.core.first(tuple__$1);
var p = cljs.core.first(pattern__$1);
if((((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p)))){
var G__28832 = cljs.core.next(tuple__$1);
var G__28833 = cljs.core.next(pattern__$1);
tuple__$1 = G__28832;
pattern__$1 = G__28833;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28527_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__28527_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__28528){
var vec__28529 = p__28528;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28529,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28529,(1),null);
return datascript.query.free_var_QMARK_(s);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
return clause;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$ISearch$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db(source,pattern);
} else {
return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5737__auto__ = cljs.core.first(rels__$1);
if((temp__5737__auto__ == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
} else {
var rel = temp__5737__auto__;
if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))){
var G__28835 = cljs.core.next(rels__$1);
var G__28836 = datascript.query.hash_join(rel,new_rel__$1);
var G__28837 = acc;
rels__$1 = G__28835;
new_rel__$1 = G__28836;
acc = G__28837;
continue;
} else {
var G__28838 = cljs.core.next(rels__$1);
var G__28839 = new_rel__$1;
var G__28840 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__28838;
new_rel__$1 = G__28839;
acc = G__28840;
continue;
}
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some((function (p1__28533_SHARP_){
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__28533_SHARP_),sym)){
return p1__28533_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__5739__auto__ = datascript.query.rel_with_attr(context,sym);
if((temp__5739__auto__ == null)){
return null;
} else {
var rel = temp__5739__auto__;
var temp__5739__auto____$1 = cljs.core.first(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
if((temp__5739__auto____$1 == null)){
return null;
} else {
var tuple = temp__5739__auto____$1;
return (tuple[(function (){var fexpr__28534 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
return (fexpr__28534.cljs$core$IFn$_invoke$arity$1 ? fexpr__28534.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__28534.call(null,sym));
})()]);
}
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return cljs.core.some((function (p1__28535_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__28535_SHARP_);
}),attrs);
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28536_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__28536_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),(function (p1__28537_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__28537_SHARP_);
})),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context);
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count(args);
var static_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var tuples_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var n__4666__auto___28841 = len;
var i_28842 = (0);
while(true){
if((i_28842 < n__4666__auto___28841)){
var arg_28843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,i_28842);
if((arg_28843 instanceof cljs.core.Symbol)){
var temp__5737__auto___28844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sources,arg_28843);
if((temp__5737__auto___28844 == null)){
(tuples_args[i_28842] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,arg_28843));
} else {
var source_28845 = temp__5737__auto___28844;
(static_args[i_28842] = source_28845);
}
} else {
(static_args[i_28842] = arg_28843);
}

var G__28846 = (i_28842 + (1));
i_28842 = G__28846;
continue;
} else {
}
break;
}

if((f === cljs.core.vector)){
return (function (tuple){
var args__$1 = me.tonsky.persistent_sorted_set.arrays.aclone(static_args);
var n__4666__auto___28847 = len;
var i_28848 = (0);
while(true){
if((i_28848 < n__4666__auto___28847)){
var temp__5739__auto___28849 = (tuples_args[i_28848]);
if((temp__5739__auto___28849 == null)){
} else {
var tuple_idx_28850 = temp__5739__auto___28849;
var v_28851 = (tuple[tuple_idx_28850]);
(args__$1[i_28848] = v_28851);
}

var G__28852 = (i_28848 + (1));
i_28848 = G__28852;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});
} else {
return (function (tuple){
var n__4666__auto___28853 = len;
var i_28854 = (0);
while(true){
if((i_28854 < n__4666__auto___28853)){
var temp__5739__auto___28855 = (tuples_args[i_28854]);
if((temp__5739__auto___28855 == null)){
} else {
var tuple_idx_28856 = temp__5739__auto___28855;
var v_28857 = (tuple[tuple_idx_28856]);
(static_args[i_28854] = v_28857);
}

var G__28858 = (i_28854 + (1));
i_28854 = G__28858;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,static_args);
});
}
});
datascript.query.resolve_sym = (function datascript$query$resolve_sym(sym){
return null;
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__28540 = clause;
var vec__28543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28540,(0),null);
var seq__28544 = cljs.core.seq(vec__28543);
var first__28545 = cljs.core.first(seq__28544);
var seq__28544__$1 = cljs.core.next(seq__28544);
var f = first__28545;
var args = seq__28544__$1;
var pred = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown predicate '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__28546 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28546,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28546,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),(function (p1__28539_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__28539_SHARP_);
}));
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__28549 = clause;
var vec__28552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28549,(0),null);
var seq__28553 = cljs.core.seq(vec__28552);
var first__28554 = cljs.core.first(seq__28553);
var seq__28553__$1 = cljs.core.next(seq__28553);
var f = first__28554;
var args = seq__28553__$1;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28549,(1),null);
var binding = datascript.parser.parse_binding(out);
var fun = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown function '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__28555 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28555,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28555,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var rels = (function (){var iter__4582__auto__ = (function datascript$query$bind_by_fn_$_iter__28558(s__28559){
return (new cljs.core.LazySeq(null,(function (){
var s__28559__$1 = s__28559;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28559__$1);
if(temp__5735__auto__){
var s__28559__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28559__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__28559__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__28561 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__28560 = (0);
while(true){
if((i__28560 < size__4581__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__28560);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if((!((val == null)))){
cljs.core.chunk_append(b__28561,datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)));

var G__28860 = (i__28560 + (1));
i__28560 = G__28860;
continue;
} else {
var G__28861 = (i__28560 + (1));
i__28560 = G__28861;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28561),datascript$query$bind_by_fn_$_iter__28558(cljs.core.chunk_rest(s__28559__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28561),null);
}
} else {
var tuple = cljs.core.first(s__28559__$2);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if((!((val == null)))){
return cljs.core.cons(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)),datascript$query$bind_by_fn_$_iter__28558(cljs.core.rest(s__28559__$2)));
} else {
var G__28862 = cljs.core.rest(s__28559__$2);
s__28559__$1 = G__28862;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_(rels)){
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(production,datascript.query.empty_rel(binding));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
}
})():datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel(binding)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
return ((cljs.core.sequential_QMARK_(clause)) && (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),((datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause)))));
});
datascript.query.rule_seqid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__28564 = clause;
var seq__28565 = cljs.core.seq(vec__28564);
var first__28566 = cljs.core.first(seq__28565);
var seq__28565__$1 = cljs.core.next(seq__28565);
var rule = first__28566;
var call_args = seq__28565__$1;
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__4582__auto__ = (function datascript$query$expand_rule_$_iter__28567(s__28568){
return (new cljs.core.LazySeq(null,(function (){
var s__28568__$1 = s__28568;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28568__$1);
if(temp__5735__auto__){
var s__28568__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28568__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__28568__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__28570 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__28569 = (0);
while(true){
if((i__28569 < size__4581__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__28569);
var vec__28571 = branch;
var seq__28572 = cljs.core.seq(vec__28571);
var first__28573 = cljs.core.first(seq__28572);
var seq__28572__$1 = cljs.core.next(seq__28572);
var vec__28574 = first__28573;
var seq__28575 = cljs.core.seq(vec__28574);
var first__28576 = cljs.core.first(seq__28575);
var seq__28575__$1 = cljs.core.next(seq__28575);
var _ = first__28576;
var rule_args = seq__28575__$1;
var clauses = seq__28572__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__28570,clojure.walk.postwalk(((function (i__28569,vec__28571,seq__28572,first__28573,seq__28572__$1,vec__28574,seq__28575,first__28576,seq__28575__$1,_,rule_args,clauses,replacements,branch,c__4580__auto__,size__4581__auto__,b__28570,s__28568__$2,temp__5735__auto__,vec__28564,seq__28565,first__28566,seq__28565__$1,rule,call_args,seqid,branches){
return (function (p1__28563_SHARP_){
if(datascript.query.free_var_QMARK_(p1__28563_SHARP_)){
var x__25000__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__28563_SHARP_) : replacements.call(null,p1__28563_SHARP_));
if((x__25000__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__28563_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__25000__auto__;
}
} else {
return p1__28563_SHARP_;
}
});})(i__28569,vec__28571,seq__28572,first__28573,seq__28572__$1,vec__28574,seq__28575,first__28576,seq__28575__$1,_,rule_args,clauses,replacements,branch,c__4580__auto__,size__4581__auto__,b__28570,s__28568__$2,temp__5735__auto__,vec__28564,seq__28565,first__28566,seq__28565__$1,rule,call_args,seqid,branches))
,clauses));

var G__28863 = (i__28569 + (1));
i__28569 = G__28863;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28570),datascript$query$expand_rule_$_iter__28567(cljs.core.chunk_rest(s__28568__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28570),null);
}
} else {
var branch = cljs.core.first(s__28568__$2);
var vec__28577 = branch;
var seq__28578 = cljs.core.seq(vec__28577);
var first__28579 = cljs.core.first(seq__28578);
var seq__28578__$1 = cljs.core.next(seq__28578);
var vec__28580 = first__28579;
var seq__28581 = cljs.core.seq(vec__28580);
var first__28582 = cljs.core.first(seq__28581);
var seq__28581__$1 = cljs.core.next(seq__28581);
var _ = first__28582;
var rule_args = seq__28581__$1;
var clauses = seq__28578__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__28577,seq__28578,first__28579,seq__28578__$1,vec__28580,seq__28581,first__28582,seq__28581__$1,_,rule_args,clauses,replacements,branch,s__28568__$2,temp__5735__auto__,vec__28564,seq__28565,first__28566,seq__28565__$1,rule,call_args,seqid,branches){
return (function (p1__28563_SHARP_){
if(datascript.query.free_var_QMARK_(p1__28563_SHARP_)){
var x__25000__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__28563_SHARP_) : replacements.call(null,p1__28563_SHARP_));
if((x__25000__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__28563_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__25000__auto__;
}
} else {
return p1__28563_SHARP_;
}
});})(vec__28577,seq__28578,first__28579,seq__28578__$1,vec__28580,seq__28581,first__28582,seq__28581__$1,_,rule_args,clauses,replacements,branch,s__28568__$2,temp__5735__auto__,vec__28564,seq__28565,first__28566,seq__28565__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__28567(cljs.core.rest(s__28568__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__28583){
var vec__28584 = p__28583;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28584,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28584,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__28587 = rule_clause;
var seq__28588 = cljs.core.seq(vec__28587);
var first__28589 = cljs.core.first(seq__28588);
var seq__28588__$1 = cljs.core.next(seq__28588);
var rule = first__28589;
var call_args = seq__28588__$1;
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__4582__auto__ = (function datascript$query$rule_gen_guards_$_iter__28590(s__28591){
return (new cljs.core.LazySeq(null,(function (){
var s__28591__$1 = s__28591;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28591__$1);
if(temp__5735__auto__){
var s__28591__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28591__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__28591__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__28593 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__28592 = (0);
while(true){
if((i__28592 < size__4581__auto__)){
var prev_args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__28592);
var vec__28594 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28594,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28594,(1),null);
cljs.core.chunk_append(b__28593,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null));

var G__28864 = (i__28592 + (1));
i__28592 = G__28864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28593),datascript$query$rule_gen_guards_$_iter__28590(cljs.core.chunk_rest(s__28591__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28593),null);
}
} else {
var prev_args = cljs.core.first(s__28591__$2);
var vec__28597 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28597,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28597,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__28590(cljs.core.rest(s__28591__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk((function (p1__28600_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__28600_SHARP_) : pred.call(null,p1__28600_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__28600_SHARP_);
} else {
}

return p1__28600_SHARP_;
}),form);

return cljs.core.deref(res);
});
datascript.query.collect_vars = (function datascript$query$collect_vars(clause){
return cljs.core.set(datascript.query.walk_collect(clause,datascript.query.free_var_QMARK_));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = datascript.query.collect_vars(clauses);
var pred = (function (p__28601){
var vec__28602 = p__28601;
var vec__28605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28602,(0),null);
var seq__28606 = cljs.core.seq(vec__28605);
var first__28607 = cljs.core.first(seq__28606);
var seq__28606__$1 = cljs.core.next(seq__28606);
var _ = first__28607;
var vars = seq__28606__$1;
return cljs.core.every_QMARK_(bound_vars,vars);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var solve = (function (prefix_context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});
var empty_rels_QMARK_ = (function (context__$1){
return cljs.core.some((function (p1__28608_SHARP_){
return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__28608_SHARP_));
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});
var stack = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null),null,(1),null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__5737__auto__ = cljs.core.first(stack);
if((temp__5737__auto__ == null)){
return rel;
} else {
var frame = temp__5737__auto__;
var vec__28628 = cljs.core.split_with(((function (stack,rel,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__28609_SHARP_){
return (!(datascript.query.rule_QMARK_(context,p1__28609_SHARP_)));
});})(stack,rel,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28628,(0),null);
var vec__28631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28628,(1),null);
var seq__28632 = cljs.core.seq(vec__28631);
var first__28633 = cljs.core.first(seq__28632);
var seq__28632__$1 = cljs.core.next(seq__28632);
var rule_clause = first__28633;
var next_clauses = seq__28632__$1;
if((rule_clause == null)){
var context__$1 = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__28866 = cljs.core.next(stack);
var G__28867 = datascript.query.sum_rel(rel,new_rel);
stack = G__28866;
rel = G__28867;
continue;
} else {
var vec__28634 = rule_clause;
var seq__28635 = cljs.core.seq(vec__28634);
var first__28636 = cljs.core.first(seq__28635);
var seq__28635__$1 = cljs.core.next(seq__28635);
var rule = first__28636;
var call_args = seq__28635__$1;
var guards = datascript.query.rule_gen_guards(rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__28637 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28637,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28637,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__28634,seq__28635,first__28636,seq__28635__$1,rule,call_args,guards,vec__28637,active_gs,pending_gs,vec__28628,clauses,vec__28631,seq__28632,first__28633,seq__28632__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__28611_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__28611_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__28634,seq__28635,first__28636,seq__28635__$1,rule,call_args,guards,vec__28637,active_gs,pending_gs,vec__28628,clauses,vec__28631,seq__28632,first__28633,seq__28632__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__28868 = cljs.core.next(stack);
var G__28869 = rel;
stack = G__28868;
rel = G__28869;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__28870 = cljs.core.next(stack);
var G__28871 = rel;
stack = G__28870;
rel = G__28871;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__28872 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4582__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__28634,seq__28635,first__28636,seq__28635__$1,rule,call_args,guards,vec__28637,active_gs,pending_gs,vec__28628,clauses,vec__28631,seq__28632,first__28633,seq__28632__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__28640(s__28641){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__28634,seq__28635,first__28636,seq__28635__$1,rule,call_args,guards,vec__28637,active_gs,pending_gs,vec__28628,clauses,vec__28631,seq__28632,first__28633,seq__28632__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__28641__$1 = s__28641;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28641__$1);
if(temp__5735__auto__){
var s__28641__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28641__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__28641__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__28643 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__28642 = (0);
while(true){
if((i__28642 < size__4581__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__28642);
cljs.core.chunk_append(b__28643,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__28879 = (i__28642 + (1));
i__28642 = G__28879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28643),datascript$query$solve_rule_$_iter__28640(cljs.core.chunk_rest(s__28641__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28643),null);
}
} else {
var branch = cljs.core.first(s__28641__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datascript$query$solve_rule_$_iter__28640(cljs.core.rest(s__28641__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__28634,seq__28635,first__28636,seq__28635__$1,rule,call_args,guards,vec__28637,active_gs,pending_gs,vec__28628,clauses,vec__28631,seq__28632,first__28633,seq__28632__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__28634,seq__28635,first__28636,seq__28635__$1,rule,call_args,guards,vec__28637,active_gs,pending_gs,vec__28628,clauses,vec__28631,seq__28632,first__28633,seq__28632__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__4582__auto__(branches);
})(),cljs.core.next(stack));
var G__28873 = rel;
stack = G__28872;
rel = G__28873;
continue;
}
}
}
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source))){
var vec__28646 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28646,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28646,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28646,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28646,(3),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4185__auto__ = datascript.query.lookup_ref_QMARK_(e);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return datascript.query.attr_QMARK_(e);
}
})())?datascript.db.entid_strict(source,e):e),a,(cljs.core.truth_((function (){var and__4174__auto__ = v;
if(cljs.core.truth_(and__4174__auto__)){
if(datascript.query.attr_QMARK_(a)){
if(datascript.db.ref_QMARK_(source,a)){
var or__4185__auto__ = datascript.query.lookup_ref_QMARK_(v);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return datascript.query.attr_QMARK_(v);
}
} else {
return false;
}
} else {
return false;
}
} else {
return and__4174__auto__;
}
})())?datascript.db.entid_strict(source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(tx))?datascript.db.entid_strict(source,tx):tx)], null),(0),cljs.core.count(pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__28649 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28649,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28649,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28649,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28649,(3),null);
var G__28652 = cljs.core.PersistentHashSet.EMPTY;
var G__28652__$1 = ((datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__28652,e):G__28652);
var G__28652__$2 = ((datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__28652__$1,tx):G__28652__$1);
if(((datascript.query.free_var_QMARK_(v)) && ((!(datascript.query.free_var_QMARK_(a)))) && (datascript.db.ref_QMARK_(source,a)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__28652__$2,v);
} else {
return G__28652__$2;
}
});
datascript.query.limit_rel = (function datascript$query$limit_rel(rel,vars){
var temp__5739__auto__ = cljs.core.not_empty(cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),vars));
if((temp__5739__auto__ == null)){
return null;
} else {
var attrs_SINGLEQUOTE_ = temp__5739__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rel,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs_SINGLEQUOTE_);
}
});
datascript.query.limit_context = (function datascript$query$limit_context(context,vars){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__28653_SHARP_){
return datascript.query.limit_rel(p1__28653_SHARP_,vars);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.check_bound = (function datascript$query$check_bound(context,vars,form){
var bound = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__28654_SHARP_){
return cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__28654_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)], 0)));
if(clojure.set.subset_QMARK_(vars,bound)){
return null;
} else {
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(vars),bound);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing], null));
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(var_args){
var G__28661 = arguments.length;
switch (G__28661) {
case 2:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2 = (function (context,clause){
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,clause,clause);
}));

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3 = (function (context,clause,orig_clause){
while(true){
var pred__28662 = datascript.query.looks_like_QMARK_;
var expr__28663 = clause;
if(cljs.core.truth_((function (){var G__28665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);
var G__28666 = expr__28663;
return (pred__28662.cljs$core$IFn$_invoke$arity$2 ? pred__28662.cljs$core$IFn$_invoke$arity$2(G__28665,G__28666) : pred__28662.call(null,G__28665,G__28666));
})())){
return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__28667 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
var G__28668 = expr__28663;
return (pred__28662.cljs$core$IFn$_invoke$arity$2 ? pred__28662.cljs$core$IFn$_invoke$arity$2(G__28667,G__28668) : pred__28662.call(null,G__28667,G__28668));
})())){
return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__28669 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.source_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__28670 = expr__28663;
return (pred__28662.cljs$core$IFn$_invoke$arity$2 ? pred__28662.cljs$core$IFn$_invoke$arity$2(G__28669,G__28670) : pred__28662.call(null,G__28669,G__28670));
})())){
var vec__28671 = clause;
var seq__28672 = cljs.core.seq(vec__28671);
var first__28673 = cljs.core.first(seq__28672);
var seq__28672__$1 = cljs.core.next(seq__28672);
var source_sym = first__28673;
var rest = seq__28672__$1;
var _STAR_implicit_source_STAR__orig_val__28674 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__28675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__28675);

try{return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,rest,clause);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__28674);
}} else {
if(cljs.core.truth_((function (){var G__28676 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__28677 = expr__28663;
return (pred__28662.cljs$core$IFn$_invoke$arity$2 ? pred__28662.cljs$core$IFn$_invoke$arity$2(G__28676,G__28677) : pred__28662.call(null,G__28676,G__28677));
})())){
var vec__28678 = clause;
var seq__28679 = cljs.core.seq(vec__28678);
var first__28680 = cljs.core.first(seq__28679);
var seq__28679__$1 = cljs.core.next(seq__28679);
var _ = first__28680;
var branches = seq__28679__$1;
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__28678,seq__28679,first__28680,seq__28679__$1,_,branches,pred__28662,expr__28663){
return (function (p1__28655_SHARP_){
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(context,p1__28655_SHARP_) : datascript.query.resolve_clause.call(null,context,p1__28655_SHARP_));
});})(context,clause,orig_clause,vec__28678,seq__28679,first__28680,seq__28679__$1,_,branches,pred__28662,expr__28663))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__28678,seq__28679,first__28680,seq__28679__$1,_,branches,contexts,pred__28662,expr__28663){
return (function (p1__28656_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__28656_SHARP_));
});})(context,clause,orig_clause,vec__28678,seq__28679,first__28680,seq__28679__$1,_,branches,contexts,pred__28662,expr__28663))
,contexts);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(contexts),new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels)], null));
} else {
if(cljs.core.truth_((function (){var G__28681 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__28682 = expr__28663;
return (pred__28662.cljs$core$IFn$_invoke$arity$2 ? pred__28662.cljs$core$IFn$_invoke$arity$2(G__28681,G__28682) : pred__28662.call(null,G__28681,G__28682));
})())){
var vec__28683 = clause;
var seq__28684 = cljs.core.seq(vec__28683);
var first__28685 = cljs.core.first(seq__28684);
var seq__28684__$1 = cljs.core.next(seq__28684);
var _ = first__28685;
var first__28685__$1 = cljs.core.first(seq__28684__$1);
var seq__28684__$2 = cljs.core.next(seq__28684__$1);
var vec__28686 = first__28685__$1;
var seq__28687 = cljs.core.seq(vec__28686);
var first__28688 = cljs.core.first(seq__28687);
var seq__28687__$1 = cljs.core.next(seq__28687);
var req_vars = first__28688;
var vars = seq__28687__$1;
var branches = seq__28684__$2;
datascript.query.check_bound(context,req_vars,orig_clause);

var G__28898 = context;
var G__28899 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"or-join","or-join",591375469,null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_vars,vars),branches);
var G__28900 = clause;
context = G__28898;
clause = G__28899;
orig_clause = G__28900;
continue;
} else {
if(cljs.core.truth_((function (){var G__28689 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__28690 = expr__28663;
return (pred__28662.cljs$core$IFn$_invoke$arity$2 ? pred__28662.cljs$core$IFn$_invoke$arity$2(G__28689,G__28690) : pred__28662.call(null,G__28689,G__28690));
})())){
var vec__28691 = clause;
var seq__28692 = cljs.core.seq(vec__28691);
var first__28693 = cljs.core.first(seq__28692);
var seq__28692__$1 = cljs.core.next(seq__28692);
var _ = first__28693;
var first__28693__$1 = cljs.core.first(seq__28692__$1);
var seq__28692__$2 = cljs.core.next(seq__28692__$1);
var vars = first__28693__$1;
var branches = seq__28692__$2;
var vars__$1 = cljs.core.set(vars);
var join_context = datascript.query.limit_context(context,vars__$1);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__28691,seq__28692,first__28693,seq__28692__$1,_,first__28693__$1,seq__28692__$2,vars,branches,vars__$1,join_context,pred__28662,expr__28663){
return (function (p1__28657_SHARP_){
return datascript.query.limit_context((datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(join_context,p1__28657_SHARP_) : datascript.query.resolve_clause.call(null,join_context,p1__28657_SHARP_)),vars__$1);
});})(context,clause,orig_clause,vec__28691,seq__28692,first__28693,seq__28692__$1,_,first__28693__$1,seq__28692__$2,vars,branches,vars__$1,join_context,pred__28662,expr__28663))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__28691,seq__28692,first__28693,seq__28692__$1,_,first__28693__$1,seq__28692__$2,vars,branches,vars__$1,join_context,contexts,pred__28662,expr__28663){
return (function (p1__28658_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__28658_SHARP_));
});})(context,clause,orig_clause,vec__28691,seq__28692,first__28693,seq__28692__$1,_,first__28693__$1,seq__28692__$2,vars,branches,vars__$1,join_context,contexts,pred__28662,expr__28663))
,contexts);
var sum_rel = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,sum_rel);
} else {
if(cljs.core.truth_((function (){var G__28695 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__28696 = expr__28663;
return (pred__28662.cljs$core$IFn$_invoke$arity$2 ? pred__28662.cljs$core$IFn$_invoke$arity$2(G__28695,G__28696) : pred__28662.call(null,G__28695,G__28696));
})())){
var vec__28697 = clause;
var seq__28698 = cljs.core.seq(vec__28697);
var first__28699 = cljs.core.first(seq__28698);
var seq__28698__$1 = cljs.core.next(seq__28698);
var _ = first__28699;
var clauses = seq__28698__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
} else {
if(cljs.core.truth_((function (){var G__28700 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__28701 = expr__28663;
return (pred__28662.cljs$core$IFn$_invoke$arity$2 ? pred__28662.cljs$core$IFn$_invoke$arity$2(G__28700,G__28701) : pred__28662.call(null,G__28700,G__28701));
})())){
var vec__28702 = clause;
var seq__28703 = cljs.core.seq(vec__28702);
var first__28704 = cljs.core.first(seq__28703);
var seq__28703__$1 = cljs.core.next(seq__28703);
var _ = first__28704;
var clauses = seq__28703__$1;
var bound_vars = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (context,clause,orig_clause,vec__28702,seq__28703,first__28704,seq__28703__$1,_,clauses,pred__28662,expr__28663){
return (function (p1__28659_SHARP_){
return cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__28659_SHARP_));
});})(context,clause,orig_clause,vec__28702,seq__28703,first__28704,seq__28703__$1,_,clauses,pred__28662,expr__28663))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)], 0)));
var negation_vars = datascript.query.collect_vars(clauses);
var ___$1 = ((cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(bound_vars,negation_vars)))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: none of ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([negation_vars], 0))," is bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orig_clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),orig_clause], null))})():null);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var negation_context = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context_SINGLEQUOTE_,clauses);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__28705 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__28706 = expr__28663;
return (pred__28662.cljs$core$IFn$_invoke$arity$2 ? pred__28662.cljs$core$IFn$_invoke$arity$2(G__28705,G__28706) : pred__28662.call(null,G__28705,G__28706));
})())){
var vec__28707 = clause;
var seq__28708 = cljs.core.seq(vec__28707);
var first__28709 = cljs.core.first(seq__28708);
var seq__28708__$1 = cljs.core.next(seq__28708);
var _ = first__28709;
var first__28709__$1 = cljs.core.first(seq__28708__$1);
var seq__28708__$2 = cljs.core.next(seq__28708__$1);
var vars = first__28709__$1;
var clauses = seq__28708__$2;
var ___$1 = datascript.query.check_bound(context,vars,orig_clause);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var join_context = datascript.query.limit_context(context_SINGLEQUOTE_,vars);
var negation_context = datascript.query.limit_context(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,join_context,clauses),vars);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__28710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__28711 = expr__28663;
return (pred__28662.cljs$core$IFn$_invoke$arity$2 ? pred__28662.cljs$core$IFn$_invoke$arity$2(G__28710,G__28711) : pred__28662.call(null,G__28710,G__28711));
})())){
var source = datascript.query._STAR_implicit_source_STAR_;
var pattern = datascript.query.resolve_pattern_lookup_refs(source,clause);
var relation = datascript.query.lookup_pattern(source,pattern);
var _STAR_lookup_attrs_STAR__orig_val__28712 = datascript.query._STAR_lookup_attrs_STAR_;
var _STAR_lookup_attrs_STAR__temp_val__28713 = (((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source)))?datascript.query.dynamic_lookup_attrs(source,pattern):datascript.query._STAR_lookup_attrs_STAR_);
(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__temp_val__28713);

try{return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,relation);
}finally {(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__orig_val__28712);
}} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28663)].join('')));
}
}
}
}
}
}
}
}
}
}
break;
}
}));

(datascript.query._resolve_clause.cljs$lang$maxFixedArity = 3);

datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(datascript.query.rule_QMARK_(context,clause)){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
var _STAR_implicit_source_STAR__orig_val__28715 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__28716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),cljs.core.first(clause));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__28716);

try{var G__28717 = context;
var G__28718 = cljs.core.next(clause);
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(G__28717,G__28718) : datascript.query.resolve_clause.call(null,G__28717,G__28718));
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__28715);
}} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,datascript.query.solve_rule(context,clause));
}
} else {
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2(context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
var _STAR_implicit_source_STAR__orig_val__28719 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__28720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Symbol(null,"$","$",-1580747756,null));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__28720);

try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__28719);
}});
datascript.query._collect = (function datascript$query$_collect(var_args){
var G__28723 = arguments.length;
switch (G__28723) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array(cljs.core.count(symbols))], null),rels,symbols);
}));

(datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var temp__5737__auto__ = cljs.core.first(rels);
if((temp__5737__auto__ == null)){
return acc;
} else {
var rel = temp__5737__auto__;
var keep_attrs = cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_(keep_attrs)){
var G__28903 = acc;
var G__28904 = cljs.core.next(rels);
var G__28905 = symbols;
acc = G__28903;
rels = G__28904;
symbols = G__28905;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel,temp__5737__auto__){
return (function (p1__28721_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__28721_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__5737__auto__))
,symbols));
var len = cljs.core.count(symbols);
var G__28906 = (function (){var iter__4582__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function datascript$query$iter__28725(s__28726){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function (){
var s__28726__$1 = s__28726;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28726__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var t1 = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__28726__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function datascript$query$iter__28725_$_iter__28727(s__28728){
return (new cljs.core.LazySeq(null,((function (s__28726__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function (){
var s__28728__$1 = s__28728;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__28728__$1);
if(temp__5735__auto____$1){
var s__28728__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28728__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__28728__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__28730 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__28729 = (0);
while(true){
if((i__28729 < size__4581__auto__)){
var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__28729);
cljs.core.chunk_append(b__28730,(function (){var res = cljs.core.aclone(t1);
var n__4666__auto___28909 = len;
var i_28910 = (0);
while(true){
if((i_28910 < n__4666__auto___28909)){
var temp__5739__auto___28911 = (copy_map[i_28910]);
if((temp__5739__auto___28911 == null)){
} else {
var idx_28912 = temp__5739__auto___28911;
(res[i_28910] = (t2[idx_28912]));
}

var G__28913 = (i_28910 + (1));
i_28910 = G__28913;
continue;
} else {
}
break;
}

return res;
})());

var G__28914 = (i__28729 + (1));
i__28729 = G__28914;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28730),datascript$query$iter__28725_$_iter__28727(cljs.core.chunk_rest(s__28728__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28730),null);
}
} else {
var t2 = cljs.core.first(s__28728__$2);
return cljs.core.cons((function (){var res = cljs.core.aclone(t1);
var n__4666__auto___28915 = len;
var i_28916 = (0);
while(true){
if((i_28916 < n__4666__auto___28915)){
var temp__5739__auto___28917 = (copy_map[i_28916]);
if((temp__5739__auto___28917 == null)){
} else {
var idx_28918 = temp__5739__auto___28917;
(res[i_28916] = (t2[idx_28918]));
}

var G__28919 = (i_28916 + (1));
i_28916 = G__28919;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__28725_$_iter__28727(cljs.core.rest(s__28728__$2)));
}
} else {
return null;
}
break;
}
});})(s__28726__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__))
,null,null));
});})(s__28726__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,datascript$query$iter__28725(cljs.core.rest(s__28726__$1)));
} else {
var G__28920 = cljs.core.rest(s__28726__$1);
s__28726__$1 = G__28920;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__))
;
return iter__4582__auto__(acc);
})();
var G__28907 = cljs.core.next(rels);
var G__28908 = symbols;
acc = G__28906;
rels = G__28907;
symbols = G__28908;
continue;
}
}
break;
}
}));

(datascript.query._collect.cljs$lang$maxFixedArity = 3);

datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context,symbols)));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((((!((var$ == null)))) && ((!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null)))))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
var x__4487__auto__ = (((var$ == null))?null:var$);
var m__4488__auto__ = (datascript.query._context_resolve[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__4488__auto__.call(null,var$,context));
} else {
var m__4485__auto__ = (datascript.query._context_resolve["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__4485__auto__.call(null,var$,context));
} else {
throw cljs.core.missing_protocol("IContextResolve.-context-resolve",var$);
}
}
}
});

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val(context,var$__$1.symbol);
}));

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),var$__$1.symbol], null));
}));

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_in_aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return datascript.query.resolve_sym(var$__$1.symbol);
}
}));

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
}));
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (element,fixed_value,i){
if(datascript.parser.aggregate_QMARK_(element)){
var f = datascript.query._context_resolve(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28731_SHARP_){
return datascript.query._context_resolve(p1__28731_SHARP_,context);
}),cljs.core.butlast(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28732_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28732_SHARP_,i);
}),tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__28734_SHARP_,p2__28735_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__28734_SHARP_) : pred.call(null,p1__28734_SHARP_)))){
return p2__28735_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of(cljs.core.complement(datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = (function (tuple){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28736_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__28736_SHARP_);
}),group_idxs);
});
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__4582__auto__ = (function datascript$query$aggregate_$_iter__28737(s__28738){
return (new cljs.core.LazySeq(null,(function (){
var s__28738__$1 = s__28738;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28738__$1);
if(temp__5735__auto__){
var s__28738__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28738__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__28738__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__28740 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__28739 = (0);
while(true){
if((i__28739 < size__4581__auto__)){
var vec__28741 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__28739);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28741,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28741,(1),null);
cljs.core.chunk_append(b__28740,datascript.query._aggregate(find_elements,context,tuples));

var G__28935 = (i__28739 + (1));
i__28739 = G__28935;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28740),datascript$query$aggregate_$_iter__28737(cljs.core.chunk_rest(s__28738__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28740),null);
}
} else {
var vec__28744 = cljs.core.first(s__28738__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28744,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28744,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__28737(cljs.core.rest(s__28738__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(grouped);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

datascript.query._post_process = (function datascript$query$_post_process(find,tuples){
if((((!((find == null)))) && ((!((find.datascript$query$IPostProcess$_post_process$arity$2 == null)))))){
return find.datascript$query$IPostProcess$_post_process$arity$2(find,tuples);
} else {
var x__4487__auto__ = (((find == null))?null:find);
var m__4488__auto__ = (datascript.query._post_process[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__4488__auto__.call(null,find,tuples));
} else {
var m__4485__auto__ = (datascript.query._post_process["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__4485__auto__.call(null,find,tuples));
} else {
throw cljs.core.missing_protocol("IPostProcess.-post-process",find);
}
}
}
});

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return tuples;
}));

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),tuples);
}));

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.ffirst(tuples);
}));

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.first(tuples);
}));
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__4582__auto__ = (function datascript$query$pull_$_iter__28747(s__28748){
return (new cljs.core.LazySeq(null,(function (){
var s__28748__$1 = s__28748;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28748__$1);
if(temp__5735__auto__){
var s__28748__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28748__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__28748__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__28750 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__28749 = (0);
while(true){
if((i__28749 < size__4581__auto__)){
var find = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__28749);
cljs.core.chunk_append(b__28750,((datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__28938 = (i__28749 + (1));
i__28749 = G__28938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28750),datascript$query$pull_$_iter__28747(cljs.core.chunk_rest(s__28748__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28750),null);
}
} else {
var find = cljs.core.first(s__28748__$2);
return cljs.core.cons(((datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__28747(cljs.core.rest(s__28748__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(find_elements);
})();
var iter__4582__auto__ = (function datascript$query$pull_$_iter__28751(s__28752){
return (new cljs.core.LazySeq(null,(function (){
var s__28752__$1 = s__28752;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28752__$1);
if(temp__5735__auto__){
var s__28752__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28752__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__28752__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__28754 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__28753 = (0);
while(true){
if((i__28753 < size__4581__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__28753);
cljs.core.chunk_append(b__28754,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__28753,tuple,c__4580__auto__,size__4581__auto__,b__28754,s__28752__$2,temp__5735__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__28756 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28756,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28756,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__28753,tuple,c__4580__auto__,size__4581__auto__,b__28754,s__28752__$2,temp__5735__auto__,resolved))
,resolved,tuple));

var G__28939 = (i__28753 + (1));
i__28753 = G__28939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28754),datascript$query$pull_$_iter__28751(cljs.core.chunk_rest(s__28752__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28754),null);
}
} else {
var tuple = cljs.core.first(s__28752__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__28752__$2,temp__5735__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__28759 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28759,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28759,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__28752__$2,temp__5735__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__28751(cljs.core.rest(s__28752__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(resultset);
});
datascript.query.query_cache = cljs.core.volatile_BANG_(datascript.lru.lru((100)));
datascript.query.memoized_parse_query = (function datascript$query$memoized_parse_query(q){
var temp__5737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(datascript.query.query_cache),q,null);
if((temp__5737__auto__ == null)){
var qp = datascript.parser.parse_query(q);
datascript.query.query_cache.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.query.query_cache.cljs$core$IDeref$_deref$arity$1(null),q,qp));

return qp;
} else {
var cached = temp__5737__auto__;
return cached;
}
});
datascript.query.q = (function datascript$query$q(var_args){
var args__4795__auto__ = [];
var len__4789__auto___28940 = arguments.length;
var i__4790__auto___28941 = (0);
while(true){
if((i__4790__auto___28941 < len__4789__auto___28940)){
args__4795__auto__.push((arguments[i__4790__auto___28941]));

var G__28942 = (i__4790__auto___28941 + (1));
i__4790__auto___28941 = G__28942;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.query.memoized_parse_query(q);
var find = new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements(find);
var find_vars = datascript.parser.find_vars(find);
var result_arity = cljs.core.count(find_elements);
var with$ = new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(find_vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),with$));
var q__$1 = (function (){var G__28765 = q;
if(cljs.core.sequential_QMARK_(q)){
return datascript.parser.query__GT_map(G__28765);
} else {
return G__28765;
}
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__28766 = resultset;
var G__28766__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28762_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__28762_SHARP_,(0),result_arity));
}),G__28766):G__28766);
var G__28766__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__28766__$1):G__28766__$1);
var G__28766__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__28766__$2):G__28766__$2);
return datascript.query._post_process(find,G__28766__$3);

}));

(datascript.query.q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(datascript.query.q.cljs$lang$applyTo = (function (seq28763){
var G__28764 = cljs.core.first(seq28763);
var seq28763__$1 = cljs.core.next(seq28763);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28764,seq28763__$1);
}));


//# sourceMappingURL=datascript.query.js.map