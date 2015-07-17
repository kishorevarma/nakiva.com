import { each, isFunction } from 'underscore';
import { EventEmitter } from 'events';
import shallowEqual from 'react-pure-render/shallowEqual';
import 'core-js';

const CHANGE_EVENT = 'change';

export function createStore(spec) {
	const emitter = new EventEmitter();
	emitter.setMaxListeners(0);

	/*
		Here we merge common store methods and methods which 
		are specific to store
	 */
	const store = Object.assign({
		emitChange() {
			emitter.emit(CHANGE_EVENT);
		},

		addChangeListener(callback) {
			emitter.on(CHANGE_EVENT, callback);
		},

		removeChangeListener(callback) {
			emitter.removeListener(CHANGE_EVENT, callback);
		}
	}, spec);

	
	// Auto-bind store methods for convenience
	each(store, (val, key) => {
		if (isFunction(val)) {
			store[key] = store[key].bind(store);
		}
	});

	return store;
}

/**
 * @param  {Object}	bag is a data store data
 * @param  {number} id specific field in store data
 * @return {Boolean}
 */	
export function isInBag(bag, id) {
	if (!bag[id]) {
		return false;
	}
	return true;
}

/**
 * @param  {Object} bag is a data store object 
 * @param  {Object} data which we need to merge into data store object
 * @return {undefined}
 */
export function mergeIntoBag(bag, entity) {
	var id = entity.id;
	if (!bag.hasOwnProperty(id)) {
		bag[id] = entity;
		bag.selected = id;

		//	we check the data has changed from the last fetch
	} else if (!shallowEqual(bag[id], entity[id])) {
		bag[id] = Object.assign({}, bag[id], entity);
	}
	
}
